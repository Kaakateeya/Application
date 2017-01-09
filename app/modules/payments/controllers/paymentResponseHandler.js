app.controller('ccavenueresponsectrl', ['$scope', '$stateParams', '$http', function(scope, stateParams, http) {
    console.log(stateParams.data);
    http.post('/decrypt', JSON.stringify({ keyname: stateParams.data })).then(function(response) {
        console.log(response.data);
    });
}]);