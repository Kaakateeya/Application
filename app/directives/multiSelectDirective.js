// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
app.directive('multiselectdropdown', ['arrayConstants', 'SelectBindServiceApp', '$timeout',
    'countryArrayModel', 'eduprofArrayModel', 'otherArrayModel',
    function(cons, service, timeout, countryArrayModel, eduprofArrayModel, otherArrayModel) {
        return {
            require: 'ng-model',
            scope: {
                ngModel: '=',
                typeofdata: "=",
                parentVal: "=",
                pagetype: '='
            },
            link: function(scope, element, attrs) {
                scope.options = [];

                scope.databind = function(data) {
                    timeout(function() {
                        var localArray = [];
                        angular.copy(data, localArray);
                        scope.status = 'multiple' in attrs;
                        if (scope.status === true && data[0] !== undefined && angular.lowercase(data[0].title) === '--select--') {
                            localArray.splice(0, 1);
                        }
                        element.multiselect('dataprovider', localArray);
                    }, 500);
                };
                timeout(function() {
                    element.multiselect('select', scope.ngModel);

                }, 500);
                timeout(function() {
                    switch (scope.typeofdata) {
                        case 'MaritalStatus':
                            scope.databind(cons.MaritalStatus);
                            break;
                        case 'height':
                            scope.databind(cons.height);
                            break;
                        case 'Religion':
                            scope.databind(cons.Religion);
                            break;
                        case 'Mothertongue':
                            scope.databind(cons.Mothertongue);
                            break;
                        case 'Mothertongueselect':
                            scope.databind(cons.Mothertongueselect);
                            break;
                        case 'educationcategory':
                            scope.databind(cons.educationcategory);
                            break;
                        case 'visastatus':
                            scope.databind(cons.visastatus);
                            break;
                        case 'stars':
                            scope.databind(cons.stars);
                            break;
                        case 'region':
                            scope.databind(cons.region);
                            break;
                        case 'bodyType':
                            scope.databind(cons.bodyType);
                            break;
                        case 'bloodGroup':
                            scope.databind(cons.bloodGroup);
                            break;
                        case 'healthCondition':
                            scope.databind(cons.healthCondition);
                            break;
                        case 'starLanguage':
                            scope.databind(cons.starLanguage);
                            break;
                        case 'lagnam':
                            scope.databind(cons.lagnam);
                            break;
                        case 'ZodaicSign':
                            scope.databind(cons.ZodaicSign);
                            break;
                        case 'paadam':
                            scope.databind(cons.paadam);
                            break;
                        case 'familyStatus':
                            scope.databind(cons.familyStatus);
                            break;
                        case 'RelationshipType':
                            scope.databind(cons.RelationshipType);
                            break;
                        case "childStayingWith":
                            scope.databind(cons.childStayingWith);
                            break;
                        case 'hereabout':
                            scope.databind(cons.hereabout);
                            break;
                        case 'improveourwebsite':
                            scope.databind(cons.improveourwebsite);
                            break;
                        case 'prices':
                            scope.databind(cons.prices);
                            break;
                        case 'downloadtime':
                            scope.databind(cons.downloadtime);
                            break;
                        case 'yourratethesearch':
                            scope.databind(cons.yourratethesearch);
                            break;
                        case 'comparesites':
                            scope.databind(cons.comparesites);
                            break;
                        case 'recomendedtofriends':
                            scope.databind(cons.recomendedtofriends);
                            break;
                        case 'Country':

                            // service.countrySelect().then(function(response) {
                            //     var option = [];

                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(countryArrayModel.Country);

                            break;
                        case 'ProfCatgory':
                            // service.ProfessionCatgory().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(eduprofArrayModel.ProfCatgory);



                            break;
                        case 'ProfGroup':
                            // service.ProfessionGroup().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(eduprofArrayModel.ProfGroup);


                            break;
                        case 'indiaStates':
                            // service.stateSelect('1').then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.IndiaStates);


                            break;
                        case 'countryCode':
                            // service.countryCodeselect().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.countryCode);

                            break;
                        case 'caste':
                        case 'Caste':
                            // service.casteselect().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });

                            scope.databind(otherArrayModel.caste);
                            break;

                            // case 'Caste':
                            //     service.casteselect().then(function(response) {
                            //         var option = [];
                            //         option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                            //         _.each(response.data, function(item) {
                            //             option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //         });
                            //         scope.databind(option);
                            //     });
                            //     scope.databind(otherArrayModel.caste);
                            //     break;


                        case 'currency':
                            // service.currency().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": "" });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });


                            scope.databind(countryArrayModel.currency);

                            break;
                        case 'catgory':
                            scope.databind(cons.catgory);
                            break;

                        case 'Priority':
                            scope.databind(cons.Priority);
                            break;
                        case 'Age':
                        case 'Ageselect':
                            var test = [];
                            test.push({ label: "--select--", title: "--select--", value: "0" });
                            for (var i = 18; i < 78; i++) {
                                if (scope.typeofdata === "Ageselect") {
                                    test.push({ "label": i + ' years', "title": i + ' years', "value": i });
                                } else {
                                    test.push({ "label": i, "title": i, "value": i });
                                }
                            }
                            scope.databind(test);
                            break;
                        case "Complexion":
                            scope.databind(cons.Complexion);
                            break;
                        case 'newProfessionCatgory':

                            // service.newProfessionCat().then(function(response) {
                            //     var option = [];
                            //     option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                            //     _.each(response.data, function(item) {
                            //         option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                            //     });
                            //     scope.databind(option);
                            // });
                            scope.databind(eduprofArrayModel.newProfessionCatgory);

                            break;

                    }
                }, 1000);
                element.multiselect({
                    buttonClass: 'btn',
                    buttonWidth: 'auto',
                    inheritClass: true,
                    includeSelectAllOption: true,
                    disableIfEmpty: true,
                    nonSelectedText: 'Any',
                    allSelectedText: 'All Selected',
                    selectAllText: 'Check all!',
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true,
                    filterPlaceholder: 'Type To Search',
                    buttonContainer: '<div class="btn-group" />',
                    maxHeight: false
                });
                //element.multiselect('setOptions', secondConfigurationSet);
                //element.multiselect('rebuild');
                // Watch for any changes to the length of our select element
                scope.$watch(function() {
                    //console.log("TYPEDROP   " + scope.typeofdata);
                    // console.log(element[0].length);
                    element.multiselect('select', scope.ngModel);
                    return element[0].length;
                }, function() {
                    scope.$applyAsync(element.multiselect('rebuild'));
                    element.multiselect('select', scope.ngModel);
                });
                // Watch for any changes from outside the directive and refresh
                scope.$watch(scope.pagetype === 'search' ? 'ngModel' : attrs.ngModel, function() {
                    // console.log(scope.ngModel);
                    element.multiselect('refresh');
                });
            }
        };
    }
]);