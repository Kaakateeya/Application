app.factory('alert', ['$mdDialog', '$uibModal', '$timeout', 'arrayConstants', 'customerProfilesettings', function($mdDialog, uibModal, timeout, arrayConstants, customerProfilesettings) {
    var modalinstance, forgetpassword;

    function closepopup($scope) {
        $scope.hide = function() {
            forgetpassword.hide();
        };
        $scope.ValidateEmail = function(email) {
            var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return expr.test(email);
        };
        $scope.Validatnumber = function(num) {
            var expr1 = /[0-9 -()+]+$/;
            return expr1.test(num);
        };
        $scope.validate = function(form) {
            if ((form.txtforgetemail).indexOf("@") != -1) {
                if (!$scope.ValidateEmail(form.txtforgetemail)) {
                    form.txtforgetemail = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!$scope.Validatnumber(form.txtforgetemail) || (form.txtforgetemail).length != 9) {
                    alert("Please enter valid ProfileID/Email");
                    form.txtforgetemail = '';
                    return false;

                } else {
                    return true;
                }
            }
        };
        $scope.forgotpasswordsubmit = function(form) {
            if ($scope.validate(form)) {
                customerProfilesettings.forgotpassword(form.txtforgetemail).then(function(response) {
                    if (response.data == 1) {
                        alert('Mail sent to your email, To reset your password check your mail');
                        forgetpassword.hide();
                    } else if (response.data == 2) {
                        alert("Invalid Matrimony ID OR  E-mail-ID.");
                    } else {
                        alert("Invalid Matrimony ID OR  E-mail-ID.");
                    }
                });
            }
        };
    }
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
        dynamicpopup: function(url, scope, uibModal, size) {
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: url,
                scope: scope,
                size: size || 'lg',
                backdrop: 'static',
                keyboard: false
            });
        },
        dynamicpopupclose: function() {
            modalinstance.close();
        },

        mddiologcancel: function() {
            $mdDialog.hide();
        },
        timeoutoldalerts: function(scope, cls, msg, time) {
            scope.typecls = cls;
            scope.msgs = msg === "upgrade" ? "<label style='color:maroon;'>Please Click Here To</label><a href='/UpgradeMembership'>" + "  " + arrayConstants.Upgrade + "</a>" : "<label>" + msg + "</label>";
            modalinstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                template: '<div class="{{typecls}}"><div class="modal-header"><a href="javascript:void(0);" ng-click="close();"><ng-md-icon icon="close" style="fill:#c73e5f" class="pull-right" size="20"></ng-md-icon></a><h4 class="modal-title"><center>Alert</center></h4></div></div><div class="modal-body" id="modalbodyID"><p ng-bind-html="msgs"></p></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="close();">Close</button></div>',
                scope: scope
            });
            if (msg === "upgrade") {

            } else {
                timeout(function() {
                    modalinstance.close();
                }, time || 4500);
            }
            scope.close = function() {
                modalinstance.close();
            };
        },
        applycolors: function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value !== null) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        },
        applycolorsfortextboxes: function(value, id) {
            var colors = "textboxremvecolor";
            if (value !== "" && value !== undefined && value !== null) {
                colors = "bacg";
                $('#' + id).addClass("bacg");
            } else {
                colors = "textboxremvecolor";
                $('#' + id).removeClass("bacg");
            }
            return colors;
        },
        showforgetpopup: function(scope) {
            forgetpassword = $mdDialog;
            forgetpassword.show({
                templateUrl: 'templates/forgotPasswordDirective.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                controller: closepopup,
            });
        },
    };
}]);