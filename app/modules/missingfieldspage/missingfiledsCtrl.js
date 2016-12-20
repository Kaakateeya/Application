app.controller('missingfieldsctrl', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'alert',
    'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog', '$location', 'singlestaticbindings',
    function(scope, arrayConstants, service, alerts, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, singlestaticbindings) {
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.showloginpopup = function() {
            $mdDialog.show({
                templateUrl: 'missingfieldspopup.html',
                parent: angular.element(document.body),
                scope: scope,
                clickOutsideToClose: true,
            });
        };
        scope.cancel = function() {
            $mdDialog.cancel();
        };
        scope.loginsubmit = function() {};
        scope.height = [];
        scope.height = arrayConstants.height;
        scope.MaritalStatus = arrayConstants.MaritalStatus;
        scope.educationcategory = arrayConstants.educationcategory;
        service.countrySelect().then(function(response) {
            scope.Country = [];
            scope.Country = [{ label: "--Select--", title: "--select--", value: "0" }];
            _.each(response.data, function(item) {
                scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.Religion = arrayConstants.Religion;
        scope.Mothertongue = arrayConstants.Mothertongue;
        scope.visastatus = arrayConstants.visastatus;
        service.ProfessionGroup().then(function(response) {
            scope.Professiongroup = [];
            scope.Professiongroup = [{ label: "--Select--", title: "--select--", value: "0" }];
            _.each(response.data, function(item) {
                scope.Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        service.currency().then(function(response) {
            scope.Currency = [];
            scope.Currency = [{ label: "--Select--", title: "--select--", value: "0" }];
            _.each(response.data, function(item) {
                scope.Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.starLanguage = arrayConstants.starLanguage;
        scope.stars = (arrayConstants.stars);

        scope.showloginpopup();
    }
]);