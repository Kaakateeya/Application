var TotalRows, ProfileOwner1 = 0, Admin, Empid, Intetestflag = null, oppositeinterestgflag = null, datareplyType = [], replycontext = [],
    LoginCustID, Genderid, oppositestatus, FRomprofileview, globalproceedcustids = "0", globalskipcustids = "0";


$(function () {
    document.getElementById("divCommunication").style.display = "none";

    Admin = (CallApi('AdminID', {})).d;

    var div = "<div class='modal-header' style='border-bottom: 1px solid #ffffff;'><div class='row' style='display: block; border: 1px solid rgb(210, 201, 199); border-radius: 12px; padding: 5px;'><div class='form-group' id='headers' style='width: 185px; margin-top: -15px; margin-left: 5px; background: white;'> <a href='javascript:void(0);'> "
        + "<h4 class='' style='margin-left: 10px; color: rgb(160, 2, 1);'>Search Slide Show<span id='spantoggle' class='indicator glyphicon glyphicon-chevron-up' style='margin-left: 7px; margin-right: 5px;'></span></h4> </a>  </div><div id='toggleDemo'><div class='row'>"
        + "<div class='col-lg-5'>"
             + "<div class=''>"
                + " <div class='control-group radio-group-my' id='divGender'>"

                     + "<div class='' id='gender' style='color: rgb(50, 40, 40);'>"
                        + " <label class=''>"
                            + " <input name='slidetype' value='0' checked type='radio'><span>&nbsp;All</span>"
                        + " </label>"
                        + " &nbsp;<label class=''><input name='slidetype' value='1' type='radio'><span>&nbsp;Proceed</span>"
                        + " </label>"
                        + " &nbsp;<label class=''><input name='slidetype' value='2' type='radio'><span>&nbsp;Dproceed</span>"
                        + " </label>"
                       + "  &nbsp;<label class=''><input name='slidetype' value='3' type='radio'><span>&nbsp;View</span>"
                        + " </label>"
                         + "&nbsp;<label class=''><input name='slidetype' value='4' type='radio'><span>&nbsp;NotView</span>"
                        + " </label>"
                        + " &nbsp;<label class=''><input name='slidetype' value='5' type='radio'><span>&nbsp;BI</span>"
                         + "</label>"
                         + "&nbsp;<label class=''><input name='slidetype' value='6' type='radio'><span>&nbsp;OppI</span>"
                         + "</label>"
                    + " </div>"
                 + "</div>"
                 + "<div class='clearfix'></div>"
                + " <br />"
                + " <div class='control-group row' >"
                   + "  <div class='col-lg-5' style='width: 301px;'>"
                         + "<div class='col-lg-4'>"
                        + "     <label style='color:#504848;'>Profile ID</label>"
                        + " </div>"
                       + "  <div class='col-lg-8'>"
                             + "<input type='text' class='form-control' id='txtprofileid' onfocus='true' onblur='trim(this);' onchange='trim(this);' onkeydown='trim(this);' onkeypress='trim(this);' onkeyup='trim(this);'/>"
                         + "</div>"
                    + " </div>"
                    + "<div class='col-lg-2'><button class='btn btn-primary' style='width:100px;' id='btnslideshowprofileid' onclick='return btnslideshowprofileids();' >Submit</button></div>"
                   + " </div>"
           + "  </div>"
         + "</div>"
         + "<div class='col-lg-7'>"
             + "<div class='col-lg-2' style=''>"
                + " <img id='fromimage' style='height: 74px; width: 74px;'  />"
             + "</div>"

          + "<div class='col-lg-4 col-lg-offset-2' style='display:none;'>"
                + " <button class='btn btn-danger' style='width:150px;'  >Previous Profile</button>"
           + "  </div>"
            + "<div class='col-lg-3' style='display:none;'>"
                + " <button class='btn btn-danger' style='width:100px;'  >Next Profile</button>"
           + "  </div>"
            + "<div class='col-lg-10' style='display:none;' id='divfromname'>"
                       + "<label style='color: #504848;' id='lblfromname'></label>"
                        + "<label style='color: #504848;display:none;' id='lblpaidis'></label>"
                    + " </div>"
              + "<br/>"
              + "<br/>"
               + "<div class='col-lg-3' id='fromviewprofilediv' style='display:none;'>"
                       + "<a href='javascript:void(0);' id=lnkfromviewprofile onclick='ViewProfilewithvalueredirect();'> View Full Profile </a>"
                    + "</div>"

        + " </div>"
     + "</div></div></div></div>";
    $('#PhotoPopupSlde #MycarousalHeader').append(div);
    var divheader = "<div class='row'><div class='col-lg-2 col-md-2'>"
                                   + " <span id='ctl00_ContentPlaceHolder1_lbltotalrecords' style='color:Black;'>Total :</span>"
                                     + " <label id='lblcurSlide'>1</label>"

     + " <label id='lblcurrentprofile'></label>"
  + "</div></div>"
    $('#PhotoPopupSlde #MycarousalHeader').append(divheader);
    if (Flagtype != undefined && Flagtype != null && Flagtype != "" && Profileid != "" && Profileid != undefined && Profileid != null) {
        RadionButtonSelectedValueSet('slidetype', Flagtype);
        $('#txtprofileid').val(Profileid);
        radioflag();
        btnslideshowprofileids();
    }
});
function RadionButtonSelectedValueSet(name, SelectdValue) {
    $('input[name="' + name + '"][value="' + SelectdValue + '"]').prop('checked', true);
}
function img_increase(type) {
    if (type == 'img') {
        $("#image").attr('style', 'width: 200px;height: 200px;position: absolute;z-index: 1;box-shadow: 2px -2px 10px 3px #888, inset 2px -2px 10px 3px #888;');

    }
    else {
        $("#btnslideshowprofileid").attr('style', 'width:150px;height:40px;position: absolute;z-index: 1; transform: rotate(-10deg);');
        $("#btnslideshowprofileid").removeClass('btn btn-primary').addClass('btn btn-success');
    }
}

function img_decrease(type) {
    if (type == 'img') {
        $("#image").attr('style', 'width: 74px;height: 74px;');
    }
    else {
        $("#btnslideshowprofileid").attr('style', 'width:100px;');
        $("#btnslideshowprofileid").removeClass('btn btn-success').addClass('btn btn-primary');
    }
}

var SearchRequest = {};
function btnslideshowprofileids(fromVal, Toval) {
    radioflag();

    if (fromVal == undefined && Toval == undefined) {
        globalproceedcustids = "0";
        globalskipcustids = "0";
        SearchRequest.input = {
            v_profileid: $('#txtprofileid').val(),
            i_empid: Empid,
            c_intersttype: Intetestflag,
            c_oppintersttype: oppositeinterestgflag,
            pagefrom: 1,
            pageto: 10
        }
        SlideRefresh('myCarousel', 'lblcurSlide', 'lnkLastSlide');

    }
    else {
        SearchRequest.input.pagefrom = fromVal;
        SearchRequest.input.pageto = Toval;
    }

    var data = CallApi('slideshowbasedonProfileidNew.aspx/GetServicesslideslideshowbasedonprofile', SearchRequest).d;

    console.log('chewking data');
    console.log((data));
    if (data != undefined && data != null && data[0].BothsideInterest[0] != undefined && data[0] != undefined) {


        FRomprofileview = $('#txtprofileid').val();
        document.getElementById("divfromname").style.display = "block";
        document.getElementById("fromviewprofilediv").style.display = "block";

        console.log(data[0].BothsideInterest);
        console.log(data[1].BothsideInterest);
        $('#lblcurrentprofile').text(" of  " + data[0].BothsideInterest[0].TotalRows);
        TotalRows = data[0].BothsideInterest[0].TotalRows;
        $('#lblfromname').text(data[1].BothsideInterest[0].FromName);
        $('#lblpaidis').text(data[1].BothsideInterest[0].paid);
        $('.num').html('Profile ' + '' + 1);
        ProfileOwner1 = (CallApi('ownerid', { custid: data[0].BothsideInterest[0].fromcust_id })).d;
        LoginCustID = data[0].BothsideInterest[0].fromcust_id;
        Genderid = data[1].BothsideInterest[0].genderid;

        bindSlide(data[0].BothsideInterest, 'myCarousel');

        var totalItems = $('#myCarousel').find('.item').length;

        if (totalItems <= 10) {
            $('#myCarousel .carousel-control.left').attr('style', 'display:none;');
            $('#myCarousel .carousel-control.right').attr('style', 'display:block;');
        }
    }
    else {
        //$('#lblcurrentprofile').text(" of  0");
    }
    if (data != undefined && data != null && data[1].BothsideInterest[0] != undefined && data[1] != undefined) {
        $('#fromimage').attr('src', data[1].BothsideInterest[0].ApplicationPhoto);
    }
    pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');
    return false;
}
function condional(Array) {
    var totalArray = [];
    $.each(Array, function (index, item) {
        var data = [];

        data.push({ label: 'ProfileID', html: "&nbsp;<a href='javascript:void(0);' style='" + (item.PaidStatus == "Paid" ? 'color:Green;text-decoration:underline;margin-left:-16px;padding-left: 10px;' : 'color:red;text-decoration:underline;margin-left: -16px;padding-left: 10px;') + "' onclick='ViewProfilewithvalue(" + JSON.stringify(item.Toprofileid) + ");'>" + item.Toprofileid + "</a> " + item.KMPLID + " " + (item.IsConfidential == true || item.IsConfidential == "True" ? " C" : "") + " " + (item.SuperConfidentila == "1" || item.SuperConfidentila == 1 ? " SC" : "") + " " + (item.HoroscopeStatus == "1" ? "<input title='Click here to view Horoscope' src='../../Images/ico_horoscope.jpg' style='height:20px;width:25px;' type='image' onclick='return getPath(" + JSON.stringify(item.ToCust_ID) + ");'>" : "") });
        data.push({ label: 'Name', value: item.ToName, style: item.NoOfBrothers == "0" && item.NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;" });
        data.push({ label: 'DOB(age)', value: item.DOB });
        data.push({ label: 'Time of Birth', value: item.ToB });
        data.push({ label: 'Place of Birth', value: item.PlaceOfBirth });
        data.push({ label: 'Gothram', value: item.Gothram });
        data.push({ label: 'Caste', value: item.Caste });
        data.push({ label: 'Marital Status', value: item.maritalstatus });
        data.push({ label: 'Star', value: item.Star });
        data.push({ label: 'Color', value: item.Color });
        data.push({ label: 'Height', value: item.Height });
        data.push({ label: 'Qualification', value: item.EducationGroup + "," + item.EduGroupnamenew });
        data.push({ label: 'Profession', value: item.Profession });
        data.push({ label: 'Job Location', value: item.JobLocation });
        data.push({ label: 'Income(P.M)', value: item.Income });
        data.push({ label: 'Father Native', value: item.FFNative });
        data.push({ label: 'Mother Native', value: item.MFNative });
        data.push({ label: 'Property(Lakhs)', value: item.Property != null ? item.Property : "--" });


        data.push({
            label: 'backendFields', Custid: item.tocustid, ProfileID: item.Toprofileid, PhotoCount: item.PhotoCountnew,
            Age: item.Age, HeightInCentimeters: item.HeightInCentimeters, MaritalStatusID: item.MaritalStatusID,
            CasteID: item.CasteID, ServiceDate: item.ServiceDate, CustPhoto: (item.ToApplicationPhoto).replace("~/", "../../"),
            fromTicketId: item.fromticketid, FromticketStatusID: item.FROMNEW, fromTicket: item.FromTicket, Logid: item.Logid,
            Fromcustintstatus: item.FromCust_InterestStatus, Toticketid: item.Toticketid, ToTicket: item.ToTicket,
            TONEW: item.TONEW, ToCust_InterestStatus: item.ToCust_InterestStatus, ISRvrSend: item.ISRvrSend
        });

        if (item.Intercaste == "True")
            data.push({ label: 'Intercaste', value: (item.fathercaste + "/" + item.mothercaste) });
        if (item.ServiceDate != "" && item.ServiceDate != null && item.ServiceDate != undefined)
            data.push({ label: 'Service Date', value: item.ServiceDate, style: 'style= color:red;' });
        totalArray.push(data);

    });

    return totalArray;

}
function ScrolltoTop() {

    $("html, body").animate({
        scrollTop: 0
    }, "slow");

    return true;
}
function bindSlide(dataArray, CarousalID) {
    ScrolltoTop();
    $('#divEmployeeSearchSlideNew').attr('style', 'display:block;top:0px;');

    $('#sildeViewDiv').attr('style', 'display:block;');
    $('#gridDiv').attr('style', 'display:none;');
    $('#gotoSlideDiv').attr('style', 'display:block;');
    $('#progessDiv').attr('style', 'display:block;');
    $('#divviewedprofiles').attr('style', 'display:block;');
    var datanew = condional(dataArray);


    var totalrecords;
    var chkviewval = $("input:radio[name='viewGroup']:checked").val();
    var pageidcount = $('#' + CarousalID).find('.item').length;
    _.each(datanew, function (parentitem, index) {
        pageidcount = pageidcount + 1;
        totalrecords = CarousalID + pageidcount;

        var strappend = "", lnkshortlist = "", fromTicketId, fromTickets, FromticketStatusID, shortListblock = "",
            custid, ProfileID, PhotoCount, Age, HeightInCentimeters, MaritalStatusID, CasteID, ServiceDate, CustPhoto,
            Logid, Fromcustintstatus, Toticketid, ToTicket, TONEW, ToCust_InterestStatus, iSrvrSend;
        _.each(parentitem, function (childitem, index) {
            if (childitem.label != "backendFields") {
                strappend = strappend + "<div class='edit_page_details_item_desc clearfix'>"
            + "<h6>"
              + "  <span  style='font-weight: bold;'>" + childitem.label + "</span>"
            + "</h6>"
            + getDivstring(childitem.value, childitem.style, childitem.onclick, childitem.html)

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
                ServiceDate = JSON.stringify(childitem.ServiceDate);
                CustPhoto = childitem.CustPhoto;
                fromTicketId = childitem.fromTicketId;
                FromticketStatusID = childitem.FromticketStatusID;
                fromTickets = childitem.fromTicket;
                Logid = childitem.Logid;
                Fromcustintstatus = childitem.Fromcustintstatus;
                Toticketid = childitem.Toticketid;
                ToTicket = childitem.ToTicket;
                TONEW = childitem.TONEW;
                ToCust_InterestStatus = childitem.ToCust_InterestStatus;
                iSrvrSend = childitem.ISRvrSend;
            }

        });

        if (CarousalID == 'myCarousel') {
            lnkshortlist = $('#lblCustidpopup').text() != "" ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return checkServicetoShortlist(" + custid + "," + ProfileID + "," + Age + "," + HeightInCentimeters + "," + MaritalStatusID + "," + CasteID + "," + ServiceDate + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                                + "<div class=col-lg-1><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        }
        else if (CarousalID == 'ShortlistPopup') {
            lnkshortlist = $('#lblCustidpopup').text() != "" ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return InnerShortList(" + custid + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                                + "<div class=col-lg-1><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        }
        var StrUrlApplicationnew = CustPhoto.replace(".jpeg", "");
        var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
        shortListblock = "<li class='col-lg-3 col-md-3 col-xs-3 col-sm-3 col-lg-pull-2  col-md-pull-2 col-xs-pull-2 col-sm-pull-2 '>"
                    + "<div class='row'>"
     + " <div class='col-lg-8'>"
     + "<div class='row'>" + lnkshortlist
   + "</div></div></div>" + "<div class='clearfix'></div>"
  + "<div>"

        + "<input  id='imgCustPhoto" + totalrecords + "'  src='" + StrUrlApplicationnew1 + "' class='image'  type='image' onclick='return getimgPath(" + JSON.stringify(custid) + "," + JSON.stringify(ProfileID) + "," + PhotoCount + ")'>"
 + "<br>"
+ "<div class='col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-5 col-md-offset-5'>"
+ "<a   href='javascript:void(0)' onclick='return getimgPath(" + JSON.stringify(custid) + "," + JSON.stringify(ProfileID) + "," + PhotoCount + ")'><span  style='color:Black;font-size:9pt;'>No of Photos  " + " " + PhotoCount + "</span></a>"
+ "</div><br/>"


+ "</div></li>";
        var totalslides = $('#' + CarousalID).find('.item').length;
        var stractiveClass = totalslides == 0 ? 'item active' : 'item';
        var Fromcustintstatusdisplay = $.trim(Fromcustintstatus) == 'I' || $.trim(Fromcustintstatus) == 'NI' ? "display:none;margin-bottom: 5px;" : "display:block;margin-bottom: 5px;";
        var Fromcustintstatuslabeldisplay = $.trim(Fromcustintstatus) == 'I' || $.trim(Fromcustintstatus) == 'NI' ? "display:block;" : "display:block";
        var status = getstatus($.trim(Fromcustintstatus));
        var Gender = Genderid == 1 ? 'Groom Ticket Id' : 'Bride Ticket Id';
        var Genderfrom = Genderid == 1 ? 'Bride Ticket Id' : 'Groom Ticket Id';
        var Genderstatus = Genderid == 1 ? 'Groom Status' : 'Bride Status';
        var tocustintstatusdisplay = getstatus($.trim(ToCust_InterestStatus));
        var tocolorstatus = getstatus($.trim(ToCust_InterestStatus)) == "Not Viewed" ? "color:Green;font-weight: bold;width:135px;" : "color:maroon;font-weight: bold;width:135px;";
        var ToGenderstatus = Genderid == 1 ? 'Bride Status' : 'Groom Status';
        var img = status != null ? (status == 'Proceed' ? '<img  src="../../Images/heartgrren.gif" style="width:28px;"/>' : (status == 'Dont Proceed' ? '<img  src="../../Images/brk%20hrt_2_green.gif" style="width:28px;"/>' : "")) : "";
        var toimg = tocustintstatusdisplay != null ? (tocustintstatusdisplay == 'Proceed' ? '<img  src="../../Images/heartgrren.gif" style="width:28px;"/>' : (tocustintstatusdisplay == 'Dont Proceed' ? '<img  src="../../Images/brk%20hrt_2_green.gif" style="width:28px;"/>' : "")) : "";
        var resenddisplay = tocustintstatusdisplay == 'Dont Proceed' ? "display:none;" : "display:block;";

        //TONEW = 258;
        var strFromTicket = (fromTicketId != '--' && fromTicketId != undefined && fromTicketId != null) ? "<div class='col-lg-12'><label class='col-lg-7 col-lg-pull-1'  style='width:135px;'>" + Gender + "</label><a style='color: maroon;font-weight: bold;' class='col-lg-5' href='javascript:void(0);' onclick='return ticketidaction(" + fromTickets + "," + FromticketStatusID + "," + JSON.stringify($('#txtprofileid').val()) + ");'>" + fromTicketId + "</a></div>" : "";
        var TONEWcolorticketbackcolor = TONEW == 258 ? "background-color: #C8E6E6;" : "";
        var TONEWcolorticket = TONEW == 258 ? "color: Black;font-weight: bold;" : "color: maroon;font-weight: bold;";
        var Rvrandresend = iSrvrSend == 1 ? "Resend mail" : "RVR Send";
        var toResendMail = (ToTicket != null && ToTicket != "" && ToTicket != undefined && tocustintstatusdisplay == 'Proceed' || tocustintstatusdisplay == 'Dont Proceed' || tocustintstatusdisplay == 'Viewed') ? "<div class='col-lg-12'><label class='col-lg-7 col-lg-pull-1' style='width:135px;'>" +
            Genderfrom + "</label><a  class='col-lg-5' style='" + TONEWcolorticket + "' href='javascript:void(0);' onclick='return ticketidaction(" + ToTicket + "," + TONEW + "," + JSON.stringify($('#txtprofileid').val()) + ");'>" + Toticketid + "</a></div>" : "<div class='row'><button type='button' style='" + resenddisplay + "width: 101px;background-color: #5a935a;color: white;'    onclick='return ResendMail(" + JSON.stringify(custid) + "," + JSON.stringify(LoginCustID) + "," + JSON.stringify(ProfileID) + "," + JSON.stringify($('#txtprofileid').val()) + ");' class='btn btn-success-outline col-lg-3 col-lg-offset-1'>" + Rvrandresend + "</button><button type='button' style='display:none;background-color: #7d817b;color: white;'  onclick='return acceptlink(" + JSON.stringify("NI") + "," + JSON.stringify(custid) + "," + Logid + ");' class='btn btn-success-outline col-lg-6 col-lg-offset-1'>Skipped This Profile</button></div></br>";
        $("#" + CarousalID + " .carousel-inner").append(
   "<div class='" + stractiveClass + "'>"
    + "<li class='col-lg-8 col-md-8 col-lxs-8'>"
     + strappend + "<br><div class=row><div class='col-lg-12'>"
    + "<div class=row><div class='col-lg-5'  style='border: 1px solid maroon;border-radius: 7px !important;width: 366px;height:89px;" + TONEWcolorticketbackcolor + "'><div class='col-lg-12'><label class='col-lg-6 col-lg-pull-1' style='width:130px;'>" + ToGenderstatus + "</label><label class='col-lg-5'  style='" + tocolorstatus + "'>" + tocustintstatusdisplay + "</label>" + toimg + "</div>"
    + "" + toResendMail + "</div>"
     + "<div class='col-lg-6'  style='border: 1px solid maroon;border-radius: 7px !important;margin-left:15px;height:89px;'><div class='col-lg-12' style='" + Fromcustintstatuslabeldisplay + "'><label class='col-lg-7 col-lg-pull-1' style='width:130px;'>" + Genderstatus + "</label><label  style='color:maroon;font-weight: bold;width:135px;' class='col-lg-5'>" + status + "</label>" + img + "</div>"
     + strFromTicket
     + "<div class='col-lg-12' style='" + Fromcustintstatusdisplay + "'><div class='col-lg-5'><button class='btn btn-danger' style='width:100px;' onclick='return acceptlink(" + JSON.stringify("I") + "," + JSON.stringify(custid) + "," + Logid + ");'>Proceed</button></div><div class='col-lg-5'><button class='btn btn-danger' style='width:150px;' onclick='return acceptlink(" + JSON.stringify("NI") + "," + JSON.stringify(custid) + "," + Logid + ");'>Skip This Profile</button></div></div><br/></div>"

     + "</div></div></div><br>"
     + "</li>"
      + shortListblock
    + "</div>");

        document.getElementById('imgCustPhoto' + totalrecords + '').disabled = CustPhoto.indexOf("noimage") == -1 ? false : true;

    });


}
function getDivstring(value, style, onclick, html) {
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
$(function () {
    Empid = GetEmpid();
    checkitemGlobal('myCarousel');
    playAndPause('myCarousel', 'playButton', 'pauseButton');
    ArrowMove('myCarousel');
    SlideCount();
    $('input[type=radio][name=slidetype]').on('change', function () {

        switch ($(this).val()) {
            case '0':
                Intetestflag = null;
                oppositeinterestgflag = null;
                break;
            case '1':
                Intetestflag = 'I';
                oppositeinterestgflag = null;
                break;
            case '2':
                Intetestflag = 'NI';
                oppositeinterestgflag = null;
                break;
            case '3':
                Intetestflag = 'V';
                oppositeinterestgflag = null;
                break;
            case '4':
                Intetestflag = 'NV';
                oppositeinterestgflag = null;
                break;
            case '5':
                Intetestflag = 'I';
                oppositeinterestgflag = 'I';
                break;
            case '6':
                Intetestflag = null;
                oppositeinterestgflag = 'I';
                break;
        }
    });
});

function radioflag() {
    var val = $("input:radio[name='slidetype']:checked").val();
    switch (val) {
        case '0':
            Intetestflag = null;
            oppositeinterestgflag = null;
            break;
        case '1':
            Intetestflag = 'I';
            oppositeinterestgflag = null;
            break;
        case '2':
            Intetestflag = 'NI';
            oppositeinterestgflag = null;
            break;
        case '3':
            Intetestflag = 'V';
            oppositeinterestgflag = null;
            break;
        case '4':
            Intetestflag = 'NV';
            oppositeinterestgflag = null;
            break;
        case '5':
            Intetestflag = 'I';
            oppositeinterestgflag = 'I';
            break;
        case '6':
            Intetestflag = null;
            oppositeinterestgflag = 'I';
            break;
    }
    return false;
}


function SlideCount() {

    var currentslide = 1;

    $('#myCarousel').bind('slid', function () {

        var totalItems = $('#myCarousel').find('.item').length;
        var currentIndex = $('#myCarousel').find('div.active').index() + 1;

        if (currentslide < currentIndex) {
            if (parseInt(TotalRows) > 10 && parseInt(totalItems) - parseInt(currentIndex) == 4) {

                btnslideshowprofileids(parseInt(totalItems) + 1, parseInt(totalItems) + 10)
            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex)
                $("#lnkLastSlide").text(currentIndex);
        }
        currentslide = currentIndex;
        $('.num').html('Profile ' + '' + currentIndex);

        $('#lblcurSlide').text(currentIndex);

    });


}
function ClosePopup() {
    $('#lstselectedprofiles').html("");
    modalpopupshowhide("divEmployeeExpressInterestNew", "hide");
    return false;
}
function closepopup() {
    modalpopupshowhide("horoscopepopup", "hide");
}
function Bindsingledropdowns() {
    var Bindings = {
        Masterbind: {
            Relationship: "ChildStayingWith",
            replyType: "BothsideEmail",
            OnlyEmpname: "EmpnameswithNoCondition"
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

    var methodnames = [
                     { methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedby", data: data.d.Relationship },
                   { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeout", data: replyddl },
                    { methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedfrom", data: data.d.Relationship },
                   { methodname: "BothsideEmail", dropdownname: "ddlmrktReplyType", data: replyddl },
                    { methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktempmemo", data: data.d.OnlyEmpname },
                    { methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktAssingnEmp", data: data.d.OnlyEmpname },
                    { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeCloseticket", data: replyddl },
                    { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypememo", data: replyddl },
                    { methodname: "BothsideEmail", dropdownname: "lstmails", data: replyddl },
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

    if (data.length > 0) {
        options.push({ label: "--Select--", title: "--select--", value: "0" });
        $.each(data, function (key, value) {
            options.push({ label: value.value, title: value.value, value: value.Id });
        });
        $('#' + dropdownname + '').multiselect('dataprovider', options);
        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}
function getRelationshipnamae(ddlrelation, txttoname) {

    var BindNames = {
        Relation: {
            Relationshipid: $('#' + ddlrelation + ' option:selected').val() > 0 ? $('#' + ddlrelation + ' option:selected').val() : null,
            profileid: profileidflag,
        }
    };
    var data = CallApi('GetRelationNamesShipOnCustID', BindNames);
    if (data != null) {

        $('#' + txttoname + '').val(data.d.FirstName + " " + (data.d.LastName != null ? data.d.LastName : ""));
    }
    return false;
}
function returnhtml(strtype, strdate, strempname, strstatus, strcustName, strcomments) {

    var strdiv = "";
    var Nameempcust = strempname.toLowerCase() == "customer" ? $('#lblfromname').text() : strempname;
    var empcustlabel = strempname.toLowerCase() == "customer" ? "Customer Name" : "Employee Name";
    switch (strtype) {

        case "INCOMING":
        case "OUT GOING":
            strdiv = "<div class='row'><div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"

                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Done By</label></div><div class='col-lg-7'><label style='color:black;'>" + Nameempcust + "</label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Status</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strstatus + "</div></label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Received By</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strcustName + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Call Discussion</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div>"
            + "</div>";
            break;
        case "MatchFollowUpStatus":
        case "MatchFollowupReply":
        case "INTERNAL MEMO":
        case "CLOSE":
        case "REPLY":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div class='col-lg-5' style='color:maroon;'><label>" + empcustlabel + "</label></div><div class='col-lg-7'><label><div style='color:black;'>" + Nameempcust + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div></div>";

            break;

    }
    return strdiv;

}
function HideshowContacts() {

    if (parseInt(ProfileOwner1) == 1 || parseInt(Admin) == 1) {
        $('#divContacts').show();
    }
    else {
        $('#divContacts').hide();
    }
    return false;
}

function sendMail(profileid, ToProfileID, Ticketid, fromcustID, tocustID, ticketStatusID, custname, primaryemail, toprofileids) {
    $('#headerid').text('Send Mail');
    $('#txtval').val('');

    $('#lblProfileid').text($('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : null);
    $('#lblToProfileID').html(toprofileids);
    $('#lblTicketid').text(Ticketid);
    $('#lblfromCustID').html(fromcustID);
    $('#lblTocustID').html(tocustID);
    $('#lblticketStatusID').html(ticketStatusID);

    document.getElementById("sendmailtxtdiv").style.display = "block";
    $('#divcustnameemail').html(" <div class='form-group'><label class='control-label col-sm-4 maroon'>Customer Name</label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + custname + " (" + ($('#txtprofileid').val() != "" ? $('#txtprofileid').val() : null) + ")" + "</label></div></div>"
   + "<div class=clearfix></div><br /><div class='form-group'><label class='control-label  col-sm-4 maroon'>Email going to </label>"
   + "<div class=pull-left><label class='control-label pull-left'>" + primaryemail + "</label></div></div><div class=clearfix></div><br />");
    $('#brnsendsmsmail').html("Send Mail");

    $('#lstmails').multiselect('select', ['5']);
    $('#txtval').val('Interested in your match we would like to know your opinion to proceed further.');
    return false;
}
function Getcontactnumber(profileid) {
    var data1 = CallApi("CommunicationLogEmployee.aspx/CustomerNumber", { Profileid: profileid });
    return data1;
}
function bindCalldiscussion(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);
    console.log(test);
    console.log(sss);
}
function ticketidaction(ticketid, TicketStatusID, toprofileid) {
    $('#tabs').find('li').removeAttr('class');
    $('#tabs').find('li:first-child').addClass('active');
    $('.tab-pane').removeAttr('class').addClass('tab-pane');
    $('.tab-pane:first-child').removeAttr('class').addClass('tab-pane active');
    profileidflag = toprofileid;
    $("#lblmrktticket").html(ticketid);
    Bindsingledropdowns();
    $('#ddlmrktreceivedfrom').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedfrom', 'txtmrktRelationname');
    $('#ddlmrktreceivedby').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedby', 'txtmrktRelationnameout');
    Numberfalg = Getcontactnumber(toprofileid);
    $("#txtmrktCalltelephonenumber").val(Numberfalg.d);
    $("#txtmrktCalltelephonenumberout").val(Numberfalg.d);
    var Ticketid = {

        Ticketinformation: {
            Ticketid: ticketid,
            Type: 'I',
        }
    }
    var data1 = CallApi("Ticketinformation", Ticketid);
    if (data1 != null && data1 != undefined && data1.d != undefined) {

        $('#lblmrktTicketID').html(data1.d[0].Ticket);
        $('#lblmrktStatus').html(data1.d[0].TicketStatus);
        $('#lblmrktAssigned').html(data1.d[0].TicketOwner);
        $('#lblNoofdays').html(data1.d[0].HistoryLastUpdated);
        $('#lblmrktOpened').html(data1.d[0].TicketCreatedDate);
        $('#lblemail').html(data1.d[0].Email);
        $('#lblnumber').html(data1.d[0].Number);
        $('#lnkticketid').html(data1.d[0].Ticket);
        $('#lbldelayed').html(data1.d[0].HistoryLastUpdated);
        $('#lblmobilenumber').html(data1.d[0].Number);
        $('#lblemailhis').html(data1.d[0].Email);
    }

    var Tickethistory = {

        Ticketinformation: {
            Ticketid: ticketid,
            Type: 'H',
        }
    }
    var data = CallApi("Ticketinformation", Tickethistory);
    if (data != null && data != undefined && data.d != undefined) {

        $('#bindhistory').html("");

        _.each(data.d, function (item) {
            var dd = moment(item.TicketCreatedDatehistry).fromNow();

            item.TicketInfo = item.TicketInfo + " (" + dd + ")";
            var appenddiv = returnhtml(item.TicketType, item.TicketInfo, item.EmployeeName, item.CallResult,
                      (item.RelationName + ("(" + item.Relation + ")")), item.Body);
            $('#bindhistory').append(appenddiv);

        });

    }



    $('#ActionPopup').modal({ backdrop: 'static' });

    HideshowContacts();

    sendMail(data1.d[0].FromProfileID, data1.d[0].ToProfileID, ticketid, data1.d[0].FromCustID, data1.d[0].TocustID, TicketStatusID, data1.d[0].FromName, data1.d[0].Email, toprofileid);
    return false;
}
function bindCalldiscussionnew(txtid, ddlid) {


    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);
    console.log(test);
    console.log(sss);
}



function submitInCalls(e) {

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

        cleartxtboxes('txtmrktclosecalldiscusn');
        $('#ddlmrktreplytypeCloseticket').multiselect('select', ['0']);
    }
    return false;
}
function statusAlertForproceed(status, PopupID, strsuccess, strfail, strupagrade) {
    
    if (PopupID != undefined) {
        $('#' + PopupID).modal('hide');
    }
    if (status == 1) {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
    else if (status == 4) {
        ShowOnlyAlertText(strupagrade, 'alert alert-danger');
    }
    else if (status == 5) {
        ShowOnlyAlertText(strupagrade, 'alert alert-danger');
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
    return false;
}
function acceptlink(inttype, tocustidflag, Logidflag) {

    var datath;
    if (globalproceedcustids.indexOf(JSON.stringify(tocustidflag)) != -1) {
        ShowOnlyAlertText('You have already proceeded this profile', 'alert alert-danger');

        return false;
    }
    else if (globalskipcustids.indexOf(JSON.stringify(tocustidflag)) != -1) {
        ShowOnlyAlertText('You have already skipped this profile', 'alert alert-danger');
        return false;
    }

    else {
        var datain = {
            Mobj: {
                fromcustid: LoginCustID,
                tocustid: tocustidflag,
                logID: Logidflag,
                interstTYpe: inttype,
                empid: Empid
            }
        }

        if (inttype == "NI") {
            datath = CallApi("CustomerExpressinterestinsert", datain);
            if (datath.d != null) {
                statusAlert(datath.d, undefined, 'Skipped successfully', 'Skipped fail');
                globalskipcustids += "," + JSON.stringify(tocustidflag);

            }
        }
        else if (inttype == "I") {
            if ($('#lblpaidis').text() == 'Paid') {
                datath = CallApi("CustomerExpressinterestinsert", datain);
                if (datath.d != null) {
                    statusAlertForproceed(datath.d, undefined, 'Proceed successfully', 'Proceed fail', 'Please Upgrade Membership');

                    //statusAlert(datath.d, undefined, 'Proceed successfully', 'Proceed fail');
                    globalproceedcustids += "," + JSON.stringify(tocustidflag);
                }
            }
            else {
                InsertUnpaidStatus(JSON.stringify(LoginCustID), JSON.stringify(tocustidflag), Empid, 'proceed');
                ShowOnlyAlertText('Please Upgrade online membership', 'alert alert-danger');
            }
        }
    }
    return false;
}
function sendsmssubmit() {


    var resultdata;

    if ($('#txtval').val() != "") {

        var submitdata = {
            Mobj: {
                Notes: $('#txtval').val(),
                EMPID: Empid,
                profileid: $('#txtprofileid').val(),
                LTicketID: $('#lblTicketid').text(), HistoryUpdate: 1,
                FromCustID: $('#lblfromCustID').text(),
                TocustID: $('#lblTocustID').text(),
                TicketStatusID: $('#lblticketStatusID').text(),
                FromProfileID: $('#txtprofileid').val(),
                ToProfileID: $('#lblToProfileID').text()
            }
        };

        resultdata = CallApi("SendMarketingMail_new", submitdata)
        statusAlert(resultdata.d, 'ActionPopup', 'Mail sent succesfully', "Mail sending failed");
        $('#txtval').val('');
    }
    else {

        ShowOnlyAlertText('Please enter text', 'alert alert-danger');
    }
    return false;

}

function getstatus(val) {
    switch (val) {
        case 'I':
            oppositestatus = 'Proceed';
            break;
        case 'NI':
            oppositestatus = 'Dont Proceed';
            break;
        case 'V':
            oppositestatus = 'Viewed';
            break;
        case 'NV':
            oppositestatus = 'Not Viewed';
            break;

    }
    return oppositestatus;
}

function ResendMail(fromcustID, tocustID, fromProfileID, toprofileID) {

    var submitdata = {
        Mobj: {
            Notes: 'mail sent',
            EMPID: Empid,
            LFromCustID: fromcustID,
            LToCustID: tocustID,
            FromProfileID: fromProfileID,
            ToProfileID: toprofileID,
            TicketStatusID: "NotViewed",
            Subject: "Kaakateeya Email For Bothsideinterest"
        }
    };

    var resultdata = CallApi("ResendMail", submitdata)

    statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");

    return false;
}

function ViewProfilewithvalueredirect() {
    ViewProfilewithvalue(FRomprofileview);
    return false;
}


function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space 
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}
