
var SearchRequest, flag = 10, startindex = 1, endindex = 10, typeofdiv = "List", Fromage, toage,
    Fromheight, Toheight, Popstartindexflag = 1, Decryptcustid, custidto, bcustid = 0, icustid = 0, ecustid = 0,
    SavedSearchInsert;
$(function () {
    document.getElementById("btnSavesearch").style.display = 'none';
    document.getElementById("lnkSaveandSearch").style.display = 'none';
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        document.getElementById("divGender").style.display = "none";
        divvisiblefalse();
    }
    else {
        document.getElementById("divGender").style.display = "block";
    }
});


function submitmethod(StartIndex, EndIndex, querystring) {
    
    SearchRequest = {
        dt: {
            intCusID: Decryptcustid,
            intGender: $("input:radio[name='gender']:checked").val(),
            strLastName: ($('#txtLastNameProfileid').val() != "") && ($('#txtLastNameProfileid').val() != null) ? $('#txtLastNameProfileid').val() : null,
            strFirstName: ($('#txtFirstNameProfileid').val() != "") && ($('#txtFirstNameProfileid').val() != null) ? $('#txtFirstNameProfileid').val() : null,
            strProfileID: ($('#txtProfileid').val() != "") && ($('#txtProfileid').val() != null)?$('#txtProfileid').val():null,
            intCasteID: "",
            StartIndex: StartIndex,
            EndIndex: EndIndex,
            flagforurl: querystring,
            SavedSearch: SavedSearchInsert,
            SearchPageID: "1",
            PageName: "ProfileIDsearch"
        }

    }
    return SearchRequest;

}
function getdecryptcustid() {

    if (custidquerystrinng != null) {
        var object = { 'Encryptcustid': '' + custidquerystrinng + '' };
        var data = CallApi("GetDecryptcustid", object);
        console.log(data.d);

        Decryptcustid = data.d;

    }

    return Decryptcustid;
}

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        document.getElementById("divloadmore").style.display = 'none';
        pagingonscroll();
    }
    return false;
});
function pagingonscroll() {
    console.log(endindex);
    console.log(parseInt($('#lblSearchresultCount').html()));
    if (endindex < parseInt($('#lblSearchresultCount').html())) {
        if (typeofdiv == "Grid") {

            flag += 10;
            startindex = flag - 9;
            endindex = flag;
            scrolldivfunction(startindex, endindex);
            Changelist();
        }
        else {

            flag += 10;
            startindex = flag - 9;
            endindex = flag;
            scrolldivfunction(startindex, endindex);
            Changetogrid();
        }
    }
    else {
        document.getElementById('Norows').style.display = 'block';
    }
}
function Searchclickbutton() {
    SavedSearchInsert = "";
    startindex = 1;
    endindex = 10;
    $('#divcontrols').toggleClass('hidden show');
    $('html, body').animate({ scrollTop: 0 }, 800);
    showrefinesearch();
    document.getElementById("divsearchresult").style.display = 'block';
    document.getElementById("divloader").style.display = 'block';
    document.getElementById("affixsticky").style.display = 'block';
    $(".Maindiv").html("");
    scrolldivfunction(startindex, endindex);
    document.getElementById("divloadmore").style.display = 'block';
    return false;
}
function divvisiblefalse() {
    
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        var custid = { 'StrCustID': '' + custidquerystrinng + '' };
        var data = CallApi('ispaidmember', custid);
        console.log(JSON.stringify(data.d));

        console.log(JSON.stringify(data.d.Gender));
        console.log((data.d.Gender));
        data.d.Gender == "1" ? SelectvalueforRadiobuttons("gender", "2") : "1";
        data.d.Paidmember == "372" ? (document.getElementById("btnSavesearch").style.display = 'block') && (document.getElementById("lnkSaveandSearch").style.display = 'block') : (document.getElementById("btnSavesearch").style.display = 'none') && (document.getElementById("lnkSaveandSearch").style.display = 'none');
        data.d.isonlinePaidmember == "True" ? (document.getElementById("divRegistrationdays").style.display = 'block') : (document.getElementById("divRegistrationdays").style.display = 'none');


    }
    return false;
}
function scrolldivfunction(startindex, endindex) {
    document.getElementById("divloader").style.display = 'block';
    
    submitmethod(startindex, endindex);

    var data = CallApi("Profileidsubmit", SearchRequest);

    if (data.d.length > 0) {

        for (var i = 0; i < data.d.length; i++) {
            $("#lblSearchresultCount").html(data.d[i].Totalrows);
            $("#loadingrecords").html(parseInt(endindex) > parseInt(data.d[i].Totalrows) ? data.d[i].Totalrows : endindex);
            $("#totalrows").html((data.d[i].Totalrows));
            var StrUrlApplication = data.d[i].Photo, photoclass, lnkphototext, photopassword;
            photopassword = data.d[i].PhotoPassword;
            lnkphototext = "";
            if (data.d[i].PhotoClass == "cssMaskdiv clearfix") {
                console.log(-1);
                photoclass = data.d[i].PhotoClass == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
            }
            else if (data.d[i].PhotoClass == "cssMaskdivrev clearfix") {
                console.log(0);
                photoclass = data.d[i].PhotoClass == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
            }
            else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {
                console.log(1);
                photoclass = data.d[i].PhotoClass == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";


                lnkphototext = "";
            }
            else if (StrUrlApplication.indexOf("noimage") != -1) {
                console.log(2);
                photoclass = "Linkdisabled";
                lnkphototext = "Photo Request";

            }
            else if (photopassword == "Admin@123") {
                console.log(3);
                if (data.d[i].PhotoClass == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                }
                else if (data.d[i].PhotoClass == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                console.log(data.d[i].PhotoPassword);
                lnkphototext = "Request Password";
            }
            else {


                photoclass = "";

                lnkphototext = "";

            }

            $(".Maindiv").append("<div class='list search_result_item clearfix'>" + "<p class='profile_no pull-left clearfix'>" + "</p>" + " <p class='label_check pull-left clearfix'>"
          + "<span class='checkbox_my'>" + "<div  class=checker>" + "  <span>" + "  <div  class=checker>" + "<span>" + " <div  class=checker>" + "<span>" + "<div class=checker>"
          + " <span>" + "<input style=opacity: 0;  name=ctl00$ContentPlaceHolder1$lstCustomersearch$ctrl0$chkProfileID onclick=javascript: setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$lstCustomersearch$ctrl0$chkProfileID\',\'\')', 0) type=checkbox></span>"
          + " </div>" + "</span>" + "</div>" + " </span>" + "</div>" + "</span>" + "</div>" + " </span>" + "<span >" + data.d[i].ProfileID + "</span>" + "</p>" + " <p></p>" + "<div class=clear></div>"
          + "<div class='search_result_item_in clearfix'>" + "<div class='search_result_item_pic pull-left'>" + "<span  class=" + JSON.stringify(photoclass) + ">" + "   <input name='imgProfilefullpic ' src= " + StrUrlApplication + "  type='image' onclick='return getimgPathforcustomersite(" + data.d[i].intCusID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ")'  style='height: 250px; width: 250px;' >"
          + "</span>" + "<p  style='align-items: center; text-align: center;'>" + "</p>" + "<div>" + "<a  href='javascript:void(0)' style='font-weight: bold; text-decoration: underline;' onclick='return photoRequestMethod(" + JSON.stringify(custidquerystrinng) + "," + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify(data.d[i].PhotoPassword) + ")'>" + lnkphototext + "</a>"
          + "</div></div>" + "  <div class='search_result_item_descr pull-left'>" + " <p>" + "<span>He</span>" + " was born and raised in" + " <label class=label_check>"
          + "<span>" + data.d[i].placeofbirth + "</span></label>" + "</p>" + "<div class='search_result_item_descr_list clearfix'>" + " <p  class='clearfix ipName'>" + "<label>Name</label>" + " <span >" + data.d[i].NAME + "</span>" + "</p>"
          + " <p class=clearfix>" + "<label>Age / Height</label>" + "  <span >" + data.d[i].AGE + "</span><span>-</span><span >" + data.d[i].Height + "</span>" + "</p>" + "<p class=clearfix>" + "<label>Caste</label>"
          + "<span >" + data.d[i].Religion + "</span><span>-</span><span >" + data.d[i].Caste + "</span>" + " </p>" + " <p  class='clearfix ipMaritalstatus' >" + "<label>Marital status</label>" + "<span >" + data.d[i].MaritualStatus + "</span>"
          + " </p>" + "  <p  class='clearfix ipStar'>" + "<label>Star</label>" + " <span >" + data.d[i].Star + "</span>" + "</p>" + " <p  class='clearfix ipLocation'>" + "<label>Location</label>" + " <span >" + data.d[i].Location + "</span>" + "</p>"
          + "<p class=clearfix>" + " <label>Education</label>" + "<span >" + data.d[i].Education + "</span>" + "</p>" + "<p  class=clearfix>" + "<label>Occupation</label>" + "<span >" + data.d[i].Profession + "</span>" + " </p>"
          + "</div>" + "<a onclick='return ShowFullProfile(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify(data.d[i].intCusID) + ");'  class=view_profile href='javascript:void(0)'>View full Profile</a>"
          + "</div>" + "<div class=clear></div>" + "</div>" + "<div class='search_result_item_ui clearfix'>" + "<div class='search_result_item_ui_prsnl pull-left'>" + "<ul>"
          + "  <li>" + "<a href=javascript:void(0)>" + "<input name=ctl00$ContentPlaceHolder1$lstCustomersearch$ctrl0$ImgViewMobile  title=Mobile class=ImageButtonCss src=../images/mobile_icon.png type=image></a>" + "</li>"
          + "<li>" + "<a href=javascript:void(0)>" + "<input name=ImgHoroScope  title=Emails class=ImageButtonCss src=../images/message_icon.png type=image></a>"
          + "</li>" + " <li>" + "<a href=javascript:void(0)>" + "<input name=ctrl0$ImgMessages  title=horo class=ImageButtonCss src=../images/planet_icon.png type=image></a>"
          + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "<div  class='listnew search_result_item_ui_exprsns pull-right'>" + " <ul>" + " <li>" + " <img src=../images/bookmark_icon.png alt=Bookmark title=BookMark>"
          + "<div >" + "<a onclick='return BookMark(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('Bookmark') + "," + JSON.stringify(data.d[i].mybookmarked) + ");'  title=BookMark href='javascript:void(0)' style='color: Black;'>BookMark</a>" + "</div>"
          + "</li>" + " <li>" + "<img src=../images/interest_icon.png alt=Express Interest title=Express Interest>"
          + "<div >" + "<a onclick='return Expressinterest(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('EXpressInterest') + "," + JSON.stringify(data.d[i].ExpressFlag) + ");'   title=Express Interest href=' javascript:void(0)' style='color: Black;'>Express Interest</a>" + "</div>"
          + " </li>" + "<li>" + "<img src='../images/message_icon2.png' alt=Message title=Message>" + "<div >" + "<a  title=Message  href='javascript:void(0)' onclick='return commonpopupmethod(" + JSON.stringify('Message') + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('sendmessage') + ");'  style='color: Black;'>Message</a>"
          + "</div>" + "</li>" + "<li>" + "<img src=../images/close_icon.png alt=Not Interest title=Ignore>" + "<div >" + "<a onclick='return BookMark(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('NotInterest') + "," + JSON.stringify(data.d[i].ignode) + ");'  title=Ignore href=' javascript:void(0)' style='color: Black;'>Ignore</a>"
          + "</div>" + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "</div>" + "</div>");
            $('.progress-bar').attr('style', 'width: ' + ((endindex) / (data.d[i].Totalrows)) * 100 + '%;');

        }
    }
    document.getElementById("divloader").style.display = 'none';
    document.getElementById("divloadmore").style.display = 'block';

}

function showrefinesearch() {

    var $parent = $('#menuToggle').parent('nav');
    $parent.toggleClass("open");
    var navState = $parent.hasClass('open') ? "hide" : "show";
    $('#menuToggle').attr("title", navState + " navigation");
    setTimeout(function () {
        console.log("timeout set");
        $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
    }, 200);

    return false;
}


function Changelist() {
    typeofdiv = "Grid";
    $('#refinenav').addClass("").removeClass('open');
    $('.list').addClass('searched_list_item2').removeClass('search_result_item clearfix');
    $('.list').attr('style', 'width: 22%;margin-right: 2.4%;min-width: 250px;');
    $('.search_result_items_main').attr('style', 'width: 100%;')
    $('.listnew').removeClass('search_result_item_ui_exprsns pull-right').addClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid');
    $(".ipName").css("display", "none");
    $(".ipMaritalstatus").css("display", "none");
    $(".ipStar").css("display", "none");
    $(".ipLocation").css("display", "none");

    return false;
}
function Changetogrid() {
    typeofdiv = "List";
    showrefinesearch();
    $('.list').removeClass('searched_list_item2').addClass('search_result_item clearfix');
    $('.list').attr("style", "");
    $('.search_result_items_main').attr("style", "");
    $('.listnew').removeClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid').addClass('search_result_item_ui_exprsns pull-right');
    $(".ipName").css("display", "block");
    $(".ipMaritalstatus").css("display", "block");
    $(".ipStar").css("display", "block");
    $(".ipLocation").css("display", "block");

    return false;
}
function Modifursearch() {
    $('#divcontrols').toggleClass('hidden show');
    document.getElementById("divsearchresult").style.display = 'none';
    Bindingrefinetocontrols();
    $('#ddlFromAge').multiselect('select', [Fromage]);
    $('#ddlToAge').multiselect('select', [toage]);
    $('#ddlFromheight').multiselect('select', [Fromheight]);
    $('#ddlToheight').multiselect('select', [Toheight]);
    return false;
}


function showrefinesearch() {

    var $parent = $('#menuToggle').parent('nav');
    $parent.toggleClass("open");
    var navState = $parent.hasClass('open') ? "hide" : "show";
    $('#menuToggle').attr("title", navState + " navigation");
    setTimeout(function () {
        console.log("timeout set");
        $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
    }, 200);

    return false;
}
function savessearchdata() {
    var Savesearchcontrols = {
        custidsearchid: {
            CustID: '' + custidquerystrinng + '',
            Textsearch: '' + SearchResult_ID + ''
        }
    }

    var data = CallApi('Savedsearchbindings', Savesearchcontrols);
    console.log(JSON.stringify(data.d));
    return data;
}
function refinesubmit() {
    
    Bindingrefinetocontrols();
    var str = ($('#spanfromage').html());
    var Heightto = ($('#spantoheight').html());
    var Heightfrom = ($('#spanfromheight').html());
    var res = str.split(':');

    var COMMAsplit = res[1].split(',');

    $('#ddlFromAge').multiselect('select', COMMAsplit[0]);
    $('#ddlToAge').multiselect('select', COMMAsplit[1]);
    $('#ddlFromheight').multiselect('select', [parseInt(Heightfrom)]);
    $('#ddlToheight').multiselect('select', [parseInt(Heightto)]);
    $(".Maindiv").html("");
    startindex = 1;
    endindex = 10;
    scrolldivfunction(startindex, endindex);

    return false;
}
function Bindingrefinetocontrols() {
    Fromage = getvalues('#ddlFromAge');
    toage = getvalues('#ddlToAge');
    Fromheight = getvalues('#ddlFromheight');
    Toheight = getvalues('#ddlToheight');
    return false;
}


function LoginExistance() {
    if (custidquerystrinng != null && custidquerystrinng != "") {

        return true;
    }
    else {
        commonpopupmethod("login");
        return false;
    }
}
function popupsubmitmethod(curPageVal, querystringType) {
    
    var popupstratindex, popupendindex;
    console.log(curPageVal);
    $('#Slidephotopopup').find('.left').show();
    $('#Slidephotopopup').find('.right').show();
    SavedSearchInsert = "";
    submitmethod(curPageVal + 1, curPageVal + 10, querystringType);
    var data = CallApi("Profileidsubmit", SearchRequest);
    if (data.d.length > 0) {
        console.log(JSON.stringify(data.d));
        for (var i = 0; i < data.d.length; i++) {
            var strimageurl = (data.d[i].Photofullpath).replace("~/", "../../");
            var slide, stractiveClass;
            var totalslides = $('#Slidephotopopup').find('.item').length;
            $("#spanloadtotalrecords").html((data.d[i].Totalrows));
            stractiveClass = totalslides == 0 ? 'item active' : 'item';
            //popup
            var StrUrlApplication = data.d[i].Photo, photoclass, photopassword, linkdisabled, Paggingdisabled;
            
            photopassword = data.d[i].PhotoPassword;
            if (data.d[i].PhotoClass == "cssMaskdiv clearfix") {

                photoclass = data.d[i].PhotoClass == "cssMaskdiv clearfix" ? "cssMaskdiv clearfix Linkdisabled" : "";
                Paggingdisabled = "Linkdisabled";
            }
            else if (data.d[i].PhotoClass == "cssMaskdivrev clearfix") {

                photoclass = data.d[i].PhotoClass == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
                Paggingdisabled = "Linkdisabled";
            }
            else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {

                photoclass = data.d[i].PhotoClass == "cssMaskdivrev clearfix" ? "cssMaskdivrev clearfix Linkdisabled" : "";
                Paggingdisabled = "Linkdisabled";

            }

            else if (photopassword == "Admin@123") {
                if (data.d[i].PhotoClass == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                }
                else if (data.d[i].PhotoClass == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";

                    Paggingdisabled = "Linkdisabled";
                }
                else {
                    photoclass = "Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                }

            }
            else {
                photoclass = "";
                Paggingdisabled = "";
            }
            if (strimageurl.indexOf("noimage") != -1) {
                linkdisabled = "Linkdisabled";
                Paggingdisabled = "Linkdisabled";
            }
            else {
                linkdisabled = "";
                Paggingdisabled = "";
            }
            //
            $("#Slidephotopopup .carousel-inner").append("<div class='row " + stractiveClass + "'>"
             + " <div class='col-lg-6  col-md-6 hidden-sm hidden-xs visible-md-block visible-lg-block'>"
            + "<div class='clearfix'></div><div  class='row'></div><br/><br/>"
            + " <div class='form-group'>"
            + "   <label style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>ProfileID</label>" + " <label class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>"
             + ":" + data.d[i].ProfileID
             + "  </label>" + " </div>" + "<div class='form-group'>" + "  <label style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Name</label>"
             + "<label  style='color: Black;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>:" + data.d[i].NAME + "</label>" + " </div>" + " <div class='form-group'>"
             + " <label  style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Age / Height</label>" + "  <label class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6' style='color: Black;'>"
             + ": " + data.d[i].AGE + "-" + data.d[i].Height + "</label>" + "</div>"
            + "<div class='form-group'>" + "<label  style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Caste</label>" + " <label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>: " + data.d[i].Religion + "-" + data.d[i].Caste + "</label>"
            + "</div>" + "<div class='form-group'>" + " <label  style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>arital status</label>"
            + " <label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>: " + data.d[i].MaritualStatus + "</label>" + "</div>" + "<div class='form-group'>"
            + "<label  style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Star</label>"
            + " <label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>:  " + data.d[i].Star + "</label>" + "</div>" + "<div class='form-group'>"
            + "<label style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Location</label>" + "<label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>:" + data.d[i].Location + "</label>" + "</div>"
            + "<div class='form-group'>" + " <label  style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Education</label>" + " <label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>: " + data.d[i].Education + "</label>"
            + "</div>" + "<div class='form-group'>" + " <label style='font-weight: bold;' class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>Occupation</label>" + " <label  class='control-label col-sm-6  col-lg-6  col-md-6 col-xs-6'>:" + data.d[i].Profession + "</label>"
            + "</div>" + "</div>" + "<div class='col-lg-6 col-md-6'>" + "  <div class='container hidden-md hidden-lg visible-sm-block visible-xs-block'>"
            + " <form class='form-horizontal' role=form>" + "<div class='form-group'>" + "<label class='control-label col-sm-2' for=Name>Name:</label>"
            + "  <label class='control-label col-sm-10' for=Name>" + data.d[i].NAME + "</label>" + " </div>" + "<div class='form-group'>" + "  <label class='control-label col-sm-2' for=Qualification>Qualification:</label>"
            + "<label class='control-label col-sm-10' for=Qualification>" + data.d[i].Education + "</label>" + "</div>" + "<div class='form-group'>"
            + "<label class='control-label col-sm-2' for=Qualification>Profession:</label>" + "<label class='control-label col-sm-10' for=Qualification>" + data.d[i].Profession + "</label>" + " </div>"
            + "<div class='form-group'>" + "<label class='control-label col-sm-2' for=Qualification>Income:</label>" + "<label class='control-label col-sm-10' for=Qualification>122222</label>" + "</div>"
            + " </form>" + " </div>" + "<div  class='row'>" +
            "<div class='listnew search_result_item_ui_exprsns row'> <ul> <li class='col-lg-2 col-md-2 col-sm-2 col-xs-2 col-sm-offset-1'>"
            + "<div><a onclick='return BookMark(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('Bookmark') + "," + JSON.stringify(data.d[i].mybookmarked) + ");' title=BookMark href='javascript:void(0)' style='color: Black;'><img src='../images/bookmark_icon.png' alt=Bookmark title=BookMark>BookMark</a></div></li> <li class='col-lg-3 col-md-3 col-sm-3 col-xs-3 col-sm-offset-1'>"
            + "<img src='../images/interest_icon.png' alt=Express interest title=Express><div><a onclick='return Expressinterest(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('EXpressInterest') + "," + JSON.stringify(data.d[i].ExpressFlag) + ");'  title=Express interest href='javascript:void(0)' style='color: Black;'>Express Interest</a></div> </li>"
            + "<li class='col-lg-2 col-md-2 col-sm-2 col-xs-2'><img src='../images/message_icon2.png' alt=Message title=Message><div><a title=Message href='javascript:void(0)' onclick='return commonpopupmethod(" + JSON.stringify('Message') + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('sendmessage') + ",);' style='color: Black;'>Message</a></div></li>"
            + "<li class='col-lg-2 col-md-2 col-sm-2 col-xs-2'><img src='../images/close_icon.png' alt=Not interest title=Ignore><div><a onclick='return BookMark(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('NotInterest') + "," + JSON.stringify(data.d[i].ignode) + ");' title=Ignore href=javascript:void(0) style='color: Black;'>Ignore</a></div></li></ul><div class=clear></div></div></div><div class='clearfix'></div><div class='row  " + photoclass + "'>"
            + "<input name='imagepath' class='" + linkdisabled + "' src= " + strimageurl + "  type='image' onclick='return getimgPathforcustomersite(" + data.d[i].intCusID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ")'>" + "</div><div class='row " + Paggingdisabled + "'><div class='col-lg-8 col-lg-offset-2'><input name=cmdPrev  src='../../Images/btn_arowl.png' type=image onclick='return  getimgPathforcustomersite(" + data.d[i].intCusID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ")'><a href='javascript:void(0)' onclick='return  getimgPathforcustomersite(" + data.d[i].intCusID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ")'><span style='color:Black;font-size:9pt;'>No of Photos " + data.d[i].PhotoCount + "</span></a><input name=cmdNext  src='../../Images/btn_arowr.png' type=image onclick='return  getimgPathforcustomersite(" + data.d[i].intCusID + "," + data.d[i].ProfileID + "," + data.d[i].PhotoCount + ")'></div></div></div>");
            $('#popupprogress').attr('style', 'width: ' + ((curPageVal + 10) / (data.d[i].Totalrows)) * 100 + '%;');

        }

        if ($("#Slidephotopopup .carousel-inner .item:first").hasClass("active")) {
            $('#Slidephotopopup').find('.left').hide();
            $('#Slidephotopopup').find('.right').show();
        }
    }


}
function BookMark(tocustid, methodname, flag) {
    
    var success = methodname == "Bookmark" ? 'Bookmarked successfully' : 'profile not Interested';
    var fail = methodname == "Bookmark" ? 'You have already Bookmarked this profile' : 'You have already ignored this profile';
    var custid;

    if (methodname == 'Bookmark') {
        custid = JSON.stringify(bcustid);
    }
    else {
        custid = JSON.stringify(icustid);
    }
    if (LoginExistance()) {
        if (custid.indexOf(tocustid) != -1) {
            DynamicTimeAlert(fail, 'alert alert-danger', '4000');
        }

        else {
            if (flag == "1") {
                DynamicTimeAlert(fail, 'alert alert-danger', '4000');
            }
            else {
                var Bindbookmark = {
                    Bookmark: {
                        tocustid: '' + tocustid + '',
                        fromcustid: '' + custidquerystrinng + '',
                        methodname: '' + methodname + ''
                    }
                }

                var data = CallApi('BookMarkMessage', Bindbookmark);

                if (JSON.stringify(data.d) == 1) {

                    DynamicTimeAlert(success, 'alert alert-success', '4000');


                    if (methodname == 'Bookmark') {
                        bcustid += "," + tocustid;
                    }

                    else {
                        icustid += "," + tocustid;
                    }

                }
                else if (JSON.stringify(data.d) == 0) {
                    DynamicTimeAlert(fail, 'alert alert-danger', '4000');
                }
            }
        }

    }
    return false;
}

function Expressinterest(tocustid, methodname, flag) {

    
    if (LoginExistance()) {

        var Bindbookmark = {
            Bookmark: {
                tocustid: '' + tocustid + '',
                fromcustid: '' + custidquerystrinng + '',
                methodname: '' + methodname + ''
            }
        }

        var data = CallApi('BookMarkMessage', Bindbookmark);

        switch (JSON.stringify(data.d)) {
            case "1":
                DynamicTimeAlert('Express intrested succesuffully', 'alert alert-success', '4000');
                break;
            case "2":
                DynamicTimeAlert('Upgrade your online membership to Express interest', 'alert alert-danger', '4000');
                break;

            case "4":
                DynamicTimeAlert('You have already express intrest in this profile', 'alert alert-danger', '4000');
                break;

            case "6":
                DynamicTimeAlert('This profile already express interested your profile please check your express interest received messages', 'alert alert-danger', '4000');
                break;
            case "0":
                DynamicTimeAlert('ExpressInterest failed please contact Admin', 'alert alert-danger', '4000');
                break;
        }

    }
    return false;
}

//Slide Popup
//my profile slide shoe script
function closepopup() {
    $('#horoscopepopup').modal('hide');
    return false;
}

function Slideshowpage() {
    
    $("#Slidephotopopup .carousel-inner").html("");
    pageloadSlide();
    checkitemnew();
    $('#Slidephotopopup').carousel('pause');
    $('#playButton').show();
    $('#pauseButton').hide();
    $('#Searchpopup').modal({ backdrop: 'static' });

    return false;
}


function gotoSlide(e) {

    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#Slidephotopopup').carousel(parseInt($(e).val()) - 1);
    }
    else {

        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}


function pageloadSlide() {
    var currentslide = 1, totalItems = $('#Slidephotopopup').find('.item').length;
    if (totalItems == 0) {

        popupsubmitmethod(totalItems, "Fullphoto");
        $('.num').html('Profile ' + '' + 1);
        if ($('#playButton').is(":visible")) {
            $('#Slidephotopopup').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
        }
    }


    $('#Slidephotopopup').bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#Slidephotopopup').find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#Slidephotopopup').find('.item').length;

        var currentIndex1 = $('#Slidephotopopup').find('div.active').index() + 1;
        if ($('#playButton').is(":visible")) {
            $('#Slidephotopopup').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
        }
        $('#Slidephotopopup').find('div.active').index()
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {

                popupsubmitmethod(totalItems1, "Fullphoto");

            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex1)
                $("#lnkLastSlide").text(currentIndex1);
        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);

    });


    //play and pause function on click event
    $('#Slidephotopopup').carousel({
        interval: 2000,
        pause: "false"
    });
    $('#playButton').click(function () {

        $('#Slidephotopopup').carousel('cycle');
        $('#playButton').hide();
        $('#pauseButton').show();
    });
    $('#pauseButton').click(function () {
        $('#Slidephotopopup').carousel('pause');
        $('#playButton').show();
        $('#pauseButton').hide();
    });


    //method to move slide on left or right arrow press

    $(document).bind('keyup', function (e) {

        var totalItems = $('#Slidephotopopup').find('.item').length;
        var currentIndex = $('#Slidephotopopup').find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#Slidephotopopup').carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#Slidephotopopup').carousel('prev');
        }

    });
    //hide slide arrows for  first and last slide slides  
    var checkitem = function () {
        checkitemnew();
    };

    $("#Slidephotopopup").on("slid.bs.carousel", "", checkitem);

    $(function () {
        var wage = document.getElementById("txtGotoVal");
        wage.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                gotoSlide(wage);
                $('#Slidephotopopup').carousel('pause');
                $('#playButton').show();
                $('#pauseButton').hide();
                return false;
            }

        });
    });

}

function checkitemnew() {
    var $this;
    $this = $("#Slidephotopopup");
    if ($("#Slidephotopopup .carousel-inner .item:first").hasClass("active")) {
        $('#Slidephotopopup').find('.left').hide();
        $('#Slidephotopopup').find('.right').show();
    }
    else if ($("#Slidephotopopup .carousel-inner .item:last").hasClass("active")) {
        $('#Slidephotopopup').find('.left').show();
        $('#Slidephotopopup').find('.right').hide();

    }
    else {
        $('#Slidephotopopup').find('.left').show();
        $('#Slidephotopopup').find('.right').show();
    }

}

function PageredirectstoAdvance(typeofpage) {
    console.log(typeofpage);

    switch (typeofpage) {
        case "General":
            if (custidquerystrinng != null && custidquerystrinng != "") {
                window.location.replace('KaakateeyaCustomerGeneralsearchNew.aspx?CustID=' + custidquerystrinng);
            }
            else {
                window.location.replace('KaakateeyaCustomerGeneralsearchNew.aspx');
            }
            break;
        case "Advanced":
            if (custidquerystrinng != null && custidquerystrinng != "") {
                window.location.replace('KaaKateeyaCustomerAdvancesearchNew.aspx?CustID=' + custidquerystrinng);
            }
            else {
                window.location.replace('KaaKateeyaCustomerAdvancesearchNew.aspx');
            }
            break;
        case "Profileid":
            if (custidquerystrinng != null && custidquerystrinng != "") {
                window.location.replace('KaakateeyaCustomerProfileIDsearchNew.aspx?CustID=' + custidquerystrinng);
            }
            else {
                window.location.replace('KaakateeyaCustomerProfileIDsearchNew.aspx');
            }
            break;
        case "Save&Search":
            if (custidquerystrinng != null && custidquerystrinng != "") {
                window.location.replace('KaakateeyaCustomersavedsearchNew.aspx?CustID=' + custidquerystrinng);
            }
            else {
                window.location.replace('KaakateeyaCustomersavedsearchNew.aspx');
            }
            break;
    }


    return false;
}
function ShowFullProfile(ProfileID, ToCustID) {

    window.open("CustomerfullprofileNew.aspx?ProfileID=" + ProfileID + "&ToCustID=" + ToCustID + "&FromCustId=" + custidquerystrinng, "_blank");
    return false;

}

function saveandsearch() {
    if ($('#btnSavesearch').html() != "Update") {
        commonpopupmethod("SaveandSearch", custidquerystrinng);
    }
    else {
        SubmitSaveSearchData();
    }
    return false;
}


function SaveSearchData() {
    
    SavedSearchInsert = $('#txtSavedSearch').val();
    SubmitSaveSearchData();
    $('#commontitle').modal('hide');
    return false;
}


function SubmitSaveSearchData() {

    startindex = 1;
    endindex = 10;
    $('#divcontrols').toggleClass('hidden show');
    $('html, body').animate({ scrollTop: 0 }, 800);
    showrefinesearch();
    document.getElementById("divsearchresult").style.display = 'block';
    document.getElementById("divloader").style.display = 'block';
    document.getElementById("affixsticky").style.display = 'block';
    $(".Maindiv").html("");
    scrolldivfunction(startindex, endindex);
    document.getElementById("divloadmore").style.display = 'block';
    return false;

}