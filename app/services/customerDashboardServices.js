app.factory('customerDashboardServices', ['$http', function (http) {
  return {
    getCustomercounts: function (custid, typeofaction, frompage, topage) {
      debugger;
      return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget/' + custid + '/' + typeofaction + '/' + frompage + '/' + topage + '');
    },
    getcustomerpartnerdata: function (custid, typeofaction, frompage, topage) {
      debugger;
      return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget/'
        + custid + '/' + typeofaction + '/' + frompage + '/' + topage + '');
    }

  }
}]);

