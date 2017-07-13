app.factory('myAppFactory', ["$http", function(http) {
    return {
        getData: function() {
            return http({
                method: 'GET',
                url: 'http://angular-data-grid.github.io/demo/data.json'
            });
        },
        getpayment: function(custid) {
            return http.get(app.apiroot + 'Payment/GetPaymentDetails', { params: { CustID: custid } });
        },
        sendsms: function(CategoryID, Cust_ID, SendPhonenumber) {
            return http.get(app.apiroot + 'StaticPages/getUnpaidMembersOwnerNotification', { params: { CategoryID: CategoryID, Cust_ID: Cust_ID, SendPhonenumber: SendPhonenumber } });
        },
        Paymentinsert: function(Mobj) {
            return http.post(app.apiroot + 'Payment/InsertPaymentDetails', Mobj);
        },
        getpaymentnew: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getCustomerPaymentPackagesDisplay', { params: { CustID: custid } });
        }

    };
}]);