app.directive("angularMultiselect", ["$injector", 'authSvc', 'successstoriesdata', function($injector, authSvc, successstoriesdata) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    return {
        restrict: "E",
        require: 'ng-model',
        scope: {
            array: '=',
            change: '=',
            ngModel: '='
        },

        templateUrl: "templates/angualarMaterialmultiselect.html",
        link: function(scope, element, attrs) {
            scope.selectcaste = [];
            scope.Caste = scope.array;
            alert(scope.ngModel);
            scope.selectcaste = scope.ngModel;
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
            // scope.keydownevent = function(ev) {
            //     //alert(2);
            //     ev.stopPropagation();
            // };
            element.find('input').on('keydown', function(ev) {

                ev.stopPropagation();
            });
            scope.onchange = function() {

                scope.ngModel = scope.selectcaste;
                alert(scope.ngModel);
                //scope.$apply();

            }
            scope.$watch('ngModel', function() {

                alert("watch");
                scope.ngModel = scope.selectcaste;
                scope.$apply();
            });
        }
    };
}]);