'use strict'
var PaidTypeaccept = $('#ctl00_lblpaid').text(), replaycustid, replaylogid;
var strfail = "No records found";
var tableTypes = 'C', Yourfilter = null, Oppfilter = null, interstTYpe = 1, genderpartner = "", genderpartnerid, genderpartneridtext,
    notifytype, type = 'partnertype', ExpressFlag = 'received', flag = 9, startindex = 1, endindex = 9, scrolltypebindflag = "List", flagstrstustatus = "", flagstrheader = "", Flagchat = "", PaidType, LoginPhotoIsActive;
var notifications = function (str) {
    return "<p class='clearfix'>"
                                     + " <span id='lblRepeateContains'>" + str + "</span>"
                                      + "<a id='lnkViewNotificationsbind' href='javascript:void(0);' onclick='return NotifyClick(" + JSON.stringify(str) + ",1,9);'>View details</a>"
                                  + "</p>";
}
function genderpartnerids() {
    
    var dd = $('#ctl00_lblprofile').text();
    var gender = CallApi('CustomerDashBoard.aspx/Getgendercustomer', { Profileids: dd });
    return gender.d;
}
$(function () {
    genderpartnerid = genderpartnerids() == 1 ? "Bride" : "Groom";
    genderpartneridtext = genderpartnerids() == 1 ? "Brides" : "Grooms";
    var ddd = JSON.parse(localStorage.getItem("LoginDate"));

    document.getElementById("ExpressInterestDivuuuu").style.display = "none";
    PaidType = $('#ctl00_lblpaid').text();
    BindLandingCounts();
    $('.bootstro-nav-wrapper').attr('style', 'display: none;');

});
function BindLandingCounts() {
    var loginFlag = false;
    var LandCounts = JSON.parse(localStorage.getItem("LandingInfo"));

    var LoginDate = JSON.parse(localStorage.getItem("LoginDate"));

    if (LandCounts == null || LandCounts.d == undefined || LandCounts.d == null) {
        LandCounts = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: 1, pageto: 9 } });
        localStorage.setItem("LandingInfo", JSON.stringify(LandCounts));
        localStorage.setItem("EncryptstrCustid", JSON.stringify(EncryptstrCustid));
        loginFlag = true;
    }
    else {
        var EncryptstrCustidCache = JSON.parse(localStorage.getItem("EncryptstrCustid"));
        if (EncryptstrCustidCache != EncryptstrCustid) {
            LandCounts = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: 1, pageto: 9 } });
            localStorage.setItem("LandingInfo", JSON.stringify(LandCounts));
            localStorage.setItem("EncryptstrCustid", JSON.stringify(EncryptstrCustid));
        }
    }

    //var LandCounts = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: 1, pageto: 9 } });
    if (LandCounts.d.DashBoardCounts != undefined) {
        bindCounts('lnkSavedSearch', LandCounts.d.DashBoardCounts.SaveSearchCount);
        bindCounts('lnkMyWhobookmarked', LandCounts.d.DashBoardCounts.WhobookmarkedCount);
        bindCounts('lnkMybookmarked', LandCounts.d.DashBoardCounts.MybookMarkedProfCount);
        bindCounts('lnkRecentlyviewed', LandCounts.d.DashBoardCounts.RectViewedProfCount);
        bindCounts('lnkRecentlywhoviewed', LandCounts.d.DashBoardCounts.RectWhoViewedCout);
        bindCounts('lnkIgnored', LandCounts.d.DashBoardCounts.IgnoreProfileCount);
        //express and other bind counts		

        bindExpcounts('lnkNewIDsExp', LandCounts.d.DashBoardCounts.ExpressIntReceived);
        bindExpcounts('lnkACCEPTEDExp', LandCounts.d.DashBoardCounts.ExpressIntSent);
        bindExpcounts('spnallprofiles', LandCounts.d.DashBoardCounts.ExpressAllcount);

        bindExpcounts('lnkNewIDmsgs', LandCounts.d.DashBoardCounts.NewMsgs);
        bindExpcounts('lnkACCEPTEDmsgs', LandCounts.d.DashBoardCounts.TotalMsgs);

        bindExpcounts('lnkNewIDsReceivedReq', LandCounts.d.DashBoardCounts.ReceivedPhotoRequestCount);
        bindExpcounts('lnkRecHoroReq', LandCounts.d.DashBoardCounts.ReceivedHoroRequestCount);
        bindExpcounts('lnkNewIDsSentReq', LandCounts.d.DashBoardCounts.SentPhotoRequestCount);
        bindExpcounts('lnkSentHoroReq', LandCounts.d.DashBoardCounts.SentHoroRequestCount);

        bindExpcounts('lnkNewIDsReceivedProtec', LandCounts.d.DashBoardCounts.ReceivedProtectedNew);
        bindExpcounts('lnkACCEPTEDReceivedProtec', LandCounts.d.DashBoardCounts.ReceivedProtectedAccept);
        bindExpcounts('lnkREJECTEDReceivedProtec', LandCounts.d.DashBoardCounts.ReceivedProtectedReject);
        bindExpcounts('lnkNewIDsSentProtec', LandCounts.d.DashBoardCounts.SentProtectedReply);
        bindExpcounts('lnkACCEPTEDSentProtec', LandCounts.d.DashBoardCounts.SentProtectedAccept);
        bindExpcounts('lnkREJECTEDSentProtec', LandCounts.d.DashBoardCounts.SentProtectedReject);
    }
    if (LandCounts.d.PersonalInfo != undefined) {
        $('#lblCustName').text(LandCounts.d.PersonalInfo.NAME);
        var StrUrlApplicationnew = (LandCounts.d.PersonalInfo.Photo).replace(".jpeg", "");
        var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
        $('#imgprofile').attr('src', StrUrlApplicationnew1);
        $('#divMask').attr('class', LandCounts.d.PersonalInfo.MaskDiv);
        LoginPhotoIsActive = LandCounts.d.PersonalInfo.IsActive;
        alert(LandCounts.d.PersonalInfo.IsActive);
        $('#percentagecontrol').text(LandCounts.d.PersonalInfo.ProfileBattery == undefined ? '0%' : LandCounts.d.PersonalInfo.ProfileBattery + '%');
        $('#lblUHaveviewd').text('Suitable Profiles that match you');
        $('#lblOwner').text(LandCounts.d.PersonalInfo.EmployeeName);
        $('#lblOwnerContact').text(LandCounts.d.PersonalInfo.EmpPhone);
        $('#lnkEmails').text(LandCounts.d.PersonalInfo.EmailID);
        $('#lblOfficialContactNumber').text(LandCounts.d.PersonalInfo.OfficialContactNumber != null ? "," + LandCounts.d.PersonalInfo.OfficialContactNumber : "");
        $('#notifyDivc').append(notifications('New profiles waiting for you from last month'));
        $('#notifyDivc').append(notifications('your photograph has been viewed by members'));
    }

    if (requestTypePage == 'MyBookMarkedProfiles') {
        PersonalisedClick('MB', 'Profiles you have bookmarked');
    }
    else if (requestTypePage == 'WhoBookMarkedMe') {
        PersonalisedClick('WB', 'Profiles Who BookMarked You');
    }
    else if (requestTypePage == 'IgnoredProfiles') {
        PersonalisedClick('I', 'Profiles ignored by you');
    }
    else if (requestTypePage == 'RecentlyMembersViewedMyProfile') {
        PersonalisedClick('WV', ' Members viewed your profile');
    }



    else if (requestTypePage == 'Chats') {
        Flagchat = 'all';
        $('#MessagesDiv').html('');
        typeofdiv = "Chats";
        flag = 9, startindex = 1, endindex = 9;
        hideShowControls(['MessagesDiv'], true);
        hideShowControls(['PartnerProfilles', 'ExpressInterestDivuuuu', 'uctrlRequests', 'uctrlPhotoPassword', 'View'], false);
        chatBind(1, 9);

    }
    else if (requestTypePage == 'Requests') {


        tableTypes = 'RP';
        flag = 9;
        startindex = 1;
        endindex = 9;
        $('#uctrlRequests').html('');
        flagstrstustatus = strstustatus;
        flagstrheader = strheader;
        hideShowControls(['uctrlRequests'], true);
        hideShowControls(['ExpressInterestDivuuuu', 'MessagesDiv', 'PartnerProfilles', 'uctrlPhotoPassword', 'View'], false);
        RequestsPhotos(1, 9);

    }
    else if (requestTypePage == 'ExpressIntrst') {
        Expressintrst(undefined, undefined, undefined, 'lnkallprofiles');
        return false;
    }




    else {

        if (loginFlag == true) {

            if (LandCounts.d.PartnerProfilesnew != undefined) {

                genderpartner = (LandCounts.d.PartnerProfilesnew[0].iGenderID == 1 ? 'Groom' : 'Bride');
                //$('#lnkNewIDsExp').text("Interest  Expressed  By " + (LandCounts.d.PartnerProfilesnew[0].iGenderID == 1 ? 'Grooms' : 'Brides') + "(" + LandCounts.d.DashBoardCounts.ExpressIntReceived + ")");
                $('#lnkNewIDsExp').text("Interest  Expressed  By " + (genderpartneridtext) + "(" + LandCounts.d.DashBoardCounts.ExpressIntReceived + ")");
                scrolldivfunction(LandCounts.d.PartnerProfilesnew);
                tableTypes = 'P';
                loginFlag = false;
            }

        }
        else {

            
            // if (LandCounts.d.PartnerProfilesnew != undefined) {
            var partnerprof = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: 'P', pagefrom: 1, pageto: 9 } })
            if (partnerprof.d.PartnerProfilesnew != null && partnerprof.d.PartnerProfilesnew != undefined) {
                genderpartner = (partnerprof.d.PartnerProfilesnew[0].iGenderID == 1 ? 'Groom' : 'Bride');
            }
            // $('#lnkNewIDsExp').text("Interest  Expressed  By " + (partnerprof.d.PartnerProfilesnew[0].iGenderID == 1 ? 'Grooms' : 'Brides') + "(" + LandCounts.d.DashBoardCounts.ExpressIntReceived + ")");
            $('#lnkNewIDsExp').text("Interest  Expressed  By " + (genderpartneridtext) + "(" + LandCounts.d.DashBoardCounts.ExpressIntReceived + ")");
            scrolldivfunction(partnerprof.d.PartnerProfilesnew);
            tableTypes = 'P';
            // }
        }
    }



}
function bindExpcounts(lnkID, val) {
    if (val != undefined) {

        var ddd = $('#' + lnkID).text();
        if (ddd.indexOf('(') == -1)
            $('#' + lnkID).text($('#' + lnkID).text() + "  (" + val + ")")
    }
}
function BindPartnerProfiles(Lstartindex, Lendindex, tableNames) {

    tableTypes = tableNames;

    var data = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: Lstartindex, pageto: Lendindex } });

    scrolldivfunction(data.d.PartnerProfilesnew);
}

function bindCounts(lnkID, val) {
    if (val == 0 || val == null || val == undefined) {
        $('#' + lnkID).text($('#' + lnkID).text() + "(" + val + ")")
        $('#' + lnkID).hide();
    }
    else
        $('#' + lnkID).text($('#' + lnkID).text() + "(" + val + ")")
}

function PersonalisedClick(TableName, headername) {
    document.getElementById("Norows").style.display = 'none';
    document.getElementById('allinterestdivtabs').style.display = "none";
    document.getElementById('ExpSentReceiveBlock').style.display = "none";
    flag = 9; startindex = 1;
    endindex = 9;
    tableTypes = TableName;
    $('#lblUHaveviewd').text(headername);

    hideShowControls(['PartnerProfilles', 'View'], true);
    hideShowControls(['ExpressInterestDivuuuu', 'MessagesDiv', 'uctrlRequests', 'uctrlPhotoPassword'], false);

    $("#PartnerProfilles").html('');

    BindPartnerProfiles(startindex, endindex, TableName);
    ScrolltoTop();
    return false;
}
var ExpressDivCount = 0;
function GetExpressintrstDiv(FromPage, ToPage, colordiv) {

    ExpressDivCount += 1;
    typeofdiv = 'ExpressIntrst';
    var data = CallApi('CustomerDashBoard.aspx/ExpressInterestSelect', { dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, yourFilter: Yourfilter, oppfilter: Oppfilter, pagefrom: FromPage, pageto: ToPage } });
    var strexp;
    console.log(JSON.stringify(data.d));
    if (data != undefined && data != null && data.d.length > 0 && data.d != null && data.d != undefined) {
        MoreLinkHideShow(data.d[0].TotalRows);
        if (colordiv == "lnkallprofiles") {
            bindExpcounts('lnkyourinterest', data.d[0].YouProceed);
            bindExpcounts('lnkyournotinterest', data.d[0].Youskipped);
            bindExpcounts('lnkyourpending', data.d[0].YouPending);
            bindExpcounts('lnkbrideinterest', data.d[0].OppProceed);
            bindExpcounts('lnkbridenotinterest', data.d[0].Oppskipped);
            bindExpcounts('lnkbridePending', data.d[0].Opppending);

        }
        else if (colordiv == "lnknewExp") {
            bindExpcounts('lnkIntrst', data.d[0].YouProceed);
            bindExpcounts('lnknotintrst', data.d[0].Youskipped);
            bindExpcounts('lnkVwd', data.d[0].YouPending);
        }
        else if (colordiv == "lnkAcceptExp") {

            bindExpcounts('lnkIntrst', data.d[0].OppProceed);
            bindExpcounts('lnknotintrst', data.d[0].Oppskipped);
            bindExpcounts('lnkVwd', data.d[0].Opppending);

        }
        _.each(data.d, function (item, index) {
            ExpressDivCount = index + 1;
            var photoclass;
            var PhotoMaskDiv, StrUrlApplication = item.Photo;
            var StrUrlApplicationnew = StrUrlApplication.replace(".jpeg", "");
            var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
            var photoheightwidth = StrUrlApplication.indexOf("noimage") != -1 ? "height: 150px;width: 150px;" : "height: 150px;width: 150px;";
            if (LoginPhotoIsActive != null)
                PhotoMaskDiv = LoginPhotoIsActive != true && StrUrlApplication.indexOf("ThumbNail") != -1 ? "cssMaskdivrev clearfix" : "";
            else
                PhotoMaskDiv = StrUrlApplication.indexOf("ThumbNail") != -1 ? "cssMaskdiv clearfix" : "";

            if (PhotoMaskDiv == "cssMaskdiv clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
            }
            else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {

                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
            }
            else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {

                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
                lnkphototext = "";
            }
            else if (StrUrlApplication.indexOf("noimage") != -1) {

                photoclass = "Linkdisabled";
            }
            else if (StrUrlApplication.indexOf("Password-Protected") != -1) {

                if (PhotoMaskDiv == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                }
                else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                photoclass = "Linkdisabled";
            }
            else if ((item.PhotosCount) == 1) {
                photoclass = "Linkdisabled";

            }
            else {
                photoclass = "";

            }

            if (colordiv == "lnkallprofiles" || colordiv == "lnknewExp" || colordiv == "lnkAcceptExp") {
                $("#lblSearchresultCount").html(item.TotalRows);
            }

            var tickethistorydislay = item.CommunicationHistoryFlag == 1 ? "color: #ab1818;display:block;" : "color: #ab1818;display:none;";
            var strSuggestedEmp = item.SuggestionFlag == 1 ? ("<h4>Note: <span>This profile suggested by employee  -</span><em>" + item.SuggestEmpName + "- </em><span>Ph: </span><em>" + item.SuggestedEmpNumber + ",</em></h4>") : "";
            var strtoggle = item.Mystatus == "Not Viewed" ? "" : "popover";
            var relationmagmobile = item.RelationShipManagerNumber != null ? " 91 - " + item.RelationShipManagerNumber : "";
            var realtionmagemail = relationmagmobile != "" ? "," + item.RelationShipManagerEmail : "";
            var realtionmagemails = relationmagmobile != "" ? item.RelationShipManagerEmail : "";
            var custmob = item.PhoneNumber != undefined && item.PhoneNumber != "" ? item.PhoneNumber : "";
            var custEmail = item.Email != undefined && item.Email != "" ? item.Email : "";
            var relationShipManager = (item.RelationShipManagerName != null && item.RelationShipManagerName != undefined) ? "<h3 class='no-padding'>Relationship manager (RM):<em style='padding: 0 0 0 10px;'>" + item.RelationShipManagerName + "</em><span class='no-padding'> " + relationmagmobile + "<a href='javascript:void(0);'>" + realtionmagemail + "</a> </span></h3>" : "<h3 class='no-padding'>Relationship manager (RM):<em> venkat - 9848344977</em></h3>";
            var hidecontactbranch = (item.TicketID != null && item.TicketID != undefined && item.TicketID != "") ? "width: 150px;display:block;" : "width: 150px;display:none;";
            if (tableTypes == 'R' || tableTypes == 'S' || tableTypes == undefined) {
                //data-toggle='" + strtoggle + "'
                var stryourinterest = item.Mystatus == "Proceed" || item.Mystatus == "Skipped" ? "<label class='control-label' style='float: left;width:120px;'>" + item.Mystatus + "</label>" : "<a href='javascript:void(0);'  onclick='return Notviewedviewedprofiles(" + JSON.stringify(item.Mystatus) + "," + JSON.stringify(item.NAME) + "," + JSON.stringify("popover") + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify(item.ProfileID) + "," + JSON.stringify('hideexpressintdiv' + ExpressDivCount) + ");' style='float: left;width:120px;'>" + item.Mystatus + "</a>";

                var Fullprofileshowproceed = item.Mystatus == "Proceed" || item.Mystatus == "Skipped" || item.Mystatus == "Viewed" ? "display:block;" : "display:none;";

                var strfullprofiledisplay = item.Mystatus == "Proceed" || item.Mystatus == "Skipped" || item.Mystatus == "Not Viewed" ? "display:none;" : "display:block;";
                var showfullprofile = item.Mystatus == "Proceed" || item.Mystatus == "Skipped" || item.Mystatus == "Viewed" ? "display:none;" : "display:block;";
                var showskip = item.Mystatus == "Proceed" || item.Mystatus == "Skipped" ? "display:none" : "display:block;";

                var displaycontacts = item.Mystatus == "Proceed" ? "display:block;" : "display:none;";


                strexp = "<div id='hideexpressintdiv" + ExpressDivCount + "' style='border-bottom: solid 3px #888;margin-bottom: 24px;'><div class='sugested_block sugested_block_top' id='ExpressDiv" + ExpressDivCount + "'>"
           + "                                                <div class='sugested_block_top_lft'>"
           + "                                                  <span  class=" + JSON.stringify(photoclass) + "><input style='" + photoheightwidth + "' type=image onclick='return getimgPathforcustomersite(" + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.ProfileID) + "," + JSON.stringify(item.PhotosCount) + ")' src='" + StrUrlApplicationnew1 + "' alt='sugested'></span>"


           + "                                                </div>"
           + "                                                <div class='sugested_block_top_rht'>"
           + ExpressPartnerInfo(item.NAME, item.ProfileID, item.Age, item.Caste, item.Height, item.Education, item.profession)
           + "                                                    <div class='clear'></div>"
           + "                                                    <div class='sugested_block_top_skip'>"
           + "                                                        <ul>"
           + "                                                            <li style='" + showfullprofile + "'><a class='active' href='javascript:void(0);' onclick='return ShowFullProfile(" + JSON.stringify(item.ProfileID) + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.recentlyviewes) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify(PaidTypeaccept) + ");' >View Full Profile</a></li>"
           + "                                                             <li style='" + strfullprofiledisplay + "'><a class='active' href='javascript:void(0);' onclick='return acceptlink(" + JSON.stringify("I") + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify('hideexpressintdiv' + ExpressDivCount) + ");' style='width: 150px;'>Proceed</a></li>"
           + "                                                             <li style='" + showskip + "'><a href='javascript:void(0);' onclick='return acceptlink(" + JSON.stringify("NI") + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify('hideexpressintdiv' + ExpressDivCount) + ");' >skip this profile</a></li>"
           + "                                                             <li style='" + displaycontacts + "'><a class='active' href='javascript:void(0);' onclick='return showviewcontacts(" + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(relationmagmobile) + "," + JSON.stringify(realtionmagemails) + "," + JSON.stringify(custmob) + "," + JSON.stringify(custEmail) + ");'>view Contacts</a></li>"
           + "                                                             <li style='" + tickethistorydislay + "'><a class='active' href='javascript:void(0);'  id='communication" + ExpressDivCount + "'   onclick='return TicketHistry(" + JSON.stringify(item.TicketID) + "," + JSON.stringify("popover") + "," + JSON.stringify("communication" + ExpressDivCount) + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify(item.NAME) + "," + JSON.stringify(item.ProfileID) + ");' class='TicketHistryPopover'>communication history</a></li>"
           + "                                                        </ul>"
           + "                                                        <div class='clear'></div>"
           + "                                                    </div>"
           + "                                                </div>"

           + "                                                <div class='clear'></div>"
           + "                                            </div>"
           + "                                                      <div class=row> <div class='col-lg-5 col-lg-offset-1'><label class='' style='width: 101px;float: left;'>Your Status :</label>" + stryourinterest + "<a style='" + Fullprofileshowproceed + "' href='javascript:void(0);' onclick='return ShowFullProfile(" + JSON.stringify(item.ProfileID) + "," + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.recentlyviewes) + "," + JSON.stringify(item.LogID) + "," + JSON.stringify(PaidTypeaccept) + ");'>View Full Profile</a></div> <div class='col-lg-6'><label class='' style='width: 109px;float: left;'>" + genderpartnerid + " Status :</label><label class='control-label' style='float: left;width:120px;'>" + item.OppStatus + "</label></div></div>"
           + "                                            <div class='sugested_block_branch'>"
           + "                                                <div class='sugested_block_branch_lft'>"
           + "                                                    <h3>Services given branch:<span style='padding: 0 0 0 10px;'>" + item.ServiceGivenBanch + "</span></h3>"
           + relationShipManager
           + "                                                </div>"
           + "                                                <div class='sugested_block_branch_rht'><a href='javascript:void(0);' onclick='return ContactBranch(" + JSON.stringify(item.Cust_ID) + "," + JSON.stringify(item.LogID) + ");' style='" + hidecontactbranch + "'>Message To RM</a></div>"
           + "                                                <div class='clear'></div>"
           + "                                            </div>"
           + "<div class='sugested_block_note'>"
          + strSuggestedEmp
                + "</div></div>"
                $('#match1').append(strexp);

            }

        });
    }
    else {
        $('#match1').append("<h3>No Recrds Found<br><br></h3>");
    }
    return data.d;
}

function ExpressPartnerInfo(NAME, ProfileID, Age, Caste, Height, Education, profession) {

    return "<h2>" + NAME + " (" + ProfileID + ")</h2>"
       + "   <ul>"
       + "       <li><span>" + Age + "</span></li>"
       + "       <li><span>" + Caste + "</span></li>"
       + "       <li><span>" + Height + "</span></li>"
       + "       <li><span>" + Education + " </span></li>"
       + "       <li><span class='no_bdr'>" + (profession != null ? profession : "") + "</span></li>"
       + "   </ul>";
}

function Expressintrst(type, yourfil, oppfil, colordiv) {
    document.getElementById("Norows").style.display = 'none';
    if ($('#' + colordiv).text().indexOf('(0)') == -1) {
        document.getElementById('allinterestdivtabs').style.display = "block";
        //document.getElementById('ExpSentReceiveBlock').style.display = "block";
        flag = 9; startindex = 1; endindex = 9;
        tableTypes = type;
        Yourfilter = yourfil == undefined ? null : yourfil;
        Oppfilter = oppfil == undefined ? null : oppfil;
        document.getElementById("ExpressInterestDivuuuu").style.display = "block";
        hideShowControls(['PartnerProfilles', 'MessagesDiv', 'uctrlRequests', 'uctrlPhotoPassword', 'View'], false);
        flag = 9, startindex = 1, endindex = 9;

        hideShowControls(['PartnerProfilles'], false);
        $('#match1').html('');
        $('.Removecolor').attr('style', 'width: 117px;');

        switch (colordiv) {
            case "lnkallprofiles":
                $('.Removecolor').attr('style', 'width: 117px;');
                hideShowControls(['allinterestdivtabs'], true);
                hideShowControls(['ExpSentReceiveBlock'], false);
                $('#lblUHaveviewd').text('All Profiles');
                break;
            case "lnknewExp":
                hideShowControls(['ExpSentReceiveBlock'], true);
                hideShowControls(['allinterestdivtabs'], false);
                $('#lnkIntrst').text('I interesed in');
                $('#lnknotintrst').text('I skipped');
                $('#lnkVwd').text('I Viewed/NotViewed');
                $('.Removecolor').attr('style', 'width: 117px;');
                $('#lnkIntrst').attr('style', 'width: 180px;');
                $('#lnknotintrst').attr('style', 'width: 180px;');
                $('#lnkVwd').attr('style', 'width: 280px;');
                var lnk = ($('#lnknewExp').text()).split('(');
                $('#lblUHaveviewd').text(lnk[0]);
                break;
            case "lnkAcceptExp":
                hideShowControls(['ExpSentReceiveBlock'], true);
                hideShowControls(['allinterestdivtabs'], false);
                $('#lnkIntrst').text('' + genderpartnerid + ' interesed');
                $('#lnknotintrst').text('' + genderpartnerid + ' skipped');
                $('#lnkVwd').text('' + genderpartnerid + ' Viewed/NotViewed');
                $('.Removecolor').attr('style', 'width: 117px;');
                $('#lnkIntrst').attr('style', 'width: 180px;');
                $('#lnknotintrst').attr('style', 'width: 180px;');
                $('#lnkVwd').attr('style', 'width: 280px;');
                $('#lblUHaveviewd').text('I Sent Interest');
                break;
            case "lnkIntrst":
                hideShowControls(['ExpSentReceiveBlock'], true);
                hideShowControls(['allinterestdivtabs'], false);
                Yourfilter = $('#lnkIntrst').text().indexOf('I interesed in') != -1 ? 'I' : null;
                Oppfilter = $('#lnkIntrst').text().indexOf('I interesed in') == -1 ? 'I' : null;
                tableTypes = $('#lnkIntrst').text().indexOf('I interesed in') != -1 ? 'R' : 'S';
                removecolors(colordiv);
                break;
            case "lnknotintrst":
                hideShowControls(['ExpSentReceiveBlock'], true);
                hideShowControls(['allinterestdivtabs'], false);
                Yourfilter = $('#lnknotintrst').text().indexOf('I skipped') != -1 ? 'NI' : null;
                Oppfilter = $('#lnknotintrst').text().indexOf('I skipped') == -1 ? 'NI' : null;
                tableTypes = $('#lnknotintrst').text().indexOf('I skipped') != -1 ? 'R' : 'S';
                removecolors(colordiv);
                break;
            case "lnkVwd":
                hideShowControls(['ExpSentReceiveBlock'], true);
                hideShowControls(['allinterestdivtabs'], false);
                Yourfilter = $('#lnkVwd').text().indexOf('I Viewed/NotViewed') != -1 ? 'V,NV' : null;
                Oppfilter = $('#lnkVwd').text().indexOf('I Viewed/NotViewed') == -1 ? 'V,NV' : null;
                tableTypes = $('#lnkVwd').text().indexOf('I Viewed/NotViewed') != -1 ? 'R' : 'S';
                removecolors(colordiv);
                break;
            default:
                hideShowControls(['ExpSentReceiveBlock'], false);
                hideShowControls(['allinterestdivtabs'], true);
                $('.Removecolor').attr('style', 'width: 117px;');
                $('#' + colordiv).attr('style', 'width: 117px;color: white;background: maroon;');
                break;
        }

        var CountArray = GetExpressintrstDiv(1, 9, colordiv);
        var gender = CountArray[0].iGenderID == 2 ? 'Bride' : 'Groom';
        $('#partnerdivinterest').html(gender);
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
    return false;
}


function removecolors(colordiv) {
    hideShowControls(['ExpSentReceiveBlock'], true);
    hideShowControls(['allinterestdivtabs'], false);
    $('.Removecolors').attr('style', 'width: 117px;');
    $('#lnkIntrst').attr('style', 'width: 180px;');
    $('#lnknotintrst').attr('style', 'width: 180px;');
    $('#lnkVwd').attr('style', 'width: 280px;');
    if (colordiv == "lnkVwd") {
        $('#' + colordiv).attr('style', 'width: 280px;color: white;background: maroon;');
    }
    else {
        $('#' + colordiv).attr('style', 'width: 180px;color: white;background: maroon;');
    }
    return false;
}

function Chats(type, e) {
    document.getElementById('allinterestdivtabs').style.display = "none";
    document.getElementById('ExpSentReceiveBlock').style.display = "none";
    ScrolltoTop();
    Flagchat = type;
    $('#MessagesDiv').html('');
    typeofdiv = "Chats";
    if ($('#' + e.id).text().indexOf('(0)') == -1) {
        flag = 9, startindex = 1, endindex = 9;

        hideShowControls(['MessagesDiv'], true);
        hideShowControls(['PartnerProfilles', 'ExpressInterestDivuuuu', 'uctrlRequests', 'uctrlPhotoPassword', 'View'], false);
        chatBind(1, 9);
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
    return false;
}

function chatBind(start, end) {
    var msgs;
    if (Flagchat == 'new') {
        msgs = CallApi('CustomerDashBoard.aspx/BindChats', { LoginCustID: LoginCustID, strStatus: 463, sp: 'usp_CustomerDashBoard_messages', From: start, To: end });
        $('#lblUHaveviewd').text('new messages');
    }
    else {
        $('#lblUHaveviewd').text('Total Messages');
        msgs = CallApi('CustomerDashBoard.aspx/BindChats', { LoginCustID: LoginCustID, strStatus: null, sp: 'usp_CustomerDashBoard_messages', From: start, To: end });
    }
    console.log(JSON.stringify(msgs));
    if (msgs.d.message != null && msgs.d.message.length > 0) {
        $('#MessagesDiv').html();
        if (msgs.d != undefined && msgs.d.message.length > 0 && msgs.d.message != null) {
            bindChatDiv(msgs.d.message, Flagchat);
        }
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }

}

function bindChatDiv(array, type) {

    var chatdiv;
    chatFlag += 1;
    MoreLinkHideShow(array[0].TotalRows);

    _.each(array, function (item, index) {
        $("#lblSearchresultCount").html(item.TotalRows);
        chatFlag = index + 1;
        var photoclass, StrUrlApplication = item.Photo, PhotoMaskDiv;
        photoclass = MaskClass(StrUrlApplication);
        var StrUrlApplicationnew = StrUrlApplication.replace(".jpeg", "");
        var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
        chatdiv = "<div class='messages_list_item clearfix'>"
   + "                    <div class='messages_list_item_lt'>"
   + "                        <span  class=" + JSON.stringify(photoclass) + ">"
   + "                            <img id='Iimagesdisplay' src='" + StrUrlApplicationnew1 + "' style='height:120px;width:120px;'></span>"
   + "                    </div>"
   + "                    <div class='messages_list_item_rt'>"
   + "                        <p>"
   + "                            Member Id :"
   + "        <span id='lblMseeageProfileID'>" + item.ProfileID + "</span>"
   + "</p>"
   + "<p>"
   + "<span id='lblName'>" + item.NAME + "</span>"
   + "</p>"
   + "<p class='Messages_profile_view clearfix'>"
   + "    <span id='lblAge'>" + item.Age + "</span><span id='lblCastIDs'>" + item.Caste + "</span><span id='lblheight'>" + item.HeightInCentimeters + "</span>"
   + "    <span id='lblEducation'>" + item.Education + "</span>"
   + "    <span id='lblProfessionID'>" + item.Profession + "</span>"
   + "</p>"
   + "<div class='messages_list_item_ui clearfix'>"
   + "    <div id='updateContentKK'>"
   + "            <ul>"
   + "                <li class='clearfix' style='width: 100%;'>"
   + "                    <a onclick='return ShowFullProfile(" + JSON.stringify(item.ProfileID) + "," + JSON.stringify(item.CustID) + "," + JSON.stringify(item.ViewedFlag) + "," + JSON.stringify("") + "," + JSON.stringify(PaidTypeaccept) + ");' id='lnkViewCompleteProfile_Message' class='pull-left' href='javascript:void(0);'>View Complete Profile</a><a id='lnkCommunicationHistory_Message' class='pull-right' href='javascript:void(0);' onclick='return ComunicationHistory(" + item.Cust_MessageLink_Id + "," + chatFlag + ");'>" + (type == 'new' ? 'New' : 'Communication History') + "(<b style='color:Maroon'>" + item.COUNT + "</b>)</a></li>"
   + "            </ul>"
   + "</div>"
   + "    <div class='clear'>"
   + "    </div>"
   + "</div>"
   + "<div class='messages_list_item_rt_rcdate'>"
   + "    <p>"
   + "        Message Received Date :"
   + "        <span id='lblRequestDatemsg'>" + item.RequestDate + "</span>"
   + "</p>"
   + "</div>"
   + "</div>"
   + "<div class='clear'></div>"
   + "<div id='JJHDDDDD'>"
   + "        <div class='messages_list_item_form clearfix'>"
   + "            <div class='messages_list_item_form_cont'>"
   + "                <h6>Message Status</h6>"
   + "                <p>"
   + "                    <span id='lblMessages'>          " + ((item.MessageStatusID == "463" || JSON.stringify(item.IsReviewd) == "0") ?
                                         (JSON.stringify(item.loginCustid) == JSON.stringify(item.LastRepliedBy) ? "Message unread by " + item.NAME : "New mesage from " + item.NAME) :
                                         (JSON.stringify(item.MessageStatusID) == "464" ? (JSON.stringify(item.LastRepliedBy) == JSON.stringify(item.loginCustid) ? "Message read by " + item.NAME : "Reply pending from your side since " + JSON.stringify(item.RequestDate)) : "")) + "           </span>"
   + "                    &nbsp;&nbsp;&nbsp;&nbsp;"
   + "    </p>"
   + "</div>"
   + "</div>"
   + "<div>   "
   + "</div> "
   + "</div>"
   + label(('lblCustIDs' + chatFlag), JSON.stringify(item.CustID))
   + label(('lblReviewID' + chatFlag), JSON.stringify(item.IsReviewd))
   + label(('lblMessageHistoryID' + chatFlag), JSON.stringify(item.Cust_MessageHistory_Id))
   + label(('lblMessageLinkID' + chatFlag), JSON.stringify(item.Cust_MessageLink_Id))
   + label(('lblMseeageProfileID' + chatFlag), JSON.stringify(item.ProfileID))
   + label(('lblRowCount' + chatFlag), chatFlag)
   + "</div>";

        $('#MessagesDiv').append(chatdiv);
    });
}

function hideShowControls(HideArrControls, booltype) {
    _.each(HideArrControls, function (item) {
        if (booltype == true)
            $('#' + item).show();
        else
            $('#' + item).hide();
    });
}

function receivesrecphoto(strstustatus, strheader, e) {
    document.getElementById('allinterestdivtabs').style.display = "none";
    document.getElementById('ExpSentReceiveBlock').style.display = "none";
    ScrolltoTop();
    if ($('#' + e.id).text().indexOf('(0)') == -1) {
        tableTypes = strstustatus;
        flag = 9;
        startindex = 1;
        endindex = 9;
        $('#uctrlRequests').html('');
        flagstrstustatus = strstustatus;
        flagstrheader = strheader;
        hideShowControls(['uctrlRequests'], true);
        hideShowControls(['ExpressInterestDivuuuu', 'MessagesDiv', 'PartnerProfilles', 'uctrlPhotoPassword', 'View'], false);

        RequestsPhotos(1, 9);
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
    return false;
}

function RequestsPhotos(start, end) {
    typeofdiv = "Reqphoto";
    $('#lblUHaveviewd').html(flagstrheader);
    //var Requestss = CallApi('CustomerDashBoard.aspx/BindChats', { LoginCustID: LoginCustID, strStatus: flagstrstustatus, sp: "usp_GetCustPhotoRequest_Profor", From: start, To: end });
    var Requestss = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: start, pageto: end } });
    console.log(JSON.stringify(Requestss.d.PartnerProfilesnew));
    //Requestss.d.PartnerProfilesnew
    if (Requestss.d.PartnerProfilesnew != null && Requestss.d.PartnerProfilesnew != undefined) {
        MoreLinkHideShow(Requestss.d.PartnerProfilesnew[0].TotalRows);
    }
    if (Requestss.d.PartnerProfilesnew != null) {
        if (Requestss.d != undefined && Requestss.d.PartnerProfilesnew.length > 0 && Requestss.d.PartnerProfilesnew != null) {

            for (var i = 0; i < Requestss.d.PartnerProfilesnew.length; i++) {

                var photoclass, StrUrlApplication = Requestss.d.PartnerProfilesnew[i].Photo, DescribeYourSelfSub = "";
                //var photoclass, StrUrlApplication = Requestss.d.PartnerProfilesnew.Photo;
                if (flagstrstustatus == 1) {
                    DescribeYourSelfSub = Requestss.d.PartnerProfilesnew[i].DescribeYourSelf;
                }
                photoclass = MaskClass(StrUrlApplication);
                var StrUrlApplicationnew = StrUrlApplication.replace(".jpeg", "");
                var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
                $('#lblSearchresultCount').html(Requestss.d.PartnerProfilesnew[i].TotalRows);
                $('#uctrlRequests').append(
            "<div>"
           + "<div class='messages_list_item clearfix'>"
          + " <div class='messages_list_item_lt'>"
              + " <span  class='" + photoclass + "'>"
                + "   <img  src=" + StrUrlApplicationnew1 + ">"
              + " </span>"
          + " </div>"
          + " <div class='messages_list_item_rt'>"
            + "   <p>"
                 + "  Member Id :"

       + "<span>" + Requestss.d.PartnerProfilesnew[i].ProfileID + "</span>"
  + " </p>"
 + "  <p>"
     + "  <span>" + Requestss.d.PartnerProfilesnew[i].NAME + "</span>"
  + " </p>"
  + " <p class='Messages_profile_view clearfix'>"

     + "  <span>" + Requestss.d.PartnerProfilesnew[i].Age + "</span><span>" + Requestss.d.PartnerProfilesnew[i].Caste + "</span><span>" + Requestss.d.PartnerProfilesnew[i].Height + "</span><span>" + Requestss.d.PartnerProfilesnew[i].Education + "</span><span>" + Requestss.d.PartnerProfilesnew[i].profession + "</span>"
  + " </p>"
  + " <div class='messages_list_item_ui clearfix'>"
      + " <div>"

        + "   <ul>"
            + "   <li class='clearfix'>"

                + "   <a href='javascript:void(0);' onclick='return ShowFullProfile(" + JSON.stringify(Requestss.d.PartnerProfilesnew[i].ProfileID) + "," + JSON.stringify(Requestss.d.PartnerProfilesnew[i].Cust_ID) + "," + JSON.stringify(Requestss.d.PartnerProfilesnew[i].recentlyviewes) + "," + JSON.stringify("") + "," + JSON.stringify(PaidTypeaccept) + ");'>View Complete Profile</a></li>"
              + " <li class='clearfix'></li>"
           + "</ul>"

       + "</div>"
  + " </div>"
 + "  <div class='messages_list_item_rt_rcdate messages_list_item_rt_rcdate2'>"
      + " <p>"
        + "   Request sent Date :"
      + " <span>" + Requestss.d.PartnerProfilesnew[i].RequestDate + "</span>"
  + " </p>"
+ "</div>"
+ "<p>"
  + " <span>" + DescribeYourSelfSub + "</span>"
+ "</p>"
+ "<div>"
+ "</div>"
+ "<p></p>"
+ "</div>"
+ "<div class='clear'></div>"
+ "</div>"
+ "<div>"
+ "</div>"
+ "</div>");


            }

        }

    }
    return false;
}

$(window).scroll(function () {

    //if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.9) {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {

        //document.getElementById("divloadmore").style.display = 'none';
        document.getElementById("Norows").style.display = 'none';

        paging();

    }

    return false;
});
function paging() {
    if (endindex < parseInt($('#lblSearchresultCount').html())) {
        flag += 9;
        startindex = flag - 8;
        endindex = flag;
        switch (typeofdiv) {
            case "Reqphoto":
                RequestsPhotos(startindex, endindex);
                break;

            case "ReqphotoPassword":
                Reqphotopassword(startindex, endindex);
                break;

            case "Grid":

                BindPartnerProfiles(startindex, endindex, tableTypes);
                Changelist();
                break;

            case "List":
                BindPartnerProfiles(startindex, endindex, tableTypes);
                Changetogrid();
                break;

            case "Chats":
                chatBind(startindex, endindex);
                break;
            case "ExpressIntrst":
                GetExpressintrstDiv(startindex, endindex);
                break;
        }
    }
    else {
        document.getElementById("divloadmore").style.display = 'none';
        document.getElementById('Norows').style.display = 'block';
    }
}

var passwordCount = 0;
function Receivephotopassword(strstustatus, strheader, e) {
    document.getElementById('allinterestdivtabs').style.display = "none";
    document.getElementById('ExpSentReceiveBlock').style.display = "none";
    passwordCount = 0;
    ScrolltoTop();
    if ($('#' + e.id).text().indexOf('(0)') == -1) {
        tableTypes = strstustatus;
        flag = 9; startindex = 1;
        endindex = 9;
        $('#uctrlPhotoPassword').html('');
        flagstrstustatus = strstustatus;
        flagstrheader = strheader;
        hideShowControls(['uctrlPhotoPassword'], true);
        hideShowControls(['ExpressInterestDivuuuu', 'MessagesDiv', 'PartnerProfilles', 'uctrlRequests', 'View'], false);
        Reqphotopassword(1, 9);
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
    return false;
}
function Reqphotopassword(start, end) {

    typeofdiv = "ReqphotoPassword";
    $('#lblUHaveviewd').html(flagstrheader);
    var photoaccept, photoacceptnew;
    //var RequestPassword = CallApi('CustomerDashBoard.aspx/BindChats', { LoginCustID: LoginCustID, strStatus: flagstrstustatus, sp: "usp_GetCustPhotoProtect_Profor", From: start, To: end });
    var RequestPassword = CallApi('CustomerDashBoard.aspx/GetLandingCounts', { Dreq: { IntCustID: LoginCustID, TypeOfReport: tableTypes, pagefrom: start, pageto: end } });
   
    console.log(JSON.stringify(RequestPassword.d.PartnerProfilesnew));
    MoreLinkHideShow(RequestPassword.d.PartnerProfilesnew[0].TotalRows);
    if (RequestPassword.d.PartnerProfilesnew != null) {
        if (RequestPassword.d != undefined && RequestPassword.d.PartnerProfilesnew.length > 0 && RequestPassword.d.PartnerProfilesnew != null) {

            for (var i = 0; i < RequestPassword.d.PartnerProfilesnew.length; i++) {
                passwordCount = i + 1;
                var photoclass, StrUrlApplication = RequestPassword.d.PartnerProfilesnew[i].Photo, Buttons = "";
                photoclass = MaskClass(StrUrlApplication);

                if (tableTypes == 'RN') {
                    Buttons = "<div>"
           + " <div class='messages_list_item_ui exprss_intrst_ui clearfix'>"
           + "     <ul id='PhotoPassword" + passwordCount + "'>"
           + "         <li class='clearfix'>"
           + "             <a href='javascript:void(0);' onclick='return PhotoPasswordAction(" + JSON.stringify('Accept') + "," + JSON.stringify(RequestPassword.d.PartnerProfilesnew[i].Cust_ID) + "," + passwordCount + ");'>Accept</a></li>"
           + "         <li class='clearfix'>"
           + "             <a href='javascript:void(0);' onclick='return PhotoPasswordAction(" + JSON.stringify('reject') + "," + JSON.stringify(RequestPassword.d.PartnerProfilesnew[i].Cust_ID) + "," + JSON.stringify(passwordCount) + ");'>Reject</a></li>"
           + "         <input name='ctl00$ContentPlaceHolder1$uctrlPhotoPassword$lstPhotopassword$ctrl0$hdnAcceptReject' id='ctl00_ContentPlaceHolder1_uctrlPhotoPassword_lstPhotopassword_ctrl0_hdnAcceptReject' type='hidden'>"
           + "     </ul>"
           + " </div>"
           + " <div>"
           + " </div>"
+ "	</div>";
                }

                //if (tableTypes == 'SA') {
                //    var dataphoto = CallApi('CustomerDashBoard.aspx/Getphotoreplace', { photo: RequestPassword.d.PartnerProfilesnew[i].Photo });
                //    // photoaccept = (RequestPassword.d.PartnerProfilesnew[i].Photo).replace('\\', '//');
                //    //photoacceptnew = (photoaccept).replace('\\', '//');
                //}
                $('#lblSearchresultCount').html(RequestPassword.d.PartnerProfilesnew[i].TotalRows);
                $('#uctrlPhotoPassword').append("<div class='messages_list_item clearfix'>"
    + "<div class='messages_list_item_lt'>"
         + " <span class='" + photoclass + "'>"
          + "    <img src=" + RequestPassword.d.PartnerProfilesnew[i].Photo + ">"
       + "   </span>"
    + "  </div>"
    + "  <div class='messages_list_item_rt'>"
    + "      <p>"
          + "    Member Id :"
      + "<span>" + RequestPassword.d.PartnerProfilesnew[i].ProfileID + "</span>"
  + "</p>"
  + "<p>"
  + "<span>" + RequestPassword.d.PartnerProfilesnew[i].NAME + "</span><span style='display: none;'></span>"
  + "</p>"
  + "<p class='Messages_profile_view clearfix'>"

     + " <span>" + RequestPassword.d.PartnerProfilesnew[i].Age + "</span><span>" + Requestss.d.PartnerProfilesnew[i].Caste + "</span><span>" + RequestPassword.d.PartnerProfilesnew[i].Height + "</span><span>" + RequestPassword.d.PartnerProfilesnew[i].Education + "</span><span>" + RequestPassword.d.PartnerProfilesnew[i].profession + "</span>"
  + "</p>"
  + "<div class='messages_list_item_ui clearfix'>"
    + "  <div>"
       + "<ul>"
           + "<li class='clearfix'>"

               + "<a href='javascript:void(0);' onclick='return ShowFullProfile(" + JSON.stringify(RequestPassword.d.PartnerProfilesnew[i].ProfileID) + "," + JSON.stringify(RequestPassword.d.PartnerProfilesnew[i].Cust_ID) + "," + JSON.stringify(RequestPassword.d.PartnerProfilesnew[i].recentlyviewes) + "," + JSON.stringify("") + "," + JSON.stringify(PaidTypeaccept) + ");'>View Complete Profile</a></li>"
            + "<li class='clearfix'></li>"
         + " </ul>"

      + "</div>"
  + "</div>"
  + "<div class='messages_list_item_rt_rcdate' style='background-image: url(../images/interest_icon2.png);'>"
     + " <p>"
         + " Request sent Date :"
        + "<span>" + RequestPassword.d.PartnerProfilesnew[i].RequestDate + "</span>"
  + "</p>"
  + "</div>"

  + Buttons


  + "</div>"
  + "<div class='clear'></div>"
 + "</div>");
            }

        }

    }
    return false;
}

function servicesRedirectlinks(page) {
    //var EncryptstrCustid = "vh6saATGYxIq/PxwJfklVg==";

    document.getElementById('allinterestdivtabs').style.display = "none";
    document.getElementById('ExpSentReceiveBlock').style.display = "none";
    switch (page) {
        case "Editmyprofile":
            window.location.replace('CustomerEditEducation.aspx?CustID=' + EncryptstrCustid);
            break;
        case "upgrade":
            window.location.replace('Customermypayments.aspx?CustID=' + EncryptstrCustid);
            break;
        case "managephoto":
            window.location.replace('EditManagephotoNew.aspx?CustID=' + EncryptstrCustid);

            break;
        case "savedsearch":
            window.location.replace('KaakateeyaCustomersavedsearchNew.aspx?CustID=' + EncryptstrCustid);

            break;
        case "profilesettings":
            window.location.replace('ProfileDeleteprofile.aspx?CustID=' + EncryptstrCustid);
            break;
        case "help":
            window.location.replace('CustomerNewHelp.aspx?CustID=' + EncryptstrCustid);
            break;

    }
    return false;
}
function ComunicationHistory(Cust_MessageLink_Id, Count) {
    var data = CallApi('CustomerDashBoard.aspx/CommunicationHistry', { msg: { ICustID: LoginCustID, MessageLinkId: Cust_MessageLink_Id } });
    $('#divchatbox_remarks').html('');
    $('#lblRowCount').html(Count);
    _.each(data.d, function (item) {
        console.log('chat');
        console.log(item.Sender);
        console.log(item.loginCustid);

        var HistryCls = JSON.stringify(item.Sender) == JSON.stringify(item.loginCustid) ? 'chatbox_remarks_item clearfix' : 'chatbox_remarks_item chatbox_remarks_item_rev';

        $('#divchatbox_remarks').append("<div class='" + HistryCls + "' >"
                                                        + "<p>"
                                                            + "<label ID='lblBodyTypesx'>" + (Boolean(item.IsReviewd) == false && JSON.stringify(item.loginCustid) != JSON.stringify(item.Sender) ? 'Not authorized this message' : item.Body) + "</label>"
                                                            //+ "<label ID='lblIsReviewd' style='display:none;'>" + item.IsReviewd + "</label>"
                                                            //+ "<label ID='lblsender' style='display:none;'>" + item.Sender + "</label>"
                                                            + label(('lblIsReviewd'), JSON.stringify(item.IsReviewd))
                                                            + label(('lblsender'), JSON.stringify(item.Sender))


                                                       + " </p>"
                                                        + "<div class='chatbox_remarks_item_foot'>"
                                                            + "<span>"
                                                                + "<label ID='lblMEssageRequestDates' >" + item.RequestDate + " </label></span><div class='clear'>&nbsp;</div>"
                                                        + "</div>"
        + "</div>");

    });

    if ($('#lblReviewID' + Count + '').text() == '1') {

        var input = {
            MobjViewprofile: {
                IFromCustID: LoginCustID,
                IToCustID: $('#lblCustIDs' + Count + '').text(),
                TypeofInsert: 'ReadMessage',
                MessageLinkId: $('#lblMessageLinkID' + Count + '').text(),
                MessageHistoryId: $('#lblMessageHistoryID' + Count + '').text()
            }
        };

        status = CallApi("CustomerServiceActions", input);
    }

    $('.chatbox_remarks').animate({ scrollTop: $(document).height() }, 1000);;

    $('#divMessages').modal({ backdrop: 'static', keyboard: false });
    return false;
}

function SubmitMsg() {
    var Count = $('#lblRowCount').html();


    var input = {
        MobjViewprofile: {
            IFromCustID: LoginCustID,
            IToCustID: $('#lblCustIDs' + Count + '').text(),
            TypeofInsert: 'ReplyMsg',
            MessageLinkId: $('#lblMessageLinkID' + Count + '').text(),
            MessageHistoryId: $('#lblMessageHistoryID' + Count + '').text(),
            StrHtmlText: $('#txtMsg').val()
        }
    };

    var status = CallApi("CustomerServiceActions", input);

    $('#divMessages').modal('hide');
    statusAlert(status.d, undefined, 'Your reply sent successfully', 'Your selection updation failed, please contact admin');
    return false;
}
function NotifyClick(Type, from, to) {
    if (PaidType == 'Paid') {
        $("#PartnerProfilles").html('');
        if (Type.indexOf("your photograph has been viewed by members") != -1) {
            PersonalisedClick('CVP', 'Members who viewed your photograph');
        }
        else {
            PersonalisedClick('LMP', 'New profiles registered from last month');
        }
    }
    else {
        ShowOnlyAlertText('Please Upgrade online membership', 'btn btn-danger');
    }
    return false;
}
function LoginExistance() {
    if (LoginCustID != null && LoginCustID != "") {
        return true;
    }
    else {
        commonpopupmethod("login");
        return false;
    }
}

function ScrolltoTop() {

    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    //window.ScrolltoTop(0,0);
    return true;
}

function PhotoPasswordAction(Type, Tocustid, DivCount) {

    var data = CallApi('CustomerDashBoard.aspx/PhotoPassword', { FromcustID: LoginCustID, TocustID: Tocustid, type: Type == 'Accept' ? true : false });

    $('#PhotoPassword' + DivCount).attr('style', 'display:none;');
}


function ContactBranch(tocustID, logID) {

    SendMessagePopup('Message', tocustID, undefined, logID);
    return false;
}

function sendmessages(TocustID, methodname, flag, logid) {
    'use strict'

    if (flag == undefined) {
        ServiceActions(LoginCustID, TocustID, undefined, 'SendMessage', undefined, 'lnkACCEPTEDmsgs');
    }
    else if (flag == 'TH') {

        ServiceActions(LoginCustID, TocustID, undefined, 'TicketHistry', undefined, undefined, logid);
    }
    $('#commonpopup').modal('hide');
}


function Notviewedviewedprofiles(typeviewed, Name, className, tocustid, logid, profileid, hiddendivid) {


    var namestatus = Name + " Staus";

    $('#communicationhistory').html('');

    $('#commomh4hstryprocedd').html(namestatus);
    $('#communicationhistory').append("<div class='row'>"
            + "<div class='col-lg-4 col-lg-offset-2'>"
               + "<button type=button class='btn btn-success' onclick='return acceptlink(" + JSON.stringify("I") + "," + tocustid + "," + logid + "," + hiddendivid + ");'>Proceed</button>"
          + "  </div>"
            + "<div class='col-lg-5'>"
               + " <button type='button' class='btn btn-danger' onclick='return acceptlink(" + JSON.stringify("NI") + "," + tocustid + "," + logid + "," + hiddendivid + ");'>Skip This Profile</button>"
           + " </div>"
        + "</div>");
    if (typeviewed == "Not Viewed") {

        if (PaidTypeaccept == 'Paid') {
            window.open("CustomerfullprofileNew.aspx?ProfileID=" + profileid + "&ToCustID=" + tocustid + "&FromCustId=" + EncryptstrCustid + "&LogID=" + logid, "_blank");
        }
        else {
            ShowOnlyAlertText('Please Upgrade online membership', 'alert alert-danger');
        }
    }
    else {
        $('#divcommunicationhistory').modal({ backdrop: 'static', keyboard: false });
        return false;
    }

    return false;
}
function TicketHistry(ticketId, classname, commudivid, custid, logid, name, profileid) {

    replaycustid = custid;
    replaylogid = logid;
    $('#communicationhistory').html('');
    $('#commomh4hstryprocedd').html("Match Followup Of " + name + " (" + profileid + ")");
    if (ticketId != null && ticketId != "") {

        var datain = {
            Ticketinformation: {
                Ticketid: ticketId,
                Type: 'H'
            }
        }

        var datath = CallApi("Ticketinformation", datain)
        console.log(datath);
        if (datath.d.length > 0 && datath.d != null && datath.d != undefined) {
            for (var i = 0; i < datath.d.length; i++) {
                var strHistry = returnhtml(datath.d[i].TicketType, datath.d[i].TicketInfo, datath.d[i].EmployeeName, datath.d[i].CallResult, (datath.d[i].RelationName + ("(" + datath.d[i].Relation + ")")), datath.d[i].Body);
                $('#communicationhistory').append(strHistry + "<br/>");
            }
        }
        else {
            $('#communicationhistory').html("<p>NO History</p>" + "<br/>");
        }
    }
    else {
        $('#communicationhistory').html("<p>NO History</p>" + "<br/>");
    }

    $('#divcommunicationhistory').modal({ backdrop: 'static', keyboard: false });
    return false;

}
function Close() {

    $('[data-toggle="popover"]').popover('hide');
}

function CloseHistry() {

    $('.TicketHistryPopover').popover('hide');
}

function returnhtml(strtype, strdate, strempname, strstatus, strcustName, strcomments) {

    var strdiv = "";

    var Nameempcust = strempname == "Customer" ? $('#ctl00_lblCustFName').text() + " " + $('#ctl00_lblcustLname').text() : strempname;
    var empcustlabel = strempname == "Customer" ? "Customer Name" : "Employee Name";


    switch (strtype) {

        case "INCOMING":
        case "OUT GOING":
            strdiv = "<div class='row'><div class='col-lg-12 text-center' style='font-weight:bold;color: #2C2828;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"

                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Done By</label></div><div class='col-lg-7'><label style='color:black;'>" + Nameempcust + "</label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Status</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strstatus + "</div></label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Received By</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strcustName + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Call Discussion</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div>"
            + "</div>";
            break;
        case "MatchFollowUpStatus":
        case "MatchFollowupReply":
            //case "INTERNAL MEMO":
        case "CLOSE":
        case "REPLY":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;color: #2C2828;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div class='col-lg-5' style='color:maroon;'><label>" + empcustlabel + "</label></div><div class='col-lg-7'><label><div style='color:black;'>" + Nameempcust + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div></div>";

            break;

    }
    return strdiv;



}
function acceptlink(inttype, tocustidflag, Logidflag, divid) {


    if (PaidTypeaccept == 'Paid') {
        var datain = {
            Mobj: {
                fromcustid: LoginCustID,
                tocustid: tocustidflag,
                logID: Logidflag,
                interstTYpe: inttype
            }
        }
        var datath = CallApi("CustomerExpressinterestinsert", datain);

        if (datath.d != null) {
            if (inttype == "NI") {
                statusAlert(datath.d, undefined, 'Skipped successfully', 'Skipped fail');
            }
            else if (inttype == "I") {
                statusAlert(datath.d, undefined, 'Proceed successfully', 'Proceed fail');
            }
            console.log($('#' + divid));
            $('#' + divid).fadeOut();
        }
    }
    else {
        ShowOnlyAlertText('Please Upgrade online membership', 'alert alert-danger');
    }

    $('#divcommunicationhistory').modal('hide');
    return false;
}

function showviewcontacts(custid, empmobile, empemail, custmobile, custemail) {

    var datagrade = CallApi("Custmobileemail", { custid: custid });

    var mobilenumber;
    if (datagrade != null && datagrade.d != null && datagrade.d != undefined) {

        if (datagrade.d == 3) {
            var obj = { custid: custid };

            var data = CallApi("Custmobileemail", obj);
            if (data != undefined && data != null && data.d != null) {
                mobilenumber = "<b>Mobile number : </b> " + custmobile + "<br/>" + " " + "<b>Emails :</b>" + custemail;
            }
            DynamicTimeAlert(mobilenumber, "alert alert-danger", '4000');
        }
        else {
            mobilenumber = "<p style='color:black;'> Please Contact The Below Relationship Manager As This Client Hasn't Given Authentication To Show Untill They Agree</p><br><b>Relationship Manager Mobile number : </b> " + empmobile + "<br/>" + " " + "<b>Relationship Manager Emails :</b>" + empemail;
            DynamicTimeAlert(mobilenumber, "alert alert-danger", '4000');
        }
    }
    return false;
}

function replaytorm() {
    $('#divcommunicationhistory').modal('hide');
    ContactBranch(replaycustid, replaylogid);
    return false;
}



