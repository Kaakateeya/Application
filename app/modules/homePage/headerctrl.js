app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', '$rootScope', '$window',
    function(scope, authSvc, ngIdle, alertpopup, uibModal, $rootscope, window) {
        window.scrollTo(0, 0);
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
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        if (response.response[0].isemailverified === true && response.response[0].isnumberverifed === true) {
                            window.location = "#/home";
                        } else {
                            window.location = "#/mobileverf";
                        }
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


        scope.viewfullmyprofile = function() {
            var custidlogin = authSvc.getCustId();
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custidlogin);
            var realpath = '#/viewFullProfileCustomer';
            window.open(realpath, '_self');
        };
        scope.redirecthomeordashboard = function() {
            sessionStorage.removeItem("LoginPhotoIsActive");
            var custidlogin = authSvc.getCustId();
            if (custidlogin !== null && custidlogin !== "" && custidlogin !== undefined) {
                var realpaths = '#/home';
                window.open(realpaths, "_self");

            } else {
                var realpath = '#/';
                window.open(realpath, "_self");
            }

        };
        scope.searchpage = function(typeurl) {
            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    var realpath = '#/General?selectedIndex=2';
                    window.open(realpath, "_self");
                    $rootscope.$broadcast("profile", 2);
                    break;
                case "general":
                    var realpathgen = '#/General?selectedIndex=0';
                    window.open(realpathgen, "_self");
                    $rootscope.$broadcast("profile", 0);
                    break;
                case "advanced":
                    var realpathadvan = '#/General?selectedIndex=1';
                    window.open(realpathadvan, "_self");
                    $rootscope.$broadcast("profile", 1);
                    break;
            }
        };

        scope.homepagelinks = function(typeurl) {
            switch (typeurl) {
                case "BookMarked":
                    var realpath = '#/home?type=MB';
                    window.open(realpath, "_self");
                    $rootscope.$broadcast("homepage", "MB", "My BookMarked Profiles");
                    break;
                case "BookMarkedme":
                    var realpathgen = '#/home?type=WB';
                    window.open(realpathgen, "_self");
                    $rootscope.$broadcast("homepage", "WB", "Who BookMarked Me");
                    break;
                case "Ignored":
                    var realpathadvan = '#/home?type=I';
                    window.open(realpathadvan, "_self");
                    $rootscope.$broadcast("homepage", "I", "Ignored Profiles");
                    break;
                case "myprofile":
                    var myprofile = '#/home?type=WV';
                    window.open(myprofile, "_self");
                    $rootscope.$broadcast("homepage", "WV", "My profile viewed by others");
                    break;
                case "myhome":
                    sessionStorage.removeItem("LoginPhotoIsActive");
                    var myhome = '#/home?type=C';
                    window.open(myhome, "_self");
                    $rootscope.$broadcast("homepage", "C", "Suitable Profiles that match you");
                    break;
                case "Chats":
                    var Chats = '#/home?type=chats';
                    window.open(Chats, "_self");
                    $rootscope.$broadcast("Chatsreqexpress", "Chats", "Total Messages");
                    break;
                case "Requests":
                    var Requests = '#/home?type=requests';
                    window.open(Requests, "_self");
                    $rootscope.$broadcast("Chatsreqexpress", "Requests", "Members are requesting to upload your photo");
                    break;
                case "Express":
                    var Express = '#/home?type=express';
                    window.open(Express, "_self");
                    $rootscope.$broadcast("Chatsreqexpress", "Express", "All Profiles");
                    break;
            }
        };
        scope.showforgetpasswordpopup = function() {
            scope.$broadcast('showforgetpassword');

        };
    }
]);