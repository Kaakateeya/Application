app.factory('helpService', ["SelectBindServiceApp","arrayConstants", function(service,cons) {
    return {
        caste: function(object) {
            service.casteselect().then(function(response) {
            scope.Caste = [];
            _.each(response.data, function(item) {
                scope.Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        }
     }
}]);