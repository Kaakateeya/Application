app.factory('missingFieldService', ['$http', function(http) {
    return {
        missingFieldSubmit: function(object) {
            return http.post(app.apiroot + 'StaticPages/MissingFieldsupdate_Customerdetails', object);
        },
        missingFieldSelect: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getdisplayMissingFieldsupdate_Customerdetails', {
                params: { i_updateflag: 0, CustID: custid }
            });
        },
        GetCustStatus: function(custID) {
            return http.get(app.apiroot + 'StaticPages/getCustomerfilldata', {
                params: { CustomerCustID: custID }
            });
        }
    };
}]);