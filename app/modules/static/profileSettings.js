app.controller("profilesettings", ['$scope', '$mdDialog', 'customerProfilesettings', 'SelectBindServiceApp',
    'authSvc', 'alert', 'helperservice', 'basicRegistrationService',
    function(scope, $mdDialog, customerProfilesettings, service, authSvc, alerts, helperservice, basicRegistrationService) {
        scope.getdetails = function() {
            var logincustid = authSvc.getCustId();
            scope.custid = helperservice.checkstringvalue(logincustid) ? logincustid : null;
            scope.days = function() {
                scope.test = [];
                scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
                for (var i = 1; i <= 30; i++) {
                    scope.test.push({ label: i + ' days', title: i + ' days', value: i });
                }
                return scope.test;
            };
            scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            scope.countryCode = [];
            scope.arraydays = scope.days();
            scope.mailyes = "1";
            scope.smsyes = "1";
            scope.activated = false;
            scope.disabled = true;
            scope.activatedmobile = false;
            scope.countrycodedisable = true;
            scope.passwordsisableswitch = false;
            scope.passwordsisable = true;
            scope.alertmanageswitch = false;
            scope.manageakerts = true;
            scope.hideprofileswitchs = false;
            scope.hideprofile = true;
            scope.deleteprofileswitch = false;
            scope.deleteprofiledis = true;
            service.countryCodeselect().then(function(response) {
                scope.countryCode = [];
                scope.countryCode = [{ label: "--Select--", title: "--select--", value: "0" }];
                _.each(response.data, function(item) {
                    scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
                });
            });
            scope.arrayprofilesettings = {};
            customerProfilesettings.getprofilesettinginfo(scope.custid).then(function(response) {
                _.each(response.data, function(item) {
                    scope.arrayprofilesettings = item;
                    scope.mailyes = scope.arrayprofilesettings.AllowEmail === false ? 0 : 1;
                    scope.smsyes = scope.arrayprofilesettings.AllowSMS === false ? 0 : 1;
                    scope.ProfileStatusID = scope.arrayprofilesettings.ProfileStatusID !== 55 ? { 'display': 'block' } : { 'display': 'none' };
                    scope.ProfileStatusIDunhide = scope.arrayprofilesettings.ProfileStatusID === 55 ? { 'display': 'block' } : { 'display': 'none' };
                });
            });
        };
        scope.pageload = function() {

            scope.getdetails();
        };
        scope.toggleActivationsss = function(btntype) {
            switch (btntype) {
                case "email":
                    if (scope.activated)
                        scope.disabled = false;
                    else
                        scope.disabled = true;
                    break;
                case "mobile":
                    if (scope.activatedmobile)
                        scope.countrycodedisable = false;
                    else
                        scope.countrycodedisable = true;
                    break;
                case "password":
                    if (scope.passwordsisableswitch)
                        scope.passwordsisable = false;
                    else
                        scope.passwordsisable = true;
                    break;
                case "managealerts":
                    if (scope.alertmanageswitch)
                        scope.manageakerts = false;
                    else
                        scope.manageakerts = true;
                    break;
                case "hideprofiles":
                    if (scope.hideprofileswitchs)
                        scope.hideprofile = false;
                    else
                        scope.hideprofile = true;
                    break;
                case "deleteprofile":
                    if (scope.deleteprofileswitch)
                        scope.deleteprofiledis = false;
                    else
                        scope.deleteprofiledis = true;
                    break;
            }
        };
        scope.submitemailamdmobile = function(Typeofsub) {
            switch (Typeofsub) {
                case "email":
                    var FamilyID = scope.arrayprofilesettings.EmailCust_Family_ID;
                    var NewEmail = scope.NewEmail;
                    customerProfilesettings.submitemailmobilesubmit(FamilyID, NewEmail, "", 1).then(function(response) {
                        if (response.data == 1) {
                            alerts.open('Email Upadated successfully', 'success');
                            scope.Resetallfields('email');
                        } else {
                            alerts.open('Email Updated failed', 'warning');
                        }
                    });
                    break;
                case "mobile":
                    var FamilyIDs = scope.arrayprofilesettings.MobileCustFamily_ID;
                    var CountryCodeID = scope.ddlcountrycode;
                    var number = scope.Confirmnewnumber;
                    customerProfilesettings.submitemailmobilesubmit(FamilyIDs, number, CountryCodeID, 0).then(function(response) {
                        if (response.data == 1) {
                            alerts.open('Mobile Upadated successfully', 'success');
                            scope.Resetallfields('mobile');
                        } else {
                            alerts.open('Mobile Updated failed', 'warning');
                        }
                    });
                    break;
            }
        };
        scope.submitpassword = function() {
            var OldPassword = scope.OldPassword;
            var NewPassword = scope.NewPassword;
            var ConfirmPassword = scope.ConfirmPassword;
            var custId = scope.custid;
            customerProfilesettings.passwordchange(OldPassword, NewPassword, ConfirmPassword, custId).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Passsword updated successfully', 'success');
                    scope.Resetallfields('password');
                } else {
                    alerts.open('Passsword updated failed', 'warning');
                }
            });
        };
        scope.submithideprofile = function() {
            var Expirydate = scope.hideprofiledays;
            var CustID = scope.custid;
            var iflag = 1;
            var Narration = scope.hiddennarration;
            customerProfilesettings.hideprofile(Expirydate, CustID, iflag).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Hide Profile successfully', 'success');
                    scope.Resetallfields('hide');

                } else {
                    alerts.open('Hide Profile failed', 'warning');
                }
            });
        };
        scope.submitdeleteprofile = function() {
            var ProfileID = scope.ProfileID;
            var Narrtion = scope.Narrtion;
            customerProfilesettings.deleteprofile(ProfileID, Narrtion).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Delete Profile successfully', 'success');
                    scope.Resetallfields('deleteprofiles');
                } else {
                    alerts.open('Delete Profile failed', 'warning');
                }
            });
        };
        scope.submitmanagealerts = function() {
            var CustID = scope.custid;
            var AllowEmail = scope.mailyes === '0' ? 0 : 1;
            var AllowSMS = scope.smsyes === '0' ? 0 : 1;
            customerProfilesettings.manageprofiles(CustID, AllowEmail, AllowSMS).then(function(response) {
                if (response.data == 1) {
                    alerts.open('Submit successfully', 'success');
                    scope.Resetallfields('alerts');
                } else {
                    alerts.open('submit failed', 'warning');
                }
            });
        };
        scope.unhideprofile = function() {
            var Expirydate = "";
            var CustID = scope.custid;
            var iflag = 0;
            customerProfilesettings.hideprofile(Expirydate, CustID, iflag).then(function(response) {
                if (response.data == 1) {
                    scope.getdetails();
                    alerts.open('Unhide your Profile successfully', 'success');
                } else {
                    alerts.open('Unhide your Profile failed', 'warning');
                }
            });
        };
        scope.Resetallfields = function(type) {
            switch (type) {
                case "email":
                    scope.NewEmail = null;
                    scope.Confirmnewemail = null;
                    scope.getdetails();
                    scope.activated = false;
                    scope.disabled = true;
                    this.emailform.NewEmail = null;
                    this.emailform.Confirmnewemail = null;
                    this.emailform.$setPristine();
                    this.emailform.$setUntouched();
                    this.emailform.$setinValidity();
                    break;
                case "mobile":
                    scope.ddlcountrycode = null;
                    scope.Confirmnewnumber = null;
                    scope.getdetails();
                    scope.activatedmobile = false;
                    scope.countrycodedisable = true;
                    this.mobileform.ddlcountrycode = null;
                    this.mobileform.Confirmnewnumber = null;
                    this.mobileform.$setPristine();
                    this.mobileform.$setUntouched();
                    this.mobileform.$setinValidity();
                    break;
                case "password":
                    scope.OldPassword = null;
                    scope.NewPassword = null;
                    scope.ConfirmPassword = null;
                    scope.getdetails();
                    scope.passwordsisableswitch = false;
                    scope.passwordsisable = true;
                    this.projectForm.OldPassword = null;
                    this.projectForm.NewPassword = null;
                    this.projectForm.ConfirmPassword = null;
                    this.projectForm.$setPristine();
                    this.projectForm.$setUntouched();
                    this.projectForm.$setinValidity();
                    break;
                case "hide":
                    scope.hideprofiledays = null;
                    scope.hiddennarration = null;
                    scope.getdetails();
                    scope.hideprofileswitchs = false;
                    scope.hideprofile = true;
                    this.hideprofileform.hideprofiledays = null;
                    this.hideprofileform.$setPristine();
                    this.hideprofileform.$setUntouched();
                    this.hideprofileform.$setinValidity();
                    break;
                case "alerts":
                    scope.mailyes = null;
                    scope.smsyes = null;
                    scope.getdetails();
                    scope.alertmanageswitch = false;
                    scope.manageakerts = true;
                    break;
                case "deleteprofiles":
                    scope.Narration = null;
                    scope.isChecked = null;
                    scope.getdetails();
                    scope.deleteprofileswitch = false;
                    scope.deleteprofiledis = true;
                    this.deleteprofileform.narration = null;
                    this.deleteprofileform.$setPristine();
                    this.deleteprofileform.$setUntouched();
                    this.deleteprofileform.$setinValidity();
                    break;
            }
        };



        scope.valueExists = function(type, flag, val) {
            if (val !== undefined) {
                basicRegistrationService.emailExists({ iflagEmailmobile: flag, EmailMobile: val }).then(function(response) {
                    console.log(response);
                    if (response.data === 1) {
                        if (type === 'email') {
                            scope.NewEmail = '';
                            alerts.open('Email Already Exists', 'warning');
                        } else {
                            scope.Confirmnewnumber = '';
                            alerts.open('Mobile number Already Exists', 'warning');
                        }
                    }
                });
            }
        };



    }
]);