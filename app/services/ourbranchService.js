app.factory('ourBranchService', ["$http", function(http) {
    return {
        BranchSelect: function(value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: value, dependencyflagID: "" } });
        },
        BranchPageloadSelect: function(value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: "", dependencyflagID: "" } });
        }
    };
}]);