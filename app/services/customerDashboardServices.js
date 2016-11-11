app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getexpressintersetdata: function(object) {
            return http.post(app.apiroot + 'DashboardRequest/ExpressInterestSelectrequest', object);

        },
        getCustometDashBoardchats: function(object) {
            return http.get(app.apiroot + 'DashboardRequest/getCustometExpressIntrestDashBoardchats', { params: object });
        },
        insertcustomerservices: function(object) {
            return http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object);
        },
        Tickethistory: function(Ticketid, Type) {
            return http.get(app.apiroot + 'DashboardRequest/GetTicketinformation', { params: { Ticketid: Ticketid, Type: Type } });
        },
        Viewprofile: function(logcustid, tocustid) {
            debugger;
            return http.get(app.apiroot + 'StaticPages/getCustomerViewfullProfileDetails', { params: { ProfileID: tocustid, CustID: logcustid } })
        },
        Viewprofileflags: function(logcustid, tocustid) {
            debugger;
            return http.get(app.apiroot + 'StaticPages/getExpressinterstBookmarkIgnore', { params: { loggedcustid: logcustid, ToCustID: tocustid } });
        },
        communicationhistorychats: function(obj) {
            return http.post(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', obj);
        },
        acceptrejectexpressinterest: function(fromid, toid, logid, type, empid) {
            debugger;
            return http.get(app.apiroot + 'DashboardRequest/getInsertCustomerExpressinterest', { params: { fromcustid: fromid, tocustid: toid, logID: logid, interstTYpe: type, empid: "" } });
        },
        photopasswordactioninsert: function(fromcustid, tocustid, type) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardCustometMessagesCount', { params: { loggedcustid: fromcustid, ToCustID: tocustid, Type: type } });
        },

        maskclassall: function(logphotostatus, photo, photocount) {
            var photoclass = "";
            var PhotoMaskDiv;
            if (logphotostatus != "null" && logphotostatus != null)
                PhotoMaskDiv = logphotostatus != true && logphotostatus != "true" && photo.indexOf("ThumbNail") != -1 ? "cssMaskdivrev clearfix" : "";
            else
                PhotoMaskDiv = photo.indexOf("ThumbNail") != -1 ? "cssMaskdiv clearfix" : "";

            if (PhotoMaskDiv == "cssMaskdiv clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
            } else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
            } else if (photo.toLowerCase().indexOf("_rev") != -1) {
                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";

            } else if (photo.indexOf("noimage") != -1) {
                photoclass = "Linkdisabled";
            } else if (photo.indexOf("Password-Protected") != -1) {

                if (PhotoMaskDiv == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                } else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                photoclass = "Linkdisabled";
            } else if ((photocount) == 0) {
                photoclass = "Linkdisabled";

            } else {
                photoclass = "";
            }
            return photoclass;
        },
        getprofilegrade: function(custid) {
            return http.get(app.apiroot + 'StaticPages/getprofileGrade', { params: { CustID: custid } });
        },
        getphotoslideimages: function(custid) {
            return http.get(app.apiroot + 'StaticPages/GetPhotoSlideImages', { params: { CustID: custid } });
        }
    };
}]);