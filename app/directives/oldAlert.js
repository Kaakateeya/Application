app.directive("alertDirective", ['commonFactory', '$uibModal', '$timeout', '$sce',
    function(commonFactory, uibModal, timeout, $sce) {
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
                    if (scope.msgs === "upgrade") {

                    } else {
                        scope.msgs = $sce.trustAsHtml(msg);
                        timeout(function() {
                            scope.close();
                        }, time || 4500);
                    }
                });
                scope.close = function() {
                    modalinstance.close();
                };
            }
        };
    }
]);