app.factory('alert', ['$mdDialog', function($mdDialog) {
    var modalinstance;
    return {
        open: function(msg, classname) {
            classname = classname || "success";
            toastr.options = {
                "closeButton": true,
                "debug": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": app.global.alertType,
                "preventDuplicates": false,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": 3000,
                "extendedTimeOut": 2000,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
                "onclick": null
            };
            switch (classname) {
                case 'success':
                    toastr.success(msg, "done");
                    break;
                case 'error':
                    toastr.error(msg, 'Oops');
                    break;
                case 'warning':
                    toastr.warning(msg, 'Alert');
                    break;
                case 'info':
                    toastr.info(msg, 'Info');
                    break;
                default:
                    toastr.success(msg, 'Done');
                    break;
            }
        },
        dynamicpopup: function(url, scope, uibModal, custid, size) {
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size || 'lg'
            });
        },
        dynamicpopupclose: function() {
            modalinstance.close();
        },
        showloginpopup: function() {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,

            });
        },
        mddiologcancel: function() {
            $mdDialog.hide();
        }



    };
}]);