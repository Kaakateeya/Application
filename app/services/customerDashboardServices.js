app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage, exactflag) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid, DashboardType: exactflag } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage, exactflag) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid, DashboardType: exactflag } });
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

            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: (tocustid !== "" && tocustid !== undefined) ? tocustid : null, CustID: (logcustid !== "" && logcustid !== undefined) ? logcustid : null, RelationshipID: selfflag } });
        },
        Viewprofileflags: function(logcustid, tocustid) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: (logcustid !== "" && logcustid !== undefined) ? logcustid : null, ToCustID: (tocustid !== "" && tocustid !== undefined) ? tocustid : null } });
        },
        communicationhistorychats: function(obj) {
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        },
        acceptrejectexpressinterest: function(fromid, toid, logid, type, empid) {

            return http.get(app.apiroot + 'DashboardRequest/getInsertCustomerExpressinterest', { params: { fromcustid: fromid, tocustid: toid, logID: logid, interstTYpe: type, empid: "" } });
        },
        photopasswordactioninsert: function(fromcustid, tocustid, type) {
            return http.get(app.apiroot + 'StaticPages/getPhotopasswordAcceptReject', { params: { FromcustID: fromcustid, TocustID: tocustid, Accept_Reject: type } });
        },
        getprofilegrade: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getprofileGrade', { params: { CustID: custid } });
        },
        getphotoslideimages: function(custid) {
            return http.get(app.apiroot + 'StaticPages/GetPhotoSlideImages', { params: { CustID: custid } });
        },
        getNotifications: function(obj) {
            return http.get(app.apiroot + 'StaticPages/getCust_NotificationDetails', { params: { Cust_NotificationID: obj.Cust_NotificationID, CustID: obj.CustID, Startindex: obj.Startindex, EndIndex: obj.EndIndex } });
        },
        getCustInfo: function(Custid) {
            return http.get(app.apiroot + 'DashboardRequest/getcustDashboardPersonalInfo', { params: { CustID: Custid } });
        },
        getCustCounts: function(Custid) {
            return http.get(app.apiroot + 'DashboardRequest/getcustDashboardCounts', { params: { CustID: Custid } });
        },
        getCustPartnerProfiles: function(custid, typeofaction, frompage, topage, exactflag) {
            return http.get(app.apiroot + 'DashboardRequest/getcustDashboardPartnerProfiles', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid, DashboardType: exactflag } });
        }
    };
}]);