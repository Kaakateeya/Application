app.controller('Generalsearch', ['$scope', 'arrayConstants', 'SelectBindServiceApp', 'searches', 'alert', '$uibModal', 'dependencybind', function(scope, arrayConstants, service, searches, alerts, uibModal, commonFactory) {
    scope.searchTerm;
    scope.selectcaste;
    scope.PartnerProfilesnew = [];
    scope.truepartner = true;
    scope.showcontrols = true;
    var SearchRequest;
    scope.changeBind = function(type, parentval, parentval2) {

        switch (type) {
            case 'Country':
                scope.stateArr = commonFactory.StateBind(parentval);
                break;

            case 'EducationCatgory':
                scope.eduGroupArr = commonFactory.educationGroupBind(parentval);
                break;

            case 'caste':
                debugger;
                scope.Caste = commonFactory.casteDepedency(parentval, parentval2);
                break;

            case 'subCaste':
                scope.subCasteArr = commonFactory.subCaste(commonFactory.listSelectedVal(parentval));
                break;

            case 'star':
                scope.starArr = commonFactory.starBind(parentval);
                break;

            case 'region':
                scope.branchArr = commonFactory.branch(parentval);
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
            scope.Country = [];
            _.each(response.data, function(item) {
                scope.Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
            });
        });
        scope.Religion = arrayConstants.Religion;
        scope.Mothertongue = arrayConstants.Mothertongue;
        // service.casteselect().then(function(response) {
        //     scope.Caste = [];
        //     _.each(response.data, function(item) {
        //         scope.Caste.push({ "label": item.Name, "title": item.Name, "value": item.ID });
        //     });
        // });
        scope.visastatus = arrayConstants.visastatus;
        scope.Education = [];
        service.ProfessionGroup().then(function(response) {
            scope.Professiongroup = [];
            scope.Professiongroup.push({ "label": "--select--", "title": "--select--", "value": 0 });
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

        searches.partnerdetails(91035, 2).then(function(response) {
            console.log(response.data);
            debugger;
            scope.gender = scope.genderadvance = response.data.intGender;
            scope.AgeFrom = scope.AgeFromadvance = response.data.Agefrom;
            scope.Ageto = scope.Agetoadvance = response.data.Ageto;
            scope.HeightFrom = scope.HeightFromadvance = response.data.Heightto;
            scope.Heightto = scope.Heighttoadvance = response.data.Heightfrom;
            scope.maritalstatus = scope.maritalstatusadvance = response.data.Maritalstatus.split(',');
            scope.educationcat = scope.educationcategoryadvance = response.data.Educationcategory.split(',');
            scope.country = scope.countryadvance = response.data.Country.split(',');
            scope.religion = scope.religionadvance = response.data.Religion;
            scope.mothertongue = scope.mothertobgueadvance = response.data.MotherTongue.split(',');
            scope.caste = scope.casteadvance = response.data.Caste.split(',');
            scope.regdays = scope.regdaysadvance = response.data.i_Registrationdays;
            scope.castetext = scope.casteadvancetext = response.data.CasteText;
            scope.physicalstatusadvance = response.data.PhysicalStatus;
            scope.stateadvance = response.data.State;
            scope.visastatusadvance = response.data.Visastatus;
            scope.Educationadvance = response.data.Education;
            scope.Professiongroupadvance = response.data.Professiongroup;
            scope.monthsalcurrency = response.data.iAnnualincome;
            scope.fromcurrency = response.data.iFromSal;
            scope.tocurrency = response.data.iToSal;
            scope.starlanguage = response.data.PhysicalStatus;
            scope.starsadvance = response.data.PhysicalStatus;
            scope.diet = response.data.PhysicalStatus;
        });
    };



    scope.clearSearchTerm = function() {
        scope.searchTerm = '';
    };
    scope.generalsearchsubmit = function(type) {
        scope.showcontrols = false;
        scope.truepartner = false;
        switch (type) {
            case "general":
                SearchRequest = {

                    intCusID: scope.custid,
                    strCust_id: scope.custid != null ? scope.custid : "",
                    intGender: scope.gender,
                    FromAge: scope.AgeFrom,
                    ToAge: scope.Ageto,
                    iFromHeight: scope.HeightFrom,
                    iToHeight: scope.Heightto,
                    Maritalstatus: scope.maritalstatus,
                    intReligionID: scope.religion,
                    MotherTongue: scope.mothertongue,
                    Caste: scope.caste,
                    iPhysicalstatus: null,
                    Complexion: null,
                    Country: scope.country,
                    State: null,
                    Visastatus: null,
                    Educationcategory: scope.educationcat,
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
                    EndIndex: 10,
                    i_Registrationdays: scope.regdays,
                    iAnnualincome: null,
                    flagforurl: null,
                    SavedSearch: null,
                    SearchPageID: 1,
                    PageName: null,
                    SavedSearchresultid: null,
                    Searchresult: null

                };
                break;
            case "advanced":
                SearchRequest = {

                    intCusID: scope.custid,
                    strCust_id: scope.custid != null ? scope.custid : "",
                    intGender: scope.genderadvance,
                    FromAge: scope.AgeFromadvance,
                    ToAge: scope.Agetoadvance,
                    iFromHeight: scope.HeightFromadvance,
                    iToHeight: scope.Heighttoadvance,
                    Maritalstatus: scope.maritalstatusadvance,
                    intReligionID: scope.religionadvance,
                    MotherTongue: scope.mothertobgueadvance,
                    Caste: scope.casteadvance,
                    iPhysicalstatus: scope.physicalstatusadvance,
                    Complexion: null,
                    Country: scope.countryadvance,
                    State: scope.stateadvance,
                    Visastatus: scope.visastatusadvance,
                    Educationcategory: scope.educationcategoryadvance,
                    Education: scope.Educationadvance,
                    Professiongroup: scope.Professiongroupadvance,
                    iFromSal: scope.fromcurrency,
                    iToSal: scope.tocurrency,
                    iManglinkKujaDosham: scope.kujadosham,
                    iStarLanguage: scope.starlanguage,
                    Stars: scope.starsadvance,
                    iDiet: scope.diet,
                    intPhotoCount: null,
                    StartIndex: 1,
                    EndIndex: 10,
                    i_Registrationdays: scope.regdaysadvance,
                    iAnnualincome: scope.monthsalcurrency,
                    flagforurl: null,
                    SavedSearch: null,
                    SearchPageID: 1,
                    PageName: null,
                    SavedSearchresultid: null,
                    Searchresult: null

                };
                break;
            case "profileid":
                debugger;
                SearchRequest = {
                    intCusID: 91022,
                    //scope.custid != null ? scope.custid : "",
                    intGender: scope.gender,
                    strLastName: scope.lastname,
                    strFirstName: scope.firstname,
                    strProfileID: scope.profileid,
                    intCasteID: null,
                    StartIndex: 1,
                    EndIndex: 8,
                };
                searches.profileidsearch(SearchRequest).then(function(response) {
                    console.log(response.data);
                    _.each(response.data, function(item) {
                        scope.PartnerProfilesnew.push(item);
                    });
                });
                break;
            case "savedsearch":
                break;
        };
    };
    scope.savedseapopup = function() {
        alerts.dynamicpopup("savedsearch.html", scope, uibModal);
    };
    scope.modalpopupclose = function() {
        alerts.dynamicpopupclose();
    }
}]);