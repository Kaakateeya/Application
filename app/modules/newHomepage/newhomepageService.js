app.factory('newhomepageservices', ['$http', function(http) {
    return {
        getCustomerHomePageDesignData: function(flag, casteID, CustID, fromindex, EndIndex, GenderID, isActive) {
            debugger;
            return http.get(app.apiroot183 + 'StaticPages/getCustomerHomePageDesignData', { params: { flag: flag, casteID: casteID, CustID: CustID, intStartIndex: fromindex, intEndIndex: EndIndex, GenderID: GenderID, isActive: isActive } });
        }
    };
}]);