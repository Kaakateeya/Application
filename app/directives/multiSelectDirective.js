// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
app.directive('multiselectdropdown', function () {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata:"="

        },
        link: function (scope, element, attrs) {
            if(scope.typeofdata ==="caste"){
            scope.options = [
                { label: 'Option 1', title: 'Option 1', value: '1' },
                { label: 'Option 2', title: 'Option 2', value: '2' },
                { label: 'Option 3', title: 'Option 3', value: '3' },
                { label: 'Option 4', title: 'Option 4', value: '4' },
                { label: 'Option 5', title: 'Option 5', value: '5' },
                { label: 'Option 6', title: 'Option 6', value: '6', disabled: true }
            ];
            }
            else{
                 scope.options = [
                { label: 'Option 1', title: 'Option 1', value: '1' },
                { label: 'Option 2', title: 'Option 2', value: '2' },
            ];
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
                select: ['1', '2'],
                // Replicate the native functionality on the elements so
                // that angular can handle the changes for us.
                onChange: function (optionElement, checked, select) {
                    if (optionElement != null) {
                        optionElement.removeAttr('selected');
                    }
                    if (checked) {
                        optionElement.prop('selected', 'selected');
                    }
                    element.change();
                }
                ,
                onSelectAll: function (element) {
                },
                onDeselectAll: function () {
                },
                buttonText: function (options, select) {
                    if (options.length === 0) {
                        return 'ANY';
                    }
                    var labels = [];
                    scope.ngModel = [];
                    options.each(function () {
                        scope.ngModel.push($(this)[0].value);
                        if ($(this).attr('label') !== undefined) {
                            labels.push($(this).attr('label'));
                        }
                        else {
                            labels.push($(this).html());
                        }
                    });
                    return labels.join(', ') + '';
                }
            });
            var secondConfigurationSet = {
                includeSelectAllOption: true,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                enableClickableOptGroups: true,
                inheritClass: true
            };
            element.multiselect('dataprovider', scope.options);
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
});