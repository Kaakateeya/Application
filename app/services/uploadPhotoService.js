app.factory('uploadService', ["$http", function(http) {
    return {
        getencrypt: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getencryptedProfileID', { params: { ProfileID: custid } });
        },
        getdecrypt: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getdecryptedProfileID', { params: { ProfileID: custid } });
        }
    };
}]);