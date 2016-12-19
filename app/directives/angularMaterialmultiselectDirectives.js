app.directive("angularMultiselect", ["$injector", 'authSvc',
    'successstoriesdata', 'alert', '$timeout',
    function($injector, authSvc, successstoriesdata, alerts, timeout) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        return {
            restrict: "E",

            scope: {
                array: '=',
                type: '=',
                model: '=',
                castehideval: '@'
            },

            templateUrl: "templates/angualarMaterialmultiselect.html",
            link: function(scope, element, attrs) {
                scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null && scope.array.length > 0 ? scope.array : [];
                scope.Castehide = scope.array !== undefined && scope.array !== "" && scope.array !== null ? false : true;
                scope.Castehide = scope.castehideval === 'castehid' ? true : false;
                scope.selectall = function() {
                    timeout(function() {
                        scope.checkVal = !scope.checkVal;
                        if (scope.model === undefined)
                            scope.model = [];
                        if (scope.model.length === parseInt(scope.Caste.length)) {
                            scope.model = [];
                        } else if (scope.model.length === 1 || scope.model.length !== parseInt(scope.Caste.length)) {
                            _.each(scope.Caste, function(item) {
                                scope.model.push(item.value);
                            });
                        }
                    }, 50);
                };
                // scope.isChecked = function() {
                //     return scope.model.length === scope.Caste.length;
                // };
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

                scope.applycolorsdirecive = function(value) {
                    var colors = "selectborderclass";
                    if (value !== 0 && value !== "0" && value !== "" && value !== undefined) {
                        colors = "selectborderclasscolor";
                    } else {
                        colors = "selectborderclass";
                    }
                    return colors;
                };

            }
        };
    }
]);