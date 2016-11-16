app.controller("profilesettings", ['$scope', '$mdDialog', 'customerProfilesettings', 'SelectBindService', 'authSvc', 'alert', function(scope, $mdDialog, customerProfilesettings, service, authSvc, alerts) {

    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    var loginpaidstatus = authSvc.getpaidstatus();
    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    scope.days = function() {
        scope.test = [];
        scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
        for (var i = 1; i <= 30; i++) {
            scope.test.push({ label: i + ' days', title: i + ' days', value: i });
        }
        return scope.test;
    };
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
    //
    scope.hideprofileswitch = false;
    scope.hideprofile = true;
    //
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
    customerProfilesettings.getprofilesettinginfo(scope.custid).then(function(response) {
        console.log(response);
        _.each(response.data, function(item) {
            debugger;
            scope.arrayprofilesettings = item;
            scope.mailyes = scope.arrayprofilesettings.AllowEmail !== null ? scope.arrayprofilesettings.AllowEmail : "1";
            scope.smsyes = scope.arrayprofilesettings.AllowSMS !== null ? scope.arrayprofilesettings.AllowSMS : "1";
        });
    });
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
                debugger;
                if (scope.activatedmobile)
                    scope.countrycodedisable = false;
                else
                    scope.countrycodedisable = true;
                break;
            case "password":
                debugger;
                if (scope.passwordsisableswitch)
                    scope.passwordsisable = false;
                else
                    scope.passwordsisable = true;
                break;
            case "managealerts":
                debugger;
                if (scope.alertmanageswitch)
                    scope.manageakerts = false;
                else
                    scope.manageakerts = true;
                break;
            case "hideprofiles":
                debugger;
                if (scope.hideprofileswitch)
                    scope.hideprofile = false;
                else
                    scope.hideprofile = true;
                break;
            case "deleteprofile":
                debugger;
                if (scope.deleteprofileswitch)
                    scope.deleteprofiledis = false;
                else
                    scope.deleteprofiledis = true;
                break;
        }

    };
    var alert;
    scope.showAlert = showAlert;
    scope.showDialog = showDialog;
    scope.items = [1, 2, 3];
    // Internal method
    function showAlert() {
        alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });

        $mdDialog
            .show(alert)
            .finally(function() {
                alert = undefined;
            });
    }

    function showDialog($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            template: '<md-dialog aria-label="List dialog">' +
                '  <md-dialog-content>' +
                '    <md-list>' +
                '      <md-list-item ng-repeat="item in items">' +
                '       <p>Number {{item}}</p>' +
                '      ' +
                '    </md-list-item></md-list>' +
                '  </md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close Dialog' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
            locals: {
                items: scope.items
            },
            controller: DialogController
        });

        function DialogController($scope, $mdDialog, items) {
            $scope.items = items;
            $scope.closeDialog = function() {
                $mdDialog.hide();
            }
        }
    }

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
        });
    };
    scope.submitdeleteprofile = function() {
        var ProfileID = scope.ProfileID;
        var Narrtion = scope.Narrtion;
        customerProfilesettings.deleteprofile(ProfileID, Narrtion).then(function(response) {
            console.log(response);
        });
    };
    // scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];
    // scope.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', '...'];
    // scope.submit = function() {
    // submit code goes here
    //  };
    //  scope.reset = function() {
    //      scope.obj = {
    //         name: "",
    //          myselect: "",
    //        status: ""
    //    }
    // };
    //scope.reset();
}]);