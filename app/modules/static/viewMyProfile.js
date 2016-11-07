app.controller("viewmyprofile", ['customerDashboardServices', '$scope', function(customerDashboardServices, scope) {
    customerDashboardServices.Viewprofile().then(function(response) {
        scope.arr = [];
        scope.personalinfo = {};
        scope.aboutmyself = {};
        _.each(response.data, function(item) {
            var testArr = JSON.parse(item);
            if (testArr[0].TableName === "About") {
                scope.aboutmyself = testArr;
                console.log(scope.aboutmyself);
            } else if (testArr[0].TableName === "Primary") {
                scope.personalinfo = testArr;
                console.log(scope.personalinfo);
            } else {
                scope.arr.push({ header: testArr[0].TableName, value: testArr });
            }
        });
        console.log(scope.arr);
    });

    customerDashboardServices.Viewprofileflags().then(function(response) {
        console.log(response);
    });
}]);