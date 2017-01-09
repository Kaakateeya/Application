app.controller('paymentresponse', ['$scope', 'route', 'myAppFactory',
    function(scope, route, myAppFactory) {
        scope.pageloadpayment = function() {
            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
            console.log(scope.paymentobject);
            scope.randomNumbers = Math.round((Math.random() * 100) * 100);
            scope.orderid = "Ord_" + scope.paymentobject.CustID + "_" + scope.randomNumbers;

        };
        scope.backtopayment = function() {
            route.go('UpgradeMembership', {});
        };
        scope.paymentinsert = function() {

            var obj = {
                intCustID: scope.paymentobject.CustID,
                intMembershipID: scope.paymentobject.MembershipID,
                DiscountID: scope.paymentobject.DiscountID !== "" ? scope.paymentobject.DiscountID : null,
                Points: scope.paymentobject.Points,
                MembershipName: scope.paymentobject.MembershipName,
                Duration: scope.paymentobject.Duration,
                MembershipAmount: scope.paymentobject.Amount
            };
            myAppFactory.Paymentinsert(obj).then(function(response) {

                console.log(response);
            });

        };
    }
]);