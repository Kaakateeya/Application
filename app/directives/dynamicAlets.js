app.factory('alert', ['$uibModal', function(uibModal) {
    return {
        open: function(scope, url, classname) {
            classname = classname || "alert alert-info";
            scope.modalInstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: ' <div class="modal-header ' + classname + '">' +
                    '<h3 class="modal-title text-center" id="modal-title">Mail Preview </h3>' +
                    '</div>' +
                    ' <div class="modal-body" id="modal-body">' +
                    ' ggggg'

                    +
                    ' </div>' +
                    '<div class="modal-footer">' +
                    '<input value="Cancel" id="btnEduCancel" class="button_custom button_custom_reset" ng-click="cancel();" type="submit">' +
                    '  <input value="Submit" id="btnEduSubmit" class="button_custom" type="button">' +
                    ' </div>',
                openedClass: classname,
                scope: scope,
                backdropClass: classname
            });
        }
    }
}]);