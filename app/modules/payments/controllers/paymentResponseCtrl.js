app.controller('payment', ['$scope', '$element', 'arrayConstants', 'SelectBindServiceApp', 'customerDashboardServices', function(scope, $element, arrayConstants, service, customerDashboardServices) {
       scope.Mothertongue = arrayConstants.Mothertongue;
    scope.mothertongue = [1, 2, 3];
scope.mothertongueccc=[1,2,3];
    
scope.generalsearchsubmit=function()
{
alert(scope.mothertongue);  
alert(scope.mothertongueccc);  
};
}]);