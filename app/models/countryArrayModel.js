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
            // model.Countryf();
            // model.stateSelectf();
            // model.countryCodeselectf();
            // model.currencyf();
            model.allAtOnce();

            // });
            return model;
        };

        // model.Countryf = function() {
        //     if (model.Country.length === 0) {
        //         service.countrySelect().then(function(response) {
        //             var option = [];
        //             option.push({ "label": "--select--", "title": "--select--", "value": "" });
        //             _.each(response.data, function(item) {
        //                 option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //             });
        //             model.Country = option;
        //         });
        //     }
        // };

        // model.stateSelectf = function() {

        //     if (model.IndiaStates.length === 0) {
        //         service.stateSelect('1').then(function(response) {
        //             var option = [];
        //             option.push({ "label": "--select--", "title": "--select--", "value": "" });
        //             _.each(response.data, function(item) {
        //                 option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //             });
        //             model.IndiaStates = option;
        //         });
        //     }

        // };

        // model.countryCodeselectf = function() {
        //     if (model.countryCode.length === 0) {
        //         service.countryCodeselect().then(function(response) {
        //             var option = [];
        //             option.push({ "label": "--select--", "title": "--select--", "value": "" });
        //             _.each(response.data, function(item) {
        //                 option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //             });
        //             model.countryCode = option;
        //         });
        //     }
        // };

        // model.currencyf = function() {
        //     if (model.currency.length === 0) {
        //         service.currency().then(function(response) {
        //             var option = [];
        //             option.push({ "label": "--select--", "title": "--select--", "value": "" });
        //             _.each(response.data, function(item) {
        //                 option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //             });
        //             model.currency = option;
        //         });
        //     }
        // };


        model.allAtOnce = function() {
            if (model.Country.length === 0) {
                timeout(function() {
                    service.getCustomerBindings().then(function(response) {
                        if (response.data) {
                            model.IndiaStates = [];
                            model.countryCode = [];
                            model.Country = [];
                            model.profgroup = [];
                            model.profcatgory = [];
                            model.currency = [];
                            model.newProfcatgory = [];

                            model.Country = model.returnFormatArray(JSON.parse(response.data[2]));
                            model.ProfCatgory = model.returnFormatArray(JSON.parse(response.data[4]));
                            model.ProfGroup = model.returnFormatArray(JSON.parse(response.data[3]));
                            model.IndiaStates = model.returnFormatArray(JSON.parse(response.data[0]));
                            model.countryCode = model.returnFormatArray(JSON.parse(response.data[1]));
                            model.currency = model.returnFormatArray(JSON.parse(response.data[5]));
                            model.newProfessionCatgory = model.returnFormatArray(JSON.parse(response.data[6]));
                            model.caste = model.returnFormatArray(JSON.parse(response.data[7]));
                            // response.data = JSON.parse(response.data);

                        }
                    });
                }, 500);
            }
        };

        model.returnFormatArray = function(arr) {
            var option = [];
            if (arr.length > 0) {
                option.push({ "label": "--select--", "title": "--select--", "value": "" });
                _.each(arr, function(item) {
                    option.push({ "label": item.NAME, "title": item.NAME, "value": item.ID });
                });
            }
            return option;
        };
        return model.init();
    }

    angular
        .module('Kaakateeya')
        .factory('countryArrayModel', factory);

    factory.$inject = ['$http', 'SelectBindServiceApp', '$timeout'];

})(angular);