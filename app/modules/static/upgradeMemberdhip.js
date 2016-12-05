app.controller("upgrademembership", ['$scope', '$interval', 'myAppFactory', 'authSvc', function(scope, $interval, myAppFactory, authSvc) {
    scope.paymentarray = [];
    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    myAppFactory.getpayment(scope.custid).then(function(response) {
        console.log(response);
        scope.paymentarray = [];
        scope.paymentarray.push({
            MembershipName: "Services & Features",
            MembershipAmount: "My Plans",
            AllottedServicePoints: "Profile Count",
            onlineaccess: "Online Access",
            offlineaccess: "Offline Access"
        });
        _.each(response.data, function(item) {
            scope.paymentarray.push(item);
        });
    });

}]);