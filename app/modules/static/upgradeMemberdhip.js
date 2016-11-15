app.controller("upgrademembership", ['$scope', '$interval', function(scope, $interval) 
{
 var  j= 0, counter = 0;
 
    scope.activated = true;
    scope.determinateValue = 30;
    scope.determinateValue2 = 30;
    scope.showList = [ ];
   scope.items = [];
        for (var i = 0; i < 1000; i++) {
          scope.items.push(i);
        }
    $interval(function() {
      scope.determinateValue += 1;
      scope.determinateValue2 += 1.5;
      if (scope.determinateValue > 100) scope.determinateValue = 30;
      if (scope.determinateValue2 > 100) scope.determinateValue2 = 30;
        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars
        if ( (j < 2) && !scope.showList[j] && scope.activated ) {
          scope.showList[j] = true;
        }
        if ( counter++ % 4 == 0 ) j++;
        // Show the indicator in the "Used within Containers" after 200ms delay
        if ( j == 2 ) scope.contained = "indeterminate";
    }, 100, 0, true);

    
}]);