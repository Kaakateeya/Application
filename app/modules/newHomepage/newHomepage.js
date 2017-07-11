app.controller('newhomepcontroller', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
    'SelectBindServiceApp', 'alert', '$timeout',
    'missingFieldService', '$state', 'route', 'helperservice',
    'basicRegistrationService', '$filter', 'newhomepageservices', '$stateParams', '$rootScope',

    function(scope, homepageservices, authSvc, successstoriesdata,
        service, alerts, timeout, missingFieldService, $state, route, helperservice,
        basicRegistrationService, filter, newhomepageservices, $stateParams, $root) {
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.emailpattaren = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i;
        scope.latestprofiles = [];
        scope.branchesarray = [];
        scope.happystoriesarray = [];
        scope.matrimonyarray = [];
        scope.castename = $stateParams.caste;
        $root.casteTitle = '';
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
        }
        scope.castebind = function() {
            service.casteselect().then(function(response) {
                scope.Castearray = [];
                _.each(response.data, function(item) {
                    scope.Castearray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.caste = "";
                scope.Regi.regcaste = "";
            });
        }
        scope.countrybind = function() {
            service.countrySelect().then(function(response) {
                scope.Countryarray = [];
                _.each(response.data, function(item) {
                    scope.Countryarray.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
                scope.country = "";
                scope.Regi.regcountry = "";
            });
        }
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
            //
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
                scope.Regi.regreligion = ""
                scope.Regi.regpostedby = "";
                scope.Regi.regdate = "";
                scope.Regi.regmonth = "";
                scope.Regi.regyear = "";
                scope.Regi.regcaste = "";
                scope.Regi.regcontrycodes = "";
            }, 500);
            scope.stateparamsredirect(scope.castename);
            scope.getalldata('', scope.stateparamsid, '', 1, 4, 2, scope.isActiveid);
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

            var valmm = _.indexOf(monthArr, obj.regmonth);
            if (parseInt(valmm) < 9) {
                var date = obj.regdate + '-' + (valmm != -1 ? (parseInt(valmm) + 1) : 0) + '-' + obj.regyear;
            } else {
                var date = obj.regdate + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.regyear;
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
                console.log(response.data);
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data.length > 0) {
                    scope.latestprofiles = response.data[0];
                    scope.branchesarray = response.data[1];
                    scope.happystoriesarray = response.data[2];
                    scope.matrimonyarray = response.data[3];
                }
            });
        }
        scope.redirecttocastepage = function(obj) {
            var url = "#";
            switch (obj) {
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
                case 'Gowda Matrimony':
                    url = "caste/gowda-matrimony";
                    break;

                case 'Mudaliar Matrimony':
                    url = "caste/mudaliyar-matrimony";

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
            }
            return url;
        };
        scope.redirecttolocation = function(obj) {
            var url = "#";
            debugger;
            switch (obj) {
                case 'Hyderabad Matrimony':
                    url = "location/matrimony-marriage-bureau-in-hyderabad";
                    break;
                case 'Vijayawada Matrimony':
                    url = "location/marriage-bureau-in-vijayawada";
                    break;
                case 'Bangalore Matrimony':
                    url = "location/marriage-bureau-in-bangalore";
                    break;
                case 'Chennai Matrimony':
                    url = "location/chennai-matrimony";
                    break;
                case 'Pondicherry Matrimony':
                    url = "location/pondicherry-matrimony";
                    break;
            }
            return url;
        };
        scope.stateparamsredirect = function(statename) {
            switch (statename) {
                case 'kamma-matrimony':
                    scope.stateparamsid = 402;
                    scope.isActiveid = 1;
                    scope.aboutus = "Caste based matrimonial services are the most effective in Indian context. Taking cue from this phenomenon, Kakateeya.com launched <b>Kamma Matrimony</b> to offer online matrimonial services for this segment of society.  We are providing the user friendly search features to find a bride or groom keeping all your preferences in mind. Now find your Kamma bride or groom in Hyderabad, Guntur, and Vijayawada with ease. We offer a wonderful platform for interaction between the families for fostering a long lasting relationship. Register now at Kakateeya.com to find a partner from your own community.";
                    scope.firstsuccessstory = "This is really an ideal matrimonial service centre replete with Successful partners’ stories. With in just 3 months of the online proposals, we have got married successfully with the blessings of our respective families. No doubt, Kamma Matrimony is such a special force helps everyone in finding out the perfect match.";
                    scope.secondsuccessstory = "A cordial greeting to the entire team of Kamma matrimony for their pronounced job. The website is too good and functional with hundreds of verified profiles. All because of Kaakateeya Kamma matrimony I got my perfect match.";
                    scope.castenameparam = "Kamma Matrimony";
                    $root.casteTitle = 'Kamma matrimony, Kamma marriage bureau, Kamma marriage bureau in Hyderabad, Kamma marriage bureau in Vijayawada, Kamma marriage bureau in Guntur.';
                    $root.keyWord = 'Kamma matrimony, Kamma marriage bureau, Kamma marriage bureau in Hyderabad, Kamma marriage bureau in Vijayawada, Kamma marriage bureau in Guntur.';
                    $root.description = 'Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/kamma-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.propertydescriptioncontent = "Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/kamma-matrimony";
                    $root.propertysite_name = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.twitterdescription = "Kaakateeya Kamma Matrimony - In Kamma Marriage Bureau you will Find thousands of Kamma community profiles. The most trusted Matrimony site for happy marriages.";
                    $root.twittertitle = "Kamma Matrimony, Kamma Matrimony sites, Kamma Marriage bureau";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'reddy-matrimony':
                    scope.stateparamsid = 404;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Reddy Matrimony";
                    scope.aboutus = "Get the premium matrimonial services from the leading matrimony website Kakateeya.com. Are you from the Reddy community? Looking for bride/ groom in your community?  Check out for ideal matches from <b>Reddy Matrimony</b> by Kakateeya.com - a virtual platform where one can express all his/ her needs and also find the person who can satisfy them. We offer superior matchmaking services to meet your prospective life partners along with the detailed family and background information to help you take the next step with confidence.";
                    scope.firstsuccessstory = "Actually I am from the Reddy community and looking for a well educated girl from the last couple of years. I really don’t know how the online matrimony portals help. As a trial I registered myself at kakateeya.com and completed all my profile details. Sneha shows an interest on my profile and contacted me. We met and talked to each other and approached our parents for ratification of our decision. Now our marriage is on the cards. Am very thankful to the Reddy Matrimony team for providing me an avenue to my find my better half easily.";
                    scope.secondsuccessstory = "I am happy to thanks the entire team of Reddy matrimony. My parents demanded me to register with Kaakateeya.com but I said no to them having a really bad experience with other matrimonial sites. Later with curiosity I registered my name there. But this time, my experience was quite good and I found that these guys are different from others. They did what  exactly they promised and within 3 months I got engaged. I got good service from the team.";
                    $root.casteTitle = 'Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial';
                    $root.keyWord = 'Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial';
                    $root.description = 'Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/reedy-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.propertydescriptioncontent = "Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/reddy-matrimony";
                    $root.propertysite_name = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.twitterdescription = "Reddy matrimony – a premium Reddy Marriage Bureau website with Lakhs of Reddy Matrimonial Profiles and trusted by thousands of people. Register for Free!";
                    $root.twittertitle = "Reddy Matrimony, Reddy Marriage Bureau, Reddy Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'kapu-matrimony':
                    scope.stateparamsid = 405;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Kapu Matrimony";
                    scope.aboutus = "Kapu Matrimony by Kakateeya.com is a great place to find your life partner for marriage, or even meet someone with serious relationship potential near you. We offer a wide choice of profiles, matching your criteria and expectations.  We at <b>Kapu Matrimony</b> are the most creditable professionals in rendering the online matrimonial services by expanding the horizon of opportunities for the singles to find their dream partners. Register now and start searching for your dream match.";
                    scope.firstsuccessstory = "I convey my sincere thanks to Kakateeya.com, as I got my life partner from the Kapu community through this matrimony site. We met here and shared our feelings and by regularly chatting found out that we are perfect for each other.  Now we are happily married and life has been beautiful with full of memories since then.";
                    scope.secondsuccessstory = "I would like to thank the Kapu matrimony that helped me to find my match on Kaakateeya.com. I found my soulmate here with whom I can set the rest of my journey. I found Kaakateeya, one of the most reliable matrimony sites and we both are thankful and grateful to Team Kaakateeya for having carved our paths towards a beautiful journey ahead!";
                    $root.casteTitle = 'Kapu Matrimony, Find your perfect match in Kapu marriage bureau';
                    $root.keyWord = 'Kapu matrimony, Kapu marriage bureau';
                    $root.description = 'Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/kapu-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.propertydescriptioncontent = "Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/kapu-matrimony";
                    $root.propertysite_name = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.twitterdescription = "Kaakateeya Kapu Matrimony - The largest Kapu marriage bureau with Lakhs of Telugu Kapu Matrimony profiles. The Most Trusted Brand. Register for FREE!";
                    $root.twittertitle = "Kapu Matrimony, Find your perfect match in Kapu marriage bureau";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'padmashali-matrimony':
                    scope.stateparamsid = 410;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Padmashali Matrimony";
                    scope.aboutus = "Kakateeya.com is one of the largest and trusted matrimonial websites in India, where you can get the perfect bride/ groom from different communities. Whether you are looking for Padmasali singles only or anyone from any part of the World, you will find at Kakateeya.com for sure. We render revolutionary matchmaking services along with 1000's of profiles cutting across age, interests and personalities that are in sync with your interests and status.  Join <b>Padmasali Matrimony</b> to meet your special one today!";
                    scope.firstsuccessstory = "I would like to thank the Padmashali Matrimony for giving us the platform to choose our soul mates as per our choice and I am really grateful to you for giving me the Man of my Dreams from our community.  By the grace of God and the good offices of Padmasali Matrimony, we are all set to launch our life journey of eternal bonding of happiness & bliss.";
                    scope.secondsuccessstory = "I have great experience with Kaakateeya Padmasali matrimony as I got my perfect match through your site. Thanks to Kaakateeya.Com.";
                    $root.casteTitle = 'Padmashali Matrimony, Find your patrner in Padmasali Matrimony';
                    $root.keyWord = 'Padmashali Matrimony, Padmasali Matrimony';
                    $root.description = 'Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/padmashali-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.propertydescriptioncontent = "Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/padmashali-matrimony";
                    $root.propertysite_name = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.twitterdescription = "Kaakateeya Padmashali Matrimony - Find thousands of Padmashali matrimony Profiles, Add your profile and find your perfect Partner - Join for Free.";
                    $root.twittertitle = "Padmashali Matrimony, Find your patrner in Padmasali Matrimony";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'mudaliyar-matrimony':
                    scope.stateparamsid = 438;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Mudaliyar Matrimony";
                    scope.aboutus = "Thanks for making my life beautiful and I suggest Mudaliyar matrimony website for people who are still looking for their dream life partners as this website provides a wide range of choices and profiles within your community so that we can make a successful decision on our own. I found my life partner here and today I changed my status from unmarried to married.";
                    scope.firstsuccessstory = "Thanks for making my life beautiful and I suggest <b>Mudaliyar matrimony</b> website for people who are still looking for their dream life partners as this website provides a wide range of choices and profiles within your community so that we can make a successful decision on our own. I found my life partner here and today I changed my status from unmarried to married.";
                    scope.secondsuccessstory = "I registered my profile on Kaakateeya.com as I was looking for a good looking girl from Mudaliyar community and found my better half from Kaakateeya Mudaliyar Matrimony and we both are happy together.";
                    $root.casteTitle = 'Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms';
                    $root.keyWord = 'Mudaliyar Matrimony, Mudaliyar brides, Mudaliyar grooms';
                    $root.description = 'Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages. Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/mudaliyar-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.propertydescriptioncontent = "Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/mudaliyar-matrimony";
                    $root.propertysite_name = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.twitterdescription = "Mudaliyar Matrimony - Find Lakhs of Mudaliyar brides and Mudaliyar grooms Profiles, The most trusted Matrimony site for happy marriages.";
                    $root.twittertitle = "Mudaliyar Matrimony - Mudaliyar brides and Mudaliyar Grooms";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'gowda-matrimony':
                    scope.stateparamsid = 413;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Gowda Matrimony";
                    scope.aboutus = "If you're looking for a true Jodi, we are sure you've landed at the right place!. <b>Gowda matrimony</b> by Kakateeya.com offers dedicated matrimonial services by providing genuine profiles, matches which suit you the best. We lay bare a huge trove of profiles of brides and grooms within your community. Through Gowda Matrimony, pick your choice and proceed to lay a beautiful life path with your choice. Register your profile now at Kakateeya.com and start finding the right one in your life.";
                    scope.firstsuccessstory = "It's really true that love happens and when it happens it is not possible to exactly express our happiness with the love of our life. Finally i found my Love partner and got connected to her through the Kaakateeya portal.  Everything happened in a jiffy! It was a dream come true meeting. Keep up the spirit and goodwill.";
                    scope.secondsuccessstory = "We met through Gowda matrimony of Kaakateeya.com. Our parents showed interest in each other’s profile and arranged a meeting. We met with each other and decided to take things forward and tied the knot in less than a month. I am really thankful to kaakateeya.com for helping me in finding my soulmate.";
                    $root.casteTitle = 'Gowda Matrimony - Find your perfect Partner for marriage';
                    $root.keyWord = 'Gowda Matrimony, Gowda brides, Gowda grooms';
                    $root.description = 'Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/gowda-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.propertydescriptioncontent = "Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/gowda-matrimony";
                    $root.propertysite_name = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.twitterdescription = "Kaakateeya Gowda Matrimony - Find Lakhs of Gowda brides and Gowda grooms Profiles, Add your profile for Safe & Secured matchmaking experience. Join for Free.";
                    $root.twittertitle = "Gowda Matrimony - Find your perfect Partner for marriage";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'pillai-matrimony':
                    scope.stateparamsid = 439;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Pillai Matrimony";
                    scope.aboutus = "<b>Pillai Matrimony</b> by Kakateeya.com is a top notch matrimonial website providing the best matrimonial services on the globe. With us you are sure to find a perfect match with whom he/she expects to lead a life laced with  bliss and happiness. Our great and timely customer support aids you in taking a right decision in finding your ideal soul mate. We are here to build a better life through happy marriages. Sign up now and find the suitable matrimonial profiles that match all your interests.";
                    scope.firstsuccessstory = "I am thankful to my parents for having registered with Pillai Matrimony. They laid bare a huge list of potential matches for me. The profiles are systematically and scientifically sorted out to vie with my needs and demands. What more could I ask for! It made my decision easy to identify the right one for my life. Finally we are happily married. Thanks to Pillai matrimony that helps me to find a perfect partner for my life.";
                    scope.secondsuccessstory = "I met my dream partner on Pillai matrimony at Kaakateeya.com. The whole team offered great support to me for searching my life partner. Kudos to your services.";
                    $root.casteTitle = 'Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony';
                    $root.keyWord = 'Pillai Matrimony, Pillai Matrimonial';
                    $root.description = 'Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/pillai-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.propertydescriptioncontent = "Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/pillai-matrimony";
                    $root.propertysite_name = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.twitterdescription = "Pillai Matrimony - Provides hundred thousands of verified and Traditional Pillai matrimonial profiles. Find your perfect life partner. Join For Free.";
                    $root.twittertitle = "Pillai Matrimony | Pillai Matrimonial - Kaakateeya Matrimony";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'christian-matrimony':
                    scope.stateparamsid = '';
                    scope.isActiveid = 2;
                    scope.castenameparam = "Christian Matrimony";
                    scope.aboutus = "A dedicated portal for the Christian community -Kakateeya.com. We are offering our dedicated matrimonial services since 1982 across all communities. Our main aim is to fulfil the needs of singles in search of prospective spouses without any hassle, where you can search for your best match. This Christian marriage website seeks to help those who are preparing for marriage. Register now at Kakateeya.com to find your life partner at your fingertips.";
                    scope.firstsuccessstory = "Finding a life partner on any online website is usually ripe with difficulties.  Kaakateeya.com proved me wrong with their methodical approach to address the issue of match making. I appreciate their work and their ideas to find a life partner for the prospects of Christian community. Because of them i found the man of my dreams, my loving and caring husband. I am very thankful to whole your team.";
                    scope.secondsuccessstory = "I found my match on Kaakateeya.com and we are being married next month. Thank you so much to the whole team of Kaakateeya Christian matrimony.";
                    $root.casteTitle = 'Christian Matrimony - Finest Site for Christian Matrimonial';
                    $root.keyWord = 'Christian Matrimony, Christian brides.';
                    $root.description = 'Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/christian-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.propertydescriptioncontent = "Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/christian-matrimony";
                    $root.propertysite_name = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.twitterdescription = "Christian matrimony - Find Lakhs of Christian Brides & Grooms on the finest Christian Matrimony Site for all denominations of Christians - Register for Free";
                    $root.twittertitle = "Christian Matrimony - Finest Site for Christian Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'st-matrimony':
                    scope.stateparamsid = 407;
                    scope.isActiveid = 1;
                    scope.castenameparam = "ST Matrimony";
                    scope.aboutus = "We, at <b>St Matrimony</b> are proud to offer services to easily filter out the most perfect online bride/groom for you within your community in just a few clicks of your mouse. We provide genuine profiles matching with your preferences and requests. Sign up and find the several best matches for your future life partner from kakateeya.com.";
                    scope.firstsuccessstory = "I am on the lookout for the perfect life partner from my community over the last 2years. After registering with ST Matrimony, I got a message from Leela, who accepted my profile. Actually I'm working at Chennai and she was at Delhi. But for ST matrimony it was neigh impossible for us to meet. Thank you team and we as a happy married couple and would highly recommend you in our circle.";
                    scope.secondsuccessstory = "It was a nice experience on Kaakateeya.com having thousands of better and reliable profiles on this platform. Me and my Husband met through ST matrimony of Kaakateeya.com and are really happy to have each other.";
                    $root.casteTitle = 'ST Matrimony – Find your perfect Match in ST Matrimonial';
                    $root.keyWord = 'ST Matrimony, ST Matrimonial';
                    $root.description = 'ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!';

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/st-matrimony";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.propertydescriptioncontent = "ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/st-matrimony";
                    $root.propertysite_name = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.twitterdescription = "ST matrimony - Find Lakhs of ST Brides & Grooms on the leading Matrimonial Site. The Most Trusted Matrimonial website for happy marriages. Register for FREE!";
                    $root.twittertitle = "ST Matrimony – Find your perfect Match in ST Matrimonial";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";

                    break;
                case 'second-marriage-bureau':
                    scope.stateparamsid = '';
                    scope.isActiveid = 3;
                    scope.castenameparam = "Second Marriage Bureau";
                    scope.aboutus = "Though remarriage in India has always been a topic best left untouched,  we at Kakateeya.com understand the need and the requirements of this segment better than anyone else. We have genuine and reliable profiles to choose from. If you are you divorced, separated, widow women/ men, register now at kakateeya.com to find the perfect life partner for the rest of your life. We are here to provide an effective platform for individuals seeking remarriage and yearning to start a new life. Our investigation team provides 100 % secure and safe profiles, which suit you the best.";
                    scope.firstsuccessstory = "Feeling very happy to share my story of how I found my love and soulmate through you guys. After chancing upon Kaakateeya.com, I abandoned all my other efforts of locating my life partner and I am happy about my decision.  One day my phone rang and we had decided to meet up for a coffee and later on we started meeting frequently but we were not sure about taking this relationship to the next level. Destiny wanted us to be together and we both are really thankful to <b>Second Marriage Bureau!<b>";
                    scope.secondsuccessstory = "Finding a perfect guy for second marriage is so tough for me when I set to go further in my life leaving my dark past a mile back. But no such platform I got for a half year. Finally I went through Kaakateeya.com and found the Second marriage bureau, where I found my loving and caring partner to give my life a second chance. All credit goes to Kaakateeya.com for their verified and outstanding collections and the support they offered me to set my life with new found happiness.";
                    $root.casteTitle = 'Second Marriage Bureau - Kaakateeya Matrimonial Services';
                    $root.keyWord = "Second marriage bureau, second marriage matrimony";
                    $root.description = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";

                    // seo content
                    $root.canonicalhref = "http://www.kaakateeya.com/caste/second-marriage-bureau";
                    $root.propertytypecontent = "article";
                    $root.propertytitlecontent = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.propertydescriptioncontent = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";
                    $root.propertyContenturl = "http://www.kaakateeya.com/caste/second-marriage-bureau";
                    $root.propertysite_name = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.twitterdescription = "Second Marriage bureau- India's #1 site for second marriage Matrimony. Give life a second chance, Add your Profile, find your partner. Register for FREE!";
                    $root.twittertitle = "Second Marriage Bureau - Kaakateeya Matrimonial Services";
                    $root.twitterimage = "http://www.kaakateeya.com/src/images/banner1.jpg";
                    break;
                case 'balija-matrimony':
                    scope.stateparamsid = 403;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Balija Matrimony";
                    $root.casteTitle = '';
                    $root.keyWord = '';
                    $root.description = '';

                    $root.canonicalhref = "";
                    $root.propertytypecontent = "";
                    $root.propertytitlecontent = "";
                    $root.propertydescriptioncontent = "";
                    $root.propertyContenturl = "";
                    $root.propertysite_name = "";
                    $root.twitterdescription = "";
                    $root.twittertitle = "";
                    $root.twitterimage = "";

                    break;
                case 'yadava-matrimony':
                    scope.stateparamsid = 406;
                    scope.isActiveid = 1;
                    scope.castenameparam = "Yadava Matrimony";
                    $root.casteTitle = '';
                    $root.keyWord = '';
                    $root.description = '';

                    $root.canonicalhref = "";
                    $root.propertytypecontent = "";
                    $root.propertytitlecontent = "";
                    $root.propertydescriptioncontent = "";
                    $root.propertyContenturl = "";
                    $root.propertysite_name = "";
                    $root.twitterdescription = "";
                    $root.twittertitle = "";
                    $root.twitterimage = "";
                    break;

            }
        };
    }
]);