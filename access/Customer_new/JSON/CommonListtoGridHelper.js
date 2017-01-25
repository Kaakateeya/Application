var typeofdiv = "List";
var Typedivbasednotify = "";
var PaidTypeaccept = $('#ctl00_lblpaid').text();
function Changelist() {
    typeofdiv = "Grid";
    $('.list').addClass('searched_list_item2').removeClass('search_result_item clearfix');
    $('.list').attr('style', 'width: 22%;margin-right: 2.4%;min-width: 250px;');
    $('.search_result_items_main').attr('style', 'width: 100%;')
    $('.listnew').removeClass('search_result_item_ui_exprsns pull-right').addClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid');
    $(".ipName").css("display", "none");
    $(".ipMaritalstatus").css("display", "none");
    $(".ipStar").css("display", "none");
    $(".ipLocation").css("display", "none");
    $('#chkProfileID').attr('style', 'display:none');
    $('.lnkPhotoRequest').attr('style', 'display:none');

    return false;
}
function Changetogrid() {
    typeofdiv = "List";
    $('.list').removeClass('searched_list_item2').addClass('search_result_item clearfix');
    $('.list').attr("style", "");
    $('.search_result_items_main').attr("style", "");
    $('.listnew').removeClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid').addClass('search_result_item_ui_exprsns pull-right');
    $(".ipName").css("display", "block");
    $(".ipMaritalstatus").css("display", "block");
    $(".ipStar").css("display", "block");
    $(".ipLocation").css("display", "block");
    $('#chkProfileID').attr('style', 'display:block');
    $('.lnkPhotoRequest').attr('style', 'display:block');

    return false;
}
var PartnerDivCount = 0;
function scrolldivfunction(data) {
    PartnerDivCount += 1;
    if (data != null && data.length > 0) {

        MoreLinkHideShow(data[0].TotalRows);
        for (var i = 0; i < data.length; i++) {
            PartnerDivCount = i + 1;
            $("#lblSearchresultCount").html(data[i].TotalRows);


            var StrUrlApplication = data[i].Photo, photoclass, lnkphototext,

            photopassword = '', PhotoMaskDiv;
            var StrUrlApplicationnew = StrUrlApplication.replace(".jpeg", "");
            var StrUrlApplicationnew1 = StrUrlApplicationnew.replace(".gif", "");
            if (LoginPhotoIsActive != null)
                PhotoMaskDiv = LoginPhotoIsActive != true && StrUrlApplication.indexOf("ApplicationPhoto") != -1 ? "cssMaskdivrev clearfix" : "";
            else
                PhotoMaskDiv = StrUrlApplication.indexOf("ApplicationPhoto") != -1 ? "cssMaskdiv clearfix" : "";

            if (PhotoMaskDiv == "cssMaskdiv clearfix") {
                lnkphototext = "";
                photoclass = PhotoMaskDiv == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
            }
            else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {
                lnkphototext = "";
                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
            }
            else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {

                photoclass = PhotoMaskDiv == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";


                lnkphototext = "";
            }
            else if (StrUrlApplication.indexOf("noimage") != -1) {

                photoclass = "Linkdisabled";
                lnkphototext = "Photo Request";

            }
            else if (StrUrlApplication.indexOf("Password-Protected") != -1) {

                if (PhotoMaskDiv == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                }
                else if (PhotoMaskDiv == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                photoclass = "Linkdisabled";
                lnkphototext = "Request Password";
                photopassword = 'Admin@123';
            }
            else if ((data[i].PhotoCount) == 0) {
                photoclass = "Linkdisabled";

            }
            else {
                photoclass = "";
                lnkphototext = "";
            }

            $("#PartnerProfilles").append("<div id='partnerDiv" + PartnerDivCount + "' class='list search_result_item clearfix'>" + "<p class='profile_no pull-left clearfix'>" + "</p>" + " <p class='label_check pull-left clearfix'>"
         // + "<span class='checkbox_my'>" + "<div  class=checker>" + "  <span>" + "  <div  class=checker>" + "<span>" + " <div  class=checker>" + "<span>" + "<div class=checker>"
          //+ " <span>" + "<input style=opacity: 0; id='chkProfileID' name=ctl00$ContentPlaceHolder1$lstCustomersearch$ctrl0$chkProfileID onclick=javascript: setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$lstCustomersearch$ctrl0$chkProfileID\',\'\')', 0) type=checkbox></span>"
          //+ " </div>" + "</span>" + "</div>" + " </span>" + "</div>" + "</span>" + "</div>" + " </span>"
          + "<span >" + data[i].ProfileID + "</span>" + "</p>" + " <p></p>" + "<div class=clear></div>"
          + "<div class='search_result_item_in clearfix'>" + "<div class='search_result_item_pic pull-left'>" + "<span  class=" + JSON.stringify(photoclass) + ">" + "   <input name='imgProfilefullpic' src=" + StrUrlApplicationnew1 + "  type='image' onclick='return getimgPathforcustomersite(" + JSON.stringify(data[i].Cust_ID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].PhotosCount) + ")'  style='height: 250px; width: 250px;' >"
          + "</span>" + "<p  style='align-items: center; text-align: center;'>" + "</p>" + "<div>" + "<a class='lnkPhotoRequest'  href='javascript:void(0)' style='font-weight: bold; text-decoration: underline;' onclick='return photoRequestMethod(" + JSON.stringify(EncryptstrCustid) + "," + JSON.stringify(data[i].Cust_ID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(photopassword) + ")'>" + lnkphototext + "</a>"
          + "</div></div>" + "  <div class='search_result_item_descr pull-left'>" + " <p>" + "<span>He</span>" + " was born and raised in" + " <label class=label_check>"
          + "<span>" + data[i].placeofbirth + "</span></label>" + "</p>" + "<div class='search_result_item_descr_list clearfix'>" + " <p  class='clearfix ipName'>" + "<label>Name</label>" + " <span >" + data[i].NAME + "</span>" + "</p>"
          + " <p class=clearfix>" + "<label>Age / Height</label>" + "  <span >" + data[i].Age + "</span><span>-</span><span >" + data[i].Height + "</span>" + "</p>" + "<p class=clearfix>" + "<label>Caste</label>"
          + "<span >" + data[i].ReligionName + "</span><span>-</span><span >" + data[i].Caste + "</span>" + " </p>" + " <p  class='clearfix ipMaritalstatus' >" + "<label>Marital status</label>" + "<span >" + data[i].MaritualStatus + "</span>"
          + " </p>" + "  <p  class='clearfix ipStar'>" + "<label>Star</label>" + " <span >" + data[i].Star + "</span>" + "</p>" + " <p  class='clearfix ipLocation'>" + "<label>Location</label>" + " <span >" + data[i].Location + "</span>" + "</p>"
          + "<p class=clearfix>" + " <label>Education</label>" + "<span >" + (data[i].Education != null ? data[i].Education : "") + "</span>" + "</p>" + "<p  class=clearfix>" + "<label>Occupation</label>" + "<span >" + (data[i].profession != null ? data[i].profession : "") + "</span>" + " </p>"
          + "</div>" + "<a onclick='return ShowFullProfile(" + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].Cust_ID) + "," + JSON.stringify(data[i].recentlyviewes) + "," + JSON.stringify("") + "," + JSON.stringify(PaidTypeaccept) + ");'  class=view_profile href='javascript:void(0)'>View full Profile</a>"
          + "</div>" + "<div class=clear></div>" + "</div>" + "<div class='search_result_item_ui clearfix'>" + "<div class='search_result_item_ui_prsnl pull-left'>" + "<ul>"
          + "  <li>" + "<a href=javascript:void(0)>" + "<img  title=Mobile class=ImageButtonCss src=../images/mobile_icon.png></a>" + "</li>"
          + "<li>" + "<a href=javascript:void(0)>" + "<img   title=Emails class=ImageButtonCss src=../images/message_icon.png></a>"
          + "</li>" + " <li>" + "<a href='javascript:void(0)'>" + "<img  title=horo class=ImageButtonCss src=../images/planet_icon.png></img></a>"
          + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "<div  class='listnew search_result_item_ui_exprsns pull-right'>" + " <ul>" + " <li>" + " <img src=../images/bookmark_icon.png alt=Bookmark title=BookMark>"
          + "<div >" + "<a onclick='return ServiceActions(" + LoginCustID + "," + data[i].Cust_ID + "," + data[i].mybookmarked + "," + JSON.stringify('Bookmark') + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + "," + JSON.stringify('lnkMybookmarked') + ");'  title=BookMark href='javascript:void(0)' style='color: Black;'>BookMark</a>" + "</div>"
          + "</li>" + " <li>" + "<img src=../images/interest_icon.png alt=Express Interest title=Express Interest>"
          + "<div >" + "<a onclick='return ServiceActions(" + LoginCustID + "," + data[i].Cust_ID + "," + data[i].ExpressFlag + "," + JSON.stringify('EXpressInterest') + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + "," + JSON.stringify('lnkACCEPTEDExp') + ");'   title=Express Interest href=' javascript:void(0)' style='color: Black;'>Express Interest</a>" + "</div>"
          + " </li>" + "<li>" + "<img src='../images/message_icon2.png' alt=Message title=Message>" + "<div >" + "<a  title=Message  href='javascript:void(0)' onclick='return commonpopupmethod(" + JSON.stringify('Message') + "," + JSON.stringify(data[i].Cust_ID) + "," + JSON.stringify('sendmessage') + ");'  style='color: Black;'>Message</a>"
          + "</div>" + "</li>" + "<li>" + "<img src=../images/close_icon.png alt=Not Interest title=Ignore>" + "<div >" + "<a onclick='return ServiceActions(" + LoginCustID + "," + data[i].Cust_ID + "," + data[i].ignode + "," + JSON.stringify('Ignored') + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + "," + JSON.stringify('lnkIgnored') + ");'  title=Ignore href=' javascript:void(0)' style='color: Black;'>Ignore</a>"
          + "</div>" + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "</div>" + "</div>");
        }
    }
    else {
        $("#lblSearchresultCount").html('0');
    }
    //document.getElementById("divloader").style.display = 'none';
    //document.getElementById("divloadmore").style.display = 'block';
    Changelist();

    return false;
}



var chatFlag = 0;



function label(lblID, Text) {
    return "<label id='" + lblID + "' style='display:none;'>" + Text + "</label>"
}

function MaskClass(StrUrlApplication) {
    var PhotoMaskDiv;
    if (LoginPhotoIsActive != null)
        PhotoMaskDiv = LoginPhotoIsActive != true && StrUrlApplication.indexOf("ApplicationPhoto") != -1 ? "cssMaskdivrev clearfix" : "";
    else if (LoginPhotoIsActive == null )
    {
    }
    else
        PhotoMaskDiv = StrUrlApplication.indexOf("ApplicationPhoto") != -1 ? "cssMaskdiv clearfix" : "";

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
    else {
        photoclass = "";
        lnkphototext = "";
    }
    return photoclass;
}

function MoreLinkHideShow(val) {
    if (parseInt(val) > 9) {
        hideShowControls(['divloadmore'], true);
    }
    else {
        document.getElementById('Norows').style.display = 'none';
        hideShowControls(['divloadmore'], false);
    }
}