app.controller('mobileverifyController', ['$scope', 'mobileVerificationService', 'authSvc', function(scope, mobileVerificationService, authSvc) {

    scope.pageloadSelect = {};

    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;

    scope.pageLoad = function(custid) {

        mobileVerificationService.getmobileverificationData(custid).then(function(res) {
            console.log(res);
            scope.pageloadSelect = res.data;
            scope.mobVerify = scope.pageloadSelect.ismobileverf === true ? true : false;
            scope.emailVerify = scope.pageloadSelect.isEmailverf === true ? true : false;
        });
    };

    scope.pageLoad(scope.custid);


    scope.verifyMobileCode = function() {

        if (scope.pageloadSelect.NumberVerificationcode === scope.txtEnteryourpin) {
            mobileVerificationService.verifyMobile(scope.txtEnteryourpin, 2, scope.pageloadSelect.Cust_ContactNumbers_ID).then(function(res) {
                console.log(res);
                scope.pageLoad(scope.custid);
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
            console.log(res);
            alert('Valid Mobile Verify code sent successfully');
        });
    };

    scope.resendMailLink = function() {
        mobileVerificationService.resendEmailLink(scope.custid).then(function(res) {
            console.log(res);
        });
    };

}]);