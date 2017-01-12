app.factory('customerProfilesettings', ['$http', function(http) {
    return {
        getprofilesettinginfo: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getcustomerProfilesettings', { params: { CustID: custid } });
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
        manageprofiles: function(CustID, AllowEmail, AllowSMS) {
            return http.get(app.apiroot + 'StaticPages/getProfilesettingAllowEmailAllowSMS', { params: { CustID: CustID, AllowEmail: AllowEmail, AllowSMS: AllowSMS } });
        },
        submitemailmobilesubmit: function(FamilyID, MobileEmail, CountryCodeID, imobileEmailflag) {
            return http.get(app.apiroot + 'StaticPages/getProfilesettingEmailMobileChange', { params: { FamilyID: FamilyID, MobileEmail: MobileEmail, CountryCodeID: CountryCodeID, imobileEmailflag: imobileEmailflag } });
        },
        getmyorderspayments: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getpaymentdetailsmethoddal', { params: { CustID: custid } });
        },
        getmysupporttickets: function(obj) {
            return http.post(app.apiroot + 'StaticPages/TicketDetails', obj);
        },
        getopenticket: function(PageID, ProfileID, TicketID) {
            return http.get(app.apiroot + 'StaticPages/getCustomerReopenTicketStatus', { params: { PageID: PageID, ProfileID: ProfileID, TicketID: TicketID } });
        },
        forgotpassword: function(emailorprofileid) {
            return http.get(app.apiroot + 'StaticPages/getForgotPassword', { params: { Username: emailorprofileid } });
        }
    };
}]);