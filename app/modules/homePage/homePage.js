app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    '$mdDialog', 'arrayConstants', 'SelectBindServiceApp', '$rootScope', 'alert', '$timeout', 'missingFieldService',
    function(scope, homepageservices, authSvc, successstoriesdata, $mdDialog,
        arrayConstants, service, $rootscope, alerts, timeout, missingFieldService) {
        scope.fromge = 1;
        scope.topage = 5;
        scope.loginpopup = false;
        scope.homeinit = function() {
            timeout(function() {
                successstoriesdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
            }, 1000);
        };
        scope.divloginblock = function() {
            scope.loginpopup = scope.loginpopup ? false : true;
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
                        var responsemiss = response;
                        missingFieldService.GetCustStatus(responsemiss.response[0].CustID).then(function(innerresponse) {
                            console.log('custStatus');
                            console.log(innerresponse.data);


                            var missingStatus = null,
                                custProfileStatus = null;
                            var datav = (innerresponse.data !== undefined && innerresponse.data !== null && innerresponse.data !== '') ? (innerresponse.data).split(';') : null;
                            if (datav !== null) {
                                missingStatus = parseInt((datav[0].split(':'))[1]);
                                custProfileStatus = parseInt((datav[1].split(':'))[1]);
                            }

                            if (custProfileStatus === 439) {
                                if (missingStatus === 0) {
                                    if (responsemiss.response[0].isemailverified === true && responsemiss.response[0].isnumberverifed === true) {
                                        window.location = "home";
                                    } else {
                                        window.location = "mobileverf";
                                    }
                                } else {
                                    window.location = "missingfields/" + missingStatus;
                                }
                            } else {
                                window.location = "blockerController/" + responsemiss.response[0].VerificationCode;
                            }

                        });

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

            sessionStorage.setItem("homepageobject", JSON.stringify(srchobject));
            var realpath = 'General?selectedIndex=2';
            window.open(realpath, "_self");

        };

        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            scope.$broadcast('showforgetpassword');

        };
        // scope.searchpage = function() {
        //     sessionStorage.removeItem("homepageobject");
        //     var realpath = 'General?selectedIndex=2';
        //     window.open(realpath, "_self");
        //     //  $rootscope.$broadcast("profile", 2);
        // };

    }
]);