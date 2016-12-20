app.controller("myorders", ['$scope', 'customerProfilesettings', 'authSvc',
    function(scope, customerProfilesettings, authSvc) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.myorders = [];
        scope.pageinit = function() {
            customerProfilesettings.getmyorderspayments(scope.custid).then(function(response) {
                scope.myorders = [];

                _.each(response.data, function(item) {
                    scope.myorders = JSON.parse(item);

                });
            });
        };
    }
]);