app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    '$mdDialog', 'arrayConstants', 'SelectBindServiceApp', '$rootScope', 'alert',
    function(scope, homepageservices, authSvc, successstoriesdata, $mdDialog, arrayConstants, service, $rootscope, alerts) {
        scope.fromge = 1;
        scope.topage = 5;
        scope.homeinit = function() {
            successstoriesdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
                scope.successstoriesarray = response.data;
            });
        };

        scope.Age = function() {
            scope.test = [];
            scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                scope.test.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return scope.test;

        };
        scope.gender = "2";
        // scope.loadUsers = function() {
        //     return timeout(function() {
        //         scope.arrayAge = scope.arrayAge || scope.Age();
        //     }, 650);
        // };
        scope.arrayAge = scope.Age();
        scope.Religion = arrayConstants.Religion;
        service.countrySelect().then(function(response) {
            scope.Country = [];
            scope.Country.push({ "label": "--Select--", "title": "--Select--", "value": "0" });
            _.each(response.data, function(item) {
                scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });

        service.casteselect().then(function(response) {
            scope.Caste = [];
            scope.Caste.push({ "label": "--Select--", "title": "--Select--", "value": "0" });
            _.each(response.data, function(item) {
                scope.Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.Agefrom = 18;
        scope.Ageto = 30;
        scope.religion = 1;
        scope.divloginblock = function() {
            $('.login_block_header').toggle();
        };
        scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
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
                        console.log(response);
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        if (response.response[0].isemailverified === true && response.response[0].isnumberverifed === true) {
                            window.location = "#/home";
                        } else {
                            window.location = "#/mobileverf";
                        }
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


        scope.ValidatequickRegister = function() {
            var srchobject = {};
            srchobject.intCusID = null;
            srchobject.strCust_id = null;
            srchobject.intGender = scope.gender;
            srchobject.FromAge = scope.Agefrom;
            srchobject.ToAge = scope.Ageto;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country;
            srchobject.State = null;
            srchobject.Visastatus = null;
            srchobject.Educationcategory = null;
            srchobject.Education = null;
            srchobject.Professiongroup = null;
            srchobject.iFromSal = null;
            srchobject.iToSal = null;
            srchobject.iManglinkKujaDosham = null;
            srchobject.iStarLanguage = null;
            srchobject.Stars = null;
            srchobject.iDiet = null;
            srchobject.intPhotoCount = null;
            srchobject.StartIndex = null;
            srchobject.EndIndex = null;
            srchobject.i_Registrationdays = null;
            srchobject.iAnnualincome = null;
            srchobject.flagforurl = null;
            srchobject.SavedSearch = null;
            srchobject.SearchPageID = null;
            srchobject.PageName = null;
            srchobject.SavedSearchresultid = null;
            srchobject.Searchresult = null;
            // sessionStorage.removeItem("homepageobject");
            sessionStorage.setItem("homepageobject", JSON.stringify(srchobject));
            var realpath = '#/General?selectedIndex=2';
            window.open(realpath, "_self");
            //$rootscope.$broadcast("profile", 2);
        };

        scope.showforgetpasswordpopup = function() {
            scope.$broadcast('showforgetpassword');

        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            var realpath = '#/General?selectedIndex=2';
            window.open(realpath, "_self");
            $rootscope.$broadcast("profile", 2);
        };
    }
]);