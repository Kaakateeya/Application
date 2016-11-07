app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getexpressintersetdata: function(object) {
            debugger;
            return http.post(app.apiroot + 'DashboardRequest/ExpressInterestSelectrequest', object);

        },
        getCustometDashBoardchats: function(object) {
            return http.get(app.apiroot + 'DashboardRequest/getCustometExpressIntrestDashBoardchats', { params: object });
        },
        insertcustomerservices: function(object) {
            return http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object);
        },
        Tickethistory: function(Ticketid, Type) {
            return http.get(app.apiroot + 'DashboardRequest/GetTicketinformation', { params: { Ticketid: Ticketid, Type: Type } });
        },
        Viewprofile: function() {
            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: 91035, CustID: 91022 } })
        },
        Viewprofileflags: function() {
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: 91035, ToCustID: 91022 } });
        },
        communicationhistorychats: function(obj) {
            debugger;
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        }
    };
}]);