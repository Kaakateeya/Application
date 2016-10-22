app.controller('Controllerpartner', ['$scope', 'customerDashboardServices', 'authSvc', function (scope, customerDashboardServices, authSvc) {
    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    scope.typeodbind = 'C';
    scope.selectedvalues = ["1", "2"];
    scope.names = ["Emil", "Tobias", "Linus"];
    scope.caste = "caste";
    scope.mg = "mg";
    scope.PartnerProfilesnew = [];
    scope.counts = 1;
    scope.bindallcounts = {};
    scope.lblUHaveviewd = 'Suitable Profiles that match you';
    scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
    scope.gettingpartnerdata = function (type, frompage, topage, headertext) {
        scope.flag = frompage === 1 ? 9 : scope.flag;
        scope.typeodbind = type;
        if (type == 'C') {
            customerDashboardServices.getCustomercounts(scope.custid, type, frompage, topage).then(function (response) {

                if (scope.counts == 1) {
                    scope.bindcounts(response.data.DashBoardCounts);
                    scope.PersonalInfo = (response.data.PersonalInfo);
                    // console.log(response);
                }
                if (parseInt(frompage) === 1) {
                    scope.PartnerProfilesnew = [];
                    _.each(response.data.PartnerProfilesnew, function (item) {
                        scope.PartnerProfilesnew.push(item);
                    });
                }
                else {
                    _.each(response.data.PartnerProfilesnew, function (item) {
                        scope.PartnerProfilesnew.push(item);
                    });

                }
                scope.$broadcast('loadmore');
                scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                scope.lblUHaveviewd = headertext;

            });
        }
        else {

            customerDashboardServices.getcustomerpartnerdata(91022, type, frompage === undefined ? 1 : frompage, topage === undefined ? 9 : topage).then(function (response) {
                if (parseInt(frompage) === 1) {
                    scope.PartnerProfilesnew = [];
                    _.each(response.data.PartnerProfilesnew, function (item) {
                        scope.PartnerProfilesnew.push(item);
                    });
                    scope.PartnerProfilesnew = response.data.PartnerProfilesnew;
                }
                else {
                    _.each(response.data.PartnerProfilesnew, function (item) {
                        scope.PartnerProfilesnew.push(item);
                    });
                }
                scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                scope.lblUHaveviewd = headertext;
                scope.$broadcast('loadmore');
            });
        }
    }
    // scope.$on('dashBoardLogin', function (event, type, frompage, topage, headertext) {
    //     debugger;
    //     scope.gettingpartnerdata(type, frompage, topage, headertext);
    // });

    scope.init = function () {
        scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you');
    };

    scope.paging = function (frompage, topage, typeodbind) {
        scope.counts = 0;
        typeodbind = typeodbind == 'C' ? 'P' : typeodbind;
        scope.gettingpartnerdata(typeodbind, frompage, topage);
    };
    scope.$on('directivecallingpaging', function (event, frompage, topage) {
        scope.paging(frompage, topage, scope.typeodbind);
    });
    scope.bindcounts = function (array) {
        scope.leftMenuArr = [

            { value: 'Edit my profile', bindvalue: null, hrefs: '/#home' },
            { value: 'Upgrade your membership', bindvalue: null, hrefs: '/#home' },
            { value: 'manage photo', bindvalue: null, hrefs: '/#home' },
            { value: 'My bookmarked profiles', bindvalue: array.MybookMarkedProfCount, clickvalues: 'MB', clickvaluesbind: 'Profiles Who BookMarked You', hrefs: '/#home' },
            { value: 'Who bookmarked me', bindvalue: array.WhobookmarkedCount, clickvalues: 'WB', clickvaluesbind: 'Profiles you have bookmarked', hrefs: '/#home' },
            { value: 'Profiles viewed by me', bindvalue: array.RectViewedProfCount, clickvalues: 'RV', clickvaluesbind: 'Profiles viewed by me', hrefs: '/#home' },
            { value: 'My profile viewed by others', bindvalue: array.RectWhoViewedCout, clickvalues: 'WV', clickvaluesbind: 'Members viewed my profile', hrefs: '/#home' },
            { value: 'Ignored profiles', bindvalue: array.IgnoreProfileCount, clickvalues: 'I', clickvaluesbind: 'Profiles ignored by you', hrefs: '/#home' },
            { value: 'Saved search', bindvalue: array.IgnoreProfileCount, hrefs: '/#home' },
            { value: 'Profile Settings', bindvalue: null, hrefs: '/#profilesettings' },
            { value: 'help', bindvalue: null, hrefs: '/#help' },
        ];
    }

}]);