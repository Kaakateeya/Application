app.factory('feedbacksubmit', ["$http", function(http) {
    return {
        feedbacksubmitinsert: function(object) {
            return http.post(app.apiroot + 'StaticPages/CustomerRating_sendMail', object);
        }

    };
}]);