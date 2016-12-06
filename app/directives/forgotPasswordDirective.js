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
                        controller: forgetcontroller,
                        templateUrl: 'forgetpassword.html',
                        parent: angular.element(document.body),
                        clickOutsideToClose: true,

                    });
                };


                function forgetcontroller($scope, $mdDialog) {
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                    $scope.forgotpasswordsubmit = function(form) {
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
                    };
                }

                scope.$on('showforgetpassword', function(event) {
                    scope.showforgetpassword();
                });


            }
        };
    }
]);