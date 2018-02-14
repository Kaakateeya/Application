app.factory('nologinPwd', ['$http', function(http) {
    return {
        createNewPwdSub: function(custID, newpwd) {
            return http.get(app.apiroot + 'StaticPages/getCreateNewPassword', { params: { intCusID: custID, strPassword: newpwd } });
        },
        getEmailAndProfileID: function(obj) {
            console.log(JSON.stringify({ VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' }));
            return http.get(app.apiroot + 'StaticPages/getEmilVerificationCode', { params: { VerificationCode: obj, i_EmilMobileVerification: 1, CustContactNumbersID: '' } });

        }
    };
}]);