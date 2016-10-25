app.factory('homepageservices', ['authSvc', function(http) {
    return {
        logininfo: function() {
            var person = {
                Username: "011046091",
                Password: "XowIvsTkzINyyKyJrPlmgg=="
            };
            return http.post(app.apiroot + 'DB/userLogin/person', person);
        }
    };
}]);