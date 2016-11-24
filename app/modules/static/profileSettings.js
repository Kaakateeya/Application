app.controller("profilesettings", ['$scope', '$mdDialog', 'customerProfilesettings', 'SelectBindServiceApp', 'authSvc', 'alert', function(scope, $mdDialog, customerProfilesettings, service, authSvc, alerts) {
    var logincustid = authSvc.getCustId();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
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
        console.log(response);
        scope.countryCode = [{ label: "--Select--", title: "--select--", value: "0" }];
        _.each(response.data, function(item) {
            scope.countryCode.push({ label: item.Name, title: item.Name, value: item.ID });
        });

    });
    scope.arrayprofilesettings = {};
    scope.getdetails = function() {
        customerProfilesettings.getprofilesettinginfo(scope.custid).then(function(response) {
            console.log(response);
            _.each(response.data, function(item) {
                scope.arrayprofilesettings = item;
                scope.mailyes = scope.arrayprofilesettings.AllowEmail === "False" ? "0" : "1";
                scope.smsyes = scope.arrayprofilesettings.AllowSMS === "False" ? "0" : "1";
            });
        });
    };
    scope.pageload = function() {
        scope.getdetails();
    }


    scope.toggleActivationsss = function(btntype) {
        switch (btntype) {
            case "email":
                debugger;
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
                debugger;
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
                    console.log(response);
                    if (response.data == 1) {
                        alerts.open('Email Upadated successfully', 'success');
                    } else {
                        alerts.open('Email Updated failed', 'warning');
                    }
                });
                break;
            case "mobile":
                var FamilyID = scope.arrayprofilesettings.MobileCustFamily_ID;
                var CountryCodeID = scope.ddlcountrycode;
                var number = scope.Confirmnewnumber;
                customerProfilesettings.submitemailmobilesubmit(FamilyID, number, CountryCodeID, 0).then(function(response) {
                    console.log(response);
                    if (response.data == 1) {
                        alerts.open('Mobile Upadated successfully', 'success');
                    } else {
                        alerts.open('Mobile Updated failed', 'warning');
                    }
                });
                break;
        }
    };
    scope.submitpassword = function() {
        debugger;
        var OldPassword = scope.OldPassword;
        var NewPassword = scope.NewPassword;
        var ConfirmPassword = scope.ConfirmPassword;
        var custId = scope.custid;
        customerProfilesettings.passwordchange(OldPassword, NewPassword, ConfirmPassword, custId).then(function(response) {
            console.log(response);
            if (response.data == 1) {
                alerts.open('Passsword updated successfully', 'success');
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
            console.log(response);
            if (response.data == 1) {
                alerts.open('Hide Profile successfully', 'success');
            } else {
                alerts.open('Hide Profile failed', 'warning');
            }
        });
    };
    scope.submitdeleteprofile = function() {
        var ProfileID = scope.ProfileID;
        var Narrtion = scope.Narrtion;
        customerProfilesettings.deleteprofile(ProfileID, Narrtion).then(function(response) {
            console.log(response);
            if (response.data == 1) {
                alerts.open('Delete Profile successfully', 'success');
            } else {
                alerts.open('Delete Profile failed', 'warning');
            }
        });
    };
    scope.submitmanagealerts = function() {
        var CustID = scope.custid;
        var AllowEmail = scope.mailyes === 0 ? 0 : 1;
        var AllowSMS = scope.smsyes === 0 ? 0 : 1;
        customerProfilesettings.manageprofiles(CustID, AllowEmail, AllowSMS).then(function(response) {
            console.log(response);
            if (response.data == 1) {
                alerts.open('Submit successfully', 'success');
            } else {
                alerts.open('submit failed', 'warning');
            }
        });
    };
    scope.unhideprofile = function() {
        var Expirydate = null;
        var CustID = scope.custid;
        var iflag = 0;
        customerProfilesettings.hideprofile(Expirydate, CustID, iflag).then(function(response) {
            console.log(response);
            if (response.data == 1) {
                alerts.open('Unhide your Profile successfully', 'success');
            } else {
                alerts.open('Unhide your Profile failed', 'warning');
            }
        });
    };
    scope.Resetallfields = function(type) {
        switch (type) {
            case "email":
                debugger;
                scope.NewEmail = null;
                scope.Confirmnewemail = null;
                scope.getdetails();
                scope.activated = false;
                scope.disabled = true;
                this.emailform.NewEmail = null;
                this.emailform.Confirmnewemail = null;
                this.emailform.$setPristine();
                this.emailform.$setUntouched();
                this.emailform.$setValidity();
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
                this.mobileform.$setValidity();
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
                this.projectForm.$setValidity();
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
                this.hideprofileform.$setValidity();
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
                this.deleteprofileform.$setValidity();
                break;
        }
    };

}]);
app.directive('pwCheck', [function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function() {
                scope.$apply(function() {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}]);