app.controller('Controllerpartner', ['$scope', 'customerDashboardServices', function (scope, customerDashboardServices) {
    scope.PartnerProfilesnew = [];
    scope.counts = 1;
    scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
    scope.init = function () {
        scope.gettingpartnerdata('C');
    };
    scope.gettingpartnerdata = function (type, frompage, topage, headertext) {
        if ((parseInt(topage) === undefined ? 1 : topage) < parseInt(scope.PartnerProfilesnewTotalrows === undefined ? 2 : scope.PartnerProfilesnewTotalrows)) {
           //console.log()
           debugger;
            if (type == 'C') {
                customerDashboardServices.getCustomercounts(91022, type, frompage === undefined ? 1 : frompage, topage === undefined ? 9 : topage).then(function (response) {
                    scope.bindallcounts = scope.counts == 1 ? response.data.DashBoardCounts : 0;
                    scope.counts == 1 ? scope.PersonalInfo = (response.data.PersonalInfo) : 0;
                    scope.PartnerProfilesnew = $.merge(scope.PartnerProfilesnew, response.data.PartnerProfilesnew);
                    scope.$broadcast('loadmore', false);
                    scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                    scope.lblUHaveviewd = 'Suitable Profiles that match you';

                });
            }
            else {
                customerDashboardServices.getcustomerpartnerdata(91022, type, frompage === undefined ? 1 : frompage, topage === undefined ? 9 : topage).then(function (response) {
                    scope.PartnerProfilesnew = $.merge(scope.PartnerProfilesnew, response.data.PartnerProfilesnew);
                    scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                    scope.lblUHaveviewd = 'Suitable Profiles that match you';
                    scope.$broadcast('loadmore', false);
                });
            }
        }
        else {
            scope.$broadcast('loadmore', false);
        }
    }
    scope.paging = function (frompage, topage) {
        scope.counts = 0;
        scope.gettingpartnerdata('P', frompage, topage);
    };
    scope.$on('paging', function (event, frompage, topage) {
        scope.paging(frompage, topage);
    });
}]);