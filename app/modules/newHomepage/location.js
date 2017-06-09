app.controller('locationparicular', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata',
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
        scope.locationname = $stateParams.location;
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
            scope.stateparamsredirect(scope.locationname);
            scope.getalldata('', '', '', 1, 4, 2, scope.isActiveid);
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
            var url = "/";
            switch (obj.CasteName) {
                case 'Kamma Matrimony':
                    //route.go('newhome', { caste: 'kamma-matrimony' });
                    url = "caste/kamma-matrimony";
                    break;
                case 'Reddy Matrimony':
                    // route.go('newhome', { caste: 'reddy-matrimony' });
                    url = "caste/reddy-matrimony";
                    break;
                case 'Kapu Matrimony':
                    //route.go('newhome', { caste: 'kapu-matrimony' });
                    url = "caste/kapu-matrimony";
                    break;
                case 'Balija Matrimony':
                    //route.go('newhome', { caste: 'balija-matrimony' });
                    url = "caste/balija-matrimony";
                    break;
                case 'Yadava Matrimony':
                    //route.go('newhome', { caste: 'yadava-matrimony' });
                    url = "caste/yadava-matrimony";
                    break;
                case 'Padmashali Matrimony':
                    //route.go('newhome', { caste: 'padmashali-matrimony' });
                    url = "caste/padmashali-matrimony";
                    break;
                case 'Gowda Matrimony':
                    //route.go('newhome', { caste: 'gowda-matrimony' });
                    url = "caste/gowda-matrimony";
                    break;
            }
            return url;
        };
        scope.redirecttolocation = function(obj) {
            var url = "/";
            debugger;
            switch (obj) {
                case 'Hyderabad Matrimony':
                    // route.go('location', { location: 'matrimony-marriage-bureau-in-hyderabad' });
                    url = "location/matrimony-marriage-bureau-in-hyderabad";
                    break;
                case 'Vijayawada Matrimony':
                    // route.go('location', { location: 'marriage-bureau-in-vijayawada' });
                    url = "location/marriage-bureau-in-vijayawada";
                    break;
                case 'Bangalore Matrimony':
                    //route.go('location', { location: 'marriage-bureau-in-bangalore' });
                    url = "location/marriage-bureau-in-bangalore";
                    break;
                case 'Chennai Matrimony':
                    //route.go('location', { location: 'chennai-matrimony' });
                    url = "location/chennai-matrimony";
                    break;
                case 'Pondicherry Matrimony':
                    //route.go('location', { location: 'pondicherry-matrimony' });
                    url = "location/pondicherry-matrimony";
                    break;
            }
            return url;
        };
        scope.stateparamsredirect = function(statename) {
            debugger;
            switch (statename) {
                case 'pondicherry-matrimony':
                    scope.isActiveid = 9;
                    scope.castenameparam = "Pondicherry Matrimony";
                    scope.aboutus = "<b>Pondicherry Matrimony</b> by Kaakateeya.com, one of the leading and most reliable matrimonial sites in Pondicherry offers effective and highly personalized matrimonial services. The site offers visitors thousands of matrimony profiles to find out the perfect match. We provide secure, convenient matrimonial experience for brides and grooms with the best profile to meet all your needs for a flourishing relationship. Register now for Free and find your desired partner.";
                    scope.firstsuccessstory = "I would like to thank the Pondicherry matrimony for their wonderful matrimonial services. I found my perfect partner from Pondicherry matrimony, who gets all my cons and pros of our relationship. It’s a pleasant experience to deal with Pondicherry Matrimony.";
                    scope.secondsuccessstory = "It’s been 2 years, my family especially,  my mom was looking for a perfect girl for me to marry, but luck was not in my favour. I came across Kaakateeya matrimony by chance and met the right girl, as we were looking for. And finally we are going to be together soon. I can claim that you never get such customized services and family like support that I got from Pondicherry Matrimony.";
                    $root.casteTitle = 'Pondicherry Matrimony | Best Matrimony in Pondicherry';
                    $root.keyWord = 'Pondicherry matrimony, matrimony in Pondicherry';
                    $root.description = 'Kaakateeya Pondicherry matrimony – The best Matrimony in Pondicherry. Add your Matrimonial profile now! And find your partner. Register for Free!';
                    break;
                case 'matrimony-in-coimbatore':
                    scope.isActiveid = 7;
                    scope.castenameparam = "Coimbatore Matrimony";
                    scope.aboutus = "Looking for a trusted matrimonial websites in Coimbatore? Congratulations! You are at the right place. Kaakateeya.com, the perfect <b>Matrimony in Coimbatore</b> proffers professional matchmaking services for different religions. We believe in unbreakable wedlock and value our customers. We are here to assist you find a worthy and best Life Partner for you. Register now and create your own profile to take a tour of our profiles of various hues and shades to chose from.";
                    scope.firstsuccessstory = "I am very grateful to Kaakateeya.com, the top drawer matrimony services in Coimbatore for their assistance and support to guide me time to time regarding the best way to find my partner. We are going to start a whole new life very soon with full of joy and it’s all because of the medium that Kaakateeya Matrimony has provided to us. We thank kaakateeya.com for bringing us together and helping us to find our true love.";
                    scope.secondsuccessstory = "Literally, finding a loyal partner with 100% compatibility is not an easy task ever. I was looking for a good looking and settled Punjabi guy in Coimbatore as I didn’t want to quit my job. Then I heard about Kaakateeya matrimony in Coimbatore from one of my close friends and supposed to visit the site. Amazing! Just a single page registration with minimal requirements and you are all set to hunt your dream boy, just like me. Thank you Kaakateeya matrimony to let me find my better half with ease. Found him love him.";
                    $root.casteTitle = 'Matrimony in Coimbatore | Matrimony Services in Coimbatore';
                    $root.keyWord = 'Matrimony in Coimbatore, matrimony services in Coimbatore';
                    $root.description = 'Matrimony in Coimbatore - The best matrimony services in Coimbatore. Search your life partner among thousands of best Coimbatore matrimony profiles. Join For Free!';
                    break;
                case 'marriage-bureau-in-vijayawada':
                    scope.isActiveid = 5;
                    scope.castenameparam = "Vijayawada Matrimony";
                    scope.aboutus = "Kaakateeya.com is one of the most trusted marriage bureaus in Vijayawada to deal with all communities. We at <b>Marriage bureau in Vijayawada</b> provide the effective matching solutions to prospective brides and grooms. We have been running the bureau since 1982 with the prime objective to offer a superior match-making experience to our clients. Start searching your partner with a Single Page registration for free and enjoy the experience of best online matrimonial search ever.";
                    scope.firstsuccessstory = "I am grateful to kaakateeya.com for this amazing matrimonial website. Technically, it’s super easy to use and verbally, this organization is doing a great job to get blessings from billions of people from all over the world. I would like to thank the whole team from the core of my heart to make the way to meet my perfect soul mate. Thank you Kakateeya.com and keep shining!";
                    scope.secondsuccessstory = "Marriage is not just a tie, it’s the strongest string made up of trust and faith. And in my case it was quite difficult to find a perfect match to tie the knot with. In the mean while Kaakateeya matrimony, a certified marriage bureau in Vijayawada helped me to get the perfect girl for me. And it’s beyond my expectation to have such a well behaved, organised and a beautiful lady next to me. Thank you Kaakateeya matrimony for all your cooperation and support.";
                    $root.casteTitle = 'Marriage Bureau in Vijayawada | Matrimony in Vijayawada';
                    $root.keyWord = 'Marriage Bureau in Vijayawada, Matrimony in Vijayawada';
                    $root.description = 'Kaakateeya Marriage bureau in Vijayawada is Trusted by Thousands of our customers. Add Your Profile and Find Your Perfect Life Partner, Register for Free!';
                    break;
                case 'matrimony-marriage-bureau-in-hyderabad':
                    scope.isActiveid = 4;
                    scope.castenameparam = "Hyderabad Matrimony";
                    scope.aboutus = "Kaakateeya.com, the leading <b>Marriage Bureau in Hyderabad</b> is a great place to find your perfect match to kick-start a brand new life. We are the one stop source for bride and groom to communicate with each other. We at Hyderabad Matrimony provide safe, secure and verified choices to search for an ideal marriage partner. Create your profile now on our matrimonial website & start searching prospective Indian brides and Indian grooms today!";
                    scope.firstsuccessstory = "I really express my sincere thanks and gratitude to Hyderabad matrimony for tying us together as God decided. It’s a reliable matrimonial website that helped me to find my perfect partner for the rest of my life. We are very happy to have found each other on Kakateeya.com. Thank you so much again for your wonderful services.";
                    scope.secondsuccessstory = "I am from Hyderabad, settled in the US, but my family was looking for an Indian traditional girl for me. Frankly speaking, I had rejected almost 10 marriage proposal till last year. At last my parents told me to find a girl of my own and I thought to go with matrimony site. Though I was not sure about my decision, I started my search with matrimonial sites before settling down with Kaakateeya matrimony, one of the finest marriage bureaus in Hyderabad. It has a huge collection of very attractive profiles and offers thousands of options to choose from as per your specification. Thank you Kaakateeya matrimony.";
                    $root.casteTitle = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya';
                    $root.keyWord = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad';
                    $root.description = 'Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!';
                    break;
                case 'chennai-matrimony':
                    scope.isActiveid = 6;
                    scope.castenameparam = "Chennai Matrimony";
                    scope.aboutus = "Your search for a reliable matrimonial services from Chennai ends here. Kakateeya's <b>Channai Matrimony</b> is the right choice. We have been providing successful  matrimonial services since 1982 at most economical prices. Our professional team will work with you, at your pace and help you find apt match consistent with your requirements. Kaakateeya <b>matrimony in Chennai</b> is an exclusive matrimonial website to make the final match.";
                    scope.firstsuccessstory = "Chennai Matrimony has laid an excellent platform in finding my life partner. I would sincerely appreciate and thank the whole matrimony team in providing assistance with boundless energy in my endeavor of finding my better half. We found each other and now we are celebrating 2 years of our togetherness.";
                    scope.secondsuccessstory = "Our story starts from Chennai Matrimony. In brief, it’s the one stop solution for marriage. Kaakateeya matrimony and the team has more than 5 years of experience over matchmaking and it has a very good collection of candidates. I found my soulmate here and now we are happy together. Thank you Chennai matrimony.";
                    $root.casteTitle = 'Chennai Matrimony, Matrimony in Chennai- Kaakateeya';
                    $root.keyWord = 'Chennai Matrimony, Matrimony in Chennai';
                    $root.description = 'Kaakateeya Chennai Matrimony – First-rate Matrimony site in Chennai. Add your Matrimonial Profile Now and find your dream partner, Register for Free.';
                    break;
                case 'marriage-bureau-in-bangalore':
                    scope.isActiveid = 9;
                    scope.castenameparam = "Bangalore Matrimony";
                    scope.aboutus = "Kakateeya.com is one of the best <b>marriage bureaus in Bangalore</b> to find suitable life partner.  We offer the most comprehensive matchmaking services through our dedicated website to help you find your soulmate. Our customized packages lend satisfying experience by offering a service that is easy, safe and secure. Our unique matchmaking system at Kakateeya.com will ensure you meet only the most suitable candidate. Sign up now and find the ideal partner for the rest of your life. Register for free. Absolute privacy guaranteed.";
                    scope.firstsuccessstory = "This Kaakateeya matrimonial website is doing a great social work of helping people get married. I got my life partner and now we are living a happy life together. I appreciate their outreach and I feel elated for using their services and reach my beau.  Thank you Kakateeya.com. Keep doing the noble work.";
                    scope.secondsuccessstory = "Three years earlier I met a girl in a conference in Delhi, but because of busy schedule I didn’t have enough communication with her to have her contact info. Last year I found her in Kaakateeya matrimony in Bangalore. It might be a coincidence but I found her and after one month we are going to celebrate our 1st wedding anniversary. Thank you Kaakateeya matrimony.";
                    $root.casteTitle = 'Marriage bureau in Bangalore | Matrimony in Bangalore';
                    $root.keyWord = 'Marriage bureau in Bangalore, matrimony in Bangalore, Matrimony services in Bangalore';
                    $root.description = 'Kaakateeya Marriage bureau in Bangalore is a top matchmaking portal for Matrimony in Bangalore. We offer matrimony services in Bangalore. Register for FREE!';
                    break;
                default:
                    scope.isActiveid = 4;
                    scope.castenameparam = "Hyderabad Matrimony";
                    scope.aboutus = "Kaakateeya.com, the leading <b>Marriage Bureau in Hyderabad</b> is a great place to find your perfect match to kick-start a brand new life. We are the one stop source for bride and groom to communicate with each other. We at Hyderabad Matrimony provide safe, secure and verified choices to search for an ideal marriage partner. Create your profile now on our matrimonial website & start searching prospective Indian brides and Indian grooms today!";
                    scope.firstsuccessstory = "I really express my sincere thanks and gratitude to Hyderabad matrimony for tying us together as God decided. It’s a reliable matrimonial website that helped me to find my perfect partner for the rest of my life. We are very happy to have found each other on Kakateeya.com. Thank you so much again for your wonderful services.";
                    scope.secondsuccessstory = "I am from Hyderabad, settled in the US, but my family was looking for an Indian traditional girl for me. Frankly speaking, I had rejected almost 10 marriage proposal till last year. At last my parents told me to find a girl of my own and I thought to go with matrimony site. Though I was not sure about my decision, I started my search with matrimonial sites before settling down with Kaakateeya matrimony, one of the finest marriage bureaus in Hyderabad. It has a huge collection of very attractive profiles and offers thousands of options to choose from as per your specification. Thank you Kaakateeya matrimony.";
                    $root.casteTitle = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad - Kaakateeya';
                    $root.keyWord = 'Hyderabad Matrimony, Marriage Bureau in Hyderabad';
                    $root.description = 'Hyderabad Matrimony - Kaakateeya Matrimony is one of the best Marriage Bureau in Hyderabad. Trusted by thousands of People. Registration for FREE!';
                    break;
            }
        };
    }
]);