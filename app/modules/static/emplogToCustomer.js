(function() {
    'use strict';

    angular
        .module('Kaakateeya')
        .controller('empLogCustomerCtrl', controller);

    controller.$inject = ['$scope', '$stateParams', 'loggedascustomerservice', 'missingFieldService', 'authSvc', 'helperservice', 'route'];

    function controller(scope, stateParams, loggedascustomerservice, missingFieldService, authSvc, helperservice, route) {
        /* jshint validthis:true */
        var vm = this;
        var profileID = stateParams.profileID;
        activate();

        function activate() {

            loggedascustomerservice.getcustomerpassword(profileID).then(function(response) {
                console.log(response);
                if (response.data !== null && response.data !== undefined && response.data !== "" && response.data.length > 0) {

                    var passwords = (response.data).split(';');
                    scope.customerpassword = (passwords[0].split(':'))[1];
                    scope.customerpasswordencrypt = (passwords[1].split(':'))[1];
                    console.log(scope.customerpassword);
                    //scope.getcustomerinformation(scope.customerprofileid, scope.customerpassword, 1);

                    authSvc.login(profileID, scope.customerpasswordencrypt).then(function(response) {
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (helperservice.checkstringvalue(innerresponse.data)) ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }
                            if (custProfileStatus === 439) {
                                sessionStorage.setItem('missingStatus', missingStatus);
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        route.go('dashboard', { type: 'C' });
                                    } else {
                                        route.go('mobileverf', {});
                                    }
                                } else {
                                    route.go('missingfields', { id: missingStatus });
                                }
                            } else {
                                route.go('blockerController', { eid: responsemiss.response[0].VerificationCode });
                            }

                        });

                    });
                }
            });



        }
    }
})();