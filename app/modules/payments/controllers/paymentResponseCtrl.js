app.controller('paymentresponse', ['$scope', 'route',
    function(scope, route) {
        scope.pageloadpayment = function() {
            scope.paymentobject = JSON.parse(sessionStorage.getItem("paymentobject"));
        };
        scope.backtopayment = function() {
            route.go('UpgradeMembership', {});
        };

    }
]);