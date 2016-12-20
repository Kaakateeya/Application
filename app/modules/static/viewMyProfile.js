app.controller("viewmyprofile", ['customerDashboardServices', '$scope', function(customerDashboardServices, scope) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    var localcustid = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
    var locallogid = sessionStorage.getItem("locallogid");

    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    customerDashboardServices.Viewprofile().then(function(response) {
        scope.arr = [];
        scope.personalinfo = {};
        scope.aboutmyself = {};
        _.each(response.data, function(item) {
            var testArr = JSON.parse(item);
            if (testArr[0].TableName === "About") {
                scope.aboutmyself = testArr;

            } else if (testArr[0].TableName === "Primary") {
                scope.personalinfo = testArr;

            } else {
                scope.arr.push({ header: testArr[0].TableName, value: testArr });
            }
        });

    });

    customerDashboardServices.Viewprofileflags().then(function(response) {

    });
}]);