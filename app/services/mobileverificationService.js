app.factory('mobileVerificationService', ['$http', function(http) {
    return {
        getmobileverificationData: function(custid) {
            return http.get(app.apiroot + 'EmailMobileVerf/EmailMobileVerfRequest', { params: { id: custid } });
        },
        verifyMobile: function(VCode, flag, CustContactnumID) {
            return http.get(app.apiroot + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: VCode, i_EmilMobileVerification: flag, CustContactNumbersID: CustContactnumID } });
        },
        resendMobileCode: function(obj) {
            console.log(obj);
            return http.get(app.apiroot + 'StaticPages/getResendmobile', { params: { iCountryID: obj.iCountryID, iCCode: obj.iCCode, MobileNumber: obj.MobileNumber, CustContactNumbersID: obj.CustContactNumbersID } });
        },
        resendEmailLink: function(obj) {
            return http.get(app.apiroot + 'StaticPages/getResendEmailVerficationLink', { params: { CustID: obj } });
        }
    };
}]);