package cassandrabackup

import (
	"context"
	"fmt"
	"github.com/Orange-OpenSource/casskop/pkg/controller/common"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/record"
	"sigs.k8s.io/controller-runtime/pkg/client/fake"
	"testing"

	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"

	api "github.com/Orange-OpenSource/casskop/pkg/apis/db/v2"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
)

var cbyaml = `
apiVersion: db.orange.com/v2
kind: CassandraBackup
metadata:
  name: test-cassandra-backup
  namespace: default
  labels:
    app: cassandra
  annotations:
    a1: v1
spec:
  cassandracluster: test-cluster-dc1
  cluster: test-cluster
  datacenter: dc1
  storageLocation: s3://cassie
  snapshotTag: SnapshotTag2
  secret: cloud-backup-secrets
`

func HelperInitCassandraBackupController(cassandraBackupYaml string) (*ReconcileCassandraBackup,
	*api.CassandraBackup, *record.FakeRecorder) {
	cassandraBackup := common.HelperInitCassandraBackup(cassandraBackupYaml)

	cassandraBackupList := api.CassandraBackupList{
		TypeMeta: metav1.TypeMeta{
			Kind:       "CassandraBackupList",
			APIVersion: api.SchemeGroupVersion.String(),
		},
	}

	// Register operator types with the runtime scheme.
	fakeClientScheme := scheme.Scheme
	fakeClientScheme.AddKnownTypes(api.SchemeGroupVersion, &api.CassandraCluster{})
	fakeClientScheme.AddKnownTypes(api.SchemeGroupVersion, &api.CassandraClusterList{})
	fakeClientScheme.AddKnownTypes(api.SchemeGroupVersion, &cassandraBackup)
	fakeClientScheme.AddKnownTypes(api.SchemeGroupVersion, &cassandraBackupList)

	objs := []runtime.Object{
		&cassandraBackup,
	}

	fakeClient := fake.NewFakeClientWithScheme(fakeClientScheme, objs...)

	fakeRecorder := record.NewFakeRecorder(3)
	reconcileCassandraBackup := ReconcileCassandraBackup{
		client:   fakeClient,
		scheme:   fakeClientScheme,
		recorder: fakeRecorder,
	}

	return &reconcileCassandraBackup, &cassandraBackup, fakeRecorder
}

func TestCassandraBackupAlreadyExists(t *testing.T) {
	assert := assert.New(t)
	reconcileCassandraBackup, cassandraBackup, recorder := HelperInitCassandraBackupController(cbyaml)

	oldBackup := cassandraBackup.DeepCopy()
	oldBackup.Status = api.BackRestStatus{
		CoordinatorMember: "node1",
		Condition: &api.BackRestCondition{
			Type: "COMPLETED",
		},
		Progress:          "Done",
	}
	oldBackup.Name = "prev-test-cassandra-backup"
	reconcileCassandraBackup.client.Create(context.TODO(), oldBackup)

	req := reconcile.Request{
		NamespacedName: types.NamespacedName{
			Name:      cassandraBackup.Name,
			Namespace: cassandraBackup.Namespace,
		},
	}

	res, err := reconcileCassandraBackup.Reconcile(req)

	assert.Equal(reconcile.Result{}, res)
	assert.Nil(err)
	common.AssertEvent(t, recorder.Events, fmt.Sprintf("%s because such backup already exists", cassandraBackup.Spec.SnapshotTag))
}

func TestCassandraBackupSecretNotFound(t *testing.T) {
	assert := assert.New(t)
	reconcileCassandraBackup, cassandraBackup, recorder := HelperInitCassandraBackupController(cbyaml)

	req := reconcile.Request{
		NamespacedName: types.NamespacedName{
			Name:      cassandraBackup.Name,
			Namespace: cassandraBackup.Namespace,
		},
	}

	res, err := reconcileCassandraBackup.Reconcile(req)

	assert.Equal(reconcile.Result{}, res)
	assert.Nil(err)
	common.AssertEvent(t, recorder.Events, fmt.Sprintf("Secret %s used for backups was not found", cassandraBackup.Spec.Secret))
}

func TestCassandraBackupIncorrectAwsCreds(t *testing.T) {
	assert := assert.New(t)
	cassandraBackup := common.HelperInitCassandraBackup(cbyaml)

	reqLogger := logrus.WithFields(logrus.Fields{"Name": "controller_cassandrabackup"})

	secret := &corev1.Secret{
		Data: map[string][]byte{
			"awssecretaccesskey": []byte("a secret"),
			"awsaccesskeyid":     []byte("an access key"),
		},
	}

	resp := validateBackupSecret(secret, &cassandraBackup, reqLogger)
	assert.Contains(resp.Error(),
		"There is no awsregion property while you have set both awssecretaccesskey and awsaccesskeyid")

	secret.Data["awsregion"] = []byte("a region")
	resp = validateBackupSecret(secret, &cassandraBackup, reqLogger)
	assert.Nil(resp)
}

func TestCassandraBackupDatacenterNotFound(t *testing.T) {
	assert := assert.New(t)
	reconcileCassandraBackup, cb, recorder := HelperInitCassandraBackupController(cbyaml)

	secret := &corev1.Secret{
		ObjectMeta: metav1.ObjectMeta{
			Name:      cb.Spec.Secret,
			Namespace: cb.Namespace,
		},
		Data: map[string][]byte{
			"awssecretaccesskey": []byte("a secret"),
			"awsaccesskeyid":     []byte("an access key"),
			"awsregion":          []byte("a region"),
		},
	}

	reconcileCassandraBackup.client.Create(context.TODO(), secret)

	req := reconcile.Request{
		NamespacedName: types.NamespacedName{
			Name:      cb.Name,
			Namespace: cb.Namespace,
		},
	}

	res, err := reconcileCassandraBackup.Reconcile(req)

	assert.Equal(reconcile.Result{}, res)
	assert.Nil(err)
	common.AssertEvent(t, recorder.Events, fmt.Sprintf("Datacenter %s of cluster %s to backup not found",
		cb.Spec.Datacenter, cb.Spec.CassandraCluster))
}
