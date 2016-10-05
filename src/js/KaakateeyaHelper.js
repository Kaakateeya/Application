
var staticerror = "Unfortunatly,we faced some error while accessing your request.", loader = 0,
    secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableClickableOptGroups: true,
        enableCaseInsensitiveFiltering: true,
        inheritClass: true
    };
function CallApi(Url, object) {
    var returndata = [];
    loader = loader + 75;
    showhidepopup(loader);
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
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');
            return false;
        }
    });

    loader = loader - 75;
    showhidepopup(loader);
    return returndata;
}

//With out loader
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

// NULL PARAMETERISED 
function CallApinullParameter(Url) {
    var returndata;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: Url,
        data: '{}',
        dataType: "json",
        async: false,
        success: function (data) {

            returndata = data;
        },
        error: function (result) {
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');
        }
    });

    return returndata;
}
function Getreplydata(masterrname, dropdownname) {
    var options = [];
    var returnreplytxt = [];
    var odject = { 'methodname': 'ReplyType' };
    var data = CallApi('PopulateDropDownList', odject);
    if (data.d.length > 0) {
        if (!$("#" + dropdownname).hasClass("multiple")) {
            options.push({ label: "--Select--", title: "--select--", value: "0" });
        }
        $.each(data.d, function (key, value) {
            var replyarr = value.value.split(',');
            options.push({ label: replyarr[0], title: replyarr[0], value: value.Id });
            returnreplytxt.push({ label: replyarr[1], title: replyarr[1], value: value.Id });
        });
        $('#' + dropdownname + '').multiselect('dataprovider', options);

        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');

    }
    return returnreplytxt;
}
//method for binding horoscope

//method for binding image

function getimgPath(custid, profileid, photocount) {

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../Services/KaakateeyaServices.asmx/GetimgUrl",
        data: "{'strcustId':'" + custid + "','profileId':'" + profileid + "','photoCount':'" + photocount + "'}",
        dataType: "json",
        success: function (data) {

            $("#slideshow").carousel("pause").removeData();
            $(".carousel-indicators").html("");
            for (var i = 0; i < data.d.length; i++) {
                if (i === 0) {
                    $("#Ajaxbind").html("<div class='item active'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                    //$("#Ajaxbind").html("<div class='item active'><img id=ctl00_Repeater1_ctl0" + i + "_imh src='../img/010670449_FullPhoto.jpg'></div>");
                    $(".carousel-indicators").append("<li data-target='#slideshow' class='active' data-slide-to=" + i + "></li>");
                }
                else {
                    $("#Ajaxbind").append("<div class='item'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                    $(".carousel-indicators").append("<li data-target='#slideshow' data-slide-to=" + i + "></li>");
                }
            }
            $('#slideshow').carousel(0);


            $('#slidephoto').modal({ backdrop: 'static' });



        },
        error: function (result) {
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');

        }
    });
    $('#slideshow .carousel-control.left').attr('style', 'display:none;');
    $('#slideshow .carousel-control.right').attr('style', 'display:block;');
    checkitemGlobal('slideshow');

    return false;
}

function getimgPathforcustomersite(custid, profileid, photocount) {

    $.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../Services/KaakateeyaServices.asmx/GetimgUrlforcustomersite",
        data: "{'strcustId':'" + custid + "','profileId':'" + profileid + "','photoCount':'" + photocount + "'}",
        dataType: "json",
        success: function (data) {

            $("#slideshow").carousel("pause").removeData();
            $(".carousel-indicators").html("");
            for (var i = 0; i < data.d.length; i++) {

                if (i === 0) {
                    $("#Ajaxbind").html("<div class='item active'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                    //$("#Ajaxbind").html("<div class='item active'><img id=ctl00_Repeater1_ctl0" + i + "_imh src='../img/010670449_FullPhoto.jpg'></div>");
                    $(".carousel-indicators").append("<li data-target='#slideshow' class='active' data-slide-to=" + i + "></li>");
                }
                else {
                    $("#Ajaxbind").append("<div class='item'><img id=ctl00_Repeater1_ctl0" + i + "_imh src=" + data.d[i].imageurl + "></div>");
                    $(".carousel-indicators").append("<li data-target='#slideshow' data-slide-to=" + i + "></li>");
                }
            }
            $('#slideshow').carousel(0);

            $('#slidephoto').modal({ backdrop: 'static' });



        },
        error: function (result) {
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');

        }
    });
    return false;
}
function getPath(custid) {

    var objcustid = { 'strcustId': '' + custid + '' };
    var data = CallApi('GetUrl', objcustid);

    $('.Imagehoroid').attr("src", data.d);
    $('#horoscopepopup').modal({ backdrop: 'static', keyboard: false });

    return false;
}
function GetmasterData(masterrname, dropdownname) {
    var options = [];


    var secondConfigurationSetSingleSelect = {
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        inheritClass: true
    };
    var odject = { 'methodname': '' + masterrname + '' };
    var data = CallApi('PopulateDropDownList', odject);
    if (data.d.length > 0) {
        if (!$("#" + dropdownname).hasClass("multiple")) {
            if (masterrname == 'onlyRegionmaster') {
                options.push({ label: "All", title: "All", value: "0" });

            }
            else {
                options.push({ label: "--Select--", title: "--select--", value: "0" });

            }
        }
        $.each(data.d, function (key, value) {
            if (masterrname != "BranchWithEmp" && masterrname != "ReplyType") {
                options.push({ label: value.value, title: value.value, value: value.Id });
            }
            else if (masterrname == "ReplyType") {
                var replyarr = value.value.split(',');
                datareplyContext = options.push({ label: replyarr[0], title: replyarr[0], value: value.Id });
            }
            else {

                options.push({ label: value.ParentName, children: value.groupData });
            }

        });

        $('#' + dropdownname + '').multiselect('dataprovider', options);
        if (!$("#" + dropdownname).hasClass("multiple")) {
            $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSetSingleSelect);
        }
        else {
            $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        }
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}
function GetmasterDataNew(masterrname, dropdownname, data) {

    var options = [];

    if (data.length > 0) {
        if (!$("#" + dropdownname).hasClass("multiple")) {
            if (masterrname == 'onlyRegionmaster') {
                options.push({ label: "All", title: "All", value: "0" });
            }

            else if (dropdownname == "ddlAssignedempsearch") {
                options.push({ label: "--Select Emp Name--", title: "--Select Emp Name--", value: "0" });
            }
            else if (dropdownname == "ddlCategory") {
                options.push({ label: "--Select Category--", title: "--Select Category--", value: "0" });
            }
            else if (dropdownname == "ddlStatus") {
                options.push({ label: "--Select Tkt Status--", title: "--Select Tkt Status--", value: "0" });
            }
            else if (dropdownname == "ddlofficeloc") {
                options.push({ label: "--Select Brarch--", title: "--Select Brarch--", value: "0" });
            }
            else {
                options.push({ label: "--Select--", title: "--select--", value: "0" });

            }
        }

        $.each(data, function (key, value) {
            if (masterrname != "BranchWithEmp") {
                options.push({ label: value.value, title: value.value, value: value.Id });
            }
            else {

                options.push({ label: value.ParentName, children: value.groupData });
            }

        });

        $('#' + dropdownname + '').multiselect('dataprovider', options);
        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}

function getvalues(dropdownname, listbox) {
    var values = new Array();
    var valuesnew;
    if (dropdownname != undefined) {
        $.each($(dropdownname), function () {
            values.push($(this).val());
        });
    }
    if (listbox != undefined && listbox != null && listbox != "") {
        values = values.length > 0 && values.join(',') != "" ? values.join(',') : null;
        return values;
    }
    else if (dropdownname != undefined) {

        if (dropdownname.indexOf(".") != -1) {
            values = values.length > 0 && values.join(',') != "0" && values.join(',') != "" ? values.join(',') : null;
            return values;
        }
        else {
            var count = (values[0]) != null ? (values[0]).length : 0;
            var selectSize = $('' + dropdownname + ' option').size();
            values = parseInt(count) != parseInt(selectSize) && values.length > 0 && values.join(',') != "0" && values.join(',') != "" ? values.join(',') : null;

        }
        return values;
    }
    else {
        return null;
    }
}

function getvaluestext(dropdownname) {
    var dd = $('' + dropdownname + ' option:selected').map(function (a, item) { return item.title; }).get();
    return dd.join(',');
}

function getvaluestextSingle(dropdownname) {

    var dd = "";
    if ($('' + dropdownname + ' option:selected').val() != '0')
        dd = $('' + dropdownname + ' option:selected').map(function (a, item) { return item.title; }).get();
    return dd;
}

function gethavingprofiletext(dropdownname) {
    var values = [];
    $('' + dropdownname + ' option:selected').each(function () {
        var $this = $(this);
        if ($this.length) {
            var selText = $this.text();
            values.push(selText);
        }
    });
    return values.join(',');
}
//GET ADMIN ID
function GetAdmin() {
    return (CallApi("GetLoginAdminMyprofile", {})).d;
}
//GET EMPID

function GetEmpid() {
    return (CallApi("GetLoginEmpid", {})).d;
}


function getmanagementid() {
    return (CallApi("Getmanagementid", {})).d;
}

//RESET RADIO BUTTONS AND ALL CONTROLS
$(".reset").click(function () {
    $(".multiple").multiselect("clearSelection");
    Resetforradiobuttons("Typeofprofile");
    Resetforradiobuttons("gender");
    Resetforradiobuttons("logout");
    $('.textboxclear').val('');
    $('input[type=checkbox]').attr('checked', false);
    $('#lstapplicationstatus').multiselect('select', ['54'], true);
    $('#ddlcaste').multiselect('select', ['402'], true);
    $('#OwneroftheProfile').multiselect('select', [GetEmpid()], true);
});

function Resetforradiobuttons(id) {

    var $radios = $('input:radio[name=' + id + ']');
    $radios.filter('[value=""]').attr('checked', true);
    $radios.filter('[value!=""]').parent().removeClass('checked');
    $radios.filter('[value=""]').parent().addClass('checked');
}

function getradiobuttonsvalues(name) {
    $("input:radio[name=" + name + "]:checked").val()
}

function getcheckboxselected(id) {
    $('#' + id).is(":checked")
}
$(function () {

    $(".lstEducationcategory").on('change', function () {

        binddependency('EducationGroup', '.lstEducationcategory', '.lstEducationGroup', '')
        return false;
    });


    $(".lstEducationGroup").on('change', function () {

        binddependency('EducationSpelization', '.lstEducationGroup', '.lstEducationSpecialisation', '')

    });
    $(".lstprofgroup").on('change', function () {


        binddependency('ProfessionSpecialization', '.lstprofgroup', '.lstProfession', '')

    });

    $(".ddlreligionid").on('change', function () {

        binddependency('Caste', '.lstMothertongue', '.lstCaste', '.ddlreligionid')

    });

    $(".lstMothertongue").on('change', function () {

        binddependency('Caste', '.lstMothertongue', '.lstCaste', '.ddlreligionid')

    });
    $(".lstCountrylivingin").on('change', function () {

        binddependency('JobState', '.lstCountrylivingin', '.lstStatelivingin', '')

    });

    $(".lstStatelivingin").on('change', function () {

        binddependency('JobDistrict', '.lstStatelivingin', '.lstdistrict', '')

    });

    $(".lstdistrict").on('change', function () {

        binddependency('JobCity', '.lstdistrict', '.lstcity', '')

    });

    //
    $(".lstCountrylivingin1").on('change', function () {

        binddependency('State', '.lstCountrylivingin1', '.lstStatelivingin1', '')

    });

    $(".lstStatelivingin1").on('change', function () {

        binddependency('District', '.lstStatelivingin1', '.lstdistrict1', '')

    });

    $(".lstdistrict1").on('change', function () {

        binddependency('City', '.lstdistrict1', '.lstcity1', '')

    });

    $(".ddlstarlanguages").on('change', function () {

        binddependency('star', '.ddlstarlanguages', '.lststar', '')

    });


    $(".lstregion").on('change', function () {

        binddependency('Branch', '.lstregion', '.lstBranches', '')

    });
})

function SplitstringintoArray(string) {
    var array = [];
    if (string != null && string != "") {
        _.each(string.split(','), function (item) {
            array.push(parseInt(item));
        });
    }
    return array;
}

function splitval(value) {
    var arr = value.split('.');
    return arr[0];

}
function commonpopupmethod(typeofpopup, tocustid, methodname, logid) {
    var popupheader;
    var popupfooter;
    var popupbody;
    var totalbody;
    switch (typeofpopup) {
        case "login":

            popupheader = $('#commontitle').html("Existing User Login");
            popupbody = $('#commonbody').html("<div class='row col-lg-offset-1' onkeydown='return (event.keyCode!=13);'><p style='color:black;'>To login into your account, please provide your username and password </p></div></br><div class='row col-lg-offset-1'  id='usernamediv'>"
                + "<div class='col-lg-3'><label class='control-label'>UserName: </label></div><div class='col-lg-8'><input type='text' class='form-control' id='txtUserLoginModelpopup'></input><span id='spanusername' ></span></div></div>" + "<div class='row col-lg-offset-1'  id='Passworddiv'></br>"
                + "<div class='col-lg-3'><label class='control-label'>Password: </label></div><div class='col-lg-8'><input type='password' class='form-control' id='txtPasswordModelpopup'></input><span id='spanPassword' ></span></div></div></br>"
                + "<div class='row col-lg-offset-1' style='color:black;'>To create your kaakateeya matrimonial account Click  <a href='javascript:void(0)' onclick='return Registrationpage();'>Register Now </a></div>"
                + "</div>");
            popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default'  data-dismiss='modal'>Close</button>"
                + "<button type='button' class='btn btn-primary' onclick='return CheckvalidationsearchLogin();'>Login</button>");

            totalbody = popupheader + popupbody + popupfooter;
            $('#commonpopup').modal({ backdrop: 'static' });
            break;
        case "Message":
            if (LoginExistance()) {
                popupheader = $('#commontitle').html("Enter your message here");
                popupbody = $('#commonbody').html("<div class='row col-lg-offset-1'><textarea name='ctl00$ContentPlaceHolder1$PartnerProfilles$txtmsgPartner' rows=6 cols=20 id='txtmsgPartner'  allowhtmlmode=true class='col-lg-10'></textarea>" + "</div>");
                popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
                    + "<button type='button' class='btn btn-primary' onclick='return sendmessages(" + JSON.stringify(tocustid) + "," + JSON.stringify(methodname) + ")'>Send Message</button>");
                totalbody = popupheader + popupbody + popupfooter;
                $('#commonpopup').modal({ backdrop: 'static' });
            }
            else {
                popupheader = $('#commontitle').html("Existing User Login");
                popupbody = $('#commonbody').html("<div class='row col-lg-offset-1'><p style='color:black;'>To login into your account, please provide your username and password </p></div></br><div class='row col-lg-offset-1'>"
                    + "<div class='col-lg-3'><label class='control-label'>UserName: </label></div><div class='col-lg-8'><input type='text' class='textboxclear'></input></div></div>" + "<div class='row col-lg-offset-1'></br>"
                    + "<div class='col-lg-3'><label class='control-label'>Password: </label></div><div class='col-lg-8'><input type='text' class='textboxclear'></input></div></div></br>"
                    + "<div class='row col-lg-offset-1' style='color:black;'>To create your kaakateeya matrimonial account Click  <a href='javascript:void(0)'>Register Now </a></div>"
                    + "</div>");
                popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
                    + "<button type='button' class='btn btn-primary'>Login</button>");

                totalbody = popupheader + popupbody + popupfooter;
                $('#commonpopup').modal({ backdrop: 'static' });
            }
            break;

        case "SaveandSearch":
            popupheader = $('#commontitle').html("Save and Search");
            popupbody = $('#commonbody').html("<div class='row col-lg-offset-1'><label class='control-label'>Save SearchName:</label>" + "</div><div class='row col-lg-offset-1'><div class='col-lg-8'><input name='txtmsgPartner' id='txtSavedSearch'  rows=2 cols=5  class='form-control'></input></div>" + "</div>");
            popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
                + "<button type='button' class='btn btn-primary' onclick='return SaveSearchData();'>Save&Search</button>");
            totalbody = popupheader + popupbody + popupfooter;
            $('#commonpopup').modal({ backdrop: 'static' });
            break;

        case "SettlementForm":
            popupheader = $('#commontitle').html("SettleMent Form");
            var settlementImage = tocustid != null && (tocustid != "") ? "../../" + tocustid : '';
            popupbody = $('#commonbody').html("<img src=" + settlementImage + " class='img-responsive'/>");
            popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
            totalbody = popupheader + popupbody + popupfooter;
            $('#commonpopup').modal({ backdrop: 'static' });
            break;

        case "DeletedAndsettledpopup":
            popupheader = $('#commontitle').html("Settle/Delete Details");
            popupbody = $('#commonbody').html(tocustid);
            popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
            totalbody = popupheader + popupbody + popupfooter;
            $('#commonpopup').modal({ backdrop: 'static' });
            break;
    }

}


function SendMessagePopup(typeofpopup, tocustid, methodname, logid) {
    var popupheader;
    var popupfooter;
    var popupbody;
    var totalbody;
    switch (typeofpopup) {

        case "Message":
            if (LoginExistance()) {
                popupheader = $('#commontitle').html("Enter your message to Relationship Manager for match followup");
                popupbody = $('#commonbody').html("<div class='row col-lg-offset-1'><textarea name='ctl00$ContentPlaceHolder1$PartnerProfilles$txtmsgPartner' rows=6 cols=20 id='txtmsgPartner'  allowhtmlmode=true class='col-lg-10'></textarea>" + "</div>");
                popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
                    + "<button type='button' class='btn btn-primary' onclick='return sendmessages(" + JSON.stringify(tocustid) + "," + JSON.stringify(methodname) + "," + JSON.stringify('TH') + "," + JSON.stringify(logid) + ")'>Send Message</button>");
                totalbody = popupheader + popupbody + popupfooter;
                $('#commonpopup').modal({ backdrop: 'static' });
            }
            else {
                popupheader = $('#commontitle').html("Existing User Login");
                popupbody = $('#commonbody').html("<div class='row col-lg-offset-1'><p style='color:black;'>To login into your account, please provide your username and password </p></div></br><div class='row col-lg-offset-1'>"
                    + "<div class='col-lg-3'><label class='control-label'>UserName: </label></div><div class='col-lg-8'><input type='text' class='textboxclear'></input></div></div>" + "<div class='row col-lg-offset-1'></br>"
                    + "<div class='col-lg-3'><label class='control-label'>Password: </label></div><div class='col-lg-8'><input type='text' class='textboxclear'></input></div></div></br>"
                    + "<div class='row col-lg-offset-1' style='color:black;'>To create your kaakateeya matrimonial account Click  <a href='javascript:void(0)'>Register Now </a></div>"
                    + "</div>");
                popupfooter = $('#commonfooter').html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
                    + "<button type='button' class='btn btn-primary'>Login</button>");

                totalbody = popupheader + popupbody + popupfooter;
                $('#commonpopup').modal({ backdrop: 'static' });
            }
            break;

    }

}

function getnumberbind(dropdownname, fromval, Toval, str, incrementval, methodname) {

    var options = [];

    options.push({ label: str, title: str, value: "0" });


    $('#' + dropdownname).append("<option value='0'>" + str + "</option>")

    if (methodname == 'calltype') {
        var calltypeArray = [{ value: 377, text: 'INCOMING' }, { value: 378, text: 'OUT GOING' }, { value: 379, text: 'INTERNAL MEMO' }];
        for (var i = 0; i < calltypeArray.length; i++) {
            options.push({ label: calltypeArray[i].text, title: calltypeArray[i].text, value: calltypeArray[i].value });
        }
        $('#' + dropdownname).multiselect('dataprovider', options);
        $('#' + dropdownname).multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname).multiselect('rebuild');
    }
    else {
        if (incrementval == 10) {
            $('#' + dropdownname).append("<option value='8'>8 " + str + "</option>")
            $('#' + dropdownname).append("<option value='9'>9 " + str + "</option>")
            for (var i = fromval; i <= Toval; i += incrementval) {
                $('#' + dropdownname).append("<option value=" + parseInt(i) + ">" + i + " " + str + "</option>")
            }

        }
        else {
            for (var i = fromval; i <= Toval; i += incrementval) {

                // $('#' + dropdownname).append("<option value=" + (parseInt(i) + 1 )+ ">" + i + " " + str + "</option>")

                if (i < 10) {
                    options.push({ label: "0" + i + " " + str, title: "0" + i + " " + str, value: (parseInt(i) + 1) });
                }
                else {

                    options.push({ label: i + " " + str, title: i + " " + str, value: (parseInt(i) + 1) });
                }
            }
            $('#' + dropdownname).multiselect('dataprovider', options);
            $('#' + dropdownname).multiselect('setOptions', secondConfigurationSet);
            $('#' + dropdownname).multiselect('rebuild');
        }
    }





}

function binddependencyFormissingfields(methodname, parentid, childid, secondparentid) {

    var bindrequest;
    var options = [];

    bindrequest = {
        dependency: {
            methodname: methodname,
            parentid: parentid,
            secondparentid: secondparentid
        }
    }
    var returndata;
    var data = CallApi('PopulateDropDownListsearches', bindrequest);
    if (data.d.length > 0) {

        $.each(data.d, function (key, value) {

            options.push({ label: value.value, title: value.value, value: value.Id });

        });

        $(childid).multiselect('dataprovider', options);
        $(childid).multiselect('setOptions', secondConfigurationSet);
        $(childid).multiselect('rebuild');
    }

}

function binddependency(methodname, parentid, childid, secondparentid) {

    var options = [];

    var bindrequest = {
        dependency: {
            methodname: methodname,
            parentid: !$(parentid).hasClass("multiple") ? $(parentid + ' option:selected').val() : getvalues(parentid),
            secondparentid: getvalues(secondparentid)
        }
    }
    var returndata;

    var data = CallApi('PopulateDropDownListsearches', bindrequest);

    if (data.d.length > 0) {

        $.each(data.d, function (key, value) {

            options.push({ label: value.value, title: value.value, value: value.Id });

        });

        $(childid).multiselect('dataprovider', options);
        $(childid).multiselect('setOptions', secondConfigurationSet);
        $(childid).multiselect('rebuild');
    }

}

function cleartxtboxes(txtid) {
    $('#' + txtid).val('');
}

function statusAlert(status, PopupID, strsuccess, strfail) {

    if (PopupID != undefined) {
        $('#' + PopupID).modal('hide');
    }
    if (parseInt(status) == parseInt(1)) {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
}

function modalpopupshowhide(popupid, method) {
    switch (method) {
        case "show":
            $('#' + popupid + '').modal({ backdrop: 'static', keyboard: false });
            break;
        case "hide":
            $('#' + popupid + '').modal('hide');
            break;
    }
    return false;
}

function validationclear() {

    var UserName = document.getElementById("txtUserLoginModelpopup");
    var password = document.getElementById("txtPasswordModelpopup");
    UserName.value = "";
    password.value = "";
    return false;
}

function CheckvalidationsearchLogin() {
    var UserName = document.getElementById("txtUserLoginModelpopup");
    var password = document.getElementById("txtPasswordModelpopup");
    if (UserName.value == "" || UserName.value == null || UserName.value == "ProfileID/Email") {

        $('#usernamediv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1  has-error');
        $('#spanusername').removeClass('glyphicon glyphicon-ok  form-control-feedback').addClass('glyphicon glyphicon-remove form-control-feedback');
        $('#spanusername').attr('style', 'margin-right: 9px;');
        //DynamicTimeAlert("Please enter user name", 'alert alert-danger', '3000');
        return false;
    }
    else if (password.value == "" || password.value == null || password.value == "Password") {
        $('#usernamediv').removeClass('row col-lg-offset-1  has-error').addClass('row col-lg-offset-1  has-success');
        $('#spanusername').removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok  form-control-feedback');
        $('#Passworddiv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1  has-error');
        $('#spanPassword').removeClass('glyphicon glyphicon-ok  form-control-feedback').addClass('glyphicon glyphicon-remove form-control-feedback');
        $('#spanusername').attr('style', 'margin-right: 9px;');
        $('#spanPassword').attr('style', 'margin-right: 9px;');
        // DynamicTimeAlert("Please enter password", 'alert alert-danger', '3000');
        return false;
    }
    else {
        $('#usernamediv').removeClass('row col-lg-offset-1  has-error').addClass('row col-lg-offset-1  has-success');
        $('#spanusername').removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok  form-control-feedback');
        $('#spanPassword').removeClass('glyphicon glyphicon-remove form-control-feedback').addClass('glyphicon glyphicon-ok form-control-feedback');
        $('#Passworddiv').removeClass('row col-lg-offset-1  has-error').addClass('row col-lg-offset-1  has-success');
        $('#spanusername').attr('style', 'margin-right: 9px;');
        $('#spanPassword').attr('style', 'margin-right: 9px;');
        var usrname = $('#txtUserLoginModelpopup').val();
        var password = $('#txtPasswordModelpopup').val();
        var object = {
            sendrequest: {
                Username: '' + usrname + '',
                Password: '' + password + '',
            }
        };
        var data = CallApi("useLogin", object);
        if (data.d != undefined && data.d != null && data.d != "") {
            if (data.d.Status == 1) {
                modalpopupshowhide("login", "hide");
                if (data.d.intCustID != "" && data.d.intCustID != null) {

                    //var CacheLoginDate = JSON.parse(localStorage.getItem("LoginDate"));
                    //localStorage.setItem("LogoutStatus", false);

                    //if (CacheLoginDate != null) {
                    //    if (CurrentDateSTrings() != CacheLoginDate) {
                    //        localStorage.clear();
                    //        localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTrings()));
                    //    }
                    //}
                    //else {
                    //    localStorage.setItem("LoginDate", JSON.stringify(CurrentDateSTrings()));
                    //}
                    loginCheck('search');
                    if (data.d.iresult == 439) {
                        if (data.d.istatus == 0) {
                            if (data.d.isemailverified == 0 || data.d.isnumberverifed == 0) {
                                window.location = "MobileVerfication.aspx?CustID=" + data.d.intCustID + "&custcontant_id=" + data.d.cust_contant_id + "&cust_emailid=" + data.d.cust_emailid + "&CustFamilyID=" + data.d.intFamilyID + "&Email=" + data.d.email + "&Number=" + data.d.number + "&FName=" + data.d.strName + "&Code=" + data.d.MObileverficationcode + "&ismobileverf=" + data.d.isnumberverifed + "&isemailverf=" + data.d.isemailverified + "&GenderID=" + data.d.intGenderID;
                            }
                            else {
                                switch (PageID) {
                                    case "1":
                                        window.location = "KaakateeyaCustomerProfileIDsearchNew.aspx?CustID=" + data.d.intCustID + "";
                                        break;
                                    case "2":
                                        window.location = "KaakateeyaCustomerGeneralsearchNew.aspx?CustID=" + data.d.intCustID + "";
                                        break;
                                    case "3":
                                        window.location = "KaaKateeyaCustomerAdvancesearchNew.aspx?CustID=" + data.d.intCustID + "";
                                        break;
                                }
                            }
                        }
                        else {
                            window.location = "CustomerDataGetIn.aspx?displayCustID=" + data.d.intCustID + "&flag=" + data.d.istatus;

                        }
                    }
                    else {
                        window.location = "LoginBlocker.aspx?displayCustID=" + data.d.intCustID + "";
                    }
                    return false;
                }

            }

            else if (data.d.Status == 0) {
                validationclear();
                $('#usernamediv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1');
                $('#spanusername').removeClass('glyphicon glyphicon-ok form-control-feedback').addClass('');
                $('#Passworddiv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1');
                $('#spanPassword').removeClass('glyphicon glyphicon-ok  form-control-feedback').addClass('');
                $('#spanusername').attr('style', '');
                $('#spanPassword').attr('style', '');
                DynamicTimeAlert("Invalid Matrimony ID / E-mail OR Incorrect Password", 'alert alert-danger', '3000');
            }
            else {
                validationclear();
                $('#usernamediv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1');
                $('#spanusername').removeClass('glyphicon glyphicon-ok form-control-feedback').addClass('');
                $('#Passworddiv').removeClass('row col-lg-offset-1  has-success').addClass('row col-lg-offset-1');
                $('#spanPassword').removeClass('glyphicon glyphicon-ok  form-control-feedback').addClass('');
                $('#spanusername').attr('style', '');
                $('#spanPassword').attr('style', '');
                DynamicTimeAlert("Invalid Matrimony ID / E-mail OR Incorrect Password", 'alert alert-danger', '3000');

            }
        }
        return false;
    }
}
function Registrationpage() {
    window.location.replace('CustomerRegistration.aspx');
    return false;

}

function SelectvalueforRadiobuttons(id, value) {

    var $radios = $('input:radio[name=' + id + ']');
    $radios.filter('[value=' + value + ']').attr('checked', true);
    $radios.filter('[value!=' + value + ']').parent().removeClass('checked');
    $radios.filter('[value=' + value + ']').parent().addClass('checked');
}
function playAndPause(carouselID, playButtonID, pauseButtonID) {

    function interval() {
        $('#' + carouselID).carousel({
            interval: 2000,
            pause: "false"
        });
    }
    $('#' + playButtonID).click(function () {

        interval();
        $('#' + carouselID).carousel('cycle');
        $('#' + playButtonID).hide();
        $('#' + pauseButtonID).show();
    });
    $('#' + pauseButtonID).click(function () {

        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    });

}
//method to move slide to left or right arrow press
function ArrowMove(carouselID) {
    $(document).bind('keyup', function (e) {
        var totalItems = $('#' + carouselID).find('.item').length;
        var currentIndex = $('#' + carouselID).find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#' + carouselID).carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#' + carouselID).carousel('prev');
        }

    });
}
//hide slide arrows for  first and last slide slides  

function checkitemGlobal(carouselID) {
    var checkitem = function () {
        checkitemnew(carouselID);
    };
    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
}

function pauseifPlayVisibleGlobal(carouselID, playButtonID, pauseButtonID) {

    if ($('#' + playButtonID).is(":visible")) {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    }

}
function checkitemnew(carouselID) {
    var $this;
    $this = $("#" + carouselID);
    if ($("#" + carouselID + " .carousel-inner .item:first").hasClass("active")) {
        $("#" + carouselID).find('.left').hide();
        $("#" + carouselID).find('.right').show();
    }
    else if ($("#" + carouselID + " .carousel-inner .item:last").hasClass("active")) {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').hide();

    }
    else {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').show();
    }

}

function SlideRefresh(CarouselID, lblCurSlideID, lblViewedSlideCount) {
    $("#" + CarouselID).carousel("pause").removeData();
    $("#" + CarouselID + " .carousel-inner").html('');
    $("#" + lblCurSlideID).text(1);
    $("#" + lblViewedSlideCount).text(1);

}

function ApplyColorValueContainsSelect() {

    $('select').each(function (index, item) {
        var id = $(item).attr("id");
        if (getvaluesForColor("#" + id) != null && getvaluesForColor("#" + id) != '0') {
            $('#' + id).next().find('button').addClass("ValueContains");
        }
    });

}

function ApplyColorValueContainsTextBox() {
    $('input[type=text]').each(function (index, item) {
        var id = $(item).attr("id");
        if ($('#' + id).val() != "") {
            if (($('#' + id).attr("class")).indexOf('ValueContains') == -1)
                $('#' + id).addClass("ValueContains");
        }

    });

}