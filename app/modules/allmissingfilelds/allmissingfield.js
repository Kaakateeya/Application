app.controller('allmissingfieldsCtrl', ['$scope', 'dependencybind', '$mdDialog',
    'missingFieldService', '$timeout', '$stateParams', '$uibModal', 'route',
    function(scope, commonFactory,
        $mdDialog, missingFieldService, timeout, stateParams, uibModal, route) {
        scope.MFSelectArray = [];
        scope.misObj = {};
        scope.custid = parseInt(stateParams.eid);
        scope.showpopup = function() {
            missingFieldService.missingFieldSelect(scope.custid).then(function(response) {
                scope.MFSelectArray = (JSON.parse(response.data)[0]);
                scope.divSkip = true;
                if (scope.MFSelectArray.Customerdetailsflag === 1) {
                    scope.divHeight = commonFactory.checkvals(scope.MFSelectArray.Height) ? true : false;
                    scope.divMaritalstatus = commonFactory.checkvals(scope.MFSelectArray.MaritalStatus) ? true : false;
                    scope.divComplexion = commonFactory.checkvals(scope.MFSelectArray.Complexion) ? true : false;
                    if (scope.divHeight === true && scope.divMaritalstatus === true && scope.divComplexion === true) {
                        scope.divSkip = false;
                    }
                }
                if (scope.MFSelectArray.Professionflag === 1) {
                    scope.divProfession = commonFactory.checkvals(scope.MFSelectArray.JoblocationCountryID) ? true : false;
                    scope.divSalary = commonFactory.checkvals(scope.MFSelectArray.Salary) ? true : false;
                }
                if (scope.divProfession === true && scope.divSkip === false) {
                    scope.divCol = 'none';
                }
                if (scope.MFSelectArray.AstroFlag === 1) {
                    scope.divStarlanguage = commonFactory.checkvals(scope.MFSelectArray.TypeofStar) ? true : false;
                    scope.divStar = commonFactory.checkvals(scope.MFSelectArray.StarName) ? true : false;

                    scope.starArr = scope.divStar === false ? commonFactory.starBind(1) : [];
                    scope.divGothram = commonFactory.checkvals(scope.MFSelectArray.MeternalGothram) ? true : false;
                }

                if (scope.MFSelectArray.ParentsFatherFlag === 1) {
                    scope.divFatherNative = commonFactory.checkvals(scope.MFSelectArray.FFNative) ? true : false;
                }
                if (scope.MFSelectArray.ParentsMotherFlag === 1) {
                    scope.divMotherNative = commonFactory.checkvals(scope.MFSelectArray.MFNative) ? true : false;
                }
                scope.divProperty = commonFactory.checkvals(scope.MFSelectArray.Property) ? true : false;
                scope.divIssharedproperty = commonFactory.checkvals(scope.MFSelectArray.IsSharedProperty) ? true : false;
            });
        };


        scope.changeBind = function(type, parentval, countryVal) {
            switch (type) {
                case 'Country':
                    scope.stateArr = commonFactory.StateBind(parentval);
                    break;
                case 'State':
                    if (countryVal === '1' || countryVal === 1) {
                        scope.districtArr = commonFactory.districtBind(parentval);
                    } else {
                        scope.districtArr = [];
                        scope.cityeArr = commonFactory.districtBind(parentval);
                    }
                    break;
                case 'District':
                    scope.cityeArr = commonFactory.cityBind(parentval);
                    break;
                case 'star':
                    scope.starArr = commonFactory.starBind(parentval);
                    break;
            }
        };
        scope.misFieldsSubmit = function(obj) {
            var misInputobj = {
                Starlanguage: obj.ddlstarlanguages,
                i_updateflag: 1,
                iJoblocationCountry: obj.lstJoblocCountry,
                iJoblocationDistrict: obj.lstjoblocdistrict,
                iJoblocationState: obj.lstjoblocstate,
                iJobLocation: obj.lstjoblocation,
                IsSharedProperty: obj.rdlSharedProperty,
                AstroFlag: scope.MFSelectArray.AstroFlag,
                ParentsFlag: (scope.MFSelectArray.ParentsFatherFlag || scope.MFSelectArray.ParentsMotherFlag) ? 1 : 0,
                MFCustFamilyID: scope.MFSelectArray.MFCustFamilyID,
                FFCustFamilyID: scope.MFSelectArray.FFCustFamilyID,
                Gothram: obj.txtgothram,
                MotherNative: obj.txtMothernative,
                Salarycurrency: obj.ddlAnnualincome,
                Salary: obj.txtSalary,
                Complexion: obj.lstComplexion,
                Star: obj.lststar,
                FatherNative: obj.txtfathernative,
                Propertylakhs: obj.txtProperty,
                Maritalstatus: obj.lstMaritalstatus,
                Height: obj.ddlFromheight,
                CustID: scope.custid
            };

            missingFieldService.missingFieldSubmit(misInputobj).then(function(response) {
                scope.redirectToMobVerification();

            });
        };
        scope.redirectToMobVerification = function() {
            route.go('home', {});
        };
        scope.showpopup();

    }
]);