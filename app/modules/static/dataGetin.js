



app.controller('ModalDemoCtrl', function ($uibModal, $log, $scope) {
  $scope.animationsEnabled = true;

  $scope.open = function (id) {
    $scope.divid = id;
    $scope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      scope: $scope
    });
  };
  $scope.ok = function () {
    $scope.modalInstance.close();
  };

  $scope.cancel = function () {
    $scope.modalInstance.dismiss();
  };

});

