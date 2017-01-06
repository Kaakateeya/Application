app.controller('mobileverifyController', ['$scope', 'mobileVerificationService', 'authSvc', 'route',
    function(scope, mobileVerificationService, authSvc, route) {
        scope.pageloadSelect = {};
        var logincustid = authSvc.getCustId();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.pageLoad = function(custid) {
            mobileVerificationService.getmobileverificationData(custid).then(function(res) {
                scope.pageloadSelect = res.data;
                scope.mobVerify = scope.pageloadSelect.ismobileverf === true ? true : false;
                scope.emailVerify = scope.pageloadSelect.isEmailverf === true ? true : false;
                if (scope.pageloadSelect.ismobileverf === true && scope.pageloadSelect.isEmailverf === true) {
                    sessionStorage.setItem("cust.isemailverified", true);
                    sessionStorage.setItem("cust.isnumberverifed", true);
                    route.go('dashboard', { type: 'C' });
                }
            });

        };
        scope.pageLoad(scope.custid);
        scope.verifyMobileCode = function() {
            if (scope.pageloadSelect.NumberVerificationcode === scope.txtEnteryourpin) {
                mobileVerificationService.verifyMobile(scope.txtEnteryourpin, 2, scope.pageloadSelect.Cust_ContactNumbers_ID).then(function(res) {
                    scope.pageloadSelect = scope.pageLoad(scope.custid);
                    scope.pageloadSelect.ismobileverf = true;
                    if (scope.pageloadSelect.ismobileverf === true && scope.pageloadSelect.isEmailverf === true) {
                        sessionStorage.setItem("cust.isnumberverifed", true);
                        route.go('dashboard', { type: 'C' });
                    }
                    return false;
                });

            } else {
                alert('Please enter valid mobile verify code');
            }
        };
        scope.resendMobCode = function() {
            var inputOBj = {
                iCountryID: scope.pageloadSelect.CountryCodeID,
                iCCode: scope.pageloadSelect.CountryCodes,
                MobileNumber: scope.pageloadSelect.Number,
                CustContactNumbersID: scope.pageloadSelect.Cust_ContactNumbers_ID
            };
            mobileVerificationService.resendMobileCode(inputOBj).then(function(res) {
                scope.pageLoad(scope.custid);
                alert('Valid Mobile Verify code sent successfully');
            });
        };
        scope.resendMailLink = function() {
            mobileVerificationService.resendEmailLink(scope.custid).then(function(res) {
                alert('We have re-sent a mail to the provided Email');
            });
        };
    }
]);