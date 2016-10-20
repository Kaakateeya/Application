app.factory('homepageservices', ['authSvc', function (http) {
    return {
        logininfo: function () {
            var person = new Object();
            person.Username = "011046091";
            person.Password = "XowIvsTkzINyyKyJrPlmgg==";
            debugger;
            return http.post(app.apiroot + 'DB/userLogin/person', person);
        }
    }
}]);
