app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getexpressintersetdata: function(object) {
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
        Viewprofile: function(logcustid, tocustid, selfflag) {

            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: tocustid, CustID: logcustid, RelationshipID: selfflag } });
        },
        Viewprofileflags: function(logcustid, tocustid) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: logcustid, ToCustID: tocustid } });
        },
        communicationhistorychats: function(obj) {
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        },
        acceptrejectexpressinterest: function(fromid, toid, logid, type, empid) {

            return http.get(app.apiroot + 'DashboardRequest/getInsertCustomerExpressinterest', { params: { fromcustid: fromid, tocustid: toid, logID: logid, interstTYpe: type, empid: "" } });
        },
        photopasswordactioninsert: function(fromcustid, tocustid, type) {
            return http.get(app.apiroot + 'StaticPages/getPhotopasswordAcceptReject', { params: { FromcustID: 91022, TocustID: 91035, Accept_Reject: type } });
        },
        getprofilegrade: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getprofileGrade', { params: { CustID: custid } });
        },
        getphotoslideimages: function(custid) {
            return http.get(app.apiroot + 'StaticPages/GetPhotoSlideImages', { params: { CustID: custid } });
        }
    };
}]);