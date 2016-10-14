app.factory('successstoriesdata', ['$http', function (http) {
    return {
        suceessdataget: function (custid, typeofaction, frompage, topage) {
            debugger;
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        }
    }
}]);
