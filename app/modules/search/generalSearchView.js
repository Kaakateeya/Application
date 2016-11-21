app.controller('Generalsearch', ['$scope', '$element', 'arrayConstants', 'SelectBindService', function(scope, $element, arrayConstants, service) {
    scope.data = [];
    scope.vegetables = ['Corn', 'Onions', 'Kale', 'Arugula', 'Peas', 'Zucchini'];
    scope.searchTerm;
    scope.selectcaste;

    scope.clearSearchTerm = function() {
        scope.searchTerm = '';
    };
    // The md-select directive eats keydown events for some quick select
    // logic. Since we have a search input here, we don't need that logic.
    $element.find('input').on('keydown', function(ev) {
        ev.stopPropagation();
    });
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
    scope.selectAllTest = function() {

        debugger;
        scope.selectcaste = [];
        _.each(scope.Caste, function(caste) {
            scope.selectcaste.push(caste.value);
        });
    };
}]);