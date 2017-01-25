
var $ToTable = $('#ToTable1'), bootstrapTableHeight = 440, EmployeelistMainArray = [], SubmitFlag = 'Create', UpdatedEmpID = null, falsepageination = true;
$(document).ready(function () {
    BindBasedOnDiv('divSearchBranch', 'ddlSearchBranch');

    //CreateEmployeePage();
    //showDivs('list');
});

function CreateEmployee(empid) {

    //alert($("input:hidden[id$=hdnImagePath]").text());



    bootstrapTableHeight = 440;

    if ((SubmitFlag == 'Create' || SubmitFlag == 'Update') && ($('#txtfirstname').val() == '' || $('#txtlastname').val() == '' || $('#txtOfficialEmail').val() == '' ||
        getvalues('#ddlWorkingbranch') == null || $('#txtlandline').val() == '' || $('#txtOfficePhone').val() == '' ||
        getvalues('#ddlDesignation') == null || getvalues('#ddlLoginlocation') == null || $('#txtDateofJoining').val() == '' ||
        getvalues('#ddlFromHrs') == null || getvalues('#ddlFromMins') == null || getvalues('#ddlToHrs') == null ||
        getvalues('#ddlToMins') == null || $('#txtPersonalEmail').val() == '' || $('#txtPersonalphone').val() == '')) {
        ShowOnlyAlertText('Please enter all mandatory fields', 'alert alert-danger');

    }
    else {

        var submitdata = {
            Mobj: {
                FirstName: $('#txtfirstname').val()
                , LastName: $('#txtlastname').val()
                , OfficialEmailID: $('#txtOfficialEmail').val()
                , HomeBranchID: getvalues('#ddlWorkingbranch')
                , WorkPhone: $('#txtlandline').val()
                , OfficialCellPhone: $('#txtOfficePhone').val()
                , HomePhone: $('#txtPersonalphone').val()
                , PersonalEmailID: $('#txtPersonalEmail').val()
                , LoginName: $('#lblLoginName').text()
                , Password: $('#txtPassword').val()
                , Designation: getvalues('#ddlDesignation')
                , LoginLocation: getvalues('#ddlLoginlocation')
                , OfficeFromHrs: (getvalues('#ddlFromHrs') != null ? parseInt(getvalues('#ddlFromHrs')) - 1 : null) + ':' + getvalues('#ddlFromMins') + ':00'
                , OfficeToHrs: (getvalues('#ddlToHrs') != null ? parseInt(getvalues('#ddlToHrs')) : null) + ':' + getvalues('#ddlToMins') + ':00'
                , DayOff: getvalues('#ddlWeekoff')
                , DateofJoining: $('#txtDateofJoining').val() != '' ? returnCurentdate($('#txtDateofJoining').val()) : null//17-Aug-2016
                , DateofReleaving: null
                , ReportingMngrID: null
                , AnnualIncome: null
                , Country: getvalues('#ddlCountry')
                , State: getvalues('#ddlState')
                , District: getvalues('#ddlDistrict')
                , City: getvalues('#ddlCity')
                , CityOther: null//
                , Address: $('#txtAdress').val()
                , EducationCategory: getvalues('#ddlEducationcategory')
                , EducationGroup: getvalues('#ddlEducationgroup')
                , EducationSpecialization: getvalues('#ddlEducationSpecialisation')
                //, EmployeeImgPath: document.getElementById("UpImgload").value
                , CreatedEMPID: CallApi("GetEmpid", {}).d
                //, EMPID: empid == undefined ? null : empid
                , TypeOfEmployee: $("input:radio[name='EmpType']:checked").val() != undefined ? $("input:radio[name='EmpType']:checked").val() : null
                , isLoginAnywhere: $("#chkLoginAnyWhereID").attr("checked") ? true : false,
            }
            , loginname: $("input:hidden[id$=hdnloginName]").val(),
            ImgExtension: $('#ctl00_ContentPlaceHolder1_fuImage_ctl02').val()
        };

        if (SubmitFlag == 'Create') {
            submitdata.Mobj.EMPID = null;
            submitdata.Mobj.EmployeeImgPath = $("input:hidden[id$=hdnImagePath]").val();
        }
        else if (SubmitFlag == 'Update') {
            submitdata.Mobj.EmployeeStatus = 423;
            submitdata.Mobj.EMPID = UpdatedEmpID;
        }
        else if (SubmitFlag == 'Disable') {
            submitdata.Mobj.EmployeeStatus = 425;
            submitdata.Mobj.EMPID = empid;

        }
        else if (SubmitFlag == 'Delete') {
            submitdata.Mobj.EmployeeStatus = 424;
            submitdata.Mobj.EMPID = empid;

        }
        else if (SubmitFlag == 'Active') {
            submitdata.Mobj.EmployeeStatus = 423;
            submitdata.Mobj.EMPID = empid;
        }


        var resultdata = CallApi("EmployeeCreationNew.aspx/CreateEmployeeSubmit", submitdata);
        if (resultdata != null && resultdata != undefined) {
            if (SubmitFlag == 'Create') {
                statusAlert(resultdata.d, undefined, 'Employee creation done successfully', 'Employee creation failed');
                $('#ctl00_ContentPlaceHolder1_fuImage_ctl02').val('');
            }
            else if (SubmitFlag == 'Update') {
                statusAlert(resultdata.d, undefined, 'Employee Updation done successfully', 'Employee Updation failed');
            }
            else if (SubmitFlag == 'Disable') {
                statusAlert(resultdata.d, undefined, 'Employee disabled', 'Employee Updation failed');
            }
            else if (SubmitFlag == 'Delete') {
                statusAlert(resultdata.d, undefined, 'Employee deletion done successfully', 'Employee deletion failed');
            }
            else if (SubmitFlag == 'Active') {
                statusAlert(resultdata.d, undefined, 'Employee activation done successfully', 'Employee activation failed');
            }
            SubmitFlag = 'Create';
            $('#ddlWorkingbranch').next().find('button').removeAttr("disabled");
        }
        reset();
        showDivs('list');
    }
    showDivs('list');
    return false;
}


function getemployeeList() {

    var resultdata = CallApi("EmployeeCreationNew.aspx/GetEmployeeList", {
        mobj: {
            Empid: null,//CallApi("GetEmpid", {}).d,
            BranchIDs: getvalues('#ddlSearchBranch'),
            EmpStatus: getvalues('#ddlsearchEmpStatus')//$("input:radio[name='EmpStatus']:checked").val() != undefined && $("input:radio[name='EmpStatus']:checked").val() != '0' ? $("input:radio[name='EmpStatus']:checked").val() : null
            , EmpTypeIDs: getvalues('#ddlSearchEmpType')
            , isLoginanywhere: $("#chkLoginAnyWhereSearch").attr("checked") ? true : null,
        }
    });
    console.log(resultdata);

    if (resultdata != null && resultdata != undefined) {
        $('#lblSearchCount').show();

        $('#spCount').text(resultdata.d.length);
        BootstrapTableLoad(resultdata.d, $ToTable, ['CreatedByID', 'BranchID', 'DesignationID', 'LoginLocation', 'ReportingMngrID', 'CountryID', 'StateID', 'DistrictID', 'CityID', 'EducationCategoryID', 'EducationGroupID', 'EducationSpecializaionID', 'EmpID', 'Password', 'IsActive', 'LoginStatusID', 'CreatedByEmployeeName', 'FirstName', 'LastName', 'OfficialEmailID', 'BranchesName', 'BranchCode', 'WorkPhone', 'OfficialContactNumber', 'HomePhone', 'WorkingStartTIme', 'WorkingEndTIme',
            'WorkingEndTIme', 'DayOff', 'DateOfJoining', 'DateOfReleaving', 'ReportingMngrName', 'AnnualIncome', 'CountryName', 'StateName', 'DistrictName', 'CityName', 'CityOther', 'Address', 'EducationCategoryName', 'EducationGroupName', 'EducationSpecializaionName', 'isAdmin', 'CreatedDate', 'UserID', 'Email', 'IsActiveStatus', 'LoginStatus'], 640, 1000);

    }
}

//dropdown binding array
var DesignationArr = [{ value: 'Match Followup', Id: 1 }, { value: 'Payment', Id: 2 }, { value: 'Review', Id: 3 }, { value: 'Other', Id: 4 }, { value: 'Marketing', Id: 5 }];

var MinsArr = [{ value: '00', Id: '00' }, { value: '30', Id: '30' }];

var WeekDaysArr = [{ value: 'Monday', Id: '1' }, { value: 'Tuesday', Id: '2' }, { value: 'Wednesday', Id: '3' }, { value: 'Thursday', Id: '4' }, { value: 'Friday', Id: '5' }, { value: 'Saturday', Id: '6' }, { value: 'Sunday', Id: '7' }];


function getLoginName() {
    if (getvalues('#ddlWorkingbranch') != 0 && getvalues('#ddlWorkingbranch') != null) {
        $('#divLogInName').show();
        $('#divPassword').show();
        var resultdata = CallApi("EmployeeCreationNew.aspx/getLoginName", { intHomeBrchID: getvalues('#ddlWorkingbranch') });
        $('#lblLoginName').text(resultdata.d);
        $("input:hidden[id$=hdnloginName]").val(resultdata.d);
        $('#uploadDiv').attr('style', 'display:block');
        return false;
    }
    else {

        $('#divLogInName').hide();
        $('#divPassword').hide();
        $("input:hidden[id$=hdnloginName]").val('');
        $('#uploadDiv').attr('style', 'display:none');

    }
    return false;
}


function GetUploadedImage() {
    var resultdata = CallApi("EmployeeCreationNew.aspx/GetUploadedImage", {});
}


function CreateEmployeePage() {
    showDivs('list');
    bindings();

    return false;
}

function bindings() {

    BindBasedOnDiv('createEmployeeDiv', 'ddlCountry');
    BindBasedOnDiv('divddlWorkingbranch', 'ddlbackend');
    getnumberbind('ddlFromHrs', 1, 23, 'Hr', 1);
    getnumberbind('ddlToHrs', 1, 23, 'Hr', 1);

    GetmasterDataNew1('Designation', 'ddlDesignation', DesignationArr);
    GetmasterDataNew1('Minutes', 'ddlFromMins', MinsArr);
    GetmasterDataNew1('Minutes', 'ddlToMins', MinsArr);
    GetmasterDataNew1('Weekdays', 'ddlWeekoff', WeekDaysArr);

    var Bindings = {
        Masterbind: {
            Branch: "Branch",
        }
    }

    var data = CallApi("CommonPopulateDropDownList", Bindings);

    var methodnames = [{ methodname: "Branch", dropdownname: "ddlWorkingbranch", data: data.d.Branch }];

    GetmasterDataNew('Branch', 'ddlWorkingbranch', data.d.Branch);

    return false;
}


function returnCurentdate(strdate) {

    var monthNames = [
     "Jan", "Feb", "Mar",
       "Apr",
       "May",
       "Jun",
       "Jul",
       "Aug",
       "Sep",
       "Oct",
       "Nov",
       "Dec"
    ];

    var currentdate;
    if (strdate.indexOf(':') != -1) {
        var d1 = strdate.split(' ');
        var monthname = (d1[1]);
        var monthNum = parseInt(monthNames.indexOf(monthname)) + 1;
        currentdate = monthNum + '/' + d1[0] + '/' + d1[2];
    }
    else if (strdate.indexOf('/') != -1) {
        var d1 = strdate.split('/');
        var MonthNum = parseInt(d1[0]) - 1;
        currentdate = d1[0] + '-' + d1[1] + '-' + d1[2];
    }
    return currentdate;
}


function GetPhoto() {
    alert($('#ctl00_ContentPlaceHolder1_hdnloginName').text());
    $('#UploadPopup').modal({ backdrop: 'static' });
    return false;
}
function AssignCounts(empid, firstname, lastname) {
    $('#lblAssignEmp').text(firstname + ' ' + lastname);

    $('#lblAssignEmpID').text(empid);

    GetEmpCounts(empid)
    $('#AssignPopup').modal({ backdrop: 'static' });

}

function GetEmpCounts(empid) {

    var counts = CallApi("EmployeeCreationNew.aspx/GetEmpCounts", { iEmpID: empid });
    if (counts != null && counts != undefined && (counts.d.servicegivencount != 0 || counts.d.matchfollowupcount != 0
        || counts.d.marketingticketscount != 0 || counts.d.PhotoCount != 0 || counts.d.HoroCount != 0)) {
        $('#btnAssign').text('Update');
        $('#txtservicegivencount').val(counts.d.servicegivencount);
        $('#txtmatchfollowupcount').val(counts.d.matchfollowupcount);
        $('#txtmarketingticketscount').val(counts.d.marketingticketscount);
        $('#txtPhotoCount').val(counts.d.PhotoCount);
        $('#txtHoroCount').val(counts.d.HoroCount);
    }
    else {
        $('#btnAssign').text('Submit');
        $('#txtservicegivencount').val(0);
        $('#txtmatchfollowupcount').val(0);
        $('#txtmarketingticketscount').val(0);
        $('#txtPhotoCount').val(0);
        $('#txtHoroCount').val(0);
    }


}


function AssignSubmit() {

    var counts = CallApi("EmployeeCreationNew.aspx/AssignCountsSubmit", {
        Mobj: {
            EmpName: $('#lblAssignEmp').text()
            , CreatedEMPID: $('#lblAssignEmpID').text()
            , servicegivencount: $('#txtservicegivencount').val()
            , matchfollowupcount: $('#txtmatchfollowupcount').val()
            , marketingticketscount: $('#txtmarketingticketscount').val()
            , PhotoCount: $('#txtPhotoCount').val()
            , HoroCount: $('#txtHoroCount').val()
        }
    });
    if (counts.d == 2) {
        $('#AssignPopup').modal('hide');
        ShowOnlyAlertText('Updated Successfully', 'alert alert-success');
    }
    else {
        statusAlert(counts.d, 'AssignPopup', 'Work assigned Successfully', 'Work assigning failed');
    }
}

function EditEmployee(empid) {
    UpdatedEmpID = empid;
    SubmitFlag = 'Update';
    BindSelctedVals(empid);
    $('#tabs li').removeAttr('class');
    $('#tabs li:first').addClass('active');
    $('#createEmployeeDiv').show();
    $('#updatediv').hide();
    $('#uploadDiv').attr('style', 'display:block;');
    $('#ddlWorkingbranch').next().find('button').attr("disabled", "disabled");


    return false;
}
function deleteDisable(empid, status) {

    SubmitFlag = status;
    BindSelctedVals(empid);
    CreateEmployee(empid);
    showDivs('create');
    return false;
}

function BindSelctedVals(empid) {
    bindings();

    var resultdata = CallApi("EmployeeCreationNew.aspx/GetEmployeeList", {
        mobj: {
            Empid: empid,
            BranchIDs: null,
            EmpStatus: null,
            EmpTypeIDs: null
        }
    });
    _.each(resultdata.d, function (item) {

        $('#txtfirstname').val(item.FirstName);
        $('#txtlastname').val(item.LastName);
        $('#txtOfficialEmail').val(item.OfficialEmailID);
        $('#ddlWorkingbranch').multiselect('select', [item.BranchID]);
        $('#txtlandline').val(item.WorkPhone);
        $('#txtOfficePhone').val(item.OfficialContactNumber);
        $('#ddlDesignation').multiselect('select', [item.DesignationID]);

        $('#ddlLoginlocation').multiselect('select', [item.LoginLocation]);
        var FromHrsArr = (item.WorkingStartTIme).split(' ');
        $('#ddlFromHrs').multiselect('select', [(FromHrsArr[1]).split(':')[0]]);
        $('#ddlFromMins').multiselect('select', [(FromHrsArr[1]).split(':')[1]]);
        var ToHrsArr = (item.WorkingEndTIme).split(' ');
        $('#ddlToHrs').multiselect('select', [(ToHrsArr[1]).split(':')[0]]);
        $('#ddlToMins').multiselect('select', [(ToHrsArr[1]).split(':')[1]]);
        $('#ddlWeekoff').multiselect('select', [item.DayOff]);

        $('#txtDateofJoining').val(returnCurentdate(item.Created_Date));
        $('#ddlCountry').multiselect('select', [item.CountryID]);
        binddependency('State', '.lstCountrylivingin1', '.lstStatelivingin1', '')
        $('#ddlState').multiselect('select', [item.StateID]);
        binddependency('District', '.lstStatelivingin1', '.lstdistrict1', '')
        $('#ddlDistrict').multiselect('select', [item.DistrictID]);
        binddependency('City', '.lstdistrict1', '.lstcity1', '')
        $('#ddlCity').multiselect('select', [item.CityID]);
        $('#txtAdress').val(item.Address);
        $('#txtPersonalEmail').val(item.Email);
        $('#txtPersonalphone').val(item.HomePhone);
        $('#ddlEducationcategory').multiselect('select', [item.EducationCategoryID]);
        binddependency('EducationGroup', '.lstEducationcategory', '.lstEducationGroup', '')
        $('#ddlEducationgroup').multiselect('select', [item.EducationGroupID]);
        binddependency('EducationSpelization', '.lstEducationGroup', '.lstEducationSpecialisation', '')
        $('#ddlEducationSpecialisation').multiselect('select', [item.EducationSpecializaionID]);
        Resetforradiobuttons('EmpType');
        SelectvalueforRadiobuttons("EmpType", (item.isAdmin != 0 && item.isAdmin != null) ? item.isAdmin : '');
        $("#hdnEmpStatus").val(item.IsActive);
        if (item.isLoginanywhere == true) {
            $('#chkLoginAnyWhereID').prop('checked', true);
        }
        else {
            $('#chkLoginAnyWhereID').prop('checked', false);
        }



    });

    showDivs('create');
}

function reset() {

    $('select').each(function (index, item) {
        var id = $(item).attr("id");

        if (id != 'ddlsearchEmpStatus') {
            $("#" + id).multiselect("clearSelection");
        }
    });
    $('input[type=text]').each(function (index, item) {
        var id = $(item).attr("id");
        $("#" + id).val('');
    });
}


function showDivs(type) {
    if (type == 'create') {
        $('#tabs li').removeAttr('class');
        $('#tabs li:last').addClass('active');
        $('#createEmployeeDiv').hide();
        $('#updatediv').show();
    }
    else {
        $('#tabs li').removeAttr('class');
        $('#tabs li:first').addClass('active');
        $('#createEmployeeDiv').show();
        $('#updatediv').hide();
    }
    $('#txtAdress').val('');
    false;
}

function mailVali(e) {
    var id = e.id;
    var txtUserNames = $("#" + id).val();
    if (!ValidateEmail(txtUserNames)) {
        $("#" + id).val('');
        $("#" + id).focus;
        alert(" Please enter valid Email");
        return false;
    }

}
function ValidateEmail(email) {
    var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return expr.test(email);
};


function EmpPhotoSlide(url) {
    //$('#ctl00_imghoropopup').attr('src', "" + url + "");
    //$('#horoscopepopup').modal({ backdrop: 'static' });



    $("#slideshow").carousel("pause").removeData();
    $(".carousel-indicators").html("");

    $("#Ajaxbind").html("<div class='item active'><img src='" + url + "'></div>");

    $('#slideshow').carousel(0);


    $('#slidephoto').modal({ backdrop: 'static' });




    return false;
}

function getphoto(str) {
    alert(123);
    $("input:hidden[id$=hdnImagePath]").val(str);
    alert($("input:hidden[id$=hdnImagePath]").val());
    return false;
}