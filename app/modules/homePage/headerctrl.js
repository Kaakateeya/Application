app.controller('headctrl', ['$scope', 'authSvc', 'Idle', 'alert', '$uibModal', '$rootScope', '$window','$state',
    function(scope, authSvc, ngIdle, alertpopup, uibModal, $rootscope, window,$state) {
        window.scrollTo(0, 0);
        scope.showhidetestbuttons = function() {
            var datatinfo = authSvc.user();
            if (datatinfo.custid !== "" && datatinfo.custid !== undefined && datatinfo.custid !== null) {
                scope.loginstatus = false;
                scope.loginoutstatus = true;
                scope.usernamepersonal = datatinfo.username;
                scope.profileid = datatinfo.profileid;
                scope.paidstatus = datatinfo.paidstatus == 1 ? "Paid" : "unpaid";
                //scope.javascript = "javascript:void(0)";
                scope.hrefpaid = datatinfo.paidstatus == 1 ? "#/UpgradeMembership" : "#/UpgradeMembership";
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
                        sessionStorage.removeItem("homepageobject");
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
              var currentstatte= $state.current;
            switch (typeurl) {
                case "BookMarked":
                 
                   if(currentstatte.name==="dashboardnew")
                   {
                   var realpath = '#/home?type=MB';
                    window.open(realpath, "_self");
                   }
                   else{
                    var realpathb = '#/Dashboard?type=MB';
                    window.open(realpathb, "_self");
                   }
                    break;
                case "BookMarkedme":
                   
                     if(currentstatte.name==="dashboardnew")
                    {
                   var BookMarkedme = '#/home?type=WB';
                    window.open(BookMarkedme, "_self");
                   }
                   else{
                    var BookMarkedmes = '#/Dashboard?type=WB';
                    window.open(BookMarkedmes, "_self");
                   }
                    break;
                case "Ignored":
                    
                     if(currentstatte.name==="dashboardnew")
                    {
                   var Ignored = '#/home?type=I';
                    window.open(Ignored, "_self");
                   }
                   else{
                    var Ignoreds = '#/Dashboard?type=I';
                    window.open(Ignoreds, "_self");
                   }
                    break;
                case "myprofile":
                    
                     if(currentstatte.name==="dashboardnew")
                    {
                    var myprofile = '#/home?type=WV';
                    window.open(myprofile, "_self");
                   }
                   else{
                    var myprofiledd = '#/Dashboard?type=WV';
                    window.open(myprofiledd, "_self");
                   }
                    break;
                case "myhome":
                    sessionStorage.removeItem("LoginPhotoIsActive");
                  
                   if(currentstatte.name==="dashboardnew")
                   {
                   var myhome = '#/home?type=C';
                    window.open(myhome, "_self");
                   }
                   else{
                    var ddddd = '#/Dashboard?type=C';
                    window.open(ddddd, "_self");
                   }
                     console.log(currentstatte);
                    break;
                case "Chats":
                
                   if(currentstatte.name==="dashboardnew")
                   {
                   var Chatsss = '#/home?type=Chats';
                    window.open(Chatsss, "_self");
                   }
                   else{
                    var Chats = '#/Dashboard?type=Chats';
                    window.open(Chats, "_self");
                   }
                    break;
                case "Requests":
                   
                   if(currentstatte.name==="dashboardnew")
                   {
                   var Requests = '#/home?type=Requests';
                    window.open(Requests, "_self");
                   }
                   else{
                    var Requestsss = '#/Dashboard?type=Requests';
                    window.open(Requestsss, "_self");
                   }
                    break;
                case "Express":
                   
                   if(currentstatte.name==="dashboardnew")
                   {
                   var Express = '#/home?type=Express';
                    window.open(Express, "_self");
                   }
                   else{
                    var Expressdd = '#/Dashboard?type=Express';
                    window.open(Expressdd, "_self");
                   }
                    break;
            }
        };
        scope.showforgetpasswordpopup = function() {
            scope.$broadcast('showforgetpassword');

        };
        
    }
]);