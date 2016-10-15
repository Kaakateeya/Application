app.factory('successstoriesdata', ['$http', function (http) {
    return {
        suceessdataget: function (frompage, topage) {
            var person = {};
            person.successid = null
            person.vc_ProfileID = null;
            person.i_RegionID = null;
            person.casteiid = null;
            person.branchrom = null;
            person.pagefrom = frompage;
            person.pageto = topage;
            debugger;
            return http.post(app.apiroot + 'StaticPages/GetSuccessStoriesdetails', person);
        }
    }
}]);
