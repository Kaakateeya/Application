app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', '$rootScope', '$window',
    '$state', 'missingFieldService', 'customerviewfullprofileservices', 'route', 'helperservice', '$timeout', '$http',
    function(scope, authSvc, ngIdle, alertpopup, uibModal,
        $rootscope, window, $state, missingFieldService, customerviewfullprofileservices, route, helperservice, timeout, $http) {
        scope.showhidetestbuttons = function() {
            var datatinfo = authSvc.user();
            if (helperservice.checkstringvalue(datatinfo.custid)) {
                debugger;
                scope.loginstatus = false;
                scope.loginoutstatus = true;
                scope.usernamepersonal = datatinfo.username;
                scope.profileid = datatinfo.profileid;
                scope.paidstatus = datatinfo.paidstatus == 1 ? "Paid" : "unpaid";
                scope.hrefpaid = datatinfo.paidstatus == 1 ? "UpgradeMembership" : "UpgradeMembership";
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
        scope.headerinit = function() {
            scope.loginstatus = true;
            scope.loginoutstatus = false;
            scope.loginpopup = false;
            scope.withlogin = false;
            scope.withoutlogin = true;
            window.scrollTo(0, 0);
            scope.showhidetestbuttons();
        };
        scope.$on('IdleTimeout', function() {
            // alertpopup.dynamicpopup("sessionalert.html", scope, uibModal, 'sm');
            // timeout(function() {
            //     authSvc.logout();
            //     alertpopup.dynamicpopupclose();
            // }, 600 * 1000);
        });
        scope.acceptcontinue = function() {
            ngIdle.setIdle(5 * 60);
            alertpopup.dynamicpopupclose();
        };
        scope.closesession = function() {
            authSvc.logout();
            alertpopup.dynamicpopupclose();
        };
        scope.divloginblock = function() {
            scope.loginpopup = scope.loginpopup ? false : true;
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
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null && response.response !== "null" ? response.response[0] : null);
                        var custidlogin = authSvc.getCustId();
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
                        if (response.response !== null && response.response !== "null") {
                            missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                                var missingStatus = null,
                                    custProfileStatus = null;
                                var datav = (innerresponse.data !== undefined && innerresponse.data !== null && innerresponse.data !== '') ? (innerresponse.data).split(';') : null;
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
                        } else {
                            alert("Please enter valid ProfileID/Email");
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
            var realpath = 'viewFullProfileCustomer';
            route.go(realpath, {});
        };
        scope.redirecthomeordashboard = function() {
            sessionStorage.removeItem("LoginPhotoIsActive");
            var custidlogin = authSvc.getCustId();
            if (custidlogin !== null && custidlogin !== "" && custidlogin !== undefined) {
                route.go("dashboard", { type: 'C' });
            } else {
                var realpath = '/';
                route.go('home', {});
            }
        };
        scope.searchpage = function(typeurl) {
            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    route.go('General', { id: 2 });
                    $rootscope.$broadcast("profile", 2);
                    break;
                case "general":
                    route.go('General', { id: 0 });
                    $rootscope.$broadcast("profile", 0);
                    break;
                case "advanced":
                    route.go('General', { id: 1 });
                    $rootscope.$broadcast("profile", 1);
                    break;
                case "profilesearch":
                    route.go('General', { id: 2 });
                    $rootscope.$broadcast("profile", 2);
                    break;
            }
        };
        scope.homepagelinks = function(typeurl) {
            var currentstatte = $state.current;
            switch (typeurl) {
                case "BookMarked":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'MB' });
                    } else {
                        route.go('dashboardnew', { type: 'MB' });
                    }
                    break;
                case "BookMarkedme":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'WB' });
                    } else {
                        route.go('dashboardnew', { type: 'WB' });
                    }
                    break;
                case "Ignored":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'I' });
                    } else {
                        route.go('dashboardnew', { type: 'I' });
                    }
                    break;
                case "myprofile":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'WV' });
                    } else {
                        route.go('dashboardnew', { type: 'WV' });
                    }
                    break;
                case "myhome":
                    sessionStorage.removeItem("LoginPhotoIsActive");
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'C' });
                    } else {
                        route.go('dashboardnew', { type: 'C' });
                    }
                    break;
                case "Chats":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Chats' });
                    } else {
                        route.go('dashboardnew', { type: 'Chats' });
                    }
                    break;
                case "Requests":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Requests' });
                    } else {
                        route.go('dashboardnew', { type: 'Requests' });
                    }
                    break;
                case "Express":
                    if (currentstatte.name === "dashboardnew") {
                        route.go('dashboard', { type: 'Express' });
                    } else {
                        route.go('dashboardnew', { type: 'Express' });
                    }
                    break;
            }
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alertpopup.showforgetpopup(scope);
        };
        scope.$on("notify-error", function(event, value) {
            console.log(value);
            var logincustid = authSvc.getCustId();
            var httperrorpopupstatus = sessionStorage.getItem("httperrorpopupstatus");
            if (httperrorpopupstatus !== "1") {
                httperrorpopupstatus = 1;
                alertpopup.dynamicpopup("httperrorpopup.html", scope, uibModal, 'sm');
            }
            customerviewfullprofileservices.getCustomerApplicationErroLog(value.statusText, logincustid, value.data.Message, value.status).then(function(response) {
                console.log(response);
            });
        });
        scope.modalpopupclosehttp = function() {
            var httperrorpopupstatus = 1;
            sessionStorage.setItem("httperrorpopupstatus", httperrorpopupstatus);
            alertpopup.dynamicpopupclose();
        };
        scope.feedbackpage = function() {
            var httperrorpopupstatus = 1;
            sessionStorage.setItem("httperrorpopupstatus", httperrorpopupstatus);
            route.go('feedback', {});
        };
        $(document).ready(function() {
            $('.menu_toggle').click(function(e) {
                $('.profile_own_menu>ul').slideToggle();
            });
            $('.profile_own_menu>ul>li').click(function(e) {
                $(this).find('ul').slideToggle();
                $(this).siblings().find('ul').slideUp();
            });
        });


        $http.get('your-server-endpoint');
    }
]);