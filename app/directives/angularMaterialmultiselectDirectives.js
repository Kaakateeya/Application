app.directive("angularMultiselect", ["$injector", 'authSvc',
    'successstoriesdata', 'alert', '$timeout', 'helperservice',
    function($injector, authSvc, successstoriesdata, alerts, timeout, helperservice) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        return {
            restrict: "E",
            scope: {
                array: '=',
                type: '=',
                model: '=',
                castehideval: '@',
                id: '='
            },
            templateUrl: "templates/angualarMaterialmultiselect.html",
            link: function(scope, element, attrs) {
                scope.selectallMdl = false;
                scope.IDs = scope.id;
                scope.Caste = helperservice.checkarraylength(scope.array) ? scope.array : [];
                scope.Castehide = helperservice.checkstringvalue(scope.array) ? false : true;
                scope.Castehide = scope.castehideval === 'castehid' ? true : false;
                scope.$watch('array', function() {
                    scope.Caste = helperservice.checkarraylength(scope.array) ? scope.array : [];
                });
                scope.$watch('model', function(current, old) {
                    if (helperservice.checkstringvalue(scope.array) && scope.array.length > 100 && helperservice.checkstringvalue(scope.model) && scope.model.length > 100) {
                        if (scope.model.length === scope.array.length) {
                            scope.model = null;
                        }
                    } else if (helperservice.checkarraylength(scope.model)) {
                        scope.model = current;
                    }
                });
                scope.directivechangeevent = function(model) {
                    scope.$emit('directivechangeevent', model, scope.type);
                };
                scope.applycolorsdirecive = function(value, id) {
                    var colors = "selectborderclass";
                    if (value !== 0 && value !== "0" && helperservice.checkarraylength(value)) {
                        if (value.toString() !== "0") {
                            colors = "selectborderclasscolor";
                            $('#' + id).next().find('button').addClass("bacg");
                        }
                    } else {
                        colors = "selectborderclass";
                        $('#' + id).next().find('button').removeClass("bacg");
                    }
                    return colors;
                };

            }
        };
    }
]);