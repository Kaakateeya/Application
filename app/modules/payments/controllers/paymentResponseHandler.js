app.controller('ccavenueresponsectrl', ['$scope', '$stateParams', '$http', 'alert', 'myAppFactory',
    function(scope, stateParams, http, alerts, myAppFactory) {
        console.log(stateParams.data);
        scope.paymentobject = {};
        scope.orderid = '';
        scope.trackingID = '';
        scope.orderStatus = '';
        scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
        http.post('/decrypt', JSON.stringify({ keyname: stateParams.data })).then(function(response) {
            console.log(response.data);
            if (response.data !== undefined && response.data !== null) {
                var paymentStatus = (response.data).split(',');
                console.log(paymentStatus);
                scope.orderid = paymentStatus[0].split('=')[1];
                scope.trackingID = paymentStatus[1].split('=')[1];
                scope.orderStatus = paymentStatus[3].split('=')[1];
                if (scope.orderStatus === 'Success') {
                    scope.paymentinsert();
                    sessionStorage.setItem('cust.paidstatus', 1);
                    alerts.timeoutoldalerts(scope, 'alert-success', 'your transaction was successful', 3000);
                } else if (scope.orderStatus === 'Aborted') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'You have aborted the transaction', 3000);
                } else if (scope.orderStatus === 'Failure') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'Your transaction failed', 3000);
                } else if (scope.orderStatus === 'Invalid') {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'Some error occured while transaction', 3000);
                }
            }
        });

        console.log(scope.paymentobject);
        scope.points = scope.paymentobject.Points;
        scope.MembershipName = scope.paymentobject.MembershipName;
        scope.Duration = scope.paymentobject.Duration;
        scope.MembershipAmount = scope.paymentobject.Amount;
        scope.ExpiryDate = moment().add(scope.Duration, 'M').format("DD-MM-YYYY");
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