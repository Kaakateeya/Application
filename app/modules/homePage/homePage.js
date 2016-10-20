

app.controller('home', ['$scope', 'homepageservices','authSvc', function (scope, homepageservices,authSvc) {



    scope.Age = function () {
        scope.test = [];
        scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
        for (var i = 18; i < 78; i++) {
            scope.test.push({ label: i + ' years', title: i + ' years', value: i });
        }
        return scope.test;

    }
    scope.arrayAge = scope.Age();
    scope.Religion = "Religion";
    scope.Country = "Country";
    scope.Caste = "Caste";
    scope.divloginblock = function () {
        $('.login_block_header').toggle();
    }
    scope.loginsubmit = function () {
       authSvc.login('310910220','XowIvsTkzINyyKyJrPlmgg==').then(function (response) {
            authSvc.user(response.response[0]);
            var d=authSvc.getCustId();
        });
    }
    scope.ValidatequickRegister = function () {
        var srchobject = {};
        srchobject.intCusID = null
        srchobject.strCust_id = null
        srchobject.intGender = null
        srchobject.FromAge = null
        srchobject.ToAge = null
        srchobject.iFromHeight = null
        srchobject.iToHeight = null
        srchobject.Maritalstatus = null
        srchobject.intReligionID = null
        srchobject.MotherTongue = null
        srchobject.Caste = null
        srchobject.iPhysicalstatus = null
        srchobject.Complexion = null
        srchobject.Country = null
        srchobject.State = null
        srchobject.Visastatus = null
        srchobject.Educationcategory = null
        srchobject.Education = null
        srchobject.Professiongroup = null
        srchobject.iFromSal = null
        srchobject.iToSal = null
        srchobject.iManglinkKujaDosham = null
        srchobject.iStarLanguage = null
        srchobject.Stars = null
        srchobject.iDiet = null
        srchobject.intPhotoCount = null
        srchobject.StartIndex = null
        srchobject.EndIndex = null
        srchobject.i_Registrationdays = null
        srchobject.iAnnualincome = null
        srchobject.flagforurl = null
        srchobject.SavedSearch = null
        srchobject.SearchPageID = null
        srchobject.PageName = null
        srchobject.SavedSearchresultid = null
        srchobject.Searchresult = null
    }

}]);