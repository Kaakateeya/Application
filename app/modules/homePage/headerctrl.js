app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', function(scope, authSvc, ngIdle, alertpopup, uibModal) {
    scope.showhidetestbuttons = function() {
        var datatinfo = authSvc.user();
        if (datatinfo.custid !== "" && datatinfo.custid !== undefined && datatinfo.custid !== null) {
            scope.loginstatus = false;
            scope.loginoutstatus = true;
            scope.usernamepersonal = datatinfo.username;
            scope.profileid = datatinfo.profileid;
            scope.paidstatus = datatinfo.paidstatus == 1 ? "Paid" : "unpaid";
            scope.profilepic = datatinfo.profilepic;
            scope.withlogin = true;
            scope.withoutlogin = false;
        } else {
            scope.loginstatus = true;
            scope.loginoutstatus = false;
            scope.usernamepersonal = "";
            scope.profileid = "";
            scope.paidstatus = "";
            scope.profilepic = "";
            scope.withlogin = false;
            scope.withoutlogin = true;
        }
    };

    scope.$on('IdleTimeout', function() {

        //show pop up with two choices,wherther enduser needs to continue session or logout of application
        //Idle.setIdle(5);
        //redirect to home page
        alertpopup.dynamicpopup("sessionalert.html", scope, uibModal, 'sm');
    });
    scope.acceptcontinue = function() {
        ngIdle.setIdle(5 * 60);
        alertpopup.dynamicpopupclose();
    };
    scope.closesession = function() {
        authSvc.logout();
        alertpopup.dynamicpopupclose();
    };
    scope.loginstatus = true;
    scope.loginoutstatus = false;
    scope.loginpopup = false;
    scope.withlogin = false;
    scope.withoutlogin = true;
    scope.showhidetestbuttons();
    scope.divloginblock = function() {
        scope.loginpopup = true;
        $('.login_block_header').toggle();
    };
    scope.validate = function() {

        if ((scope.username).indexOf("@") != -1) {

            if (!scope.ValidateEmail(scope.username)) {
                scope.username = '';
                alert(" Please enter valid ProfileID/Email");
                return false;
            } else {
                return true;
            }
        } else {
            if (!scope.Validatnumber(scope.username) || (scope.username).length != 9) {
                alert("Please enter valid ProfileID/Email");
                scope.username = '';
                return false;

            } else {
                return true;
            }

        }
    };
    scope.loginsubmit = function() {

        if (scope.username === "" || scope.username === null || scope.username === "ProfileID/EmailID") {
            alert("Please enter user name");
            return false;
        } else if (scope.password === "" || scope.password === null || scope.password === "Enter the Password") {

            alert("Please enter password");
            return false;
        } else {
            if (scope.validate()) {
                authSvc.login(scope.username, scope.password).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    var custidlogin = authSvc.getCustId();
                    window.location = "#/home";
                    scope.loginpopup = false;
                    scope.showhidetestbuttons();
                });
            }
        }
    };

    scope.ValidateEmail = function(email) {
        var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return expr.test(email);
    };
    scope.Validatnumber = function(num) {
        var expr1 = /[0-9 -()+]+$/;
        return expr1.test(num);
    };
    scope.ClearlocalStorage = function() {
        authSvc.logout();
    };
    scope.redirectTohome = function() {
        var realpath = '#/home';
        window.open(realpath, "_self");
    };

    scope.viewfullmyprofile = function() {
        var custidlogin = authSvc.getCustId();
        sessionStorage.removeItem("localcustid");
        sessionStorage.removeItem("locallogid");
        sessionStorage.setItem("localcustid", custidlogin);
        var realpath = '#/viewFullProfileCustomer';
        window.open(realpath, '_self');
    };
    scope.redirecthomeordashboard = function() {
        var custidlogin = authSvc.getCustId();
        if (custidlogin !== null && custidlogin !== "" && custidlogin !== undefined) {
            var realpaths = '#/home';
            window.open(realpaths, "_self");

        } else {
            var realpath = '#/';
            window.open(realpath, "_self");
        }

    };
}]);