(function(angular) {
    'use strict';

    function factory($http, service, timeout) {
        var model = {};
        model.Country = [];
        model.IndiaStates = [];
        model.countryCode = [];
        model.currency = [];

        model.init = function() {
            model.Country = [];
            model.IndiaStates = [];
            model.countryCode = [];
            model.currency = [];
            // timeout(function() {
            model.Countryf();
            model.stateSelectf();
            model.countryCodeselectf();
            model.currencyf();
            // });
            return model;
        };

        model.Countryf = function() {
            if (model.Country.length === 0) {
                service.countrySelect().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.Country = option;
                });
            }
        };

        model.stateSelectf = function() {

            if (model.IndiaStates.length === 0) {
                service.stateSelect('1').then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.IndiaStates = option;
                });
            }

        };

        model.countryCodeselectf = function() {
            if (model.countryCode.length === 0) {
                service.countryCodeselect().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.countryCode = option;
                });
            }
        };

        model.currencyf = function() {
            if (model.currency.length === 0) {
                service.currency().then(function(response) {
                    var option = [];
                    option.push({ "label": "--select--", "title": "--select--", "value": "" });
                    _.each(response.data, function(item) {
                        option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    });
                    model.currency = option;
                });
            }
        };

        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('countryArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);