app.controller('missingfieldsctrl', ['$scope', 'commonFactory', 'authSvc', '$mdDialog',
    'missingFieldService', '$timeout', '$stateParams', '$uibModal', 'route',
    function(scope, commonFactory,
        authSvc, $mdDialog, missingFieldService, timeout, stateParams, uibModal, route) {
        var logincustid = authSvc.getCustId();
        scope.MFSelectArray = [];
        scope.dataqr = parseInt(stateParams.id);
        scope.misObj = {};
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.showpopup = function() {
            var modalpopupopen = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'missingfieldspopup.html',
                scope: scope,
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                windowClass: 'full'
            });
            scope.starArr = commonFactory.starBind(1);
            missingFieldService.missingFieldSelect(scope.custid).then(function(response) {
                scope.MFSelectArray = (JSON.parse(response.data)[0]);
                // scope.missingfileldsflag = sessionStorage.setItem("missingfileldsflag", 1);
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
                    scope.divGothram = commonFactory.checkvals(scope.MFSelectArray.MeternalGothram) ? true : false;
                    //lblAstroFlag.Text = !scope.MFSelectArray.AstroFlag ? dsresult.Tables[0].Rows[0]["AstroFlag"].ToString() : string.Empty;
                }

                if (scope.MFSelectArray.ParentsFatherFlag === 1) {
                    scope.divFatherNative = commonFactory.checkvals(scope.MFSelectArray.FFNative) ? true : false;
                    // lblFFCustFamilyID.Text = !scope.MFSelectArray.FFCustFamilyID ? dsresult.Tables[0].Rows[0]["FFCustFamilyID"].ToString() : string.Empty;
                }
                if (scope.MFSelectArray.ParentsMotherFlag === 1) {
                    scope.divMotherNative = commonFactory.checkvals(scope.MFSelectArray.MFNative) ? true : false;
                    //lblMFCustFamilyID.Text = !scope.MFSelectArray.MFCustFamilyID ? dsresult.Tables[0].Rows[0]["MFCustFamilyID"].ToString() : string.Empty;
                }
                // if (dsresult.Tables[0].Rows[0]["ParentsFatherFlag"].ToString().Equals("1") || dsresult.Tables[0].Rows[0]["ParentsMotherFlag"].ToString().Equals("1")) {
                //     lblParentsFlag.Text = "1";
                // }

                //if (dsresult.Tables[0].Rows[0]["Propertyflag"].ToString().Equals("1"))
                //{
                scope.divProperty = commonFactory.checkvals(scope.MFSelectArray.Property) ? true : false;
                scope.divIssharedproperty = commonFactory.checkvals(scope.MFSelectArray.IsSharedProperty) ? true : false;
                //}
            });
        };
        missingFieldService.GetCustStatus(scope.custid).then(function(response) {

        });
        scope.cancel = function() {
            $mdDialog.cancel();
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
                ParentsFlag: (scope.MFSelectArray.ParentsFatherFlag || scope.MFSelectArray.ParentsFatherFlag) ? 1 : 0,
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
                scope.cancel();
            });
        };
        scope.redirectToMobVerification = function() {
            sessionStorage.removeItem('missingStatus');
            route.go('mobileverf', {});
        };
        scope.pagerload = function(type) {
            timeout(function() {
                switch (scope.dataqr) {
                    case 1:
                        scope.$broadcast('datagetinedu', 'showEduModal');
                        break;
                    case 2:
                        scope.$broadcast('datagetinedu', 'showProfModal');
                        break;
                    case 3:
                        scope.$broadcast('datagetinParent', 'parent');
                        break;
                    case 4:
                        scope.$broadcast('datagetinAstro');
                        break;
                    case 5:
                        scope.showpopup();
                        break;
                }
            }, 50);
        };
        scope.pagerload(scope.dataqr);
        scope.currencyChange = function() {
            // if (!commonFactory.checkvals(scope.ddlAnnualincome)) {
            //     alert("Please select Curency");
            // }
        };
    }
]);