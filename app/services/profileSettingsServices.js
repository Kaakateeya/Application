app.factory('customerProfilesettings', ['$http', function(http) {
    return {
        getprofilesettinginfo: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getcustomerProfilesettings', { params: { CustID: 91022 } });
        },
        passwordchange: function(oldpassword, newpassword, confirmpassword, custid) {
            return http.get(app.apiroot + 'StaticPages/getUpdatePassword', { params: { OldPassword: oldpassword, NewPassword: newpassword, ConfirmPassword: confirmpassword, custId: custid } });
        },
        hideprofile: function(Expirydate, custid, flag) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { Expirydate: Expirydate, CustID: custid, iflag: flag } });
        },
        deleteprofile: function(ProfileID, Narrtion) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { ProfileID: ProfileID, Narrtion: Narrtion } });
        },
        manageprofiles: function(CustID) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { CustID: CustID } });
        },
        submitemailmobilesubmit: function(NewEmail, Confirmnewemail, IsVerified, custid) {
            return http.get(app.apiroot + 'StaticPages/getInsertcustomerProfilesettings', { params: { NewEmail: NewEmail, Confirmnewemail: Confirmnewemail, IsVerified: IsVerified, custid: custid } });
        }
    };
}]);