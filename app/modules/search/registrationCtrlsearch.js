app.controller('searchregistration', ['$scope', 'getArray', 'Commondependency', 'basicRegistrationService', '$filter', 'authSvc', '$timeout', function(scope, getArray, commondependency, basicRegistrationService, filter, authSvc, timeout) {

    scope.month = 'month';
    scope.reg = {};
    scope.monthArr = [];

    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    scope.monthBind = function() {

        var option = [];

        _.each(monthArr, function(item) {
            option.push({ "label": item, "title": item, "value": item });
        });
        return option;
    };
    scope.date = function(str, from, to) {
        var Arr = [];

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

        for (var i = to; i >= from; i--) {
            Arr.push({ "label": i, "title": i, "value": i });
        }
        return Arr;
    };
    scope.monthArr = scope.monthBind();
    scope.dateArr = scope.date('', 1, 31);
    scope.yearArr = scope.year('', 1936, 1998);


    timeout(function() {
        scope.postedby = getArray.GArray('childStayingWith');
        scope.religion = getArray.GArray('Religion');
        scope.Mothertongue = getArray.GArray('Mothertongue');
        scope.Caste = getArray.GArray('Caste');
        scope.countryCode = getArray.GArray('countryCode');

    }, 1000);
    timeout(function() {
        scope.Country = getArray.GArray('Country');

    }, 500);

    scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];

    scope.dayChange = function(obj, type) {

        var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
        var minth30 = 'Apr,Jun,Sep,Nov';
        var month28 = 'Feb';


        if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {

        } else {
            if (type === 'day') {
                obj.ddlMM = '';
            } else {
                scope.dateArr = [];
                scope.dateArr = scope.date('DD', 1, 31);
                obj.ddlDD = '';
            }
        }
    };

    scope.changeBind = function(parentval, parentval2) {
        scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2));
    };

    scope.regSubmit = function(obj) {

        var valmm = _.indexOf(monthArr, obj.ddlMM);
        var date = obj.ddlDD + '-' + (valmm != -1 ? parseInt(valmm) + 1 : 0) + '-' + obj.ddlYear;
        var inputObj = {
            strFirstName: obj.txtfirstname,
            strLastName: obj.txtlastname,
            dtDOB: date !== '' ? filter('date')(date, 'yyyy-MM-dd') : null,
            intGenderID: obj.rbtngender,
            intReligionID: obj.ddlreligion,
            intMotherTongueID: obj.ddlmothertongue,
            intCasteID: obj.ddlcaste,
            intCountryLivingID: obj.ddlcountry,
            intMobileCode: obj.ddlmobilecountry,
            intLandCode: obj.ddllandcountry,
            IsCustomer: 1,
            strMobileNo: obj.txtMobileNo,
            ID: 1,
            strAreaCode: obj.txtArea,
            strLandNo: obj.txtlandNum,
            strEmail: obj.txtEmail,
            strPassword: obj.txtpassword,
            intProfileRegisteredBy: null,
            intEmpID: null,
            intCustPostedBY: obj.ddlpostedby,
            //strMobileVerificationCode: obj.
        };
        console.log(inputObj);
        basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
            console.log(res);
            scope.genderID = 0;
            authSvc.login(scope.reg.txtEmail, scope.reg.txtpassword).then(function(response) {
                console.log(response);
                authSvc.user(response.response !== null ? response.response[0] : null);
                scope.genderID = response.response[0].GenderID;
                window.location = "#/registration/seconadryRegistration/" + obj.txtfirstname + "/" + obj.txtlastname + "/" + obj.ddlcountry + "/" + response.response[0].GenderID;
                return false;
            });
        });
    };

    scope.valueExists = function(type, flag, val) {
        basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
            console.log(response);
            if (response.data === 1) {
                if (type === 'email') {
                    scope.reg.txtEmail = '';
                    alert('Email Already Exists');
                } else {
                    scope.reg.txtMobileNo = '';
                    alert('Mobile number Already Exists');
                }
            }
        });
    };


    scope.$watch(function() {
        return scope.reg.ddlcountry;
    }, function(current, original) {
        scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
    });



    scope.redirectprivacy = function(type) {
        window.open('#/privacyPolicy', '_blank');
    };



}]);