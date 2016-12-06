app.controller('paymentresponse', ['$scope',
    function(scope) {
        scope.pageloadpayment = function() {

            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
            console.log(scope.paymentobject);
        };
        scope.backtopayment = function() {
            var realpath = '#/UpgradeMembership';
            window.open(realpath, "_self");
        };

    }
]);