app.factory('searches', ["$http", function(http) {
    return {
        partnerdetails: function(custid,empid) {
         return http.get(app.apiroot + 'CustomerSearch/getPartnerpreferencedetails', {params:{CustID:custid,EmpID:empid}});
        },
        
    }
}]);
