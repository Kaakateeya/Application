'use strict'
var currentslide, datain = {}, totalItems, count = 0, loader = 0, SelfData, empidObj, AdminObj, empNameObj, empMobObj, datareplyType = [], replycontext = [], replyddl = [], pageflag, SmsReplyType = [];
var flagserves = "", profileidflag = "", datareplyTypemar = [];
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

//start pageload
$(function () {
    BindBasedOnDiv('div3', 'ddlremCaltype');
    getnumberbind("ddlHrs", 0, 23, 'Hrs', 1);
    getnumberbind("ddlmins", 0, 59, 'Mins', 1);
    getnumberbind("ddlremCaltype", undefined, undefined, '--Select--', undefined, 'calltype');
    var datainput = {
        Mobj:
            {
                i_isAdmin: 1,
                i_EmpID: 2,
                i_PageFrom: 1,
                i_PageTo: 10,
                v_MarketremindeFlag: 1,
                v_siblingflag: 0,
                v_guestticketflag: 0,
                v_OnlineExprd: 0,
                v_OfflineExprd: 0
            }
    };
    var empdetails = CallApi("EmployeeMarketingSlideshow.aspx/getEmpidloginAdminempnamemobile", {});
    empidObj = empdetails.d.Item1;
    AdminObj = empdetails.d.Item2;
    empNameObj = empdetails.d.Item3;
    empMobObj = empdetails.d.Item4;

});
//end pageload

var obj = {
    PageType: 'matchfollowup',
    CarousalID: 'myCarousel',
    ShowShortList: false,
    FromCustID: undefined,
    FromProfileID: undefined,
    lblTotalRecordsID: 'lblnoofrecords',
    InputObject: {},
    api: undefined,
    SelfDataApi: 'EmployeeGeneralSearchLatest.aspx/GetPrimaryDataCustomerAllPrimaryInfo',
    EmpId: null,
    showslidwinpopup: false,
    BackToSearch: false,
    PartnerPreferenceLink: false,
    SearchLink: false,
    ContactLink: false,
    resultArray: [],
    ServiceCountCust_ID: undefined,
    MarketFlag: undefined,
    siblingsflag: 2,
    DynamicHeader: false
};

var ShortlistObj = {
    CarousalID: 'ShortlistCarousal',
    lblTotalRecordsID: 'lblnoofrecords',
    InputObject: { ShortListedCustIDs: '91022,91035' },
    api: 'EmployeeGeneralSearchLatest.aspx/GetShorlistedProfiles',
    EmpId: null,
    resultArray: []
};
var StaticArray = { general: {}, MatchFollowUp: {}, Marketing: {} };

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

function property(type, strproperty) {
    debugger;
    var str = (strproperty == undefined ? '' : '  ' + type + '=' + JSON.stringify(strproperty));
    return str;
}

function label(val, style, classname, id) {
    var lbl = "<label " + property('class', classname) + " " + property('style', style) + "  " + property('id', id) + ">" + (val == undefined ? '' : val) + "	</label>";
    return lbl;
}
function select(ID, className) {
    var sel = "<select class='" + className + "' id=" + ID + " style='font-weight: bold;'></select>";
    return sel;
}
function input(ID, className, type) {
    type = type == undefined ? 'text' : type;
    var inp = "<input type=" + type + " class=" + className + " id=" + ID + " />";
    return inp;
}

function shortlistControls(id, className, displayText, title, onclick) {

    var str = "<li class='col-lg-2' style='margin-top: 12px;'>"
        + "<a property('id', id) data-toggle='tooltip' href='javascript:void(0);' " + property('onclick', onclick) + ""
        + "data-original-title='" + title + "' style='Font-Size: 18px;'>"
        + "<span " + property('class', className) + ">" + (displayText == undefined ? '' : displayText) + "</span> </a>"
        + "</li>";
    return str;
}

function hideShowControls(HideArrControls, booltype) {
    _.each(HideArrControls, function (item) {
        if (booltype == true)
            $('#' + item).show();
        else
            $('#' + item).hide();
    });
}

function PageDesign(Inputobject) {
    debugger;
    $('#GlobalSliderDiv').show();

    _.each(_.keys(Inputobject), function (item) {

        if (_.contains(_.keys(obj), item)) {
            obj[item] = Inputobject[item];
        }
    });
    obj.resultArray = CallApi(obj.api, obj.InputObject);
    console.log(obj.resultArray);
    var Btns = $('#' + obj.CarousalID).next().attr("id");
    var CarousalID = obj.CarousalID;
    var gen = StaticArray.general;
    if (CarousalID == 'myCarousel') {
        if (obj.DynamicHeader == false) {
            $('#PhotoPopupSlde #MycarousalHeader').append(gen.GetHeaderDiv(false));
        }
        obj.ShowShortList == true ? ($("<div class='progress' id='progessDiv' style='text-align: center; margin: 4px; border-radius: 4px;'></div>").insertAfter($("#MycarousalHeader"))) : "";
    }
    else if (CarousalID == 'PopupCarousal') {
        $('#CommonPopupslide #CommonPopupheader').html("");
        $("").insertAfter($("#CommonPopupheader"));
        if (obj.DynamicHeader == false) {
            $('#CommonPopupslide #CommonPopupheader').append(gen.GetHeaderDiv(obj.ShowShortList));
        }
        $("<div class='progress' id='progessDiv' style='text-align: center; margin: 4px; border-radius: 4px;'></div>").insertAfter($("#MycarousalHeader"));
    }
    if ((obj.FromCustID != undefined && obj.FromCustID != null) && (obj.FromProfileID != undefined && obj.FromProfileID != null) && (obj.ShowShortList == true)) {
        SelfData = CallApi(obj.SelfDataApi, { Request: { ProfileID: obj.FromProfileID, Empid: empidObj } });

        $('#lnkprofileidfrom').text("(" + SelfData.d.ProfileID + ")");
        $('#lblNamefrom').text(SelfData.d.SelfName != "" ? SelfData.d.SelfName : "");
        hideShowControls(['lnkshortlistpopup', 'lnkPatnerprefercencedata', 'imgfrompic'], true);
    }
    else {
        hideShowControls(['lnkshortlistpopup', 'lnkPatnerprefercencedata', 'imgfrompic'], false);
    }
    hideShowControls(['lnkbacktoSearch'], obj.BackToSearch == true ? true : false);
    var totalrows;
    $('#lblnoofrecords').text(totalrows);
    switch (obj.PageType.toLowerCase()) {
        case 'matchfollowup':
            'use strict'
            if (CarousalID == 'myCarousel') {
                Slidepageload(obj.CarousalID, "lblcurSlide", "lblnoofrecords", "lnkLastSlide", $('#' + Btns).find('button').attr("id"), $('#' + Btns).find('button').next().attr("id"), obj.resultArray.d != undefined && obj.resultArray.d[0] != undefined ? obj.resultArray.d[0].TotalRows : 0);
            }
            else {
                Slidepageload('PopupCarousal', undefined, undefined, undefined, "PopupCarousalPlayBtn", "PopupCarousalPauseBtn", obj.resultArray.d != undefined && obj.resultArray.d[0] != undefined ? obj.resultArray.d[0].TotalRows : 0);
            }


            pageflag = 'Bothone';
            CarousalID = (obj.ServiceCountCust_ID != undefined && obj.ServiceCountCust_ID != null) ? 'PopupCarousal' : CarousalID;

            var totalrecords;
            var pageidcount = $('#' + CarousalID).find('.item').length;
            if (CarousalID != "myCarousel") {
                obj.ServiceCountCust_ID = null;
            }
            _.each((obj.resultArray).d, function (item) {
                var currentdate = new Date();
                currentdate = moment(currentdate).format("YYYY-MM-DD");
                var FromOfflineExpiryDate = moment(currentdate).isAfter(moment(item.FromOfflineExpiryDate).format("YYYY-MM-DD")) || item.FromofflineDetails == "Offline : Unpaid" ? "color:maroon;" : "";
                var FromOnlineMembershipExpiryDate = moment(currentdate).isAfter(moment(item.FromOnlineMembershipExpiryDate).format("YYYY-MM-DD")) || item.FromonlineDetails == "Online : Unpaid" ? "color:maroon;" : "";
                var ToOfflineExpiryDate = moment(currentdate).isAfter(moment(item.ToOfflineExpiryDate).format("YYYY-MM-DD")) || item.TofflineDetails == "Offline : Unpaid" ? "color:maroon;" : "";
                var ToonlineExpiryDate = moment(currentdate).isAfter(moment(item.ToonlineExpiryDate).format("YYYY-MM-DD")) || item.ToonlineDetails == "Online : Unpaid" ? "color:maroon;" : "";
                pageidcount = pageidcount + 1;
                totalrecords = CarousalID + pageidcount;
                var strfromheart = $.trim(item.FromticketStatusIDb) == 'I' ? "<img  src='../../Images/heartgrren.gif' style='width:28px;'/>" : (item.FromticketStatusIDb == 'NI' ? "<img  src='../../Images/brk%20hrt_2_green.gif' style='width:28px;'/>" : '');
                var strToheart = $.trim(item.ToticketStatusIDb) == 'I' ? "<img  src='../../Images/heartgrren.gif' style='width:28px;'/>" : (item.ToticketStatusIDb == 'NI' ? "<img  src='../../Images/brk%20hrt_2_green.gif' style='width:28px;'/>" : '');
                var fromSApathclass = (item.FromSaPath != null && item.FromSaPath != '') ? 'btn btn-success-outline row' : 'btn btn-success-outline row Linkdisabledforsaform maroon';
                var ToSApathclass = (item.ToSaPath != null && item.ToSaPath != '') ? 'btn btn-success-outline row' : 'btn btn-success-outline row Linkdisabledforsaform maroon';
                var rvrrend = item.ISRvrSend == 1 ? "Resend Email" : "Rvr Send";
                var fromResendMail = (item.FromTicket != null && item.FromTicket != "") ? "<button type='button'  id='lnkAddaction" + totalrecords + "' onclick='ticketidaction(" + JSON.stringify(item.FromTicket) + "," + JSON.stringify('Updatedivfrom') + "," + JSON.stringify(totalrecords) + "," + JSON.stringify(item.FromProfileid) + "," + JSON.stringify(item.FromMobileNumber) + ");' class='btn btn-success-outline'>" + item.fromticketid + "</button>" : "<div class='row'><div class='col-lg-3'><button type='button'  id='lnkAddaction" + totalrecords + "' onclick='return ResendMail(" + JSON.stringify(item.fromcust_id) + "," + JSON.stringify(item.tocustid) + "," + JSON.stringify(item.FromProfileid) + "," + JSON.stringify(item.Toprofileid) + "," + JSON.stringify(FromOfflineExpiryDate) + "," + JSON.stringify(FromOnlineMembershipExpiryDate) + "," + JSON.stringify(item.FromEmail) + ");' class='btn btn-success-outline'>" + rvrrend + "</button></div><div class='col-lg-9'><label style='" + FromOfflineExpiryDate + "'>" + item.FromofflineDetails + "</label><br><label style='" + FromOnlineMembershipExpiryDate + "'>" + item.FromonlineDetails + "</label></div></div></br></br><button type='button'  id='lnkmarketingaction" + totalrecords + "' onclick='marketingaction(" + JSON.stringify(item.FromTicket) + "," + JSON.stringify('Updatedivfrom') + "," + JSON.stringify(totalrecords) + "," + JSON.stringify(item.FromProfileid) + "," + JSON.stringify(item.FromMobileNumber) + ");' class='btn btn-success-outline'>Marketing Ticket</button>";
                var toResendMail = (item.ToTicket != null && item.ToTicket != "") ? "<button type='button' id='lnkAddactionTo" + totalrecords + "' onclick='ticketidaction(" + JSON.stringify(item.ToTicket) + "," + JSON.stringify('Updatedivto') + "," + JSON.stringify(totalrecords) + "," + JSON.stringify(item.Toprofileid) + "," + JSON.stringify(item.ToMobileNumber) + ");' class='btn btn-success-outline'>" + item.Toticketid + "</button>" : "<div class='row'><div class='col-lg-3'><button type='button'  id='lnkAddactionTo" + totalrecords + "' onclick='return ResendMail(" + JSON.stringify(item.tocustid) + "," + JSON.stringify(item.fromcust_id) + "," + JSON.stringify(item.Toprofileid) + "," + JSON.stringify(item.FromProfileid) + "," + JSON.stringify(ToOfflineExpiryDate) + "," + JSON.stringify(ToonlineExpiryDate) + "," + JSON.stringify(item.TOEmail) + ");' class='btn btn-success-outline'>" + rvrrend + "</button></div><div class='col-lg-9'><label style='" + ToOfflineExpiryDate + "'>" + item.TofflineDetails + "</label><br><label style='" + ToonlineExpiryDate + "'>" + item.ToonlineDetails + "</label></div></div></br></br><button type='button' id='marketinginfo" + totalrecords + "' onclick='marketingaction(" + JSON.stringify(item.ToTicket) + "," + JSON.stringify('Updatedivto') + "," + JSON.stringify(totalrecords) + "," + JSON.stringify(item.Toprofileid) + "," + JSON.stringify(item.ToMobileNumber) + ");' class='btn btn-success-outline'>Marketing Ticket</button>";
                var mat = StaticArray.MatchFollowUp;
                if (flagserves != 1) {
                    var lblcurrentprofile = $('#lblcurrentprofile').text(item.TotalRows);
                }
                else {
                    $('#CommonPopupheader').html("<b style='color:black;'>Total Records:</b><span style='color:maroon;'><b>" + item.TotalRows + "</b></span>");
                }
                var strfromserviceCountlink = "", strtoserviceCountlink = "";
                var fromempnameArr = (item.fromempname).split('-');
                var toempnameArr = (item.toempname).split('-');
                if (CarousalID != "PopupCarousal") {
                    if (parseInt(item.FRomSerivceCount) > parseInt(1)) {
                        strfromserviceCountlink = "<a href='javascript:void(0);' onclick='return serviceCountProfiles(" + JSON.stringify(item.fromcust_id) + ");'> Proceed Other Profiles</a>";
                    }
                    if (parseInt(item.ToSerivceCount) > parseInt(1)) {
                        strtoserviceCountlink = "<a href='javascript:void(0);' onclick='return serviceCountProfiles(" + JSON.stringify(item.tocustid) + ");' > Proceed Other Profiles </a>";
                    }

                    if (strfromserviceCountlink == "") {
                        strfromserviceCountlink = strtoserviceCountlink != "" ? "<br/>" : "";
                    }
                    if (strtoserviceCountlink == "") {
                        strtoserviceCountlink = strfromserviceCountlink != "" ? "<br/>" : "";
                    }
                }
                var strfromcustRelation = (item.FromTicketHisoryCallReceivedBy) + (item.FromTicketHisoryRelationShip != '' ? " ( " + item.FromTicketHisoryRelationShip + " )" : "");

                var LeftmatchFollowup = "<div class='col-lg-6' style='border-radius: 20px; border-right: 1px solid maroon;'>"
    + "    <div>"
    + "        <div class='row'>"
                + "<div class='col-lg-3'>" + mat.Sidemenu((item.fromemp).replace("~/", "../../"), item.fromempname, item.fromcust_id, (item.FromMobileCountryCode + '-' + item.FromMobileNumber), item.FromName, item.FromEmail, item.FromMobileCountryCode, item.FromTicket, item.fromticketid, totalrecords, 'Updatedivfrom', 'lnkAddaction', item.FromProfileid, item.tocustid, item.FromticketStatusIDb, item.FromSaPath, item.Toprofileid, fromSApathclass) + "</div>"
                + "            <div class='col-lg-8'>"
                + "                <div style='padding-bottom: 5px;'>"
                + "                    <br>"

                 + strfromserviceCountlink
                + "                </div>"
                + "                <input id='fromcustimgBothsideCarousel1' onclick='return getimgPath(" + JSON.stringify(item.fromcust_id) + "," + JSON.stringify(item.FromProfileid) + "," + item.PhotoCount + ")' src='" + item.Photo + "' class='img-thumbnail' style='border: 1px solid gray;' type='image'>"
                + mat.MatchMidDiv(item.FromName, item.FromProfileid, item.FromBranchCode, item.FromEmail, item.FromMobileNumber, item.ServiceDate, item.FromTicketCreated, strfromheart)
                + "            </div>"
                + "        </div>"
                + "    </div>"
                + "    <br>"
                 + "    <div class='row'>"
                + "        <div class='col-lg-12 col-lg-push-2' style='border: 1px solid; border-color: orange; border-radius: 20px; width: 81%;'>"
                + "            <div id='Updatedivfrom" + totalrecords + "'>"
                + returnhtml(item.FromTicketHisoryType, item.FromTicketInfo, item.FromTicketHisoryNAME, item.FromTicketHisoryCallStatus, (item.FromTicketHisoryCallReceivedBy + ("(" + item.FromTicketHisoryRelationShip + ")")), item.FromTicketHisoryReplyDesc)
                + "</div></div></div>"
                + "<br>"
                + mat.matchButtons(fromResendMail, item.FromTicket, 'popover', item.FromProfileid)
                + "</div>";

                var strTocustRelation = (item.ToTicketHisoryCallReceivedBy) + (item.ToTicketHisoryRelationShip != '' ? " ( " + item.ToTicketHisoryRelationShip + " )" : "");
                var RightmatchFollowup = "<div class='col-lg-6' style='border-radius: 20px; border-left: 1px solid maroon;'>"
    + "    <div>"
    + "        <div class='row'>"
    + "            <div class='col-lg-8 col-lg-push-2'>"
    + "                <div class='text-center' style='padding-bottom: 5px;'>"
    + "                    <br>"
      + strtoserviceCountlink
    + "                </div>"
    + "                <input id='tocustimg' onclick='return getimgPath(" + JSON.stringify(item.tocustid) + "," + JSON.stringify(item.Toprofileid) + "," + item.PhotoCountnew + ")' src='" + item.Photonew + "' alt='' class='center-block img-thumbnail' style='border: 1px solid gray;' type='image'>"
                + mat.MatchMidDiv(item.ToName, item.Toprofileid, item.ToBranchCode, item.TOEmail, item.ToMobileNumber, item.ServiceDate, item.ToTicketCreated, strToheart)
    + "            </div>"
    + "<div class='col-lg-3  col-lg-push-2'>" + mat.Sidemenu((item.toemp).replace("~/", "../../"), item.toempname, item.tocustid, (item.ToMobileCountryCode + '-' + item.ToMobileNumber), item.ToName, item.TOEmail, item.ToMobileCountryCode, item.ToTicket, item.Toticketid, totalrecords, 'Updatedivto', 'lnkAddactionto', item.Toprofileid, item.fromcust_id, item.ToticketStatusIDb, item.ToSaPath, item.FromProfileid, ToSApathclass) + "</div>"
    + "        </div>"
    + "    </div>"
    + "    <br>"
    + "    <div class='row'>"
    + "        <div class='col-lg-12 col-lg-push-2' style='border: 1px solid; border-color: orange; border-radius: 20px; width: 81%;'>"
    + "            <div id='Updatedivto" + totalrecords + "'>"

     + returnhtml(item.ToTicketHisoryType, item.ToTicketInfo, item.ToTicketHisoryNAME, item.ToTicketHisoryCallStatus, (item.ToTicketHisoryCallReceivedBy + ("(" + item.ToTicketHisoryRelationShip + ")")), item.ToTicketHisoryReplyDesc)
    + "</div>"
    + "</div>"
    + "</div>"
    + "<br>"
                + mat.matchButtons(toResendMail, item.ToTicket, 'popover1', item.Toprofileid)
                + "</div>";
                AppendCarousalItems(CarousalID, LeftmatchFollowup, RightmatchFollowup);
            });
            if (CarousalID == 'PopupCarousal') {
                checkitemGlobalnew(CarousalID);

                $('#CommonPopupslide').modal({ backdrop: 'static', keyboard: false });
                $('#PopupCarousal .carousel-control.left').attr('style', 'display:none;');
                $('#PopupCarousal .carousel-control.right').attr('style', 'display:block;');
            }
            $('[data-toggle="popover"]').popover({
                html: true,
                title: "Ticket History<a  class='pull-right' style='font-size: 21px;color:Red;'  href='javascript:void(0);' onclick='Close(" + JSON.stringify('popover') + ");'>&times;</a>",
                content: function () {
                    return $('#divpop').html();
                }
            });
            $('[data-toggle="popover1"]').popover({
                html: true,
                title: "Ticket History<a class='pull-right' style='font-size: 21px;color:Red;' href='javascript:void(0);' onclick='Close(" + JSON.stringify('popover1') + ");'>&times;</a>",
                content: function () {
                    return $('#divpop').html();
                }
            });

            break;

    }
    return false;
}

function PageDesignForShort(Inputobject) {
    var shortListResult = CallApi(Inputobject.api, { ShortListedCustIDs: $('#hdnshortlistProfile').val() });
    Slidepageload(obj.CarousalID, "lblcurSlide", "lblnoofrecords", "lnkLastSlide", 'PlayShortListebtn', 'PauseShortListbtn');
    var CarousalID = Inputobject.CarousalID;
    var gen = StaticArray.general;
    $('#shortlistPopupShow #search_result_item_ui_exprsns_grid').html("");
    $('#shortlistPopupShow #search_result_item_ui_exprsns_grid').append(gen.GetHeaderDiv(obj.ShowShortList));

    if ((obj.FromCustID != undefined && obj.FromCustID != null) && (obj.FromProfileID != undefined && obj.FromProfileID != null) && (obj.ShowShortList == true)) {
        SelfData = CallApi(obj.SelfDataApi, { Request: { ProfileID: obj.FromProfileID, Empid: empidObj } });
        $('#lnkprofileidfrom').text("(" + SelfData.d.ProfileID + ")");
        hideShowControls(['lnkshortlistpopup', 'lnkPatnerprefercencedata', 'imgfrompic'], true);
    }
    else {
        hideShowControls(['lnkshortlistpopup', 'lnkPatnerprefercencedata', 'imgfrompic'], false);
    }
    var datanew = condional(shortListResult.d);
    var totalrecords;
    var pageidcount = $('#' + CarousalID).find('.item').length;
    _.each(datanew, function (parentitem, index) {
        pageidcount = pageidcount + 1;
        totalrecords = CarousalID + pageidcount;

        var strappendLeftBlock = "", links, lnkshortlist = "", shortListRightblock = "", custid, ProfileID, PhotoCount, Age, HeightInCentimeters, MaritalStatusID, CasteID, serviceDate, CustPhoto;
        _.each(parentitem, function (childitem, index) {
            if (childitem.label != "backendFields") {

                strappendLeftBlock = strappendLeftBlock + "<div class='edit_page_details_item_desc clearfix'>"
            + "<h6>"
              + "  <span  style='font-weight: bold;'>" + childitem.label + "</span>"
            + "</h6>"
            + gen.getDivstring(childitem.value, childitem.style, childitem.onclick, childitem.html)
        + "</div>";
            }

            else if (childitem.label == "backendFields") {
                custid = childitem.Custid;
                ProfileID = childitem.ProfileID;
                PhotoCount = childitem.PhotoCount;
                Age = childitem.Age;
                HeightInCentimeters = JSON.stringify(childitem.HeightInCentimeters);
                MaritalStatusID = JSON.stringify(childitem.MaritalStatusID);
                CasteID = JSON.stringify(childitem.CasteID);
                serviceDate = JSON.stringify(childitem.serviceDate);
                CustPhoto = childitem.CustPhoto;
                var strHeaderclass;
                strHeaderclass = (obj.PartnerPreferenceLink == true || obj.SearchLink == true || obj.ContactLink == true) ? "row modal-header EditLinks" : "row EditLinks";

                links = "<div class='" + strHeaderclass + "'>"
                + "<div class=col-lg-9>"
              + ((obj.PartnerPreferenceLink == true) ? headerlinks('Edit Partnerpreference', custid, 'Edit') : "")
              + ((obj.SearchLink == true) ? headerlinks('General search', custid, 'general') : "")
              + ((obj.ContactLink == true) ? headerlinks('View Contacts', custid, 'contacts') : "")

+ "</div>"
+ "</div>";
            }

        });
        lnkshortlist = obj.ShowShortList == true && obj.FromCustID !== undefined ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return InnerShortList(" + custid + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                    + "<div class='col-lg-1'><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        shortListRightblock = "<li class='col-lg-6 col-md-6 col-xs-6'>"
              + "<div class='row'>"
+ " <div class='col-lg-8'>"
+ "<div class='row'>" + lnkshortlist
+ "</div></div></div>" + "<div class='clearfix'></div>"
+ "<div>"
+ "<input  id='imgCustPhoto" + totalrecords + "'  src='../../access/Images/ProfilePics/KMPL_67597_Images/img1_Images/110675970_FullPhoto.jpg' class='image'  type='image' onclick='return getimgPath(" + JSON.stringify(custid) + "," + JSON.stringify(ProfileID) + "," + PhotoCount + ")'>"
+ "<br>"
+ "<div class='col-lg-8 col-lg-offset-5'>"
+ "<a   href='javascript:void(0)'><span  style='color:Black;font-size:9pt;'>No of Photos  " + " " + PhotoCount + "</span></a>"
+ "</div>"
+ "</div></li>";
        strappendLeftBlock = "<li class='col-lg-6 col-md-6 col-lxs-6'>" + strappendLeftBlock + "</li>";
        AppendCarousalItems(CarousalID, strappendLeftBlock, shortListRightblock, links);
        document.getElementById('imgCustPhoto' + totalrecords + '').disabled = CustPhoto.indexOf("noimage") == -1 ? false : true;

    });
    checkitemGlobalnew(CarousalID);
    $('#shortlistPopupShow').modal({ backdrop: 'static', keyboard: false });
    $('#ShortlistCarousal .carousel-control.left').attr('style', 'display:none;');
    $('#ShortlistCarousal .carousel-control.right').attr('style', 'display:block;');
}
function clearfix() {
    var str = " <div class='clearfix'></div>";
    return str;
}


function matchMenu(classs, displayText, onclick) {

    classs = (classs == undefined) ? "btn btn-success-outline row" : classs;
    var matchMenu = "<br>"
   + " <div class='clearfix'>"
   + "     <button type='button' class='" + classs + "' style='height: 26px; padding: 3px;'  " + property('onclick', onclick) + ">" + displayText + "</button></div>"
   + " <div class='clearfix'></div>";
    return matchMenu;
}

//#region
function AppendCarousalItems(CarousalID, LeftBlock, RightBlock, links) {

    links = links == undefined ? "" : links;

    var totalslides = $('#' + CarousalID).find('.item').length;

    var stractiveClass = totalslides == 0 ? 'item active' : 'item';
    $("#" + CarousalID + " .carousel-inner").append(
                  "<div class='" + stractiveClass + "'>"
                  + links
                  + "<div class='row container'>"
                  + "<ul>"
                    + LeftBlock
                    + RightBlock
                    + "</ul>"
                    + "</div>"
                   + "</div>");
}

function condional(Array) {
    var totalArray = [];
    $.each(Array, function (index, item) {
        var data = [];
        data.push({ label: 'ProfileID', html: "&nbsp;<a href='javascript:void(0);' style='" + (item.paid == "1" ? 'color:Green;text-decoration:underline;margin-left:-16px;padding-left: 10px;' : 'color:red;text-decoration:underline;margin-left: -16px;padding-left: 10px;') + "' onclick='ViewProfilewithvalue(" + JSON.stringify(item.ProfileID) + ");'>" + item.ProfileID + "</a> " + item.KMPLID + " " + (item.IsConfidential == true || item.IsConfidential == "True" ? " C" : "") + " " + (item.SuperConfidentila == "1" || item.SuperConfidentila == 1 ? " SC" : "") + " " + (item.HoroscopeStatus == "1" ? "<input title='Click here to view Horoscope' src='../../Images/ico_horoscope.jpg' style='height:20px;width:25px;' type='image' onclick='return getPath(" + JSON.stringify(item.Cust_ID) + ");'>" : "") });
        data.push({ label: 'Name', value: item.LastName + ' ' + item.FirstName, style: item.NoOfBrothers == "0" && item.NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;" });
        data.push({ label: 'DOB(age)', value: item.DOB + '(' + item.Age + ')' });
        data.push({ label: 'Time of Birth', value: item.TOB });
        data.push({ label: 'Place of Birth', value: item.PlaceOfBirth });
        data.push({ label: 'Gothram', value: item.Gothram });
        data.push({ label: 'Caste', value: item.Caste });
        data.push({ label: 'Marital Status', value: item.maritalstatus || item.MaritalStatusID });
        data.push({ label: 'Star', value: item.Star });
        data.push({ label: 'Color', value: item.Color });
        data.push({ label: 'Height', value: item.Height });
        data.push({ label: 'Qualification', value: item.EducationGroup + "," + item.EduGroupnamenew });
        data.push({ label: 'Profession', value: item.Profession });
        data.push({ label: 'Job Location', value: item.JobLocation });
        data.push({ label: 'Income(P.M)', value: item.Income });
        data.push({ label: 'Father Native', value: item.FFNative });
        data.push({ label: 'Mother Native', value: item.MFNative });
        data.push({ label: 'Property(Lakhs)', value: item.Property });
        data.push({ label: 'backendFields', Custid: item.Cust_ID, ProfileID: item.ProfileID, PhotoCount: item.PhotoCount, Age: item.Age, HeightInCentimeters: item.HeightInCentimeters, MaritalStatusID: item.MaritalStatusID, CasteID: item.CasteID, serviceDate: item.serviceDate, CustPhoto: item.imageurl, totalrecords: item.TotalRowsKeyword });
        if (item.serviceDate != "--" && item.serviceDate != "" && item.serviceDate != null)
            data.push({ label: 'ServiceDate', value: item.serviceDate, style: 'style= color:red;' });
        if (item.Intercaste == "True")
            data.push({ label: 'Intercaste', value: (item.fathercaste + "/" + item.mothercaste) });
        if (item.ProfileGrade != 0)
            data.push({ label: 'ProfileGrade', value: item.ProfileGrade == "1" ? "A-(This ProfileId Contacts not Visible On Web)" : (item.ProfileGrade == "2" ? "B" : (item.ProfileGrade == "3" ? "C-(This ProfileId Contacts Visible On Web)" : "--(This ProfileId Contacts not Visible On Web)")) });

        totalArray.push(data);

    });
    return totalArray;
}

function checkServicetoShortlist(custids, profileID, age, height, maritalstatus, caste, Servicedate) {
    var StValall = document.getElementById("hdnCustIdsForAlert").value;
    var profileIDlocal = JSON.stringify(profileID);
    if (StValall.indexOf(custids) != -1) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {
        if (Servicedate != '') {
            $('#divmismatchData').html('');
            $('#divfooter').html('');
            $('#divmismatchData').append("<a id=lnkmismatchProfileid href=javascript:void(0) onclick=ViewProfilewithvalue(" + profileIDlocal + ");>" + profileID + "</a>" + "<f style='color:black;'> Already service done with this profileid On </f>" + "<f style='color:Red;font-weight:bold;font-size:14px;'>" + Servicedate + "</f>" + "</br>" + "")

            $('#divfooter').append("<button id='btn-id1' type='button' class='btn btn-large btn-primary' onclick='return mismatchProfileCheck(" + custids + "," + profileID + "," + age + ")' data-dismiss='modal'  data-loading-text='Adding...'>Shortlist</button>"
                           + "<input name=btncancel value=Cancel id=btncancel class='btn btn-success' type='submit' data-dismiss='modal'>"
                           );
            $('#divmismatch').modal({ backdrop: 'static' });
        }
        else {
            mismatchProfileCheck(custids, profileID, age);

        }
    }
    return false;
}

function mismatchProfileCheck(custids, profileID, age) {
    $('#divmismatch').modal('hide'); $('body').removeClass().removeAttr('style'); $('.modal-backdrop').remove();
    var StVal = document.getElementById("hdnshortlistProfile").value;
    var StValall = document.getElementById("hdnCustIdsForAlert").value;
    if (StValall.indexOf(custids) != -1) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {

        var strmismatch = '';
        var SelfData = CallApi("EmployeeGeneralSearchLatest.aspx/GetPrimaryDataCustomerAllPrimaryInfo", { Request: { ProfileID: 110716680, Empid: 2 } });

        if (parseInt(age) < parseInt(SelfData.d.AgeMin) && parseInt(age) > parseInt(SelfData.d.AgeMax)) {

            strmismatch = "  Age not Matched to this profileid" + ",";
        }
        $("#hdnMismatchData").val(strmismatch)
        if (strmismatch != '') {
            var mismath = strmismatch.split(",");
            $('#divmismatchData').html('');
            $('#divfooter').html('');
            var profileIDlocal = JSON.stringify(profileID);
            for (var i = 0; i < mismath.length; i++) {

                $('#divmismatchData').append("<a id=lnkmismatchProfileid href=javascript:void(0) onclick=ViewProfilewithvalue(" + profileIDlocal + ");>" + profileID + "</a>" + "<f style='color:black;'>" + mismath[i] + "</f>" + "</br>" + "")
            }
            $('#divfooter').append("<button id='btn-id1' type='button' class='btn btn-large btn-primary' onclick='getClickedCustID(" + custids + ")' data-dismiss='modal'  data-loading-text='Adding...'>Shortlist</button>"
                + "<input name=btncancel value=Cancel id=btncancel class='btn btn-success' type='submit' data-dismiss='modal'>"

                );

            $('#divmismatch').modal({ backdrop: 'static' });

            return false;
        }
        else {
            getClickedCustID(custids)
        }
        return false;
    }
}

function getClickedCustID(custids) {
    $('#divmismatch').modal('hide'); $('body').removeClass().removeAttr('style'); $('.modal-backdrop').remove();
    var StVal = document.getElementById("hdnshortlistProfile").value;
    var mismath;
    if (StVal == '') {
        StVal = custids;
        mismath = [custids];
    }
    else {
        StVal += "," + custids;
        mismath = StVal.split(",");
    }
    DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
    document.getElementById("hdnshortlistProfile").value = StVal;
    document.getElementById("hdnCustIdsForAlert").value = StVal;
    var shortlisttxt = "  Shortlisted";
    if (mismath.length <= 10) {
        count++;
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger active' style='width: " + mismath.length + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else if (mismath.length > 10 && mismath.length <= 30) {
        count = mismath.length == 11 ? 1 : (count + 1);
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-warning active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else if (mismath.length > 30 && mismath.length <= 50) {
        count = mismath.length == 31 ? 1 : (count + 1);
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-warning' style='width:20%;'><span></span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-info active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else {
        count = mismath.length == 51 ? 1 : (count + 1);
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-warning' style='width:20%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-info' style='width: 20%'><span > </span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-success active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }

    $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    return false;
}

function shortListPopup() {
    var StValall = document.getElementById("hdnshortlistProfile").value;
    $("#ShortlistCarousal").carousel("pause").removeData();
    $("#ShortlistCarousal .carousel-inner").html("");
    if (StValall != '') {
        var obj = { PageType: 'general', showslidwinpopup: true, CarousalID: 'ShortlistCarousal', ShowShortList: true, FromCustID: 71668, InputObject: { ShortListedCustIDs: StValall }, api: 'EmployeeGeneralSearchLatest.aspx/GetShorlistedProfiles' };
        PageDesignForShort(ShortlistObj);
        var totalItemspopup = $('#ShortlistCarousal').find('.item').length;
        $('#shortlistPopupShow').modal({ backdrop: 'static', keyboard: false });

        $('#ShortlistCarousal .carousel-control.left').attr('style', 'display:none;');
        $('#ShortlistCarousal .carousel-control.right').attr('style', 'display:block;');
        pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');
    }
    else {
        DynamicTimeAlert('Please shortlist any Profile', 'alert alert-danger', '2000');
    }

    return false;
}

function mainShortListProfiles() {

    var hdnshortlistProfile = $('#hdnshortlistProfile').val();
    if (hdnshortlistProfile != "") {
        var hdnCurrentSlideVal = $('#hdnCurrentSlideVal').val();
        if (hdnshortlistProfile != "" || hdnCurrentSlideVal != "") {

            var CustIDsCount = (hdnshortlistProfile != "" ? hdnshortlistProfile : "0").split(',');

            if (hdnshortlistProfile != "" && hdnCurrentSlideVal == "") {
                hdnshortlistProfile = (hdnCurrentSlideVal);
            }
            else if (hdnshortlistProfile != "" && hdnCurrentSlideVal != "") {
                if (hdnshortlistProfile.indexOf(hdnCurrentSlideVal) != -1)
                { }
                else
                {
                    hdnshortlistProfile += "," + hdnCurrentSlideVal;
                    $('#hdnshortlistProfile').val(hdnshortlistProfile)
                }
            }

            shortListPopup();

        }
        $('#ShortlistCarousal .carousel-control.left').attr('style', 'display:none;');
        $('#ShortlistCarousal .carousel-control.right').attr('style', 'display:block;');
        pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');
    }
    else {

        DynamicTimeAlert("Please ShortList Profiles", "alert alert-danger", "4000");

    }
}
function InnerShortList(custID) {
    var InnerShortList = $("#hdnCurrentSlideVal").val();
    if (InnerShortList.indexOf(custID) != -1) {
        DynamicTimeAlert('You have already Shortlisted this Profile ID', 'alert alert-danger', '4000');
    }
    else {
        InnerShortList = InnerShortList == '' ? custID : (InnerShortList + "," + custID);
        $("#hdnCurrentSlideVal").val(InnerShortList);
        $('#hdnshortlistProfile').val(InnerShortList);
        DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
    }

}
function bookmark() {

    var strToCustIDs = document.getElementById("hdnshortlistProfile").value;
    var bookmarkInput = { MobjViewprofile: { FromCustID: SelfData.d.Cust_ID, StrTocustIDs: strToCustIDs } };
    var status = CallApi("Bookmark", bookmarkInput);
    statusAlert(status.d, undefined, "Bookmarked SuccessFully", "Bookmark failed");

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

StaticArray.general = {
    GetHeaderDiv: function (HeaderBoolType) {
        var headerDiv;
        if (HeaderBoolType == true) {
            headerDiv = "<ul class='row'>"
                                   + "<li class='col-lg-4' style='margin-top: 12px;'>"
                                    + label('FromProfileID', undefined, 'control-label span2', 'tocustid')
                                   + label(undefined, undefined, 'control-label span1', 'lblprofileidto')
            + "</li>"
            + shortlistControls('lnksendservices', 'fa fa-reply', 'Send to Service', 'Send to Service', 'return sendtoServices();')
            + shortlistControls('lnkNestedshortlist', 'glyphicon glyphicon-star', 'ShowShortList', 'Shortlist', 'return shortListPopup();')
            + shortlistControls('lnkbookmark', 'fa fa-bookmark', 'BookMark All', 'BookMark', 'return bookmark();')
            + "</ul>";

        }
        else {

            headerDiv = "<div class='row' style='height: 30px; margin-top: 8px;'>"
    + "                        <div class='col-lg-8'>"
    + "                            <div class='row'>"
    + "                                <div id='divimgfrompic' class='col-lg-1'>"
    + "                                    <img id='imgfrompic' style='height: 54px; width: 60px;' src='' />"
    + "                                </div>"
    + "                                <div class='col-lg-11'>"
    + "                                    <label id='lblsearchprofileid' style='color: black;'></label>"
    + "                                    <label id='lblNamefrom' style='color: black'></label>"
    + "                                    <a id='lnkprofileidfrom' onclick='return ViewProfileWithID('lblhiddenprofileid');' href='javascript:void(0)'></a>"
    + "                                    <a id='lnkmorepopup' style='width: 20px; margin-right: 13px;' data-toggle='modal' href='#divlookingmore'>More</a>"
    + "                                    <a id='lnkPatnerprefercencedata' onclick='return redirectpartner()' href='javascript:void(0)'>Edit Partpreference</a>"
    + "                                    <label id='lblhiddenprofileid' style='display: none;'></label>"
    + "                                    <br />"
    + "                                    <br />"
    + "                                    <div class='row'>"
    + "                                        <div class='col-lg-6'>"
    + "                                            <label id='lbltotalrecords'>Total Records :</label>"
    + "                                            <label id='lblcurSlide'>1</label>"
    + "                                            <label id='lblnoofrecords'>NoRecord</label>"
    + "                                            <input type='hidden' id='hdnTotalPages' />"
    + "                                        </div>"
    + "                                        <div class='col-lg-4' id='divviewedprofiles'>"
    + "                                            <div class='row'>"
    + "                                                <div class='col-lg-10'>"
    + "                                                    <label>Viewed</label>&nbsp;<label id='lnkLastSlide' style='color: blue;'>1</label>&nbsp;<label>Profiles</label>"
    + "                                                </div>"
    + "                                                <div class='col-lg-1'>"

    + "</div>"
    + "</div>"
    + "</div>"
    + "</div>"
    + "</div>"
    + "</div>"
    + "</div>"

    + "<div class='col-lg-2' id='gotoSlideDiv'>"
    + "    <a id='lnkshortlistpopup' style='font-size: 18px;' href='javascript:void(0);' onclick='return mainShortListProfiles();'><span class='glyphicon glyphicon-star'>ShowShortList</span></a>"
    + "</div>"
    + "<div class='col-lg-2'>"
    + "    <button id='lnkbacktoSearch' class='btn btn-info' onclick='return hideslide();'>Back to Search Page</button>"
    + "</div>"
    + "</div>"
    + "<br />";
        }
        return headerDiv;
    },
    getDivstring: function (value, style, onclick, html) {
        var strval = "";
        if ((html != '' && html != undefined)) {
            strval = "<h5>"
                       + "  <div " + style + "> "
                       + "       <span>" + html + "</span>"
                       + "   </div>"
                  + " </h5>";

        }
        else if ((value != '' && value != undefined) && (style != '' && style != undefined) && (onclick != '' && onclick != undefined)) {
            strval = "<h5>"
                       + "  <div " + style + "> "
                       + "       <span " + onclick + ">" + value + "</span>"
                       + "   </div>"
                  + " </h5>";

        }
        else if ((value != '' && value != undefined) && (style != '' && style != undefined)) {
            strval = "<h5>"
                       + "  <div " + style + "> "
                       + "       <span>" + value + "</span>"
                       + "   </div>"
                  + " </h5>";

        }

        else {
            strval = "<h5>"
                       + "  <div " + style + "> "
                       + "       <span>" + value + "</span>"
                       + "   </div>"
                  + " </h5>";

        }
        return strval;

    }
}
StaticArray.MatchFollowUp = {
    Sidemenu: function (EmpPhoto, EmpNamePhone, custID, MobileNumber, Name, Email, MobileCountryCode, Ticket, ticketid, totalrecords, Updatedivto, lnkAddactionTo, profileid, tocustid, ticketStatusID, SaPath, toprofileid, saclasss) {
        'use strict'
        var emailPhones = "<div>"
+ "    <div class='text-center'>"
+ "</div>"
+ empPhoto(EmpPhoto, EmpNamePhone)
+ "</div>"
+ matchMenu(undefined, 'Send Sms', "return sendSms('" + MobileNumber + "','" + Name + "','" + Email + "','" + MobileCountryCode + "','" + Ticket + "','" + ticketid + "','" + totalrecords + "','" + Updatedivto + "','" + lnkAddactionTo + "');")
+ matchMenu(undefined, 'Send Email', "return sendMail('" + profileid + "','" + Ticket + "','" + ticketid + "','" + totalrecords + "','" + Updatedivto + "','" + lnkAddactionTo + "','" + custID + "','" + tocustid + "','" + $.trim(ticketStatusID) + "','" + Name + "','" + Email + "','" + toprofileid + "');")
+ matchMenu(saclasss, (SaPath == '' ? 'No SA Form' : 'View SA Form'), "return Settlementfom('" + profileid + "','" + SaPath + "');")
+ matchMenu(undefined, 'View Contacts', "return Contactpage(" + JSON.stringify(custID) + ");");
        return emailPhones;
    },
    middivInnerblock: function (lblvalue, Textvalue) {
        var innerdiv = "<div class='row'>"
+ "        <div class='col-lg-3'><b class='maroon'>" + lblvalue + ":</b> </div>"
+ "        <div class='col-lg-9'><b class=''>" + Textvalue + "</b></div>"
+ "    </div>";
        return innerdiv;

    },
    MatchMidDiv: function (CustName, CustProfileID, registredBranch, email, mobileno, serviceDate, ProceedDate, img) {
        var midDiv = "<div class='text-center'>"
       + "    <br>"
       + "    <div class='row'>"
       + "        <div class='col-lg-10'>"
       + CustNameWithProfileID(CustName, CustProfileID, registredBranch)
       + "</div>"
       + "        <div class='col-lg-2'>"
       + img
       + "</div>"
       + "    </div>"
       + this.middivInnerblock('Mobile', mobileno)
           + this.middivInnerblock('Email', email)
           + "    <div class='row'></div>"
           + "    <div class='row'>"
           + "        <div class='col-lg-6'>"
           + "            <b class='maroon'>Service Date</b><br>"
           + "            <b>" + serviceDate + "</b></div>"
           + "        <div class='col-lg-6'>"
           + "            <b class='maroon'>Proceed Date </b>"
           + "            <br>"
           + "            <b>" + ProceedDate + "</b></div>"
           + "    </div>"
           + "</div>";

        return midDiv;
    },

    matchButtons: function (btn, FromTicket, popover, Profileid) {
        var fromtickethide = FromTicket != undefined && FromTicket != null && FromTicket != "" ? "" : "display:none;";
        var buttons = "<div class='text-center'>"
        + btn
        + "<button type='button' style='" + fromtickethide + "' data-toggle='" + popover + "'  data-placement='top' onclick='return TicketHistry(" + JSON.stringify(FromTicket) + "," + JSON.stringify(popover) + ");' class='btn btn-success-outline col-lg-offset-2'>Ticket history</button>"
+ "</div>";
        return buttons;
    },

}
StaticArray.Marketing = {
    Innercountdiv: function (lblName, countval) {
        var innercountdiv = "<div>"
              + "      <div class='col-lg-10' style='color: maroon;'>"
              + "          <label>" + lblName + "</label></div>"
              + "      <div class='col-lg-2'>"
              + "          <label>" + countval + "</label></div>"
              + "  </div>"
        + clearfix();
        return innercountdiv;
    },
    CountsDiv: function (strlastloginDate, RectViewedProfCount, RectWhoViewedCout, MybookMarkedProfCount, WhobookmarkedCount, IgnoreProfileCount) {
        var CountsDiv = "<div class='row'>"
      + "<div class='col-lg-12 text-center' style='font-weight:bold;'>" + strlastloginDate + "</div><div class='clearfix'></div><br/>"
        + this.Innercountdiv('Total Viewed profiles', RectViewedProfCount)
        + this.Innercountdiv('Total Viewed profiles by others', RectWhoViewedCout)
        + this.Innercountdiv('Total Bookmarked profiles', MybookMarkedProfCount)
        + this.Innercountdiv('Total Bookmarked profiles by others', WhobookmarkedCount)
        + this.Innercountdiv('Total ignore profiles Count', IgnoreProfileCount)
        + "  </div>";

        return CountsDiv;
    },
    marketSidemenu: function (DisplayText, onclick, style) {
        var marketmenu = "<br>"
    + " <u><a href='javascript:void(0);' " + property('style', style) + " class='btn btn-success-outline'  " + property('onclick', onclick) + ">" + DisplayText + "</a></u><br>";
        return marketmenu;
    },
    CustMobEmail: function (lbl, value) {
        var mobemail = "<div><b class='maroon' style='padding-left: 10px;'>" + lbl + " : </b><b>" + value + "&nbsp;</b></div>";
        return mobemail;
    },
    FeeSaDiv: function (lblDisplayval, Edit1DivID, lblfeeID, Amount, onclick_editFee, UpdateDivID, txtID, lnkID, onclick_UpdateFee) {
        var feesa = "<div class='col-lg-6'><span class='maroon' style='font-size: 12px; font-weight: bold;'>" + lblDisplayval + "</span><br>"
+ "            <div id='" + Edit1DivID + "' style=''>"
+ "                <label id='" + lblfeeID + "'>" + Amount + "</label>&nbsp;&nbsp;&nbsp;<a href='javascript:void(0);' " + property('onclick', onclick_editFee) + ">Edit </a></div>"
+ "            <div id='" + UpdateDivID + "' style='display: none;'>"
+ "                <input class='form-control' id='" + txtID + "' style='width: 80px; float: left;' onkeydown='return !(event.keyCode == 32);' maxlength='7' value='' type='text'>&nbsp;&nbsp;&nbsp;<a id='" + lnkID + "' href='javascript:void(0);'  " + property('onclick', onclick_UpdateFee) + ">Save </a></div>"
+ "        </div>";
        return feesa;
    }
}
//common methods
function empPhoto(EmpPhoto, EmpNamePhone) {
    var empPhoto = "<div>"
    + "    <img src='" + EmpPhoto + "' class='center-block' height='57px' width='57px'>"
    + "</div>"
    + "<div class='row'>" + EmpNamePhone + "</div>";
    return empPhoto;
}
function CustNameWithProfileID(CustName, ProfileID, registeredBranchCode, classs) {
    return "<b>" + CustName + " (<b><a href='javascript:void(0)' id='lnkProfileID' onclick='ViewProfilewithvalue(" + JSON.stringify(ProfileID) + ");' " + property('class', classs) + ">" + ProfileID + "</a> - " + registeredBranchCode + ")</b></b>";
}
function serviceCountProfiles(custid) {
    $("#CommonPopupslide").carousel("pause").removeData();
    $("#CommonPopupslide .carousel-inner").html("");
    flagserves = 1;
    obj.ServiceCountCust_ID = custid;
    servicecustid = custid;
    obj.InputObject.input.CustID = custid;
    console.log(obj.CustID);
    obj.InputObject.input.pagefrom = 1;
    obj.InputObject.input.pageto = 10;
    obj.CarousalID = 'CommonPopupslide';
    PageDesign(obj);

    return false;
}

//#endregion
//call dis method in page load
function Slidepageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID, ResultTotalRows) {

    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;

    slidBindGlobalnew(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID, ResultTotalRows);
    checkitemGlobalnew(carouselID);
    playAndPausenew(carouselID, playButtonID, pauseButtonID);
    ArrowMovenew(carouselID);

}
function slidBindGlobalnew(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID, ResultTotalRows) {

    $('#' + carouselID).bind('slid', function () {

        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#' + carouselID).find('.item').length;
        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
        $('#' + carouselID).find('div.active').index()
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4 && totalItems1 > 9) {
                obj.InputObject.input.pagefrom = parseInt(totalItems1) + 1;
                obj.InputObject.input.pageto = parseInt(totalItems1) + 10;
                PageDesign(obj);
            }
        }
        currentslide = currentIndex1;
        $('#' + curProfileID).text(currentIndex1);
        if (parseInt($("#" + lnkLastSlide).text()) < currentIndex1) {
            $("#" + lnkLastSlide).text(currentIndex1);
            return false;
        }

    });
}
//play and pause function on click event

function playAndPausenew(carouselID, playButtonID, pauseButtonID) {

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
function ArrowMovenew(carouselID) {
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

function checkitemGlobalnew(carouselID) {

    var checkitem = function () {
        checkitemnew1(carouselID);
    };
    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
}
function checkitemnew1(carouselID) {
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

function pauseifPlayVisible(carouselID, playButtonID, pauseButtonID) {
    if ($('#' + playButtonID).is(":visible")) {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    }

}

//matchfollowup functions

function Settlementfom(profileid, imageurl) {
    debugger;
    //var saimgurl = imageurl.substr(0, 0) + imageurl.substr(0 + 2);
    commonpopupmethod("SettlementForm", imageurl);

    return false;

}
function GetOwner(custid) {
    var owner;
    var object = { 'custid': '' + custid + '' };
    var data = CallApi("ownerid", object);
    owner = data.d;
    return owner;
}
function Contactpage(custid) {

    var QueryStringEdit = "CustID=" + custid + "&EmpID=" + GetEmpid() + "&Admin=" + GetAdmin() + "&owner=" + GetOwner(custid) + "";
    window.open('EmployeeEditContacts.aspx?' + QueryStringEdit, '_blank');
    return false;
}
function ticketidaction(ticketid, updatedivID, divCount, Profileid, Number) {
    profileidflag = Profileid;
    $('#lblupdatedivid').text(updatedivID);
    $('#lblticketcount').html(divCount);
    $('#txtmrktCalltelephonenumber').val(Number);
    $('#txtmrktCalltelephonenumberout').val(Number);
    bindmasterdata();
    $("#lblmrktticket").html(ticketid);
    $('#ddlmrktreceivedby').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedby', 'txtmrktRelationnameout');
    $('#ddlmrktreceivedfrom').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedfrom', 'txtmrktRelationname');
    var Ticketid = {
        Ticketinformation: {
            Ticketid: ticketid,
            Type: 'I',
        }
    }
    var data = CallApi("Ticketinformation", Ticketid);
    if (data != null && data != undefined && data.d != undefined && data.d[0] != undefined) {

        $('#lblmrktTicketID').html(data.d[0].Ticket);
        $('#lblmrktStatus').html(data.d[0].TicketStatus);
        $('#lblmrktAssigned').html(data.d[0].TicketOwner);
        $('#lblNoofdays').html(data.d[0].HistoryLastUpdated);
        $('#lblmrktOpened').html(data.d[0].TicketCreatedDate);
        $('#lblemail').html(data.d[0].Email);
        $('#lblnumber').html(data.d[0].Number);
        $('#lnkticketid').html(data.d[0].Ticket);
        $('#lbldelayed').html(data.d[0].HistoryLastUpdated);
        $('#lblmobilenumber').html(data.d[0].Number);
        $('#lblemailhis').html(data.d[0].Email);
    }
    document.getElementById("divhistory").style.display = "none";
    document.getElementById("accordion").style.display = "block";
    document.getElementById("MainTabs").style.display = "none";
    document.getElementById("lnkAssignticket").style.display = "none";
    $('#ActionPopup').modal({ backdrop: 'static' });
    return false;
}
function bindCalldiscussion(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    $("#" + txtid).val(sss);
}
function divAddViewshowhide(divtype) {
    switch (divtype) {
        case "Add":
            document.getElementById("divhistory").style.display = "none";
            document.getElementById("accordion").style.display = "block";
            break;
        case "View":
            document.getElementById("accordion").style.display = "none";
            document.getElementById("divhistory").style.display = "block";
            break;
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


function BindreplyType(arr) {
    _.each(arr, function (item) {
        _.each(item.value.split(','), function (inneritem, index) {
            if (index == 0) {
                replyddl.push({ value: inneritem, Id: item.Id });
                datareplyType.push({ label: inneritem, title: inneritem, value: item.Id });
            }
            else
                replycontext.push({ label: inneritem, title: inneritem, value: item.Id });
        });
    });
}



function gotoSlide(e) {

    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {

        $('#PopupCarousal').carousel(parseInt($(e).val()) - 1);
    }
    else {
        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}

function headerlinks(DisplayVal, strCustID, type) {
    return "<a href='javascript:void(0);'  onclick='return redirectEditpartgeneralcontacts(" + strCustID + "," + JSON.stringify(type) + ");' class=col-lg-4 style='font-size: 14px;'>" + DisplayVal + "</a>";
}

function redirectEditpartgeneralcontacts(custid, type) {

    switch (type) {

        case "Edit":
            var QueryStringEdit = "?" + "CustID=" + custid + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";
            window.open("EmployeePartnerPreference.aspx" + QueryStringEdit);
            break;
        case "general":
            var QueryStringEdit = "?" + "CustID=" + custid + "";
            window.open("EmployeeGeneralSearchLatest.aspx" + QueryStringEdit);
            break;
        case "contacts":
            var QueryStringEdit = "?" + "CustID=" + custid + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";
            window.open("EmployeeEditContacts.aspx" + QueryStringEdit);
            break;
    }
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

function updatereminder(custid, profileid, ticket, reminderdate, reminderid, ticketid, i, remindertime, catgory, calltype, contactpersonrel, contactpersonname, notes) {


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

function sendSms(MobileNumber, Name, Pemail, countrycode, Ticketid, ticketkak, i, updatedivid, lbladdactionid) {

    smsArr = [
          { id: 1, text: "We missed to reach you on 91-XXXXX. please call back" },
      { id: 2, text: "Bride is interested in your profile." },
      { id: 3, text: "Groom is interested in your profile." },
      { id: 4, text: "Contact details of the Groom/bride is given below." },
    ];

    var mob = MobileNumber != undefined && MobileNumber != '--' ? MobileNumber.split("-") : "";

    $('#txtval').val('');
    Resetforradiobuttons('Sendsms');
    $('#headerid').text('Send SMS');
    $('#lblname').text(Name);
    $('#lblPMobile').text(MobileNumber);
    $('#lblPMobileCode').text(mob[0]);
    $('#lblTicketid').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    $('#lblupdatedivid').text(updatedivid);
    document.getElementById("smsdiv").style.display = "block";
    document.getElementById("sendmailtxtdiv").style.display = "none";
    $('#brnsendsmsmail').html("Send Sms");
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });

    return false;

}

function sendMail(profileid, Ticketid, ticketkak, i, updatedivid, lbladdactionid, fromcustID, tocustID, ticketStatusID, custname, primaryemail, ToProfileID) {

    $('#headerid').text('Send Mail');
    $('#txtval').val('');
    $('#lblProfileid').text(profileid);
    $('#lblTicketid').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    $('#lblupdatedivid').text(updatedivid);
    $('#lbladdactionid').html(lbladdactionid);

    $('#lblfromCustID').html(fromcustID);
    $('#lblTocustID').html(tocustID);
    $('#lblticketStatusID').html(ticketStatusID);
    $('#lblToProfileID').html(ToProfileID);

    document.getElementById("smsdiv").style.display = "none";
    document.getElementById("sendmailtxtdiv").style.display = "block";
    $('#divcustnameemail').html(" <div class='form-group'><label class='control-label col-sm-4 maroon'>Customer Name</label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + custname + " (" + profileid + ")" + "</label></div></div>"
   + "<div class=clearfix></div><br /><div class='form-group'><label class='control-label  col-sm-4 maroon'>Email going to </label>"
   + "<div class=pull-left><label class='control-label pull-left'>" + primaryemail + "</label></div></div><div class=clearfix></div><br />");
    $('#brnsendsmsmail').html("Send Mail");

    $('#lstmails').multiselect('select', ['5']);
    $('#txtval').val('Interested in your match we would like to know your opinion to proceed further.');
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });

    return false;
}
function returnCurentdate() {
    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    return currentdate;
}
function sendsmssubmit() {

    var currentdate = returnCurentdate();
    var resultdata;
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    var lbladdactionid = $('#lbladdactionid').text();
    var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
    var popupticketid = $('#lblTicketkak').text();

    if ($('#txtval').val() != "") {

        if ($('#headerid').text() == 'Send SMS') {

            var submitdata = { Mobj: { strbody: $('#txtval').val(), strMobileNumber: $('#lblPMobile').text(), strName: $('#lblname').text(), strEmpname: empNameObj, strEmpid: empidObj, strEmpmobileNumber: empMobObj, strMobileCountryCode: $('#lblPMobileCode').text() != "" ? $('#lblPMobileCode').text() : null, i_TicketID: $('#lblTicketid').text(), marketbothflag: pageflag } };

            CallApi("SendSms_new", submitdata)
            statusAlert(1, 'submittextpopup', "SMS sent sucessfully", "SMS sending failed");

            var appenddiv = returnhtml("INTERNAL MEMO", currentdate, empNameObj, "",
                 "", $('#txtval').val());
            $("#" + updatedivid + "" + idcount + "").html(appenddiv);
            $('#txtval').val('');
            return false;
        }
        else if ($('#headerid').text() == 'Send Mail') {
            var submitdata = {
                Mobj: {
                    Notes: $('#txtval').val(),
                    EMPID: empidObj, profileid: $('#lblProfileid').text(),
                    LTicketID: $('#lblTicketid').text() != "null" && $('#lblTicketid').text() != "" ? $('#lblTicketid').text() : null,
                    HistoryUpdate: 1,
                    FromCustID: $('#lblfromCustID').text(),
                    TocustID: $('#lblTocustID').text(),
                    TicketStatusID: $('#lblticketStatusID').text(),
                    FromProfileID: $('#lblProfileid').text(),
                    ToProfileID: $('#lblToProfileID').text()
                }
            };

            resultdata = CallApi("SendMarketingMail_new", submitdata)
            statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");
            if (parseInt(resultdata.d) == parseInt(1)) {
                var appenddiv = returnhtml("REPLY", currentdate, empNameObj, "",
"", $('#txtval').val());
                $("#" + updatedivid + "" + idcount + "").html(appenddiv);
            }
            $('#txtval').val('');
        }
    }
    else {
        ShowOnlyAlertText('Please enter text', 'alert alert-danger');
    }
    return false;

}

function ResendMail(fromcustID, tocustID, fromProfileID, toprofileID, offlineexp, onlineexp, testMail) {
    var submitdata = {
        Mobj: {
            Notes: 'mail sent',
            EMPID: empidObj,
            LFromCustID: fromcustID,
            LToCustID: tocustID,
            FromProfileID: fromProfileID,
            ToProfileID: toprofileID,
            TicketStatusID: "NotViewed",
            Subject: "Kaakateeya Email For Bothsideinterest"
        }
    };
    var resultdata = CallApi("ResendMail", submitdata);
    if (resultdata != null && resultdata != undefined) {
        if (parseInt(resultdata.d) == parseInt(1)) {
            if (offlineexp == "color:maroon;" && onlineexp == "color:maroon;") {
                DynamicTimeAlert('Mail sent succesfully</br> They Can not open View Profile because of there is No Points', 'alert alert-success', '4000');
            }
            else {
                DynamicTimeAlert('Mail sent succesfully', 'alert alert-success', '4000');
            }
        }
        else {
            DynamicTimeAlert('Mail sent succesfully', 'alert alert-danger', '4000');
        }
    }
    return false;
}

function bindmasterdata() {
    hideShowControls(['lnkAssignticket'], true);
    var Bindings = {
        Masterbind: {
            Relationship: "ChildStayingWith",
            OnlyEmpname: "EmpnameswithNoCondition",
            bothsidemail: obj.PageType.toLowerCase() == 'matchfollowup' ? 'BothsideEmail' : "ReplyType"
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var replyddl = [], SmsReplyType = [];
    BindreplyType(data.d.bothsidemail);
    _.each(data.d.OnlyEmpname, function (item) {
        dataEmp.push({ label: item.value, title: item.value, value: item.Id });
    });
    var methodnamesnew = [{ methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedby", data: data.d.Relationship },
{ methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeout", data: datareplyType },
{ methodname: "BothsideEmail", dropdownname: "lstmails", data: datareplyType }];
    console.log('reply');
    console.log(datareplyType);
    binddropdowns(methodnamesnew, 'ddlmrktreplytypeout');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkIncoming').addEventListener('click', function () {
        var methodnames = [{ methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedfrom", ExistObj: datarelation },
{ methodname: "BothsideEmail", dropdownname: "ddlmrktReplyType", ExistObj: datareplyType }
        ];
        binddropdowns(methodnames, 'ddlreceivedfrom');
        $('#ddlmrktreceivedfrom').multiselect('select', [39]);
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkmemo').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktempmemo", ExistObj: dataEmp },
            { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypememo", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlmrktempmemo');
        $('#ddlmrktempmemo').multiselect('select', [empidObj]);
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkcloseticket').addEventListener('click', function () {
        var methodnames = [{ methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeCloseticket", ExistObj: closeticket }];
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
    if ($('#' + dropdownid).has('option').length == 0) {
        var methodnames = methodnamesArray;
        for (var i = 0; i < methodnames.length; i++) {
            checkBindObject(methodnames[i].ExistObj, methodnames[i].methodname, methodnames[i].dropdownname);
        }
    }
    else { }
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
    if (dataEmp1 != undefined && dataEmp1.length > 0) {
        $.each(dataEmp1, function (key, value) {
            option.push({ label: value.label, title: value.title, value: value.value });
        });
    }
    else {
        var odject = { 'methodname': '' + masterrname + '' };
        var data = CallApi('PopulateDropDownList', odject);
        if (data.d.length > 0) {
            $.each(data.d, function (key, value) {
                if (masterrname == 'BothsideEmail') {
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

function returnhtml(strtype, strdate, strempname, strstatus, strcustName, strcomments) {
    var strdiv = "";
    switch (strtype) {
        case "INCOMING":
        case "OUT GOING":
            strdiv = "<div class='row'><div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"

                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Done By</label></div><div class='col-lg-7'><label>" + strempname + "</label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Status</label></div><div class='col-lg-7'><label><div>" + strstatus + "</div></label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Received By</label></div><div class='col-lg-7'><label><div>" + strcustName + "</div></label></div><div class='clearfix'></div>"
                                                           + "<div class='col-lg-12' ><label style='color:maroon;'>Call Discussion</label><div><label>" + strcomments + "</label></div></div><div class='clearfix'></div>"
            + "</div>";
            break;
        case "MatchFollowupReply":
        case "MatchFollowUpStatus":
        case "INTERNAL MEMO":
        case "CLOSE":
        case "REPLY":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div class='col-lg-5' style='color:maroon;'><label>Employee Name</label></div><div class='col-lg-7'><label><div>" + strempname + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label>" + strcomments + "</label></div></div><div class='clearfix'></div></div>";
            break;

    }
    return strdiv;
}

function returnCurentdate() {
    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    return currentdate;
}
function submitInCalls(e) {
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    if ($('#ddlmrktreceivedfrom').val() == 0 || $('#ddlmrktCallresult').val() == 0
        || $('#ddlmrktReplyType').val() == 0 || $('#txtmrktRelationname').val() == '' || $('#txtmrktCalltelephonenumber').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                CallType: 377,
                RelationID: $('#ddlmrktreceivedfrom option:selected').val() != "" ? $('#ddlmrktreceivedfrom option:selected').val() : null,
                RelationName: $('#txtmrktRelationname').val() != "" ? $('#txtmrktRelationname').val() : null,
                CallResult: $('#ddlmrktCallresult option:selected').val() != "" ? $('#ddlmrktCallresult option:selected').val() : null,
                PhoneNum: $('#txtmrktCalltelephonenumber').val() != "" ? $('#txtmrktCalltelephonenumber').val() : null,
                CallDiscussion: $('#txtmrktCalldiscussionin').val() != "" ? $('#txtmrktCalldiscussionin').val() : null,
                DisplayStatus: $("input:radio[name='displaycustomermrkt']:checked").val() == 1 ? true : false,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                Replaytypeid: $('#ddlmrktReplyType option:selected').val() != "" ? $('#ddlmrktReplyType option:selected').val() : null

            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain)
        statusAlert(status.d, 'ActionPopup', 'Incoming Call Created successfully', 'Incoming Call updation failed');
        if (parseInt(status.d) == parseInt(1)) {
            var callreceivedby = $('#txtmrktRelationname').val() + "(" + getvaluestext('#ddlmrktreceivedfrom') + ")";

            var appenddiv = returnhtml("INCOMING", returnCurentdate(), empNameObj, $("#ddlmrktCallresult option:selected").text(),
                 callreceivedby, $('#txtmrktCalldiscussionin').val());
            $("#" + updatedivid + "" + idcount + "").html(appenddiv);

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
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    if ($('#ddlmrktreceivedby').val() == 0 || $('#ddlmrktcallresultout').val() == 0
       || $('#ddlmrktreplytypeout').val() == 0 || $('#txtmrktRelationnameout').val() == '' || $('#txtmrktCalltelephonenumberout').val() == '') {
        DynamicTimeAlert('Please enter all mandatory values', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                CallType: 378,
                RelationID: $('#ddlmrktreceivedby option:selected').val() != "" ? $('#ddlmrktreceivedby option:selected').val() : null,
                RelationName: $('#txtmrktRelationnameout').val() != "" ? $('#txtmrktRelationnameout').val() : null,
                CallResult: $('#ddlmrktcallresultout option:selected').val() != "" ? $('#ddlmrktcallresultout option:selected').val() : null,
                PhoneNum: $('#txtmrktCalltelephonenumberout').val() != "" ? $('#txtmrktCalltelephonenumberout').val() : null,
                CallDiscussion: $('#txtmrktCalldiscussionout').val() != "" ? $('#txtmrktCalldiscussionout').val() : null,
                DisplayStatus: $("input[name='displaycustomeroutmrkt']:checked").val() == 1 ? true : false,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                Replaytypeid: $('#ddlmrktreplytypeout option:selected').val() != "" ? $('#ddlmrktreplytypeout option:selected').val() : null
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);
        statusAlert(status.d, 'ActionPopup', 'Outgoing Call Created successfully', 'Outgoing Call updation failed');
        if (parseInt(status.d) == parseInt(1)) {
            var callreceivedby = $('#txtmrktRelationnameout').val() + "(" + getvaluestext('#ddlmrktreceivedby') + ")";

            var appenddiv = returnhtml("OUT GOING", returnCurentdate(), empNameObj, $('#ddlmrktcallresultout option:selected').text(),
                 callreceivedby, $('#txtmrktCalldiscussionout').val());
            $("#" + updatedivid + "" + idcount + "").html(appenddiv);

        }
        $('#txtmrktRelationnameout').val('');
        cleartxtboxes('txtmrktCalltelephonenumberout');
        cleartxtboxes('txtmrktCalldiscussionout');
        Resetforradiobuttons("displaycustomeroutmrkt");

    }
    return false;
}

function submitMemo(e) {
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    if ($('#ddlmrktempmemo').val() == 0 || $('#txtmrktmemocalldiscussion').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                CallType: 379,
                AssignedEmpID: $('#ddlmrktempmemo option:selected').val() != "" ? $('#ddlmrktempmemo option:selected').val() : null,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                CallDiscussion: $('#txtmrktmemocalldiscussion').val() != "" ? $('#txtmrktmemocalldiscussion').val() : null
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);
        statusAlert(status.d, 'ActionPopup', 'Memo Created successfully', 'Memo updation failed');
        if (parseInt(status.d) == parseInt(1)) {
            var da = $('#txtmrktmemocalldiscussion').val();
            var appenddiv = returnhtml("INTERNAL MEMO", returnCurentdate(), empNameObj, "",
                "", da);
            $("#" + updatedivid + "" + idcount + "").html(appenddiv);

        }
        cleartxtboxes('txtmrktmemocalldiscussion');
    }
    return false;
}
function CommonAssignSubmit(strAction) {
    var datain = {
        Mobj: {
            EmpID: GetEmpid(),
            AssignedEmpID: GetEmpid(),
            TicketID: $('#lblmrktticket').text(),
            StatusID: 2
        }
    }
    var status = CallApi("SubmitReAssignticket", datain)
    statusAlert(status.d, 'ActionPopup', "" + strAction + " Created  & Ticket Assigned successfully", 'Ticket assigning failed');
}
function submitCloseTicket() {
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    if ($('#txtmrktclosecalldiscusn').val() == '') {
        DynamicTimeAlert('Please enter reason for closing this ticket', 'alert alert-danger', 4000);
    }
    else {
        datain = {
            Mobj: {
                CallType: 563,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                CallDiscussion: $('#txtmrktclosecalldiscusn').val() != "" ? $('#txtmrktclosecalldiscusn').val() : null
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);
        statusAlert(status.d, 'ActionPopup', 'Ticket closed successfully', 'Ticket closing failed');
        if (parseInt(status.d) == parseInt(1)) {
            var appenddiv = returnhtml("Close", returnCurentdate(), empNameObj, "",
      "", $('#txtmrktclosecalldiscusn').val());

            $("#" + updatedivid + "" + idcount + "").html(appenddiv);
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
        datain = {
            Mobj: {
                CallType: 380,
                EmpID: GetEmpid(),
                AssignedEmpID: $('#ddlmrktAssingnEmp option:selected').val() != "" ? $('#ddlmrktAssingnEmp option:selected').val() : null,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain)
        statusAlert(status.d, 'ActionPopup', 'Ticket Assigned successfully', 'Ticket assigning failed');
        $('#ddlmrktAssingnEmp').multiselect('select', ['0']);
    }
    return false;
}
$(document).ready(function () {
    $('#toggleDemo').slideToggle("slow");
    $('#spantoggle').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    $('#headers').click(function () {
        $('#toggleDemo').slideToggle("slow");
        $('#spantoggle').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    });
    $('#btnquicksearch').click(function () {
        $('#toggleDemo').hide();
    });
});

function closeCommonPopupslide() {
    $('#CommonPopupslide').modal('hide');
    obj.ServiceCountCust_ID = null;
    obj.InputObject.input.CustID = null;
    obj.CarousalID = 'myCarousel';
    return false;
}

function marketingaction(ticketid, ticket, TicketStatus, TicketOpenedOn, TicketCategory, TicketAssignedEmpID, i, Custprimarymobile, NoOfdays, profileid) {
    profileidflag = profileid;
    marketingbindmasterdata();
    $('#ddlmrktreceivedbym').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedbym', 'txtmrktRelationnameoutm');
    $('#lblmrktTicketIDm').html(ticketid);
    $('#lblmrktticketm').html(ticket);
    $('#lblmrktStatusm').html(TicketStatus);
    $('#lblmrktOpenedm').html(TicketOpenedOn);
    $('#lblmrktCatgorym').html(TicketCategory);
    $('#lblmrktAssignedm').html(TicketAssignedEmpID);
    $('#txtmrktCalltelephonenumberm').val(Custprimarymobile);
    $('#txtmrktCalltelephonenumberoutm').val(Custprimarymobile);
    $('#lblNoofdaysm').html(NoOfdays);
    $('#Label1m').html(i);
    $('#lblUpdatedivm').html(i);
    if (parseInt(NoOfdays != "" ? NoOfdays : "0") > 10) {
        $('#lnkAssignticket').show();
        document.getElementById('btnIncomeAssignmem').style.display = "block";
        document.getElementById('btnOutgngAssignmem').style.display = "block";
        document.getElementById('btnIMAssignmem').style.display = "block";
    }
    else {
        $('#lnkAssignticketm').hide();
        document.getElementById('btnIncomeAssignmem').style.display = "none";
        document.getElementById('btnOutgngAssignmemm').style.display = "none";
        document.getElementById('btnIMAssignmem').style.display = "none";
    }
    $('#marketingticketpopup').modal({ backdrop: 'static', keyboard: false });
    pauseifPlayVisible();
}

function marketingbindmasterdata() {
    var methodnames = [
      {
          methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedbym",
          ExistObj: datarelation
      },
  { methodname: "ReplyType", dropdownname: "ddlmrktreplytypeoutm", ExistObj: datareplyType }];

    for (var i = 0; i < methodnames.length; i++) {
        if ($('#' + methodnames[i].dropdownname).has('option').length == 0) {
            checkBindObject(methodnames[i].ExistObj, methodnames[i].methodname, methodnames[i].dropdownname);
        }
        else {
            $("#" + methodnames[i].dropdownname + " option:selected").removeAttr("selected");
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkIncomingm').addEventListener('click', function () {
        var methodnames = [{
            methodname: "ChildStayingWith",
            dropdownname: "ddlmrktreceivedfromm", ExistObj: datarelation
        }
     , {
         methodname: "ReplyType", dropdownname: "ddlmrktReplyTypem",
         ExistObj: datareplyType
     }];
        binddropdowns(methodnames, 'ddlmrktreceivedfromm');

        $('#ddlmrktreceivedfromm').multiselect('select', [39]);
        getRelationshipnamae('ddlmrktreceivedfromm', 'txtmrktRelationnamem');

    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkmemom').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktempmemom", ExistObj: dataEmp },
            { methodname: "ReplyType", dropdownname: "ddlmrktreplytypememom", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlmrktempmemom');

        $('#ddlmrktempmemom').multiselect('select', [empidObj]);
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkcloseticketm').addEventListener('click', function () {
        var methodnames = [{ methodname: "ReplyType", dropdownname: "ddlmrktreplytypeCloseticketm", ExistObj: datareplyType }];
        binddropdowns(methodnames, 'ddlmrktreplytypeCloseticketm');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lnkAssignticketm').addEventListener('click', function () {
        var methodnames = [{ methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktAssingnEmpm", ExistObj: dataEmp }];
        binddropdowns(methodnames, 'ddlmrktAssingnEmpm');
    }, false);
}, false);



function submitInCallsmarketing(e) {

    if ($('#ddlmrktreceivedfromm').val() == 0 || $('#ddlmrktCallresultm').val() == 0
        || $('#ddlmrktReplyTypem').val() == 0 || $('#txtmrktRelationnamem').val() == '' || $('#txtmrktCalltelephonenumberm').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                CallType: 1,
                Calledon: currentdate,
                RelationID: $('#ddlmrktreceivedfromm option:selected').val(),
                RelationName: $('#txtmrktRelationnamem').val(),
                CallResult: $('#ddlmrktCallresultm option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtmrktCalltelephonenumberm').val(),
                CallDiscussion: $('#txtmrktCalldiscussioninm').val(),
                DisplayStatus: $("input:radio[name='displaycustomermrkts']:checked").val(),
                TicketID: $('#lblmrktticketm').text(),
                EmpID: empidObj
            }
        }

        var status = CallApi("SubmitmrktIncomingCall", datain)
        if ($('#' + e.id).text() == "Incomg Call & Assign me") {
            CommonAssignSubmit('Incoming Call');
        }
        else {
            statusAlert(status.d, 'marketingticketpopup', 'Incoming Call Created successfully', 'Incoming Call updation failed');
        }
        var idcount = $("#Label1m").text();
        var popupidnew = $("#lblticIDm" + idcount + "").text();
        var iddivcount = $('#lblUpdatedivm').text();
        var dividcount = $("#Updatedivm" + iddivcount + "").text();

        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketIDm").text();
            var callreceivedby = $('#txtmrktRelationnamem').val() + "(" + getvaluestext('#ddlmrktreceivedfromm') + ")";
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("INCOMING", currentdate, empNameObj, $("#ddlmrktCallresultm option:selected").text(),
                     callreceivedby, $('#txtmrktCalldiscussioninm').val(), "", "", "");

                $("#Updatedivm" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktRelationnamem');
        cleartxtboxes('txtmrktCalltelephonenumberm');
        cleartxtboxes('txtmrktCalldiscussioninm');
        Resetforradiobuttons("displaycustomermrktm");
        $('#ddlmrktreceivedfromm').multiselect('select', ['0']);
    }
    return false;
}

function submitOutCallsmarketing(e) {
    if ($('#ddlmrktreceivedbym').val() == 0 || $('#ddlmrktcallresultoutm').val() == 0
   || $('#ddlmrktreplytypeoutm').val() == 0 || $('#txtmrktRelationnameoutm').val() == '' || $('#txtmrktCalltelephonenumberoutm').val() == '') {
        DynamicTimeAlert('Please enter all mandatory values', 'alert alert-danger', 4000);
    }
    else {
        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                CallType: 2,
                Calledon: currentdate,
                RelationID: $('#ddlmrktreceivedbym option:selected').val(),
                RelationName: $('#txtmrktRelationnameoutm').val(),
                CallResult: $('#ddlmrktcallresultoutm option:selected').val(),
                StaffCalled: empidObj,
                PhoneNum: $('#txtmrktCalltelephonenumberoutm').val(),
                CallDiscussion: $('#txtmrktCalldiscussionoutm').val(),
                DisplayStatus: $("input[name='displaycustomeroutmrktm']:checked").val(),
                TicketID: $('#lblmrktticketm').text(),
                EmpID: empidObj
            }
        }
        var status = CallApi("SubmitmrktIncomingCall", datain);
        if ($('#' + e.id).text() == "Outgoing Call & Assign me") {
            CommonAssignSubmit('Outgoing Call');
        }
        else {
            statusAlert(status.d, 'marketingticketpopup', 'Outgoing Call Created successfully', 'Outgoing Call updation failed');
        }
        var idcount = $("#Label1m").text();
        var popupidnew = $("#lblticIDm" + idcount + "").text();
        var iddivcount = $('#lblUpdatedivm').text();
        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketIDm").text();
            var callreceivedby = $('#txtmrktRelationnameoutm').val() + "(" + getvaluestext('#ddlmrktreceivedbym') + ")";
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("OUT GOING", currentdate, empNameObj, $("#ddlmrktcallresultoutm option:selected").text(),
                     callreceivedby, $('#txtmrktCalldiscussionoutm').val(), "", "", "");
                $("#Updatedivm" + iddivcount + "").prepend(appenddiv);
            }
        }
        cleartxtboxes('txtmrktRelationnameoutm');
        cleartxtboxes('txtmrktCalltelephonenumberoutm');
        cleartxtboxes('txtmrktCalldiscussionoutm');
        Resetforradiobuttons("displaycustomeroutmrktm");
    }
    return false;
}

function submitMemomarketing(e) {
    if ($('#ddlmrktempmemom').val() == 0 || $('#txtmrktmemocalldiscussionm').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();

        datain = {
            Mobj: {
                AssignedEmpID: $('#ddlmrktempmemom option:selected').val(),
                TicketID: $('#lblmrktticketm').text(),
                EmpID: empidObj,
                Message: $('#txtmrktmemocalldiscussionm').val()
            }
        }
        var status = CallApi("SubmitmrktMemo", datain);
        if ($('#' + e.id).text() == "Internal Memo & Assign me") {
            CommonAssignSubmit('Memo');
        }
        else {
            statusAlert(status.d, 'marketingticketpopup', 'Memo Created successfully', 'Memo updation failed');
        }
        var idcount = $("#Label1m").text();
        var popupidnew = $("#lblticIDm" + idcount + "").text();
        var iddivcount = $('#lblUpdatedivm').text();

        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketIDm").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                     "", $('#txtmrktmemocalldiscussionm').val(), "", "", "");

                $("#Updatedivm" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktmemocalldiscussionm');

    }
    return false;
}
function CommonAssignSubmit(strAction) {

    var datain = {
        Mobj: {
            EmpID: empidObj,
            AssignedEmpID: empidObj,
            TicketID: $('#lblmrktticketm').text(),
            StatusID: 2
        }

    }
    var status = CallApi("SubmitReAssignticket", datain)
    statusAlert(status.d, 'marketingticketpopup', "" + strAction + " Created  & Ticket Assigned successfully", 'Ticket assigning failed');

}
function submitCloseTicketmrketing() {
    if ($('#txtmrktclosecalldiscusnm').val() == '') {
        DynamicTimeAlert('Please enter reason for closing this ticket', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();

        datain = {
            Mobj: {
                TicketID: $('#lblmrktticketm').text(),
                EmpID: empidObj,
                ReasonforClose: $('#txtmrktclosecalldiscusnm').val()
            }
        }
        var status = CallApi("SubmitmrktCloseticket", datain);
        var idcount = $("#Label1m").text();
        var popupidnew = $("#lblticIDm" + idcount + "").text();
        var iddivcount = $('#lblUpdatedivm').text();

        statusAlert(status.d, 'marketingticketpopup', 'Ticket closed successfully', 'Ticket closing failed');


        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketIDm").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("Close", currentdate, empNameObj, "",
                     "", $('#txtmrktclosecalldiscusnm').val(), "", "", "");

                $("#Updatedivm" + iddivcount + "").prepend(appenddiv);

            }

        }
        cleartxtboxes('txtmrktclosecalldiscusnm');
        $('#ddlmrktreplytypeCloseticketm').multiselect('select', ['0']);
    }
    return false;
}

function submitAssignTicketmarketing() {

    if ($('#ddlmrktAssingnEmpm').val() == 0) {
        DynamicTimeAlert('Please select Staff name', 'alert alert-danger', 4000);
    }
    else {

        var d1 = new Date();
        var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
        datain = {
            Mobj: {
                EmpID: empidObj,
                AssignedEmpID: $('#ddlmrktAssingnEmpm option:selected').val(),
                TicketID: $('#lblmrktticketm').text(),
                StatusID: 2
            }
        }
        var status = CallApi("SubmitReAssignticket", datain)
        statusAlert(status.d, 'marketingticketpopup', 'Ticket Assigned successfully', 'Ticket assigning failed');
        var idcount = $("#Label1m").text();
        var popupidnew = $("#lblticIDm" + idcount + "").text();
        var iddivcount = $('#lblUpdatedivm').text();
        if (parseInt(status.d) == parseInt(1)) {
            var popupid = $("#lblmrktTicketIDm").text();
            if (popupidnew == popupid) {
                var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj, "",
                     "", "Reassign to " + getvaluestext('#ddlmrktAssingnEmpm'), "", "", "");

                $("#Updatedivm" + iddivcount + "").prepend(appenddiv);

            }

        }
        $('#ddlmrktAssingnEmpm').multiselect('select', ['0']);
    }
    return false;
}
