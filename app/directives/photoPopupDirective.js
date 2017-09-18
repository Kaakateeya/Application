app.directive("photoPopupalbum", ["$injector", 'authSvc', 'successstoriesdata', '$uibModal', function($injector, authSvc, successstoriesdata, uibModal) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    var modalinstance;
    return {
        restrict: "E",
        scope: {
            arrayphotos: '='
        },
        templateUrl: "templates/photopopup.html",
        link: function(scope, element, attrs) {
            var vvv = scope.arrayphotos;
            if (scope.arrayphotos === 1) {
                modalinstance = uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: "photopopup.html",
                    size: 'lg'
                });
            }
            scope.closepopup = function() {
                modalinstance.close();
            };
        }
    };
}]);