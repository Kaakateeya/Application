app.directive('multiSelectDirective', function () {
    return {

        restrict: 'E',
        require: 'ng-model',
        scope: {
            obj: '=',
            selectedvals: '=',
            ngModel: '='
        },

        controller: function ($scope) {

            var secondConfigurationSet = {
                includeSelectAllOption: true,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                enableClickableOptGroups: true,
                inheritClass: true
            };

            $('.multiple').multiselect('dataprovider', $scope.obj);
            $('.multiple').multiselect('setOptions', secondConfigurationSet);
            $('.multiple').multiselect('rebuild');
            $('.multiple').multiselect('select', $scope.selectedvals, true);


            function showNameChanged() {
                alert(1212);
                debugger;
                var brands = $('#multiselect1 option:selected');
                $scope.ngModel = [];
                $(brands).each(function (index, brand) {
                    $scope.ngModel.push([$(this).val()]);
                });
            }

            $('select').change(showNameChanged);

        },
        template: '<select id="multiselect1"  class="multiple" multiple="multiple"></select>',
        link: function (scope, element) {

        }
    }

});

