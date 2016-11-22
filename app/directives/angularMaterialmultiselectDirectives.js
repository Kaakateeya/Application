app.directive("angularMultiselect", ["$injector", 'authSvc', 'successstoriesdata', function($injector, authSvc, successstoriesdata) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    return {
        restrict: "E",
        scope: {
            array: '='
        },
        templateUrl: "templates/angualarMaterialmultiselect.html",
        link: function(scope, element, attrs) {
            scope.selectcaste = [];
            scope.Caste = scope.array;
            scope.selectall = function() {
                if (scope.selectcaste.length === scope.Caste.length) {
                    scope.selectcaste = [];
                } else if (scope.selectcaste.length === 0 || scope.selectcaste.length > 0) {
                    _.each(scope.Caste, function(item) {
                        scope.selectcaste.push(item.value);
                    });
                };
            };
            scope.isChecked = function() {
                return scope.selectcaste.length === scope.Caste.length;
            };
            scope.exists = function(item) {
                return scope.Caste.indexOf(item) > -1;
            };
        }
    };
}]);