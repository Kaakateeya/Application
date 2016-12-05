app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata', '$timeout', function(scope, homepageservices, authSvc, successstoriesdata, timeout) {
    scope.fromge = 1;
    scope.topage = 5;
    scope.homeinit = function() {
        successstoriesdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
            scope.successstoriesarray = response.data;
        });
    };

    scope.Age = function() {
        scope.test = [];
        scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
        for (var i = 18; i < 78; i++) {
            scope.test.push({ label: i + ' years', title: i + ' years', value: i });
        }
        return scope.test;

    };
    scope.gender = "2";
    // scope.loadUsers = function() {
    //     return timeout(function() {
    //         scope.arrayAge = scope.arrayAge || scope.Age();
    //     }, 650);
    // };
    scope.arrayAge = scope.Age();
    scope.Religion = "Religion";
    scope.Country = "Country";
    scope.Caste = "Caste";
    scope.divloginblock = function() {
        $('.login_block_header').toggle();
    };
    scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
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

                    authSvc.user(response.response !== null ? response.response[0] : null);
                    // var d = authSvc.getCustId();
                    // var dd = authSvc.user();
                    window.location = "#/home";
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
        srchobject.FromAge = scope.Agefrom;
        srchobject.ToAge = scope.Ageto;
        srchobject.iFromHeight = null;
        srchobject.iToHeight = null;
        srchobject.Maritalstatus = null;
        srchobject.intReligionID = scope.religion;
        srchobject.MotherTongue = null;
        srchobject.Caste = scope.caste;
        srchobject.iPhysicalstatus = null;
        srchobject.Complexion = null;
        srchobject.Country = scope.country;
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
        // sessionStorage.removeItem("homepageobject");
        sessionStorage.setItem("homepageobject", JSON.stringify(srchobject));
        var realpath = '#/General';
        window.open(realpath, "_self");
    };



}]);