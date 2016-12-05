app.controller("supporttickets" ['$scope', 'customerProfilesettings', 'authSvc',
    function(scope, customerProfilesettings, authSvc) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.supporttickets = [];
        scope.pageinit = function() {
            var obj = {
                PageID: 1,
                CustID: scope.custid,
                TicketID:null,
                 ProfileID:null, Complaint:null,
                  FeedBackStatus:null
            };
            customerProfilesettings.getmysupporttickets(obj).then(function(response) {
                scope.supporttickets = [];
                console.log(response);
                _.each(response.data, function(item) {
                    scope.supporttickets = JSON.parse(item);
                    console.log(scope.supporttickets);
                });
            });
        };
    }
]);