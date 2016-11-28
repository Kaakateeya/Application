app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert', '$uibModal', 'dependencybind', 'customerDashboardServices', 'authSvc',

    function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory, customerDashboardServices, authSvc) {
        scope.searchTerm = 0;
        scope.selectcaste = 0;
        scope.PartnerProfilesnew = [];
        scope.truepartner = true;
        scope.showcontrols = true;
        var SearchRequest = 0;
        var logincustid = authSvc.getCustId();
        scope.typesearch = "";
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        // scope.searches = 'searches';
        scope.changeBindsearhes = function(type, parentval, parentval2) {

            debugger;
            switch (type) {

                case 'Country':
                    debugger;
                    scope.State = commonFactory.StateBind(parentval);
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind(parentval);
                    break;
                case 'caste':
                    debugger;
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(parentval, (parentval2).toString());
                    console.log((scope.Caste));
                    break;
                case 'casteadv':
                    debugger;
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(parentval, (parentval2).toString());
                    console.log((scope.Caste));
                    break;
                case 'star':
                    debugger;
                    scope.stars = commonFactory.starBind(parentval);
                    break;
            }
        };
        scope.generalpageload = function() {
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
                debugger;
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
            searches.partnerdetails(scope.custid, 2).then(function(response) {
                console.log(response.data);
                scope.gender = scope.genderadvance = response.data.intGender;
                scope.AgeFrom = scope.AgeFromadvance = response.data.Ageto;
                scope.Ageto = scope.Agetoadvance = response.data.Agefrom;
                scope.HeightFrom = scope.HeightFromadvance = response.data.Heightto;
                scope.Heightto = scope.Heighttoadvance = response.data.Heightfrom;
                scope.maritalstatus = scope.maritalstatusadvance = response.data.Maritalstatus.split(',');
                scope.educationcat = scope.educationcategoryadvance = response.data.Educationcategory.split(',');
                scope.country = scope.countryadvance = response.data.Country.split(',');
                scope.religion = scope.religionadvance = response.data.Religion;
                scope.mothertongue = scope.mothertobgueadvance = response.data.MotherTongue.split(',');
                scope.Caste = commonFactory.casteDepedency(response.data.Religion, response.data.MotherTongue);
                scope.caste = scope.casteadvance = response.data.Caste != null ? response.data.Caste.split(',') : "0";
                scope.regdays = scope.regdaysadvance = response.data.i_Registrationdays;
                scope.castetext = scope.casteadvancetext = response.data.CasteText;
                scope.physicalstatusadvance = response.data.PhysicalStatus;
                scope.State = commonFactory.StateBind(response.data.Country);
                scope.stateadvance = response.data.State != null ? response.data.State.split(',') : "0";
                scope.visastatusadvance = response.data.Visastatus != null ? response.data.Visastatus.split(',') : "0";
                scope.Educationgroup = commonFactory.educationGroupBind(response.data.Educationcategory);

                scope.Educationadvance = response.data.Education != null ? response.data.Education.split(',') : "0";
                scope.Professiongroupadvance = response.data.Professiongroup;
                scope.monthsalcurrency = response.data.iAnnualincome;
                scope.fromcurrency = response.data.iFromSal;
                scope.tocurrency = response.data.iToSal;
                scope.starsadvance = response.data.Stars != null ? response.data.Stars.split(',') : "0";
            });
        };
        scope.clearSearchTerm = function() {
            scope.searchTerm = '';
        };
        scope.generalsearchsubmit = function(type, frompage, topage) {
            scope.typesearch = type;
            scope.showcontrols = false;
            scope.truepartner = false;
            switch (type) {
                case "general":
                    SearchRequest = {
                        intCusID: scope.custid,
                        strCust_id: scope.custid !== null ? scope.custid : "",
                        intGender: scope.gender,
                        FromAge: scope.AgeFrom,
                        ToAge: scope.Ageto,
                        iFromHeight: scope.HeightFrom,
                        iToHeight: scope.Heightto,
                        Maritalstatus: (scope.maritalstatus).toString(),
                        intReligionID: scope.religion,
                        MotherTongue: (scope.mothertongue).toString(),
                        Caste: (scope.caste).toString(),
                        iPhysicalstatus: null,
                        Complexion: null,
                        Country: (scope.country).toString(),
                        State: null,
                        Visastatus: null,
                        Educationcategory: (scope.educationcat).toString(),
                        Education: null,
                        Professiongroup: null,
                        iFromSal: null,
                        iToSal: null,
                        iManglinkKujaDosham: null,
                        iStarLanguage: null,
                        Stars: null,
                        iDiet: null,
                        intPhotoCount: null,
                        StartIndex: frompage,
                        EndIndex: topage,
                        i_Registrationdays: scope.regdays,
                        iAnnualincome: null,
                        flagforurl: null,
                        SavedSearch: null,
                        SearchPageID: 1,
                        PageName: null,
                        SavedSearchresultid: null,
                        Searchresult: null
                    };
                    debugger;
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
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
                case "advanced":
                    SearchRequest = {
                        intCusID: scope.custid,
                        strCust_id: scope.custid !== null ? scope.custid : "",
                        intGender: scope.genderadvance,
                        FromAge: scope.AgeFromadvance,
                        ToAge: scope.Agetoadvance,
                        iFromHeight: scope.HeightFromadvance,
                        iToHeight: scope.Heighttoadvance,
                        Maritalstatus: (scope.maritalstatusadvance).toString(),
                        intReligionID: scope.religionadvance,
                        MotherTongue: (scope.mothertobgueadvance).toString(),
                        Caste: (scope.casteadvance).toString(),
                        iPhysicalstatus: scope.physicalstatusadvance,
                        Complexion: null,
                        Country: (scope.countryadvance).toString(),
                        State: (scope.stateadvance).toString(),
                        Visastatus: (scope.visastatusadvance).toString(),
                        Educationcategory: (scope.educationcategoryadvance).toString(),
                        Education: (scope.Educationadvance).toString(),
                        Professiongroup: (scope.Professiongroupadvance).toString(),
                        iFromSal: scope.fromcurrency,
                        iToSal: scope.tocurrency,
                        iManglinkKujaDosham: scope.kujadosham,
                        iStarLanguage: scope.starlanguage,
                        Stars: (scope.starsadvance).toString(),
                        iDiet: scope.diet,
                        intPhotoCount: null,
                        StartIndex: frompage,
                        EndIndex: topage,
                        i_Registrationdays: scope.regdaysadvance,
                        iAnnualincome: scope.monthsalcurrency,
                        flagforurl: null,
                        SavedSearch: null,
                        SearchPageID: 1,
                        PageName: null,
                        SavedSearchresultid: null,
                        Searchresult: null
                    };
                    searches.CustomerGeneralandAdvancedSearchsubmit(SearchRequest).then(function(response) {
                        debugger;
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
                    break;
            }
        };
        scope.savedseapopup = function() {
            alerts.dynamicpopup("savedsearch.html", scope, uibModal);
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.$on("modifyursearchpartner", function(event) {
            scope.showcontrols = true;
            scope.truepartner = true;
        });
        scope.$on('directivechangeevent', function(event, modal, type) {

            switch (type) {

                case 'Country':
                    debugger;
                    scope.State = commonFactory.StateBind(modal);
                    break;
                case 'EducationCatgory':
                    scope.Educationgroup = commonFactory.educationGroupBind(modal);
                    break;
                case 'caste':
                    debugger;
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(scope.religion, (modal).toString());
                    console.log((scope.Caste));
                    break;
                case 'casteadv':
                    debugger;
                    scope.Caste = [];
                    scope.Caste = commonFactory.casteDepedency(scope.religionadvance, (modal).toString());
                    console.log((scope.Caste));
                    break;
                case 'star':
                    debugger;
                    scope.stars = commonFactory.starBind(modal);
                    break;
            }
        });
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.generalsearchsubmit(scope.typesearch, frompage, topage);
        });
    }
]);