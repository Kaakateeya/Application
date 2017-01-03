app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    '$location', 'getArray', '$timeout', '$rootScope', 'commonFactory', 'missingFieldService', '$stateParams', 'route',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, getArray,
        timeout, $rootscope, commonpopup, missingFieldService, $stateParams, route) {
        var SearchRequest = {};
        var logincustid = authSvc.getCustId();
        var globalheight;
        var globalheightto;
        var refineheightfrom;
        var refineheightto;
        scope.filtervalues = function(arr, whereValue) {
            var storeValue = "";
            if (whereValue.indexOf(',') === -1) {
                _.filter(arr, function(obj) {
                    if ((obj.value) == parseInt(whereValue)) {
                        storeValue = obj.label;
                    }
                });
            } else {
                var arrvals = whereValue.split(',');
                _.each(arrvals, function(item, index) {
                    _.filter(arr, function(obj) {
                        if ((obj.value) == parseInt(arrvals[index])) {
                            storeValue = commonpopup.checkvals(storeValue) ? storeValue + ',' + obj.label : obj.label;
                        }
                    });
                });
            }
            return storeValue;
        };
        scope.textlabels = function(fromheight, toheight, caste, education) {
            scope.HeightFromtext = scope.filtervalues(scope.height, fromheight) !== '' ? ((scope.filtervalues(scope.height, fromheight)).split('-'))[0] : '';
            scope.Heighttotext = scope.filtervalues(scope.height, toheight) !== '' ? ((scope.filtervalues(scope.height, toheight)).split('-'))[0] : '';
            scope.educationcategorytxt = scope.filtervalues(scope.educationcategory, education) !== '' ? (scope.filtervalues(scope.educationcategory, education)) : '';
        };
        scope.checkLength = function() {
            var textboxprofileid = document.getElementById("txtProfileid");
            var textbox = document.getElementById("txtFirstNameProfileid");
            var textboxlastname = document.getElementById("txtLastNameProfileid");
            if ((textboxprofileid.value !== "" && textboxprofileid.value !== null) || (textbox.value !== "" && textbox.value !== null) || (textboxlastname.value !== "" && textboxlastname.value !== null)) {
                if (textbox.value !== "" && textbox.value !== null) {
                    if (textbox.value.length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For Name', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else if (textboxlastname.value !== "" && textboxlastname.value !== null) {
                    if (textboxlastname.value.length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For LastName', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please enter atleast one fileld', 2500);
                return false;
            }
        };
        scope.controlsbinding = function() {
            scope.height = arrayConstants.height;
            scope.educationcategory = arrayConstants.educationcategory;
            scope.MaritalStatus = arrayConstants.MaritalStatus;
            scope.Mothertongue = arrayConstants.Mothertongue;
            scope.visastatus = arrayConstants.visastatus;
            scope.stars = arrayConstants.stars;
            timeout(function() {
                scope.Country = getArray.GArray('Country');
                scope.Professiongroup = getArray.GArray('ProfGroup');
                scope.Currency = getArray.GArray('currency');
            }, 1000);
        };

        scope.applycolors = function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        };
        scope.savedsearchselectmethods = function(custid, SaveSearchName, iEditDelete) {
            searches.savedsearchselectmethod(custid, SaveSearchName, iEditDelete).then(function(response) {
                scope.savedsearchselect = [];
                _.each(response.data, function(item) {
                    scope.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(scope.custid, "", 1).then(function(response) {
                    scope.savedsearchselect = [];
                    console.log(response);
                    _.each(response.data, function(item) {

                        scope.savedsearchselect.push(item);
                    });
                });
            }
        };
        scope.$watch("savedsearchselect", function(current, old) {
            scope.savedsearchselect = current;
        });
        scope.arrayToString = function(string) {
            return string !== null ? (string.split(',')).map(Number) : null;
        };
        scope.partnerbindings = function(response) {
            scope.casteshow = false;
            scope.gender = (response.data.intGender) === 2 ? 2 : 1;
            scope.AgeFrom = response.data.Ageto;
            scope.Ageto = response.data.Agefrom;
            scope.HeightFrom = response.data.Heightto;
            scope.Heightto = response.data.Heightfrom;
            scope.maritalstatus = scope.arrayToString(response.data.Maritalstatus);
            scope.educationcat = scope.arrayToString(response.data.Educationcategory);
            scope.country = scope.arrayToString(response.data.Country);
            scope.religion = response.data.Religion;
            scope.mothertongue = scope.arrayToString(response.data.MotherTongue);
            scope.caste = response.data.Caste !== null ? scope.arrayToString(response.data.Caste) : "0";
            scope.castetext = response.data.CasteText;
            scope.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.State = response.data.Country !== null ? commonFactory.StateBind(response.data.Country) : "0";
            scope.stateadvance = response.data.State !== null ? scope.arrayToString(response.data.State) : "0";
            scope.textlabels(response.data.Heightto, response.data.Heightfrom, response.data.Caste, response.data.Educationcategory);
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
        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        };

        scope.generalpageload = function() {
            scope.searchTerm = 0;
            scope.selectcaste = 0;
            scope.PartnerProfilesnew = [];
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.showcontrols = true;
            scope.typesearch = "";
            scope.savedsearchselect = [];
            scope.getpaidstatus = authSvc.getpaidstatus();
            scope.savedclass = scope.getpaidstatus === '1' ? true : false;
            scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
            scope.genderdiabled = scope.custid !== null ? true : false;
            scope.selectedIndex = $stateParams.id;
            scope.loadinging = true;
            scope.activated = true;
            scope.casteshow = true;
            scope.slideshow = "";
            scope.mesagesend = "";
            scope.generalsavedsearchbtn = "Save&Search";
            scope.advancedsavedsearchbtn = "Save&Search";
            scope.HeightFromtext = "";
            scope.Heighttotext = "";
            scope.educationcategorytxt = "";
            scope.educationcategory = [];
            scope.SearchResult_IDflag = null;
            scope.height = [];
            scope.MaritalStatus = [];
            scope.Mothertongue = [];
            scope.visastatus = [];
            scope.stars = [];
            scope.Country = [];
            scope.Professiongroup = [];
            scope.Currency = [];
            scope.gender = 1;
            scope.AgeFrom = "";
            scope.Ageto = "";
            scope.HeightFrom = "";
            scope.Heightto = "";
            scope.maritalstatus = "";
            scope.educationcat = "";
            scope.country = "";
            scope.religion = "";
            scope.mothertongue = "";
            scope.caste = "";
            scope.castetext = "";
            scope.physicalstatusadvance = "";
            scope.State = "";
            scope.stateadvance = "";
            scope.regdays = "";
            scope.visastatusadvance = "";
            scope.Educationadvance = "";
            scope.Professiongroupadvance = "";
            scope.monthsalcurrency = "";
            scope.kujadosham = "";
            scope.starlanguage = "";
            scope.starsadvance = "";
            scope.profileid = "";
            scope.firstname = "";
            scope.lastname = "";
            scope.fromcurrency = "";
            scope.tocurrency = "";
            scope.diet = "";
            scope.isCheckedphoto = false;
            scope.object = "";
            scope.Educationgroup = [];
            scope.Caste = [];
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                scope.controlsbinding();
                searches.partnerdetails(scope.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                });
                scope.savedsearchselectmethods(scope.custid, "", 1);
            } else if (scope.object !== undefined && scope.object !== null && scope.object !== null) {
                scope.truepartner = true;
                scope.truepartnerrefine = true;
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
                    Caste: scope.object.Caste !== null ? scope.object.Caste : null,
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

            }
            scope.$on("$destroy", scope.destroy);
        };

        scope.destroy = function() {
            //kill all veriable here

            scope.searchTerm = 0;
            scope.selectcaste = 0;
            scope.PartnerProfilesnew = [];
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.showcontrols = true;
            scope.typesearch = "";
            scope.savedsearchselect = [];
            scope.getpaidstatus = null;
            scope.savedclass = null;
            scope.custid = null;
            scope.genderdiabled = null;
            scope.selectedIndex = null;
            scope.loadinging = true;
            scope.activated = true;
            scope.casteshow = true;
            scope.slideshow = "";
            scope.mesagesend = "";
            scope.generalsavedsearchbtn = "Save&Search";
            scope.advancedsavedsearchbtn = "Save&Search";
            scope.HeightFromtext = "";
            scope.Heighttotext = "";
            scope.educationcategorytxt = "";
            scope.SearchResult_IDflag = null;
            scope.gender = 1;
            scope.AgeFrom = "";
            scope.Ageto = "";
            scope.HeightFrom = "";
            scope.Heightto = "";
            scope.maritalstatus = "";
            scope.educationcat = "";
            scope.country = "";
            scope.religion = "";
            scope.mothertongue = "";
            scope.caste = "";
            scope.castetext = "";
            scope.physicalstatusadvance = "";
            scope.State = "";
            scope.stateadvance = "";
            scope.regdays = "";
            scope.visastatusadvance = "";
            scope.Educationadvance = "";
            scope.Professiongroupadvance = "";
            scope.monthsalcurrency = "";
            scope.kujadosham = "";
            scope.starlanguage = "";
            scope.starsadvance = "";
            scope.profileid = "";
            scope.firstname = "";
            scope.lastname = "";
            scope.fromcurrency = "";
            scope.tocurrency = "";
            scope.diet = "";
            scope.isCheckedphoto = false;
            scope.object = {};

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
            scope.maritalstatus = null;
            scope.educationcat = null;
            scope.country = null;
            scope.mothertongue = null;
            scope.caste = null;
            scope.regdays = null;
            scope.physicalstatusadvance = null;
            scope.stateadvance = null;
            scope.visastatusadvance = null;
            scope.Educationadvance = null;
            scope.Professiongroupadvance = null;
            scope.monthsalcurrency = null;
            scope.kujadosham = null;
            scope.starlanguage = null;
            scope.starsadvance = null;
            scope.profileid = "";
            scope.firstname = "";
            scope.lastname = "";
        };
        scope.returnnullvalue = function(value) {
            var obj = value !== null && value !== undefined && value !== "" && (value.toString()) !== "0" && (value.toString()) !== 0 ? (value.toString()) : null;
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
        scope.generalsearchsubmit = function(type, frompage, topage, form, searchsavedidupdate) {
            // scope.slider.minValue = scope.AgeFrom;
            // scope.slider.maxValue = scope.Ageto;
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
                    scope.typesearch = type;

                    // scope.sliders.minvalueyext = scope.checkheight(scope.sliders.minvalueyext);
                    // scope.sliders.maxValuetext = scope.checkheight(scope.sliders.maxValuetext);
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                scope.showcontrols = false;
                                scope.truepartner = false;
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showcontrols = true;
                                scope.truepartner = true;
                                scope.truepartnerrefine = true;
                                alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                            }
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
                    if (scope.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    break;
                case "homepage":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.PartnerProfilesnew = [];
                        if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                        }
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
                                if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                    _.each(response.data, function(item) {
                                        scope.PartnerProfilesnew.push(item);
                                    });
                                } else {
                                    scope.showcontrols = true;
                                    scope.truepartner = true;
                                    scope.truepartnerrefine = true;
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                }
                            } else {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            }
                            scope.loadinging = true;
                        });
                        if (scope.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
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
                            SearchResult_ID: searchsavedidupdate !== null && searchsavedidupdate !== "" && searchsavedidupdate !== undefined ? searchsavedidupdate : null
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        scope.savedsearchselectmethods(scope.custid, "", 1);
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

                    if (scope.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    scope.modalpopupclose();
                    break;
            }

        };
        scope.savedseapopup = function(type) {
            scope.typesearch = type;
            switch (type) {
                case "general":
                    if (scope.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
                case "advanced":
                    if (scope.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
            }
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
                sessionStorage.removeItem("homepageobject");
            }
            scope.showcontrols = true;
            scope.truepartner = true;
            scope.truepartnerrefine = true;
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide, slideshow) {
            scope.slideshow = "slideshow";
            scope.generalsearchsubmit(scope.typesearch, frompageslide, topageslide);
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.State = commonFactory.StateBind(modal !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
                case 'caste':
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(scope.religion, ((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : ""));
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.slideshow = "";
            if (scope.custid !== null && scope.custid !== undefined && scope.custid !== "") {
                scope.generalsearchsubmit(scope.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            // scope.AgeFrom = scope.slider.minValue;
            // scope.Ageto = scope.slider.maxValue;
            // scope.HeightFrom = scope.sliders.minValue;
            // scope.Heightto = scope.sliders.maxValue;
            scope.generalsearchsubmit(scope.typesearch, 1, 8);
            scope.$broadcast('setslide');
        };
        scope.hightFromrefine = function() {
            scope.HeightFromtext = scope.checkheight(scope.HeightFrom);
        };
        scope.hightTorefine = function() {
            scope.Heighttotext = scope.checkheight(scope.Heightto);
        };


        scope.showloginpopup = function() {
            commonpopup.open('login.html', scope, uibModal, 'sm');
        };
        scope.showloginpopupnew = function() {
            commonpopup.closepopup();
            commonpopup.open('loginpopup.html', scope, uibModal, 'sm');
        };

        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });
        scope.cancelpopup = function() {
            commonpopup.closepopup();
        };
        scope.validate = function(formloagin) {
            if ((formloagin.username).indexOf("@") !== -1) {
                if (!scope.ValidateEmail(formloagin.username)) {
                    formloagin.username = '';
                    alert(" Please enter valid ProfileID/Email");
                    return false;
                } else {
                    return true;
                }
            } else {
                if (!scope.Validatnumber(formloagin.username) || (formloagin.username).length !== 9) {
                    alert("Please enter valid ProfileID/Email");
                    formloagin.username = '';
                    return false;

                } else {
                    return true;
                }

            }
        };
        scope.loginsubmit = function(formloagin) {
            if (formloagin.username === "" || formloagin.username === null || formloagin.username === "ProfileID/EmailID") {
                alert("Please enter user name");
                return false;
            } else if (formloagin.password === "" || formloagin.password === null || formloagin.password === "Enter the Password") {
                alert("Please enter password");
                return false;
            } else {
                if (scope.validate(formloagin)) {
                    authSvc.login(formloagin.username, formloagin.password).then(function(response) {
                        sessionStorage.removeItem("homepageobject");
                        authSvc.user(response.response !== null ? response.response[0] : null);
                        var custidlogin = authSvc.getCustId();
                        sessionStorage.removeItem("LoginPhotoIsActive");
                        var responsemiss = response;
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
                        commonpopup.closepopup();
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
                            scope.generalsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.advancedsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
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
                            scope.generalsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.selectedIndex = 1;
                            scope.advancedsavedsearchbtn = "Update";
                            scope.SearchResult_IDflag = SearchResult_ID;
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
                            scope.resetfunctionality();
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
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '/viewFullProfileCustomer';
            if (logid !== undefined && logid !== "" && logid !== null) {
                authSvc.paymentstaus(scope.custid, scope).then(function(responsepaid) {
                    console.log(responsepaid);
                    if (responsepaid === true) {
                        window.open(realpath, '_blank');
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade online membership', 3000);
                    }
                });
            } else {
                window.open(realpath, '_blank');
            }
        };
        scope.$on("redirectToviewfullprofiles", function(event, custid, logid) {
            scope.redirectToviewfull(custid, logid);
        });
        scope.successfaileralert = function(msg, typewarning) {
            if (typewarning === "success") {
                alerts.timeoutoldalerts(scope, 'alert-success', msg, 2500);
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', msg, 2500);
            }
        };
        scope.$on('successfailer', function(event, msg, typewarning) {
            scope.successfaileralert(msg, typewarning);
        });

        scope.$on('popuplogin', function(event, url, custid) {
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = "";
            scope.messagecustid = custid;
            scope.modalbodyshow = 1;
            scope.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.sendmessages = function(form) {
            if (form !== undefined && form.message !== "" && form.message !== null && form.message !== undefined) {
                scope.$broadcast('sendmsg', 'M', scope.messagecustid, undefined, form, undefined);

            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please enter Message', 2500);
            }
        };
        scope.$on("modalpopupclose", function(event) {
            alerts.dynamicpopupclose();
        });

        scope.onlyAlphabets = function(e, t) {
            var inputValue = window.event.keyCode;
            if (!(inputValue >= 65 && inputValue <= 120) && (inputValue !== 32 && inputValue !== 0)) {
                event.preventDefault();
            }
        };
        scope.checkCasteParents = function() {
            if (commonpopup.checkvals(scope.mothertongue) && commonpopup.checkvals(scope.religion)) {

            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'please select mothertongue and religion', 2500);
            }
        };
        // scope.slider = {
        //     minValue: 18,
        //     maxValue: 30,
        //     options: {
        //         floor: 18,
        //         ceil: 77,
        //         step: 1,
        //         noSwitching: true
        //     }

        // };
        // scope.heightslidermin = 1;
        // scope.heightslidermax = 38;
        // scope.sliders = {
        //     minValue: 4.0,
        //     maxValue: 7.2,
        //     options: {
        //         floor: 4.0,
        //         ceil: 7.2,
        //         step: 0.1,
        //         precision: 1,
        //         noSwitching: true
        //     }
        // };

        // scope.sliders = {
        //     minValue: 0,
        //     maxValue: 38,
        //     minvalueyext: 0,
        //     maxValuetext: 38,
        //     options: {
        //         floor: 0,
        //         ceil: 41,
        //         step: 1,
        //         noSwitching: true,

        //     }
        // };
    }
]);