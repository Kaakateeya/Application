
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
app.directive('multiselectdropdown', ['arrayConstants', 'SelectBindService', function (cons, service) {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata: "=",
            parentVal: "="
        },
        link: function (scope, element, attrs) {
            scope.options = [];

            scope.databind = function (data) {
                element.multiselect('dataprovider', data);
            }


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

                case 'educationcategory':
                    scope.databind(cons.educationcategory);
                    break;

                case 'visastatus':
                    scope.databind(cons.visastatus);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'Country':
                    service.countrySelect().then(function (response) {
                        var option = [];
                        _.each(response.data, function (item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'Caste':
                    service.casteselect().then(function (response) {
                        var option = [];
                        _.each(response.data, function (item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
            }


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
                maxHeight: false,
                select: ['1', '2']
            });
            //element.multiselect('setOptions', secondConfigurationSet);
            //element.multiselect('rebuild');
            // Watch for any changes to the length of our select element
            scope.$watch(function () {
                return element[0].length;
            }, function () {
                scope.$applyAsync(element.multiselect('rebuild'));
            });

            // Watch for any changes from outside the directive and refresh
            scope.$watch(attrs.ngModel, function () {
                element.multiselect('refresh');
            });


        }

    };
}]);