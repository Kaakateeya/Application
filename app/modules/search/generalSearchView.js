app.controller('Generalsearch', ['$scope', '$element', 'arrayConstants', 'SelectBindServiceApp', 'customerDashboardServices', function(scope, $element, arrayConstants, service, customerDashboardServices) {
    scope.searchTerm;
    scope.selectcaste;
    scope.PartnerProfilesnew = [];
    scope.truepartner = true;
    scope.showcontrols = true;
    scope.pageloadgeneral = function() {

        scope.Age = function() {
            scope.test = [];
            scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                scope.test.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return scope.test;
        };
        scope.arrayAge = scope.Age();
        scope.height = arrayConstants.height;
        scope.MaritalStatus = arrayConstants.MaritalStatus;
        scope.educationcategory = arrayConstants.educationcategory;
        service.countrySelect().then(function(response) {
            scope.Country = [];
            _.each(response.data, function(item) {
                scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.Religion = arrayConstants.Religion;
        scope.Mothertongue = arrayConstants.Mothertongue;
        service.casteselect().then(function(response) {
            scope.Caste = [];
            _.each(response.data, function(item) {
                scope.Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.visastatus = arrayConstants.visastatus;
        scope.Education = [];
        service.ProfessionGroup().then(function(response) {
            scope.Professiongroup = [];
            scope.Professiongroup.push({ "label": "--select--", "title": "--select--", "value": 0 });
            _.each(response.data, function(item) {
                scope.Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        service.currency().then(function(response) {
            scope.Currency = [];
            _.each(response.data, function(item) {
                scope.Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.stars = arrayConstants.stars;
    };
    scope.clearSearchTerm = function() {
        scope.searchTerm = '';
    };
    // The md-select directive eats keydown events for some quick select
    // logic. Since we have a search input here, we don't need that logic.
    // $element.find('input').on('keydown', function(ev) {
    //     ev.stopPropagation();
    // });
    scope.mothertongue = [1, 2, 3];

    scope.generalsearchsubmit = function() {
        alert(scope.mothertongue);
        scope.showcontrols = false;
        debugger;
        scope.truepartner = false;
        customerDashboardServices.getCustomercounts(91035, 'C', 1, 50).then(function(response) {
            console.log(response);
            _.each(response.data.PartnerProfilesnew, function(item) {
                scope.PartnerProfilesnew.push(item);
            });
        });
    };


}]);