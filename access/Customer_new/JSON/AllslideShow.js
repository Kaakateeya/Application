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
var empidObj, empNameObj, empMobObj, smsArr;
var AdminObj;
var replycontext = [];
var datarelation = [];
var dataEmp = [];
var datareplyType = [];
var closeticket = [];
var data;
var bothsidelstmail = [],
    bothsidetext = [];
var empid, Getempid, pagenum = 0, PageSize, Fromdate, Todate, SPname, strSpname = 'Usp_Select_BothSideOneSideInterst',
    stremp, strBranch, datainputd, spflag, servicecustid, Viewedcontactsflag, closeflag;
var currentslide;
// Managementid = getmanagementid();
$(function () {
    document.getElementById("HelpImg").style.display = 'none';

    var empdetails = CallApi("EmployeeMyProfiles.aspx/getEmpidloginAdminempnamemobile", {});
  
    empidObj = empdetails.d.Item1;
    AdminObj = empdetails.d.Item2;
    empNameObj = empdetails.d.Item3;
    empMobObj = empdetails.d.Item4;
    pageload("BothsideCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
    pageloadnew("serviceprofilesCarousel", "lblcurrentservice", "lblTotalservice", undefined, "PlayServicebtn", "PauseServicebtn");

});

function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    setTimeout(showonlyforAdmin, 2500);
    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;
    if (totalItems == 0) {
        bindbothOneSlideshow(carouselID, curProfileID, totalrecordsID, empidObj);
        checkitemnew(carouselID);
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
    }
    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
    playAndPause(carouselID, playButtonID, pauseButtonID);
    ArrowMove(carouselID);
    checkitemGlobal(carouselID);
    $(".Region").on('change', function () {
        binddependency('Branch', '.Region', '.Branch')
    });
}

function pageloadnew(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
   // showonlyforAdmin();
    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;
    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
    playAndPause(carouselID, playButtonID, pauseButtonID);
    ArrowMove(carouselID);
    checkitemGlobal(carouselID);

}

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
function slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    $('#' + carouselID).bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#' + carouselID).find('.item').length;
        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
        $('#' + carouselID).find('div.active').index()
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {
                bindbothOneSlideshow(carouselID, curProfileID, totalrecordsID);
            }
        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);
        $('#' + curProfileID).text(currentIndex1);
        if (parseInt($("#" + lnkLastSlide).text()) < currentIndex1) {
            $("#" + lnkLastSlide).text(currentIndex1);
            return false;
        }

    });
}
//play and pause function on click event

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


function bindbothOneSlideshow(CarouselID, curProfileID, totalrecordsID, loginEmpid) {


    var convertJSDate = function (dateTime) {
        var dateArr = dateTime.split("-");
        var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
        date1 = (moment(date1).format('YYYY/MM/DD HH:MM:SS'));
        return date1;
    }
    if (CarouselID != "serviceprofilesCarousel") {
        servicecustid = null;
    }
    var datainput = {
        Mobj: {
            empid: empidObj,
            stremp: loginEmpid != undefined ? loginEmpid : (Managementid == 1 ? ((getvalues('#lstempSlide') == "" ? null : getvalues('#lstempSlide'))) : empidObj),
            strBranch: getvalues('#lstbranch') == "" ? null : getvalues('#lstbranch'),
            PageNumber: pagenum + 1, PageSize: 10,
            Fromdate: $('#txtfromproceedDate').val() != "" ? convertJSDate($('#txtfromproceedDate').val()) : null,
            Todate: $('#txtToproceedDate').val() != "" ? convertJSDate($('#txtToproceedDate').val()) : null,
            SPname: strSpname, Spflag: spflag, CustID: servicecustid,
            region: $('#ddlregion option:selected').val() == 0 ? null : $('#ddlregion option:selected').val(),

            oppclose: closeflag
        }
    };
    pagenum += 1;
    var totalrecords;
    var pageidcount = $('#' + CarouselID).find('.item').length;
    var totalrecords = $('#' + CarouselID).find('.item').length;
    data = CallApi("Getbothsideinterst", datainput)
    if (data.d.length > 0) {
        $('#' + totalrecordsID).text(data.d[0].TotalRows);
        $('#' + curProfileID).text(1);

        for (var i = 0; i < data.d.length; i++) {
            pageidcount = pageidcount + 1;
            totalrecords = CarouselID + pageidcount;


            //totalrecords = totalrecords + 1;
            var strfromserviceCountlink = "", strtoserviceCountlink = "";
            var fromempnameArr = (data.d[i].fromempname).split('-');
            var toempnameArr = (data.d[i].toempname).split('-');
            if (CarouselID != "serviceprofilesCarousel") {
                if (parseInt(data.d[i].FromExpressCount) > parseInt(1)) {
                    if (JSON.stringify(empNameObj) == JSON.stringify(fromempnameArr[0])) {
                        strfromserviceCountlink = "<a href='javascript:void(0);' onclick='return ShowServiceprofile(" + JSON.stringify(data.d[i].fromcust_id) + ");'> Proceed Other Profiles</a>";
                    }
                }
                if (parseInt(data.d[i].ToExpressCount) > parseInt(1)) {
                    if (JSON.stringify(empNameObj) == JSON.stringify(toempnameArr[0])) {
                        strtoserviceCountlink = "<a href='javascript:void(0);' onclick='return ShowServiceprofile(" + JSON.stringify(data.d[i].tocustid) + ");' > Proceed Other Profiles </a>";
                    }
                }

                if (strfromserviceCountlink == "") {
                    strfromserviceCountlink = strtoserviceCountlink != "" ? "<br/>" : "";
                }
                if (strtoserviceCountlink == "") {
                    strtoserviceCountlink = strfromserviceCountlink != "" ? "<br/>" : "";
                }
            }

            var strTicketTypeto, strDateto, strEmployeeNameto, strCommentsto = '', lbldateto, lblempCustnameto, lblcommentMatchto,
            strfromRecentHistry = '', strToRecentHistry = '',
            strComments = '';
            switch (showLatestHistory(data.d[i].FromticketStatusID, data.d[i].FromTicketCreated, data.d[i].FromTicketHisoryDatenew)) {
                case "tickethistrydate":
                    var strfromcustRelation = (data.d[i].FromTicketHisoryCallReceivedBy) + (data.d[i].FromTicketHisoryRelationShip != '' ? " ( " + data.d[i].FromTicketHisoryRelationShip + " )" : "");
                    strfromRecentHistry = returnhtml(data.d[i].FromTicketHisoryType, data.d[i].FromTicketHisoryDatenew, data.d[i].FromTicketHisoryNAME, data.d[i].FromTicketHisoryCallStatus, strfromcustRelation, data.d[i].FromTicketHisoryReplyDesc, data.d[i].FromTicketNoofdays, data.d[i].FromTicketMatchmeetingStatus, data.d[i].FromTicketMatchMeetingReason);
                    break;

                case "ticketdate":
                    var matchStatus = data.d[i].FromticketStatusID;
                    strComments = matchStatus == '431' ? 'Proceed' : (matchStatus == '432' ? 'Dont Proceed' : (matchStatus == '433' ? 'Viewed' : 'Not defined'));

                    strfromRecentHistry = returnhtml('MatchFollowupReply', data.d[i].FromTicketCreated, data.d[i].FromName == "" ? "--" : data.d[i].FromName, undefined, undefined, strComments, undefined, data.d[i].FromTicketMatchmeetingStatus, data.d[i].FromTicketMatchMeetingReason);
                    break;

            }
            switch (showLatestHistory(data.d[i].ToticketStatusID, data.d[i].ToTicketCreated, data.d[i].ToTicketHisoryDatenew)) {
                case "tickethistrydate":
                    var strTocustRelation = (data.d[i].ToTicketHisoryCallReceivedBy) + (data.d[i].ToTicketHisoryRelationShip != '' ? " ( " + data.d[i].ToTicketHisoryRelationShip + " )" : "");
                    strToRecentHistry = returnhtml(data.d[i].ToTicketHisoryType, data.d[i].ToTicketHisoryDatenew, data.d[i].ToTicketHisoryNAME, data.d[i].ToTicketHisoryCallStatus, strTocustRelation, data.d[i].ToTicketHisoryReplyDesc, data.d[i].ToTicketNoofdays, data.d[i].ToTicketMatchmeetingStatus);
                    break;

                case "ticketdate":
                    var matchStatusto = data.d[i].ToticketStatusID;
                    strCommentsto = matchStatusto == '431' ? 'Proceed' : (matchStatusto == '432' ? 'Dont Proceed' : (matchStatusto == '433' ? 'Viewed' : 'Not defined'));

                    strToRecentHistry = returnhtml('MatchFollowupReply', data.d[i].ToTicketCreated, data.d[i].ToName == "" ? "--" : data.d[i].ToName, undefined, undefined, strCommentsto, undefined, data.d[i].ToTicketMatchmeetingStatus, data.d[i].ToTicketMatchMeetingReason);
                    break;
            }

            //to code

            var strfromproceedDate = (data.d[i].FromticketStatusID != '' && data.d[i].FromticketStatusID == '431' && data.d[i].FromTicketCreated != '') ? data.d[i].FromTicketCreated : "";
            var strToproceedDate = (data.d[i].ToticketStatusID != '' && data.d[i].ToticketStatusID == '431' && data.d[i].ToTicketCreated != '') ? data.d[i].ToTicketCreated : "";

            var strfromheart = data.d[i].FromticketStatusID == '431' ? "<img  src='../../Images/heartgrren.gif' style='width:28px;'/>" : (data.d[i].FromticketStatusID == '432' ? "<img  src='../../Images/brk%20hrt_2_green.gif' style='width:28px;'/>" : '');

            var strToheart = data.d[i].ToticketStatusID == '431' ? "<img  src='../../Images/heartgrren.gif' style='width:28px;'/>" : (data.d[i].ToticketStatusID == '432' ? "<img  src='../../Images/brk%20hrt_2_green.gif' style='width:28px;'/>" : '');

            var totalslides = $('#' + CarouselID).find('.item').length;
            var stractiveClass = totalslides == 0 ? 'item active' : 'item';

            var fromSApathclass = data.d[i].FromSaPath != null && data.d[i].FromSaPath != "" ? "<div style=''><button type='button'   class='btn btn-success-outline row' onclick='return Settlementfom(" + JSON.stringify(data.d[i].FromProfileid) + "," + JSON.stringify(data.d[i].FromSaPath) + ");' style='height: 26px; padding: 3px;'>View SA Form</button></div>" : "<div style=''><button type='button'   class='btn btn-success-outline row Linkdisabledforsaform' style='height: 26px; padding: 3px;color:maroon;' onclick='return Settlementfom(" + JSON.stringify(data.d[i].FromProfileid) + "," + JSON.stringify(data.d[i].FromSaPath) + ");'>NO SA Form</button></div>";
            var ToSApathclass = data.d[i].ToSaPath != null && data.d[i].ToSaPath != "" ? "<div style=''><button type='button'   class='btn btn-success-outline row' style='height: 26px; padding: 3px;' onclick='return Settlementfom(" + JSON.stringify(data.d[i].Toprofileid) + "," + JSON.stringify(data.d[i].ToSaPath) + ");'>View SA Form</button></div>" : "<div style=''><button type='button' style='height: 26px; padding: 3px;color:maroon;'  class='btn btn-success-outline row Linkdisabledforsaform' onclick='return Settlementfom(" + JSON.stringify(data.d[i].Toprofileid) + "," + JSON.stringify(data.d[i].ToSaPath) + ");'>No SA Form</button></div>";
            var fromemployeeimg = (data.d[i].fromemp != null) && (data.d[i].fromemp != "") ? (data.d[i].fromemp).replace("~/", "../../") : "";
            var toemployeeimg = (data.d[i].toemp != null) && (data.d[i].toemp != "") ? (data.d[i].toemp).replace("~/", "../../") : "";

            var fromResendMail = (data.d[i].FromTicket != null && data.d[i].FromTicket != "") ? "<button type='button'  id='lnkAddaction" + totalrecords + "' onclick='BindPopupTickethistry(" + JSON.stringify(data.d[i].FromTicket) + "," + JSON.stringify(data.d[i].fromticketid) + "," + JSON.stringify(data.d[i].FromTicketStatus) + "," + JSON.stringify(data.d[i].FromTicketOpenedOn) + "," + JSON.stringify(data.d[i].FromTicketCategory) + "," + JSON.stringify(data.d[i].FromTicketAssignedEmpID) + "," + JSON.stringify(data.d[i].FromTicketPendingWith) + "," + JSON.stringify(totalrecords) + "," + data.d[i].FromMobileNumber + "," + JSON.stringify("Updatedivfrom") + "," + JSON.stringify("lnkAddaction") + ")' class='btn btn-success-outline'>" + data.d[i].fromticketid + "</button>" : "<button type='button'  id='lnkAddaction" + totalrecords + "' onclick='return ResendMail(" + JSON.stringify(data.d[i].fromcust_id) + "," + JSON.stringify(data.d[i].tocustid) + "," + JSON.stringify(data.d[i].FromProfileid) + "," + JSON.stringify(data.d[i].Toprofileid) + ");' class='btn btn-success-outline'>Resend mail</button>";

            var toResendMail = (data.d[i].ToTicket != null && data.d[i].ToTicket != "") ? "<button type='button' id='lnkAddactionTo" + totalrecords + "' onclick='BindPopupTickethistry(" + JSON.stringify(data.d[i].ToTicket) + "," + JSON.stringify(data.d[i].Toticketid) + "," + JSON.stringify(data.d[i].ToTicketStatus) + "," + JSON.stringify(data.d[i].ToTicketOpenedOn) +
"," + JSON.stringify(data.d[i].ToTicketCategory) + "," + JSON.stringify(data.d[i].ToTicketAssignedEmpID) + "," + JSON.stringify(data.d[i].ToTicketPendingWith) + "," + JSON.stringify(totalrecords) + "," + data.d[i].ToMobileNumber + "," + JSON.stringify("Updatedivto") + "," + JSON.stringify("lnkAddactionTo") + ");' class='btn btn-success-outline'>" + data.d[i].Toticketid + "</button>" : "<button type='button'  id='lnkAddactionTo" + totalrecords + "' onclick='return ResendMail(" + JSON.stringify(data.d[i].tocustid) + "," + JSON.stringify(data.d[i].fromcust_id) + "," + JSON.stringify(data.d[i].Toprofileid) + "," + JSON.stringify(data.d[i].FromProfileid) + ");' class='btn btn-success-outline'>Resend mail</button>";




            $('#' + CarouselID + ' .carousel-inner').append(" <div class='" + stractiveClass + "'><div class='row container'><div class='col-lg-6' style='border-radius: 20px;border-right:1px solid maroon;'><div><div class='row'><div class='col-lg-3'>"
                                                    + "<div><div class='text-center'></div><img src='" + fromemployeeimg + "' height='57px' width='57px' class='center-block' /></div><div class='row'>" + data.d[i].fromempname + "</div><br/><div><button type='button' class='btn btn-success-outline row'style='height: 26px; padding: 3px;' onclick='return sendSms(" + JSON.stringify(data.d[i].FromMobileNumber) + "," + JSON.stringify(data.d[i].FromName) + "," + JSON.stringify(data.d[i].FromEmail) + "," + JSON.stringify(data.d[i].FromMobileCountryCode) + "," + JSON.stringify(data.d[i].FromTicket) + "," + JSON.stringify(data.d[i].fromticketid) + "," + JSON.stringify(totalrecords) + "," + JSON.stringify("Updatedivfrom") + "," + JSON.stringify("lnkAddaction") + ");'>Send Sms</button></div><div class='clearfix'></div><br/>"

                                                    + "<div class='clearfix'><button type='button' class='btn btn-success-outline row' style='height: 26px; padding: 3px;' onclick='return sendMail(" + JSON.stringify(data.d[i].FromProfileid) + "," + JSON.stringify(data.d[i].FromTicket) + "," + JSON.stringify(data.d[i].fromticketid) + "," + JSON.stringify(totalrecords) + "," + JSON.stringify("Updatedivfrom") + "," + JSON.stringify("lnkAddaction") + "," + JSON.stringify(data.d[i].fromcust_id) + "," + JSON.stringify(data.d[i].tocustid) + "," + JSON.stringify(data.d[i].ToticketStatusID) + "," + JSON.stringify(data.d[i].FromName) + "," + JSON.stringify(data.d[i].FromEmail) + "," + JSON.stringify(data.d[i].Toprofileid) + ");'>Send Email</button></div><div class='clearfix'></div><br/>"
                                                    + "<div class='clearfix'>" + fromSApathclass + "</div><br/><div class='clearfix'>"
                                                    + "<button type='button'   class='btn btn-success-outline row'style='height: 26px; padding: 3px;' onclick='return Contactpage(" + data.d[i].fromcust_id + ");'>View Contacts</button></div><div class='clearfix'></div>"
                                                + "</div><div class='col-lg-8'><div style='padding-bottom: 5px;'><br/>" + strfromserviceCountlink + "</div><input type='image' id='fromcustimg" + totalrecords + "' onclick='return getimgPath(" + JSON.stringify(data.d[i].fromcust_id) + "," + JSON.stringify(data.d[i].FromProfileid) + "," + data.d[i].PhotoCount + ")' src='" + data.d[i].Photo + "'  class='img-thumbnail' style='border: 1px solid gray;' /><div class='text-center'></br><div class='row'><div class='col-lg-10'><b>"
                                                + data.d[i].FromName + " (<a href='javascript:void(0)' onclick=ViewProfilewithvalue(" + JSON.stringify(data.d[i].FromProfileid) + ");>" + data.d[i].FromProfileid + "</a> -" + data.d[i].FromBranchCode + ")</b></div><div class='col-lg-2'>" + strfromheart + "</div></div>"
                                                + "<div class='row'><div class='col-lg-3'><b class='maroon'>Mobile:</b> </div><div class='col-lg-9'><b class=''>" + (data.d[i].FromMobileCountryCode) + " -" + (data.d[i].FromMobileNumber) + "</b></div> </div>"
                                                + "<div class='row'><div class='col-lg-3'><b class='maroon'>Email:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].FromEmail + "</b></div> </div>"
                                                + "<div class='row' style='display:none;'><div class='col-lg-3'><b class='maroon'>OnlinePayment:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].FromonlinePayment + "</b></div> </div>"
                                                 + "<div class='row' style='display:none;'><div class='col-lg-3'><b class='maroon'>OfflinePayment:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].FromofflinePayment + "</b></div> </div>"
                                                  + "<div class='row' ></div>"
                                                + "<div class='row'><div class='col-lg-6'><b class='maroon'>Service Date</b></br><b>" + data.d[i].ServiceDate + "</b></div><div class='col-lg-6'><b class='maroon'>Proceed Date </b></br><b> " + strfromproceedDate + "</b></div></div></div></div></div>"

                                        + "</div><br /><div class='row'><div class='col-lg-12 col-lg-push-2' style='border:1px solid;border-color:orange;border-radius: 20px;width:81%;'>"

                                        + "<div id='Updatedivfrom" + totalrecords + "'>" + strfromRecentHistry + "</div>"

                                        + "</div></div><br/><div class='text-center'>"
                                                                                                                               // + "<button type='button'  id='lnkAddaction" + totalrecords + "' onclick='BindPopupTickethistry(" + JSON.stringify(data.d[i].FromTicket) + "," + JSON.stringify(data.d[i].fromticketid) + "," + JSON.stringify(data.d[i].FromTicketStatus) + "," + JSON.stringify(data.d[i].FromTicketOpenedOn) + "," + JSON.stringify(data.d[i].FromTicketCategory) + "," + JSON.stringify(data.d[i].FromTicketAssignedEmpID) + "," + JSON.stringify(data.d[i].FromTicketPendingWith) + "," + JSON.stringify(totalrecords) + "," + data.d[i].FromMobileNumber + "," + JSON.stringify("Updatedivfrom") + "," + JSON.stringify("lnkAddaction") + ")' class='btn btn-success-outline'>" + data.d[i].fromticketid + "</button>"
                                               + fromResendMail
                                                + "<button type='button' data-toggle='popover'  data-placement='top' onclick='return TicketHistry(" + JSON.stringify(data.d[i].FromTicket) + "," + JSON.stringify('popover') + ");' class='btn btn-success-outline col-lg-offset-2'>Ticket history</button>"
                                            + "</div></div><div class='col-lg-6' style='border-radius: 20px;;border-left:1px solid maroon;'><div><div class='row'><div class='col-lg-8 col-lg-push-2'><div class='text-center' style='padding-bottom: 5px;'><br/>" + strtoserviceCountlink + "</div><input type='image' id='tocustimg" + totalrecords + "' onclick='return getimgPath(" + JSON.stringify(data.d[i].tocustid) + "," + JSON.stringify(data.d[i].Toprofileid) + "," + data.d[i].PhotoCountnew + ")' src='" + data.d[i].Photonew + "' alt='' class='center-block img-thumbnail' style='border: 1px solid gray;' /><div class='text-center'></br> <div class='row'><div class='col-lg-10'><b>" + data.d[i].ToName + " (<a href='javascript:void(0)' onclick=ViewProfilewithvalue(" + JSON.stringify(data.d[i].Toprofileid) + ");>" + data.d[i].Toprofileid + "</a> - " + data.d[i].ToBranchCode + ")</b></div><div class='col-lg-2'>" + strToheart + "</div></div><div class='row'><div class='col-lg-3'><b class='maroon'>Mobile:</b> </div><div class='col-lg-9'><b class=''>" + (data.d[i].ToMobileCountryCode) + " -" + data.d[i].ToMobileNumber + "</b></div> </div>"
                                            + " <div class='row'><div class='col-lg-3'><b class='maroon'>Email:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].TOEmail + "</b></div> </div>"
                                              + "<div class='row' style='display:none;'><div class='col-lg-3'><b class='maroon'>OnlinePayment:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].ToonlinePayment + "</b></div> </div>"
                                                 + "<div class='row' style='display:none;'><div class='col-lg-3'><b class='maroon'>OfflinePayment:</b> </div><div class='col-lg-9'><b class=''>" + data.d[i].ToofflinePayment + "</b></div> </div>"
                                                  + "<div class='row' > </div>"
                                          + "<div class='row'><div class='col-lg-6'><b class='maroon'>Service Date</b></br><b>" + data.d[i].ServiceDate + "</b></div><div class='col-lg-6'><b class='maroon'>Proceed Date </b></br><b> " + strToproceedDate + "</b></div></div>  </div>"
                                                    + "</div><div class='col-lg-3 col-lg-push-2'> <div><img src='" + toemployeeimg + "' height='57px' width='57px' />"
                                                    + "</div><div class='row'>" + data.d[i].toempname + "</div><br/><div class='clearfix'><button type='button' class='btn btn-success-outline row' style='height: 26px; padding: 3px;' onclick='return sendSms(" + JSON.stringify(data.d[i].ToMobileNumber) + "," + JSON.stringify(data.d[i].ToName) + "," + JSON.stringify(data.d[i].TOEmail) + "," + JSON.stringify(data.d[i].ToMobileCountryCode) + "," + JSON.stringify(data.d[i].ToTicket) + "," + JSON.stringify(data.d[i].Toticketid) + "," + JSON.stringify(totalrecords) + "," + JSON.stringify("Updatedivto") + "," + JSON.stringify("lnkAddactionTo") + ");'>Send Sms</button></div><div class='clearfix'></div><br/>"

                                                    + "<div class='clearfix'><button type='button' class='btn btn-success-outline row' style='height: 26px; padding: 3px;' onclick='return sendMail(" + JSON.stringify(data.d[i].Toprofileid) + "," + JSON.stringify(data.d[i].ToTicket) + "," + JSON.stringify(data.d[i].Toticketid) + "," + JSON.stringify(totalrecords) + "," + JSON.stringify("Updatedivto") + "," + JSON.stringify("lnkAddactionTo") + "," + JSON.stringify(data.d[i].tocustid) + "," + JSON.stringify(data.d[i].fromcust_id) + "," + JSON.stringify(data.d[i].FromticketStatusID) + "," + JSON.stringify(data.d[i].ToName) + "," + JSON.stringify(data.d[i].TOEmail) + "," + JSON.stringify(data.d[i].FromProfileid) + ");'>Send Email</button></div><div class='clearfix'></div><br/>"
                                                    + "<div class='clearfix'>" + ToSApathclass + "</div><br/>"
                                                    + "<div class='clearfix'><button type='button'   class='btn btn-success-outline row' style='height: 26px; padding: 3px;' onclick='return Contactpage(" + data.d[i].tocustid + ");'>View Contacts</button></div><div class='clearfix'></div></div></div>"

                                        + "</div><br /><div class='row'><div class='col-lg-12 col-lg-push-2' style='border:1px solid;border-color:orange;border-radius: 20px;width:81%;'>"
                                       + "<div id='Updatedivto" + totalrecords + "'>" + strToRecentHistry + "</div>"
            //<div class='col-lg-3'>" + data.d[i].Toticketid + "</div>
                                            + "</div></div><br/><div class='text-center'>"
                                            //+ "<button type='button' id='lnkAddactionTo" + totalrecords + "' onclick='BindPopupTickethistry(" + JSON.stringify(data.d[i].ToTicket) + "," + JSON.stringify(data.d[i].Toticketid) + "," + JSON.stringify(data.d[i].ToTicketStatus) + "," + JSON.stringify(data.d[i].ToTicketOpenedOn) +
//"," + JSON.stringify(data.d[i].ToTicketCategory) + "," + JSON.stringify(data.d[i].ToTicketAssignedEmpID) + "," + JSON.stringify(data.d[i].ToTicketPendingWith) + "," + JSON.stringify(totalrecords) + "," + data.d[i].ToMobileNumber + "," + JSON.stringify("Updatedivto") + "," + JSON.stringify("lnkAddactionTo") + ");' class='btn btn-success-outline'>" + data.d[i].Toticketid + "</button>"

+ toResendMail
  + "<button type='button'  data-toggle='popover1' data-placement='top' class='btn btn-success-outline col-lg-offset-2' onclick='return TicketHistry(" + JSON.stringify(data.d[i].ToTicket) + "," + JSON.stringify('popover1') + ");'>Ticket history</button>"
                                            + "</div></div><br /><br /><br /></div><br /><br /> <div id='divtickethistry' class='container' style='display:none;border:1px solid;border-color:orange;border-radius:20px;'></div></div>"
            );
            document.getElementById("fromcustimg" + totalrecords).disabled = (data.d[i].Photo).indexOf("noimage") == -1 ? false : true;
            document.getElementById("tocustimg" + totalrecords).disabled = (data.d[i].Photonew).indexOf("noimage") == -1 ? false : true;
        }
        //pauseifPlayVisible(CarouselID);
        if (CarouselID == "serviceprofilesCarousel") {
            pauseifPlayVisible(CarouselID, "PlayServicebtn", "PauseServicebtn");
        }
        else if (CarouselID == "BothsideCarousel") {
            pauseifPlayVisible(CarouselID, "playButton", "pauseButton");

        }
    }
    //}
    return false;
}

function showLatestHistory(matchfollowupStatusID, ticketdate, tickethistrydate) {
    if (matchfollowupStatusID != null) {
        if (tickethistrydate != '--') {

            return checkdates(ticketdate, tickethistrydate);
        }
        else {
            return 'ticketdate';

        }
    }
    else if (tickethistrydate != '--') {

        return 'tickethistrydate';
    }
    else {

        return 'nodata';
    }


}

function checkdates(ticketdate, tickethistrydate) {
    if (moment(ticketdate) > moment(tickethistrydate)) {
        return 'ticketdate';
    }
    else {
        return 'tickethistrydate';
    }
}


function gotoSlide(e) {
    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#BothsideCarousel').carousel(parseInt($(e).val()) - 1);
    }
    else {

        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}



function BindPopupTickethistry(ticket, ticketid, TicketStatus, TicketOpenedOn, TicketCategory, TicketAssignedEmpID, TicketPendingWith, i, Custprimarymobile, updatedivid, lbladdactionid) {
    var strcalldiscussion = "Interested in your match we would like to know your opinion to proceed further";
    bindmasterdata();
    $("#ddlreplytypeout").multiselect('select', [5]);
    $('#ddlreceivedby').multiselect('select', [39]);
    $('#txtCalldiscussionout').val(strcalldiscussion);
    $('#lblTicketID').html(ticketid);
    $('#lblticket').html(ticket);
    $('#lblStatus').html(TicketStatus);
    $('#lblOpened').html(TicketOpenedOn);
    $('#lblCatgory').html(TicketCategory);
    $('#lblAssigned').html(TicketAssignedEmpID);
    $('#lblPending').html(TicketPendingWith);
    $('#txtCalltelephonenumber').val(Custprimarymobile);
    $('#txtCalltelephonenumberout').val(Custprimarymobile);
    $('#lblupdatedivid').text(updatedivid);
    $('#lbladdactionid').html(lbladdactionid);
    $('#lblticketcount').html(i);
    $('#txtCalldiscussionout').val(strcalldiscussion);
    $('#txtmemocalldiscussion').val(strcalldiscussion);
    $('#ActionPopup').modal({ backdrop: 'static', keyboard: false });
    pauseifPlayVisible("BothsideCarousel", "playButton", "pauseButton");
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkIncoming').addEventListener('click', function () {
        var methodnames = [{ methodname: "ChildStayingWith", dropdownname: "ddlreceivedfrom", ExistObj: datarelation },
{ methodname: "BothsideEmail", dropdownname: "ddlReplyType", ExistObj: datareplyType }
        ];

        binddropdowns(methodnames, 'ddlreceivedfrom');

        $("#ddlReplyType").multiselect('select', [5]);
        $('#ddlreceivedfrom').multiselect('select', [39]);
        $('#txtCalldiscussionin').val('Interested in your match we would like to know your opinion to proceed further');


    }, false);
}, false);


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkmemo').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlempmemo", ExistObj: dataEmp }, { methodname: "BothsideEmail", dropdownname: "ddlreplytypememo", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlempmemo');
        $('#txtmemocalldiscussion').val('Interested in your match we would like to know your opinion to proceed further');
        $("#ddlreplytypememo").multiselect('select', [5]);
        $('#ddlempmemo').multiselect('select', [empidObj]);
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkcloseticket').addEventListener('click', function () {
        var methodnames = [{ methodname: "ReplyType", dropdownname: "ddlreplytypeCloseticket", ExistObj: closeticket }];
        binddropdowns(methodnames, 'ddlreplytypeCloseticket');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkAssignticket').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlAssingnEmp", ExistObj: dataEmp }];
        binddropdowns(methodnames, 'ddlAssingnEmp');
    }, false);
}, false);
function binddropdowns(methodnamesArray, dropdownid) {
    if ($('#' + dropdownid).has('option').length == 0) {

        var methodnames = methodnamesArray;
        for (var i = 0; i < methodnames.length; i++) {
            checkBindObject(methodnames[i].ExistObj, methodnames[i].methodname, methodnames[i].dropdownname);
        }
    }
    else { }

}
function bindmasterdata() {
    
    var Bindings = {
        Masterbind: {
            Relationship: "ChildStayingWith",
            replyType: "BothsideEmail",
            OnlyEmpname: "EmpnameswithNoCondition",
            bothsidemail: "BothsideEmail"

        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);

    var replyddl = [], SmsReplyType = [];

    _.each(data.d.replyType, function (item) {
        _.each(item.value.split(','), function (inneritem, index) {
            if (index == 0) {
                replyddl.push({ value: inneritem, Id: item.Id });
                datareplyType.push({ label: inneritem, title: inneritem, value: item.Id });
            }
            else
                replycontext.push({ label: inneritem, title: inneritem, value: item.Id });
        });
    });
    _.each(data.d.OnlyEmpname, function (item) {
        dataEmp.push({ label: item.value, title: item.value, value: item.Id });
    });
    var methodnamesnew = [{ methodname: "ChildStayingWith", dropdownname: "ddlreceivedby", data: data.d.Relationship },
    { methodname: "BothsideEmail", dropdownname: "ddlreplytypeout", data: replyddl },
{ methodname: "BothsideEmail", dropdownname: "lstmails", data: replyddl }];

    for (var i = 0; i < methodnamesnew.length; i++) {
        GetmasterDataNew(methodnamesnew[i].methodname, methodnamesnew[i].dropdownname, methodnamesnew[i].data);

        if (methodnamesnew[i].methodname = "ChildStayingWith") {
            _.each(data.d.Relationship, function (item) {
                datarelation.push({ label: item.value, title: item.value, value: item.Id });
            });
        }


    }
}

function bindCalldiscussion(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);

}

var datain;
function returnCurentdate() {

    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    return currentdate;
}
function submitInCalls() {

    if ($('#ddlreceivedfrom').val() == 0 || $('#ddlCallresult').val() == 0 ||
         $('#ddlReplyType').val() == 0 || $('#txtRelationname').val() == '' || $('#txtCalltelephonenumber').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {

        var currentdate = returnCurentdate();
        datain = {
            Mobj: {
                CallType: 1,
                Calledon: currentdate,
                RelationID: $('#ddlreceivedfrom option:selected').val(),
                RelationName: $('#txtRelationname').val(),
                CallResult: $('#ddlCallresult option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtCalltelephonenumber').val(),
                //ReplyType: $('#ddlReplyType option:selected').val(),
                CallDiscussion: $('#txtCalldiscussionin').val(),
                DisplayStatus: $("input:radio[name='displaycustomer']:checked").val(),
                TicketID: $('#lblticket').text(),
                EmpID: empidObj

            }
        }

        var status = CallApi("SubmitIncomingCall", datain);

        var idcount = $("#lblticketcount").text();
        var updatedivid = $('#lblupdatedivid').text();
        var lbladdactionid = $('#lbladdactionid').text();
        var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
        var popupticketid = $('#lblTicketID').text();
        statusAlert(status.d, 'ActionPopup', 'Incoming Call Created successfully', 'Incoming Call updation failed');

        if (parseInt(status.d) == parseInt(1)) {
            var callreceivedby = $('#txtRelationname').val() + "(" + getvaluestext('#ddlreceivedfrom') + ")";
            if (divticketid == popupticketid) {
                var appenddiv = returnhtml("INCOMING", currentdate, empNameObj, $("#ddlCallresult option:selected").text(),
                     callreceivedby, $('#txtCalldiscussionin').val(), "", "", "");

                $("#" + updatedivid + "" + idcount + "").html(appenddiv);

            }

        }
        cleartxtboxes('txtRelationname');
        cleartxtboxes('txtCalltelephonenumber');
        cleartxtboxes('txtCalldiscussionin');
        $("#ddlCallresult option:selected").removeAttr("selected");
        Resetforradiobuttons("displaycustomer");
        cleartxtboxes('txtRelationnameout');

    }
    return false;

}

function submitOutCalls() {
    if ($('#ddlreceivedby').val() == 0 || $('#ddlcallresultout').val() == 0
   || $('#ddlreplytypeout').val() == 0 || $('#txtRelationnameout').val() == '' || $('#txtCalltelephonenumberout').val() == '') {
        DynamicTimeAlert('Please enter all mandatory values', 'alert alert-danger', 4000);
    }
    else {
        var currentdate = returnCurentdate();
        datain = {
            Mobj: {
                CallType: 2,
                Calledon: currentdate,
                RelationID: $('#ddlreceivedby option:selected').val(),
                RelationName: $('#txtRelationnameout').val(),
                CallResult: $('#ddlcallresultout option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtCalltelephonenumberout').val(),
                //ReplyType: $('#ddlreplytypeout option:selected').val(),
                CallDiscussion: $('#txtCalldiscussionout').val(),
                DisplayStatus: $("input[name='displaycustomerout']:checked").val(),
                TicketID: $('#lblticket').text(),
                EmpID: empidObj
            }
        }

        var status = CallApi("SubmitIncomingCall", datain);
        var idcount = $("#lblticketcount").text();
        var updatedivid = $('#lblupdatedivid').text();
        var lbladdactionid = $('#lbladdactionid').text();
        var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
        var popupticketid = $('#lblTicketID').text();
        statusAlert(status.d, 'ActionPopup', 'Outgoing Call Created successfully', 'Outgoing Call updation failed');
        if (parseInt(status.d) == parseInt(1)) {
            var callreceivedby = $('#txtRelationnameout').val() + "(" + getvaluestext('#ddlreceivedby') + ")";
            if (divticketid == popupticketid) {
                var appenddiv = returnhtml("OUT GOING", currentdate, empNameObj, $("#ddlcallresultout option:selected").text(),
                     callreceivedby, $('#txtCalldiscussionout').val(), "", "", "");

                $("#" + updatedivid + "" + idcount + "").html(appenddiv);

            }

        }
        cleartxtboxes('txtRelationnameout');
        cleartxtboxes('txtCalltelephonenumberout');
        cleartxtboxes('txtCalldiscussionout');
        Resetforradiobuttons("displaycustomerout");

    }
    return false;

}

function submitMemo() {
    if ($('#ddlempmemo').val() == 0 || $('#txtmemocalldiscussion').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                AssignedEmpID: $('#ddlempmemo option:selected').val(),
                TicketID: $('#lblticket').text(),
                EmpID: empidObj,
                Message: $('#txtmemocalldiscussion').val()
            }
        }
        var currentdate = returnCurentdate();
        var status = CallApi("SubmitMemo", datain);
        var idcount = $("#lblticketcount").text();
        var updatedivid = $('#lblupdatedivid').text();
        var lbladdactionid = $('#lbladdactionid').text();
        var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
        var popupticketid = $('#lblTicketID').text();
        statusAlert(status.d, 'ActionPopup', 'Memo Created successfully', 'Memo updation failed');
        if (parseInt(status.d) == parseInt(1)) {
            if (divticketid == popupticketid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                    "", $('#txtmemocalldiscussion').val(), "", "", "");

                $("#" + updatedivid + "" + idcount + "").html(appenddiv);

            }

        }
        cleartxtboxes('txtmemocalldiscussion');

    }
    return false;
}

function submitCloseTicket() {
    if ($('#txtclosecalldiscusn').val() == '') {
        DynamicTimeAlert('Please enter reason for closing this ticket', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                TicketID: $('#lblticket').text(),
                EmpID: empidObj,
                ReasonforClose: $('#txtclosecalldiscusn').val()
            }
        }
        var currentdate = returnCurentdate();
        var status = CallApi("SubmitCloseticket", datain)
        var idcount = $("#lblticketcount").text();
        var updatedivid = $('#lblupdatedivid').text();
        var lbladdactionid = $('#lbladdactionid').text();
        var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
        var popupticketid = $('#lblTicketID').text();
        statusAlert(status.d, 'ActionPopup', 'Ticket closed successfully', 'Ticket closing failed');
        if (parseInt(status.d) == parseInt(1)) {
            if (divticketid == popupticketid) {
                var appenddiv = returnhtml("Close", currentdate, empNameObj, "",
                      "", $('#txtclosecalldiscusn').val(), "", "", "");

                $("#" + updatedivid + "" + idcount + "").html(appenddiv);

            }

        }
        cleartxtboxes('txtclosecalldiscusn');

    }
    return false;
}


function submitAssignTicket() {

    if ($('#ddlAssingnEmp').val() == 0) {
        DynamicTimeAlert('Please select Staff name', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                EmpID: empidObj,
                AssignedEmpID: $('#ddlAssingnEmp option:selected').val(),
                TicketID: $('#lblticket').text(),
                StatusID: 1

            }
        }
        var status = CallApi("SubmitReAssignticket", datain);
        var currentdate = returnCurentdate();
        var idcount = $("#lblticketcount").text();
        var updatedivid = $('#lblupdatedivid').text();
        var lbladdactionid = $('#lbladdactionid').text();
        var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
        var popupticketid = $('#lblTicketID').text();
        statusAlert(status.d, 'ActionPopup', 'Ticket closed successfully', 'Ticket closing failed');
        if (parseInt(status.d) == parseInt(1)) {
            if (divticketid == popupticketid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                      "", "Reassign to " + getvaluestext('#ddlAssingnEmp'), "", "", "");

                $("#" + updatedivid + "" + idcount + "").html(appenddiv);

            }

        }
    }
    return false;
}

function TicketHistry(ticketId, classname) {

    datain = {
        Mobj: {
            TicketID: ticketId,
        }
    }
    var datath = CallApi("TicketHistory", datain)
    $('#divpop').html('');
    if (datath.d.length > 0) {
        $('#divpop').html('');
        for (var i = 0; i < datath.d.length; i++) {

            var strHistry = returnhtml(datath.d[i].TicketType, datath.d[i].ReplayDate, datath.d[i].Empname, datath.d[i].CallStatus, datath.d[i].CustName, datath.d[i].comments, datath.d[i].NoOfDays, datath.d[i].MatchmeetingStatus, datath.d[i].MatchMeetingReason);

            $('#divpop').append(strHistry + "<br/>");
        }
    }

    $('[data-toggle="' + classname + '"]').popover({
        html: true,
        title: "Ticket History<a class='pull-right' href='javascript:void(0);' onclick='Close(" + JSON.stringify(classname) + ");' style='font-size: 21px;color:Red;' >&times;</a>",
        content: function () {
            return $('#divpop').html();
        }

    });

    return false;
}

$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        title: "Ticket History<a  class='pull-right' style='font-size: 21px;color:Red;'  href='javascript:void(0);' onclick='Close(" + JSON.stringify('popover') + ");'>&times;</a>",
        content: function () {
            return $('#divpop').html();
        }
    });

});
$(function () {
    $('[data-toggle="popover1"]').popover({
        html: true,
        title: "Ticket History<a class='pull-right' style='font-size: 21px;color:Red;' href='javascript:void(0);' onclick='Close(" + JSON.stringify('popover1') + ");'>&times;</a>",
        content: function () {
            return $('#divpop').html();
        }
    });

});


function Close(className) {
    $('[data-toggle="' + className + '"]').popover('hide');
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

function showonlyforAdmin() {
    
    if (Managementid == 1) {
        var Bindings = {
            Masterbind: {
                Branch: "Branch",
                Region: "onlyRegionmaster",
                BranchWithEmp: "BranchWithEmp",

            }
        }
        var data = CallApi("CommonPopulateDropDownList", Bindings);
        var methodnames = [
           { methodname: "Branch", dropdownname: "lstbranch", data: data.d.Branch },
            { methodname: "BranchWithEmp", dropdownname: "lstempSlide", data: data.d.BranchWithEmp },
            { methodname: "onlyRegionmaster", dropdownname: "ddlregion", data: data.d.Region }
        ];
        for (var i = 0; i < methodnames.length; i++) {
            GetmasterDataNew(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
        }
        $('#lstempSlide').multiselect('select', [empidObj]);
    }
}
var defaultclass = "btn btn-default buttoncls", successclass = "btn btn-success buttoncls";

function botheOneClick(e, firstbtn, secondbutton, thirdbutton, fourthbtn, fithbtn, flag, flagClose) {
    $("#BothsideCarousel").carousel("pause").removeData();
    spflag = flag;

    closeflag = flagClose;
    $('#' + firstbtn).removeAttr('class').addClass(defaultclass);
    $('#' + secondbutton).removeAttr('class').addClass(defaultclass);
    $('#' + thirdbutton).removeAttr('class').addClass(defaultclass);
    $('#' + fourthbtn).removeAttr('class').addClass(defaultclass);
    $('#' + fithbtn).removeAttr('class').addClass(defaultclass);
    $("#" + e.id).removeAttr('class').addClass(successclass);
    //showonlyforAdmin();
    $("#BothsideCarousel .carousel-inner").html('');
    $('#lblcurSlide').text(0);
    $('#lblcurrentprofile').text(0);
    pagenum = 0;
    servicecustid = null;
    bindbothOneSlideshow("BothsideCarousel", "lblcurrentprofile", "lblcurSlide");
    $("#lnkLastSlide").text(1);
    $("#txtGotoVal").val('');
    $('#playButton').show();
    $('#pauseButton').hide();
    pauseifPlayVisible("BothsideCarousel", "playButton", "pauseButton");
    checkitemnew("BothsideCarousel");
    $('.num').html('Profile ' + '' + 1);
    $("#lstempSlide").multiselect('select', [empidObj]);
    $('.carousel-control.left').attr('style', 'display:none;');
    $('.carousel-control.right').attr('style', 'display:block;');
    return false;
}

$('#btnsubmitSlide').click(function () {
    $('#lblcurSlide').text(0);
    $('#lblcurrentprofile').text(0);
    servicecustid = null;
    $("#BothsideCarousel .carousel-inner").html('');
    pagenum = 0;
    bindbothOneSlideshow("BothsideCarousel", "lblcurrentprofile", "lblcurSlide");
    $("#lnkLastSlide").text(1);
    $('.carousel-control.left').attr('style', 'display:none;');
    $('.carousel-control.right').attr('style', 'display:block;');
    return false;
});


function cleartxtboxes(txtid) {
    $('#' + txtid).val('');
}

function pauseifPlayVisible(carouselID, playButtonID, pauseButtonID) {
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

function checkBindObject(dataEmp1, masterrname, dropdownname) {

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

                    }

                }
            });
        }

    }

    $('#' + dropdownname + '').multiselect('dataprovider', option);
    $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSetSingleSelect);
    $('#' + dropdownname + '').multiselect('rebuild');

}

function Contactpage(custid) {

    var QueryStringEdit = "CustID=" + custid + "&EmpID=" + GetEmpid() + "&Admin=" + GetAdmin() + "&owner=" + GetOwner(custid) + "";
    window.open('EmployeeEditContacts.aspx?' + QueryStringEdit, '_blank');
    return false;
}
function GetOwner(custid) {
    var owner;
    var object = { 'custid': '' + custid + '' };
    var data = CallApi("ownerid", object);
    owner = data.d;
    return owner;
}

function Settlementfom(profileid, imageurl) {
    var saimgurl = imageurl.substr(0, 0) + imageurl.substr(0 + 2);
    commonpopupmethod("SettlementForm", saimgurl);

    return false;

}

$(function () {
    $('input:radio[name="Sendsms"]').change(function () {

        var selectval = $(this).val();
        var test = _.where(smsArr, { id: parseInt(selectval) });

        $('#txtval').val(test[0].text);
    });
    return false;
});

function bindCalldiscussionnew(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);

}
function ShowServiceprofile(custid) {
    pagenum = 0;
    servicecustid = custid;
    $('#lblcurrentservice').text(0);
    $('#lblTotalservice').text(0);
    $("#serviceprofilesCarousel .carousel-inner").html("");
    $("#serviceprofilesCarousel").carousel("pause").removeData();
    $('#serviceprofilesCarousel').carousel('pause');
    pageload("serviceprofilesCarousel", "lblcurrentservice", "lblTotalservice");
    $('#ServiceSlidepopup').modal({ backdrop: 'static' });
    $('#serviceprofilesCarousel .carousel-control.left').attr('style', 'display:none;');
    $('#serviceprofilesCarousel .carousekl-control.right').attr('style', 'display:block;');
    return false;
}
