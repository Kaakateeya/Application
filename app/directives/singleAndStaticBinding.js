app.factory('singlestaticbindings', ['arrayConstants', 'SelectBindServiceApp', function(arrayConstants, SelectBindService) {
    return {
        Age: function() {
            var Age = [];
            Age = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                Age.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return Age;
        },
        Country: function() {
            var Countryi = [];
            SelectBindService.countrySelect().then(function(response) {

                Countryi = [{ label: "--Select--", title: "--select--", value: "0" }];
                _.each(response.data, function(item) {
                    Countryi.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return Countryi;
        }

    };

}]);