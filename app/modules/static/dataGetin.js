app.controller('ModalDemoCtrl', function ($uibModal, $log, $scope) {
  $scope.ddlvals = "aaaa";
  var $ctrl = this;

  $scope.items = ['item1', 'item2', 'item3'];
  $scope.obj1 = [
    { label: "aaaa", title: "aaaa", value: "1" }
    , { label: "bbb", title: "bbb", value: "2" }
    , { label: "ccc", title: "ccc", value: "3" }
    , { label: "ddd", title: "ddd", value: "4" }

  ];
  $scope.selectedvals = [2, 3];
  $ctrl.animationsEnabled = true;
  $ctrl.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

  };

  $scope.DropDownChnaged = function () {
    $scope.DropDownStatus = $scope.dropValue;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, $scope) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };
  $scope.obj1 = [
    { label: "aaaa", title: "aaaa", value: "1" }
    , { label: "bbb", title: "bbb", value: "2" }
    , { label: "ccc", title: "ccc", value: "3" }
    , { label: "ddd", title: "ddd", value: "4" }

  ];
  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


function getvalues(test) {
  debugger;
  var countries = [];
  $.each($("#" + test + " option:selected"), function () {
    countries.push($(this).val());
  });
  alert(JSON.stringify(countries));
}