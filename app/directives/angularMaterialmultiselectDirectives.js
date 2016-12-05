app.directive("angularMultiselect", ["$injector", 'authSvc', 'successstoriesdata', function($injector, authSvc, successstoriesdata) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    return {
        restrict: "E",

        scope: {
            array: '=',
            type: '=',
            model: '='
        },

        templateUrl: "templates/angualarMaterialmultiselect.html",
        link: function(scope, element, attrs) {
            scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null ? scope.array : [];
            scope.selectall = function() {
                if (scope.model.length === scope.Caste.length) {
                    scope.model = [];
                } else if (scope.model.length === 0 || scope.model.length > 0) {
                    _.each(scope.Caste, function(item) {
                        scope.model.push(item.value);
                    });
                }
            };
            scope.isChecked = function() {
                return scope.model.length === scope.Caste.length;
            };
            scope.exists = function(item) {
                return scope.Caste.indexOf(item) > -1;
            };

            element.find('input').on('keydown', function(ev) {
                ev.stopPropagation();
            });
            scope.$watch('array', function() {
                scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null ? scope.array : [];
            });
            scope.directivechangeevent = function(model) {

                scope.$emit('directivechangeevent', model, scope.type);
            };
        }
    };
}]);