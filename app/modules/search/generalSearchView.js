app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    '$location', 'getArray', '$timeout', '$rootScope', 'commonFactory', 'missingFieldService',
    '$stateParams', 'route', 'helperservice',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog, $location, getArray,
        timeout, $rootscope, commonpopup, missingFieldService, $stateParams, route, helperservice) {
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
            scope.modelsearch.HeightFromtext = scope.filtervalues(scope.modelsearch.height, fromheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, fromheight)).split('-'))[0] : '';
            scope.modelsearch.Heighttotext = scope.filtervalues(scope.modelsearch.height, toheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, toheight)).split('-'))[0] : '';
            scope.modelsearch.educationcategorytxt = scope.filtervalues(scope.modelsearch.educationcategory, education) !== '' ? (scope.filtervalues(scope.modelsearch.educationcategory, education)) : '';
        };
        scope.checkLength = function() {
            if ((scope.modelsearch.profileid !== "" && scope.modelsearch.profileid !== null) || (scope.modelsearch.firstname !== "" && scope.modelsearch.firstname !== null) || (scope.modelsearch.lastname !== "" && scope.modelsearch.lastname !== null)) {
                if (scope.modelsearch.firstname !== "" && scope.modelsearch.firstname !== null) {
                    if ((scope.modelsearch.firstname).length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For Name', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else if (scope.modelsearch.lastname !== "" && scope.modelsearch.lastname !== null) {
                    if ((scope.modelsearch.lastname).length < 3) {
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
            scope.modelsearch.height = arrayConstants.height;
            scope.modelsearch.educationcategory = arrayConstants.educationcategorywithoutselect;
            if (angular.lowercase(arrayConstants.MaritalStatus[0].title) === '--select--') {
                arrayConstants.MaritalStatus.splice(0, 1);
            }
            scope.modelsearch.MaritalStatus = arrayConstants.MaritalStatus;
            scope.modelsearch.Mothertongue = arrayConstants.Mothertongue;
            scope.modelsearch.visastatus = arrayConstants.visastatus;
            scope.modelsearch.stars = arrayConstants.stars;
            timeout(function() {
                scope.modelsearch.Country = getArray.GArray('Country');
                scope.modelsearch.Professiongroup = getArray.GArray('ProfGroup');
                scope.modelsearch.Currency = getArray.GArray('currency');
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
                scope.modelsearch.savedsearchselect = [];
                _.each(response.data, function(item) {
                    scope.modelsearch.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(scope.modelsearch.custid, "", 1).then(function(response) {
                    scope.modelsearch.savedsearchselect = [];
                    console.log(response);
                    _.each(response.data, function(item) {
                        scope.modelsearch.savedsearchselect.push(item);
                    });
                });
            }
        };
        scope.$watch("savedsearchselect", function(current, old) {
            scope.modelsearch.savedsearchselect = current;
        });
        scope.arrayToString = function(string) {
            return string !== null ? (string.split(',')).map(Number) : null;
        };
        scope.partnerbindings = function(response) {
            scope.modelsearch.casteshow = false;
            scope.modelsearch.gender = (response.data.intGender) === 2 ? 2 : 1;
            scope.modelsearch.AgeFrom = response.data.Ageto;
            scope.modelsearch.Ageto = response.data.Agefrom;
            scope.modelsearch.HeightFrom = response.data.Heightto;
            scope.modelsearch.Heightto = response.data.Heightfrom;
            scope.modelsearch.maritalstatus = scope.arrayToString(response.data.Maritalstatus);
            scope.modelsearch.educationcat = scope.arrayToString(response.data.Educationcategory);
            scope.modelsearch.country = scope.arrayToString(response.data.Country);
            scope.modelsearch.religion = response.data.Religion;
            scope.modelsearch.mothertongue = scope.arrayToString(response.data.MotherTongue);
            scope.modelsearch.caste = response.data.Caste !== null ? scope.arrayToString(response.data.Caste) : "0";
            scope.modelsearch.castetext = response.data.CasteText;
            scope.modelsearch.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.modelsearch.State = response.data.Country !== null ? commonFactory.StateBind(response.data.Country) : "0";
            scope.modelsearch.stateadvance = response.data.State !== null ? scope.arrayToString(response.data.State) : "0";
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
        scope.resetcontrols = function() {
            scope.controlsbinding();
            scope.modelsearch.truepartner = true;
            scope.modelsearch.truepartnerrefine = true;
            scope.modelsearch.gender = 2;
            scope.modelsearch.AgeFrom = 18;
            scope.modelsearch.Ageto = 30;
            scope.modelsearch.religion = 1;
            scope.modelsearch.HeightFrom = 1;
            scope.modelsearch.Heightto = 38;

        };
        scope.generalpageload = function() {
            scope.modelsearch = {};
            scope.modelsearch.searchTerm = 0;
            scope.modelsearch.selectcaste = 0;
            scope.modelsearch.PartnerProfilesnew = [];
            scope.modelsearch.truepartner = true;
            scope.modelsearch.truepartnerrefine = true;
            scope.modelsearch.showcontrols = true;
            scope.modelsearch.typesearch = "";
            scope.modelsearch.savedsearchselect = [];
            scope.modelsearch.getpaidstatus = authSvc.getpaidstatus();
            scope.modelsearch.savedclass = scope.modelsearch.getpaidstatus === '1' ? true : false;
            scope.modelsearch.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
            scope.modelsearch.genderdiabled = scope.modelsearch.custid !== null ? true : false;
            scope.modelsearch.selectedIndex = $stateParams.id;
            scope.modelsearch.loadinging = true;
            scope.modelsearch.activated = true;
            scope.modelsearch.casteshow = true;
            scope.modelsearch.slideshow = "";
            scope.modelsearch.mesagesend = "";
            scope.modelsearch.generalsavedsearchbtn = "Save&Search";
            scope.modelsearch.advancedsavedsearchbtn = "Save&Search";
            scope.modelsearch.HeightFromtext = "";
            scope.modelsearch.Heighttotext = "";
            scope.modelsearch.educationcategorytxt = "";
            scope.modelsearch.educationcategory = [];
            scope.modelsearch.SearchResult_IDflag = null;
            scope.modelsearch.height = [];
            scope.modelsearch.MaritalStatus = [];
            scope.modelsearch.Mothertongue = [];
            scope.modelsearch.visastatus = [];
            scope.modelsearch.stars = [];
            scope.modelsearch.Country = [];
            scope.modelsearch.Professiongroup = [];
            scope.modelsearch.Currency = [];
            scope.modelsearch.gender = 1;
            scope.modelsearch.AgeFrom = "";
            scope.modelsearch.Ageto = "";
            scope.modelsearch.HeightFrom = "";
            scope.modelsearch.Heightto = "";
            scope.modelsearch.maritalstatus = "";
            scope.modelsearch.educationcat = "";
            scope.modelsearch.country = "";
            scope.modelsearch.religion = "";
            scope.modelsearch.mothertongue = "";
            scope.modelsearch.caste = "";
            scope.modelsearch.castetext = "";
            scope.modelsearch.physicalstatusadvance = "";
            scope.modelsearch.State = "";
            scope.modelsearch.stateadvance = "";
            scope.modelsearch.regdays = "";
            scope.modelsearch.visastatusadvance = "";
            scope.modelsearch.Educationadvance = "";
            scope.modelsearch.Professiongroupadvance = "";
            scope.modelsearch.monthsalcurrency = "";
            scope.modelsearch.kujadosham = "";
            scope.modelsearch.starlanguage = "";
            scope.modelsearch.starsadvance = "";
            scope.modelsearch.profileid = "";
            scope.modelsearch.firstname = "";
            scope.modelsearch.lastname = "";
            scope.modelsearch.fromcurrency = "";
            scope.modelsearch.tocurrency = "";
            scope.modelsearch.diet = "";
            scope.modelsearch.isCheckedphoto = false;
            scope.modelsearch.object = {};
            scope.modelsearch.Educationgroup = [];
            scope.modelsearch.Caste = [];
            scope.modelsearch.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.modelsearch.custid !== undefined && scope.modelsearch.custid !== "" && scope.modelsearch.custid !== null) {
                scope.controlsbinding();
                searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                });
                scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);
            } else if (scope.modelsearch.object !== undefined && scope.modelsearch.object !== null && scope.modelsearch.object !== null) {
                scope.modelsearch.truepartner = true;
                scope.modelsearch.truepartnerrefine = true;
                SearchRequest = {
                    intCusID: null,
                    strCust_id: null,
                    intGender: (scope.modelsearch.object.intGender) === '2' ? 2 : 1,
                    FromAge: scope.modelsearch.object.FromAge,
                    ToAge: scope.modelsearch.object.ToAge,
                    iFromHeight: null,
                    iToHeight: null,
                    Maritalstatus: null,
                    intReligionID: scope.modelsearch.object.intReligionID,
                    MotherTongue: null,
                    Caste: scope.modelsearch.object.Caste !== null ? scope.modelsearch.object.Caste : null,
                    iPhysicalstatus: null,
                    Complexion: null,
                    Country: scope.modelsearch.object.Country,
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
                scope.resetcontrols();
            }
            scope.$on("$destroy", scope.destroy);
        };

        scope.destroy = function() {

            scope.modelsearch.object = {};
        };

        scope.resetfunctionality = function() {
            scope.modelsearch.truepartner = true;
            scope.modelsearch.truepartnerrefine = true;
            scope.modelsearch.gender = 2;
            scope.modelsearch.AgeFrom = 18;
            scope.modelsearch.Ageto = 30;
            scope.modelsearch.religion = 1;
            scope.modelsearch.HeightFrom = 1;
            scope.modelsearch.Heightto = 38;
            scope.modelsearch.maritalstatus = null;
            scope.modelsearch.educationcat = null;
            scope.modelsearch.country = null;
            scope.modelsearch.mothertongue = null;
            scope.modelsearch.caste = null;
            scope.modelsearch.regdays = null;
            scope.modelsearch.physicalstatusadvance = null;
            scope.modelsearch.stateadvance = null;
            scope.modelsearch.visastatusadvance = null;
            scope.modelsearch.Educationadvance = null;
            scope.modelsearch.Professiongroupadvance = null;
            scope.modelsearch.monthsalcurrency = null;
            scope.modelsearch.kujadosham = null;
            scope.modelsearch.starlanguage = null;
            scope.modelsearch.starsadvance = null;
            scope.modelsearch.profileid = "";
            scope.modelsearch.firstname = "";
            scope.modelsearch.lastname = "";
        };
        scope.returnnullvalue = function(value) {
            var obj = value !== null && value !== undefined && value !== "" && (value.toString()) !== "0" && (value.toString()) !== 0 ? (value.toString()) : null;
            return obj;
        };
        scope.submitobjectcommongenad = function(frompage, topage) {
            SearchRequest = {
                intCusID: scope.modelsearch.custid,
                strCust_id: scope.modelsearch.custid !== null ? scope.modelsearch.custid : "",
                intGender: scope.modelsearch.gender,
                FromAge: scope.modelsearch.AgeFrom,
                ToAge: scope.modelsearch.Ageto,
                iFromHeight: scope.modelsearch.HeightFrom,
                iToHeight: scope.modelsearch.Heightto,
                Maritalstatus: scope.returnnullvalue(scope.modelsearch.maritalstatus),
                intReligionID: scope.modelsearch.religion,
                MotherTongue: scope.returnnullvalue(scope.modelsearch.mothertongue),
                Caste: scope.returnnullvalue(scope.modelsearch.caste),
                iPhysicalstatus: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.physicalstatusadvance : null,
                Complexion: null,
                Country: scope.returnnullvalue(scope.modelsearch.country),
                State: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.stateadvance) : null,
                Visastatus: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.visastatusadvance) : null,
                Educationcategory: scope.returnnullvalue(scope.modelsearch.educationcat),
                Education: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.Educationadvance) : null,
                Professiongroup: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.Professiongroupadvance) : null,
                iFromSal: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.fromcurrency : null,
                iToSal: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.tocurrency : null,
                iManglinkKujaDosham: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.kujadosham : null,
                iStarLanguage: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.starlanguage : null,
                Stars: scope.modelsearch.typesearch === "advanced" ? scope.returnnullvalue(scope.modelsearch.starsadvance) : null,
                iDiet: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.diet : null,
                intPhotoCount: scope.modelsearch.isCheckedphoto === true ? 1 : null,
                StartIndex: frompage,
                EndIndex: topage,
                i_Registrationdays: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.regdays : null,
                iAnnualincome: scope.modelsearch.typesearch === "advanced" ? scope.modelsearch.monthsalcurrency : null,
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
            // scope.slider.minValue = scope.modelsearch.AgeFrom;
            // scope.slider.maxValue = scope.modelsearch.Ageto;
            scope.modelsearch.loadinging = frompage === 1 ? false : true;
            scope.modelsearch.showcontrols = false;
            scope.modelsearch.truepartner = false;

            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.modelsearch.truepartnerrefine = false;
            } else {
                scope.modelsearch.truepartnerrefine = true;
            }
            switch (type) {
                case "advanced":
                case "general":
                    scope.modelsearch.typesearch = type;

                    // scope.sliders.minvalueyext = scope.checkheight(scope.sliders.minvalueyext);
                    // scope.sliders.maxValuetext = scope.checkheight(scope.sliders.maxValuetext);
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.modelsearch.PartnerProfilesnew = [];
                            if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                scope.modelsearch.showcontrols = false;
                                scope.modelsearch.truepartner = false;
                                _.each(response.data, function(item) {
                                    scope.modelsearch.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.modelsearch.showcontrols = true;
                                scope.modelsearch.truepartner = true;
                                scope.modelsearch.truepartnerrefine = true;
                                alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                            }
                        } else {
                            if (scope.modelsearch.custid !== null && scope.modelsearch.custid !== "" && scope.modelsearch.custid !== undefined) {
                                _.each(response.data, function(item) {
                                    scope.modelsearch.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showloginpopup();
                            }
                        }
                        scope.modelsearch.loadinging = true;
                    });
                    if (scope.modelsearch.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    break;
                case "homepage":
                    scope.modelsearch.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.modelsearch.PartnerProfilesnew = [];
                        if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                            _.each(response.data, function(item) {
                                scope.modelsearch.PartnerProfilesnew.push(item);
                            });
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                        }
                        scope.modelsearch.loadinging = true;
                    });
                    scope.$broadcast('loadmore');
                    break;
                case "profileid":
                    scope.modelsearch.typesearch = type;

                    if (scope.checkLength()) {
                        SearchRequest = {
                            intCusID: scope.modelsearch.custid,
                            intGender: scope.modelsearch.gender,
                            strLastName: scope.modelsearch.lastname,
                            strFirstName: scope.modelsearch.firstname,
                            strProfileID: scope.modelsearch.profileid,
                            intCasteID: null,
                            StartIndex: frompage,
                            EndIndex: topage,
                        };
                        if (scope.modelsearch.custid !== undefined && scope.modelsearch.custid !== null && scope.modelsearch.custid !== "") {
                            searches.profileidsearch(SearchRequest).then(function(response) {
                                if (parseInt(frompage) === 1) {
                                    scope.modelsearch.PartnerProfilesnew = [];
                                    if (response.data !== undefined && response.data !== "" && response.data !== null && response.data.length > 0) {
                                        _.each(response.data, function(item) {
                                            scope.modelsearch.PartnerProfilesnew.push(item);
                                        });
                                    } else {
                                        scope.modelsearch.showcontrols = true;
                                        scope.modelsearch.truepartner = true;
                                        scope.modelsearch.truepartnerrefine = true;
                                        alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                    }
                                } else {
                                    _.each(response.data, function(item) {
                                        scope.modelsearch.PartnerProfilesnew.push(item);
                                    });
                                }
                                scope.modelsearch.loadinging = true;
                            });
                            if (scope.modelsearch.slideshow !== "slideshow") {
                                scope.$broadcast('loadmore');
                            }
                        } else {
                            scope.modelsearch.showcontrols = true;
                            scope.modelsearch.truepartner = true;
                            scope.modelsearch.truepartnerrefine = true;
                            alerts.dynamicpopup("login.html", scope, uibModal);
                        }
                    } else {
                        scope.modelsearch.loadinging = true;
                        scope.modelsearch.showcontrols = true;
                        scope.modelsearch.truepartner = true;
                        scope.modelsearch.truepartnerrefine = true;
                    }
                    break;
                case "savedsearch":
                    scope.submitobjectcommongenad(frompage, topage);
                    scope.submitsavedsearchobject = {
                        customerpersonaldetails: SearchRequest,
                        GetDetails: {
                            CustID: scope.modelsearch.custid !== null ? scope.modelsearch.custid : "",
                            Lookingfor: scope.modelsearch.gender,
                            FromAge: scope.modelsearch.AgeFrom,
                            ToAge: scope.modelsearch.Ageto,
                            FromHeight: scope.modelsearch.HeightFrom,
                            ToHeight: scope.modelsearch.Heightto,
                            Maritalstatus: scope.returnnullvalue(scope.modelsearch.maritalstatus),
                            Religion: scope.modelsearch.religion,
                            Mothertongue: scope.returnnullvalue(scope.modelsearch.mothertongue),
                            Caste: scope.returnnullvalue(scope.modelsearch.caste),
                            Complexion: null,
                            Physicalstatus: type === "advanced" ? scope.modelsearch.physicalstatusadvance : null,
                            CountyWorking: scope.returnnullvalue(scope.modelsearch.country),
                            StateWorking: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.stateadvance) : null,
                            Visastatus: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.visastatusadvance) : null,
                            Educationcategory: scope.returnnullvalue(scope.modelsearch.educationcat),
                            EducationGroup: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.Educationadvance) : null,
                            Educationspecialization: null,
                            professioncategory: null,
                            Professiongroup: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.Professiongroupadvance) : null,
                            Professionspecialization: null,
                            Annualincome: type === "advanced" ? scope.modelsearch.monthsalcurrency : null,
                            FromSalary: type === "advanced" ? scope.modelsearch.fromcurrency : null,
                            ToSalary: type === "advanced" ? scope.modelsearch.tocurrency : null,
                            Starlanguage: type === "advanced" ? scope.modelsearch.starlanguage : null,
                            Star: type === "advanced" ? scope.returnnullvalue(scope.modelsearch.starsadvance) : null,
                            ManglikKujaDosham: type === "advanced" ? scope.modelsearch.kujadosham : null,
                            Drink: null,
                            Smoke: null,
                            Diet: type === "advanced" ? scope.modelsearch.diet : null,
                            Registrationdays: type === "advanced" ? scope.modelsearch.regdays : null,
                            CustSavedSearchName: form.savesearchNames !== null && form.savesearchNames !== undefined && form.savesearchNames !== "" ? form.savesearchNames : null,
                            searchPageName: type === "advanced" ? "Advancesearch" : "Generalsearch",
                            searchPageID: type === "advanced" ? "3" : "2",
                            SearchResult_ID: searchsavedidupdate !== null && searchsavedidupdate !== "" && searchsavedidupdate !== undefined ? searchsavedidupdate : null
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);
                        if (parseInt(frompage) === 1) {
                            scope.modelsearch.PartnerProfilesnew = [];
                            _.each(response.data, function(item) {
                                scope.modelsearch.PartnerProfilesnew.push(item);
                            });
                        } else {
                            _.each(response.data, function(item) {
                                scope.modelsearch.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.modelsearch.loadinging = true;
                    });

                    if (scope.modelsearch.slideshow !== "slideshow") {
                        scope.$broadcast('loadmore');
                    }
                    scope.modalpopupclose();
                    break;
            }

        };
        scope.savedseapopup = function(type) {
            scope.modelsearch.typesearch = type;
            switch (type) {
                case "general":
                    if (scope.modelsearch.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.modelsearch.SearchResult_IDflag);
                    } else {
                        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
                    }
                    break;
                case "advanced":
                    if (scope.modelsearch.generalsavedsearchbtn === "Update") {
                        scope.generalsearchsubmit('savedsearch', 1, 8, "", scope.modelsearch.SearchResult_IDflag);
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
            scope.modelsearch.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            if (scope.modelsearch.object !== undefined && scope.modelsearch.object !== null && scope.modelsearch.object !== null) {
                scope.controlsbinding();
                scope.modelsearch.gender = (scope.modelsearch.object.intGender) === 2 ? 2 : 1;
                scope.modelsearch.AgeFrom = scope.modelsearch.object.FromAge;
                scope.modelsearch.Ageto = scope.modelsearch.object.ToAge;
                scope.modelsearch.country = scope.modelsearch.object.Country;
                scope.modelsearch.religion = scope.modelsearch.object.intReligionID;
                scope.modelsearch.caste = scope.modelsearch.object.Caste !== null ? scope.modelsearch.object.Caste : "0";
                scope.modelsearch.HeightFrom = 1;
                scope.modelsearch.Heightto = 38;
                sessionStorage.removeItem("homepageobject");
            }
            scope.modelsearch.showcontrols = true;
            scope.modelsearch.truepartner = true;
            scope.modelsearch.truepartnerrefine = true;
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide, slideshow) {
            scope.modelsearch.slideshow = "slideshow";
            scope.generalsearchsubmit(scope.modelsearch.typesearch, frompageslide, topageslide);
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.modelsearch.State = commonFactory.StateBind(modal !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
                case 'EducationCatgory':
                    scope.modelsearch.Educationgroup = commonFactory.educationGroupBind((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
                case 'caste':
                    scope.modelsearch.Caste = [];
                    scope.modelsearch.Caste = commonFactory.casteDepedency(scope.modelsearch.religion, ((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : ""));
                    break;
                case 'star':
                    scope.modelsearch.stars = commonFactory.starBind((modal) !== undefined && modal !== null && modal !== "" ? (modal).toString() : "");
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.slideshow = "";
            if (scope.modelsearch.custid !== null && scope.modelsearch.custid !== undefined && scope.modelsearch.custid !== "") {
                scope.generalsearchsubmit(scope.modelsearch.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            // scope.modelsearch.AgeFrom = scope.slider.minValue;
            // scope.modelsearch.Ageto = scope.slider.maxValue;
            // scope.modelsearch.HeightFrom = scope.sliders.minValue;
            // scope.modelsearch.Heightto = scope.sliders.maxValue;
            scope.generalsearchsubmit(scope.modelsearch.typesearch, 1, 8);
            scope.$broadcast('setslide');
        };
        scope.hightFromrefine = function() {
            scope.modelsearch.HeightFromtext = scope.checkheight(scope.modelsearch.HeightFrom);
        };
        scope.hightTorefine = function() {
            scope.modelsearch.Heighttotext = scope.checkheight(scope.modelsearch.Heightto);
        };
        scope.showloginpopup = function() {
            alerts.dynamicpopup('login.html', scope, uibModal, 'sm');
        };
        scope.showloginpopupnew = function() {
            alerts.dynamicpopupclose();
            alerts.dynamicpopup('loginpopup.html', scope, uibModal, 'sm');
        };

        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });
        scope.cancelpopup = function() {
            alerts.dynamicpopupclose();
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
                        alerts.dynamicpopupclose();
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
                    searches.partnerdetails(scope.modelsearch.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.modelsearch.generalsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.modelsearch.advancedsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        }
                        scope.generalsearchsubmit(typeofsearch, 1, 8, "");
                    });
                    break;
                case "edit":
                    scope.PartnerProfilesnew = [];
                    searches.partnerdetails(scope.modelsearch.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        scope.modelsearch.showcontrols = true;
                        scope.modelsearch.truepartner = true;
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                            scope.modelsearch.selectedIndex = 2;
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.modelsearch.selectedIndex = 0;
                            scope.modelsearch.generalsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.modelsearch.selectedIndex = 1;
                            scope.modelsearch.advancedsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        }
                    });
                    break;
            }
        };
        scope.clickvalues = function(text) {
            scope.modelsearch.HeightFromtext = text;
        };
        scope.resetgenral = function(type) {
            switch (type) {
                case "general":
                    if (scope.modelsearch.custid !== undefined && scope.modelsearch.custid !== "" && scope.modelsearch.custid !== null) {
                        searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
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
            scope.modelsearch.truepartner = true;
            scope.modelsearch.truepartnerrefine = true;
            scope.modelsearch.showcontrols = true;
            scope.modelsearch.selectedIndex = indexvalue;
        });
        scope.redirectToviewfull = function(custid, logid) {
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '/viewFullProfileCustomer';
            if (logid !== undefined && logid !== "" && logid !== null) {
                authSvc.paymentstaus(scope.modelsearch.custid, scope).then(function(responsepaid) {
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
            scope.modelsearch.modalpopupheadertext = "Enter your message here";
            scope.modelsearch.messagecustid = "";
            scope.modelsearch.messagecustid = custid;
            scope.modelsearch.modalbodyshow = 1;
            scope.modelsearch.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.sendmessages = function(form) {
            if (form !== undefined && form.message !== "" && form.message !== null && form.message !== undefined) {
                scope.$broadcast('sendmsg', 'M', scope.modelsearch.messagecustid, undefined, form, undefined);

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
            if (commonpopup.checkvals(scope.modelsearch.mothertongue) && commonpopup.checkvals(scope.modelsearch.religion)) {

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