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
        },
        timeoutoldalerts: function(event, cls, msg, time) {
            scope.typecls = cls;
            scope.msgs = msg;
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                // template: '<div class="{{typecls}}"><div class="modal-header"><a href="javascript:void(0);" ng-click="close();"><ng-md-icon icon="close" style="fill:#c73e5f" class="pull-right" size="20"></ng-md-icon>' +
                //     '</a><h4 class="modal-title"><center>Alert</center></h4></div></div><div class="modal-body" id="modalbodyID">'

                //     +
                //     '<p><label style="color:rgb(82, 24, 185);" ng-bind-html="msgs" ng-show="msgs==="upgrade"?false:true"></label>' +
                //     '</p>' +
                //     '</div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close();">Close</button></div>',
                scope: scope
            });
            timeout(function() {
                scope.dynamicpopupclose();
            }, time || 4500);
        }
    };
}]);