app.factory('loggedascustomerservice', ['$http', function(http) {
    return {
        getcheckpassword: function(employeeusername, employeepassword) {
            return http.get(app.apiroot + 'Registration/getCheckUserPwd', { params: { Username: employeeusername, Password: employeepassword } });
        },
        getcustomerpassword: function(customerpassword) {
            return http.get(app.apiroot + 'Registration/getPassword', { params: { Username: customerpassword } });
        },
        getcustomerinfo: function(customerprofileid, customerpassword, iflag) {
            return http.get(app.apiroot + 'Registration/getloginCustinformation', { params: { Username: customerprofileid, Password: customerpassword, iflag: iflag } });
        }
    };
}]);