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
                scope.selectallMdl = false;
                scope.Caste = scope.array !== undefined && scope.array !== "" && scope.array !== null && scope.array.length > 0 ? scope.array : [];
                scope.Castehide = scope.array !== undefined && scope.array !== "" && scope.array !== null ? false : true;
                scope.Castehide = scope.castehideval === 'castehid' ? true : false;
                scope.selectall = function() {

                    timeout(function() {
                        scope.checkVal = !scope.checkVal;
                        scope.selectallMdl = scope.selectallMdl ? false : true;
                        if (scope.selectallMdl) {
                            _.each(scope.Caste, function(item) {
                                scope.model.push(item.value);
                            });
                        } else {
                            scope.model = [];
                        }
                    }, 50);

                };
                scope.selectoption = function(checkedvalue) {
                    timeout(function() {

                        if (!scope.selectallMdl && scope.model.length === scope.array.length) {
                            scope.selectallMdl = true;
                            scope.model.push(0);
                            console.log(scope.model);
                            console.log(scope.array);
                        }
                        //else if (scope.selectallMdl && _.where(scope.model, function(item) { item !== 0 }).length === 0) {
                        else if (scope.selectallMdl && scope.model.length <= scope.array.length) {
                            console.log(scope.model.length);
                            console.log(scope.array.length);

                            scope.selectallMdl = false;
                            scope.model = [];
                            //scope.model.pop(0);
                        }
                    }, 50);
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