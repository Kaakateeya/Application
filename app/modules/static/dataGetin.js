
app.controller('ModalDemoCtrl', function ($uibModal, $log, $scope) {
  $scope.ddlvals = "aaaa";
  $scope.ddltest="bbb";
  $scope.ggg="ddlone";
  $scope.ddltest="ddltwo";
  var $ctrl = this;
  
  $ctrl.items = ['item1', 'item2', 'item3'];
  $scope.obj1 = [
    { label: "aaaa", title: "aaaa", value: "1" }
    , { label: "bbb", title: "bbb", value: "2" }
    , { label: "ccc", title: "ccc", value: "3" }
    , { label: "ddd", title: "ddd", value: "4" }

  ];
    $scope.obj2 = [
    { label: "lll", title: "lll", value: "1" }
    , { label: "kkk", title: "kkk", value: "2" }
    , { label: "jjj", title: "jjj", value: "3" }
    , { label: "hhh", title: "hhh", value: "4" }

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
   $scope.obj2= [
    { label: "1111", title: "111", value: "1" }
    , { label: "222", title: "222", value: "2" }
    , { label: "333", title: "333", value: "3" }
    , { label: "444", title: "444", value: "4" }

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
