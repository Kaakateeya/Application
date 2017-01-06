app.directive("forgotPassword", ['authSvc', "customerProfilesettings", "alert",
    '$mdDialog',
    function(authSvc, customerProfilesettings, alerts, $mdDialog) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        return {
            restrict: "E",
            scope: {
                arrayphotos: '='
            },
            templateUrl: "templates/forgotPasswordDirective.html",
            link: function(scope, element, attrs) {
                scope.showforgetpassword = function() {
                    $mdDialog.show({

                        templateUrl: 'forgetpassword.html',
                        parent: angular.element(document.body),
                        clickOutsideToClose: true,
                        scope: scope
                    });
                };

                scope.ValidateEmail = function(email) {
                    var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return expr.test(email);
                };
                scope.Validatnumber = function(num) {
                    var expr1 = /[0-9 -()+]+$/;
                    return expr1.test(num);
                };
                scope.validate = function(form) {

                    if ((form.txtforgetemail).indexOf("@") != -1) {

                        if (!scope.ValidateEmail(form.txtforgetemail)) {
                            form.txtforgetemail = '';
                            alert(" Please enter valid ProfileID/Email");
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        if (!scope.Validatnumber(form.txtforgetemail) || (form.txtforgetemail).length != 9) {
                            alert("Please enter valid ProfileID/Email");
                            form.txtforgetemail = '';
                            return false;

                        } else {
                            return true;
                        }

                    }
                };
                scope.cancel = function() {
                    $mdDialog.cancel();
                };
                scope.forgotpasswordsubmit = function(form) {
                    if (scope.validate(form)) {
                        customerProfilesettings.forgotpassword(form.txtforgetemail).then(function(response) {
                            if (response.data == 1) {
                                alerts.open('Mail sent to your email, To reset your password check your mail.', "success");
                                $mdDialog.cancel();
                            } else if (response.data == 2) {
                                alerts.open("Invalid Matrimony ID OR  E-mail-ID.", "warning");
                            } else {
                                alerts.open("Invalid Matrimony ID OR  E-mail-ID.", "warning");
                            }
                        });
                    }
                };
                scope.$on('showforgetpassword', function(event) {
                    scope.showforgetpassword();
                });
            }
        };
    }
]);