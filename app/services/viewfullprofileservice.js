app.factory('customerviewfullprofileservices', ['$http', function(http) {
    return {
        getInsertUnpaidStatus: function(custid, tocustid, empid, typeofaction) {
            return http.get(app.apiroot + 'StaticPages/getInsertUnpaidStatus', { params: { fromCustID: custid, ToCustID: tocustid, Empid: empid, typeofAction: typeofaction } });
        },
        getInsertExpressViewTicket: function(fromcustid, tocustid, decryptedtext, strtypeofreport) {
            return http.get(app.apiroot + 'StaticPages/getInsertExpressViewTicket', { params: { FromCustID: fromcustid, ToCustID: tocustid, DecriptedText: decryptedtext, strtypeOfReport: strtypeofreport } });
        },
        getExpressIntrstfullprofile: function(fromprofileid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { FromProfileID: fromprofileid, EmpID: empid } });
        },
        getExpressinterst_bookmark_ignore_data: function(Loggedcustid, ToCustID) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterst_bookmark_ignore_data', { params: { Loggedcustid: Loggedcustid, ToCustID: ToCustID } });
        },
        getViewFullProfileMail: function(OriginalString) {
            return http.get(app.apiroot + 'StaticPages/getViewFullProfileMail', { params: { OriginalString: OriginalString } });
        },
        UpdateExpressIntrestViewfullprofile: function(obj) {
            return http.post(app.apiroot + 'StaticPages/UpdateExpressIntrestViewfullprofile', obj);
        },
        getCustomerApplicationErroLog: function(ErrorMessage, CustID, PageName, Type) {
            return http.get(app.apiroot + 'StaticPages/getCustomerApplicationErroLog', { params: { ErrorMessage: ErrorMessage, CustID: CustID, PageName: PageName, Type: Type } });
        }
    };
}]);