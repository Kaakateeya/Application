app.directive("alertDirective", ['commonFactory', '$uibModal', '$timeout',

    function(commonFactory, uibModal, timeout) {
        var modalinstance;
        return {
            restrict: "E",
            templateUrl: "templates/oldAlert.html",
            link: function(scope, element, attrs) {

                scope.$on('showAlertPopupccc', function(event, cls, msg, time) {
                    scope.typecls = cls;
                    scope.msgs = msg;
                    modalinstance = uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'oldAlert.html',
                        scope: scope
                    });
                    timeout(function() {
                        scope.close();
                    }, time || 4500);
                });
                scope.close = function() {
                    modalinstance.close();
                };
            }
        };
    }
]);