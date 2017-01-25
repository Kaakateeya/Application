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
        scope.reset = {};
        scope.Country = [];
        scope.MaritalStatus = [];
        scope.selectedIndex = $stateParams.id;
        scope.Professiongroup = [];
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.truepartnerrefine = true;
        scope.refinesubmitflag = "normal";
        scope.filtervalues = function(arr, whereValue) {
            var storeValue = "";
            if (whereValue !== null && whereValue !== "" && whereValue !== undefined) {
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
            }
            return storeValue;
        };
        scope.textlabels = function(fromheight, toheight, caste, education) {
            scope.modelsearch.HeightFromtext = scope.filtervalues(scope.modelsearch.height, fromheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, fromheight)).split('-'))[0] : '';
            scope.modelsearch.Heighttotext = scope.filtervalues(scope.modelsearch.height, toheight) !== '' ? ((scope.filtervalues(scope.modelsearch.height, toheight)).split('-'))[0] : '';
            scope.modelsearch.educationcategorytxt = scope.filtervalues(scope.modelsearch.educationcategory, education) !== '' ? (scope.filtervalues(scope.modelsearch.educationcategory, education)) : '';
        };
        scope.checkLength = function() {
            if (helperservice.checkstringvalue(scope.modelsearch.profileid) || helperservice.checkstringvalue(scope.modelsearch.firstname) || helperservice.checkstringvalue(scope.modelsearch.lastname)) {
                if (helperservice.checkstringvalue(scope.modelsearch.firstname)) {
                    if ((scope.modelsearch.firstname).length < 3) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'Mininum 3 charactes required For Name', 2500);
                        return false;
                    } else {
                        return true;
                    }
                } else if (helperservice.checkstringvalue(scope.modelsearch.lastname)) {
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
            timeout(function() {
                if (angular.lowercase(arrayConstants.MaritalStatus[0].title) === '--select--') {
                    arrayConstants.MaritalStatus.splice(0, 1);
                }
                scope.MaritalStatus = arrayConstants.MaritalStatus;
                scope.modelsearch.Mothertongue = arrayConstants.Mothertongue;
                scope.modelsearch.visastatus = arrayConstants.visastatus;
                scope.modelsearch.stars = arrayConstants.stars;
                scope.Country = getArray.GArray('Country');
                scope.Professiongroup = getArray.GArray('ProfGroup');
            }, 1000);
        };

        function resetmultipleselect(id) {
            $('option', $('#' + id)).each(function(element) {
                $(this).removeAttr('selected').prop('selected', false);
            });
            $("#" + id).multiselect('refresh');
        }
        scope.applycolors = function(value, id) {
            var colors = "selectborderclass";
            if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value !== null) {
                colors = "selectborderclasscolor";
                $('#' + id).next().find('button').addClass("bacg");
            } else {
                colors = "selectborderclass";
                $('#' + id).next().find('button').removeClass("bacg");
            }
            return colors;
        };

        function controlResetMultiselects() {
            resetmultipleselect('maritalstatusid');
            resetmultipleselect('generaleducation');
            resetmultipleselect('countrygeneral');
            resetmultipleselect('generalmothertongue');
            resetmultipleselect('generalcaste');
            resetmultipleselect('advancedmaritalstatusid');
            resetmultipleselect('advancedmothertongue');
            resetmultipleselect('advancedcaste');
            resetmultipleselect('advancedcountryliving');
            resetmultipleselect('advancedstateliving');
            resetmultipleselect('advancedsvisastatus');
            resetmultipleselect('advancedEducationcat');
            resetmultipleselect('advancedEducationgroup');
            resetmultipleselect('advancedprofessiongroup');
            resetmultipleselect('advancedstars');
            return false;
        }
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
            scope.modelsearch.AgeFrom = response.data.Ageto !== null && response.data.Ageto !== "" ? parseInt(response.data.Ageto) : "0";
            scope.modelsearch.Ageto = response.data.Agefrom !== null && response.data.Agefrom !== "" ? parseInt(response.data.Agefrom) : "0";
            scope.modelsearch.HeightFrom = response.data.Heightto !== null && response.data.Heightto !== "" ? parseInt(response.data.Heightto) : "0";
            scope.modelsearch.Heightto = response.data.Heightfrom !== null && response.data.Heightfrom !== "" ? parseInt(response.data.Heightfrom) : "0";
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
            scope.modelsearch.Educationgroup = commonFactory.educationGroupBind(helperservice.checkstringvalue(response.data.Educationcategory) ? (response.data.Educationcategory).toString() : "");
            scope.textlabels(response.data.Heightto, response.data.Heightfrom, response.data.Caste, response.data.Educationcategory);
        };
        var numberInRange = function(number, lower, upper) {
            return number >= lower && number <= upper;
        };
        var checknumber = function(value) {
            if (numberInRange(value, 1, 12)) {
                return "4'" + (value - 1) + " in";
            } else if (numberInRange(value, 13, 24)) {

                value = (value % 13);
                return "5'" + value + " in";

            } else if (numberInRange(value, 25, 36)) {
                value = (value % 25);
                return "6'" + value + " in";
            } else if (numberInRange(value, 37, 39)) {
                value = (value % 37);
                return "7'" + value + " in";
            }
        };
        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        };
        scope.nologindata = function() {
            scope.controlsbinding();
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.gender = 2;
            scope.modelsearch.AgeFrom = 18;
            scope.modelsearch.Ageto = 30;
            scope.modelsearch.religion = 1;
            scope.modelsearch.HeightFrom = 1;
            scope.modelsearch.Heightto = 38;
        };

        function returnPaid() {
            return authSvc.getpaidstatus() === "1" ? true : false;
        }

        function returnCustid() {
            return helperservice.checkstringvalue(authSvc.getCustId()) ? authSvc.getCustId() : null;
        }
        scope.generalpageload = function() {
            scope.modelsearch = {
                showcontrols: true,
                typesearch: "",
                savedsearchselect: [],
                getpaidstatus: returnPaid(),
                savedclass: returnPaid(),
                custid: returnCustid(),
                genderdiabled: helperservice.checkstringvalue(returnCustid()),
                loadinging: true,
                activated: true,
                casteshow: true,
                slideshow: "",
                mesagesend: "",
                generalsavedsearchbtn: "Save&Search",
                advancedsavedsearchbtn: "Save&Search",
                HeightFromtext: "",
                Heighttotext: "",
                educationcategorytxt: "",
                educationcategory: [],
                SearchResult_IDflag: null,
                height: [],
                Mothertongue: [],
                visastatus: [],
                stars: [],
                Professiongroup: [],
                gender: 1,
                AgeFrom: null,
                Ageto: null,
                HeightFrom: null,
                Heightto: null,
                maritalstatus: null,
                educationcat: null,
                country: null,
                religion: null,
                mothertongue: null,
                caste: null,
                castetext: null,
                physicalstatusadvance: null,
                State: [],
                stateadvance: null,
                regdays: null,
                visastatusadvance: null,
                Educationadvance: null,
                Professiongroupadvance: null,
                monthsalcurrency: null,
                kujadosham: null,
                starlanguage: null,
                starsadvance: null,
                profileid: null,
                firstname: null,
                lastname: null,
                fromcurrency: null,
                tocurrency: null,
                diet: null,
                isCheckedphoto: false,
                object: {},
                Educationgroup: [],
                Caste: []
            };
            scope.modelsearch.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            debugger;
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.controlsbinding();
                searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                    angular.copy(scope.modelsearch, scope.reset);

                });
                scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);

            } else if (helperservice.checkstringvalue(scope.modelsearch.object)) {
                scope.truepartner = true;
                scope.truepartnerrefine = true;
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
                angular.copy(scope.modelsearch, scope.reset);

            } else {
                scope.nologindata();
                angular.copy(scope.modelsearch, scope.reset);

            }

            scope.$on("$destroy", scope.destroy);
        };
        scope.destroy = function() {
            scope.modelsearch.object = {};
            scope.reset = {};
        };
        scope.resetfunctionality = function() {
            // scope.truepartner= true;
            //  scope.truepartnerrefine = true;
            // scope.modelsearch.gender = 2;
            // scope.modelsearch.AgeFrom = 18;
            // scope.modelsearch.Ageto = 30;
            // scope.modelsearch.religion = 1;
            // scope.modelsearch.HeightFrom = 1;
            // scope.modelsearch.Heightto = 38;
            // scope.modelsearch.maritalstatus = null;
            // scope.modelsearch.educationcat = null;
            // scope.modelsearch.country = null;
            // scope.modelsearch.mothertongue = null;
            // scope.modelsearch.caste = null;
            // scope.modelsearch.regdays = null;
            // scope.modelsearch.physicalstatusadvance = null;
            // scope.modelsearch.stateadvance = null;
            // scope.modelsearch.visastatusadvance = null;
            // scope.modelsearch.Educationadvance = null;
            // scope.modelsearch.Professiongroupadvance = null;
            // scope.modelsearch.monthsalcurrency = null;
            // scope.modelsearch.kujadosham = null;
            // scope.modelsearch.starlanguage = null;
            // scope.modelsearch.starsadvance = null;
            // scope.modelsearch.profileid = "";
            // scope.modelsearch.firstname = "";
            // scope.modelsearch.lastname = "";
            angular.copy(scope.reset, scope.modelsearch);

        };
        scope.returnnullvalue = function(value) {
            var obj = helperservice.checkstringvalue(value) && (value.toString()) !== "0" && (value.toString()) !== 0 ? (value.toString()) : null;
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
            scope.modelsearch.loadinging = frompage === 1 ? false : true;
            scope.modelsearch.showcontrols = false;
            scope.truepartner = false;
            if (helperservice.checkstringvalue(scope.modelsearch.custid) && scope.modelsearch.slideshow !== "slideshow") {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
            switch (type) {
                case "advanced":
                case "general":
                    scope.modelsearch.AgeFrom = helperservice.checkstringvalue(scope.modelsearch.AgeFrom) ? parseInt(scope.modelsearch.AgeFrom) : "0";
                    scope.modelsearch.Ageto = helperservice.checkstringvalue(scope.modelsearch.Ageto) ? parseInt(scope.modelsearch.Ageto) : "0";
                    scope.modelsearch.HeightFrom = helperservice.checkstringvalue(scope.modelsearch.HeightFrom) ? parseInt(scope.modelsearch.HeightFrom) : "0";
                    scope.modelsearch.Heightto = helperservice.checkstringvalue(scope.modelsearch.Heightto) ? parseInt(scope.modelsearch.Heightto) : "0";

                    scope.textlabels(helperservice.checkstringvalue(scope.modelsearch.HeightFrom) ? (scope.modelsearch.HeightFrom).toString() : "0", helperservice.checkstringvalue(scope.modelsearch.Heightto) ? (scope.modelsearch.Heightto).toString() : "0", null,
                        helperservice.checkstringvalue(scope.modelsearch.educationcat) ? (scope.modelsearch.educationcat).toString() : "0");
                    scope.modelsearch.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            if (helperservice.checkarraylength(response.data)) {
                                scope.modelsearch.showcontrols = false;
                                scope.truepartner = false;
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                if (scope.refinesubmitflag === "refine") {
                                    scope.refinesubmitflag = "normal";
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change your Refine search cretria', 2500);
                                } else {
                                    scope.modelsearch.showcontrols = true;
                                    scope.truepartner = true;
                                    scope.truepartnerrefine = true;
                                    alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                }
                            }
                        } else {
                            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                                _.each(response.data, function(item) {
                                    scope.PartnerProfilesnew.push(item);
                                });
                            } else {
                                scope.showloginpopup();
                            }
                        }
                        scope.modelsearch.loadinging = true;

                        if (scope.modelsearch.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
                    });
                    break;
                case "homepage":
                    scope.modelsearch.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        scope.PartnerProfilesnew = [];
                        if (helperservice.checkarraylength(response.data)) {
                            _.each(response.data, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                        }
                        scope.modelsearch.loadinging = true;
                        scope.$broadcast('loadmore');
                    });
                    break;
                case "profileid":
                    scope.modelsearch.typesearch = type;
                    scope.truepartnerrefine = true;
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
                                    scope.PartnerProfilesnew = [];
                                    if (helperservice.checkarraylength(response.data)) {
                                        _.each(response.data, function(item) {
                                            scope.PartnerProfilesnew.push(item);
                                        });
                                    } else {
                                        if (scope.refinesubmitflag === "refine") {
                                            scope.refinesubmitflag = "normal";
                                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change your Refine search cretria', 2500);
                                        } else {
                                            scope.modelsearch.showcontrols = true;
                                            scope.truepartner = true;
                                            scope.truepartnerrefine = true;
                                            alerts.timeoutoldalerts(scope, 'alert-danger', 'No Records Found,Please Change search Criteria', 2500);
                                        }
                                    }
                                } else {
                                    _.each(response.data, function(item) {
                                        scope.PartnerProfilesnew.push(item);
                                    });
                                }
                                scope.modelsearch.loadinging = true;
                                if (scope.modelsearch.slideshow !== "slideshow") {
                                    scope.$broadcast('loadmore');
                                }
                            });

                        } else {
                            scope.modelsearch.showcontrols = true;
                            scope.truepartner = true;
                            scope.truepartnerrefine = true;
                            alerts.dynamicpopup("login.html", scope, uibModal);
                        }
                    } else {
                        scope.modelsearch.loadinging = true;
                        scope.modelsearch.showcontrols = true;
                        scope.truepartner = true;
                        scope.truepartnerrefine = true;
                    }
                    break;
                case "savedsearch":
                    scope.textlabels((scope.modelsearch.HeightFrom).toString(), (scope.modelsearch.Heightto).toString(), null, (scope.modelsearch.educationcat).toString());
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
                            CustSavedSearchName: helperservice.checkstringvalue(form.savesearchNames) ? form.savesearchNames : null,
                            searchPageName: type === "advanced" ? "Advancesearch" : "Generalsearch",
                            searchPageID: type === "advanced" ? "3" : "2",
                            SearchResult_ID: helperservice.checkstringvalue(searchsavedidupdate) ? searchsavedidupdate : null
                        }
                    };
                    searches.CustomerGeneralandAdvancedSavedSearch(scope.submitsavedsearchobject).then(function(response) {
                        scope.savedsearchselectmethods(scope.modelsearch.custid, "", 1);
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
                        scope.modelsearch.loadinging = true;
                        if (scope.modelsearch.slideshow !== "slideshow") {
                            scope.$broadcast('loadmore');
                        }
                    });
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
            if (helperservice.checkstringvalue(scope.modelsearch.object)) {
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
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.slideshow = "";

            scope.$watch("modelsearch.AgeFrom", function(current, old) {
                scope.modelsearch.AgeFrom = current;
            });
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide, slideshow) {
            scope.truepartnerrefine = true;
            scope.modelsearch.slideshow = "slideshow";
            scope.generalsearchsubmit(scope.modelsearch.typesearch, frompageslide, topageslide);
        });
        scope.$on('slideshowrefinehide', function(event) {
            scope.truepartnerrefine = true;
        });

        scope.$on('slideshowrefineshow', function(event) {
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.truepartnerrefine = false;
            } else {
                scope.truepartnerrefine = true;
            }
        });
        scope.$on('directivechangeevent', function(event, modal, type) {
            switch (type) {
                case 'Country':
                    scope.modelsearch.State = commonFactory.StateBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
                case 'EducationCatgory':
                    scope.modelsearch.Educationgroup = commonFactory.educationGroupBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
                case 'caste':
                    scope.modelsearch.Caste = [];
                    scope.modelsearch.Caste = commonFactory.casteDepedency(scope.modelsearch.religion, (helperservice.checkstringvalue(modal) ? (modal).toString() : ""));
                    break;
                case 'star':
                    scope.modelsearch.stars = commonFactory.starBind(helperservice.checkstringvalue(modal) ? (modal).toString() : "");
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.slideshow = "";
            if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                scope.generalsearchsubmit(scope.modelsearch.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            scope.refinesubmitflag = "refine";
            scope.generalsearchsubmit(scope.modelsearch.typesearch, 1, 8);
            scope.$broadcast('setslide');
        };
        scope.hightFromrefine = function(type) {
            switch (type) {
                case "heightfrom":
                    scope.modelsearch.HeightFromtext = scope.checkheight(scope.modelsearch.HeightFrom);
                    break;
                case "heightto":
                    scope.modelsearch.Heighttotext = scope.checkheight(scope.modelsearch.Heightto);
                    break;
            }
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
                        scope.truepartner = true;
                        if (SearchpageID === "1") {
                            typeofsearch = "profileid";
                            scope.selectedIndex = 2;
                        } else if (SearchpageID === "2") {
                            typeofsearch = "general";
                            scope.selectedIndex = 0;
                            scope.modelsearch.generalsavedsearchbtn = "Update";
                            scope.modelsearch.SearchResult_IDflag = SearchResult_ID;
                        } else {
                            typeofsearch = "advanced";
                            scope.selectedIndex = 1;
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
                    if (helperservice.checkstringvalue(scope.modelsearch.custid)) {
                        searches.partnerdetails(scope.modelsearch.custid, "", "").then(function(response) {
                            // scope.resetfunctionality();
                            scope.partnerbindings(response);
                        });
                    } else {
                        //controlResetMultiselects();
                        scope.resetfunctionality();
                    }
                    break;
            }
        };
        $rootscope.$on("profile", function(event, indexvalue) {
            sessionStorage.removeItem("homepageobject");
            scope.truepartner = true;
            scope.truepartnerrefine = true;
            scope.modelsearch.showcontrols = true;
            scope.selectedIndex = indexvalue;
        });
        scope.redirectToviewfull = function(custid, logid) {
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            var realpath = '/viewFullProfileCustomer';
            window.open(realpath, '_blank');
            // authSvc.paymentstaus(scope.modelsearch.custid, scope).then(function(responsepaid) {
            //     if (responsepaid === true) {
            //         window.open(realpath, '_blank');
            //     }

            // });

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
            if (form !== undefined && helperservice.checkstringvalue(form.message)) {
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

    }
]);