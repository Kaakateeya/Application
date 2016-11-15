app.factory('ourBranchService', ["$http", function (http) {
    return {
         BranchSelect: function (regionID,BranchId) {
             BranchId=BranchId==undefined?"":BranchId;
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: {  dependencyName: "BranchesAddress",dependencyValue: regionID, dependencyflagID: BranchId } });
        },
         BranchPageloadSelect: function (value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: {  dependencyName: "BranchesAddress",dependencyValue: "", dependencyflagID: "" } });
        }
    }
}]);
