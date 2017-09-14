app.controller('newhomepagecastecontroller', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$window', '$rootScope',
    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $window, $rootScope) {

        //caste dynamic root initialisation


        $rootScope.casteTitle = 'Caste-Kaakateeya';
        $rootScope.keyWord = '';
        $rootScope.description = '';
        // $rootScope.canonicalhref = "http://www.kaakateeya.com";
        $rootScope.propertytypecontent = "website";
        $rootScope.propertytitlecontent = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.propertydescriptioncontent = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        //$rootScope.propertyContenturl = "http://www.kaakateeya.com";
        $rootScope.propertysite_name = "Best Marriage Bureau In India";
        $rootScope.twitterdescription = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
        $rootScope.twittertitle = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
        $rootScope.twitterimage = "";
        $rootScope.robots = "nofollow, noindex";





        //end here





        scope.message = "qqqqqqq";
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        var childStayingWitharray = [
            { "label": "Father", "title": "Father", "value": 39 },
            { "label": "Mother", "title": "Mother", "value": 40 },
            { "label": "YoungerBrother", "title": "YoungerBrother", "value": 41 },
            { "label": "ElderBrother", "title": "ElderBrother", "value": 42 },
            { "label": "Self", "title": "Self", "value": 283 },
            { "label": "YoungerSister", "title": "YoungerSister", "value": 321 },
            { "label": "ElderSister", "title": "ElderSister", "value": 322 },
            { "label": "FatherYoungerBrother", "title": "FatherYoungerBrother", "value": 323 },
            { "label": "FatherElderBrother", "title": "FatherElderBrother", "value": 324 },
            { "label": "FatherYoungerSister", "title": "FatherYoungerSister", "value": 325 },
            { "label": "FatherElderSister", "title": "FatherElderSister", "value": 326 },
            { "label": "MotherYoungerBrother", "title": "MotherYoungerBrother", "value": 327 },
            { "label": "MotherElderBrother", "title": "MotherElderBrother", "value": 328 },
            { "label": "MotherYoungerSister", "title": "MotherYoungerSister", "value": 329 },
            { "label": "MotherElderSister", "title": "MotherElderSister", "value": 320 },
            { "label": "Spouse", "title": "Spouse", "value": 334 },
            { "label": "XRelation", "title": "XRelation", "value": 554 },
            { "label": "GrandFather", "title": "GrandFather", "value": 556 },
            { "label": "GrandMother", "title": "GrandMother", "value": 557 },
            { "label": "SisterHusband", "title": "SisterHusband", "value": 558 },
            { "label": "Friend", "title": "Friend", "value": 559 },
            { "label": "Relative", "title": "Relative", "value": 560 },
            { "label": "Uncle", "title": "Uncle", "value": 561 },
            { "label": "Aunt", "title": "Aunt", "value": 562 }
        ];
        var Mothertongueselect = [
            { "label": "Telugu", "title": "Telugu", "value": 1 },
            { "label": "Tamil", "title": "Tamil", "value": 2 },
            { "label": "Kannada", "title": "Kannada", "value": 3 },
            { "label": "Hindi", "title": "Hindi", "value": 4 },
            { "label": "Punjabi", "title": "Punjabi", "value": 5 },
            { "label": "Urdu", "title": "Urdu", "value": 6 },
            { "label": "Lambadi", "title": "Lambadi", "value": 7 },
            { "label": "Marati", "title": "Marati", "value": 8 },
            { "label": "Gujaraathi", "title": "Gujaraathi", "value": 9 },
            { "label": "English", "title": "English", "value": 10 },
            { "label": "Malayalam", "title": "Malayalam", "value": 11 },
            { "label": "Saurashtra", "title": "Saurashtra", "value": 12 },
            { "label": "Orea", "title": "Orea", "value": 13 },
            { "label": "telugu", "title": "telugu", "value": 14 }
        ];
        var Religion = [
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ];
        scope.ageselect = function() {
            var test = [];
            test.push({ label: "--select--", title: "--select--", value: "" });
            for (var i = 18; i < 78; i++) {
                test.push({ "label": i, "title": i, "value": i });
            }
            return test;
        };
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        };
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        };
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": 'Month', "title": 'Month', "value": "" });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            return option;
        };
        scope.countryCodeselect = function() {
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
                scope.Regi.regcontrycodes = "";
            });
        };
        scope.castedependency = function(parentval1, parentval2) {
            var casteArr = [];
            service.castedependency(parentval1, parentval2).then(function(response) {
                _.each(response.data, function(item) {
                    casteArr.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            return casteArr;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Date', "title": 'Date', "value": "" });
            for (var i = from; i <= to; i++) {
                var strValue = null;
                if (i <= 9) {
                    strValue = "0" + i;
                } else {
                    strValue = i;
                }
                Arr.push({ "label": strValue, "title": strValue, "value": strValue });
            }
            return Arr;
        };
        scope.year = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": 'Year', "title": 'Year', "value": "" });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            return Arr;
        };
        scope.homeinit = function() {
            scope.Regi = {};
            scope.loginpopup = false;
            scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
            scope.username = '';
            scope.password = "";
            scope.Age = [];
            scope.Religionarray = [];
            scope.MotherTonguearray = [];
            scope.postedby = [];
            scope.monthArr = [];
            scope.dateArr = [];
            scope.yearArr = [];
            scope.countryCode = [];
            scope.castearrayreg = [];
            scope.Age = scope.ageselect();
            scope.Religionarray = Religion;
            scope.MotherTonguearray = Mothertongueselect;
            scope.postedby = childStayingWitharray;
            timeout(function() {
                successstoriesdata.suceessdataget(1, 5).then(function(response) {
                    scope.successstoriesarray = response.data;
                });
                scope.monthArr = scope.monthBind();
                scope.dateArr = scope.date('', 1, 31);
                scope.yearArr = scope.year('', 1936, 1998);
                scope.castebind();
                scope.countrybind();
                scope.countryCodeselect();
                scope.gender = "2";
                scope.Agefrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.caste = "";
                scope.country = "";
                scope.Regi.regcountry = "";
                scope.Regi.regmothertongue = "";
                scope.Regi.regreligion = "";
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.getalldata(1, '', '', 1, 3, 2, '');
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
            srchobject.FromAge = scope.Agefrom !== null && scope.Agefrom !== 0 ? scope.Agefrom : null;
            srchobject.ToAge = scope.Ageto !== null && scope.Ageto !== 0 ? scope.Ageto : null;
            srchobject.iFromHeight = null;
            srchobject.iToHeight = null;
            srchobject.Maritalstatus = null;
            srchobject.intReligionID = scope.religion !== null && scope.religion !== 0 ? scope.religion : null;
            srchobject.MotherTongue = null;
            srchobject.Caste = scope.caste;
            srchobject.iPhysicalstatus = null;
            srchobject.Complexion = null;
            srchobject.Country = scope.country !== null && scope.country !== 0 ? scope.country : null;
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
            route.go('General', { id: 2 });
        };
        scope.showforgetpasswordpopup = function() {
            scope.loginpopup = false;
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function() {
            sessionStorage.removeItem("homepageobject");
            route.go('General', { id: 2 });
        };
        scope.cancel = function() {
            alerts.dynamicpopupclose();
        };
        scope.mddiologcancel = function() {
            alerts.forgetpasswordhide();
        };
        scope.agefromtoagechange = function(from, to, flag) {
            switch (flag) {
                case 1:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Agefrom = 0;
                            alert('Please enter valid From Age');
                        }
                    }
                    break;
                case 2:
                    if ((parseInt(scope.Agefrom)) !== 0 && (parseInt(scope.Ageto)) !== 0) {
                        if (parseInt(scope.Agefrom) > parseInt(scope.Ageto)) {
                            scope.Ageto = 0;
                            alert('Please enter valid To Age');
                        }
                    }
                    break;
            }
        };


        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.regdate <= 30 && minth30.indexOf(obj.regmonth) !== -1) || (obj.regdate <= 31 && months31.indexOf(obj.regmonth) !== -1) || ((obj.regdate <= 28 && month28.indexOf(obj.regmonth) !== -1))) {} else {
                if (type === 'day') {
                    obj.regmonth = '';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.regdate = '';
                }
            }
        };

        scope.changeBind = function(parentval, parentval2) {
            scope.castearrayreg = [];
            if (parentval !== undefined && parentval !== 0 && parentval2 !== 0 && parentval2 !== undefined && parentval2 !== "" && parentval2 !== null && parentval !== "" && parentval !== null) {
                scope.castearrayreg = scope.castedependency((parentval), (parentval2));
            }
        };

        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.Regi.regemail = '';
                            alert('Email Already Exists');
                        } else {
                            scope.Regi.regmobilenumber = '';
                            alert('Mobile number Already Exists');
                        }
                    }
                });
            }
        };
        scope.regSubmit = function(obj) {
            var date;
            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
            }
            var inputObj = {
                strFirstName: obj.regfirstname,
                strLastName: obj.reglastname,
                dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
                intGenderID: obj.reggender,
                intReligionID: obj.regreligion,
                intMotherTongueID: obj.regmothertongue,
                intCasteID: obj.regcaste,
                intCountryLivingID: obj.regcountry,
                intMobileCode: obj.regcontrycodes,
                intLandCode: null,
                IsCustomer: 1,
                strMobileNo: obj.regmobilenumber,
                ID: 1,
                strAreaCode: null,
                strLandNo: null,
                strEmail: obj.regemail,
                strPassword: obj.regpassword,
                intProfileRegisteredBy: null,
                intEmpID: null,
                intCustPostedBY: obj.regpostedby
            };

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.Regi.regemail, scope.Regi.regpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.regfirstname, ln: obj.reglastname, countryID: obj.regcontrycodes, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.getalldata = function(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive) {
            newhomepageservices.getCustomerHomePageDesignData(flag, casteid, custid, fromindex, EndIndex, GenderID, isActive).then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data;
                }
            });
        };
        scope.redirecttocastepage = function(obj) {
            var url = "#";
            switch (obj.TableName) {
                case 'Kamma Matrimony':
                    url = "caste/kamma-matrimony";
                    break;
                case 'Reddy Matrimony':
                    url = "caste/reddy-matrimony";
                    break;
                case 'Kapu Matrimony':
                    url = "caste/kapu-matrimony";
                    break;
                case 'Balija Matrimony':
                    url = "caste/balija-matrimony";
                    break;
                case 'Yadava Matrimony':
                    url = "caste/yadava-matrimony";

                    break;
                case 'Padmashali Matrimony':
                    url = "caste/padmashali-matrimony";

                    break;
                case 'Mudaliar Matrimony':
                    url = "caste/mudaliar-matrimony";
                    break;
                case 'Pillai Matrimony':
                    url = "caste/pillai-matrimony";

                    break;
                case 'ST Matrimony':
                    url = "caste/st-matrimony";

                    break;
                case 'Christian Matrimony':
                    url = "caste/christian-matrimony";
                    break;
                case 'Second marriage bureau':
                    url = "caste/second-marriage-bureau";
                    break;
                case 'Gowda Matrimony':
                    url = "caste/gowda-matrimony";
                    break;
            }
            return url;
        };
    }
]);