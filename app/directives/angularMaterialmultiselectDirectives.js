app.directive("angularMultiselect", ["$injector", 'authSvc', 'successstoriesdata', function($injector, authSvc, successstoriesdata) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    return {
        restrict: "E",

        scope: {
            array: '=',
            change: '=',
            model: '='
        },

        templateUrl: "templates/angualarMaterialmultiselect.html",
        link: function(scope, element, attrs) {
            scope.Caste = scope.array;
            scope.model = scope.model;
            scope.selectall = function() {
                if (scope.model.length === scope.Caste.length) {
                    scope.model = [];
                } else if (scope.model.length === 0 || scope.model.length > 0) {
                    _.each(scope.Caste, function(item) {
                        scope.model.push(item.value);
                    });
                };
            };
            scope.isChecked = function() {
                return scope.model.length === scope.Caste.length;
            };
            scope.exists = function(item) {
                return scope.Caste.indexOf(item) > -1;
            };
            // scope.keydownevent = function(ev) {
            //     //alert(2);
            //     ev.stopPropagation();
            // };
            element.find('input').on('keydown', function(ev) {

                ev.stopPropagation();
            });
        }
    };
}]);