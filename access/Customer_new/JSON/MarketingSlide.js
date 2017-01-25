var monthNames = [
    "Jan", "Feb", "Mar",
     "Apr",
     "May",
     "June",
     "July",
     "Aug",
     "Sept",
     "Oct",
     "Nov",
     "Dec"
];
var empidObj;
var empNameObj;
var AdminObj, empMobObj;
var replycontext = [];
var datarelation = [], dataCatgory = [];
var dataEmp = [];
var datareplyType = [];
var data, profileidflag,
 educationtrueflag, Professiontrueflag;
var strbranch, strempname, fromdate, todate, noofdays, bothsidetext = [];

var empid, pagenum = 1, PageSize, strSpname = 'Usp_SlideShowForBothinterst_test', datainputd, marketflag = 0, siblingsflag = 0, guestticketflag = 0,
    Onlineexprdflag = 0, Offlineexprdflag = 0, ExcelflagReport = 2, Colorsuccessflag = "btnmarket", NotInPayflag = null;

var educationcategory, educationgroup, educationspecialisation, employedin, professiongroup, profession, Ismanagement;
//Ismanagement = getmanagementid();
var strMobileNumber, strCountryID, strCustContactNumbersID, strcustid, strCustEmailID;

$(function () {
    document.getElementById("divVerificationcode").style.display = 'none';
    var empdetails = CallApi("EmployeeMarketingSlideshow.aspx/getEmpidloginAdminempnamemobile", {});
   

    empidObj = empdetails.d.Item1;
    AdminObj = empdetails.d.Item2;
    empNameObj = empdetails.d.Item3;
    empMobObj = empdetails.d.Item4;
    Ismanagement = empdetails.d.Item5;

    $('#spanempname').html(empNameObj);
    document.getElementById("HelpImg").style.display = 'block';
    pageload();
    if (Ismanagement == 1) {
        document.getElementById("divbtnimgexcel").style.display = 'block';
    }
    else {
        document.getElementById("divbtnimgexcel").style.display = 'none';
    }
    $('input[type=radio][name=rbtnVerf]').on('change', function () {
        if ($(this).val() == 1) {
            document.getElementById("divVerificationcode").style.display = 'block';
        }
        else {
            document.getElementById("divVerificationcode").style.display = 'none';
        }
    });
});


function gotoSlide(e) {
    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#BothsideCarousel').carousel(parseInt($(e).val()) - 1);
    }
    else {
        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}

function pageload() {
    var currentslide = 1, totalItems = $('#BothsideCarousel').find('.item').length;
    if (totalItems == 0) {
        $('#txtTicketNumber').val(Ticketid);
        $('#txtProfileId').val(ProfileID);
        if (Ticketid != null && Ticketid != undefined && Ticketid != '') {
            marketflag = '2';
            ExcelflagReport = '1';
            $('#btnmarket').removeAttr('class').addClass("btn btn-default");
            $("#lstempSlide").multiselect("clearSelection");
            setTimeout(showonlyforAdmin, 3000);

        }
        else if (ProfileID != null && ProfileID != undefined && ProfileID != '') {
            marketflag = '2';
            ExcelflagReport = '1';
            $('#btnmarket').removeAttr('class').addClass("btn btn-default");
            $("#lstempSlide").multiselect("clearSelection");
            setTimeout(showonlyforAdmin, 3000);
        }
        else {
            showonlyforAdmin();
        }
        bindMarketingSlideshow();
        checkitemnewMar();
        pauseifPlayVisible();
    }
    $('.num').html('Profile ' + '' + 1);
    $('#BothsideCarousel').bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#BothsideCarousel').find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#BothsideCarousel').find('.item').length;
        var currentIndex1 = $('#BothsideCarousel').find('div.active').index() + 1;
        pauseifPlayVisible();
        $('#BothsideCarousel').find('div.active').index()
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) > 9 && parseInt(totalItems1) - parseInt(currentIndex1) == 4) {

                bindMarketingSlideshow();
            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex1)
                $("#lnkLastSlide").text(currentIndex1);
        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);
        $('#lblcurrentprofile').text(currentIndex1);

    });
    //play and pause function on click event
    function interval() {
        $('#BothsideCarousel').carousel({
            interval: 2000,
            pause: "false"
        });
    }
    $('#playButton').click(function () {
        interval();
        $('#BothsideCarousel').carousel('cycle');
        $('#playButton').hide();
        $('#pauseButton').show();
    });
    $('#pauseButton').click(function () {
        $('#BothsideCarousel').carousel('pause');
        $('#playButton').show();
        $('#pauseButton').hide();
    });

    //method to move slide on left or right arrow press

    $(document).bind('keyup', function (e) {

        var totalItems = $('#BothsideCarousel').find('.item').length;
        var currentIndex = $('#BothsideCarousel').find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#BothsideCarousel').carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#BothsideCarousel').carousel('prev');
        }

    });
    //hide slide arrows for  first and last slide slides  
    var checkitem = function () {
        checkitemnewMar();
    };

    $("#BothsideCarousel").on("slid.bs.carousel", "", checkitem);
    $(function () {
        var wage = document.getElementById("txtGotoVal");
        wage.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                gotoSlide(wage);
                $('#BothsideCarousel').carousel('pause');
                $('#playButton').show();
                $('#pauseButton').hide();
                return false;
            }

        });
    });
    $(".Region").on('change', function () {
        binddependency('Branch', '.Region', '.Branch')
    });
}


var datain;


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

function returnhtml(strtype, strdate, strempname, strstatus, strcustName, strcomments, strnoofdays, strmatchMeetingStatus, strmatchMeetingReason) {
    var strdiv = "";
    switch (strtype) {
        case "INCOMING":
        case "OUT GOING":
            strdiv = "<div class='row'><div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strtype + "</c> Call done on <c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
                                              + "<div class='col-lg-5' style='color:maroon;'><label>Call Done By</label></div><div class='col-lg-7'><label>" + strempname + "</label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Status</label></div><div class='col-lg-7'><label><div>" + strstatus + "</div></label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Received By</label></div><div class='col-lg-7'><label><div>" + strcustName + "</div></label></div><div class='clearfix'></div>"
            + "<div class='col-lg-12' ><label style='color:maroon;'>Call Discussion</label><div><label>" + strcomments + "</label></div></div><div class='clearfix'></div>"
            + "</div>";
            break;
        case "InternalMemo":
        case "Close":
        case "REPLY":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strtype + "</c>  done on <c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div class='col-lg-5' style='color:maroon;'><label>Employee Name</label></div><div class='col-lg-7'><label><div>" + strempname + "</div></label></div><div class='clearfix'></div>"
                                    + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label>" + strcomments + "</label></div></div><div class='clearfix'></div></div>";
            break;
        case "MatchFollowupReply":
            strdiv = "<div class='row'>"
                 + "<div class='col-lg-12' style='font-weight:bold;'><c class='maroon'>" + strtype + "</c>  done on <c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
                                               + "<div><div class='col-lg-5' style='color:maroon;'><label>Replied By</label></div><div class='col-lg-7'><label>" + strempname + "</label></div></div><div class='clearfix'></div>"
                                               + "<div><div class='col-lg-5' style='color:maroon;'><label>Match Followup Status</label></div><div class='col-lg-7'><label><div>" + strmatchMeetingStatus + "</div></label></div></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-12'><label  style='color:maroon;'>Match Meeting Reason 	</label><div><label>" + strmatchMeetingReason + "</label></div></div><div class='clearfix'></div>"
                                                           + "</div>";


            break;
        case "Reply":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strtype + "</c>  done on <c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div><div class='col-lg-5' style='color:maroon;'><label>Replied By</label></div><div class='col-lg-7'><label>" + strempname + "</label></div></div><div class='clearfix'></div>"
            + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label>" + strcomments + "</label></div></div><div class='clearfix'></div></div>"
            break;

    }
    return strdiv;

}
function pauseifPlayVisible() {
    if ($('#playButton').is(":visible")) {
        $('#BothsideCarousel').carousel('pause');
        $('#playButton').show();
        $('#pauseButton').hide();
    }
}
function checkitemnewMar() {
    var $this;
    $this = $("#BothsideCarousel");
    if ($("#BothsideCarousel .carousel-inner .item:first").hasClass("active")) {
        $('#BothsideCarousel').find('.left').hide();
        $('#BothsideCarousel').find('.right').show();
    }
    else if ($("#BothsideCarousel .carousel-inner .item:last").hasClass("active")) {
        $('#BothsideCarousel').find('.left').show();
        $('#BothsideCarousel').find('.right').hide();

    }
    else {
        $('#BothsideCarousel').find('.left').show();
        $('#BothsideCarousel').find('.right').show();
    }
}

function bindMarketingSlideshow(pagesize) {
    var totalrecords = $('#BothsideCarousel').find('.item').length;
    var datainput = {
        Mobj:
            {
                i_RegionID: $('#ddlregion option:selected').val() == 0 ? null : $('#ddlregion option:selected').val(),
                strBranch: getvalues('#lstbranch') == '' ? null : getvalues('#lstbranch'),
                strEmpName: getvalues('#lstempSlide') == '' ? null : getvalues('#lstempSlide'),
                i_isAdmin: AdminObj,
                i_EmpID: empidObj,
                i_PageFrom: pagesize == undefined ? (parseInt(totalrecords) + 1) : 1,
                i_PageTo: pagesize == undefined ? (parseInt(totalrecords) + 10) : pagesize,
                dtFromProceedDate: $('#txtfromproceedDate').val() != "" ? convertJSDate($('#txtfromproceedDate').val()) : null,
                dtToProceedDate: $('#txtToproceedDate').val() != "" ? convertJSDate($('#txtToproceedDate').val()) : null,
                i_days: $('#ddlDays option:selected').val() == 0 ? null : $('#ddlDays option:selected').val(),
                v_MarketremindeFlag: marketflag,
                v_siblingflag: siblingsflag,
                v_guestticketflag: guestticketflag,
                v_OnlineExprd: Onlineexprdflag,
                v_OfflineExprd: Offlineexprdflag,
                i_TicketId: $('#txtTicketNumber').val() != "" ? $('#txtTicketNumber').val() : null,
                i_EmailId: $('#txtEmailId').val() != "" ? $('#txtEmailId').val() : null,
                i_PhoneNumber: $('#txtphoneNumber').val() != "" ? $('#txtphoneNumber').val() : null,
                i_ProfileId: $('#txtProfileId').val() != "" ? $('#txtProfileId').val() : null,
                dt_FromRemainderdate: $('#txtfromreminderdate').val() != "" ? convertJSDate($('#txtfromreminderdate').val()) : null,
                dt_ToReminderdate: $('#txttoremainderdate').val() != "" ? convertJSDate($('#txttoremainderdate').val()) : null,
                i_Excelflag: ExcelflagReport,
                V_Notpay: NotInPayflag
            }
    };
    data = CallApi("Emp_MarketingSlideshowdilspay", datainput)
    var testunorder = [];
    var test = [];
    if (data.d.Marketingslideticket != null && data.d.Marketingslideticket != undefined) {
        if (ExcelflagReport == '8') {
            window.location = "../../SearchResult/SendSearchPrint.aspx?Flag=1";
        }
        else {
            if (data.d != undefined && data.d.Marketingslideticket.length > 0 && data.d.Marketingslideticket != null) {
                $('#lblcurrentprofile').text(1);
                $('#lblcurSlide').text(data.d.Marketingslideticket[0].TotalRows);
                for (var i = 0; i < data.d.Marketingslideticket.length; i++) {
                    var strTicketHiostryUpdate = "";
                    $('#lblPEmail').text((data.d.Marketingslideticket[i].PrimaryEmail));
                    $('#lblnameandemail').text((data.d.Marketingslideticket[i].CustomerName) + " (" + (data.d.Marketingslideticket[i].ProfileID) + ")");
                    var guestlinkshide = (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? "display:block;" : "display:none;";
                    var guestlinkshideclass = (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? "" : "Linkdisabledforsaform";
                    totalrecords = totalrecords + 1;
                    var strreminderclass = parseInt(data.d.Marketingslideticket[i].AssignedToEmpID) == parseInt(empidObj) ? 'fa fa-pencil-square-o' : 'fa fa-pencil-square-o Linkdisabled';

                    var strmobileverified = data.d.Marketingslideticket[i].IsMobileVerified == "True" ? "&nbsp;<span class='fa fa-check-circle'></span>" : "&nbsp;<span class='glyphicon glyphicon-ok'></span>";
                    var emaildisplay = data.d.Marketingslideticket[i].PrimaryEmail != undefined && data.d.Marketingslideticket[i].PrimaryEmail != "" && data.d.Marketingslideticket[i].PrimaryEmail != null ? "" : "display:none;";
                    var mobilenumberdisplay = data.d.Marketingslideticket[i].PrimaryContactNumber != undefined && data.d.Marketingslideticket[i].PrimaryContactNumber != "" && data.d.Marketingslideticket[i].PrimaryContactNumber != null ? "" : "display:none;";
                    var stremailverified = data.d.Marketingslideticket[i].isEmailVerified == "True" ? "&nbsp;<span class='fa fa-check-circle'></span>" : "&nbsp;<span class='glyphicon glyphicon-ok'></span>";
                    var strmobileverifiedlnk1 = "<a href='javascript:void(0);' onclick='return Verifymobile(" + JSON.stringify(data.d.Marketingslideticket[i].PrimaryContactNumberCountyCode) + ", " + JSON.stringify(data.d.Marketingslideticket[i].PrimaryContactNumber) + "," + JSON.stringify(data.d.Marketingslideticket[i].IsCustContactNumbersID) + ");'>&nbsp;&nbsp;verify mobile</a>";

                    var strmobileverifiedlnk = data.d.Marketingslideticket[i].IsMobileVerified != "True" ? strmobileverifiedlnk1 : ' ';
                    var stremailverifiedlnk1 = "<a href='javascript:void(0);' onclick='return Verifyemail(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].isCustEmailID) + ");'>&nbsp;&nbsp;verify email</a>";
                    var stremailverifiedlnk = data.d.Marketingslideticket[i].isEmailVerified != "True" ? stremailverifiedlnk1 : '&nbsp;';

                    testunorder = _.where(data.d.MarketingslideHistory, { Emp_Ticket_ID: (data.d.Marketingslideticket[i].Emp_Ticket_ID) });
                    _.map(testunorder, function (item, index) {
                        item.ReplyDatenew = moment(item.ReplyDatenew).format('YYYY/MM/DD h:mm a')
                    });

                    test = _.sortBy(testunorder, 'ReplyDatenew').reverse();

                    var strreminderDate = (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? (data.d.Marketingslideticket[i].ReminderDate == "" ? "<b><f class='maroon' id='lblcreateremainder" + totalrecords + "'>Create Reminder </f> <label id='lblcreateremainderdate" + totalrecords + "' style='display:none;'></label>&nbsp; <a  class='" + strreminderclass + "' title='Create Reminder' href='javascript:void(0)' onclick='updatereminder(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ReminderDatepopup) + "," + JSON.stringify(data.d.Marketingslideticket[i].ReminderID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + totalrecords + ");'></a></b>"
                        : "<b><f class='maroon'>Reminder date:</f>  <label id='lblreminderdate" + totalrecords + "'>" + data.d.Marketingslideticket[i].ReminderDate + "</label>&nbsp; <a class='" + strreminderclass + "' href='javascript:void(0)' title='Update Reminder' onclick='updatereminder(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ReminderDatepopup) + "," + JSON.stringify(data.d.Marketingslideticket[i].ReminderID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + totalrecords + " ," + JSON.stringify(data.d.Marketingslideticket[i].ReminderTime) + "," + JSON.stringify(data.d.Marketingslideticket[i].Category) + "," + (JSON.stringify(data.d.Marketingslideticket[i].TicketTypeID)) + "," + (JSON.stringify(data.d.Marketingslideticket[i].ReminderRelationID)) + "," + (JSON.stringify(data.d.Marketingslideticket[i].ReminderRelationName)) + "," + (JSON.stringify(data.d.Marketingslideticket[i].Reminderbody)) + ");'></a></b>") : "";
                    var strlastloginDate = data.d.Marketingslideticket[i].Lastlogin == "" ? "No logins since registration,click forgot password" : "<c class='maroon'>Last login Date</c>  <c>" + data.d.Marketingslideticket[i].Lastlogin + "</c>";

                    for (var j = 0; j < test.length; j++) {
                        $('#lblempmobile').text(test[j].CallReceivedBy);
                        var strcustRelation = (test[j].CallReceivedBy) + (test[j].RelationShip != '' ? " ( " + test[j].RelationShip + " )" : "");
                        strTicketHiostryUpdate += returnhtml(test[j].TicketType, test[j].ReplyDate, test[j].NAME, test[j].CallStatus, strcustRelation, test[j].ReplyDesc, test[j].NoOfDays, test[j].MatchmeetingStatus) + "<br/>";
                    }
                    var onlinepayment = data.d.Marketingslideticket[i].onlinePayment == 0 ? "<br/><br/><label>Online:Unpaid</label>" : "<label class='control-label'>Online</label> : rs " + data.d.Marketingslideticket[i].onlinePayment + "<br/>";
                    var offlinepayment = data.d.Marketingslideticket[i].offlinePayment == 0 ? "<label>Offline:Unpaid</label>" : "<label class='control-label'>Offline</label> : rs " + data.d.Marketingslideticket[i].offlinePayment + "";
                    var strpayment = "<br/><br/>" + onlinepayment + "" + offlinepayment + " ";
                    var strphotorequest = (data.d.Marketingslideticket[i].Photo).indexOf("noimage") != -1 && (data.d.Marketingslideticket[i].Photo).indexOf("_Rev") == -1 ? "<br/><a href=javascript:void(0); class='btn btn-success-outline' onclick='return photoRequest(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + totalrecords + ");'>Photo Request</a><br/>" : "";
                    var strforgotPwd = data.d.Marketingslideticket[i].Lastlogin == "" ? "<br/><a href=javascript:void(0); class='btn btn-success-outline' onclick='return forgotPWD(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + totalrecords + ");'>Forgot Password</a>" : "";
                    var strfNotInpay = "<br/><br/><a href=javascript:void(0); class='btn btn-success-outline' onclick='radioChangeSibling(" + JSON.stringify("P") + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>Not Int To Pay</a>";
                    var totalslides = $('#BothsideCarousel').find('.item').length;
                    var stractiveClass = totalslides == 0 ? 'item active' : 'item';
                    var lblcurrentprofile = $('#lblcurrentprofile').text();
                    var classdisplaytxtSA = data.d.Marketingslideticket[i].SettlementValue != null && data.d.Marketingslideticket[i].SettlementValue != "" ? "display:none;" : "display:block;"
                    var classdisplaylblSA = data.d.Marketingslideticket[i].SettlementValue != null && data.d.Marketingslideticket[i].SettlementValue != "" ? "display:block;" : "display:none;"
                    var strlnktextSA = data.d.Marketingslideticket[i].SettlementValue != null && data.d.Marketingslideticket[i].SettlementValue != "" ? "update SA" : "Save"

                    var strSAAmount = "<div class='col-lg-6'> <span class='maroon' style='font-size:12px;font-weight:bold;'> Proposed SA Fee</span><br/> <div id='SAEditdiv" + totalrecords + "' style='" + classdisplaylblSA + "'><label id='lblSAamount" + totalrecords + "'>" + data.d.Marketingslideticket[i].SettlementValue + "</label>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0);' onclick='return editSAamount(" + totalrecords + ");'> Edit </a></div>  <div id='SAupdatediv" + totalrecords + "' style='" + classdisplaytxtSA + "'><input type='text' class='form-control'  id='txtSAamount" + totalrecords + "' style='width:80px;float:left;' onkeydown='return !(event.keyCode == 32);' style='width:80px;float:left;' maxlength='7' value='" + data.d.Marketingslideticket[i].SettlementValue + "'/>&nbsp;&nbsp;&nbsp;<a id='lnksaupdate" + totalrecords + "' href='javascript:void(0);' onclick='return UpdateSAamount(" + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>" + strlnktextSA + " </a></div></div>";
                    var Saformdisabled = (data.d.Marketingslideticket[i].settleddeleted != "") && (data.d.Marketingslideticket[i].settleddeleted != null) ? " " : " Linkdisabledforsaform";
                    var SaformdisabledText = (data.d.Marketingslideticket[i].settleddeleted != "") && (data.d.Marketingslideticket[i].settleddeleted != null) ? "Show SA Form" : "No SA Form";
                    var sibblinglinks = (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? "<a href='javascript:void(0);' class='btn btn-success-outline " + Saformdisabled + "' onclick='return showSettledForm(" + data.d.Marketingslideticket[i].settleddeleted + ");'>" + SaformdisabledText + "</a><br/><br/><a href='javascript:void(0);' class='btn btn-success-outline' onclick='return Deletesettlereason(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileStatusID) + ");'>Set/Del Reason</a><br/><br/>"
                        + "<a href='javascript:void(0);' class='btn btn-success-outline' onclick='radioChangeSibling(" + JSON.stringify("Y") + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>Sibling Created</a><br/><br/>"
                     + "<a href='javascript:void(0);' class='btn btn-success-outline'  onclick='radioChangeSibling(" + JSON.stringify("N") + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>Do not Distrub</a><br/>" + strpayment + "" : "";

                    var dontdistrub = "<br/><br/><a href='javascript:void(0);' class='btn btn-success-outline'  onclick='radioChangeSibling(" + JSON.stringify("N") + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>Do not Distrub</a>";
                    var links = siblingsflag != 1 && (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? "<u><a href=javascript:void(0); class='btn btn-success-outline' onclick='return sendSms(" + JSON.stringify(data.d.Marketingslideticket[i].PrimaryContactNumber) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustomerName) + "," + JSON.stringify(data.d.Marketingslideticket[i].EmpName) + "," + JSON.stringify(data.d.Marketingslideticket[i].EmpMobilenumber) + "," + JSON.stringify(data.d.Marketingslideticket[i].PrimaryEmail) + "," + JSON.stringify(data.d.Marketingslideticket[i].PrimaryContactNumberCountyCode) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + totalrecords + ");'>Send SMS</a></u><br/><br/><a href=javascript:void(0); class='btn btn-success-outline' onclick='return sendMail(" + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].PrimaryEmail) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustomerName) + ");'>Send Mail</a><a href=javascript:void(0); style='display:none;' class='btn btn-success-outline' onclick='return MissingFields(" + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," +
                                                             JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>Missing Fields</a><br/>" + strphotorequest + "" + strforgotPwd + "" + strfNotInpay + "" + dontdistrub : sibblinglinks;
                    var classdisplaytxt = data.d.Marketingslideticket[i].Feedetails != 0 && data.d.Marketingslideticket[i].Feedetails != null && data.d.Marketingslideticket[i].Feedetails != "" ? "display:none;" : "display:block;"
                    var classdisplaylbl = data.d.Marketingslideticket[i].Feedetails != 0 && data.d.Marketingslideticket[i].Feedetails != null && data.d.Marketingslideticket[i].Feedetails != "" ? "display:block;" : "display:none;"
                    var strlnktext = data.d.Marketingslideticket[i].Feedetails != 0 && data.d.Marketingslideticket[i].Feedetails != null && data.d.Marketingslideticket[i].Feedetails != "" ? "update Fee" : "Save"
                    var strfeediv = siblingsflag != 1 ? "<div class='row' style='" + guestlinkshide + "'><div class='col-lg-6'><span class='maroon' style='font-size:12px;font-weight:bold;'>Proposed Reg Fee</span><br/>  <div id='feeEdit" + totalrecords + "' style='" + classdisplaylbl + "'><label id='lblfee" + totalrecords + "'>" + data.d.Marketingslideticket[i].Feedetails + "</label>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0);'  onclick='return editFee(" + totalrecords + ");'>Edit </a></div>  <div id='feeupdate" + totalrecords + "' style='" + classdisplaytxt + "'><input type='text' class='form-control'  id='txtfees" + totalrecords + "' style='width:80px;float:left;' onkeydown='return !(event.keyCode == 32);' style='width:80px;float:left;' maxlength='7' value='" + data.d.Marketingslideticket[i].Feedetails + "'/>&nbsp;&nbsp;&nbsp;<a id='lnkfeeupdate" + totalrecords + "' href='javascript:void(0);' onclick='return UpdateFee(" + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].CustID) + ");'>" + strlnktext + " </a></div></div>   " + strSAAmount + "   </div><br/>" : "";
                    var strProfileStatus = siblingsflag == 1 ? (data.d.Marketingslideticket[i].ProfileStatusID == "56" || data.d.Marketingslideticket[i].ProfileStatusID == "394" ? "<div class='vertical-text' style='background-color: rgb(160, 2, 1);'>DELETED</div>" : (data.d.Marketingslideticket[i].ProfileStatusID == "57" || data.d.Marketingslideticket[i].ProfileStatusID == "393" ? "<div class='vertical-text' style='background-color: green;'>SETTLED</div>" : "")) : "";
                    var strMissingFields1 = siblingsflag != 1 && (data.d.Marketingslideticket[i].CustID != null && data.d.Marketingslideticket[i].CustID != "") ? "<a href='javascript:void(0);' id='lnkmissingmail' onclick='return Missingfieldsemail(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");' style='font-weight: bold;'>Send Full Profile Tocustomer</a>" : "";
                    var strmaskclass = siblingsflag == 1 ? (data.d.Marketingslideticket[i].ProfileStatusID == "56" ? "Deleted" : (data.d.Marketingslideticket[i].ProfileStatusID == "57" ? "Settled" : "")) : "";
                    var stremployeeimg = (data.d.Marketingslideticket[i].EmpPhoto != null) && (data.d.Marketingslideticket[i].EmpPhoto != "") ? (data.d.Marketingslideticket[i].EmpPhoto).replace("~/", "../../") : "";
                    var strcontactview = (data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "" ? "<a href='javascript:void(0);' onclick='return redirecttoContactPage(" + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ");'>  ViewContacts/Edit Profile</a>" : "&nbsp;";
                    var dispalyservicedate = data.d.Marketingslideticket[i].ServiceDate != null && data.d.Marketingslideticket[i].ServiceDate != "" && data.d.Marketingslideticket[i].ServiceDate != undefined ? "display:block;" : "display:none;";
                    var strMissingFields = "PD:<a href='javascript:void(0);' onclick='return serviceslideshow(1," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + JSON.stringify(data.d.Marketingslideticket[i].PD) + "</a>, DPD:<a href='javascript:void(0);' onclick='return serviceslideshow(2, " + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + " );'>" + JSON.stringify(data.d.Marketingslideticket[i].DPD) + "</a>, View:<a href='javascript:void(0);' onclick='return serviceslideshow(3," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + JSON.stringify(data.d.Marketingslideticket[i].ViewCount) + "</a>, NView:<a href='javascript:void(0);' onclick='return serviceslideshow(4," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + JSON.stringify(data.d.Marketingslideticket[i].NView) + "</a>, BI:<a href='javascript:void(0);' onclick='return serviceslideshow(5," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + JSON.stringify(data.d.Marketingslideticket[i].BI) + "</a>, OppI :<a href='javascript:void(0);' onclick='return serviceslideshow(6," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + JSON.stringify(data.d.Marketingslideticket[i].OppI) + "</a>";
                    var Nodatafound = data.d.Marketingslideticket[i].NodataFound != null && data.d.Marketingslideticket[i].NodataFound != undefined && $.trim(data.d.Marketingslideticket[i].NodataFound) != "" ? "display:block;" : "display:none;";
                    var edudisplay = (data.d.Marketingslideticket[i].NodataFound).indexOf("CustomerPersonal") != -1 ? "display:block;" : "display:none;";
                    var Parentdisplay = (data.d.Marketingslideticket[i].NodataFound).indexOf("NoParent") != -1 ? "display:block;" : "display:none;";
                    var sibdisplay = (data.d.Marketingslideticket[i].NodataFound).indexOf("Sibling") != -1 ? "display:block;" : "display:none;";
                    var Astrodisplay = (data.d.Marketingslideticket[i].NodataFound).indexOf("Astro") != -1 ? "display:block;" : "display:none;";
                    var Propertydisplay = (data.d.Marketingslideticket[i].NodataFound).indexOf("Property") != -1 ? "display:block;" : "display:none;";
                    $("#BothsideCarousel .carousel-inner").append(""
    + "<div class='" + stractiveClass + "'>"
        + "<div class='row container'>"
               + "<div class='col-lg-6' style='border-radius: 20px'>"
                     + "<div>"
                           + "<div class='row'>"
                                   + "<div class='col-lg-3'>"
                                         + "<div><img src='" + stremployeeimg + "' height='57px' width='57px' class='center-block' /></div>" + data.d.Marketingslideticket[i].EmpName + "<br/><br/>" + links
                                   + "</div>"
                                 + "<div class='col-lg-8 text-center'><div class='' style='color: maroon;font-size: 13px;font-weight: bold;" + dispalyservicedate + "'>Service Date: " + data.d.Marketingslideticket[i].ServiceDate + "</div><div style='font-size:14px;" + dispalyservicedate + "' class='row'>" + strMissingFields + "</div>" + strProfileStatus + "<input type='image' id='CustImg" + totalrecords + "' onclick='return getimgPath(" + JSON.stringify(data.d.Marketingslideticket[i].CustID) + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "," + JSON.stringify(data.d.Marketingslideticket[i].PhotoCount) + ")' src='" + data.d.Marketingslideticket[i].Photo + "'  class='img-thumbnail' style='border: 1px solid gray;' /><div class='text-center' style='line-height: 22px;'></br><b>" + data.d.Marketingslideticket[i].CustomerName + " (<b><a href='javascript:void(0)' id='lnkProfileID" + totalrecords + "' onclick=ViewProfilewithvalue(" + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + "); class='" + guestlinkshideclass + "'>" + data.d.Marketingslideticket[i].ProfileID + "</a> - " + data.d.Marketingslideticket[i].registeredBranch + ")</b></b></br><div style='" + guestlinkshide + "'><b><f class='maroon'>DOR:</f> " + data.d.Marketingslideticket[i].RegistrationDate + "</b></div><br/>" + strreminderDate + "</div></div></div>"
                           + "</div>"
                                   + "<br/><div class='col-lg-7 col-lg-offset-4'>" + strMissingFields1 + "</div></br>"
                                   + "<div class='col-lg-12 col-lg-push-2' style='border:1px solid;border-color:orange;border-radius: 20px;width:81%;" + Nodatafound + "'>"
                                     + "<div class='row'>"
    + "<div class='col-lg-6' id='lnkEducationProfessiondiv' style='" + edudisplay + "'>"
        + "<a  id='lnkEducationProfession' href='javascript:void(0);'    style='color: red;font-underline:true;' onclick='return nodatapages(" + JSON.stringify("eduprof") + "," + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ")'>No Education & Profession</a>"
    + "</div>"

    + "<div class='col-lg-6' id='lnkParentDetailsdiv' style='" + Parentdisplay + "'>"
        + "<a  id='lnkParentDetails'  href='javascript:void(0);' style='color: red;font-underline:true;'  onclick='return nodatapages(" + JSON.stringify("parent") + "," + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ")'>No Parent Details</a>"
    + "</div>"


    + "<div class='col-lg-6' id='lnkSiblingdiv' style='" + sibdisplay + "'>"
        + "<a  id='lnkSibling'  href='javascript:void(0);'  style='color: red;font-underline:true;'  onclick='return nodatapages(" + JSON.stringify("sibling") + "," + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ")'>No Sibling Details</a>"
    + "</div>"
    + "<div class='col-lg-6' id='lnkAstroDetailsdiv' style='" + Astrodisplay + "'>"
        + "<a  id='lnkAstroDetails'  href='javascript:void(0);'  style='color: red;font-underline:true;'  onclick='return nodatapages(" + JSON.stringify("astro") + "," + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ")'>No Astro Details</a>"
    + "</div>"

    + "<div class='col-lg-6' id='lnkPropertyDetailsdiv' style='" + Propertydisplay + "'>"
        + "<a  id='lnkPropertyDetails'  href='javascript:void(0);'  style='color: red;font-underline:true;'  onclick='return nodatapages(" + JSON.stringify("property") + "," + (data.d.Marketingslideticket[i].CustID) + "," + (empidObj) + "," + (AdminObj) + ")'>No Property Details</a>"
    + "</div>"

+ "</div>"
                                   + "</div><div class='clearfix'></div></br>"
                                     + "<div class='col-lg-12 col-lg-push-2' style='border:1px solid;border-color:orange;border-radius: 20px;width:81%;" + guestlinkshide + "'>"
                                          + "<div class='row'>"
                                                      + "<div class='col-lg-12 text-center' style='font-weight:bold;'>" + strlastloginDate + "</div><div class='clearfix'></div><br/>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>No of logins</label></div><div class='col-lg-2'><label>" + data.d.Marketingslideticket[i].LoginCount + "</label></div></div><div class='clearfix'></div>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>Total Viewed profiles</label></div><div class='col-lg-2'><label><div>" + data.d.Marketingslideticket[i].RectViewedProfCount + "</div></label></div></div><div class='clearfix'></div>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>Total Viewed profiles by others</label></div><div class='col-lg-2'><label><div>" + data.d.Marketingslideticket[i].RectWhoViewedCout + "</div></label></div></div><div class='clearfix'></div>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>Total Bookmarked profiles</label></div><div class='col-lg-2'><label><div>" + data.d.Marketingslideticket[i].MybookMarkedProfCount + "</div></label></div></div><div class='clearfix'></div>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>Total Bookmarked profiles by others</label></div><div class='col-lg-2'><label><div>" + data.d.Marketingslideticket[i].WhobookmarkedCount + "</div></label></div></div><div class='clearfix'></div>"
                                                      + "<div><div class='col-lg-10' style='color:maroon;'><label>Total ignore profiles Count</label></div><div class='col-lg-2'><label><div>" + data.d.Marketingslideticket[i].IgnoreProfileCount + "</div></label></div></div><div class='clearfix'></div>"
                                                       + "<div class='col-lg-12 text-center' style='font-weight:bold;'></div><div class='clearfix'></div>"
                                                       + "</div>"
                                                       + "</div>"
                                                       + "</div>"
                                                       + "<div class='col-lg-6' style='border:1px solid;border-color:orange;border-radius: 20px;'><div style=''><div class='text-center'><b><u>"
                                                       + "<a href='javascript:void(0);' id='lblticID" + totalrecords + "'  onclick='BindPopupTickethistry(" + JSON.stringify(data.d.Marketingslideticket[i].TicketID) + "," + JSON.stringify(data.d.Marketingslideticket[i].Emp_Ticket_ID) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketStatus) + "," + JSON.stringify(data.d.Marketingslideticket[i].TicketOpenedOn) + "," + JSON.stringify(data.d.Marketingslideticket[i].HighPriority) + "," + JSON.stringify(data.d.Marketingslideticket[i].EmpName) + "," + totalrecords + "," + JSON.stringify(data.d.Marketingslideticket[i].PrimaryContactNumber) + "," + data.d.Marketingslideticket[i].NoofDays + "," + JSON.stringify(data.d.Marketingslideticket[i].ProfileID) + ");'>" + data.d.Marketingslideticket[i].TicketID + "</a>"
                                                       + "</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + strcontactview + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Delayed : </label><label>" + " " + " " + data.d.Marketingslideticket[i].NoofDays + "</label></b></div>    <br/><div class='row'><div><b class='maroon' style='padding-left:10px;'> Mobile : </b><b style=" + mobilenumberdisplay + ">" + (data.d.Marketingslideticket[i].PrimaryContactNumberCountyCode != "" ? (data.d.Marketingslideticket[i].PrimaryContactNumberCountyCode + " - ") : "") + "" + data.d.Marketingslideticket[i].PrimaryContactNumber + strmobileverified + "</b>  <b style=" + mobilenumberdisplay + ">" + strmobileverifiedlnk + "</b>  </div>   <div><b class='maroon'  style='padding-left:10px;'>Email : </b><b style=" + emaildisplay + ">" + data.d.Marketingslideticket[i].PrimaryEmail + stremailverified + "</b> <b style=" + emaildisplay + ">" + stremailverifiedlnk + "</b>  </div> </div></div>    <br/>  " + strfeediv + " <div id='Updatediv" + totalrecords + "' style='overflow: scroll;height:600px;'>" + strTicketHiostryUpdate + "</div><br/><div>"
                                                       + "</div>"
                                                        + "</div><br/>"
);
                    document.getElementById("CustImg" + totalrecords).disabled = (data.d.Marketingslideticket[i].Photo).indexOf("noimage") == -1 && ((data.d.Marketingslideticket[i].CustID) != null && (data.d.Marketingslideticket[i].CustID) != "") ? false : true;
                }
                pauseifPlayVisible();
            }
        }
    }

    else {
        DynamicTimeAlert('No Records Found', 'alert alert-danger', 4000);
    }
}


var RegionArr = [
     { "label": "All", "title": "All", "value": 0 },
   { "label": "Ap", "title": "Ap", "value": 408 },
   { "label": "TN", "title": "TN", "value": 409 },
   { "label": "KT", "title": "KT", "value": 410 }];

function showonlyforAdmin() {

    $('#divBranch').show();
    $('#divemp').show();


    var data;
    if ($('#lstbranch').has('option').length == 0) {

        data = JSON.parse(localStorage.getItem("marketingBranches"));
        debugger;
        if (data == null || data == undefined || data == "") {
            var Bindings = {
                Masterbind: {
                    Branch: "Branch",
                    //Region: "onlyRegionmaster",
                    BranchWithEmp: "BranchWithEmp",
                    // Status: "Status",
                    //Catgory: "Catgory",
                    //replyType: "ReplyType"
                }
            }
            data = CallApi("CommonPopulateDropDownList", Bindings);
            localStorage.setItem("marketingBranches", JSON.stringify(data));
        }
        //var replyddl = [];
        //_.each(data.d.replyType, function (item) {
        //    _.each(item.value.split(','), function (inneritem, index) {
        //        if (index == 0) {
        //            replyddl.push({ value: inneritem, Id: item.Id });
        //        }
        //        else
        //            replycontext.push({ label: inneritem, title: inneritem, value: item.Id });
        //    });
        //});
        var methodnames = [
    { methodname: "Branch", dropdownname: "lstbranch", data: data.d.Branch },
    { methodname: "BranchWithEmp", dropdownname: "lstempSlide", data: data.d.BranchWithEmp },
    //{ methodname: "Regionmaster", dropdownname: "ddlregion", data: RegionArr },
   // { methodname: "BranchWithEmp", dropdownname: "ddlAssignedempsearch", data: data.d.BranchWithEmp },
   // { methodname: "Catgory", dropdownname: "ddlCategory", data: data.d.Catgory },
   // { methodname: "Status", dropdownname: "ddlStatus", data: data.d.Status },
    //{ methodname: "Branch", dropdownname: "ddlofficeloc", data: data.d.Branch },
    // { methodname: "ReplyType", dropdownname: "lstmails", data: replyddl },
     // { methodname: "Catgory", dropdownname: "ddlremCatgory", data: data.d.Catgory },
        ];

        for (var i = 0; i < methodnames.length; i++) {
            GetmasterDataNew(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
        }

        //var methodnames = [{ methodname: "ChildStayingWith", dropdownname: "ddlremcontactperson", ExistObj: datarelation }];
        //binddropdowns(methodnames, 'ddlremcontactperson');
        //GetmasterData("Catgory", "ddlremCatgory");
        getnumberbind("ddlDays", 10, 50, 'days', 10, undefined);
        //getnumberbind("ddlremCaltype", undefined, undefined, '--Select--', undefined, 'calltype');
        //getnumberbind("ddlHrs", 0, 23, 'Hrs', 1);
        //getnumberbind("ddlmins", 0, 59, 'Mins', 1);
        StaticBindmethod("ddlregion", RegionArr);
        $('#lstempSlide').multiselect('select', [empidObj]);
    }
}
function BindPopupTickethistry(ticketid, ticket, TicketStatus, TicketOpenedOn, TicketCategory, TicketAssignedEmpID, i, Custprimarymobile, NoOfdays, profileid) {
    profileidflag = profileid;
    bindmasterdata();
    $('#ddlmrktreceivedby').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedby', 'txtmrktRelationnameout');
    $('#lblmrktTicketID').html(ticketid);
    $('#lblmrktticket').html(ticket);
    $('#lblmrktStatus').html(TicketStatus);
    $('#lblmrktOpened').html(TicketOpenedOn);
    $('#lblmrktCatgory').html(TicketCategory);
    $('#lblmrktAssigned').html(TicketAssignedEmpID);
    $('#txtmrktCalltelephonenumber').val(Custprimarymobile);
    $('#txtmrktCalltelephonenumberout').val(Custprimarymobile);
    $('#lblNoofdays').html(NoOfdays);
    $('#Label1').html(i);
    $('#lblUpdatediv').html(i);
    if (parseInt(NoOfdays != "" ? NoOfdays : "0") > 10) {
        $('#lnkAssignticket').show();
        document.getElementById('btnIncomeAssignme').style.display = "block";
        document.getElementById('btnOutgngAssignme').style.display = "block";
        document.getElementById('btnIMAssignme').style.display = "block";
    }
    else {
        $('#lnkAssignticket').hide();
        document.getElementById('btnIncomeAssignme').style.display = "none";
        document.getElementById('btnOutgngAssignme').style.display = "none";
        document.getElementById('btnIMAssignme').style.display = "none";
    }
    $('#ActionPopup').modal({ backdrop: 'static', keyboard: false });
    pauseifPlayVisible();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkIncoming').addEventListener('click', function () {
        var methodnames = [{
            methodname: "ChildStayingWith",
            dropdownname: "ddlmrktreceivedfrom", ExistObj: datarelation
        }
     , {
         methodname: "ReplyType", dropdownname: "ddlmrktReplyType",
         ExistObj: datareplyType
     }];
        binddropdowns(methodnames, 'ddlmrktreceivedfrom');

        $('#ddlmrktreceivedfrom').multiselect('select', [39]);
        getRelationshipnamae('ddlmrktreceivedfrom', 'txtmrktRelationname');

    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkmemo').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktempmemo", ExistObj: dataEmp }, { methodname: "ReplyType", dropdownname: "ddlmrktreplytypememo", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlmrktempmemo');

        $('#ddlmrktempmemo').multiselect('select', [empidObj]);
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkcloseticket').addEventListener('click', function () {
        var methodnames = [{ methodname: "ReplyType", dropdownname: "ddlmrktreplytypeCloseticket", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlmrktreplytypeCloseticket');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkAssignticket').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktAssingnEmp", ExistObj: dataEmp }];
        binddropdowns(methodnames, 'ddlmrktAssingnEmp');
    }, false);
}, false);

function binddropdowns(methodnamesArray, dropdownid) {
    debugger;
    if ($('#' + dropdownid).has('option').length == 0) {
        var methodnames = methodnamesArray;
        for (var i = 0; i < methodnames.length; i++) {
            checkBindObject(methodnames[i].ExistObj, methodnames[i].methodname, methodnames[i].dropdownname);
        }
    }
    else {
    }

}
function bindmasterdata() {

    var methodnames = [
        {
            methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedby",
            ExistObj: datarelation
        },
    { methodname: "ReplyType", dropdownname: "ddlmrktreplytypeout", ExistObj: datareplyType }];

    for (var i = 0; i < methodnames.length; i++) {
        if ($('#' + methodnames[i].dropdownname).has('option').length == 0) {
            checkBindObject(methodnames[i].ExistObj, methodnames[i].methodname, methodnames[i].dropdownname);
        }
        else {
            $("#" + methodnames[i].dropdownname + " option:selected").removeAttr("selected");
        }
    }
}

function checkBindObject(dataEmp1, masterrname, dropdownname) {
    debugger;
    var option = [];
    var secondConfigurationSetSingleSelect = {
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        inheritClass: true
    };
    if (!$("#" + dropdownname).hasClass("multiple")) {
        option.push({ label: "--Select--", title: "--select--", value: "0" });
    }
    if (dataEmp1.length > 0) {
        $.each(dataEmp1, function (key, value) {
            option.push({ label: value.label, title: value.title, value: value.value });
        });
    }
    else {
        var odject = { 'methodname': '' + masterrname + '' };
        var data = CallApi('PopulateDropDownList', odject);
        if (data.d.length > 0) {
            $.each(data.d, function (key, value) {
                if (masterrname == 'ReplyType') {
                    var replyarr = value.value.split(',');
                    option.push({ label: replyarr[0], title: replyarr[0], value: value.Id });
                    datareplyType.push({ label: replyarr[0], title: replyarr[0], value: value.Id });

                    replycontext.push({ label: replyarr[1], title: replyarr[1], value: value.Id });
                }
                else {
                    option.push({ label: value.value, title: value.value, value: value.Id });
                    switch (masterrname) {
                        case 'ChildStayingWith':
                            datarelation.push({ label: value.value, title: value.value, value: value.Id });
                            break;
                        case 'EmpnameswithNoCondition':
                            dataEmp.push({ label: value.value, title: value.value, value: value.Id });
                            break;
                        case 'Catgory':
                            dataCatgory.push({ label: value.value, title: value.value, value: value.Id });
                            break;

                    }

                }
            });
        }

    }

    $('#' + dropdownname + '').multiselect('dataprovider', option);
    $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSetSingleSelect);
    $('#' + dropdownname + '').multiselect('rebuild');

}
var datain;

function submitInCalls(e) {

    if ($('#ddlmrktreceivedfrom').val() == 0 || $('#ddlmrktCallresult').val() == 0
        || $('#ddlmrktReplyType').val() == 0 || $('#txtmrktRelationname').val() == '' || $('#txtmrktCalltelephonenumber').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                CallType: 1,
                Calledon: currentdate,
                RelationID: $('#ddlmrktreceivedfrom option:selected').val(),
                RelationName: $('#txtmrktRelationname').val(),
                CallResult: $('#ddlmrktCallresult option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtmrktCalltelephonenumber').val(),
                CallDiscussion: $('#txtmrktCalldiscussionin').val(),
                DisplayStatus: $("input:radio[name='displaycustomermrkt']:checked").val(),
                TicketID: $('#lblmrktticket').text(),
                EmpID: empidObj
            }
        }

        var status = CallApi("SubmitmrktIncomingCall", datain)
        if ($('#' + e.id).text() == "Incomg Call & Assign me") {
            CommonAssignSubmit('Incoming Call');
        }
        else {
            statusAlert(status.d, 'ActionPopup', 'Incoming Call Created successfully', 'Incoming Call updation failed');
        }
        var idcount = $("#Label1").text();
        var popupidnew = $("#lblticID" + idcount + "").text();
        var iddivcount = $('#lblUpdatediv').text();
        var dividcount = $("#Updatediv" + iddivcount + "").text();

        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketID").text();
            var callreceivedby = $('#txtmrktRelationname').val() + "(" + getvaluestext('#ddlmrktreceivedfrom') + ")";
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("INCOMING", currentdate, empNameObj, $("#ddlmrktCallresult option:selected").text(),
                     callreceivedby, $('#txtmrktCalldiscussionin').val(), "", "", "");

                $("#Updatediv" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktRelationname');
        cleartxtboxes('txtmrktCalltelephonenumber');
        cleartxtboxes('txtmrktCalldiscussionin');
        Resetforradiobuttons("displaycustomermrkt");
        $('#ddlmrktreceivedfrom').multiselect('select', ['0']);
    }
    return false;
}

function submitOutCalls(e) {
    if ($('#ddlmrktreceivedby').val() == 0 || $('#ddlmrktcallresultout').val() == 0
   || $('#ddlmrktreplytypeout').val() == 0 || $('#txtmrktRelationnameout').val() == '' || $('#txtmrktCalltelephonenumberout').val() == '') {
        DynamicTimeAlert('Please enter all mandatory values', 'alert alert-danger', 4000);
    }
    else {
        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                CallType: 2,
                Calledon: currentdate,
                RelationID: $('#ddlmrktreceivedby option:selected').val(),
                RelationName: $('#txtmrktRelationnameout').val(),
                CallResult: $('#ddlmrktcallresultout option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtmrktCalltelephonenumberout').val(),
                CallDiscussion: $('#txtmrktCalldiscussionout').val(),
                DisplayStatus: $("input[name='displaycustomeroutmrkt']:checked").val(),
                TicketID: $('#lblmrktticket').text(),
                EmpID: empidObj
            }
        }
        var status = CallApi("SubmitmrktIncomingCall", datain);
        if ($('#' + e.id).text() == "Outgoing Call & Assign me") {
            CommonAssignSubmit('Outgoing Call');
        }
        else {
            statusAlert(status.d, 'ActionPopup', 'Outgoing Call Created successfully', 'Outgoing Call updation failed');
        }
        var idcount = $("#Label1").text();
        var popupidnew = $("#lblticID" + idcount + "").text();
        var iddivcount = $('#lblUpdatediv').text();
        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketID").text();
            var callreceivedby = $('#txtmrktRelationnameout').val() + "(" + getvaluestext('#ddlmrktreceivedby') + ")";
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("OUT GOING", currentdate, empNameObj, $("#ddlmrktcallresultout option:selected").text(),
                     callreceivedby, $('#txtmrktCalldiscussionout').val(), "", "", "");
                $("#Updatediv" + iddivcount + "").prepend(appenddiv);
            }
        }
        cleartxtboxes('txtmrktRelationnameout');
        cleartxtboxes('txtmrktCalltelephonenumberout');
        cleartxtboxes('txtmrktCalldiscussionout');
        Resetforradiobuttons("displaycustomeroutmrkt");
    }
    return false;
}

function submitMemo(e) {
    if ($('#ddlmrktempmemo').val() == 0 || $('#txtmrktmemocalldiscussion').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();

        datain = {
            Mobj: {
                AssignedEmpID: $('#ddlmrktempmemo option:selected').val(),
                TicketID: $('#lblmrktticket').text(),
                EmpID: empidObj,
                Message: $('#txtmrktmemocalldiscussion').val()
            }
        }
        var status = CallApi("SubmitmrktMemo", datain);
        if ($('#' + e.id).text() == "Internal Memo & Assign me") {
            CommonAssignSubmit('Memo');
        }
        else {
            statusAlert(status.d, 'ActionPopup', 'Memo Created successfully', 'Memo updation failed');
        }
        var idcount = $("#Label1").text();
        var popupidnew = $("#lblticID" + idcount + "").text();
        var iddivcount = $('#lblUpdatediv').text();

        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketID").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                     "", $('#txtmrktmemocalldiscussion').val(), "", "", "");

                $("#Updatediv" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktmemocalldiscussion');

    }
    return false;
}
function CommonAssignSubmit(strAction) {

    var datain = {
        Mobj: {
            EmpID: empidObj,
            AssignedEmpID: empidObj,
            TicketID: $('#lblmrktticket').text(),
            StatusID: 2
        }

    }
    var status = CallApi("SubmitReAssignticket", datain)
    statusAlert(status.d, 'ActionPopup', "" + strAction + " Created  & Ticket Assigned successfully", 'Ticket assigning failed');

}
function submitCloseTicket() {
    if ($('#txtmrktclosecalldiscusn').val() == '') {
        DynamicTimeAlert('Please enter reason for closing this ticket', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();

        datain = {
            Mobj: {
                TicketID: $('#lblmrktticket').text(),
                EmpID: empidObj,
                ReasonforClose: $('#txtmrktclosecalldiscusn').val()
            }
        }
        var status = CallApi("SubmitmrktCloseticket", datain);
        var idcount = $("#Label1").text();
        var popupidnew = $("#lblticID" + idcount + "").text();
        var iddivcount = $('#lblUpdatediv').text();

        statusAlert(status.d, 'ActionPopup', 'Ticket closed successfully', 'Ticket closing failed');


        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketID").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("Close", currentdate, empNameObj, "",
                     "", $('#txtmrktclosecalldiscusn').val(), "", "", "");

                $("#Updatediv" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktclosecalldiscusn');
        $('#ddlmrktreplytypeCloseticket').multiselect('select', ['0']);
    }
    return false;
}

function submitAssignTicket() {

    if ($('#ddlmrktAssingnEmp').val() == 0) {
        DynamicTimeAlert('Please select Staff name', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                EmpID: empidObj,
                AssignedEmpID: $('#ddlmrktAssingnEmp option:selected').val(),
                TicketID: $('#lblmrktticket').text(),
                StatusID: 2
            }
        }
        var status = CallApi("SubmitReAssignticket", datain)
        statusAlert(status.d, 'ActionPopup', 'Ticket Assigned successfully', 'Ticket assigning failed');
        var idcount = $("#Label1").text();
        var popupidnew = $("#lblticID" + idcount + "").text();
        var iddivcount = $('#lblUpdatediv').text();
        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketID").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                     "", "Reassign to " + getvaluestext('#ddlmrktAssingnEmp'), "", "", "");

                $("#Updatediv" + iddivcount + "").prepend(appenddiv);

            }

        }
        $('#ddlmrktAssingnEmp').multiselect('select', ['0']);
    }
    return false;
}

function bindCalldiscussion(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;

    $("#" + txtid).val(sss);
    return false;
}
$(function () {
    $(".ddlmrktReplyType").on('change', function () {
        bindCalldiscussion('txtmrktCalldiscussionin', 'ddlmrktReplyType');
        return false;
    });
});
function updatereminder(custid, profileid, ticket, reminderdate, reminderid, ticketid, i, remindertime, catgory, calltype, contactpersonrel, contactpersonname, notes) {

    getnumberbind("ddlremCaltype", undefined, undefined, '--Select--', undefined, 'calltype');
    getnumberbind("ddlHrs", 0, 23, 'Hrs', 1);
    getnumberbind("ddlmins", 0, 59, 'Mins', 1);

    BindBasedOnDiv("divddlremcontactperson", "ddlremcontactperson");
    BindBasedOnDiv("divddlremCatgory", "ddlremCatgory");




    $('#lblremcustID').html(custid);
    $('#lblreminerID').html(reminderid);
    $('#lblticketID').html(ticketid);
    $("#txtremprofileid").val(profileid);
    $("#txtremticketid").val(ticket);
    $("#txtreminderDate").val(reminderdate);
    $("#txtcontactPersnname").val(contactpersonname);
    $("#txtremNotes").val(notes);
    $("#lblSlidecount").html(i);
    $('#ddlremCaltype').multiselect('select', [calltype]);
    $('#ddlremcontactperson').multiselect('select', [contactpersonrel]);
    $('#ddlremCatgory').multiselect('select', [catgory]);
    if (remindertime != undefined) {
        var remindertimeArr = remindertime.split(':');
        $('#ddlHrs').multiselect('select', parseInt(remindertimeArr[0]) + 1);

        $('#ddlmins').multiselect('select', [parseInt(remindertimeArr[1]) + 1]);
    }
    else {
        $('#ddlHrs').multiselect('select', ['0']);
        $('#ddlmins').multiselect('select', ['0']);

        $('#ddlremCaltype').multiselect('select', ['0']);
        $('#ddlremcontactperson').multiselect('select', ['0']);
        $('#ddlremCatgory').multiselect('select', ['462']);
    }
    $('#Reminderpopup').modal({ backdrop: 'static', keyboard: false });
}

function bindName(ddlid, txtid) {
    var nameinput = { Mobj: { RelationID: $('#' + ddlid + ' option:selected').val(), CustID: $('#lblremcustID').text() } };
    var drelationname = CallApi("getRelationeName", nameinput);
    $("#" + txtid).val(drelationname.d);

}

function reminderSubmit() {

    var count = $("#lblSlidecount").text();

    if ($('#txtreminderDate').val() == '' || $('#ddlHrs').val() == 0 || $('#ddlmins').val() == 0
       || $('#ddlremCaltype').val() == 0 || $('#ddlremcontactperson').val() == 0 || $('#txtremNotes').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }

    else {
        var remdate = $('#txtreminderDate').val();
        var reminderDate;
        var d1 = new Date();
        if (remdate != '') {
            var strdate = remdate.split("-");
            var strhrs = $('#ddlHrs option:selected').val() > 0 ? $('#ddlHrs option:selected').val() : 00;
            var strmins = $('#ddlmins option:selected').val() > 0 ? $('#ddlmins option:selected').val() : 00;
            //reminderDate = strdate[0] + '-' + monthNames[parseInt(strdate[1]) - 1] + '-' + strdate[2] + ' ' + JSON.stringify(parseInt(strhrs) - 1) + ':' + JSON.stringify(parseInt(strmins) - 1) + ':' + '12';
            reminderDate = remdate + ' ' + JSON.stringify(parseInt(strhrs) - 1) + ':' + JSON.stringify(parseInt(strmins) - 1) + ':' + '12';
        }


        datain = {
            Mobj: {
                ProfileID: $('#txtremprofileid').val(),
                ReminderID: ($('#lblreminerID').text() != 0 && $('#lblreminerID').text() != "") ? $('#lblreminerID').text() : null,
                EmpID: empidObj,
                TicketID: $('#lblticketID').text(),
                DateOfReminder: reminderDate,
                ReminderType1: $('#ddlremCaltype option:selected').val(),
                Body: $('#txtremNotes').val(),
                RelationID: $('#ddlremcontactperson option:selected').val(),
                Name: $('#txtcontactPersnname').val(),
                Category: $('#ddlremCatgory option:selected').val(),
                IsFollowup: 0
            }
        }

        var status = CallApi("InsertCreateReminder_Marketslideshow", datain)
        cleartxtboxes('txtreminderDate');
        cleartxtboxes('txtremNotes');
        $("#ddlremCatgory option:selected").removeAttr("selected");
        $("#ddlremcontactperson option:selected").removeAttr("selected");
        $("#ddlremCaltype option:selected").removeAttr("selected");

        var divProfileiD = $("#lnkProfileID" + count + "").text();
        var popupProfileiD = $('#txtremprofileid').val();
        if (JSON.stringify(divProfileiD) == JSON.stringify(popupProfileiD)) {
            $('#lblreminderdate' + count + '').text(reminderDate);
            $('#lblcreateremainder' + count + '').html('Reminder date:');
            $('#lblcreateremainderdate' + count + '').show();
            $('#lblcreateremainderdate' + count + '').html(reminderDate);
        }
        $('#Reminderpopup').modal('hide');
        statusAlert(status.d, 'ActionPopup', 'Reminder updated sucessfully', 'Reminder updation failed');

    }

    return false;
}

function convertJSDate(dateTime) {
    var dateArr = dateTime.split("-");
    var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    date1 = (moment(date1).format('YYYY-MM-DD HH:MM:SS'));
    return date1;
}
function marketclick(e, firstbtn, Secondbtn, thirdbutton, fourthbutton, fifthbuttton, Sixthbutton, clickVal, siblingsval, guestticketvalue, onlineexprd, offlineexprd, Excelflag, colorflag, seventhbutton, notinpay) {

    $("#BothsideCarousel").carousel("pause").removeData();
    $('#' + firstbtn).removeAttr('class').addClass("btn btn-default");
    $('#' + Secondbtn).removeAttr('class').addClass("btn btn-default");
    $('#' + thirdbutton).removeAttr('class').addClass("btn btn-default");
    $('#' + fourthbutton).removeAttr('class').addClass("btn btn-default");
    $('#' + fifthbuttton).removeAttr('class').addClass("btn btn-default");
    $('#' + Sixthbutton).removeAttr('class').addClass("btn btn-default");
    $('#' + seventhbutton).removeAttr('class').addClass("btn btn-default");
    $("#" + e.id).removeAttr('class').addClass("btn btn-success");
    marketflag = clickVal;
    siblingsflag = siblingsval;
    guestticketflag = guestticketvalue;
    Onlineexprdflag = onlineexprd;
    Offlineexprdflag = offlineexprd;
    ExcelflagReport = Excelflag;
    Colorsuccessflag = colorflag;
    NotInPayflag = notinpay;
    $("#" + Colorsuccessflag).removeAttr('class').addClass("btn btn-success");
    $('#btnimgexcel').removeAttr('class');

    if (e == "btnimgexcel") {

        var totalrecords = $('#lblcurSlide').text();
        bindMarketingSlideshow(totalrecords);
    }
    else {
        $("#BothsideCarousel .carousel-inner").html('');
        $('#lblcurSlide').text(0);
        $('#lblcurrentprofile').text(0);
        $("#lnkLastSlide").text(1);
        currentslide = 1;
        bindMarketingSlideshow();
    }
    $('.carousel-control.left').attr('style', 'display:none;');
    $('.carousel-control.right').attr('style', 'display:block;');
}
function sendSms(MobileNumber, Name, Empname, EmpmobileNumber, Pemail, countrycode, Ticketid, ticketkak, i) {
    $('#headerid').text('Send SMS');
    $('#txtval').val('');
    Resetforradiobuttons('Sendsms');
    $('#lblname').text(Name);
    $('#lblempname').text(Empname);
    $('#lblPMobile').text(MobileNumber);
    $('#lblempmobile').text(EmpmobileNumber);
    $('#lblPMobileCode').text(countrycode);
    $('#lblticketID').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    document.getElementById("smsdiv").style.display = "block";
    document.getElementById("sendmailtxtdiv").style.display = "none";
    $('#brnsendsmsmail').html("Send Sms");
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });
    return false;

}

function sendMail(profileid, Ticketid, ticketkak, i, PrimaryEmail, Name) {


    var Bindings = {
        Masterbind: {
            replyType: "ReplyType"
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var replyddl = [];
    _.each(data.d.replyType, function (item) {
        _.each(item.value.split(','), function (inneritem, index) {
            if (index == 0) {
                replyddl.push({ value: inneritem, Id: item.Id });
            }
            else
                replycontext.push({ label: inneritem, title: inneritem, value: item.Id });
        });
    });

    GetmasterDataNew("ReplyType", "lstmails", replyddl);




    $('#headerid').text('Send Mail');
    $('#txtval').val('');
    $('#lblProfileid').text(profileid);
    $('#lblticketID').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    document.getElementById("smsdiv").style.display = "none";
    document.getElementById("sendmailtxtdiv").style.display = "block";
    $('#divcustnameemail').html(" <div class='form-group'><label class='control-label col-sm-4 maroon'>Customer Name</label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + Name + " (" + profileid + ")" + "</label></div></div>"
    + "<div class=clearfix></div><br /><div class='form-group'><label class='control-label  col-sm-4 maroon'>Email going to </label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + PrimaryEmail + "</label></div></div><div class=clearfix></div><br />");
    $('#brnsendsmsmail').html("Send Mail");
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });

    return false;
}
function sendsmssubmit() {
    var resultdata;
    var idcount = $("#lblticketcount").text();
    var popupidnew = $("#lblticID" + idcount + "").text();
    if ($('#txtval').val() != "") {
        if ($('#headerid').text() == 'Send SMS') {
            var submitdata = { Mobj: { strbody: $('#txtval').val(), strMobileNumber: $('#lblPMobile').text(), strcountrycode: null, strName: $('#lblname').text(), strEmpname: empNameObj, strEmpid: empidObj, strEmpmobileNumber: empMobObj, strMobileCountryCode: $('#lblPMobileCode').text(), LTicketID: $('#lblticketID').text(), marketbothflag: "market" } };
            CallApi("Marketslideshow_SendSMS", submitdata)
            statusAlert(1, 'submittextpopup', "SMS sent sucessfully", "SMS sending failed");
            var popupidnew = $("#lblticID" + idcount + "").text();
            var d1 = new Date();
            var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
            var popupid = $("#lblTicketkak").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                     "", $('#txtval').val() + "....sent SMS", "", "", "");

                $("#Updatediv" + idcount + "").prepend(appenddiv);

            }
            $('#txtval').val('');
        }

        else if ($('#headerid').text() == 'Send Mail') {

            var submitdata = {
                Mobj: {
                    Notes: ($('#txtval').val()),
                    EMPID: empidObj,
                    profileid: $('#lblProfileid').text(),
                    LTicketID: $('#lblticketID').text()
                }
            };

            resultdata = CallApi("SendMarketingMail", submitdata)

            statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");

            var popupidnew = $("#lblticID" + idcount + "").text();


            var d1 = new Date();
            var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
            if (parseInt(resultdata.d) == parseInt(1)) {
                var popupid = $("#lblTicketkak").text();
                if (popupidnew == popupid) {
                    var appenddiv = returnhtml("REPLY", currentdate, empNameObj, "",
                         "", $('#txtval').val() + "....Sent Mail", "", "", "");

                    $("#Updatediv" + idcount + "").prepend(appenddiv);

                }
            }
            $('#txtval').val('');
        }
    }
    else {

        ShowOnlyAlertText('Please enter text', 'alert alert-danger');
    }
    return false;

}
function photoRequest(custid, profileid, ticketid, ticketidkak, i) {
    var submitdata = { Mobj: { EMPID: empidObj, profileid: profileid, ticketIDs: ticketid } };
    $('#lblTicketkak').text(ticketidkak);
    var data = CallApi("photorequest", submitdata);
    statusAlert(data.d, undefined, 'Photo Request sent successfully', 'Photo request sending failed');
    var popupidnew = $("#lblticID" + i + "").text();
    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    if (parseInt(data.d) == parseInt(1)) {

        if (popupidnew == ticketidkak) {
            var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                 "", "Photo request for Upload Photo", "", "", "");

            $("#Updatediv" + i + "").prepend(appenddiv);

        }
    }
    return false;
}
function forgotPWD(custid, ticketid, ticketidkak, i) {
    $('#lblTicketkak').text(ticketidkak);
    var submitdata = { Mobj: { CustID: custid, EmpID: empidObj, ITicketID: ticketid } };
    var data = CallApi("forgotPwd", submitdata);
    statusAlert(data.d, undefined, 'Forgot Password mail sent successfully', 'Forgot Password mail sending failed');
    var popupidnew = $("#lblticID" + i + "").text();

    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    if (parseInt(data.d) == parseInt(1)) {
        var popupid = $("#lblTicketkak").text();
        if (popupidnew == popupid) {
            var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                 "", "Email To Reset Forgot Password", "", "", "");

            $("#Updatediv" + i + "").prepend(appenddiv);

        }
    }
    return false;
}
function MissingFields(profileid, Ticketid, ticketkak, i, CustID) {
    $('#lblcustiddd').html(CustID);
    $('#lblprofileidmissing').html(profileid);
    $('.textboxclear').val('');
    var profileid = {
        Profileid: {
            Profileid: profileid,
            CustID: CustID
        }
    };
    var data = CallApi("MarketingMissingdata", profileid);
    if (data.d != null) {
        $('#lblheight').html(data.d.FromHeight);
        $('#lbllstEducationcategory').html(data.d.Educcategory);
        $('#lbllstProfessionGroup').html(data.d.Profgroup);
        $('#lblddlstarlanguages').html(data.d.Starlanguage);
        $('#lbllstjoblocation').html(data.d.JobLocation);
        $('#lbllstCountrylivingin').html(data.d.DOBcountry);
        $('#lbllstdobcity').html(data.d.DOBCity);
        $('#lblfathernative').html(data.d.FatherNative);
        $('#lblproperty').html(data.d.Propertylakhs);
        $('#lbllstMaritalstatus').html(data.d.Maritalstatus);
        $('#lbllstEducationGroup').html(data.d.Education);
        $('#lbllstComplexion').html(data.d.Complexion);
        $('#lbllststar').html(data.d.Star);
        $('#lbltob').html(data.d.TimeofBirth);
        $('#lbllststate').html(data.d.DOBState);
        $('#lblgothram').html(data.d.Gothram);
        $('#lbltxtmothernative').html(data.d.MotherNative);
        $('#lblsalary').html(data.d.Salary);
        $('#lbllstdistrict').html(data.d.DOBDistrict);
        $('#lbleducationid').html(data.d.CustEducationID);
        $('#lblprofessionid').html(data.d.CustProfessionID);
        $('#lblmothernativeid').html(data.d.MFCustFamilyID);
        $('#lblfathernativeid').html(data.d.FFCustFamilyID);
        $('#lbllsteducationspecialisation').html(data.d.EducationSpecialisation);
        $('#lbllstprofgroup').html(data.d.ProfessionGroupName);
        $('#lbllstemployedin').html(data.d.Employeeedin);
        $('#lblasroflag').html(data.d.AstroFlag);
        $('#lblEducationflag').html(data.d.Educationflag);
        $('#lblProfessionflag').html(data.d.Professionflag);
        $('#lblParentsFatherFlag').html(data.d.ParentsFatherFlag);
        $('#lblParentsMotherFlag').html(data.d.ParentsMotherFlag);
        $('#lbllstjoblocstate').html(data.d.JoblocationState);
        $('#lbllstJoblocCountry').html(data.d.JoblocationCountry);
        $('#lbllstjoblocdistrict').html(data.d.JoblocationDistrict);
        $('#lblJoblocationCountryID').html(data.d.JoblocationCountryID);
        $('#lblJoblocationStateID').html(data.d.JoblocationStateID);
        $('#lblJoblocationDistrictID').html(data.d.JoblocationDistrictID);
        $('#lblJoblocationID').html(data.d.JoblocationID);
        //add
        $('#lbleducationcategoryid').html(data.d.EducationCategoryID);
        $('#lbleducationgroupid').html(data.d.EducationgroupID);
        $('#lbleducationspecialisationid').html(data.d.EducationselectID);
        $('#lblprofessiongroupid').html(data.d.ProfessionGroupID);
        $('#lblprofessionselectid').html(data.d.ProfessionID);
    }
    Hideandshow();

    modalpopupshowhide('divmissingfields', 'show');
    return false;

}
var Bindings = {
    Masterbind: {}
};
var controlflag = "";
function Hideandshow() {
    controlflag = "";
    if ($('#lblheight').text() == "" || $('#lblheight').text() == null) {
        document.getElementById("lblheightdiv").style.display = "none";
        document.getElementById("ddlFromheightdiv").style.display = "block";
        Bindings.Masterbind.Height = "Height";
    }
    else {
        showhideelse("lblheightdiv", "ddlFromheightdiv");

    }
    if ($('#lbllstEducationcategory').text() == "" || $('#lbllstEducationcategory').text() == null) {
        document.getElementById("lbllstEducationcategorydiv").style.display = "none";
        document.getElementById("lstEducationcategorydiv").style.display = "block";
        Bindings.Masterbind.EducationCategory = "EducationCategory";
        // educationtrueflag = true;
        controlflag = "lstEducationcategory";
    }
    else {
        showhideelse("lbllstEducationcategorydiv", "lstEducationcategorydiv");
    }
    if ($('#lbllstEducationGroup').text() == "" || $('#lbllstEducationGroup').text() == null) {
        document.getElementById("lbllstEducationGroupdiv").style.display = "none";
        document.getElementById("lstEducationGroupdiv").style.display = "block";
        Bindings.Masterbind.EducationGroup = "EducationGroup";
        binddependencyFormissingfields('EducationGroup', $('#lbleducationcategoryid').text(), '.lstEducationGroup', '');
        controlflag = controlflag != "" ? controlflag + "," + "lstEducationGroup" : "lstEducationGroup";
    }
    else {
        showhideelse("lbllstEducationGroupdiv", "lstEducationGroupdiv");
    }
    if ($('#lbllsteducationspecialisation').text() == "" || $('#lbllsteducationspecialisation').text() == null) {
        document.getElementById("lsteducationspecialisationdiv").style.display = "block";
        document.getElementById("lbllsteducationspecialisationdiv").style.display = "none";
        binddependencyFormissingfields('EducationSpelization', $('#lbleducationgroupid').text(), '.lstEducationSpecialisation', '');
        controlflag = controlflag != "" ? controlflag + "," + "lsteducationspecialisation" : "lsteducationspecialisation";
    }
    else {
        showhideelse("lbllsteducationspecialisationdiv", "lsteducationspecialisationdiv");
    }
    if ($('#lblddlstarlanguages').text() == "" || $('#lblddlstarlanguages').text() == null) {
        document.getElementById("lblddlstarlanguagesdiv").style.display = "none";
        document.getElementById("ddlstarlanguagesdiv").style.display = "block";
    }
    else {
        showhideelse("lblddlstarlanguagesdiv", "ddlstarlanguagesdiv");

    }
    if ($('#lbllstCountrylivingin').text() == "" || $('#lbllstCountrylivingin').text() == null) {
        document.getElementById("lbllstCountrylivingindiv").style.display = "none";
        document.getElementById("lstCountrylivingindiv").style.display = "block";
        Bindings.Masterbind.Country = "Country";
    }
    else {
        showhideelse("lbllstCountrylivingindiv", "lstCountrylivingindiv");

    }
    if ($('#lbllstdobcity').text() == "" || $('#lbllstdobcity').text() == null) {
        document.getElementById("lbllstdobcitydiv").style.display = "none";
        document.getElementById("lstdobcitydiv").style.display = "block";

    }
    else {
        showhideelse("lbllstdobcitydiv", "lstdobcitydiv");

    }
    if ($('#lblfathernative').text() == "" || $('#lblfathernative').text() == null) {
        document.getElementById("lblfathernativediv").style.display = "none";
        document.getElementById("txtfathernativediv").style.display = "block";
    }
    else {
        showhideelse("lblfathernativediv", "txtfathernativediv");

    }
    if ($('#lblproperty').text() == "" || $('#lblproperty').text() == null) {
        document.getElementById("lblproperty").style.display = "none";
        document.getElementById("txtproperty").style.display = "block";
    }
    else {
        showhideelse("lblproperty", "txtproperty");

    }
    if ($('#lbllstMaritalstatus').text() == "" || $('#lbllstMaritalstatus').text() == null) {
        document.getElementById("lbllstMaritalstatusdiv").style.display = "none";
        document.getElementById("lstMaritalstatusdiv").style.display = "block";

        Bindings.Masterbind.MaritalStatus = "MaritalStatus";
    }
    else {
        showhideelse("lbllstMaritalstatusdiv", "lstMaritalstatusdiv");

    }
    if ($('#lbllstComplexion').text() == "" || $('#lbllstComplexion').text() == null) {
        document.getElementById("lbllstComplexiondiv").style.display = "none";
        document.getElementById("lstComplexiondiv").style.display = "block";
        Bindings.Masterbind.Complexion = "Complexion";
    }
    else {
        showhideelse("lbllstComplexiondiv", "lstComplexiondiv");

    }
    if ($('#lbllststar').text() == "" || $('#lbllststar').text() == null) {
        document.getElementById("lbllststardiv").style.display = "none";
        document.getElementById("lststardiv").style.display = "block";

        Bindings.Masterbind.Star = "Star";
    }
    else {
        showhideelse("lbllststardiv", "lststardiv");
    }
    if ($('#lbltob').text() == "" || $('#lbltob').text() == null) {
        document.getElementById("lbltobdiv").style.display = "none";
        document.getElementById("tobdiv").style.display = "block";

        Bindings.Masterbind.TImeDoB = "TImeDoB";
        Bindings.Masterbind.TImeDoBMins = "TImeDoBMins";
        Bindings.Masterbind.TImeDoBsecs = "TImeDoBsecs";
    }
    else {
        showhideelse("lbltobdiv", "tobdiv");

    }
    if ($('#lbllststate').text() == "" || $('#lbllststate').text() == null) {
        document.getElementById("lbllststatediv").style.display = "none";
        document.getElementById("lststatediv").style.display = "block";
    }
    else {
        showhideelse("lbllststatediv", "lststatediv");

    }
    if ($('#lblgothram').text() == "" || $('#lblgothram').text() == null) {
        document.getElementById("lblgothram").style.display = "none";
        document.getElementById("txtgothram").style.display = "block";
    }
    else {
        showhideelse("lblgothram", "txtgothram");

    }
    if ($('#lbltxtmothernative').text() == "" || $('#lbltxtmothernative').text() == null) {
        document.getElementById("lbltxtmothernativediv").style.display = "none";
        document.getElementById("txtmothernativediv").style.display = "block";
    }
    else {
        showhideelse("lbltxtmothernativediv", "txtmothernativediv");
    }
    if ($('#lblsalary').text() == "" || $('#lblsalary').text() == null) {
        document.getElementById("lblsalarydiv").style.display = "none";
        document.getElementById("ddlAnnualincomediv").style.display = "block";

        Bindings.Masterbind.CountryCurrency = "CountryCurrency";
    }
    else {
        showhideelse("lblsalarydiv", "ddlAnnualincomediv");
    }
    if ($('#lbllstdistrict').text() == "" || $('#lbllstdistrict').text() == null) {
        document.getElementById("lbllstdistrictdiv").style.display = "none";
        document.getElementById("lstdistrictdiv").style.display = "block";
    }
    else {
        showhideelse("lbllstdistrictdiv", "lstdistrictdiv");

    }

    if ($('#lbllstprofgroup').text() == "" || $('#lbllstprofgroup').text() == null) {
        document.getElementById("lstprofgroupdiv").style.display = "block";
        document.getElementById("lbllstprofgroupdiv").style.display = "none";
        Bindings.Masterbind.ProfessionGroup = "ProfessionGroup";
        professiongroup = true;
        controlflag = controlflag != "" ? controlflag + "," + "lstprofgroup" : "lstprofgroup";
    }
    else {
        showhideelse("lbllstprofgroupdiv", "lstprofgroupdiv");
        professiongroup = false;
    }

    if ($('#lbllstProfessionGroup').text() == "" || $('#lbllstProfessionGroup').text() == null) {
        document.getElementById("lbllstProfessionGroupdiv").style.display = "none";
        document.getElementById("lstProfessionGroupdiv").style.display = "block";
        binddependencyFormissingfields('ProfessionSpecialization', $('#lblprofessiongroupid').text(), '.lstProfession', '');
        controlflag = controlflag != "" ? controlflag + "," + "lstProfession" : "lstProfession";

    }
    else {
        showhideelse("lbllstProfessionGroupdiv", "lstProfessionGroupdiv");
        profession = false;
    }

    if ($('#lbllstemployedin').text() == "" || $('#lbllstemployedin').text() == null) {
        document.getElementById("lstemployedindiv").style.display = "block";
        document.getElementById("lbllstemployedindiv").style.display = "none";
        Bindings.Masterbind.ProfessionCategory = "ProfessionCategory";
        employedin = true;
        controlflag = controlflag != "" ? controlflag + "," + "lstemployedin" : "lstemployedin";

    }
    else {
        showhideelse("lbllstemployedindiv", "lstemployedindiv");
        employedin = false;
    }
    //

    if ($('#lbllstJoblocCountry').text() == "" || $('#lbllstJoblocCountry').text() == null) {
        document.getElementById("lstJoblocCountrydiv").style.display = "block";
        document.getElementById("lbllstJoblocCountrydiv").style.display = "none";

        Bindings.Masterbind.Country = "Country";
    }
    else {
        showhideelse("lbllstJoblocCountrydiv", "lstJoblocCountrydiv");

    }
    if ($('#lbllstjoblocstate').text() == "" || $('#lbllstjoblocstate').text() == null) {
        document.getElementById("lstjoblocstatediv").style.display = "block";
        document.getElementById("lbllstjoblocstatediv").style.display = "none";
        binddependencyFormissingfields('State', $('#lblJoblocationCountryID').text(), '.lstStatelivingin', '');
    }
    else {
        showhideelse("lbllstjoblocstatediv", "lstjoblocstatediv");

    }
    //
    if ($('#lbllstjoblocdistrict').text() == "" || $('#lbllstjoblocdistrict').text() == null) {
        document.getElementById("lstjoblocdistrictdiv").style.display = "block";
        document.getElementById("lbllstjoblocdistrictdiv").style.display = "none";

        binddependencyFormissingfields('District', $('#lblJoblocationStateID').text(), '.lstdistrict', '');
    }
    else {
        showhideelse("lbllstjoblocdistrictdiv", "lstjoblocdistrictdiv");
    }

    if ($('#lbllstjoblocation').text() == "" || $('#lbllstjoblocation').text() == null) {
        document.getElementById("lbllstjoblocationdiv").style.display = "none";
        document.getElementById("lstjoblocationdiv").style.display = "block";
        binddependencyFormissingfields('City', $('#lblJoblocationDistrictID').text(), '.lstjoblocation', '');
    }
    else {
        showhideelse("lbllstjoblocationdiv", "lstjoblocationdiv");
    }

    if ($('#lblasroflag').text() != "" && $('#lblasroflag').text() != null) {
        if ($('#lblasroflag').text() == 0) {
            document.getElementById("lnkeditastro").style.display = "block";
            document.getElementById("ddlstarlanguagesdiv").style.display = "none";
            document.getElementById("lststardiv").style.display = "none";
        }
        else if ($('#lblasroflag').text() == 1) {
            document.getElementById("lnkeditastro").style.display = "none";
        }
        else {
            document.getElementById("lnkeditastro").style.display = "none";
            document.getElementById("ddlstarlanguagesdiv").style.display = "block";
            document.getElementById("lststardiv").style.display = "block";
        }
    }

    if ($('#lblParentsFatherFlag').text() != "" && $('#lblParentsFatherFlag').text() == null && $('#lblParentsMotherFlag').text() != "" && $('#lblParentsMotherFlag').text() != null) {
        if (($('#lblParentsFatherFlag').text() == 1) && ($('#lblParentsMotherFlag').text() == 1)) {
            $('#lblparentsflag').html($('#lblParentsFatherFlag').text());
            document.getElementById("lnkeditparents").style.display = "none";
        }
        else {
            document.getElementById("lnkeditparents").style.display = "block";
        }
    }

    Bindsingledropdowns();
}
function Bindsingledropdowns() {
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var methodnames = [
                 { methodname: "Height", dropdownname: "ddlFromheight", data: data.d.Height },
                 { methodname: "MaritalStatus", dropdownname: "lstMaritalstatus", data: data.d.MaritalStatus },
                 { methodname: "EducationCategory", dropdownname: "lstEducationcategory", data: data.d.EducationCategory },
                 { methodname: "EducationGroup", dropdownname: "lstEducationGroup", data: data.d.EducationGroup },
                 { methodname: "ProfessionGroup", dropdownname: "lstprofgroup", data: data.d.ProfessionGroup },
                 { methodname: "Complexion", dropdownname: "lstComplexion", data: data.d.Complexion },
                 { methodname: "Star", dropdownname: "lststar", data: data.d.Star },
                 { methodname: "Country", dropdownname: "lstCountrylivingin", data: data.d.Country },
                 { methodname: "CountryCurrency", dropdownname: "ddlAnnualincome", data: data.d.CountryCurrency },
                 { methodname: "TImeDoB", dropdownname: "lsthours", data: data.d.TImeDoB },
                 { methodname: "TImeDoBMins", dropdownname: "lstmins", data: data.d.TImeDoBMins },
                 { methodname: "TImeDoBsecs", dropdownname: "lstsecs", data: data.d.TImeDoBsecs },
                 { methodname: "ProfessionCategory", dropdownname: "lstemployedin", data: data.d.ProfessionCategory },
                 { methodname: "Country", dropdownname: "lstJoblocCountry", data: data.d.Country }
    ];

    for (var i = 0; i < methodnames.length; i++) {
        GetMasterDataforSearchessingle(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
    }
    return false;
}

function GetMasterDataforSearchessingle(masterrname, dropdownname, data) {
    var options = [];
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true
    };

    if (data != null && data.length > 0) {
        options.push({ label: "--Select--", title: "--select--", value: "0" });
        $.each(data, function (key, value) {
            options.push({ label: value.value, title: value.value, value: value.Id });
        });
        $('#' + dropdownname + '').multiselect('dataprovider', options);
        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}

function MissingFieldssubmit() {
    var controlflagarr = controlflag.split(',');
    var alertstring = "";
    if (controlflagarr.length > 0 && controlflagarr[0] != "") {
        for (var i = 0; i < controlflagarr.length; i++) {
            if ($('#' + controlflagarr[i] + '').val() == 0 || $('#' + controlflagarr[i] + '').val() == null) {
                switch (controlflagarr[i]) {
                    case "lstEducationcategory":
                        alertstring = "Education category";
                        break;
                    case "lstEducationGroup":
                        alertstring = "Education Group";
                        break;
                    case "lsteducationspecialisation":
                        alertstring = "Education Speciasation";
                        break;
                    case "lstprofgroup":
                        alertstring = "Profession Group";
                        break;
                    case "lstProfession":
                        alertstring = "Profession";
                        break;
                    case "lstemployedin":
                        alertstring = "EmployedIn";
                        break;
                }
                DynamicTimeAlert('Please Select  ' + alertstring + ' values', 'alert alert-danger', 4000);
                return false;
            }

        }

    }

    var missingfields = {
        dt: {
            CustID: $('#lblcustiddd').text(),
            ProfileID: $('#lblprofileidmissing').text(),
            Height: getvalues('#ddlFromheight'),
            Educcategory: getvalues('#lstEducationcategory'),
            Profgroup: getvalues('#lstProfession'),
            Starlanguage: getvalues('#ddlstarlanguages') != 0 ? getvalues('#ddlstarlanguages') : null,
            JobLocation: getvalues('#lstjoblocation'),
            DOBcountry: getvalues('#lstCountrylivingin'),
            DOBCity: getvalues('#lstdobcity'),
            FatherNative: $('#txtfathernative').val(),
            Propertylakhs: $('#txtproperty').val(),
            Maritalstatus: getvalues('#lstMaritalstatus'),
            Education: getvalues('#lstEducationGroup'),
            Complexion: getvalues('#lstComplexion'),
            Star: getvalues('#lststar') != 0 ? getvalues('#lststar') : null,
            Timeofbirthhours: getvalues('#lsthours'),
            TimeofbirthMininutes: getvalues('#lstmins'),
            TimeofbirthSeconds: getvalues('#lstsecs'),
            DOBState: getvalues('#lststate'),
            Gothram: $('#txtgothram').val(),
            MotherNative: $('#txtmothernative').val(),
            Salarycurrency: getvalues('#ddlAnnualincome') != 0 ? getvalues('#ddlAnnualincome') : null,
            Salary: $('#txtsalary').val(),
            DOBDistrict: getvalues('#lstdistrict'),
            MFCustFamilyID: $('#lblmothernativeid').text(),
            FFCustFamilyID: $('#lblfathernativeid').text(),
            CustProfessionID: $('#lblprofessionid').text(),
            CustEducationID: $('#lbleducationid').text(),
            EducationSpecialisation: getvalues('#lsteducationspecialisation'),
            ProfessionGroupName: getvalues('#lstprofgroup'),
            Employeeedin: getvalues('#lstemployedin'),
            AstroFlag: $('#lblasroflag').text(),
            ParentsFlag: $('#lblparentsflag').text(),
            JoblocationCountry: getvalues('#lstJoblocCountry'),
            JoblocationState: getvalues('#lstjoblocstate'),
            JoblocationDistrict: getvalues('#lstjoblocdistrict')
        }
    };



    var data = CallApi("MissingFieldsupdate", missingfields);
    $('#divmissingfields').modal('hide');

    return false;
}

function editFee(curslidenum) {
    $('#lnkfeeupdate' + curslidenum).html('Update Fee');
    $('#feeEdit' + curslidenum + '').hide();
    $('#feeupdate' + curslidenum + '').show();
    return false;

}
function UpdateFee(curslidenum, ticketid, custid) {
    if ($('#txtfees' + curslidenum + '').val() != "") {
        $('#feeEdit' + curslidenum + '').show();
        $('#feeupdate' + curslidenum + '').hide();

        var datain = {
            Mobj: {
                EmpTicketID: ticketid,
                EmpID: empidObj,
                Message: "Registration fee update------" + $('#txtfees' + curslidenum + '').val(),
                AssignedEmpID: empidObj,
                feevalue: $('#txtfees' + curslidenum + '').val(),
                CustID: custid,
                SettlementValue: null
            }
        }
        var status = CallApi("FeeUpdate", datain);

        if (parseInt(status.d) == parseInt(1)) {
            var appenddiv = returnhtml("InternalMemo", getcurrentdate(), empNameObj, "",
                 "", "Registration fee update------" + $('#txtfees' + curslidenum + '').val(), "", "", "");

            $("#Updatediv" + curslidenum + "").prepend(appenddiv);
        }



        $('#lblfee' + curslidenum + '').html($('#txtfees' + curslidenum + '').val());
    }
    else {
        ShowOnlyAlertText('Please Enter fee value', 'alert alert-danger');
    }
    return false;
}

function getcurrentdate() {
    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    return currentdate;
}
function showSettledForm(SettlementD) {
    var object = { SettlementD: '' + SettlementD + '' };
    var data = CallApi("Getsettlementformcustid", object);
    commonpopupmethod("SettlementForm", data.d);
    return false;
}
function GetOwner(custid) {
    var owner;
    var object = { 'custid': '' + custid + '' };
    var data = CallApi("ownerid", object);
    owner = data.d;
    return owner;
}
function astropageredirectandparents(page) {
    var custid = $('#lblcustiddd').text();
    var QueryStringEdit = "CustID=" + custid + "&EmpID=" + GetEmpid() + "&Admin=" + GetAdmin() + "&owner=" + GetOwner(custid) + "";
    switch (page) {
        case "Astro":
            window.open('EmployeeEditAstro.aspx?' + QueryStringEdit, '_blank');
            break;
        case "Parents":
            window.open('EmployeeEditParentsDetails.aspx?' + QueryStringEdit, '_blank');
            break;
    }
    return false;
}

$(function () {
    $('input:radio[name="Sendsms"]').change(function () {
        if ($(this).val() == '1') {
            $('#txtval').val("We missed to reach you on 91-XXXXX. please call back");
        }
        else if ($(this).val() == '2') {
            $('#txtval').val("As per our telephonic conversation a/c details are......");
        }
        else if ($(this).val() == '3') {
            $('#txtval').val("Upgrade membership for more details....");
        }
        else if ($(this).val() == '4') {
            $('#txtval').val("Your Mobile number is not verfied., We recommond you to login and verify the mobile");
        }
        else if ($(this).val() == '5') {
            $('#txtval').val("Your Email is not verified., We recommond you to login and verify the email");
        }
        else if ($(this).val() == '6') {
            $('#txtval').val("Your Near by Branch Address---> Flat No:103,109, Vijayasri APts, Behind chermas, Ameerpet,Hyderabad.");
        }
        else if ($(this).val() == '7') {
            $('#txtval').val("Your profile is viewed by 20 Members. Please login to view their details");
        }
        else if ($(this).val() == '8') {
            $('#txtval').val("I am (" + empNameObj + ")  Your Relationship Manager. Please Feel Free to Contact me (9:00 AM to 6:00 PM IST)");
        }
        else if ($(this).val() == '9') {
            $('#txtval').val("Please update your Complete profile for Good Responce");
        }
        else if ($(this).val() == '10') {
            $('#txtval').val("Please upload your recent photo graphs on www.kaakateeya.com/WhatsApp on 91-9848535373 with your profile id or Name and Surname");
        }
        else if ($(this).val() == '11') {
            $('#txtval').val("Dear Member, lots of new matches are added on kaakateeya.com everyday. Don't miss, Login now and connect with them");
        }
        else if ($(this).val() == '12') {
            $('#txtval').val("We are trying to contact you for verification but not responding.So your profile will be deactivated , please contact us");
        }
        else {
            $('#txtval').val("");
        }
    });
    return false;
});

function showhideelse(lbl, txt) {
    document.getElementById(lbl).style.display = "block";
    document.getElementById(txt).style.display = "none";
}

function editSAamount(curslidenum) {
    $('#lnksaupdate' + curslidenum).html('Update SA')
    $('#SAEditdiv' + curslidenum + '').hide();
    $('#SAupdatediv' + curslidenum + '').show();
    return false;
}
function UpdateSAamount(curslidenum, ticketid, custid) {
    if ($('#txtSAamount' + curslidenum + '').val() != "") {
        $('#SAEditdiv' + curslidenum + '').show();
        $('#SAupdatediv' + curslidenum + '').hide();
        var datain = {
            Mobj: {
                EmpTicketID: ticketid,
                EmpID: empidObj,
                Message: "Settlement Amount update------" + $('#txtSAamount' + curslidenum + '').val(),
                AssignedEmpID: empidObj,
                feevalue: null,
                SettlementValue: $('#txtSAamount' + curslidenum + '').val(),
                CustID: custid
            }
        }
        var status = CallApi("FeeUpdate", datain);

        if (parseInt(status.d) == parseInt(1)) {
            var appenddiv = returnhtml("InternalMemo", getcurrentdate(), empNameObj, "",
                 "", "Settlement Amount update------" + $('#txtSAamount' + curslidenum + '').val(), "", "", "");
            $("#Updatediv" + curslidenum + "").prepend(appenddiv);
        }

        $('#lblSAamount' + curslidenum + '').html($('#txtSAamount' + curslidenum + '').val());
    }
    else {
        ShowOnlyAlertText('Please Enter SA value', 'alert alert-danger');
    }
    return false;
}
function Deletesettlereason(profileid, statusid) {
    var stringbody;
    var datain = {
        Mobj: {
            ProfileID: profileid,
            StatusID: statusid
        }
    }
    var data = CallApi("GetDeletesettleInformation", datain);
    if (data.d != null) {
        if (statusid == "56" || statusid == "394") {
            stringbody = "<div class='form-horizontal'>"
+ "<div class='form-group'>"
+ "<label class='control-label col-sm-4 maroon' >Deleted Details</label>"
+ "<div class='pull-left'>"
+ "<label class='control-label pull-left' >" + data.d.ProfileID + "</label>"
+ " </div>"
+ " </div>"
+ "<div class='form-group'>"
+ " <label class='control-label col-sm-4 maroon' >Deleted Profile Owner</label>"
+ " <div class=pull-left> "
+ "<label class='control-label pull-left' >" + data.d.Name + "</label>"
+ "</div>"
+ "</div>"
+ "<div class='form-group'>"
+ " <label class='control-label col-sm-4 maroon' > Deleted Date</label>"
+ " <div class=pull-left> "
+ "<label class='control-label pull-left' >" + data.d.DeletedDate + "</label>"
+ "</div>"
+ "</div>"
+ "<div class='form-group'>"
+ " <label class='control-label col-sm-4 maroon' >Deleted By</label>"
+ " <div class=pull-left> "
+ "<label class='control-label pull-left' >" + data.d.DeleteBy + "</label>"
+ "</div>"
+ "</div>"

+ "<div class='row'>"
+ " <label class='col-lg-offset-1' style='color:#000;'> " + data.d.deletenotes + "</label>"

+ "</div>"
+ "</div>";
        }
        else {
            stringbody = "<div class='form-horizontal'>"
     + "<div class='form-group'>"
       + "<label class='control-label col-sm-4 maroon' >Bride Details</label>"
       + "<div class='pull-left'>"
       + "<label class='control-label pull-left' >" + data.d.BrideProfileID + " " + data.d.BrideName + "</label>"
      + " </div>"
    + " </div>"
     + "<div class='form-group'>"
      + " <label class='control-label col-sm-4 maroon' >Bride Owner</label>"
      + " <div class=pull-left> "
        + "<label class='control-label pull-left' >" + data.d.BrideOwner + "</label>"
       + "</div>"
     + "</div>"
    + "<div class='form-group'>"
      + " <label class='control-label col-sm-4 maroon' >Groom Details</label>"
      + " <div class=pull-left> "
        + "<label class='control-label pull-left' >" + data.d.GroomProfileID + " " + data.d.GroomName + "</label>"
       + "</div>"
     + "</div>"
    + "<div class='form-group'>"
      + " <label class='control-label col-sm-4 maroon' >Groom Owner</label>"
      + " <div class=pull-left> "
        + "<label class='control-label pull-left' >" + data.d.GroomOwner + "</label>"
       + "</div>"
     + "</div>"

     + "<div class='form-group'>"
      + " <label class='control-label col-sm-4 maroon' > Settled Date</label>"
      + " <div class=pull-left> "
        + "<label class='control-label pull-left' >" + data.d.SettledDate + "</label>"
       + "</div>"
     + "</div>"


     + "<div class='form-group'>"
      + " <label class='control-label col-sm-4 maroon' > Settled By</label>"
      + " <div class=pull-left> "
        + "<label class='control-label pull-left' >" + data.d.settletedby + "</label>"
       + "</div>"
     + "</div>"

      + "<div class='row'>"
      + " <label class='col-lg-offset-1' style='color:#000;'> " + data.d.Settlenotes + "</label>"

     + "</div>"
   + "</div>";

        }

        commonpopupmethod("DeletedAndsettledpopup", stringbody);
    }
    return false;
}

function Excelreport() {
    marketclick('btnimgexcel', 'btnmarket', 'btnreminder', 'btnsiblings', 'btnguesttickets', 'btnonlineexprd', 'btnofflineexprd', marketflag, siblingsflag, guestticketflag, Onlineexprdflag, Offlineexprdflag, '8', Colorsuccessflag);
    return false;
}

function radioChangeSibling(value, curslidenum, empticketid, custid) {
    $('#txtsiblingval').val('');
    $('#lblvalue').text(value);
    $('#lblcurslidenum').text(curslidenum);
    $('#lblempticketid').text(empticketid);
    $('#lblcustidvv').text(custid);
    $('#divsiblingyesno').modal({ backdrop: 'static', keyboard: false });
    return false;
}

function Siblingradio() {
    var curslidenum = $('#lblcurslidenum').text();
    if ($('#txtsiblingval').val() != "") {
        var datain = {
            Mobj: {
                EmpTicketID: $('#lblempticketid').text(),
                EmpID: empidObj,
                Message: $('#txtsiblingval').val(),
                AssignedEmpID: empidObj,
                feevalue: null,
                CustID: $('#lblcustidvv').text(),
                SettlementValue: null,
                isSiblings: $('#lblvalue').text()

            }
        }
        var status = CallApi("FeeUpdate", datain);
        if (parseInt(status.d) == parseInt(1)) {
            var appenddiv = returnhtml("InternalMemo", getcurrentdate(), empNameObj, "",
                 "", $('#txtsiblingval').val(), "", "", "");

            $("#Updatediv" + curslidenum + "").prepend(appenddiv);
        }
        $('#divsiblingyesno').modal('hide');;
    }
    return false;
}
function Missingfieldsemail(Fromcustid, FromProfileid) {
    var submitdata = {
        Mobj: {
            LFromCustID: Fromcustid,
            LToCustID: Fromcustid,
            EMPID: empidObj,
            FromProfileID: FromProfileid
        }
    };

    resultdata = CallApi("ResendMailMarketing", submitdata)
    statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");
    return false;
}
function getRelationshipnamae(ddlrelation, txttoname) {
    var data;
    var BindNames = {
        Relation: {
            Relationshipid: $('#' + ddlrelation + ' option:selected').val() > 0 ? $('#' + ddlrelation + ' option:selected').val() : null,
            profileid: profileidflag,
        }
    };
    if (profileidflag != "Guest") {
        data = CallApi('GetRelationNamesShipOnCustID', BindNames);
        if (data != null && data.d != null && data.d != undefined) {
            $('#' + txttoname + '').val(data.d.FirstName + " " + (data.d.LastName != null ? data.d.LastName : ""));
        }
    }
    return false;
}

function Verifymobile(CountryID, MobileNumber, CustContactNumbersID) {
    strMobileNumber = MobileNumber;
    strCountryID = CountryID;
    strCustContactNumbersID = CustContactNumbersID;
    data = CallApi('Mobileverify', { strMobileNumber: CountryID + "-" + MobileNumber, strCountryID: CountryID, strCustContactNumbersID: CustContactNumbersID, strTextBox: $('#txtVerificationcode').val() });
    $('#lblmobileverfiydisplay').text(" " + CountryID + "-" + MobileNumber);
    $('#divgridviewRange').modal({ backdrop: 'static', keyboard: false });
    return false;
}

function Verifyemail(custid, CustEmailID) {

    data = CallApi('Emailverify', { iCustID: custid, CustEmailID: CustEmailID });
    ShowOnlyAlertText('verification email sent  successfully', 'alert alert-success');
    return false;
}
function verifyemailmobile() {
    var data = 0;
    data = CallApi('Mobileverify', { strMobileNumber: strCountryID + "-" + strMobileNumber, strCountryID: strCountryID, strCustContactNumbersID: strCustContactNumbersID, strTextBox: $('#txtVerificationcode').val() != "" ? $('#txtVerificationcode').val() : null });
    $('#divgridviewRange').modal('hide');
    if ($('#txtVerificationcode').val() != "" && $('#txtVerificationcode').val() != null && $('#txtVerificationcode').val() != undefined) {
        ShowOnlyAlertText('verified  successfully', 'alert alert-success');
    }
    else {
        ShowOnlyAlertText('verified Failed', 'alert alert-danger');
    }
    return false;
}

function serviceslideshow(val, profileid) {
    window.open('slideshowbasedonProfileidNew.aspx?Flag=' + val + '&ProfileID=' + profileid, '_blank');
    return false;
}

function nodatapages(page, customerid, EmpID, Admin) {
    switch (page) {
        case "eduprof":
            window.open("EmployeeEducationAndProfession.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "photo":
            window.open("EmployeeEditManagePhoto.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "parent":
            window.open("EmployeeEditParentsDetails.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;

        case "partnerpref":
            window.open("EmployeePartnerPreference.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "sibling":
            window.open("EmployeeEditSiblings.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "astro":
            window.open("EmployeeEditAstro.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "property":
            window.open("EmployeeEditProperty.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "relatives":
            window.open("EmployeeEditRelatives.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
        case "reference":
            window.open("EmployeeEditReference.aspx?CustID=" + customerid + "&EmpID=" + EmpID + "&Admin=" + (Admin == "1" ? Admin : "0") + "&owner=" + Getownerid(customerid), '_blank');
            break;
    }
    return false;
}
