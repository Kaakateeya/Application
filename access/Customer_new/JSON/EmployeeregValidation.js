'use strict'
var $table = $('#GridTablekeyword'), $append = $('.append'), flag = 10, rows, pagesizec = 10, falsepageination = false, $tableextent = $('#tablemore');

function Bindsingledropdowns() {
    var Bindings;
    var datas;
    Bindings = {
        Masterbind: {
            Caste: "Caste",
            ProfileStatus: "ProfileStatus"
        }
    }
    datas = CallApi("CommonPopulateDropDownList", Bindings);
    var methodnames = [
          { dropdownname: "strCaste", data: datas.d.Caste },
          { dropdownname: "intAppicationStatusID", data: datas.d.ProfileStatus }
    ];
    for (var i = 0; i < methodnames.length; i++) {
        GetMasterDataforSearchessingle(methodnames[i].dropdownname, methodnames[i].data);
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


function submitregprofilevalidation(frompage, topage) {
    $table.bootstrapTable('removeAll');
    $("#gridDivkeyword").find('.page-size').html(0);
    $('#spanappendkey').html("NaN");
    $('#lblnoofrecordskey').text("No Profiles Found");

    $('#lblActiveCount').text(0);
    $('#lblDeletedCount').text(0);
    $('#lblSettledCount').text(0);

    if (($('#strMFFNativePlace').val() != "") || ($('#strFatherName').val() != "") || ($('#strMotherName').val() != "") || ($('#strFFName').val() != "")
        || ($('#strMFName').val() != "") || ($('#strMFSurName').val() != "") || ($('#strCustSurName').val() != "") || ($('#strCustName').val() != "")
        || (getvalues('#strCaste') != null) || ($('#strAllPhones').val() != "") || ($('#strAllEmailIds').val() != "")
        || (getvalues('#intAppicationStatusID') != null)) {
        $('#divtotalrows').show();
        $('#divappendbtn').show();
        flag = 10;
        submitvalidation(frompage, topage);
    }
    else {
        DynamicTimeAlert('please Enter Atleast One Fileld', 'alert alert-danger', 3000);
        //alert("please Enter Atleast One Fileld");
    }
    return false;
}


function submitvalidation(fromVal, Toval) {
    var validationsuhbmit = {
        validation: {
            strMFFNativePlace: $('#strMFFNativePlace').val() != "" ? $('#strMFFNativePlace').val() : null,
            strFatherName: $('#strFatherName').val() != "" ? $('#strFatherName').val() : null,
            strMotherName: $('#strMotherName').val() != "" ? $('#strMotherName').val() : null,
            strFFName: $('#strFFName').val() != "" ? $('#strFFName').val() : null,
            strMFName: $('#strMFName').val() != "" ? $('#strMFName').val() : null,
            strMFSurName: $('#strMFSurName').val() != "" ? $('#strMFSurName').val() : null,
            strCustSurName: $('#strCustSurName').val() != "" ? $('#strCustSurName').val() : null,
            strCustName: $('#strCustName').val() != "" ? $('#strCustName').val() : null,
            strCaste: getvalues('#strCaste'),
            strAllPhones: $('#strAllPhones').val() != "" ? $('#strAllPhones').val() : null,
            strAllEmailIds: $('#strAllEmailIds').val() != "" ? $('#strAllEmailIds').val() : null,
            intAppicationStatusID: getvalues('#intAppicationStatusID'),
            intEmpID: GetEmpid(),
            i_Startindex: fromVal,
            i_EndIndex: Toval
        }
    }
    var data = CallApi('RegistrationprofileValidation.aspx/Registrationprofilevalidationsubmit', validationsuhbmit);
    if (data != undefined && data.d != undefined && data.d.length > 0) {
        console.log(data.d);
        rows = data.d[0].TotalRows;
        $('#divCounts').show();
        $('#lblActiveCount').text(data.d[0].ActiveCount);
        $('#lblDeletedCount').text(data.d[0].DeletedCount);
        $('#lblSettledCount').text(data.d[0].SettledCount);
        $('#lblinactivecount').text(data.d[0].InActiveCount);
        alert(data.d[0].InActiveCount);
        $('#lblnoofrecordskey').text(data.d[0].TotalRows + "  Profiles Found");
        var removeObjs = ['TotalRows', 'TotalPages', 'ProfileStatusID', 'ActiveCount', 'DeletedCount', 'SettledCount', 'ViewfullProfileID', 'BranchCode', 'InActiveCount'];
        if (fromVal == 1) {
            $('#spanappendkey').html("NaN");
            BootstrapTableLoad(data.d, $table, removeObjs)
        }
        else {
            BootstrapTableAppend(data.d, $table, removeObjs);
        }
        if ($('#spanappendkey').html() == "NaN") {
            $('#toggleDemo').slideToggle('slow');
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
    else {
        //$('#divtotalrows').hide();
        //$('#divappendbtn').hide();
        //$table.bootstraptable('removeall');
        //$("#griddivkeyword").find('.page-size').html(0);
        //$('#spanappendkey').html("nan");
        //$('#lblnoofrecordskey').text("no profiles found");
        //$('#toggleDemo').show();
        DynamicTimeAlert("Sorry No Records Found", 'alert alert-danger', '3000');
        // $('#lblnoofrecordskey').html('<h4> Zero Profiles Found,Refine Your Search Criteria</h4>');
    }
    return false;
}
$(function () {

    $('#divtotalrows').hide();
    $('#divappendbtn').hide();
    Bindsingledropdowns();
    var from, to;
    $append.click(function () {
        pagesizec = parseInt($("#gridDivkeyword").find('.page-size').html());
        from = flag + 1;
        flag = to = flag + pagesizec;
        submitvalidation(from, to);
        return false;

    });

});
function Resetvalidation() {
    $("input:text").val("");
    return false;
}

///
var datatbaleoptionsmore = {
    exportDataType: 'all',
    maintainSelected: true,
    smartDisplay: true,
    showFooter: false,
    cache: false,
    escape: true,
    showHeader: true,
    showToggle: true,
    detailView: false,
    onlyInfoPagination: false,
    striped: false,
    showColumns: false,
    showExport: true,
    search: true,
    pagination: true,
    classes: "table table-striped",
    pageSize: "10",
    height: 300,
    mobileResponsive: "true"
};
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
    // $('.Datatable').hide();
});
function BootstrapTableLoadmore(Array, table, removeObjs) {
    debugger;
    datatbaleoptionsmore.height = 240;
    datatbaleoptionsmore.pageSize = 1;
    if (removeObjs != null && removeObjs != undefined)
        var filteredColumns = _.difference(_.keys(Array[0]), removeObjs);
    datatbaleoptionsmore.columns = setColumnsNew(filteredColumns || _.keys(Array[0]));
    table.bootstrapTable(datatbaleoptionsmore);
    table.bootstrapTable('load', Array);
    return false;
}
function BootstrapTableLoad(Array, table, removeObjs, height, pagesize) {
    debugger;
    datatbaleoptions.height = height || 530;
    datatbaleoptions.pageSize = pagesize || 10;
    if (removeObjs != null && removeObjs != undefined)
        var filteredColumns = _.difference(_.keys(Array[0]), removeObjs);
    datatbaleoptions.columns = setColumns(filteredColumns || _.keys(Array[0]));
    table.bootstrapTable(datatbaleoptions);
    table.bootstrapTable('load', Array);
    return false;
}
function BootstrapTableAppend(Array, tableID, revoObjs) {
    $('#GridTablekeyword').show();
    tableID.bootstrapTable('prepend', Array);
    return false;
}
function setColumns(test) {
    debugger;
    var arrayyy = [];
    _.each(test, function (item, index) {
        if (item.substring(0, 1) != "_") {
            var obj = {};
            if (item.toLowerCase() == 'playbutton') {
                obj.field = "";
                obj.title = "";
            }
            else {
                obj.field = item;
                obj.title = item;
            }
            obj.sortable = true;
            obj.searchable = true;
            obj.visible = true;
            obj.switchable = true;

            if (item.toLowerCase() == 'profileid') {
                obj.formatter = operateFormatter;
            }
            else if (item.toLowerCase() == 'playbutton') {
                obj.formatter = playbuttonformatter;
            }
            arrayyy.push(obj);
        }
    });
    return arrayyy;
}

function setColumnsNew(test) {
    debugger;
    var arrayyy = [];
    _.each(test, function (item, index) {
        if (item.substring(0, 1) != "_") {
            var obj = {};
            if (item.toLowerCase() == 'paidamount') {
                obj.field = "OP/KP";
                obj.title = "OP/KP";
                obj.formatter = paidamountformatter;
            }
            else if (item.toLowerCase() == 'paiddate') {
                obj.field = "opd/kpd";
                obj.title = "opd/kpd";
                obj.formatter = paiddateformatter;
            }
            else if (item.toLowerCase() == 'sentreceivecount') {
                obj.field = "s/rcount";
                obj.title = "s/rcount";
                obj.formatter = sentreceivecount;
            }
            else {
                obj.field = item;
                obj.title = item;
            }
            obj.sortable = true;
            obj.searchable = true;
            obj.visible = true;
            obj.switchable = true;


            //if (item.toLowerCase() == 'ViewContact') {
            //    obj.formatter = ViewContactformatter;
            //}
            //else if (item.toLowerCase() == 'Tickets') {
            //    obj.formatter = Ticketsformatter;
            //}

            arrayyy.push(obj);
        }
    });
    return arrayyy;
}
function sentreceivecount(value, row, index) {
    return row.sentreceivecount;
}
function paiddateformatter(value, row, index) {
    return row.paiddate;
}
function paidamountformatter(value, row, index) {
    var paid = row.paidamount;
    return paid;
}
function Ticketsformatter() {
    var ticket = "";
    return ticket;
}
function ViewContactformatter() {
    var viewcontact = "";
    return viewcontact;
}
function operateFormatter(value, row, index) {
    var Querystring = "?" + "ProfileID=" + row.ViewfullProfileID + "&Print=1";
    var paid = ((row.ProfileID).indexOf('C') != -1) || ((row.ProfileID).indexOf('SC') != -1) ? '<label style="color:#2196F3;">' + row.ProfileID + '</label>' : '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" >' + (row.ProfileID) + '</a>';
    return paid;
}

function playbuttonformatter(value, row, index) {
    var profileid = '<a href="javascript:void(0)" id="play' + index + '" style="display:block;" onclick="return playbuttonclick(' + row.ViewfullProfileID + ',1,' + index + ')"><span class="glyphicon glyphicon-play"></span></a>' +
           '<a href="javascript:void(0)" id="pause' + index + '" style="display:none;" onclick="return playbuttonclick(' + row.ViewfullProfileID + ',0,' + index + ')"><span class="glyphicon glyphicon-pause"></span> </a>';
    return profileid;
}

function playbuttonclick(profileid, flag, index) {
    if (flag == 1) {
        document.getElementById("play" + index + "").style.display = 'none';
        document.getElementById("pause" + index + "").style.display = 'block';
        var Bindingsmore = {
            Profileid: profileid,
        }
        var data = CallApi("RegistrationprofileValidation.aspx/Registrationprofileviewprofile", Bindingsmore);
        console.log(data.d);
        if (data != undefined && data.d != undefined && data.d.length > 0) {
            var removeObjs = ['custid', 'empid', 'branchid', 'ViewContact', 'Tickets', 'Horo', 'SA'];
            BootstrapTableLoadmore(data.d, $tableextent, removeObjs);
            $('.Datatable').show();
        }
        $('#divlookingmore').modal({ backdrop: 'static' });
    }
    else {
        document.getElementById("play" + index + "").style.display = 'block';
        document.getElementById("pause" + index + "").style.display = 'none';
        $('#divlookingmore').modal('hide');
    }
    return false;
}
function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}


function rowStyle(row) {

    var classes = ['settled', 'Deleted', 'closed'];
    var test = [
        { StatusID: 57, classes: 'settled' },
        { StatusID: 393, classes: 'settled' },
        { StatusID: 56, classes: 'Deleted' },
        { StatusID: 394, classes: 'Deleted' },
        { StatusID: 258, classes: 'closed' }
    ];


    return {
        classes: _.where(test, { StatusID: parseInt(row.ProfileStatusID) }).length >= 1 ? _.where(test, { StatusID: parseInt(row.ProfileStatusID) })[0].classes : ''
    };

}