app.factory('SelectBindService', ["$http", function (http) {
    return {
        countrySelect: function (obj) {
            return http.get(app.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function (dependencyVal) {
            alert(dependencyVal);
            return http.get(app.apipath + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal.join(',') } });
        }
    }
}]);