var SearchRequest, flag = 8, startindex = 1, endindex = 8, typeofdiv = "List", Fromage, toage, homepagereligion, homepagecountry,
    Fromheight, Toheight, Popstartindexflag = 1, Decryptcustid, custidto, bcustid = 0,
    icustid = 0, ecustid = 0, Refinefromage,
    Refinetoagem, RefineHeight, RefineToheight, Upadateandsavedsearch,
SavedSearchInsert, Scrollflag = "", currentslide, flagforloadmaore = 8, dataload = [], flaghundred;
var paidtype = $('#ctl00_lblpaid').text();
$submit = $('#btnSaveAdvancesearch');
function Bindsingledropdowns() {
    StaticBingsForSe3arches();
    var Bindings;
    var datas;
    if (PageID == "3") {
        Bindings = {
            Masterbind: {
                JobCountry: "JobCountry",
                State: "State",
                EducationGroup: "EducationGroup",
                ProfessionGroup: "ProfessionGroup",
                CountryCurrency: "CountryCurrency",

            }
        }
        datas = CallApi("CommonPopulateDropDownList", Bindings);
    }
    else if (PageID == "2") {
        Bindings = {
            Masterbind: {
                JobCountry: "JobCountry",
            }
        }
        datas = CallApi("CommonPopulateDropDownList", Bindings);
    }

    var methodnames = [
             { dropdownname: "lstCountrylivingin", data: datas.d.JobCountry },
             { dropdownname: "lstStatelivingin", data: datas.d.State },
             { dropdownname: "lstEducationGroup", data: datas.d.EducationGroup },
             { dropdownname: "lstProfessionGroup", data: datas.d.ProfessionGroup },
             { dropdownname: "ddlAnnualincome", data: datas.d.CountryCurrency },
    ];
    for (var i = 0; i < methodnames.length; i++) {
        GetMasterDataforSearchessingle(methodnames[i].dropdownname, methodnames[i].data);
    }
    return false;
}

function StaticBingsForSe3arches() {
    var methodnames = [

                { dropdownname: "ddlreligionid", data: ReligionArr },
                { dropdownname: "lstMothertongue", data: MothertongueArr },
                { dropdownname: "lstMaritalstatus", data: MaritalStatusArr },
                { dropdownname: "ddlFromheight", data: HeightArr },
                { dropdownname: "ddlToheight", data: HeightArr },
                { dropdownname: "ddlFromAge", data: AgeArr },
                { dropdownname: "ddlToAge", data: AgeArr },
                { dropdownname: "lstEducationcategory", data: educationcate },
                { dropdownname: "lstStar", data: stars },
                { dropdownname: "chkvisastatus", data: visastatus }
    ];

    for (var i = 0; i < methodnames.length; i++) {
        StaticBind(methodnames[i].dropdownname, methodnames[i].data);
    }

    return false;
}
function GetMasterDataforSearchessingle(dropdownname, data) {
    var options = [];
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true
    };
    if (data != null && data != undefined && data.length > 0) {
        if (!$("#" + dropdownname).hasClass("multiple")) {
            options.push({ label: "--Select--", title: "--select--", value: "0" });
        }
        $.each(data, function (key, value) {
            options.push({ label: value.value, title: value.value, value: value.Id });
        });
        $('#' + dropdownname + '').multiselect('dataprovider', options);
        $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
        $('#' + dropdownname + '').multiselect('rebuild');
    }
}
function menuheight() {
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        $('#ctl00_divwithoutlogin').removeClass('navbar_inner_nologin');
        document.getElementById("searchresultprofilesdiv").style.display = 'block';
    }
    else {
        $('#ctl00_divwithoutlogin').addClass('navbar_inner_nologin');
        document.getElementById("searchresultprofilesdiv").style.display = 'none';
        $('.Linkdisabled').addClass("Linkdisabledfalse").removeClass("Linkdisabled");
    }
    return false;
}
$(function () {
    playAndPause("slideShowCarousel", "playButton", "pauseButton");
    menuheight();
    if (QuickSearchresult == 0 && QuickSearchresult != '') {
        document.getElementById("divcontrols").style.display = 'none';
    }
    else {
        document.getElementById("divcontrols").style.display = 'block';
    }
    if (PageID == "1") {
        document.getElementById("newsearchresultdiv").style.display = 'none';
        document.getElementById("btnSavesearch").style.display = 'none';
        document.getElementById("lnkSaveandSearch").style.display = 'none';
        if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
            $('#ctl00_divwithoutlogin').removeClass('navbar_inner_nologin');
            document.getElementById("divGender").style.display = "none";
            divvisiblefalse();
        }
        else {
            $('#ctl00_divwithoutlogin').addClass('navbar_inner_nologin');
            document.getElementById("divGender").style.display = "block";
        }
    }

    else {
        document.getElementById("newsearchresultdiv").style.display = 'none';
        if (PageID == "2" || PageID == "3") {
            setTimeout(Bindsingledropdowns, 1000);
        }
        PageID != "" ? document.getElementById("btnSavesearch").style.display = 'none' : "";
        PageID != "" ? document.getElementById("lnkSaveandSearch").style.display = 'none' : "";
        if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
            $('#ctl00_divwithoutlogin').removeClass('navbar_inner_nologin');
            document.getElementById("newsearchresultdiv").style.display = 'block';
            var custid = { 'StrCustID': '' + custidquerystrinng + '' };
            var data = CallApi('showhidesearchburron', custid);
            if (PageID != "") {
                data.d == false ? (document.getElementById("btnSavesearch").style.display = 'none') : (document.getElementById("btnSavesearch").style.display = 'block');
                divvisiblefalse();
                if (Searchresult != undefined && Searchresult != null && Searchresult != "" && (backsearch == undefined || backsearch == null || backsearch == "")) {
                    SubmitAdvance();
                }
                else {
                    if (backsearch != undefined && backsearch != null && backsearch != "") {
                        $('#btnSavesearch').html("Update&Search");
                        document.getElementById("btnSaveAdvancesearch").style.display = 'none';
                    }
                    setTimeout(querystringbind, 1000);
                }
            }
        }
        else if (QuickSearchresult == 0 && QuickSearchresult != '') {
            debugger;
            $('#ctl00_divwithoutlogin').addClass('navbar_inner_nologin');
            document.getElementById("divcontrols").style.display = 'none';
            var data = CallApi("../../Services/KaakateeyaServices.asmx/GetQuickSearchSession", {});
            $("#uniform-undefined > span").removeClass('checked');
            //$(".ValueContains > li").removeClass('class');
            $('#ddlFromAge').next().find('div>ul>li').removeAttr("class");
            console.log(data);
            //$('#ddlFromAge').multiselect('select', ((data.d.FromAge != "" && data.d.FromAge != null) ? [((data.d.FromAge).toString())] : null));
            Fromage = data.d.FromAge;
            //$('#ddlToAge').multiselect('select', [data.d.ToAge]);
            toage = data.d.ToAge;
            $('#ddlFromAge').multiselect('select', [data.d.FromAge]);
            $('#ddlToAge').multiselect('select', [data.d.ToAge]);
            $('#ddlreligionid').multiselect('select', [data.d.intReligionID]);
            homepagereligion = data.d.intReligionID;
            homepagecountry = data.d.Country;
            $('#lstCaste').multiselect('select', ((data.d.Caste) != "") ? SplitstringintoArray(data.d.Caste) : null);
            $('#lstCountrylivingin').multiselect('select', ((data.d.Country) != "") ? (data.d.Country) : null);
            $('#lblCastids').text((data.d.Caste) != "" ? (data.d.Caste) : null);
            SubmitAdvance();
            return false;
        }
        else {
            setTimeout(withoutloginbindgs, 1000);
        }
    }
    setTimeout(ApplyColorValueContainsSelect, 2000);



});
function withoutloginbindgs() {
    $("#uniform-undefined > span").removeClass('checked');

    $('#ddlFromAge btn-group').next().find('div>ul>li').removeAttr("class");

    //$(".ValueContains > li").removeClass("");
    $('#ddlFromAge').multiselect('select', [18]);
    $('#ddlToAge').multiselect('select', [30]);
    $('#ddlFromheight').multiselect('select', [1]);
    $('#ddlToheight').multiselect('select', [39]);
    $('#ddlreligionid').multiselect('select', [1]);
    return false;
}
function ProfileIdsubmitmethod(StartIndex, EndIndex, querystring) {
    SearchRequest = {
        dt: {
            strCust_id: custidquerystrinng != null ? custidquerystrinng : "",
            intCusID: getdecryptcustid(),
            intGender: $("input:radio[name='gender']:checked").val(),
            strLastName: ($('#txtLastNameProfileid').val() != "") && ($('#txtLastNameProfileid').val() != null) ? $('#txtLastNameProfileid').val() : null,
            strFirstName: ($('#txtFirstNameProfileid').val() != "") && ($('#txtFirstNameProfileid').val() != null) ? $('#txtFirstNameProfileid').val() : null,
            strProfileID: ($('#txtProfileid').val() != "") && ($('#txtProfileid').val() != null) ? $('#txtProfileid').val() : null,
            intCasteID: null,
            StartIndex: StartIndex,
            EndIndex: EndIndex,
            flagforurl: querystring,
            SavedSearch: SavedSearchInsert != null && SavedSearchInsert != '' ? SavedSearchInsert : Savessearchname,
            SearchPageID: "1",
            PageName: "ProfileIDsearch"
        }

    }
    return SearchRequest;
}
function divvisiblefalse() {
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        var custid = { 'StrCustID': '' + custidquerystrinng + '' };
        var data = CallApi('ispaidmember', custid);
        data.d.Gender == "1" ? SelectvalueforRadiobuttons("gender", "2") : "1";
        $('input[name=gender]').attr("disabled", true);
        PageID != "" ? $("#ctl00_lblpaid").text() == "Paid" ? (document.getElementById("btnSavesearch").style.display = 'block') && (document.getElementById("lnkSaveandSearch").style.display = 'block') : (document.getElementById("btnSavesearch").style.display = 'none') && (document.getElementById("lnkSaveandSearch").style.display = 'none') : "";
        if (PageID != "1" && PageID != "") {
            data.d.isonlinePaidmember == "True" ? (document.getElementById("divRegistrationdays").style.display = 'block') : (document.getElementById("divRegistrationdays").style.display = 'none');
        }
    }
    return false;
}

function SelectvalueforRadiobuttons(id, value) {
    var $radios = $('input:radio[name=' + id + ']');
    $radios.filter('[value=' + value + ']').attr('checked', true);
    $radios.filter('[value!=' + value + ']').parent().removeClass('checked');
    $radios.filter('[value=' + value + ']').parent().addClass('checked');
}
function savessearchdata() {
    var Savesearchcontrols = {
        custidsearchid: {
            CustID: '' + custidquerystrinng + '',
            Textsearch: '' + SearchResult_ID + ''
        }
    }
    var data = CallApi('Savedsearchbindings', Savesearchcontrols);
    return data;
}
function querystringbind() {
    debugger;
    var data;
    if (custidquerystrinng != null && custidquerystrinng != "") {
        var odject = { 'custid': '' + custidquerystrinng + '' };
        if (backsearch != undefined && backsearch != "" && backsearch != null) {
            data = savessearchdata();
        }
        else {
            data = CallApi('Partnerpreferencepageload', odject);
        }
        if (PageID != "" && PageID == "3") {
            $("#uniform-undefined > span").removeClass('checked');
            $("div.btn-group.open > ul.multiselect-container.dropdown-menu >li").className = '';

            document.getElementById("divCste").style.display = 'none';
            document.getElementById("divCastLabel").style.display = 'block';
            $('#ddlFromAge').multiselect('select', [data.d.Ageto]);

            $('#ddlToAge').multiselect('select', [data.d.Agefrom]);
            $('#ddlFromheight').multiselect('select', [data.d.Heightto]);
            $('#ddlToheight').multiselect('select', [data.d.Heightfrom]);
            $('#lstMaritalstatus').multiselect('select', ((data.d.Maritalstatus) != "") ? SplitstringintoArray(data.d.Maritalstatus) : null);
            $('#ddlreligionid').multiselect('select', ((data.d.Religion) != "") ? SplitstringintoArray(data.d.Religion) : null);
            $('#lstMothertongue').multiselect('select', ((data.d.MotherTongue) != "") ? SplitstringintoArray(data.d.MotherTongue) : null);
            $('#lstCaste').multiselect('select', ((data.d.Caste) != "") ? SplitstringintoArray(data.d.Caste) : null);
            $('#lstCountrylivingin').multiselect('select', ((data.d.Country) != "") ? SplitstringintoArray(data.d.Country) : null);
            $('#lstStar').multiselect('select', (((data.d.Stars) != "") && ((data.d.Stars) != null)) ? SplitstringintoArray(data.d.Stars) : null);
            $('#lstEducationcategory').multiselect('select', (((data.d.Educationcategory) != "") && ((data.d.Educationcategory) != null)) ? SplitstringintoArray(data.d.Educationcategory) : null);
            SelectvalueforRadiobuttons("gender", data.d.intGender);
            SelectvalueforRadiobuttons("physicalstatus", data.d.PhysicalStatusstring);
            $('#lblCastidsdisplay').html(data.d.CasteText);
            $('#lblCastids').html(data.d.Caste);
            binddependencyFormissingfields("State", data.d.Country, ".lstStatelivingin", "");
            binddependencyFormissingfields("EducationGroup", data.d.Educationcategory, ".lstEducationGroup", "");
            BindPrimarydependency(data.d.casteid, "Caste", data.d.MotherTongue, data.d.Religion, ".lstCaste", "lstCaste");
            document.getElementById("editpartnerpref").style.display = 'block';
        }
        else if (PageID != "" && PageID == "2") {
            document.getElementById("divCste").style.display = 'none';
            document.getElementById("divCastLabel").style.display = 'block';
            $('#ddlFromAge').multiselect('select', [data.d.Ageto]);
            $('#ddlToAge').multiselect('select', [data.d.Agefrom]);

            $('#ddlFromheight').multiselect('select', [data.d.Heightto]);
            $('#ddlToheight').multiselect('select', [data.d.Heightfrom]);
            $('#lstMaritalstatus').multiselect('select', ((data.d.Maritalstatus) != "") ? SplitstringintoArray(data.d.Maritalstatus) : null);
            $('#ddlreligionid').multiselect('select', ((data.d.Religion) != "") ? SplitstringintoArray(data.d.Religion) : null);
            $('#lstMothertongue').multiselect('select', ((data.d.MotherTongue) != "") ? SplitstringintoArray(data.d.MotherTongue) : null);
            $('#lstCaste').multiselect('select', ((data.d.Caste) != "") ? SplitstringintoArray(data.d.Caste) : null);
            $('#lstCountrylivingin').multiselect('select', ((data.d.Country) != "") ? SplitstringintoArray(data.d.Country) : null);
            SelectvalueforRadiobuttons("gender", data.d.intGender);
            $('#lblCastidsdisplay').html(data.d.CasteText);
            $('#lblCastids').html(data.d.Caste);
            BindPrimarydependency(data.d.casteid, "Caste", data.d.MotherTongue, data.d.Religion, ".lstCaste", "lstCaste");
            document.getElementById("editpartnerpref").style.display = 'block';
        }
        else if (PageID != "" && PageID == "1") {
            $('#lblCastidsdisplay').html(data.d.CasteText);
            $('#lblCastids').html(data.d.Caste);
        }
    }
    return false;
}
function BindPrimarydependency(datachild, method, parentid, secondparentid, childclass, childid) {
    if (datachild != "" && datachild != null) {
        binddependencyFormissingfields(method, parentid, childclass, secondparentid);
        bindingSelectedvaluesoflistselect(childid, datachild);
    }
    return false;
}
function Editpartnerpreference() {
    window.location.replace('Editpartnerpreference.aspx?CustID=' + custidquerystrinng, '_blank');
    return false;
}
function BookMark(tocustid, methodname, flag, divID) {
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
        flag == "1" ? true : false;
        ServiceActions(getdecryptcustid(), tocustid, flag, methodname, divID);
    }
    return false;
}
function Expressinterest(tocustid, methodname, flag, divID) {
    if (LoginExistance()) {
        ServiceActions(getdecryptcustid(), tocustid, flag, methodname, divID);
    }
    return false;
}
function Changelist() {
    $('.HidePhotoCount').hide();
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        document.getElementById("newsearchresultdiv").style.display = 'block';
    }
    else {
        document.getElementById("newsearchresultdiv").style.display = 'none';
    }
    typeofdiv = "Grid";
    document.getElementById("divviewdprofiles").style.display = 'none';
    $('.list').addClass('searched_list_item2').removeClass('search_result_item clearfix');
    $('.list').attr('style', 'width: 22%;margin-right: 2.4%;min-width: 250px;');
    $('.search_result_items_main').attr('style', 'width: 100%;');
    $('.listnew').removeClass('search_result_item_ui_exprsns pull-right').addClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid');
    $(".ipName").css("display", "none");
    $(".ipMaritalstatus").css("display", "none");
    $(".ipStar").css("display", "none");
    $(".ipLocation").css("display", "none");
    document.getElementById("slideShowCarousel").style.display = 'none';
    document.getElementById("Refsearchllll").style.display = 'block';
    document.getElementById("imageslideshow").style.display = 'block';
    document.getElementById("playButton").style.display = 'none';
    document.getElementById("pauseButton").style.display = 'none';
    return false;
}
function Changetogrid() {
    $('.HidePhotoCount').show();
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        document.getElementById("newsearchresultdiv").style.display = 'block';
    }
    else {
        document.getElementById("newsearchresultdiv").style.display = 'none';
    }
    typeofdiv = "List";
    document.getElementById("divviewdprofiles").style.display = 'none';
    $('.list').removeClass('searched_list_item2').addClass('search_result_item clearfix');
    $('.list').attr("style", "");
    $('.search_result_items_main').attr("style", "");
    $('.listnew').removeClass('search_result_item_ui_exprsns clearfix search_result_item_ui_exprsns_grid').addClass('search_result_item_ui_exprsns pull-right');
    $(".ipName").css("display", "block");
    $(".ipMaritalstatus").css("display", "block");
    $(".ipStar").css("display", "block");
    $(".ipLocation").css("display", "block");
    document.getElementById("slideShowCarousel").style.display = 'none';
    document.getElementById("Refsearchllll").style.display = 'block';
    document.getElementById("imageslideshow").style.display = 'block';
    document.getElementById("playButton").style.display = 'none';
    document.getElementById("pauseButton").style.display = 'none';
    return false;
}
function Modifursearch() {
    Scrollflag = "";
    document.getElementById("divcontrols").style.display = 'block';
    document.getElementById("divviewdprofiles").style.display = 'none';
    $('#divcontrols').toggleClass('hidden show');
    document.getElementById("divsearchresult").style.display = 'none';
    document.getElementById("playButton").style.display = 'none';
    document.getElementById("pauseButton").style.display = 'none';
    document.getElementById("pauseButton").style.display = 'none';
    document.getElementById("imageslideshow").style.display = 'block';
    Changetogrid();
    Bindingrefinetocontrols();
    $('#ddlFromAge').multiselect('select', [Fromage]);
    $('#ddlToAge').multiselect('select', [toage]);
    $('#ddlFromheight').multiselect('select', [Fromheight]);
    $('#ddlToheight').multiselect('select', [Toheight]);
    return false;
}
function Modifursearchslide() {
    $('#slideShow').modal('hide');
    Scrollflag = "";
    document.getElementById("divcontrols").style.display = 'block';
    $('#divcontrols').toggleClass('hidden show');
    document.getElementById("divsearchresult").style.display = 'none';
    Changetogrid();
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
        $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
    }, 200);

    return false;
}
$(window).scroll(function () {
    if (Scrollflag == 1) {
        //if ($(window).scrollTop() >= ($(document).height() - $(window).height()) * 0.9) {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            document.getElementById("Norows").style.display = 'none';
            if (LoginExistance()) {
                document.getElementById("divloadmore").style.display = 'none';
                pagingonscroll();
            }
        }
    }
    return false;
});

function Ladmore() {
    if (LoginExistance()) {
        document.getElementById("divloadmore").style.display = 'none';
        pagingonscroll();
    }
}
function pagingonscroll() {

    if (flagforloadmaore < parseInt($('#refinetotalrecords').html())) {
        flag += 8;
        startindex = flag - 7;
        endindex = flag;
        flagforloadmaore += 8;
        if (typeofdiv == "Grid") {
            $('.HidePhotoCount').hide();
            scrolldivfunction(startindex, endindex);
            Changelist();
        }
        else {
            $('.HidePhotoCount').show();
            scrolldivfunction(startindex, endindex);
            Changetogrid();
        }
    }
    else {
        document.getElementById('Norows').style.display = 'block';
    }
}
function checkLength() {

    var textboxprofileid = document.getElementById("txtProfileid");
    var textbox = document.getElementById("txtFirstNameProfileid");
    var textboxlastname = document.getElementById("txtLastNameProfileid");
    if ((textboxprofileid.value != "" && textboxprofileid.value != null) || (textbox.value != "" && textbox.value != null) || (textboxlastname.value != "" && textboxlastname.value != null)) {
        if (textbox.value != "" && textbox.value != null) {
            if (textbox.value.length < 3) {
                DynamicTimeAlert('Mininum 3 charactes required For Name', 'alert alert-danger', '4000');
                return false;
            }
            else {
                return true;
            }
        }
        else if (textboxlastname.value != "" && textboxlastname.value != null) {
            if (textboxlastname.value.length < 3) {
                DynamicTimeAlert('Mininum 3 charactes required For Name', 'alert alert-danger', '4000');
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    else {
        DynamicTimeAlert('pls enter atleast one fileld', 'alert alert-danger', '4000');
        return false;
    }

}
function newsubmitadvance() {
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        document.getElementById("newsearchresultdiv").style.display = 'block';
        startindex = 1;
        endindex = 104;
        flaghundred = 0;
    }
    else {
        document.getElementById("newsearchresultdiv").style.display = 'none';
        startindex = 1;
        endindex = 8;
        flaghundred = 0;
    }
    Refinesubmitflag = "";
    document.getElementById("divsubmitloader").style.display = 'block';
    document.getElementById("divviewdprofiles").style.display = 'none';
    document.getElementById('Norows').style.display = 'none';
    document.getElementById("divloadmore").style.display = 'none';
    document.getElementById("imageslideshow").style.display = 'block';
    document.getElementById("playButton").style.display = 'none';
    SavedSearchInsert = "";
    Upadateandsavedsearch = "";
    $('#divcontrols').toggleClass('hidden show');
    $('html, body').animate({ scrollTop: 0 }, 800);
    document.getElementById("slideShowCarousel").style.display = 'none';
    document.getElementById("Refsearchllll").style.display = 'block';
    document.getElementById("divloader").style.display = 'block';
    $(".Maindiv").html("");
    $('#refinetotalrecords').html('');
    flagforloadmaore = 8;
    dataload = [];
    flag = 8;
    scrolldivfunction(startindex, endindex);
    document.getElementById("divloadmore").style.display = 'block';
    document.getElementById("divsubmitloader").style.display = 'none';
    Scrollflag = 1;
}
function SubmitAdvance() {
    if (PageID == "1") {
        if (checkLength()) {
            newsubmitadvance();
        }
    }
    else {
        newsubmitadvance();
    }

    return false;
}
var PartnerDivCount = 0;
function scrolldivfunction(startindex, endindex) {
    PartnerDivCount += 1;
    var data;

    document.getElementById("divloader").style.display = 'block';
    if (PageID == "1") {

        if (startindex == 1 || parseInt(flagforloadmaore) == parseInt(flaghundred)) {

            if (flagforloadmaore == flaghundred) {

                SearchRequest.dt.StartIndex = parseInt(flaghundred) + 1;
                SearchRequest.dt.EndIndex = parseInt(flaghundred) + 104;

            }
            ProfileIdsubmitmethod(startindex, endindex);
            data = CallApi("Profileidsubmit", SearchRequest);
            flaghundred += 104;
            dataload = $.merge(dataload, data.d);
        }
    }
    else {

        if (startindex == 1) {
            submitmethod(startindex, endindex);
        }
        //else {

        //    SearchRequest.dt.StartIndex = startindex;
        //    SearchRequest.dt.EndIndex = endindex;

        //}
        if (startindex == 1 || parseInt(flagforloadmaore) == parseInt(flaghundred)) {

            if (flagforloadmaore == flaghundred) {

                SearchRequest.dt.StartIndex = parseInt(flaghundred) + 1;
                SearchRequest.dt.EndIndex = parseInt(flaghundred) + 104;
            }
            data = CallApi("SearchPageSubmit", SearchRequest);
            flaghundred += 104;
            dataload = $.merge(dataload, data.d)
        }
    }
    if (dataload.length > 0 && dataload != undefined) {
        ddddddd(dataload);
    }
    else {

        if (PageID == "1") {
            document.getElementById("divloader").style.display = 'none';
            document.getElementById("divloadmore").style.display = 'none';
            document.getElementById("divsearchresult").style.display = 'none';
            document.getElementById("divcontrols").style.display = 'block';
            $('#divcontrols').toggleClass('hidden show');
            DynamicTimeAlert('sorry Profile Does Not Exists..', 'alert alert-danger', '4000');
        }
        else {
            document.getElementById("divloader").style.display = 'none';
            document.getElementById("divloadmore").style.display = 'none';
            document.getElementById("divsearchresult").style.display = 'none';
            document.getElementById("divcontrols").style.display = 'block';
            $('#divcontrols').toggleClass('hidden show');
            DynamicTimeAlert('sorry,No Records Found...Please Change your search criteria..', 'alert alert-danger', '4000');

        }
    }
    return false;
}

function ddddddd(data) {

    var i1;
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        i1 = startindex - 1;
        if (flagforloadmaore > parseInt($("#refinetotalrecords").html())) {
            flagforloadmaore = parseInt($("#refinetotalrecords").html());
        }
    }

    else {
        i1 = 0;
    }
    for (var i = i1; i < flagforloadmaore; i++) {

        PartnerDivCount = i + 1;
        $("#refinetotalrecords").html(data[i].Totalrows);
        flagforloadmaore = data[i].Totalrows >= 8 ? flagforloadmaore : data[i].Totalrows;
        $("#loadingrecords").html(parseInt(endindex) > parseInt(data[i].Totalrows) ? data[i].Totalrows : endindex);
        $("#totalrows").html((data[i].Totalrows));
        $("#refinetotalrecords").html((data[i].Totalrows));
        var StrUrlApplication = data[i].Photo, photoclass, lnkphototext, photopassword, lnkclass;
        var strphotocounthideclass = (data[i].PhotoCount) != null && (data[i].PhotoCount) != "" && (data[i].PhotoCount) != undefined && (data[i].PhotoCount) != 0 ? "align-items: center; text-align: center;display:block;" : "align-items: center; text-align: center;display:none;";
        photopassword = data[i].PhotoPassword;
        lnkphototext = "";

        if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
            if (data[0].PhotoClass.toLowerCase().indexOf("noimage") != -1) {
                photoclass = "cssMaskdiv clearfix Linkdisabled";
                lnkclass = "Linkdisabled";
            }
            else if (data[0].PhotoClass.toLowerCase().indexOf("_rev") != -1) {
                photoclass = "cssMaskdivrev clearfix Linkdisabled";
                lnkclass = "Linkdisabled";
            }
            else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {
                photoclass = "cssMaskdivrev clearfix Linkdisabled";
                lnkphototext = "";
                lnkclass = "Linkdisabled";
            }
            else if (StrUrlApplication.indexOf("noimage") != -1) {

                photoclass = "Linkdisabled";
                lnkphototext = "Photo Request";
                lnkclass = "Linkdisabled";
            }
            else if (photopassword == "Admin@123") {

                if (data[0].PhotoClass == "cssMaskdiv clearfix") {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                }
                else if (data[0].PhotoClass == "cssMaskdivrev clearfix") {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                }

                StrUrlApplication = "../../Customer_new/CutomerImages/List%20page/Password-Protected.png";
                photoclass = "Linkdisabled";
                lnkphototext = "Request Password";
                lnkclass = "Linkdisabled";
                strphotocounthideclass = "align-items: center; text-align: center;display:none;"
            }

            else {
                photoclass = "";
                lnkphototext = "";
            }
            if ((data[i].PhotoCount) == 0) {
                photoclass = "Linkdisabled";
                lnkphototext = "Photo Request";
            }
        }

        var strplaceofbirth = (data[i].placeofbirth) != null && (data[i].placeofbirth) != "" ? (data[i].placeofbirth) : "";
        var strgendertxt = (data[i].GenderID == 2 ? "She" : "He");
        var displaynonebirth = (data[i].placeofbirth) != null && (data[i].placeofbirth) != "" ? "display:block" : "display:none";
        var strphotocountt = (data[i].PhotoCount) != null && (data[i].PhotoCount) != "" && (data[i].PhotoCount) != undefined && (data[i].PhotoCount) != 0 ? +" " + data[i].PhotoCount : 0;
        $(".Maindiv").append("<div class='list search_result_item clearfix' id='partnerDiv" + PartnerDivCount + "' >" + "<p class='profile_no pull-left clearfix'>" + "</p>" + " <p class='label_check pull-left clearfix'>"
      + "<span >" + data[i].ProfileID + "</span>" + "</p>" + " <p></p>" + "<div class=clear></div>"
      + "<div class='search_result_item_in clearfix'>" + "<div class='search_result_item_pic pull-left'>" + "<span  class=" + JSON.stringify(photoclass) + ">" + "   <input name='imgProfilefullpic' src= " + StrUrlApplication + "  type='image' onclick='return getimgPathforcustomersitedynamic(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].PhotoCount) + ")'  style='height: 250px; width: 250px;' class='disabledclasspopup'>"
      + "</span>" + "<div class='HidePhotoCount " + lnkclass + "'><p   style='" + strphotocounthideclass + "'><input name='lblleftArrow'  class='lnkStyle' src='../../Customer/Images/imagesdd/prev.gif' type='image' onclick='return getimgPathforcustomersitedynamic(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].PhotoCount) + ")'/>"
      + "<span>1 </span>of<span> " + strphotocountt + "</span><input name='lblrighttArrow' class='lnkStyle' src='../../Customer/Images/imagesdd/next.gif' type='image' onclick='return getimgPathforcustomersitedynamic(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].PhotoCount) + ")'/>"
      + "</p></div>" + "<div>" + "<a  href='javascript:void(0)' style='font-weight: bold; text-decoration: underline;' onclick='return photoRequestMethod(" + JSON.stringify(custidquerystrinng) + "," + JSON.stringify(data[i].intCusID) + "," + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].PhotoPassword) + ")'>" + lnkphototext + "</a>"
       + "</div></div>" + "<div class='search_result_item_descr pull-left'>" + " <p style='" + displaynonebirth + "'>" + "<span>" + strgendertxt + "</span>" + " was born and raised in" + " <label class=label_check>"
      + "<span>" + strplaceofbirth + "</span></label>" + "</p>" + "<div class='search_result_item_descr_list clearfix'>" + " <p  class='clearfix ipName'>" + "<label>Name</label>" + " <span >" + data[i].NAME + "</span>" + "</p>"
      + " <p class=clearfix>" + "<label>Age / Height</label>" + "  <span >" + data[i].AGE + "</span><span>-</span><span >" + data[i].Height + "</span>" + "</p>" + "<p class=clearfix>" + "<label>Caste</label>"
      + "<span >" + data[i].Religion + "</span><span>-</span><span >" + data[i].Caste + "</span>" + " </p>" + " <p  class='clearfix ipMaritalstatus' >" + "<label>Marital status</label>" + "<span >" + data[i].MaritualStatus + "</span>"
      + " </p>" + "  <p  class='clearfix ipStar'>" + "<label>Star</label>" + " <span >" + data[i].Star + "</span>" + "</p>" + " <p  class='clearfix ipLocation'>" + "<label>Location</label>" + " <span >" + data[i].Location + "</span>" + "</p>"
      + "<p class=clearfix>" + " <label>Education</label>" + "<span >" + data[i].Education + "</span>" + "</p>" + "<p  class=clearfix>" + "<label>Occupation</label>" + "<span >" + data[i].Profession + "</span>" + " </p>"
      + "</div>" + "<a onclick='return ShowFullProfiles(" + JSON.stringify(data[i].ProfileID) + "," + JSON.stringify(data[i].intCusID) + "," + JSON.stringify(data[i].LogId) + ");'  class=view_profile href='javascript:void(0)'>View full Profile</a>"
      + "</div>" + "<div class=clear></div>" + "</div>" + "<div class='search_result_item_ui clearfix'>" + "<div class='search_result_item_ui_prsnl pull-left'>" + "<ul>"
      + "  <li>" + "<a href=javascript:void(0)>" + "<img   title=Mobile class=ImageButtonCss src='../images/mobile_icon.png' /></a>" + "</li>"
      + "<li>" + "<a href=javascript:void(0)>" + "<img  title=Emails class=ImageButtonCss src='../images/message_icon.png' /></a>"
      + "</li>" + " <li>" + "<a href=javascript:void(0)>" + "<img   title=horo class=ImageButtonCss src='../images/planet_icon.png' /></a>"
      + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "<div  class='listnew search_result_item_ui_exprsns pull-right'>" + " <ul>" + " <li>" + " <img src=../images/bookmark_icon.png alt=Bookmark title=BookMark>"
      + "<div >" + "<a onclick='return BookMark(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify('Bookmark') + "," + JSON.stringify(data[i].mybookmarked) + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + ");'  title=BookMark href='javascript:void(0)' style='color: Black;'>BookMark</a>" + "</div>"
      + "</li>" + " <li>" + "<img src=../images/interest_icon.png alt=Express Interest title=Express Interest>"
      + "<div >" + "<a onclick='return Expressinterest(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify('EXpressInterest') + "," + JSON.stringify(data[i].ExpressFlag) + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + ");'   title=Express Interest href=' javascript:void(0)' style='color: Black;'>Express Interest</a>" + "</div>"
      + " </li>" + "<li>" + "<img src='../images/message_icon2.png' alt=Message title=Message>" + "<div >" + "<a  title=Message  href='javascript:void(0)' onclick='return commonpopupmethod(" + JSON.stringify('Message') + "," + JSON.stringify(data[i].intCusID) + "," + JSON.stringify('sendmessage') + ");'  style='color: Black;'>Message</a>"
      + "</div>" + "</li>" + "<li>" + "<img src=../images/close_icon.png alt=Not Interest title=Ignore>" + "<div >" + "<a onclick='return BookMark(" + JSON.stringify(data[i].intCusID) + "," + JSON.stringify('Ignored') + "," + JSON.stringify(data[i].ignode) + "," + JSON.stringify('partnerDiv' + PartnerDivCount) + ");'  title=Ignore href=' javascript:void(0)' style='color: Black;'>Ignore</a>"
      + "</div>" + "</li>" + "</ul>" + "<div class=clear></div>" + "</div>" + "</div>" + "</div>");

    }
    document.getElementById("divsearchresult").style.display = 'block';
    document.getElementById("divloader").style.display = 'none';
    document.getElementById("divloadmore").style.display = 'block';
    if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
        $('.Linkdisabled').addClass("Linkdisabled").removeClass("Linkdisabledfalse");
    }
    else {
        $('.Linkdisabled').addClass("Linkdisabledfalse").removeClass("Linkdisabled");
    }
    return false;
}


function getdecryptcustid() {
    if (custidquerystrinng != null) {
        var object = { 'Encryptcustid': '' + custidquerystrinng + '' };
        var datad = CallApi("GetDecryptcustid", object);
        Decryptcustid = datad.d;
    }
    return Decryptcustid;
}

function commonobject(StartIndex, EndIndex, querystringType) {
    debugger;
    var casteinput = getvalues('#lstCaste');
    SearchRequest = {
        dt: {
            intCusID: Decryptcustid,
            strCust_id: custidquerystrinng != null ? custidquerystrinng : "",
            intGender: $("input:radio[name='gender']:checked").val(),
            FromAge: Fromage,
            ToAge: toage,
            iFromHeight: Fromheight,
            iToHeight: Toheight,
            Maritalstatus: getvalues('#lstMaritalstatus'),
            intReligionID: (QuickSearchresult == 0 && QuickSearchresult != '') ? homepagereligion : getvalues('#ddlreligionid'),
            MotherTongue: getvalues('#lstMothertongue'),
            Caste: casteinput != "" && casteinput != null ? casteinput : $('#lblCastids').text(),
            iPhysicalstatus: $("input:radio[name='physicalstatus']:checked").val(),
            Complexion: null,
            Country: (QuickSearchresult == 0 && QuickSearchresult != '') ? homepagecountry : getvalues('#lstCountrylivingin'),
            State: getvalues('#lstStatelivingin'),
            Visastatus: getvalues('#chkvisastatus'),
            Educationcategory: getvalues('#lstEducationcategory'),
            Education: getvalues('#lstEducationGroup'),
            Professiongroup: getvalues('#lstProfessionGroup'),
            iFromSal: $('#txtFromSal').val(),
            iToSal: $('#txtToSal').val(),
            iManglinkKujaDosham: $("input:radio[name='rbtnkujadosam']:checked").val() != "" ? $("input:radio[name='rbtnkujadosam']:checked").val() : null,
            iStarLanguage: $("input:radio[name='rbtnstarlang']:checked").val(),
            Stars: getvalues('#lstStar'),
            iDiet: $("input:radio[name='rbtDiet']:checked").val() != "" ? $("input:radio[name='rbtDiet']:checked").val() : null,
            intPhotoCount: $("#checkwithphoto").attr("checked") ? 1 : null,
            StartIndex: StartIndex,
            EndIndex: EndIndex,
            i_Registrationdays: ($("input:radio[name='Regdays']:checked").val()) != 0 && ($("input:radio[name='Regdays']:checked").val()) != "" ? $("input:radio[name='Regdays']:checked").val() : null,
            iAnnualincome: getvalues('#ddlAnnualincome') > 0 ? getvalues('#ddlAnnualincome') : null,
            flagforurl: querystringType,
            SavedSearch: SavedSearchInsert != null && SavedSearchInsert != '' ? SavedSearchInsert : Savessearchname,
            SearchPageID: PageID,
            PageName: PageName,
            SavedSearchresultid: SearchResult_ID,
            Searchresult: Searchresult
        }
    }
}
function savedsearchcallback(data, querystring, StartIndex, EndIndex) {
    if (Refinesubmitflag != "Refine") {
        $('#ddlFromAge').multiselect('select', [data.d.Ageto]);
        $('#ddlToAge').multiselect('select', [data.d.Agefrom]);
        $('#ddlFromheight').multiselect('select', [data.d.Heightto]);
        $('#ddlToheight').multiselect('select', [data.d.Heightfrom]);
        $('#lstMaritalstatus').multiselect('select', ((data.d.Maritalstatus) != "") ? SplitstringintoArray(data.d.Maritalstatus) : null);
        $('#ddlreligionid').multiselect('select', ((data.d.Religion) != "") ? SplitstringintoArray(data.d.Religion) : null);
        $('#lstMothertongue').multiselect('select', ((data.d.MotherTongue) != "") ? SplitstringintoArray(data.d.MotherTongue) : null);
        $('#lstCaste').multiselect('select', ((data.d.Caste) != "") ? SplitstringintoArray(data.d.Caste) : null);
        $('#lstCountrylivingin').multiselect('select', ((data.d.Country) != "") ? SplitstringintoArray(data.d.Country) : null);
        $('#lstStar').multiselect('select', (((data.d.Stars) != "") && ((data.d.Stars) != null)) ? SplitstringintoArray(data.d.Stars) : null);
        $('#lstEducationcategory').multiselect('select', (((data.d.Educationcategory) != "") && ((data.d.Educationcategory) != null)) ? SplitstringintoArray(data.d.Educationcategory) : null);
        SelectvalueforRadiobuttons("gender", data.d.intGender);
        SelectvalueforRadiobuttons("physicalstatus", data.d.PhysicalStatusstring);
        $('#lblCastidsdisplay').html(data.d.CasteText);
        $('#lblCastids').html(data.d.Caste);
        binddependencyFormissingfields("State", data.d.Country, ".lstStatelivingin", "");
        binddependencyFormissingfields("EducationGroup", data.d.Educationcategory, ".lstEducationGroup", "");
        document.getElementById("editpartnerpref").style.display = 'block';
    }
    Bindingrefinetocontrols();
    data = data != undefined ? data.d : null;
    SearchRequest = {
        dt: {
            intCusID: data.intCusID,
            strCust_id: custidquerystrinng != null ? custidquerystrinng : "",
            intGender: data.intGender,
            FromAge: Refinefromage,
            ToAge: Refinetoagem,
            iFromHeight: RefineHeight,
            iToHeight: RefineToheight,
            Maritalstatus: returnnullvalue(data.Maritalstatus),
            intReligionID: returnnullvalue(data.Religion),
            MotherTongue: returnnullvalue(data.MotherTongue),
            Caste: returnnullvalue(data.Caste),
            iPhysicalstatus: (data.PhysicalStatus != null && data.PhysicalStatus != "") ? data.PhysicalStatus : $("input:radio[name='physicalstatus']:checked").val(),
            Complexion: returnnullvalue(data.Complexion),
            Country: returnnullvalue(data.Country),
            State: returnnullvalue(data.State),
            Visastatus: returnnullvalue(data.Visastatus),
            Educationcategory: returnnullvalue(data.Educationcategory),
            Education: returnnullvalue(data.Education),
            Professiongroup: returnnullvalue(data.Professiongroup),
            iFromSal: (data.iFromSal) > 0 ? data.iFromSal : null,
            iToSal: (data.iToSal) > 0 ? data.iToSal : null,
            iManglinkKujaDosham: null,
            iStarLanguage: data.Stars,
            Stars: returnnullvalue(data.Stars),
            iDiet: (data.iDiet) > 0 ? data.iDiet : null,
            intPhotoCount: $("#checkwithphoto").attr("checked") ? 1 : null,
            StartIndex: StartIndex,
            EndIndex: EndIndex,
            i_Registrationdays: data.i_Registrationdays,
            iAnnualincome: (data.iAnnualincome) > 0 ? (data.iAnnualincome) : null,
            flagforurl: querystring,
            SavedSearch: SavedSearchInsert != null && SavedSearchInsert != '' ? SavedSearchInsert : Savessearchname,
            SavedSearchresultid: SearchResult_ID,
            SearchPageID: SearchPageID,
            Searchresult: Searchresult
        }

    }
}
function submitmethod(StartIndex, EndIndex, querystring) {
    Bindingrefinetocontrols();
    getdecryptcustid();
    if (SearchResult_ID != undefined && SearchResult_ID != null && SearchResult_ID != "" && Upadateandsavedsearch != "Update") {
        savedsearchcallback(savessearchdata(), querystring, StartIndex, EndIndex);
    }
    else {
        commonobject(StartIndex, EndIndex, querystring);
    }

    $('#amount').val("");
    $('#amountto').val("");
    $('#amount2').html("");
    $('#amount2to').html("");
    $('#refinegender').html($("input:radio[name='gender']:checked").val() == 2 ? "Bride" : "Groom");
    $('#refineAge').html((getvalues('#ddlFromAge') > 0 ? getvaluestext('#ddlFromAge') : "") + "-" + (getvalues('#ddlToAge') > 0 ? getvaluestext('#ddlToAge') : ""));
    $('#refinecaste').html(getvaluestext('#lstCaste') != "" ? getvaluestext('#lstCaste') : $('#lblCastidsdisplay').html() != "" ? $('#lblCastidsdisplay').html() : "Any");
    $('#refineeducation').html(getvaluestext('#lstEducationcategory') != "" ? getvaluestext('#lstEducationcategory') : "Any");
    $('#spanrefineheight').html((getvalues('#ddlFromheight') > 0 ? getvaluestext('#ddlFromheight') : "") + "-" + (getvalues('#ddlToheight') > 0 ? getvaluestext('#ddlToheight') : ""));
    $('#amount').val(getvalues('#ddlFromAge'));
    $('#amountto').val(getvalues('#ddlToAge'));
    var fromheightsplit = getvaluestext('#ddlFromheight').split('-');
    var toheightsplit = getvaluestext('#ddlToheight').split('-');
    $('#amount2').html(getvalues('#ddlFromheight'));
    $('#amount2to').html(getvalues('#ddlToheight'));
    $('#heightfrom').val(fromheightsplit[0]);
    $('#heightto').val(toheightsplit[0]);
    $("#slider_range2 .ui-slider-range").attr('style', 'left: ' + ((parseFloat(getvalues('#ddlFromheight')) / 40) * 100) + '%; width: ' + (((parseFloat(getvalues('#ddlToheight')) - parseFloat(getvalues('#ddlFromheight'))) / 40) * 100) + '%;');
    $("#slider_range2").find('span').attr('style', 'left: ' + ((parseFloat(getvalues('#ddlFromheight')) / 40) * 100) + '%;');
    $("#slider_range2").find('span').next().attr('style', 'left: ' + ((parseFloat(getvalues('#ddlToheight')) / 40) * 100) + '%;');
    return SearchRequest;
}

function refinesubmit() {
    Refinesubmitflag = "Refine";
    document.getElementById('Norows').style.display = 'none';
    document.getElementById('divloadmore').style.display = 'none';
    document.getElementById("divsearchresult").style.display = 'block';
    document.getElementById("slideShowCarousel").style.display = 'none';
    document.getElementById("Refsearchllll").style.display = 'block';
    $('.search_result_items_main').attr('style', '')
    Scrollflag = 1;
    $('#ddlFromAge').multiselect('select', $('#amount').val());
    $('#ddlToAge').multiselect('select', $('#amountto').val());
    $('#ddlFromheight').multiselect('select', $('#amount2').html());
    $('#ddlToheight').multiselect('select', $('#amount2to').html());
    Bindingrefinetocontrols();
    $(".Maindiv").html("");
    $('#refinetotalrecords').html('');
    startindex = 1;
    endindex = 104;
    flag = 8;
    flagforloadmaore = 8;
    flaghundred = 0;
    dataload = [];
    scrolldivfunction(startindex, endindex);
    return false;
}
function Bindingrefinetocontrols() {
    // (QuickSearchresult == 0 && QuickSearchresult != '') ? Fromage : 
    //if (QuickSearchresult == 0 && QuickSearchresult != '') {
    //    alert(Fromage);
    //    $('#ddlFromAge').multiselect('select', [18]);
    //    $('#ddlToAge').multiselect('select', [20]);
    //}
    Refinefromage = Fromage = (QuickSearchresult == 0 && QuickSearchresult != '') ? Fromage : getvalues('#ddlFromAge');
    Refinetoagem = toage = (QuickSearchresult == 0 && QuickSearchresult != '') ? toage : getvalues('#ddlToAge');
    RefineHeight = Fromheight = getvalues('#ddlFromheight');
    RefineToheight = Toheight = getvalues('#ddlToheight');
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
    var popupstratindex, popupendindex, data;
    $('#slideShowCarousel').find('.left').show();
    $('#slideShowCarousel').find('.right').show();
    SavedSearchInsert = "";
    Upadateandsavedsearch = "";
    if (PageID == "1") {
        ProfileIdsubmitmethod(startindex, endindex, querystringType);
        data = CallApi("Profileidsubmit", SearchRequest);
    }
    else {
        if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
            submitmethod(curPageVal + 1, curPageVal + 10, querystringType);
        }
        else {
            submitmethod(curPageVal + 1, curPageVal + 8, querystringType);
        }
        data = CallApi("SearchPageSubmit", SearchRequest);
    }
    document.getElementById("newsearchresultdiv").style.display = 'none';
    if (data.d.length > 0) {
        for (var i = 0; i < data.d.length; i++) {
            //var strimageurl = (data.d[i].Photofullpath).replace("~/", "../../");
            var strimageurl = (data.d[i].Photo).replace("~/", "../../");
            var slide, stractiveClass;
            var totalslides = $('#slideShowCarousel').find('.item').length;
            $("#spanloadtotalrecords").html((data.d[i].Totalrows));
            $("#refinetotalrecords").html((data.d[i].Totalrows));
            $("#Numberofprofiles").html("-" + (data.d[i].Totalrows));
            stractiveClass = totalslides == 0 ? 'item active' : 'item';
            //popup

            var StrUrlApplication = data.d[i].Photo, photoclass, photopassword, linkdisabled, Paggingdisabled, lnkphototext;
            lnkphototext = "";
            photopassword = data.d[i].PhotoPassword;

            ///
            if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
                if (data.d[0].PhotoClass.toLowerCase().indexOf("noimage") != -1) {
                    photoclass = "cssMaskdiv clearfix Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                }
                else if (data.d[0].PhotoClass.toLowerCase().indexOf("_rev") != -1) {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                }
                else if (StrUrlApplication.toLowerCase().indexOf("_rev") != -1) {
                    photoclass = "cssMaskdivrev clearfix Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                    lnkphototext = "";
                }
                else if (photopassword == "Admin@123") {
                    if (data.d[0].PhotoClass == "cssMaskdiv clearfix") {
                        photoclass = "cssMaskdiv clearfix Linkdisabled";
                        Paggingdisabled = "Linkdisabled";
                    }
                    else if (data.d[0].PhotoClass == "cssMaskdivrev clearfix") {
                        photoclass = "cssMaskdivrev clearfix Linkdisabled";
                        Paggingdisabled = "Linkdisabled";
                    }
                    else {
                        lnkphototext = "Request Password";
                        strimageurl = "../../Customer_new/CutomerImages/List%20page/Password-Protected.png";
                        photoclass = "Linkdisabled";
                        Paggingdisabled = "Linkdisabled";
                    }
                }
                else if (strimageurl.indexOf("noimage") != -1) {
                    linkdisabled = "Linkdisabled";
                    Paggingdisabled = "Linkdisabled";
                    lnkphototext = "Photo Request";
                    photoclass = "Linkdisabled";
                }

                else {
                    photoclass = "";
                    linkdisabled = "";
                    Paggingdisabled = "";
                    lnkphototext = "";
                }
                if ((data.d[i].PhotoCount) == 0) {
                    photoclass = "Linkdisabled";
                    lnkphototext = "Photo Request";
                }
            }
            $("#maincarousal").append("<div class='" + stractiveClass + " clearfix'>"
                            + "<div class='container'>"
                                 + "<div id='galleryCarousel_" + i + "' class='slide span6'>"
                                + "<div class='" + photoclass + "'><input name='imagepath' style='height: 300px;width: 300px !important;' class='" + linkdisabled + "' src= " + strimageurl + "  type='image' onclick='return getimgPathforcustomersitedynamic(" + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify(data.d[i].PhotoCount) + ")'></div>"

                              + "<div><a  href='javascript:void(0)' style='font-weight: bold; text-decoration: underline;' onclick='return photoRequestMethod(" + JSON.stringify(custidquerystrinng) + "," + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify(data.d[i].PhotoPassword) + ")'>" + lnkphototext + "</a>"
                              + "</div>"
                               + " </div>"
                               + " <div class='span6'>"
                                  + "  <table>"
                                      + "  <caption>" + data.d[i].NAME + "</caption>"
                                       + " <tr>"
                                          + "  <th>Profile ID</th>"
                                          + "  <td> " + data.d[i].ProfileID + "</td>"
                                       + " </tr>"
                                       + " <tr>"
                                          + "  <th>Age / Height</th>"
                                          + "  <td>" + data.d[i].AGE + "-" + data.d[i].Height + "</td>"
                                      + "  </tr>"
                                      + "  <tr>"
                                      + "      <th>Caste</th>"
                                           + " <td>" + data.d[i].Religion + "-" + data.d[i].Caste + "</td>"
                                        + "</tr>"
                                       + " <tr>"
                                         + "   <th>Marital Status</th>"
                                         + "   <td>" + data.d[i].MaritualStatus + "</td>"
                                       + " </tr>"
                                      + "  <tr>"
                                           + " <th>Star</th>"
                                          + "  <td> " + data.d[i].Star + "</td>"
                                       + " </tr>"
                                      + "  <tr>"
                                           + " <th>Location</th>"
                                          + "  <td>" + data.d[i].Location + "</td>"
                                     + "   </tr>"
                                      + "  <tr>"
                                         + "   <th>Education</th>"
                                          + "  <td>" + data.d[i].Education + "</td>"
                                      + "  </tr>"
                                       + " <tr>"
                                         + "   <th>Occupation</th>"
                                          + "  <td>" + data.d[i].Profession + "</td>"
                                       + " </tr>"
                                   + " </table>"
                               + " </div>"
                            + "</div>"
                           + " <div class='slideShowCarousel_foot clearfix'>"
                               + " <div class='container clearfix'>"
                                  + "  <ul class='slideShowCarousel_ui clearfix'>"
                                       + " <li><a href='javascript:void(0)' onclick='return BookMark(" + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify('Bookmark') + "," + JSON.stringify(data.d[i].mybookmarked) + ");'  title=BookMark></a></li>"
                                       + " <li><a href='javascript:void(0)' onclick='return Expressinterest(" + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify('EXpressInterest') + "," + JSON.stringify(data.d[i].ExpressFlag) + ");' title=Express Interest></a></li>"
                                       + " <li><a title=Message  href='javascript:void(0)' onclick='return commonpopupmethod(" + JSON.stringify('Message') + "," + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify('sendmessage') + ");' ></a></li>"
                                       + " <li><a href='javascript:void(0)' onclick='return BookMark(" + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify('Ignored') + "," + JSON.stringify(data.d[i].ignode) + ");'  title=Ignore></a></li>"
                                    + "</ul>"
                                    + "<ul class='slideShowCarousel_ui2 clearfix'>"
                                       + " <li><a href='javascript:void(0)' onclick='return Modifursearchslide();'>Modify search</a></li>"
                                      + "  <li><a href='javascript:void(0)' onclick='return ShowFullProfiles(" + JSON.stringify(data.d[i].ProfileID) + "," + JSON.stringify(data.d[i].intCusID) + "," + JSON.stringify(data.d[i].LogId) + ");'>view complete profile</a></li>"
                                   + " </ul>"
                               + " </div>"
                            + "</div>"
                       + " </div>");

        }

        pauseifPlayVisible("slideShowCarousel", "playButton", "pauseButton");

        if ($("#slideShowCarousel .carousel-inner .item:first").hasClass("active")) {
            $('#slideShowCarousel').find('.left').show();
            $('#slideShowCarousel').find('.right').show();
        }
    }
    return false;
}
//Slide Popup

function closepopup() {
    $('#horoscopepopup').modal('hide');
    return false;
}
function Slideshowpage() {
    $('#maincarousal').carousel('pause');
    Scrollflag = "";
    $("#slideShowCarousel .carousel-inner").html("");
    SlideRefresh("slideShowCarousel", "lblcurSlide", "lnkLastSlide")
    pageloadSlide();
    checkitemnew("slideShowCarousel");
    pageload("slideShowCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
    $('#slideShowCarousel').carousel('pause');
    document.getElementById("slideShowCarousel").style.display = 'block';
    document.getElementById("Refsearchllll").style.display = 'none';
    document.getElementById("divviewdprofiles").style.display = 'block';
    document.getElementById("imageslideshow").style.display = 'none';
    document.getElementById("playButton").style.display = 'block';
    $('#slideShow').modal({ backdrop: 'static' });
    return false;
}
function gotoSlide(e) {
    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#slideShowCarousel').carousel(parseInt($(e).val()) - 1);
    }
    else {
        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}

function pageloadSlide() {
    var currentslide = 1, totalItems = $('#slideShowCarousel').find('.item').length;
    if (totalItems == 0) {
        popupsubmitmethod(totalItems, "Fullphoto");
        $('.num').html('Profile ' + '' + 1);
        $('#slideShowCarousel').carousel('pause');
        return false;
    }
    $('#slideShowCarousel').bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#slideShowCarousel').find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#slideShowCarousel').find('.item').length;
        var currentIndex1 = $('#slideShowCarousel').find('div.active').index() + 1;
        if ($('#playButton').is(":visible")) {
            $('#slideShowCarousel').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
        }
        $('#slideShowCarousel').find('div.active').index();
        $("#lnkLastSlide").text(currentIndex1);
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {
                if (LoginExistance()) {
                    popupsubmitmethod(totalItems1, "Fullphoto");
                }
            }

        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);

    });
    //play and pause function on click event
    $('#slideShowCarousel').carousel({
        interval: 2000,
        pause: "false"
    });
    //method to move slide on left or right arrow press
    $(document).bind('keyup', function (e) {
        var totalItems = $('#slideShowCarousel').find('.item').length;
        var currentIndex = $('#slideShowCarousel').find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#slideShowCarousel').carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#slideShowCarousel').carousel('prev');
        }

    });
    //hide slide arrows for  first and last slide slides  
    var checkitem = function () {
        checkitemnew("slideShowCarousel");
    };
    $("#slideShowCarousel").on("slid.bs.carousel", "", checkitem);

}

function PageredirectstoAdvance(typeofpage) {
    document.getElementById("divcontrols").style.display = 'block';
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
function ShowFullProfiles(ProfileID, ToCustID, logid) {
    if (LoginExistance()) {
        if (custidquerystrinng != null && custidquerystrinng != "" && custidquerystrinng != undefined) {
            ServiceActions(getdecryptcustid(), ToCustID, undefined, 'ViewFullProfile', undefined, undefined);
            if (logid != null && logid != undefined) {
                window.open("CustomerfullprofileNew.aspx?ProfileID=" + ProfileID + "&ToCustID=" + ToCustID + "&FromCustId=" + custidquerystrinng + "&LogID=" + (logid) + "&Paid=" + paidtype, "_blank");
            }
            else {
                window.open("CustomerfullprofileNew.aspx?ProfileID=" + ProfileID + "&ToCustID=" + ToCustID + "&FromCustId=" + custidquerystrinng + "&Paid=" + paidtype, "_blank");
            }
        }
    }
    return false;

}
function saveandsearch() {
    document.getElementById('Norows').style.display = 'none';
    Scrollflag = 1;

    Refinesubmitflag = "";
    if ($('#btnSavesearch').html().indexOf("Update") == -1) {
        commonpopupmethod("SaveandSearch", custidquerystrinng);
    }
    else {
        Upadateandsavedsearch = "Update";
        SubmitSaveSearchData();
    }
    return false;
}
function SaveSearchData() {
    SavedSearchInsert = $('#txtSavedSearch').val();
    if (SavedSearchInsert != "") {
        $('#commonpopup').modal('hide');
        SubmitSaveSearchData();
    }
    else {
        DynamicTimeAlert('Please Enter saved search Name', 'alert alert-danger', '3000');
    }

    return false;
}
function SubmitSaveSearchData() {
    document.getElementById("divviewdprofiles").style.display = 'none';
    document.getElementById('Norows').style.display = 'none';
    document.getElementById("divloadmore").style.display = 'none';
    document.getElementById("imageslideshow").style.display = 'block';
    document.getElementById("playButton").style.display = 'none';
    document.getElementById("pauseButton").style.display = 'none';
    startindex = 1;
    endindex = 104;
    flagforloadmaore = 8;
    flaghundred = 0;
    dataload = [];
    flag = 8;
    $('#divcontrols').toggleClass('hidden show');
    $('html, body').animate({ scrollTop: 0 }, 800);
    document.getElementById("divsearchresult").style.display = 'block';
    document.getElementById("slideShowCarousel").style.display = 'none';
    document.getElementById("Refsearchllll").style.display = 'block';
    document.getElementById("divloader").style.display = 'block';
    $(".Maindiv").html("");
    $('#refinetotalrecords').html('');
    scrolldivfunction(startindex, endindex);
    document.getElementById("divloadmore").style.display = 'block';
    return false;
}
$(function () {
    //allows only numbers
    $(".Number").on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });
    //allows only alphabets
    $('.OnlyText').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^A-Za-z]/g, ''))
    });
});
function returnnullvalue(data) {
    var returndata;
    if (data != "" && data != undefined) {
        returndata = data;
    }
    else {
        returndata = null;
    }
    return returndata;
}
function getimgPathforcustomersitedynamic(intCusID, ProfileID, PhotoCount) {
    if (LoginExistance()) {
        if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
            getimgPathforcustomersite(intCusID, ProfileID, PhotoCount);
        }
        else {
            $('.disabledclasspopup').addClass("Linkdisabled");
        }
    }
    return false;
}
function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    currentslide = 1;
    var totalItems = $('#' + carouselID).find('.item').length;
    if (totalItems == 0) {
        popupsubmitmethod(currentslide, "Fullphoto");
        checkitemnew(carouselID);
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
    }

    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
    playAndPause(carouselID, playButtonID, pauseButtonID);
    ArrowMove(carouselID);
    checkitemGlobal(carouselID);
}
function pauseifPlayVisible(carouselID, playButtonID, pauseButtonID) {
    if ($('#' + playButtonID).is(":visible")) {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    }
}
function slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    $('#' + carouselID).bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#' + carouselID).find('.item').length;
        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
        $("#lnkLastSlide").text(currentIndex1);
        pauseifPlayVisible(carouselID, playButtonID, pauseButtonID);
        $('#' + carouselID).find('div.active').index()
        if (currentslide < currentIndex1) {
            if (custidquerystrinng != undefined && custidquerystrinng != null && custidquerystrinng != "") {
                if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {
                    if (LoginExistance()) {
                        popupsubmitmethod(totalItems1, "Fullphoto");
                    }
                }
            }
            else {
                if (parseInt(totalItems1) - parseInt(currentIndex1) == 0) {
                    LoginExistance();
                }
            }
        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);
        $('#' + curProfileID).text(currentIndex1);
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
function checkitemGlobal(carouselID) {
    var checkitem = function () {
        checkitemnew(carouselID);
    };
    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
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
        return false;
    });
    $('#' + pauseButtonID).click(function () {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
        return false;
    });
}
function sendmessages(tocustid, methodname) {
    if (LoginExistance()) {
        ServiceActions(getdecryptcustid(), tocustid, undefined, 'SendMessage', undefined, undefined);
        $('#commonpopup').modal('hide');
    }
    return false;
}
