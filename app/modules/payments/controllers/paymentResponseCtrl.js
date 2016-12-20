app.controller('paymentresponse', ['$scope',
    function(scope) {
        scope.pageloadpayment = function() {
            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
        };
        scope.backtopayment = function() {
            var realpath = '#/UpgradeMembership';
            window.open(realpath, "_self");
        };

    }
]);