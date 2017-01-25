var $table = $('#GridTablekeyword'), $append = $('.append'), flag = 10, rows, pagesizec = 10;
function Bindsingledropdowns() {
    var Bindings = {
        Masterbind: {

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
                    { methodname: "EmpnameswithNoCondition", dropdownname: "lstOwneroftheProfile", data: data.d.OnlyEmpname }
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


var removeObjs = ['Emp_Group_ID', 'GroupedEmpId'];

function allemployeesgrade() {
    var datagrouppage = {
        Mobj: {
            Loginempid: null,
            GroupingEmpid: null,
            Grade: null

        }
    };
    var data = CallApi("EmployeeBlockedPage.aspx/GetAllEmployeeGrades", datagrouppage);
    
    console.log(JSON.stringify(data.d));
    BootstrapTableLoad(data.d, $table, removeObjs);
    return false;
}
$(function () {
    Bindsingledropdowns();
    allemployeesgrade();

});

function submitgroup() {

    var datagroup = {
        Mobj: {
            Loginempid: GetEmpid(),
            GroupingEmpid: getvalues('#lstOwneroftheProfile'),
            Grade: $("input:radio[name='Grade']:checked").val()

        }
    }

    var status = CallApi("EmployeeBlockedPage.aspx/GetAllEmployeeGrades", datagroup);
    
    statusAlertblock(status.d, undefined, 'Submitted SuccessFully', 'Submitted failed');
    BootstrapTableLoad(status.d, $table, removeObjs);
    return false;

}


function getallcheckboxvalues(chkboxlist) {

    var value = ($("input[name=" + chkboxlist + "]:checked").map(function () {
        return this.value;
    }).get().join(","));
    return value != "" ? value : null;
}

function statusAlertblock(status, PopupID, strsuccess, strfail) {

    if (PopupID != undefined) {
        $('#' + PopupID).modal('hide');
    }
    if (parseInt(status) == parseInt(1)) {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
    else if (parseInt(status) == parseInt(2)) {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
    else {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
}