app.directive('multiSelectDirective', function () {
    return {

        restrict: 'E',
        replace: true,
        require: 'ngModel',
        scope: {
            obj: '=',
            selectedvals: '=',
            ngModel: '=',
            directiveId: '='
        },
        controllerAs: 'ctrl',
        controller: function ($scope) {
            alert($scope.directiveId);

        },
        template: '<select id="{{directiveId}}"  class="multiple" multiple="multiple"></select>',
        link: function ($scope, element) {
            var secondConfigurationSet = {
                includeSelectAllOption: true,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                enableClickableOptGroups: true,
                inheritClass: true
            };
            var id = ('#' + ($scope.directiveId));
             alert(id);

            $('.multiple').multiselect('setOptions', secondConfigurationSet);
            $('.multiple').multiselect('rebuild');
            $('.multiple').multiselect('select', $scope.selectedvals, true);
            $('.multiple').multiselect('dataprovider', $scope.obj);
            showNameChanged();
            this.ngClass = $scope.ngClass;
            function showNameChanged() {
                debugger;

                var brands = $('' + id + ' option:selected');
                $scope.ngModel = [];
                $(brands).each(function (index, brand) {

                    $scope.ngModel.push($(this).val());
                });
            }
            $('.' + $scope.ngClass).change(showNameChanged);
        }
    }

});

