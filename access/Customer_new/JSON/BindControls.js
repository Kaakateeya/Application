
//class based bindings not id's

function getclasslabel(classname) {
    var classlabel;
    switch (classname) {

        case "ChildStayingWith":
            classlabel = "Relationship";
            break;

        case "BothsideEmail":
            classlabel = "replyType";
            break;

        case "EmpnameswithNoCondition":
            classlabel = "OnlyEmpname";
            break;

        case "onlyRegionmaster":
            classlabel = "Region";
            break;
        default:
            classlabel = classname;
            break;

    }
    return classlabel;
}

$(function () {

    //setTimeout(BindcontrolsBasedonclass, 2500);

    // BindcontrolsBasedonclass();
});


function BindcontrolsBasedonclass() {
   
    var IDs = [], ClassNames = {};

    $('select').each(function (index, item) {

        var classarr = $(item).attr("class");
        if (classarr != undefined && classarr != "") {
            var classnameArr = classarr.split(" ");
            IDs.push({ id: index, IdNames: $(item).attr("id"), classname: classnameArr[0] });
            ClassNames[getclasslabel(classnameArr[0])] = classnameArr[0];
        }
    });
    getdata(IDs, ClassNames);
    pageloadPopulating();
    return false;
}
function getdata(IDs, ClassNames, divid) {
   
    
    var Bindings = {
        Masterbind: ClassNames
    }

    //var dataplus = JSON.parse(localStorage.getItem(divid));

    //if (divid==undefined || dataplus == undefined || dataplus == null) {
        var data = CallApi("CommonPopulateDropDownList", Bindings);
        localStorage.setItem(divid, JSON.stringify(data));
        $.each(IDs, function (key, value) {
            GetmasterDataNew1(value.classname, value.IdNames, (data.d[getclasslabel(value.classname)]));
        });
    //}
    //else {
    //    $.each(IDs, function (key, value) {
    //        GetmasterDataNew1(value.classname, value.IdNames, (dataplus.d[getclasslabel(value.classname)]));
    //    });
    //}
}

function pageloadPopulating() {
    $('#ddlreligionid').multiselect('select', ['1'], true);
    $('#lstMothertongue').multiselect('select', ['1'], true);
    binddependency('Caste', '.lstMothertongue', '.lstCaste', '.ddlreligionid')
    $('#lstapplicationstatus').multiselect('select', [54], true);
    ApplyColorValueContainsSelect();
}


function GetmasterDataNew1(masterrname, dropdownname, data) {
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true,
        nonSelectedText: 'Any',
        allSelectedText: 'All Selected',
        selectAllText: 'Check all!',
        disableIfEmpty: true
    };
    if (data != null && data != undefined && data.length > 0) {

        var options = [];


        if (!$("#" + dropdownname).hasClass("multiple")) {
            options.push({ label: "--Select--", title: "--select--", value: "0" });
        }
        if (data.length > 0) {

            $.each(data, function (key, value) {

                if (masterrname == "Height") {

                    if (parseInt(value.Id) > 8) {
                        options.push({ label: value.value, title: value.value, value: value.Id });
                    }
                }
                else if (masterrname != "BranchWithEmp") {
                    options.push({ label: value.value, title: value.value, value: value.Id });
                }
                else {

                    options.push({ label: value.ParentName, children: value.groupData });
                }

            });

            $('.' + masterrname + '').multiselect('dataprovider', options);
            $('.' + masterrname + '').multiselect('setOptions', secondConfigurationSet);
            $('.' + masterrname + '').multiselect('rebuild');
        }
    }
    else {
        if (dropdownname != "ddlModeofservice") {
            $('.' + masterrname + '').multiselect('setOptions', secondConfigurationSet);
            $('.' + masterrname + '').multiselect('rebuild');
        }
    }
}

function BindBasedOnDiv(divID, ddlID) {
   
    
    if (ddlID != undefined && $('#' + ddlID).has('option').length == 0) {

        document.getElementById("divloadercontrols").style.display = "block";
        var IDs = [], ClassNames = {};
        $('#' + divID).find('select').each(function (index, item) {
            var classarr = $(item).attr("class");
            if (classarr != undefined && classarr != "") {
                var classnameArr = classarr.split(" ");
                IDs.push({ id: index, IdNames: $(item).attr("id"), classname: classnameArr[0] });
                ClassNames[getclasslabel(classnameArr[0])] = classnameArr[0];
            }
        });

        getdata(IDs, ClassNames, divID);
        document.getElementById("divloadercontrols").style.display = "none";
    }
}