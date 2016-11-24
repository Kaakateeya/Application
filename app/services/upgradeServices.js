app.factory('myAppFactory', ["$http", function(http) {
    return {
        getData: function() {
            return http({
                method: 'GET',
                url: 'http://angular-data-grid.github.io/demo/data.json'
            });
        },
    getpayment:function(custid) {
          debugger;
        return http.get(app.apiroot + 'Payment/GetPaymentDetails', {params: {CustID:custid}});
        }
    };
 }]);