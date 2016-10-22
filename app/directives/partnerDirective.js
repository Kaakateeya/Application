app.directive("partnerData", function() {
    return {
        restrict: "E",
        scope: {
            array: '='
        },
        templateUrl: "templates/Commonpartnerprofiles.html",
        link: function(scope, element, attrs) {
            scope.startindex = 1;
            scope.endindex = 9;
            scope.flag = 9;
            scope.loaderspin = false;
            scope.Norowsend = false;
            scope.PartnerProfilesnew = scope.array;
            scope.typeofdiv = "Grid";
            var i = 0;
            scope.directivepaging = function() {
                scope.loaderspin = true;
                scope.loadmore = false;
                scope.flag += 9;
                scope.startindex = scope.flag - 8;
                scope.endindex = scope.flag;
                scope.$emit('directivecallingpaging', scope.startindex, scope.endindex);
            };
            scope.$on('loadmore', function(event, endflag) {
                scope.loaderspin = false;

                if (scope.array.length > 0) {
                    scope.endindex = (scope.array[0].TotalRows > scope.endindex == true) ? scope.endindex : scope.array[0].TotalRows;
                    scope.loadmore = (scope.array[0].TotalRows > scope.endindex) ? true : false;
                    scope.Norowsend = (scope.array[0].TotalRows === scope.endindex) ? true : false;
                }

            });
            scope.$watch('array', function(value) {

                scope.PartnerProfilesnew = scope.array;
                if (scope.array.length > 0) {
                    scope.loadmore = scope.array[0].TotalRows > 9 || scope.array[0].TotalRows > scope.endindex ? true : false;
                    scope.Norowsend = scope.array[0].TotalRows < 9 || scope.array[0].TotalRows < scope.endindex ? true : false;
                    scope.startindex = 1;
                    scope.endindex = 9;
                    scope.flag = 9;
                }

            });
        }
    }
});