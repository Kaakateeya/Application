'use strict'
var $table = $('#GridTablekeyword'), $append = $('.append'), flag = 10, rows, pagesizec = 10, data, falsepageination = false;
var object = {
    Keyworddlikesrch: {
    }
};
var Searchfields = [
    //{ Text: "CApplicationStatus", value: "CApplicationStatus" },
    { Text: "CAboutMe", value: "CAboutMe" },
    { Text: "CAboutFamily", value: "CAboutFamily" },
    //{ Text: "CApartmentName", value: "CApartmentName" },
   // { Text: "CAreaName", value: "CAreaName" },
    { Text: "CBornCitigen", value: "CBornCitigen" },
    { Text: "CBodyType", value: "CBodyType" },
    { Text: "CBranch", value: "CBranch" },
    { Text: "CColor", value: "CColor" },
    //{ Text: "CCountry", value: "CCountry" },
   // { Text: "CSate", value: "CSate" },
    //{ Text: "CDistrict", value: "CDistrict" },
    //{ Text: "CCity", value: "CCity" },
    { Text: "CCountryOfBirth", value: "CCountryOfBirth" },
    { Text: "CStateOfBirth", value: "CStateOfBirth" },
    { Text: "CDistrictOfBirth", value: "CDistrictOfBirth" },

   { Text: "CCountry Working", value: "countryworking" },
   { Text: "CState Working", value: "stateworking" },
   { Text: "CDistrict Working", value: "districtworking" },
   { Text: "CCity Working", value: "cityworking" },
   { Text: "CCityOfBirth", value: "CCityOfBirth" },


    { Text: "CDOB", value: "CDOB" },
    { Text: "CDrink", value: "CDrink" },
    { Text: "CDiet", value: "CDiet" },
    //{ Text: "CDomicile", value: "CDomicile" },
    { Text: "CDateofReg", value: "CDateofReg" },

  { Text: "CEducation all", value: "CEducationAll" },
  { Text: "CEdu category", value: "CEducationCategory" },
  { Text: "CEducation", value: "CEduGroup" },
  { Text: "CEdu Specialization", value: "CEduSplecialization" },
  { Text: "CUniversity", value: "CEduUniversity" },
  { Text: "CCollege", value: "CEduCollege" },
  { Text: "CEdu country", value: "CEduCountry" },
  { Text: "CEdu state", value: "CEduState" },
  { Text: "CEdu district", value: "CEduDistrict" },
  { Text: "CEdu city", value: "CEduCity" },
  { Text: "CEdu merits", value: "CEduMerits" },
  { Text: "CEdupass of year", value: "CEduPass_Year" },
  { Text: "CEmployeed In", value: "EmployeedIn" },
  { Text: "CEducationGrade", value: "CEducationGrade" },
  { Text: "CFamilyGrade", value: "CFamilyGrade" },
  { Text: "Name", value: "CFName" },
  { Text: "SurName", value: "CLName" },




{ Text: "CProfession all", value: "CProfAll" },
{ Text: "CProfessional Group", value: "Professionalgroup" },
{ Text: "CProfession", value: "Profession" },
{ Text: "CProfession Details", value: "professionDetails" },
{ Text: "CProfessionStatus", value: "CProfessionStatus" },
{ Text: "CCompany Name", value: "Companyname" },
{ Text: "CMonthly Salary", value: "monthlysalary" },
{ Text: "CWorking From Date", value: "workingfromdate" },

{ Text: "CpropertyType", value: "CpropertyType" },
{ Text: "CPropertyValue", value: "CPropertyValue" },
{ Text: "CPropertyDescription", value: "CPropertyDescription" },

{ Text: "CPhysicalStatus", value: "CPhysicalStatus" },
{ Text: "CParentCaste", value: "CParentCaste" },
{ Text: "CPropertyGrade", value: "CPropertyGrade" },
{ Text: "CPhotoGrade", value: "CPhotoGrade" },
//{ Text: "CPhotos", value: "CPhotos" },
{ Text: "CPaadam", value: "CPaadam" },
{ Text: "CRelision", value: "CRelision" },
//{ Text: "CRegionalOfBranch", value: "CRegionalOfBranch" },
{ Text: "CRegStatus", value: "CRegStatus" },

{ Text: "CSmoke", value: "CSmoke" },
{ Text: "CStarLanguage", value: "CStarLanguage" },
{ Text: "CStar", value: "CStar" },
{ Text: "CRaasi", value: "CRaasi" },
{ Text: "CLagnam", value: "CLagnam" },
{ Text: "CGothram", value: "CGothram" },
{ Text: "CMaternalGothram", value: "CMaternalGothram" },
{ Text: "CMotherTongue", value: "CMotherTongue" },
{ Text: "CKujadosham", value: "CKujadosham" },
{ Text: "CWebsiteStatus", value: "CWebsiteStatus" },

//{ Text: "CHouseflatNumner", value: "CHouseflatNumner" },

//{ Text: "CStreetName", value: "CStreetName" },

//{ Text: "CLandmark", value: "CLandmark" },
//{ Text: "CZippin", value: "CZippin" },

//father
{ Text: "Father All", value: "FAllFields" },
{ Text: "FName", value: "FFirstName" },
 { Text: "FEducation", value: "FEducationDetails" },
{ Text: "FProfession", value: "FProfessionDetails" },
{ Text: "Fcompany Name", value: "FCompanyId" },
{ Text: "Fjob Location", value: "FJobLocation" },
{ Text: "FMobile/LandLine", value: "FNumber" },
{ Text: "FEmail", value: "Femail" },
{ Text: "FFName", value: "FFatherName" },
{ Text: "FFmobile/Landline", value: "FFatherContactNumber" },
{ Text: "FFstate", value: "FFStateName" },
{ Text: "FFDistrict", value: "FFDistrictName" },
{ Text: "FFNative Place", value: "FFNativePlace" },
//mother
{ Text: "Mother All", value: "MAllFields" },
{ Text: "Mother Name", value: "MFirstName" },
{ Text: "M LastName", value: "MLastName" },
{ Text: "MEducation", value: "MEducationDetails" },
{ Text: "Mprofession", value: "MProfessionDetails" },
{ Text: "Mcompany Name", value: "MCompanyId" },
{ Text: "MJob location", value: "MJobLocation" },
{ Text: "MMobile/Land Line", value: "MNumber" },
{ Text: "MEmail", value: "Memail" },
{ Text: "MFName", value: "MFatherFirstName" },
{ Text: "MFSurName", value: "MFatherLastName" },
{ Text: "MFmobile/Land", value: "MFatherContactNumber" },
{ Text: "MFState", value: "MFStateName" },
{ Text: "MFDistrict", value: "MFDistrictName" },
{ Text: "MFNative Place", value: "MFNativePlace" },
//Brother
{ Text: "Brother All", value: "Br_AllFields" },
{ Text: "CBname", value: "Br_Name" },
{ Text: "CBeducation", value: "Br_Education" },
{ Text: "CBprofession", value: "Br_Profession" },
{ Text: "CBcompany", value: "Br_CompanyNAME" },
{ Text: "CBjoblocation", value: "Br_Joblocation" },
{ Text: "CBMobile/land", value: "BrContactNo" },
{ Text: "CBemail", value: "Br_Email" },

{ Text: "CBWname", value: "Brw_Name" },
{ Text: "CBWeducation", value: "Brw_Education" },
{ Text: "CBWprofession", value: "Brw_Profession" },
{ Text: "CBWcompany Name", value: "Brw_CompanyNAME" },
{ Text: "CBWjob location", value: "Brw_Joblocation" },

{ Text: "CBWMobile/land", value: "BrwContactNo" },
{ Text: "CBWemail", value: "Brw_Email" },
{ Text: "CBWFSurname", value: "Brwf_Surname" },

{ Text: "CBWFName", value: "Brwf_Name" },
{ Text: "CBWFState", value: "BrwfStateName" },
{ Text: "CBWFdistrict", value: "BrwfDistrictName" },
{ Text: "CBWFNative Place", value: "BrwfCity" },

//sister
{ Text: "Sister All", value: "Sr_AllFields" },
{ Text: "CSName", value: "Sr_Name" },
{ Text: "CSeducation", value: "Sr_Education" },
{ Text: "CSprofession", value: "Sr_Profession" },
{ Text: "CScompany", value: "Sr_CompanyNAME" },
{ Text: "CSjoblocation", value: "Sr_Joblocation" },
{ Text: "CSMobile/Land", value: "SrContactNo" },
{ Text: "CSemail", value: "Sr_Email" },
{ Text: "CSHName", value: "Srh_Name" },
{ Text: "CSHeducation", value: "Srh_Education" },
{ Text: "CSHprofession", value: "Srh_Profession" },

{ Text: "CSHcompany Name", value: "Srh_CompanyNAME" },
{ Text: "CSHjob location", value: "Srh_Joblocation" },
{ Text: "CSHMobile/land", value: "SrhContactNo" },


{ Text: "CSHemail", value: "Srh_Email" },
{ Text: "CSHFSurname", value: "Srhf_Surname" },
{ Text: "CSHFName", value: "Srhf_Name" },
{ Text: "CSHFstate", value: "SrhfStateName" },
{ Text: "CSHFdistrict", value: "SrhfDistrictName" },

{ Text: "CSHFNative Place", value: "SrhfCity" },
//father brother

{ Text: "Father Brother All", value: "FB_AllFields" },
{ Text: "FB(E/Y)", value: "FB_ElderYounger" },
{ Text: "FBName", value: "FB_Name" },
{ Text: "FBEducation", value: "FB_Education" },
{ Text: "FBProfession", value: "FB_Profession" },
{ Text: "FBMobile/land", value: "FB_Contactnumber" },
{ Text: "FBEmail", value: "FB_Email" },
{ Text: "FBCurrent Location", value: "FB_professionlocation" },

//
//father sister

{ Text: "Father Sister All", value: "FS_AllFields" },
{ Text: "FSName", value: "FS_Name" },
{ Text: "FSHName", value: "FSH_Name" },
{ Text: "FSHSur Name", value: "FSH_Surname" },
{ Text: "FSHEducation", value: "FSH_Education" },
{ Text: "FSHProfession", value: "FSH_Profession" },
{ Text: "FSHMobile/Land", value: "FSHContactNo" },
{ Text: "FSHEmail", value: "FSH_Email" },
{ Text: "FSHCurrent Location", value: "FSH_ProfessionLocation" },
{ Text: "FSHstate", value: "FSHStateName" },
{ Text: "FSHDistrict", value: "FSHDistrictName" },
{ Text: "FSHNative Place", value: "FSHCityName" },

//Mother Brother 

{ Text: "Mother Brother All", value: "MB_AllFields" },
{ Text: "MBName", value: "MB_Name" },
{ Text: "MBEducation", value: "MB_Education" },
{ Text: "MBProfession", value: "MB_Profession" },
{ Text: "MBMobile/land", value: "MB_ContactNo" },
{ Text: "MBEmail", value: "MB_Email" },
{ Text: "MBCurrent Location", value: "MB_professionlocation" },

///Mothrer sister

{ Text: "Mother Sister All", value: "MS_AllFields" },
{ Text: "MSName", value: "MS_Name" },
{ Text: "MSHName", value: "MSH_Name" },
{ Text: "MSHSur Name", value: "MSH_Surname" },
{ Text: "MSHEducation", value: "MSH_Education" },
{ Text: "MSHProfession", value: "MSH_Profession" },
{ Text: "MSHMobile/Land", value: "MSH_ContactNo" },
{ Text: "MSHEmail", value: "MSH_Email" },
{ Text: "MSHCurrent Location", value: "MSH_ProfessionLocation" },
{ Text: "MSHstate", value: "MSHStateName" },
{ Text: "MSHDistrict", value: "MSHDistrictName" },
{ Text: "MSHNative Place", value: "MSHCityName" },
{ Text: "SFName", value: "SFName" },
{ Text: "SLName", value: "SLName" },
{ Text: "Spouse Education", value: "SpouseEducation" },
{ Text: "Spouse Profession", value: " SpouseProfession" },
{ Text: "Spouse Married On", value: "SpouseMarriedOn" },
{ Text: "Spouse Separated Date", value: "SpouseSeparatedDate" },
{ Text: "Spouse Legally Divorced", value: "SpouseLegallyDivorced" },
{ Text: "Souse FatherName", value: "SouseFatherName" },
{ Text: "Spouse FatherSurname", value: "SpouseFatherSurname" },
{ Text: "Spouse about previous marriage", value: "Spouseaboutpreviousmarriage" },
{ Text: "Spouse familyPlaning", value: "SpousefamilyPlaning" },
{ Text: "Sspouse NoOfChildrens", value: "SspouseNoOfChildrens" },
{ Text: "RefName", value: "RefName" },
{ Text: "RefSurname", value: "RefSurname" },
{ Text: "Refprofession", value: "Refprofession" },
{ Text: "Refcountry", value: "Refcountry" },
{ Text: "RefState", value: "RefState" },
{ Text: "RefDistrict", value: "RefDistrict" },
{ Text: "RefNativePlace", value: "RefNativePlace" },
{ Text: "RefPresentLocation", value: "RefPresentLocation" },
{ Text: "RefMobile", value: "RefMobile" },
{ Text: "Refland Line", value: "ReflandLine" },
{ Text: "RefEmail", value: "RefEmail" },
{ Text: "RefNarration", value: "RefNarration" },
{ Text: "Pr_Age_fr", value: "Pr_Age_fr" },
{ Text: "Pr_Age_to", value: "Pr_Age_to" },
{ Text: "Pr_Hight_fr", value: "Pr_Hight_fr" },
{ Text: "Pr_Hight_to", value: "Pr_Hight_to" },
{ Text: "Pr_MotherTongue", value: "Pr_MotherTongue" },
{ Text: "Pr_Religion", value: "Pr_Religion" },
{ Text: "Pr_Caste", value: "Pr_Caste" },
{ Text: "Pr_SubCaste", value: "Pr_SubCaste" },
{ Text: "Pr_MaritalStatus", value: "Pr_MaritalStatus" },
{ Text: "Pr_Education", value: "Pr_Education" },
{ Text: "Pr_Profession", value: "Pr_Profession" },
{ Text: "Pr_Mangalic", value: "Pr_Mangalic" },
{ Text: "Pr_StarLanguage", value: "Pr_StarLanguage" },
{ Text: "Pr_NonPreferredStar", value: "Pr_NonPreferredStar" },
{ Text: "Pr_Diet", value: "Pr_Diet" },
{ Text: "Pr_PreferredCountry", value: "Pr_PreferredCountry" },
{ Text: "Pr_PreferredStat", value: "Pr_PreferredStat" },
{ Text: "Pr_Region", value: "Pr_Region" },
{ Text: "Pr_Branch", value: "Pr_Branch" },
{ Text: "contact address all", value: "CContactAddress_All" }
];


function submitkeywordsearch(grid) {
    document.getElementById("divEmployeeSearchSlideNew").style.display = "none";
    document.getElementById("divcontrols").style.display = "none";
    document.getElementById("Gridkeyword").style.display = "block";
    flag = 10;
    submitKeyword(flag - 9, flag, grid);
    return false;
}
function getallcheckboxvalues(chkboxlist) {

    var value = ($("input[name=" + chkboxlist + "]:checked").map(function () {
        return this.value;
    }).get().join(","));
    return value != "" ? value : null;
}

function submitKeyword(from, to, typeofbind) {

    $('#lblnoofrecordskey').html('');

    if ($('#txtallsearch').val() != "" && $('#txtallsearch').val() != undefined && $('#txtallsearch').val() != null) {

        object.Keyworddlikesrch = {};
        Getfilterobject();
    }
    object.Keyworddlikesrch.ApplicationStatus = getvalues('#lstapplicationstatus');
    object.Keyworddlikesrch.EmpID = GetEmpid();
    object.Keyworddlikesrch.startindex = from;
    object.Keyworddlikesrch.EndIndex = to;
    object.Keyworddlikesrch.Gender = getallcheckboxvalues('chkgender');
    object.Keyworddlikesrch.maritalstatus = getvalues('#lstMaritalstatus');
    object.Keyworddlikesrch.FromAge = $('#txtAgefrom').val() != "" ? $('#txtAgefrom').val() : null;
    object.Keyworddlikesrch.ToAge = $('#txtAgeto').val() != "" ? $('#txtAgeto').val() : null;
    object.Keyworddlikesrch.FromHeight = $('#txtFromHeight').val() != "" ? $('#txtFromHeight').val() : null;
    object.Keyworddlikesrch.ToHeight = $('#txtToHeight').val() != "" ? $('#txtToHeight').val() : null;
    object.Keyworddlikesrch.Caste = getvalues('#lstCaste');
    object.Keyworddlikesrch.CDomicile = $("input:radio[name='chkpreferedcountry']:checked").val();
    data = CallApi("KeyWordLikeSearch.aspx/GetKeywordSearch", object);

    if (data != undefined && data.d != undefined && data.d.length > 0) {
        rows = data.d[0].TotalRowsKeyword;
        $('#lblnoofrecordskey').text(" of " + data.d[0].TotalRowsKeyword);
        var removeObjs = ['Cust_ID', 'paid', 'IsConfidential', 'SuperConfidentila', 'HoroscopeStatus', 'PhotoNames', 'Photo', 'ApplicationPhotoPath',
            'HoroscopePath', 'NoOfBrothers', 'NoOfSisters', 'CasteID', 'MaritalStatusID', 'Income', 'currency', 'Intercaste', 'PhotoCount', 'imageurl', 'Agemin'
        , 'Agemax', 'Heightmin', 'Heightmax', 'TotalRows', 'Totalpages', 'MinHeight', 'MaxHeight', 'AgeMax', 'GenderID', 'SubCaste', 'mothertongue',
        'educationspecialisation', 'Employeedin', 'Ownerflag', 'ProfileStatusID', 'CustomerApplicationPhoto', 'TotalRowsKeyword',
        'CustomerFullPhoto', 'HeightInCentimeters', 'KMPLID', 'EduGroupnamenew', 'email', 'Gender', 'countrylivingin', 'maritalstatus', 'serviceDate', 'mothercaste',
        'fathercaste', 'Color', 'Age', 'RegistrationDate', 'FirstName', 'LastName', 'EducationGroup'];
        console.log(JSON.stringify(data.d));

        if (typeofbind == "grid") {
            from == 1 ? BootstrapTableLoad(data.d, $table, removeObjs) : BootstrapTableAppend(data.d, $table, removeObjs);
        }
        else {

            var obj = { reultArray: data.d, CarousalID: 'myCarousel', lblTOtalRecords: 'lblnoofrecords', InputObj: object, api: 'KeyWordLikeSearch.aspx/GetKeywordSearch' };
            bindSlide(obj);
            document.getElementById("divEmployeeSearchSlideNew").style.display = "block";
        }

        if ($('#spanappendkey').html() == "NaN") {
            if (parseInt(rows) > 10) {
                $('#spanappendkey').html(parseInt(rows) - parseInt(data.d.length));
            }
            else {
                $('#spanappendkey').html("0");
            }
        }
        else {

            if (parseInt($('#spanappendkey').html()) > 10) {
                $('#spanappendkey').html(parseInt($('#spanappendkey').html()) - parseInt(data.d.length));
            }
            else {
                $('#spanappendkey').html("0");
            }
        }
    }

    return false;
}
function Getfilterobject(type) {
    debugger;
    _.each($('#txtallsearch').val().split(' and '), function (item) {
        var innerdata = item.indexOf("between") != -1 ? item.split('between') : item.split('like');
        object.Keyworddlikesrch[type == "text" ? (innerdata[0]).trim() : _.where(Searchfields, { Text: (innerdata[0]).trim() })[0].value] = (innerdata[1]).trim();
    });
    return object;
}
$(function () {

    BindcontrolsBasedonclass();
    $('#lstCaste').multiselect('select', ['402'], true);
    var from, to;
    $append.click(function () {

        pagesizec = parseInt($("#gridDivkeyword").find('.page-size').html());
        from = flag + 1;
        flag = to = flag + pagesizec;
        console.log($(".page-size").html());
        submitKeyword(from, to, "grid");
        return false;

    });

});


function BindTwoVals(value, row, index) {

    var strBindTwoVals = row.DOB + "(" + row.Age + ")"

    return strBindTwoVals;
}

function BindHeightSubstring(value, row, index) {

    var strBindTwoVals = (row.Height).substr(0, 3);

    return strBindTwoVals;
}
function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {

        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}
function backtosearchkeyword() {
    $table.bootstrapTable('removeAll');
    $("#gridDivkeyword").find('.page-size').html(0);
    $('#spanappendkey').html("NaN");
    document.getElementById("divcontrols").style.display = "block";
    document.getElementById("Gridkeyword").style.display = "none";
    document.getElementById("divEmployeeSearchSlideNew").style.display = "none";
    return false;
}


function bindsearchfields() {
    $.each(Searchfields, function (index, item) {
        $('#lstSearchFields').append(" <option value=" + item.value + ">" + item.Text + "</option>");
    });
    return false;
}
$(function () {
    pageload('myCarousel', 'lblcurSlide', 'lblnoofrecords', 'lnkLastSlide', 'playButton', 'pauseButton')
    document.getElementById("gridDiv").style.display = "none";
    bindsearchfields();
    $('#lstSearchFields').on('change', function (e) {
        $('#lstSearchFields option:selected').attr('disabled', true).css('color', 'red');
        var optionSelected = $.trim($("option:selected", this).text());
        console.log(optionSelected);
        //var strSearchText = $('#txtallsearch').val() == "" ? "" + optionSelected + " like '%%'" : "  and  " + optionSelected + " like '%%'";
        var entertext;
        if (optionSelected == "CDateofReg" || optionSelected == "Salary" || optionSelected == "workingfromdate" || optionSelected == "PropertyValue") {
            if ($('#txtallsearch').val() == "") {
                entertext = "" + optionSelected + " between ' , '";
            }
            else {
                entertext = "  and  " + optionSelected + " between ' , '";
            }
        }
        else {
            if ($('#txtallsearch').val() == "") {
                entertext = "" + optionSelected + " like '%%'";
            }
            else {
                entertext = "  and  " + optionSelected + " like '%%'";
            }
        }
        var strSearchText = entertext;
        var daatt = "<mark style='background: #ff0;'></mark>";
        $('#lblSearchFieldsAppend').text($('#lblSearchFieldsAppend').text() != "" ? $('#lblSearchFieldsAppend').text() + "," + optionSelected : optionSelected);

        $('#txtallsearch').val($('#txtallsearch').val() + strSearchText);

        return false;
    });

});

function getvaluesForColor(dropdownname) {

    var values = new Array();
    var valuesnew;
    $.each($(dropdownname), function () {
        values.push($(this).val());
    });
    values = values.length > 0 && values.join(',') != "" ? values.join(',') : null;
    return values;
}
$(function () {
    filterlistboxlist();
});

function filterlistboxlist() {
    var options = $('#lstSearchFields option');

    $('#searchfields').keyup(function () {

        var test = [];
        var filter = $(this).val();
        $.each(options, function (index, item) {
            if (item.text == "" || item.text.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                (item).style.display = "block";
            }
            else {
                (item).style.display = "none";
            }

        });


    });

}

function resetkeyword() {

    $('#txtallsearch').val('');
    $('#lblSearchFieldsAppend').val('');
    $(".multiple").multiselect("clearSelection");
    $('#lstSearchFields').empty();
    bindsearchfields();
    $('#lstapplicationstatus').multiselect('select', ['54'], true);

    $('#lstCaste').multiselect('select', ['402'], true);
    return false;
}
function getallcheckboxvalues(chkboxlist) {

    var value = ($("input[name=" + chkboxlist + "]:checked").map(function () {
        return this.value;
    }).get().join(","));
    return value != "" ? value : null;
}

function Slideshow(slide) {

    document.getElementById("divEmployeeSearchSlideNew").style.display = "block";
    document.getElementById("divcontrols").style.display = "none";
    document.getElementById("Gridkeyword").style.display = "none";
    $('.num').hide();
    submitKeyword(1, 10, slide);
    return false;
}

$(function () {

    //$('#lnkbacktoSearch').on('click', function () {
    //    backtosearchkeyword();
    //});
});

function backtosearch() {

    document.getElementById("divcontrols").style.display = "block";
    document.getElementById("Gridkeyword").style.display = "none";
    document.getElementById("divEmployeeSearchSlideNew").style.display = "none";

    return false;
}
function rowStyle() {
    return false;
}