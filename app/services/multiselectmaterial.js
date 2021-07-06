app.factory('angularselects', ["SelectBindserviceApp", "arrayConstants", function(service, cons) {
    return {
        countrySelect: function() {
            var Country = [];
            service.countrySelect().then(function(response) {
                _.each(response.data, function(item) {
                    Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Country;
        },
        casteselect: function() {
            var Caste = [];
            service.casteselect().then(function(response) {
                _.each(response.data, function(item) {
                    Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Caste;
        },
        ProfessionGroup: function() {
            var Professiongroup = [];
            service.ProfessionGroup().then(function(response) {
                Professiongroup.push({ "label": "--select--", "title": "--select--", "value": 0 });
                _.each(response.data, function(item) {
                    Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Professiongroup;
        },
        currency: function() {
            var Currency = [];
            service.currency().then(function(response) {
                _.each(response.data, function(item) {
                    Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Currency;
        }
    };
}]);