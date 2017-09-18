app.controller("loggedascustomers", ['$scope', '$mdDialog',
    'authSvc', 'alert', 'loggedascustomerservice', 'route',
    function(scope, $mdDialog, authSvc, alerts, loggedascustomerservice, route) {
        scope.authentication = true;
        scope.Customerprofileiddiv = false;
        scope.submitcheckpassword = function() {
            loggedascustomerservice.getcheckpassword(scope.employeeusername, scope.employeepassword).then(function(response) {
                if (response.data === 1) {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = true;
                } else {
                    scope.authentication = true;
                    scope.Customerprofileiddiv = false;
                    alert("Authenication Failed Try Again");
                }
            });
        };
        scope.submitgetpassword = function() {
            loggedascustomerservice.getcustomerpassword(scope.customerprofileid).then(function(response) {
                if (response.data !== null && response.data !== undefined && response.data !== "" && response.data.length > 0) {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = false;
                    var passwords = (response.data).split(';');
                    scope.customerpassword = (passwords[0].split(':'))[1];
                    scope.customerpasswordencrypt = (passwords[1].split(':'))[1];
                    //scope.getcustomerinformation(scope.customerprofileid, scope.customerpassword, 1);
                    authSvc.login(scope.customerprofileid, scope.customerpasswordencrypt).then(function(response) {
                        sessionStorage.removeItem("loggedAscustomerPage");
                        sessionStorage.removeItem("homepageobject");
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        if (response.response !== null && response.response !== undefined && response.response !== "") {
                            authSvc.user(response.response !== null ? response.response[0] : null);
                            sessionStorage.setItem("loggedAscustomerPage", true);
                            route.go('dashboard', { type: 'C' });
                        } else {
                            route.go('loggedAscustomer', {});
                            scope.authentication = true;
                            scope.Customerprofileiddiv = false;
                        }
                    });
                } else {
                    scope.authentication = false;
                    scope.Customerprofileiddiv = true;
                    alert("Please Use Another Profileid");
                }
            });
        };
        scope.getcustomerinformation = function(customerprofileid, customerpassword, iflag) {
            loggedascustomerservice.getcustomerinfo(customerprofileid, customerpassword, iflag).then(function(response) {
                console.log(response);
            });
        };
    }
]);