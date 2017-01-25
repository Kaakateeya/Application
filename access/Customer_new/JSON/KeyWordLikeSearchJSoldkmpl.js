'use strict'
var $table = $('#GridTablekeyword'), $append = $('.append'), flag = 10, rows, pagesizec = 10, data, falsepageination = false;
var object = {
    Keyworddlikesrch: {
    }
};
var Searchfields = [
{ Text: "CandidateAll", value: "CandidateAll", style: "color:#000;" },
{ Text: "FatherAll", value: "FatherAll", style: "color:#000;" },
{ Text: "MotherAll", value: "MotherAll", style: "color:#000;" },
{ Text: "BrotherAll", value: "BrotherAll", style: "color:#000;" },
{ Text: "SisterAll", value: "SisterAll", style: "color:#000;" },
{ Text: "MotherBortherAll", value: "MotherBortherAll", style: "color:#000;" },
{ Text: "MotherSisterAll", value: "MotherSisterAll", style: "color:#000;" },
{ Text: "FatherBrotheAll", value: "FatherBrotheAll", style: "color:#000;" },
{ Text: "FatherSisterAll", value: "FatherSisterAll", style: "color:#000;" },
{ Text: "C EducationalDetails", value: "CEducationalDetails", style: "color:#dc970d;" },
{ Text: "C EducationCategory", value: "CEducationCategory", style: "color:#dc970d;" },
{ Text: "C University", value: "CEduUniversity", style: "color:#dc970d;" },
{ Text: "C SecondaryQualification", value: "CSecondaryQualification", style: "color:#dc970d;" },
{ Text: "C PrimaryQualification", value: "CPrimaryQualification", style: "color:#dc970d;" },
{ Text: "C QualificationDetails", value: "CQualificationDetails", style: "color:#dc970d;" },
{ Text: "C JobLocation", value: "CJobLocation", style: "color:#dc970d;" },
{ Text: "C CompanyName", value: "Companyname", style: "color:#dc970d;" },
{ Text: "C MonthlySalary", value: "CMonthlysalary", style: "color:#dc970d;" },
{ Text: "C Profession", value: "CProfession", style: "color:#dc970d;" },
{ Text: "C ProfessionDetails", value: "CprofessionDetails", style: "color:#dc970d;" },
{ Text: "C PropertyDetails", value: "CPropertyDetails", style: "color:#dc970d;" },
{ Text: "C PropertyType", value: "CpropertyType", style: "color:#dc970d;" },
{ Text: "C PropertyValue", value: "CPropertyValue", style: "color:#dc970d;" },
{ Text: "C PlaceOfBirth", value: "CPlaceOfBirth", style: "color:green;" },
{ Text: "C Gothram", value: "CGothram", style: "color:green;" },
{ Text: "C Kujadosham", value: "CKujadosham", style: "color:green;" },
{ Text: "C Lagnam", value: "CLagnam", style: "color:green;" },
{ Text: "C MaternalGothram", value: "CMaternalGothram", style: "color:green;" },
{ Text: "C MotherTongue", value: "CMotherTongue", style: "color:green;" },
{ Text: "C Paadam", value: "CPaadam", style: "color:green;" },
{ Text: "C Raasi", value: "CRaasi", style: "color:green;" },
{ Text: "C Star", value: "CStar", style: "color:green;" },
{ Text: "C StarLanguage", value: "CStarLanguage", style: "color:green;" },
{ Text: "C TimeofBirth", value: "CTimeofBirth", style: "color:green;" },
//{ Text: "C ApplicationStatus", value: "CApplicationStatus", style: "color:#2e89d8;" },
//{ Text: "C Caste", value: "Caste", style: "color:#2e89d8;" },
{ Text: "C BornCitigen", value: "CBornCitigen", style: "color:#2e89d8;" },
{ Text: "C ContactAddress", value: "CContactAddress", style: "color:#2e89d8;" },
{ Text: "C ContactNo", value: "CContactNo", style: "color:#2e89d8;" },
{ Text: "C DateofReg", value: "CDateofReg", style: "color:#2e89d8;" },
{ Text: "C DOB", value: "CDOB", style: "color:#2e89d8;" },
{ Text: "C EmailID", value: "CEmailID", style: "color:#2e89d8;" },
{ Text: "C FirstName", value: "CFName", style: "color:#2e89d8;" },
{ Text: "C LastName", value: "CLName", style: "color:#2e89d8;" },
{ Text: "C Photos", value: "CPhotos", style: "color:#2e89d8;" },
{ Text: "C Relision", value: "CRelision", style: "color:#2e89d8;" },
{ Text: "C SubCaste", value: "CSubCaste", style: "color:#2e89d8;" },
{ Text: "C FromAge", value: "CFromAge", style: "color:#2e89d8;" },
{ Text: "C ToAge", value: "CFromHeight", style: "color:#2e89d8;" },
//{ Text: "C Gender", value: "CGender", style: "color:#2e89d8;" },
{ Text: "C Maritalstatus", value: "CMaritalstatus", style: "color:#2e89d8;" },
{ Text: "C ToHeight", value: "CToAge", style: "color:#2e89d8;" },
{ Text: "C ToHeight", value: "CToHeight", style: "color:#2e89d8;" },
{ Text: "C CityOfLiving", value: "CCityOfLiving", style: "color:#7f54ca;" },
{ Text: "C DistrictOfLiving", value: "CDistrictOfLiving", style: "color:#7f54ca;" },
{ Text: "C Domicile", value: "CDomicile", style: "color:#7f54ca;" },
{ Text: "C StateOfLiving", value: "CStateOfLiving", style: "color:#7f54ca;" },
{ Text: "C PhoneNumberOffice", value: "CPhNosOffice", style: "color:#00BCD4;" },
{ Text: "C Residence", value: "CResidence", style: "color:#00BCD4;" },
{ Text: "C Mobile", value: "CMobile", style: "color:#00BCD4;" },
{ Text: "C Emailid", value: "CEmailid", style: "color:#00BCD4;" },
{ Text: "C SecondaryEmailID", value: "CSecondary_EmailID", style: "color:#00BCD4;" },
{ Text: "C PermenentAddress", value: "CPermt_Add", style: "color:#00BCD4;" },
{ Text: "C Notes", value: "CNotes", style: "color:#00BCD4;" },
{ Text: "C KnownLanguage", value: "CKnown_Language", style: "color:#00BCD4;" },
{ Text: "C Diet", value: "CDiet", style: "color:#00BCD4;" },
{ Text: "C Smoker", value: "CSmoker", style: "color:#00BCD4;" },
{ Text: "C Drinker", value: "CDrinker", style: "color:#00BCD4;" },
{ Text: "C BodyType", value: "CBodyType", style: "color:#00BCD4;" },
{ Text: "C FamilyValue", value: "CFamilyValue", style: "color:#00BCD4;" },
{ Text: "CPFromAge", value: "PAgeFrom", style: "color:#607D8B;" },
{ Text: "CPToAge", value: "PAgeTo", style: "color:#607D8B;" },
{ Text: "CPFromHeight", value: "PHeightFrom", style: "color:#607D8B;" },
{ Text: "CPToHeight", value: "PHeightTo", style: "color:#607D8B;" },
{ Text: "CPCaste", value: "PCaste", style: "color:#607D8B;" },
{ Text: "CPSubCaste", value: "PSubCaste", style: "color:#607D8B;" },
{ Text: "CPCategory", value: "PCategory", style: "color:#607D8B;" },
{ Text: "CPQualification", value: "PQualifications", style: "color:#607D8B;" },
{ Text: "CPProfession", value: "PProfession", style: "color:#607D8B;" },
{ Text: "CPJobPreference", value: "PJobPreference", style: "color:#607D8B;" },
{ Text: "CPJobLocation", value: "PLocation", style: "color:#607D8B;" },
{ Text: "CPAbroadPrefer", value: "PAbroadPrefer", style: "color:#607D8B;" },
{ Text: "CPCountry", value: "PCountry", style: "color:#607D8B;" },
{ Text: "CPState", value: "PState", style: "color:#607D8B;" },
{ Text: "CPDistrict", value: "PDistrict", style: "color:#607D8B;" },
{ Text: "CPMotherTongue", value: "PMotherTongue", style: "color:#607D8B;" },
{ Text: "CPComplexion", value: "PComplexion", style: "color:#607D8B;" },
{ Text: "CPPrefStars", value: "PPrefStars", style: "color:#607D8B;" },
{ Text: "CPNonPrefStars", value: "PNonPrefStars", style: "color:#607D8B;" },
{ Text: "CBName", value: "CBName", style: "color:#607D8B;" },
{ Text: "CBType", value: "CBType", style: "color:#607D8B;" },
{ Text: "CBEducation", value: "CBEducation", style: "color:#607D8B;" },
{ Text: "CBProfession", value: "CBProfession", style: "color:#607D8B;" },
{ Text: "CBDesignation", value: "CBDesignation", style: "color:#607D8B;" },
{ Text: "CBJobLocation", value: "CBJobLocation", style: "color:#607D8B;" },
{ Text: "CBPhoneNumber", value: "CBPhone", style: "color:#607D8B;" },
{ Text: "CBEmailID", value: "CBEmail", style: "color:#607D8B;" },
{ Text: "CBWName", value: "CBWName", style: "color:#607D8B;" },
{ Text: "CBWEducation", value: "CBWEducation", style: "color:#607D8B;" },
{ Text: "CBWProfession", value: "CBWProfession", style: "color:#607D8B;" },
{ Text: "CBWDesignation", value: "CBWDesignation", style: "color:#607D8B;" },
{ Text: "CBWPhoneNumber", value: "CBWPhone", style: "color:#607D8B;" },
{ Text: "CBWEmailId", value: "CBWEmailId", style: "color:#607D8B;" },
{ Text: "CBWFFirstName", value: "CBWFatherName", style: "color:#607D8B;" },
{ Text: "CBWFSurName", value: "CBWFatherSName", style: "color:#607D8B;" },
{ Text: "CBWFPhoneNumber", value: "CBWFPhoneNumber", style: "color:#607D8B;" },
{ Text: "CBWFNativePlace", value: "CBWFNativePlace", style: "color:#607D8B;" },
{ Text: "CSName", value: "CSName", style: "color:#607D8B;" },
{ Text: "CSType", value: "CSType", style: "color:#607D8B;" },
{ Text: "CSEducation", value: "CSEducation", style: "color:#607D8B;" },
{ Text: "CSDesignation", value: "CSDesignation", style: "color:#607D8B;" },
{ Text: "CSJobLocation", value: "CSJobLocation", style: "color:#607D8B;" },
{ Text: "CSPhoneNumber", value: "CSPNumber", style: "color:#607D8B;" },
{ Text: "CSEmailID", value: "CSEmailID", style: "color:#607D8B;" },
{ Text: "CSHFirstName", value: "CSHFirstName", style: "color:#607D8B;" },
{ Text: "CSHSurName", value: "CSHSurName", style: "color:#607D8B;" },
{ Text: "CSHEducation", value: "CSHEducation", style: "color:#607D8B;" },
{ Text: "CSHProfession", value: "CSHProfession", style: "color:#607D8B;" },
{ Text: "CSHDesignation", value: "CSHDesignation", style: "color:#607D8B;" },
{ Text: "CSHPhoneNumber", value: "CSHNumber", style: "color:#607D8B;" },
{ Text: "CSHEmailID", value: "CSHEmailID", style: "color:#607D8B;" },
{ Text: "CSHFName", value: "CSHFName", style: "color:#607D8B;" },
{ Text: "CSHFPhoneNumber", value: "CSHFPNumbe", style: "color:#607D8B;" },
{ Text: "CSHFNative", value: "CSHFNative", style: "color:#607D8B;" },
{ Text: "CSHCaste", value: "CSHCaste", style: "color:#607D8B;" },
{ Text: "FName", value: "FName", style: "color:#607D8B;" },
{ Text: "FEducation", value: "FEducation", style: "color:#607D8B;" },
{ Text: "FProfession", value: "FProfession", style: "color:#607D8B;" },
{ Text: "FPhoneNumber", value: "FPhone", style: "color:#607D8B;" },
{ Text: "FEmailId", value: "FEmailId", style: "color:#607D8B;" },
{ Text: "FFName", value: "FFName", style: "color:#607D8B;" },
{ Text: "FFPhoneNumber", value: "FFPhone", style: "color:#607D8B;" },
{ Text: "FFEmailID", value: "FFEmailID", style: "color:#607D8B;" },
{ Text: "FFState", value: "FFState", style: "color:#607D8B;" },
{ Text: "FFDistrict", value: "FFDistrict", style: "color:#607D8B;" },
{ Text: "FFNative", value: "FFNative", style: "color:#607D8B;" },
{ Text: "MName", value: "MName", style: "color:#607D8B;" },
{ Text: "MEducation", value: "MEducation", style: "color:#607D8B;" },
{ Text: "MProfession", value: "MProfession", style: "color:#607D8B;" },
{ Text: "MPhoneNumber", value: "MPhone", style: "color:#607D8B;" },
{ Text: "MEmailId", value: "MEmailId", style: "color:#607D8B;" },
{ Text: "MFName", value: "MFName", style: "color:#607D8B;" },
{ Text: "MFPhoneNumber", value: "MFPhone", style: "color:#607D8B;" },
{ Text: "MFEmailID", value: "MFEmailID", style: "color:#607D8B;" },
{ Text: "MFState", value: "MFState", style: "color:#607D8B;" },
{ Text: "MFDistrict", value: "MFDistrict", style: "color:#607D8B;" },
{ Text: "MFNative", value: "MFNative", style: "color:#607D8B;" },
{ Text: "MBName", value: "MBName", style: "color:#607D8B;" },
{ Text: "MBType", value: "MBType", style: "color:#607D8B;" },
{ Text: "MBProfession", value: "MBProfession", style: "color:#607D8B;" },
{ Text: "MBPhoneNumber", value: "MBPNumber", style: "color:#607D8B;" },
{ Text: "MBEmailId", value: "MBEmailId", style: "color:#607D8B;" },
{ Text: "MSName", value: "MSName", style: "color:#607D8B;" },
{ Text: "MSType", value: "MSType", style: "color:#607D8B;" },
{ Text: "MSHFirstName", value: "MSHFName", style: "color:#607D8B;" },
{ Text: "MSHSurName", value: "MSHSName", style: "color:#607D8B;" },
{ Text: "MSHNative", value: "MSHNative", style: "color:#607D8B;" },
{ Text: "MSHProfession", value: "MSHProfession", style: "color:#607D8B;" },
{ Text: "MSHPhoneNumber", value: "MSHPNumber", style: "color:#607D8B;" },
{ Text: "MSHEmailID", value: "MSHEmailID", style: "color:#607D8B;" },
{ Text: "FBName", value: "FBName", style: "color:#607D8B;" },
{ Text: "FBType", value: "FBType", style: "color:#607D8B;" },
{ Text: "FBProfession", value: "FBProfession", style: "color:#607D8B;" },
{ Text: "FBPhoneNumber", value: "FBPNuFBer", style: "color:#607D8B;" },
{ Text: "FBEmailId", value: "FBEmailId", style: "color:#607D8B;" },
{ Text: "FSName", value: "FSName", style: "color:#607D8B;" },
{ Text: "FSType", value: "FSType", style: "color:#607D8B;" },
{ Text: "FSHFirstName", value: "FSHFName", style: "color:#607D8B;" },
{ Text: "FSHSurName", value: "FSHSName", style: "color:#607D8B;" },
{ Text: "FSHNative", value: "FSHNative", style: "color:#607D8B;" },
{ Text: "FSHProfession", value: "FSHProfession", style: "color:#607D8B;" },
{ Text: "FSHPhoneNumber", value: "FSHPNuFBer", style: "color:#607D8B;" },
{ Text: "FSHEmailID", value: "FSHEmailID", style: "color:#607D8B;" }

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
    object.Keyworddlikesrch.CApplicationStatus = getvaluestext('#lstapplicationstatus');
    object.Keyworddlikesrch.EmpID = GetEmpid();
    object.Keyworddlikesrch.startindex = from;
    object.Keyworddlikesrch.EndIndex = to;
    object.Keyworddlikesrch.CGender = getallcheckboxvalues('chkgender') == "2" ? "Female" : "Male";
    object.Keyworddlikesrch.Caste = getvaluestext('#lstCaste');
    data = CallApi("KeyWordLikeSearcholdkmpl.aspx/GetKeywordSearcholdkmpl", object);

    if (data != undefined && data.d != undefined && data.d.length > 0) {
        //rows = data.d[0].TotalRowsKeyword;
        // $('#lblnoofrecordskey').text(" of " + data.d[0].TotalRowsKeyword);
        debugger;
        var removeObjs = ['rows'];
        console.log(JSON.stringify(data.d));

        if (typeofbind == "grid") {
            from == 1 ? BootstrapTableLoad(data.d, $table) : BootstrapTableAppend(data.d, $table);
        }
        else {

            var obj = { reultArray: data.d, CarousalID: 'myCarousel', lblTOtalRecords: 'lblnoofrecords', InputObj: object, api: "KeyWordLikeSearcholdkmpl.aspx/GetKeywordSearcholdkmpl" };
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
        $('#lstSearchFields').append(" <option value=" + item.value + " style=" + item.style + ">" + item.Text + "</option>");
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
        debugger;
        if (optionSelected == "C FromAge" || optionSelected == "CPToAge" || optionSelected == "CPFromHeight" || optionSelected == "CPToHeight") {
            if ($('#txtallsearch').val() == "") {
                entertext = "" + optionSelected + " and ' , '";
            }
            else {
                entertext = "  and  " + optionSelected + " and ' , '";
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


///



var datatbaleoptions = {
    exportDataType: 'all',
    maintainSelected: true,
    smartDisplay: true,
    trimOnSearch: true,
    showFooter: false,
    cache: false,
    escape: true,
    showRefresh: false,
    showHeader: true,
    showPaginationSwitch: true,
    showToggle: true,
    detailView: false,
    onlyInfoPagination: falsepageination,
    striped: false,
    showColumns: true,
    showExport: true,
    search: true,
    pagination: true,
    rowStyle: rowStyle,
    //classes: "table table-striped ",
    pageList: "[10,50,100]",
    paginationFirstText: "First",
    paginationPreText: "Previous",
    paginationNextText: "Next",
    paginationLastText: "Last",
    detailFormatter: detailFormatter,
    mobileResponsive: "true",
    showLoading: true,
    fixedColumns: true,
    fixedNumber: 1,
    showMultiSort: true,
    pageSize: "10"
};
$(function () {
    $('.Datatable').hide();

});

function BootstrapTableLoad(Array, table, height, pagesize) {
    debugger;
    $('.Datatable').show();

    datatbaleoptions.height = height || 650;
    datatbaleoptions.pageSize = pagesize || 10;


    datatbaleoptions.columns = setColumns(_.keys(Array[0]));
    table.bootstrapTable(datatbaleoptions);
    console.log(Array);
    debugger;
    table.bootstrapTable('load', Array);
    return false;
}
function BootstrapTableAppend(Array, tableID, revoObjs) {
    $('.Datatable').show();
    tableID.bootstrapTable('prepend', Array);
    return false;
}
function setColumns(test) {
    debugger;
    var arrayyy = [];
    _.each(test, function (item, index) {
        if (item.substring(0, 1) != "_") {
            var obj = {};
            obj.field = item;
            obj.title = item;
            obj.sortable = true;
            obj.searchable = true;
            obj.visible = true;
            obj.switchable = true;
            arrayyy.push(obj);
        }
    });
    return arrayyy;
}

function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {

        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}


