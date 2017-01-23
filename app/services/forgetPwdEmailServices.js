app.factory('forgetPwdservices', ["$http", function(http) {
    return {
        getstatuscustid: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getCheckForgotPasswordStatus', { params: { StrCustID: custid } });
        },
        getChangePassword: function(custid, Password) {
            return http.get(app.apiroot + 'StaticPages/getChangePassword', { params: { StrCustID: custid, Password: Password } });
        }
    };
}]);