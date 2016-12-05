app.factory('searches', ["$http", function(http) {
    return {
        partnerdetails: function(custid, empid, searchresultid) {
            return http.get(app.apiroot + 'CustomerSearch/getPartnerpreferencedetails', { params: { CustID: custid, EmpID: empid, searchresultID: searchresultid } });
        },
        profileidsearch: function(ProfileIDSearch) {

            return http.post(app.apiroot + 'CustomerSearch/CustomerProfileIdsearch', ProfileIDSearch);
        },
        CustomerGeneralandAdvancedSearchsubmit: function(obj) {
            return http.post(app.apiroot + 'CustomerSearch/CustomerGeneralandAdvancedSearch', obj);
        },
        CustomerGeneralandAdvancedSavedSearch: function(obj) {
            console.log(obj);
            debugger;
            return http.post(app.apiroot + 'CustomerSearch/CustomerGeneralandAdvancedSavedSearch', obj);
        },
        CustomerProfileIDSavedSearch: function(obj) {
            debugger;
            return http.post(app.apiroot + 'CustomerSearch/CustomerProfileIDSavedSearch', obj);
        },
        savedsearchselectmethod: function(Cust_ID, SaveSearchName, iEditDelete) {
            return http.get(app.apiroot + 'CustomerSearch/getSearchResultSaveEdit', { params: { Cust_ID: Cust_ID, SaveSearchName: SaveSearchName, iEditDelete: iEditDelete } });
        }
    };
}]);