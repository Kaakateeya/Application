app.controller("viewmyprofile", ['customerDashboardServices', '$scope', function(customerDashboardServices, scope) {
    customerDashboardServices.Viewprofile().then(function(response) {
        scope.arr = [];
        scope.personalinfo = [];
        _.each(response.data, function(item) {
            var testArr = JSON.parse(item);
            scope.arr.push({ header: testArr[0].TableName, value: testArr });
        });
        console.log(scope.arr);
    });
}]);