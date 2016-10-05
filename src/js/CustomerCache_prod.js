function CallApiWithoutLoader(Url, object) {
   
    var returndata = [];
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: Url.indexOf("aspx") == -1 ? (apipath + Url) : Url,
        data: JSON.stringify(object),
        dataType: "json",
        async: false,
        success: function (data) {
            returndata = data;
        },
        error: function (result) {
            //alert(result);
            return false;
        }
    });

    return returndata;
}




function CurrentDateSTringCS() {

    var currentdate = CallApiWithoutLoader("Getdate", {});
    return currentdate.d;
}


function loginCheck(PageType) {
    
    var usrname, password;
    if (PageType == 'innermaster') {
        usrname = $('#ctl00_txtUserName').val();
        password = $('#ctl00_txtPassword').val();
    }
    else if (PageType == 'search') {
        usrname = $('#txtUserLoginModelpopup').val();
        password = $('#txtPasswordModelpopup').val();
    }
    else if (PageType == 'emailverification') {
        usrname = $('#ctl00_ContentPlaceHolder1_lblprofileid').text();
        password = $('#ctl00_ContentPlaceHolder1_txtPassword').val();
    }
    else {
        usrname = $('#ctl00_ContentPlaceHolder1_txtUserName').val();
        password = $('#ctl00_ContentPlaceHolder1_txtPassword').val();

    }

    var object = {
        sendrequest: {
            Username: '' + usrname + '',
            Password: '' + password + '',
        }
    };
    var data = CallApiWithoutLoader("useLogin", object);
    if (data.d != undefined && data.d != null && data.d != "") {
        if (data.d.Status == 1) {
            localStorage.setItem("LogoutStatus", false);
            var CacheLoginDate = JSON.parse(localStorage.getItem("LoginDate"));
            if (CacheLoginDate != null) {
                if (CurrentDateSTringCS() != CacheLoginDate) {
                    localStorage.clear();
                    localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCS()));
                }
            }
            else {
                localStorage.clear();
                localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCS()));
            }
        }
    }
}

function homepage_load() {

    var CacheLoginDate = JSON.parse(localStorage.getItem("LoginDate"));
    var LogoutStatus = localStorage.getItem("LogoutStatus");
    if (LogoutStatus == "false" && CacheLoginDate != null) {
        if (CurrentDateSTringCS() == CacheLoginDate) {
            var EncryptstrCustidCache = JSON.parse(localStorage.getItem("EncryptstrCustid"));
            if (EncryptstrCustidCache != "" && EncryptstrCustidCache != null && EncryptstrCustidCache != undefined) {
                window.location = "CustomerDashBoard.aspx?CustID=" + EncryptstrCustidCache;
            }
        }
    }
}

function innermasterPge_load() {
    
    var LoginDate = JSON.parse(localStorage.getItem("LoginDate"));

    var EncryptstrCustidCache = JSON.parse(localStorage.getItem("EncryptstrCustid"));
    //var EncryptstrCustidQuerystring = '<%=this.Request.QueryString["CustID"]%>';
    var LogoutStatuss = localStorage.getItem("LogoutStatus");
    if (EncryptstrCustidQuerystring != "" && EncryptstrCustidQuerystring != null && EncryptstrCustidQuerystring != undefined) {
        if (LoginDate == null || LoginDate == undefined || CurrentDateSTringCS() != LoginDate || LogoutStatuss == "true") {
            localStorage.clear();
            window.location = "KaakateeyaCustomerHomePage.aspx";
        }

    }

}
function createCacheForRegistered(bool) {
    if (bool == true) {
        localStorage.setItem("LogoutStatus", false);
        var CacheLoginDate = JSON.parse(localStorage.getItem("LoginDate"));
        if (CacheLoginDate != null) {
            if (CurrentDateSTringCS() != CacheLoginDate) {
                localStorage.clear();
                localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCS()));
            }
        }
        else {
            localStorage.clear();
            localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCS()));
        }
    }

}

function loggedasCustomerCreateCache() {
    var txtprofileID = $('#txtprofileid').val();
    var PofileID;
    if (txtprofileID != '') {
        PofileID = CallApiWithoutLoader("../../Customer_new/KaakateeyaApi.aspx/GetCustID", { profileid: txtprofileID });
    }
    if (PofileID != undefined && PofileID != null && PofileID.d != undefined && PofileID.d != null) {
        localStorage.setItem("LogoutStatus", false);
        var CacheLoginDate = JSON.parse(localStorage.getItem("LoginDate"));
        if (CacheLoginDate != null) {
            if (CurrentDateSTringCSlog() != CacheLoginDate) {
                localStorage.clear();
                localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCSlog()));
            }
        }
        else {
            localStorage.clear();
            localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTringCSlog()));
        }
    }

}



