app.controller("supporttickets", ['$scope', 'customerProfilesettings', 'authSvc', 'alert',
    function(scope, customerProfilesettings, authSvc, alerts) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.supporttickets = [];
        scope.submitsupporttickets = function(pageid) {
            var obj = {
                PageID: pageid,
                CustID: scope.custid,
                TicketID: null,
                ProfileID: null,
                Complaint: null,
                FeedBackStatus: null
            };
            customerProfilesettings.getmysupporttickets(obj).then(function(response) {
                scope.supporttickets = [];

                _.each(response.data, function(item) {
                    scope.supporttickets = JSON.parse(item);

                });
            });
        };
        scope.pageinit = function() {
            scope.submitsupporttickets(1);
        };
        scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    scope.submitsupporttickets(1);
                    break;
                case 1:
                    scope.submitsupporttickets(2);
                    break;
                case 2:
                    scope.submitsupporttickets(3);
                    break;
                case 3:
                    scope.submitsupporttickets(4);
                    break;
            }
        });
        scope.reopenticket = function(ticketid) {
            customerProfilesettings.getopenticket(6, "", ticketid).then(function(response) {
                if (response.data == 1) {
                    alerts.open("Your ticket have been reopened successfully", "success");
                    scope.supporttickets = [];
                    scope.submitsupporttickets(3);
                } else {
                    alerts.open("Failed please contact admin", "warning");
                }

            });
        };
    }
]);