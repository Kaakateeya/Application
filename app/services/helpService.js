app.factory('helpService', ["$http", function(http) {
    return {
        helpSubmit: function(object) {

            return http.post(app.apiroot + 'StaticPages/InsertTicketInfo', object);
        },
        SendMail: function(object) {

            return http.post(app.apiroot + 'StaticPages/SendTicketMail', object);
        }
    };
}]);