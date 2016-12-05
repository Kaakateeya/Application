app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert',
    '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc', '$mdDialog',
    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory,
        customerDashboardServices, authSvc, $mdDialog) {
        scope.searchTerm = 0;
        scope.selectcaste = 0;
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.showcontrols = true;
        var SearchRequest = 0;
        var logincustid = authSvc.getCustId();
        scope.typesearch = "";
        scope.savedsearchselect = [];
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        // scope.searches = 'searches';
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
                    scope.Caste = commonFactory.casteDepedency(parentval, (parentval2).toString());
                    console.log((scope.Caste));
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind(parentval);
                    break;
            }
        };
        scope.savedsearchselectmethod = function(custid, SaveSearchName, iEditDelete) {
            debugger;
            searches.savedsearchselectmethod(custid, SaveSearchName, iEditDelete).then(function(response) {
                console.log(response.data);
                _.each(response.data, function(item) {
                    scope.savedsearchselect.push(item);
                });
            });
            if (iEditDelete === 0) {
                searches.savedsearchselectmethod(custid, "", 1).then(function(response) {
                    console.log(response.data);
                    _.each(response.data, function(item) {
                        scope.savedsearchselect.push(item);
                    });
                });
            }
        };
        scope.partnerbindings = function(response) {
            console.log(response.data);
            scope.gender = (response.data.intGender) === 1 ? 2 : 1;
            scope.AgeFrom = response.data.Ageto;
            scope.Ageto = response.data.Agefrom;
            scope.HeightFrom = response.data.Heightto;
            scope.Heightto = response.data.Heightfrom;
            scope.maritalstatus = response.data.Maritalstatus.split(',');
            scope.educationcat = response.data.Educationcategory.split(',');
            scope.country = response.data.Country.split(',');
            scope.religion = response.data.Religion;
            scope.mothertongue = response.data.MotherTongue.split(',');
            scope.Caste = commonFactory.casteDepedency(response.data.Religion, response.data.MotherTongue);
            scope.caste = response.data.Caste != null ? response.data.Caste.split(',') : "0";
            scope.castetext = response.data.CasteText;
            scope.physicalstatusadvance = response.data.PhysicalStatusstring;
            scope.State = commonFactory.StateBind(response.data.Country);
            scope.stateadvance = response.data.State != null ? response.data.State.split(',') : "0";
            scope.Educationgroup = commonFactory.educationGroupBind(response.data.Educationcategory);
            scope.Educationadvance = response.data.Education != null ? response.data.Education.split(',') : "0";
            scope.starsadvance = response.data.Stars != null ? response.data.Stars.split(',') : "0";
        }
        scope.generalpageload = function() {
            scope.object = JSON.parse(sessionStorage.getItem("homepageobject"));
            scope.Age = function() {
                scope.test = [];
                scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
                for (var i = 18; i < 78; i++) {
                    scope.test.push({ label: i + ' years', title: i + ' years', value: i });
                }
                return scope.test;
            };
            scope.arrayAge = scope.Age();
            scope.height = arrayConstants.height;
            scope.MaritalStatus = arrayConstants.MaritalStatus;
            scope.educationcategory = arrayConstants.educationcategory;
            service.countrySelect().then(function(response) {
                scope.Country = [];
                console.log(response);
                _.each(response.data, function(item) {
                    scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            scope.Religion = arrayConstants.Religion;
            scope.Mothertongue = arrayConstants.Mothertongue;
            scope.visastatus = arrayConstants.visastatus;
            service.ProfessionGroup().then(function(response) {
                scope.Professiongroup = [];
                _.each(response.data, function(item) {
                    scope.Professiongroup.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            service.currency().then(function(response) {
                scope.Currency = [];
                _.each(response.data, function(item) {
                    scope.Currency.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                });
            });
            scope.stars = arrayConstants.stars;
            if (scope.custid !== undefined && scope.custid !== "" && scope.custid !== null) {
                searches.partnerdetails(scope.custid, "", "").then(function(response) {
                    scope.partnerbindings(response);
                });
                scope.savedsearchselectmethod(scope.custid, "", 1);

            } else if (scope.object != undefined && scope.object != null && scope.object != null) {
                debugger;
                scope.gender = (scope.object.intGender) === 1 ? 2 : 1;
                scope.AgeFrom = scope.object.FromAge;
                scope.Ageto = scope.object.ToAge;
                scope.country = scope.object.Country;
                scope.religion = scope.object.intReligionID;
                scope.caste = scope.object.Caste != null ? scope.object.Caste : "0";
                scope.generalsearchsubmit("general", 1, 9);
            } else {
                scope.gender = null;
                scope.AgeFrom = 18;
                scope.Ageto = 30;
                scope.religion = 1
            }
        };
        scope.clearSearchTerm = function() {
            scope.searchTerm = '';
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

            scope.showcontrols = false;
            scope.truepartner = false;
            switch (type) {
                case "advanced":
                case "general":
                    scope.typesearch = type;
                    searches.CustomerGeneralandAdvancedSearchsubmit(scope.submitobjectcommongenad(frompage, topage)).then(function(response) {
                        console.log(response);
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
                    });
                    scope.$broadcast('loadmore');
                    break;

                case "profileid":
                    scope.typesearch = type;
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
                        console.log(response);
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
                    });
                    scope.$broadcast('loadmore');
                    break;
                case "savedsearch":

                    debugger;
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
                        console.log(response);
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
                    });
                    // alerts.dynamicpopupclose();
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
                    }
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
                        console.log(response);
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
            scope.showcontrols = true;
            scope.truepartner = true;
        });
        scope.$on('slideshowsubmit', function(event, frompageslide, topageslide) {
            scope.generalsearchsubmit(scope.typesearch, frompageslide, topageslide);
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
                    console.log((scope.Caste));
                    break;
                case 'star':
                    scope.stars = commonFactory.starBind(modal);
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            if (scope.custid != null && scope.custid != undefined && scope.custid != "") {
                scope.generalsearchsubmit(scope.typesearch, frompage, topage);
            } else {
                scope.showloginpopup();
            }
        });
        scope.refinesubmit = function() {
            scope.generalsearchsubmit(scope.typesearch, 1, 9);
        };
        scope.hightFromrefine = function() {
            scope.HeightFromtext = scope.checkheight(scope.HeightFrom);
        };
        scope.hightTorefine = function() {
            scope.Heighttotext = scope.checkheight(scope.Heightto);
        }

        scope.checkheight = function(value) {
            var values;
            values = (checknumber(value));
            return values;
        }
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
                controller: DialogController,
                templateUrl: 'login.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,

            });
        };
        scope.$on('showloginpopup', function() {
            scope.showloginpopup();
        });

        function DialogController($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.validate = function() {

                if (($scope.username).indexOf("@") != -1) {

                    if (!$scope.ValidateEmail($scope.username)) {
                        $scope.username = '';
                        alert(" Please enter valid ProfileID/Email");
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (!$scope.Validatnumber($scope.username) || ($scope.username).length != 9) {
                        alert("Please enter valid ProfileID/Email");
                        $scope.username = '';
                        return false;

                    } else {
                        return true;
                    }

                }
            };
            $scope.loginsubmit = function() {
                debugger;
                if ($scope.username === "" || $scope.username === null || $scope.username === "ProfileID/EmailID") {
                    alert("Please enter user name");
                    return false;
                } else if ($scope.password === "" || $scope.password === null || $scope.password === "Enter the Password") {

                    alert("Please enter password");
                    return false;
                } else {
                    if ($scope.validate()) {
                        authSvc.login($scope.username, $scope.password).then(function(response) {
                            authSvc.user(response.response !== null ? response.response[0] : null);
                            var custidlogin = authSvc.getCustId();
                            window.location = "#/home";
                            $scope.cancel();
                        });
                    }
                }
            };

            $scope.ValidateEmail = function(email) {
                var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return expr.test(email);
            };
            $scope.Validatnumber = function(num) {
                var expr1 = /[0-9 -()+]+$/;
                return expr1.test(num);
            };
        }
        scope.gettingsavedsearcheditsearch = function(type, SearchResult_ID, SearchpageID) {
            switch (type) {
                case "search":
                    debugger;
                    var typeofsearch;
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                        debugger;
                        if (SearchpageID === 1) {
                            typeofsearch = ""
                        } else if (SearchpageID === 2) {
                            typeofsearch = "general";
                        } else {
                            typeofsearch = "advanced";
                        }
                        scope.generalsearchsubmit(typeofsearch, 1, 9, "");
                    });
                    break;
                case "edit":
                    debugger;
                    searches.partnerdetails(scope.custid, "", SearchResult_ID).then(function(response) {
                        scope.partnerbindings(response);
                    });
                    break;
            }
        };
    }
]);