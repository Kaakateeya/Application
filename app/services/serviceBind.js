app.factory('SelectBindService', ["$http", function(http) {
    return {
        countrySelect: function() {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function(dependencyVal) {
            alert(dependencyVal);
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal.join(',') } });
        },
        casteselect: function() {

            return http.get(app.apiroot + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
        },
         countryCodeselect: function () {
           
            return http.get(app.apiroot + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CountryCode"} });
        }
    };
}]);