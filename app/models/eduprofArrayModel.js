(function(angular) {
    'use strict';


    function factory($http, serviceApp, timeout) {
        var model = {};
        model.ProfCatgory = [];
        model.ProfGroup = [];
        model.newProfessionCatgory = [];

        model.init = function() {
            model.ProfCatgoryf();
            model.ProfessionGroupf();
            model.newProfessionCatgoryf();
            return model;
        };

        model.ProfCatgoryf = function() {
            if (model.ProfCatgory.length === 0) {
                serviceApp.ProfessionCatgory().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.ProfCatgory = option;
                });
            }
        };
        model.ProfessionGroupf = function() {
            if (model.ProfGroup.length === 0) {
                serviceApp.ProfessionGroup().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.ProfGroup = option;
                });
            }
        };

        model.newProfessionCatgoryf = function() {
            if (model.newProfessionCatgory.length === 0) {
                serviceApp.newProfessionCat().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.newProfessionCatgory = option;
                });
            }
        };

        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('eduprofArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);