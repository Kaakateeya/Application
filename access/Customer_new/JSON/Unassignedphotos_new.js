var rowStyle; var $ToTable = $('#tablesubmit'), flag = 10, $append = $('.append'), pagesizec = 10, falsepageination = false;
var from, to;
function Submit() {
    $('#spanappend').html("NaN");
    flag = 10
    $append.show();
    GetUnassignedPhotos('0', 1, 10);
    document.getElementById("Divtotalrows").style.display = "block";
    document.getElementById("assignbtndiv").style.display = "block";
    document.getElementById("appenddivbtn").style.display = "block";
    return false;
}


function GetUnassignedPhotos(flags, from, to) {
    debugger;
    var convertJSDate = function (dateTime) {
        var dateArr = dateTime.split("/");
        var date1 = dateArr[0] + "/" + dateArr[1] + "/" + dateArr[2];
        date1 = (moment(date1).format('MM/DD/YYYY HH:MM:SS'));
        return date1;
    }
    var rows;
    var inputObj = {
        Mobj: {
            iEmpID: GetEmpid(),
            StrProfileID: ($('#txtProfileID').val() != '' && $('#txtProfileID').val() != null) ? $('#txtProfileID').val() : null,
            PhotoAssigned: ($("input:radio[name='PhotoassignedID']:checked").val() != undefined && $("input:radio[name='PhotoassignedID']:checked").val() != '2') ? $("input:radio[name='PhotoassignedID']:checked").val() : null,
            GenderID: ($("input:radio[name='GenderID']:checked").val() != undefined && $("input:radio[name='GenderID']:checked").val() != '0') ? $("input:radio[name='GenderID']:checked").val() : null,
            PhotoStatus: ($("input:radio[name='PhotoStatus']:checked").val() != undefined && $("input:radio[name='PhotoStatus']:checked").val() != '2') ? $("input:radio[name='PhotoStatus']:checked").val() : null,
            strBranch: getvalues('#ddlBranch'),
            strRegion: getvalues('#ddlregion'),
            strCaste: getvalues('#ddlCaste'),
            StartDate: $('#txtFromuploaded').val() != "" ? convertJSDate($('#txtFromuploaded').val()) : "",
            EnDate: $('#txtTouploaded').val() != "" ? convertJSDate($('#txtTouploaded').val()) : "",
            intlowerBound: from,
            intUpperBound: to,

        }
    };

    var data = CallApi("UnassignedPhoto_New.aspx/GetPhotodetails", inputObj);
    if (flags == "0") {
        $ToTable.bootstrapTable('removeAll');
        //$('#spanappend').html("0");
        $('#spanappend').html("NaN");
    }
    $('#totalrecords').html("");
    if (data != undefined && data != null && data.d.length > 0) {
        rows = data.d[0].TotalRows;
        $('#totalrecords').html("<h1 id='h1rowsfound'><small> No of Profiles Found :</small>" + rows + "</h3>");
        flags == "1" ? BootstrapTableAppend(data.d, $ToTable, ['TotalRows', 'TotalRows', 'cust_id', 'LoginLocation', 'Totalpages', 'paid', 'IdS', 'Row', 'AccepCount', 'RejectCount']) : BootstrapTableLoad(data.d, $ToTable, ['TotalRows', 'TotalRows', 'cust_id', 'LoginLocation', 'Totalpages', 'paid', 'IdS', 'Row', 'AccepCount', 'RejectCount'], 500, 10);

    }

    else {
        BootstrapTableLoad([]);
        DynamicTimeAlert(Norecords, 'alert alert-danger', '4000');
        $('#totalrecords').html('<h4> Zero Profiles Found,Refine Your Search Criteria</h4>');
    }




    if ($('#spanappend').html() == "NaN") {
        if (parseInt(rows) > 10) {
            $('#spanappend').html(parseInt(rows) - parseInt(data.d.length));
        }
        else {
            $('#spanappend').html("0");
            $append.hide();
        }
    }
    else {
        if (parseInt($('#spanappend').html()) > 10) {
            $('#spanappend').html(parseInt($('#spanappend').html()) - parseInt(data.d.length));
        }
        else {
            $('#spanappend').html("0");
            $append.hide();
        }
    }
    return false;
}
function Assignphotos() {
   

    //if (getallcheckboxvalues('Chkprofileid') == null || getallcheckboxvalues('Chkprofileid') == "") {
    if ($('#Chkprofileid').prop('checked')) {
        DynamicTimeAlert('please Select assigned Profileid', 'alert alert-danger', '3000');
        return false;
    }
    else if (getvalues('#lstemployees') == null || getvalues('#lstemployees') == "") {
        DynamicTimeAlert('please Select assigned Employee', 'alert alert-danger', '3000');
        return false;
    }
    else {
        var inputObj = {
            Mobj: {
                EmpID: getvalues('#lstemployees'),
                AllPhotoids: getallcheckboxvalues('Chkprofileid')
            }
        };
        var data = CallApi("UnassignedPhoto_New.aspx/Assignphotos", inputObj);
        if (data != null && data != undefined && data.d != undefined) {
            if (data.d == 1) {
                DynamicTimeAlert('Assigned Successfully', 'alert alert-success', '3000');
                flags = '0';
                GetUnassignedPhotos('0', 1, 10);
            }
            else {
                DynamicTimeAlert('Assigned Fail', 'alert alert-danger', '3000');
            }
        }
    }
    return false;
}
function getallcheckboxvalues(chkboxlist) {
    var value = ($("input[name=" + chkboxlist + "]:checked").map(function () {
        return this.value;
    }).get().join(","));
    return value != "" ? value : null;
}
$(function () {
    $('.page-list').attr('style', 'display:block;');
    commonbindmaster();

   
    $append.click(function () {

        pagesizec = parseInt(($(".page-size").html()));
        from = flag + 1;
        flag = to = flag + pagesizec;
        console.log($(".page-size").html());
        GetUnassignedPhotos('1', from, to);
        return false;

    });
});
function chkboxprofileds() {

    if ($('#Allchk').prop('checked')) {
        $(".chkclassall").prop("checked", true);
    }
    else {
        $(".chkclassall").prop("checked", false);
    }

    return false;
}
function commonbindmaster() {

    var Bindings = {
        Masterbind: {

            Branch: "Branch",
            OnlyEmpname: "EmpnameswithNoCondition"
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var methodnames = [
       { methodname: "Branch", dropdownname: "ddlBranch", data: data.d.Branch },
        { methodname: "EmpnameswithNoCondition", dropdownname: "lstemployees", data: data.d.OnlyEmpname },
        //{ methodname: "Region", dropdownname: "ddlregion", data: RegionArr },
    ];
    for (var i = 0; i < methodnames.length; i++) {
        GetmasterDataNew(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
    }

    StaticBind("ddlregion", RegionArr);
    BindBasedOnDiv("divCaste", "ddlCaste");
    return false;
}
function Reset() {
    $ToTable.bootstrapTable('removeAll');
    $('#totalrecords').html('');
    $('input[type=text]').val('');
    $(".multiple").multiselect("clearSelection");
    Resetforradiobuttons("PhotoassignedID");
    Resetforradiobuttons("GenderID");
    Resetforradiobuttons("PhotoStatus");
    $("#uniform-undefined > span").removeClass('checked');
    $('#ddlBranch').multiselect('select', [0]);
    SelectvalueforRadiobuttons("PhotoassignedID", 2);
    SelectvalueforRadiobuttons("GenderID", 0);
    SelectvalueforRadiobuttons("PhotoStatus", 2);
    $('input[type=checkbox]').attr('checked', false);
    $('#lstemployees').multiselect('select', [0]);
    document.getElementById("Divtotalrows").style.display = "none";
    document.getElementById("assignbtndiv").style.display = "none";
    document.getElementById("appenddivbtn").style.display = "none";

    return false;
}
function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space 
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}