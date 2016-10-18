app.factory('feedbacksubmit', ["$http", function (http) {
    return {
        feedbacksubmitinsert: function (feedbacksubmitinsert) {
            return http.post(app.apiroot + 'StaticPages/GetSuccessStoriesdetails', feedbacksubmitinsert);
        }

    }
}]);