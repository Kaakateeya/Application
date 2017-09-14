app.controller('searchregistration', ['$scope', 'getArray', 'commonFactory', 'basicRegistrationService',
    '$filter', 'authSvc', '$timeout', 'route', 'alert', 'SelectBindServicereg',
    function(scope, getArray, commondependency, basicRegistrationService, filter,
        authSvc, timeout, route, alerts, SelectBindServicereg) {
        scope.month = 'month';
        scope.reg = {};
        scope.monthArr = [];
        scope.casteArr = [];
        scope.casteArr.push({ "label": '--select--', "title": '--select--', "value": '0' });
        scope.reg.ddlcaste = '0';
        var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        scope.monthBind = function() {
            var option = [];
            option.push({ "label": '--select--', "title": '--select--', "value": '0' });
            _.each(monthArr, function(item) {
                option.push({ "label": item, "title": item, "value": item });
            });
            scope.reg.ddlDD = "0";
            return option;
        };
        scope.date = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": '--select--', "title": '--select--', "value": '0' });
            for (var i = from; i <= to; i++) {
                var strValue = null;
                if (i <= 9) {
                    strValue = "0" + i;
                } else {
                    strValue = i;
                }
                Arr.push({ "label": strValue, "title": strValue, "value": strValue });
            }
            scope.reg.ddlMM = "0";
            return Arr;
        };
        scope.year = function(str, from, to) {
            var Arr = [];
            Arr.push({ "label": '--select--', "title": '--select--', "value": '0' });
            for (var i = to; i >= from; i--) {
                Arr.push({ "label": i, "title": i, "value": i });
            }
            scope.reg.ddlYear = "0";
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
            // scope.countryCode = getArray.GArray('countryCode');
        }, 1000);
        // timeout(function() {
        //     scope.Country = getArray.GArray('Country');
        // }, 500);

        timeout(function() {
            var Country = [],
                CountryCode = [];
            Country.push({ "label": '--select--', "title": '--select--', "value": '0' });
            CountryCode.push({ "label": '--select--', "title": '--select--', "value": '0' });
            SelectBindServicereg.CountryWithCode().then(function(response) {
                _.each(response.data, function(item) {
                    Country.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                    CountryCode.push({ "label": item.CountryCode, "title": item.CountryCode, "value": item.ID });
                });
                console.log('test..');
                console.log(Country);
                scope.Country = Country;
                scope.countryCode = CountryCode;
                scope.reg.ddlcountry = '0';
                scope.reg.ddlmobilecountry = '0';
            });

        }, 100);

        scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];
        scope.dayChange = function(obj, type) {
            var months31 = 'Jan,Mar,May,Jul,Aug,Oct,Dec';
            var minth30 = 'Apr,Jun,Sep,Nov';
            var month28 = 'Feb';
            if ((obj.ddlDD <= 30 && minth30.indexOf(obj.ddlMM) !== -1) || (obj.ddlDD <= 31 && months31.indexOf(obj.ddlMM) !== -1) || ((obj.ddlDD <= 28 && month28.indexOf(obj.ddlMM) !== -1))) {} else {
                if (type === 'day') {
                    obj.ddlMM = '0';
                } else {
                    scope.dateArr = [];
                    scope.dateArr = scope.date('DD', 1, 31);
                    obj.ddlDD = '0';
                }
            }
        };
        scope.changeBind = function(parentval, parentval2) {
            scope.casteArr = commondependency.casteDepedency(commondependency.listSelectedVal(parentval), commondependency.listSelectedVal(parentval2) !== undefined && commondependency.listSelectedVal(parentval2) !== null && commondependency.listSelectedVal(parentval2) !== "" ? commondependency.listSelectedVal(parentval2) : 0);
            scope.reg.ddlcaste = 0;
        };
        scope.regSubmit = function(obj) {
            var valmm = _.indexOf(monthArr, obj.ddlMM);
            valmm = (valmm != -1 ? parseInt(valmm) + 1 : 0);
            valmm = valmm >= 10 ? valmm : '0' + valmm;
            var date = obj.ddlDD + '-' + valmm + '-' + obj.ddlYear;
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

            basicRegistrationService.submitBasicRegistration(inputObj).then(function(res) {
                scope.genderID = 0;
                authSvc.login(scope.reg.txtEmail, scope.reg.txtpassword).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    scope.genderID = response.response[0].GenderID;
                    route.go('registration.seconadryRegistration', { fn: obj.txtfirstname, ln: obj.txtlastname, countryID: obj.ddlcountry, genderID: response.response[0].GenderID });
                    return false;
                });
            });
        };
        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
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
            }
        };
        scope.$watch(function() {
            return scope.reg.ddlcountry;
        }, function(current, original) {
            scope.reg.ddllandcountry = scope.reg.ddlmobilecountry = current;
        });
        scope.redirectprivacy = function(type) {
            window.open('privacyPolicy', '_blank');
        };
        scope.dynamicaapplycolors = function(value, id) {
            alerts.applycolors(value, id);
        };
        scope.dynamictextboxcolor = function(value, id) {
            alerts.applycolorsfortextboxes(value, id);
        };
    }
]);