app.controller("upgrademembership", ['$scope', '$interval', 'myAppFactory',
    'authSvc', 'alert', 'route',
    function(scope, $interval, myAppFactory, authSvc, alerts, route) {
        scope.paymentarray = [];
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        myAppFactory.getpayment(scope.custid).then(function(response) {

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

        scope.selectpaymantoption = function(membershipd, amount, profilecount, discount, custid, servicename, year) {
            var paymentobject = {
                MembershipID: membershipd,
                Amount: amount,
                Points: profilecount,
                DiscountID: discount,
                CustID: custid,
                MembershipName: servicename,
                Duration: year
            };
            sessionStorage.setItem("paymentobject", JSON.stringify(paymentobject));
            route.go("paymentresponse", {});
        };
        scope.sendsmspayment = function(payment) {
            myAppFactory.sendsms(15, scope.custid, payment.mobilenumber).then(function(response) {
                alerts.open("Thanks ! You shall be contacted soon by our priority manager", 'success');
            });
        };
        scope.ccavenuepage = function() {
            window.open("https://secure.ccavenue.com/transaction/TransactionInitiator", "_self");

        };
    }
]);