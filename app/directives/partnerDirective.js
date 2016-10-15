
app.directive("partnerData", function () {
    return {
        restrict: "E",
        scope: {
            array: '='
        },
        templateUrl: "templates/Commonpartnerprofiles.html",
        link: function (scope, element, attrs) {
            scope.startindex = 1;
            scope.endindex = 9;
            scope.flag = 9;
            scope.loaderspin = false;
            scope.PartnerProfilesnew = scope.array;
            scope.typeofdiv = "Grid";
            if(scope.array.length>0){
                scope.loadmore=scope.array[0].TotalRows>9?true:false;
                alert(scope.loadmore);

            }
            scope.paging = function () {
                scope.loaderspin = true;
                scope.loadmore = false;
                scope.flag += 9;
                scope.startindex = scope.flag - 8;
                scope.endindex = scope.flag;
                scope.$emit('paging', scope.startindex, scope.endindex);
            };
            scope.$on('loadmore', function (event, endflag) {
               
                    scope.loaderspin = false;
                    scope.loadmore = true;
                    scope.Norowsend = false;
                
            });
            scope.$watch('array', function(value) {
            scope.PartnerProfilesnew = scope.array;
             if(scope.array.length>0){
                scope.loadmore=scope.array[0].TotalRows>9?true:false;
                scope.Norowsend=scope.array[0].TotalRows<9?true:false;

            }
              
            });
        }
    }
});

