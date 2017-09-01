app.factory('customerviewfullprofileservices', ['$http', function(http) {
    return {
        getInsertUnpaidStatus: function(custid, tocustid, empid, typeofaction) {
            return http.get(app.apiroot + 'StaticPages/getInsertUnpaidStatus', { params: { fromCustID: custid, ToCustID: tocustid, Empid: empid, typeofAction: typeofaction } });
        },
        getInsertExpressViewTicket: function(fromcustid, tocustid, decryptedtext, strtypeofreport) {
            return http.get(app.apiroot + 'StaticPages/getInsertExpressViewTicket', { params: { FromCustID: fromcustid, ToCustID: tocustid, DecriptedText: decryptedtext, strtypeOfReport: strtypeofreport } });
        },
        // getExpressIntrstfullprofile: function(toprofileid, strFromProfileID, empid) {
        //     return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { ToProfileID: toprofileid, FromProfileID: strFromProfileID, EmpID: empid } });
        // },
        // getExpressIntrstfullprofile: function(toprofileid, strFromProfileID, empid) {
        //     return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { tocustid: toprofileid, fromcustid: strFromProfileID, EmpID: empid } });
        // },
        getExpressIntrstfullprofile: function(toprofileid, empid) {
            return http.get(app.apiroot + 'StaticPages/getExpressIntrstfullprofile', { params: { ToProfileID: toprofileid, EmpID: empid } });
        },
        getExpressinterst_bookmark_ignore_data: function(Loggedcustid, ToCustID) {
            return http.get(app.apiroot + 'StaticPages/getExpressinterst_bookmark_ignore_data', { params: { Loggedcustid: Loggedcustid, ToCustID: (ToCustID !== "") && (ToCustID !== undefined) ? ToCustID : null } });
        },
        getViewFullProfileMail: function(OriginalString) {
            return http.get(app.apiroot + 'StaticPages/getViewFullProfileMail', { params: { OriginalString: OriginalString } });
        },
        UpdateExpressIntrestViewfullprofile: function(obj) {
            return http.post(app.apiroot + 'StaticPages/UpdateExpressIntrestViewfullprofile', obj);
        },
        getCustomerApplicationErroLog: function(ErrorMessage, CustID, PageName, Type) {
            return http.get(app.apiroot + 'StaticPages/getCustomerApplicationErroLog', { params: { ErrorMessage: (ErrorMessage !== null && ErrorMessage !== undefined && ErrorMessage !== "") ? ErrorMessage : "Not Defined", CustID: CustID, PageName: (PageName !== null && PageName !== undefined && PageName !== "") ? PageName : "Not Defined", Type: (Type !== null && Type !== undefined && Type !== "") ? Type : "Not Defined" } });
        },
        getpaidstatusforviewprfile: function(custid) {
            return http.get(app.apiroot + 'Payment/getCustomerPaymentStatus', { params: { CustomerCustID: custid } });
        }
    };
}]);