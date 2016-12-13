app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    '$location', 'getArray', '$timeout', '$rootScope',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, getArray, timeout, $rootscope) {
        sessionStorage.removeItem("LoginPhotoIsActive");
        scope.searchTerm = 0;
        scope.selectcaste = 0;
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.truepartnerrefine = true;
        scope.showcontrols = true;
        var SearchRequest = 0;
        var logincustid = authSvc.getCustId();
        scope.typesearch = "";
        scope.savedsearchselect = [];
        var globalheight;
        var globalheightto;
        var refineheightfrom;
        var refineheightto;
        scope.getpaidstatus = authSvc.getpaidstatus();
        scope.savedclass = scope.getpaidstatus === '1' ? true : false;
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        var searchObjectquery = $location.search();
        scope.selectedIndex = searchObjectquery.selectedIndex;
        scope.loadinging = true;
        scope.activated = true;
        scope.casteshow = true;

        //scope.selectedIndex = 2;
        scope.textlabels = function() {
            _.filter(scope.height, function(obj) {
                if ((obj.value) == (1)) {
                    globalheight = obj.label;


                }
            });
            scope.HeightFromtext = globalheight;
            _.filter(scope.height, function(obj) {
                if ((obj.value) == (38)) {
                    globalheightto = obj.label;

                }
            });
            scope.Heighttotext = globalheightto;
        };
        scope.checkLength = function() {
            var textboxprofileid = document.getElementById("txtProfileid");
            var textbox = document.getElementById("txtFirstNameProfileid");
            var textboxlastname = document.getElementById("txtLastNameProfileid");
            if ((textboxprofileid.value !== "" && textboxprofileid.value !== null) || (textbox.value !== "" && textbox.value !== null) || (textboxlastname.value !== "" && textboxlastname.value !== null)) {
                if (textbox.value !== "" && textbox.value !== null) {
                    if (textbox.value.length < 3) {
                        alerts.open('Mininum 3 charactes required For Name', 'warning');
                        return false;
                    } else {
                        return true;
                    }
                } else if (textboxlastname.value !== "" && textboxlastname.value !== null) {
                    if (textboxlastname.value.length < 3) {
                        alerts.open('Mininum 3 charactes required For Name', 'warning');
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else {
                alerts.open('pls enter atleast one fileld', 'alert alert-danger', 'warning');
                return false;
            }

        };
        scope.controlsbinding = function() {
            timeout(function() {
                scope.arrayAge = scope.Age();
                scope.height = arrayConstants.height;
                scope.MaritalStatus = arrayConstants.MaritalStatus;
                scope.educationcategory = arrayConstants.educationcategory;
                scope.Religion = arrayConstants.Religion;
                scope.Mothertongue = arrayConstants.Mothertongue;
                scope.visastatus = arrayConstants.visastatus;
                scope.stars = arrayConstants.stars;
                scope.Country = getArray.GArray('Country');
                scope.Professiongroup = getArray.GArray('ProfGroup');
                scope.Currency = getArray.GArray('currency');
            }, 1000);
        };

        scope.applycolors = function(value) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined) {
                colors = "selectborderclasscolor";
            } else {
                colors = "selectborderclass";
            }
            return colors;
        };
        scope.Age = function() {
            scope.test = [];
            scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
            for (var i = 18; i < 78; i++) {
                scope.test.push({ label: i + ' years', title: i + ' years', value: i });
            }
            return scope.test;
        };
        scope.changeBindsearhes = function(type, parentval, parentval2) {
            switch (type) {
                case 'Country':
                    scope.State = commonFactory.StateBind(parentval);
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind(parentval);
                    break;
                case 'caste':
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(parentval, (parentval2 !== undefined && parentval2 !== null) ? (parentval2).toString() : 0);
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind(parentval);
                    break;
            }
        };

        scope.savedsearchselectmethod = function(custid, SaveSearchName, iEditDelete) {
            searches.savedsearchselectmethod(custid, SaveSearchName, iEditDelete).then(function(response) {
                _.each(response.data, function(item) {
                    scope.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(custid, "", 1).then(function(response) {
                    _.each(response.data, function(item) {
                        scope.savedsearchselect.push(item);
                    });
                });
            }
        };

        scope.partnerbindings = function(response) {
            console.log(response.data);
            scope.casteshow = false;
            scope.gender = (response.data.intGender) === 2 ? 2 : 1;
            scope.AgeFrom = response.data.Ageto;
            scope.Ageto = response.data.Agefrom;
            scope.HeightFrom = response.data.Heightto;
            scope.Heightto = response.data.Heightfrom;
            scope.maritalstatus = response.data.Maritalstatus.split(',');
            scope.educationcat = response.data.Educationcategory.split(',');
            scope.country = response.data.Country.split(',');
            scope.religion = response.data.Religion;
            scope.mothertongue = response.data.MotherTongue.split(',');
            // scope.Caste = commonFactory.casteDepedency(response.data.Religion, response.data.MotherTongue);
            scope.caste = response.data.Caste !== null ? response.data.Caste.split(',') : "0";
            scope.castetext = response.data.CasteText;
            scope.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.State = commonFactory.StateBind(response.data.Country);
            scope.stateadvance = response.data.State !== null ? response.data.State.split(',') : "0";
            //scope.Educationgroup = commonFactory.educationGroupBind(response.data.Educationcategory);
            // scope.Educationadvance = response.data.Education !== null ? response.data.Education.split(',') : "0";
            // scope.starsadvance = response.data.Stars !== null ? response.data.Stars.split(',') : "0";
            scope.textlabels();
            // refineheightfrom = globalheight.indexOf(" in ") != -1 ? globalheight.split(" in ") : globalheight;
            // refineheightto = globalheightto.indexOf(" in ") != -1 ? globalheightto.split(" in ") : globalheightto;
        };
        scope.generalpageload = function() {
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));

            if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                scope.controlsbinding();
                searches.partnerdetails(scope.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                });
                scope.savedsearchselectmethod(scope.custid, "", 1);

            } else if (scope.object !== undefined && scope.object !== null && scope.object !== null) {
                scope.truepartner = true;
                scope.truepartnerrefine = true;
                // scope.gender = (scope.object.intGender) === 2 ? 2 : 1;
                // scope.AgeFrom = scope.object.FromAge;
                // scope.Ageto = scope.object.ToAge;
                // scope.country = scope.object.Country;
                // scope.religion = scope.object.intReligionID;
                // scope.caste = scope.object.Caste !== null ? scope.object.Caste : "0";
                SearchRequest = {
                    intCusID: null,
                    strCust_id: null,
                    intGender: (scope.object.intGender) === '2' ? 2 : 1,
                    FromAge: scope.object.FromAge,
                    ToAge: scope.object.ToAge,
                    iFromHeight: null,
                    iToHeight: null,
                    Maritalstatus: null,
                    intReligionID: scope.object.intReligionID,
                    MotherTongue: null,
                    Caste: scope.object.Caste !== null ? scope.object.Caste : 0,
                    iPhysicalstatus: null,
                    Complexion: null,
                    Country: scope.object.Country,
                    State: null,
                    Visastatus: null,
                    Educationcategory: null,
                    Education: null,
                    Professiongroup: null,
                    iFromSal: null,
                    iToSal: null,
                    iManglinkKujaDosham: null,
                    iStarLanguage: null,
                    Stars: null,
                    iDiet: null,
                    intPhotoCount: null,
                    StartIndex: 1,
                    EndIndex: 8,
                    i_Registrationdays: null,
                    iAnnualincome: null,
                    flagforurl: null,
                    SavedSearch: null,
                    SearchPageID: null,
                    PageName: null,
                    SavedSearchresultid: null,
                    Searchresult: null
                };
                scope.generalsearchsubmit("homepage", 1, 8);
            } else {
                scope.controlsbinding();
                scope.truepartner = true;
                scope.truepartnerrefine = true;
                scope.gender = 2;
                scope.AgeFrom = 18;
                scope.Ageto = 30;
                scope.religion = 1;
                scope.HeightFrom = 1;
                scope.Heightto = 38;
                scope.textlabels();
            }
        };
        scope.clearSearchTerm = function() {
            scope.searchTerm = '';
        };
        scope.resetfunctionality = function() {
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.gender = 2;
            scope.AgeFrom = 18;
            scope.Ageto = 30;
            scope.religion = 1;
            scope.HeightFrom = 1;
            scope.Heightto = 38;
            scope.maritalstatus = 0;
            scope.educationcat = 0;
            scope.country = 0;
            scope.mothertongue = 0;
            scope.caste = 0;
            scope.regdays = null;
            scope.physicalstatusadvance = null;
            scope.stateadvance = 0;
            scope.visastatusadvance = 0;
            scope.Educationadvance = 0;
            scope.Professiongroupadvance = 0;
            scope.monthsalcurrency = 0;
            scope.kujadosham = null;
            scope.starlanguage = null;
            scope.starsadvance = 0;
            scope.profileid = "";
            scope.firstname = "";
            scope.lastname = "";
        };
        scope.returnnullvalue = function(value) {
            var obj = value !== null && value !== undefined && value !== "" ? (value.toString()) : null;
            return obj;
        };
        scope.submitobjectcommongenad = function(frompage, topage) {
            SearchRequest = {
                intCusID: scope.custid,
                strCust_id: scope.custid !== null ? scope.custid : "",
                intGender: scope.gender,
                FromAge: scope.AgeFrom,
                ToAge: scope.Ageto,
                iFromHeight: scope.HeightFrom,
                iToHeight: scope.Heightto,
                Maritalstatus: scope.returnnullvalue(scope.maritalstatus),
                intReligionID: scope.religion,
                MotherTongue: scope.returnnullvalue(scope.mothertongue),
                Caste: scope.returnnullvalue(scope.caste),
                iPhysicalstatus: scope.typesearch === "advanced" ? scope.physicalstatusadvance : null,
                Complexion: null,
                Country: scope.returnnullvalue(scope.country),
                State: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.stateadvance) : null,
                Visastatus: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.visastatusadvance) : null,
                Educationcategory: scope.returnnullvalue(scope.educationcat),
                Education: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.Educationadvance) : null,
                Professiongroup: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.Professiongroupadvance) : null,
                iFromSal: scope.typesearch === "advanced" ? scope.fromcurrency : null,
                iToSal: scope.typesearch === "advanced" ? scope.tocurrency : null,
                iManglinkKujaDosham: scope.typesearch === "advanced" ? scope.kujadosham : null,
                iStarLanguage: scope.typesearch === "advanced" ? scope.starlanguage : null,
                Stars: scope.typesearch === "advanced" ? scope.returnnullvalue(scope.starsadvance) : null,
                iDiet: scope.typesearch === "advanced" ? scope.diet : null,
                intPhotoCount: scope.isCheckedphoto === true ? 1 : null,
                StartIndex: frompage,
                EndIndex: topage,
                i_Registrationdays: scope.typesearch === "advanced" ? scope.regdays : null,
                iAnnualincome: scope.typesearch === "advanced" ? scope.monthsalcurrency : null,
                flagforurl: null,
                SavedSearch: null,
                SearchPageID: null,
                PageName: null,
                SavedSearchresultid: null,
                Searchresult: null
            };
            return SearchRequest;
        };
        scope.generalsearchsubmit = function(type, frompage, topage, form) {
            scope.loadinging = frompage === 1 ? false : true;
            scope.showcontrols = false;
            scope.truepartner = false;
            if (scope.custid !== null && scope.custid !== "" && scope.custid !== undefined) {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
            switch (type) {
                case "advanced":
                case "general":
                case "slideshow":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            if (scope.custid !== null && scope.custid !== "" && scope.custid !== undefined) {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showloginpopup();
                            }
                        }
                        scope.loadinging = true;
                    });
                    if (type !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    break;
                case "homepage":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                        scope.loadinging = true;
                    });
                    scope.$broadcast('loadmore');
                    break;
                case "profileid":
                    scope.typesearch = type;
                    if (scope.checkLength()) {
                        SearchRequest = {
                            intCusID: scope.custid,
                            intGender: scope.gender,
                            strLastName: scope.lastname,
                            strFirstName: scope.firstname,
                            strProfileID: scope.profileid,
                            intCasteID: null,
                            StartIndex: frompage,
                            EndIndex: topage,
                        };
                        searches.profileidsearch(SearchRequest).then(function(response) {
                            if (parseInt(frompage) === 1) {
                                scope.PartnerProfilesnew = [];
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            }
                            scope.loadinging = true;
                        });
                        scope.$broadcast('loadmore');
                    } else {
                        scope.loadinging = true;
                        scope.showcontrols = true;
                        scope.truepartner = true;
                        scope.truepartnerrefine = true;
                    }
                    break;
                case "savedsearch":
                    scope.submitobjectcommongenad(frompage, topage);
                    scope.submitsavedsearchobject = {
                        customerpersonaldetails: SearchRequest,
                        GetDetails: {
                            CustID: scope.custid !== null ? scope.custid : "",
                            Lookingfor: scope.gender,
                            FromAge: scope.AgeFrom,
                            ToAge: scope.Ageto,
                            FromHeight: scope.HeightFrom,
                            ToHeight: scope.Heightto,
                            Maritalstatus: scope.returnnullvalue(scope.maritalstatus),
                            Religion: scope.religion,
                            Mothertongue: scope.returnnullvalue(scope.mothertongue),
                            Caste: scope.returnnullvalue(scope.caste),
                            Complexion: null,
                            Physicalstatus: type === "advanced" ? scope.physicalstatusadvance : null,
                            CountyWorking: scope.returnnullvalue(scope.country),
                            StateWorking: type === "advanced" ? scope.returnnullvalue(scope.stateadvance) : null,
                            Visastatus: type === "advanced" ? scope.returnnullvalue(scope.visastatusadvance) : null,
                            Educationcategory: scope.returnnullvalue(scope.educationcat),
                            EducationGroup: type === "advanced" ? scope.returnnullvalue(scope.Educationadvance) : null,
                            Educationspecialization: null,
                            professioncategory: null,
                            Professiongroup: type === "advanced" ? scope.returnnullvalue(scope.Professiongroupadvance) : null,
                            Professionspecialization: null,
                            Annualincome: type === "advanced" ? scope.monthsalcurrency : null,
                            FromSalary: type === "advanced" ? scope.fromcurrency : null,
                            ToSalary: type === "advanced" ? scope.tocurrency : null,
                            Starlanguage: type === "advanced" ? scope.starlanguage : null,
                            Star: type === "advanced" ? scope.returnnullvalue(scope.starsadvance) : null,
                            ManglikKujaDosham: type === "advanced" ? scope.kujadosham : null,
                            Drink: null,
                            Smoke: null,
                            Diet: type === "advanced" ? scope.diet : null,
                            Registrationdays: type === "advanced" ? scope.regdays : null,
                            CustSavedSearchName: form.savesearchNames !== null && form.savesearchNames !== undefined && form.savesearchNames !== "" ? form.savesearchNames : null,
                            searchPageName: type === "advanced" ? "Advancesearch" : "Generalsearch",
                            searchPageID: type === "advanced" ? "3" : "2",
                            SearchResult_ID: null
                                //
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.loadinging = true;
                    });

                    scope.$broadcast('loadmore');
                    break;
                case "profileidsavedsearch":
                    SearchRequest = {
                        intCusID: scope.custid,
                        intGender: scope.gender,
                        strLastName: scope.lastname,
                        strFirstName: scope.firstname,
                        strProfileID: scope.profileid,
                        intCasteID: null,
                        StartIndex: frompage,
                        EndIndex: topage,
                    };
                    scope.submitprofileidsavedsearchobject = {
                        customerpersonaldetails: SearchRequest,
                        GetDetails: {
                            CustID: scope.custid !== null ? scope.custid : "",
                            Lookingfor: scope.gender,
                            ProfileID: scope.profileid,
                            FirstName: scope.firstname,
                            LastName: scope.lastname,
                            CustSavedSearchName: form.savesearchNames !== null && form.savesearchNames !== undefined && form.savesearchNames !== "" ? form.savesearchNames : null,
                            searchPageName: "ProfileIDsearch",
                            searchPageID: "1",
                            SearchResult_ID: null
                        }
                    };
                    searches.CustomerProfileIDSavedSearch(scope.submitprofileidsavedsearchobject).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.loadinging = true;
                    });
                    scope.$broadcast('loadmore');
                    alerts.dynamicpopupclose();
                    break;
            }

        };
        scope.savedseapopup = function(type) {
            scope.typesearch = type;
            alerts.dynamicpopup("savedsearch.html", scope, uibModal);
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.$on("modifyursearchpartner", function(event) {
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.object !== undefined && scope.object !== null && scope.object !== null) {
                scope.controlsbinding();
                scope.gender = (scope.object.intGender) === 2 ? 2 : 1;
                scope.AgeFrom = scope.object.FromAge;
                scope.Ageto = scope.object.ToAge;
                scope.country = scope.object.Country;
                scope.religion = scope.object.intReligionID;
                scope.caste = scope.object.Caste !== null ? scope.object.Caste : "0";
                scope.HeightFrom = 1;
                scope.Heightto = 38;
                scope.textlabels();
                sessionStorage.removeItem("homepageobject");
            }
            scope.showcontrols = true;
            scope.truepartner = true;
            scope.truepartnerrefine = true;
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide) {
            scope.generalsearchsubmit("slideshow", frompageslide, topageslide);
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.State = commonFactory.StateBind(modal);
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind(modal);
                    break;
                case 'caste':
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(scope.religion, (modal).toString());
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind(modal);
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            if (scope.custid !== null && scope.custid !== undefined && scope.custid !== "") {
                scope.generalsearchsubmit(scope.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            scope.generalsearchsubmit(scope.typesearch, 1, 8);
        };
        scope.hightFromrefine = function() {
            scope.HeightFromtext = scope.checkheight(scope.HeightFrom);
        };
        scope.hightTorefine = function() {
            scope.Heighttotext = scope.checkheight(scope.Heightto);
        };

        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        };
        var numberInRange = function(number, lower, upper) {
            return number >= lower && number <= upper;
        };
        var checknumber = function(value) {
            if (numberInRange(value, 0, 11)) {
                return "4'" + value + " in";
            } else if (numberInRange(value, 12, 23)) {

                value = (value % 12);
                return "5'" + value + " in";

            } else if (numberInRange(value, 24, 35)) {
                value = (value % 24);
                return "6'" + value + " in";
            } else if (numberInRange(value, 36, 41)) {
                value = (value % 36);
                return "7'" + value + " in";
            }
        };
        scope.showloginpopup = function() {
            $mdDialog.show({

                templateUrl: 'login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: scope

            });
        };
        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });
        scope.cancel = function() {
            $mdDialog.cancel();
        };
        scope.validate = function() {
            if ((scope.username).indexOf("@") !== -1) {
                if (!scope.ValidateEmail(scope.username)) {
                    scope.username = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!scope.Validatnumber(scope.username) || (scope.username).length !== 9) {
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
                        scope.cancel();
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

        scope.gettingsavedsearcheditsearch = function(type, SearchResult_ID, SearchpageID) {
            switch (type) {
                case "search":
                    scope.PartnerProfilesnew = [];
                    var typeofsearch;
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);

                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                        } else {
                            typeofsearch = "advanced";
                        }
                        scope.generalsearchsubmit(typeofsearch, 1, 8, "");
                    });
                    break;
                case "edit":
                    scope.PartnerProfilesnew = [];
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        scope.showcontrols = true;
                        scope.truepartner = true;
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                            scope.selectedIndex = 2;
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.selectedIndex = 0;
                        } else {
                            typeofsearch = "advanced";
                            scope.selectedIndex = 1;
                        }
                    });
                    break;
            }
        };
        scope.clickvalues = function(text) {
            scope.HeightFromtext = text;
        };
        scope.resetgenral = function(type) {
            switch (type) {
                case "general":
                    if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                        searches.partnerdetails(scope.custid, "", "").then(function(response) {
                            console.log(response.data);
                            scope.partnerbindings(response);
                        });
                    } else {
                        scope.resetfunctionality();
                    }
                    break;
            }
        };

        $rootscope.$on("profile", function(event, indexvalue) {
            sessionStorage.removeItem("homepageobject");
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.showcontrols = true;
            scope.selectedIndex = indexvalue;
        });
        scope.redirectToviewfull = function(custid, logid) {
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '#/viewFullProfileCustomer';
            window.open(realpath, '_blank');
        };
        scope.$on("redirectToviewfullprofiles", function(event, custid, logid) {
            scope.redirectToviewfull(custid, logid);
        });
    }
]);