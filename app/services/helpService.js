app.factory('helpService', ["$http", function (http) {
    return {
        helpSubmit: function (object) {
            return http.post(app.apiroot + 'StaticPages/CustomerRating_sendMail', object);
        }

    }
}]);