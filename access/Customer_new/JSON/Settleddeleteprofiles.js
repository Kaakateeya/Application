var Genderid, typepage = 0;
$(function () {
    settleddeleteprofileshideshow();
    Bindsingledropdowns();
    $('input[type=radio][name=rbtnsettletype]').on('change', function () {
        typepage = $(this).val();
        if ($(this).val() == 0) {

            $('#headsettleddeleteprofiles').html("Settled Profiles");
            document.getElementById("lblSendMail").style.display = "none";
            $('#lbldelsetprofileid').html("Settled profile ID<span style='color: red; margin-left: 3px;'>*</span>");
            $('#lblDeletedowner').html("Settled profile owner");
            document.getElementById("divsettledwithprofile").style.display = "block";
            document.getElementById("divwithprofileowner").style.display = "block";
            $('#lblDeletedbyrelation').html("Relationship name");
            document.getElementById("allclassnamedivs").style.display = "none";
            document.getElementById("diveducaprofession").style.display = "none";
            document.getElementById("divinformedby").style.display = "block";
            document.getElementById("btnsubmit").style.display = "block";
            document.getElementById("btndelete").style.display = "none";
            $('#lblmarriagedate').html("Marriage date<span style='color: red; margin-left: 3px;'>*</span>");
            Resetallvalues();
        }
        else {
            $('#headsettleddeleteprofiles').html("Delete Profiles");
            document.getElementById("lblSendMail").style.display = "none";
            $('#lbldelsetprofileid').html("Deleted profile ID<span style='color: red; margin-left: 3px;'>*</span>");
            $('#lblDeletedowner').html("Deleted profile owner");
            document.getElementById("divsettledwithprofile").style.display = "none";
            document.getElementById("divwithprofileowner").style.display = "none";
            $('#lblDeletedbyrelation').html("Deletedby relation");
            document.getElementById("allclassnamedivs").style.display = "block";
            document.getElementById("diveducaprofession").style.display = "block";
            document.getElementById("divinformedby").style.display = "none";
            document.getElementById("btnsubmit").style.display = "none";
            document.getElementById("btndelete").style.display = "block";
            $('#lblmarriagedate').html("Marriage date");
            Resetallvalues();
        }
    });

    $(".Number").on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });
});



function settleddeleteprofileshideshow() {
    var val = $("input:radio[name='rbtnsettletype']:checked").val();
    typepage = val;
    if (val == 0) {

        $('#headsettleddeleteprofiles').html("Settled Profiles");
        document.getElementById("lblSendMail").style.display = "none";
        $('#lbldelsetprofileid').html("Settled profile ID<span style='color: red; margin-left: 3px;'>*</span>");
        $('#lblDeletedowner').html("Settled profile owner");
        document.getElementById("divsettledwithprofile").style.display = "block";
        document.getElementById("divwithprofileowner").style.display = "block";
        $('#lblDeletedbyrelation').html("Relationship name");
        document.getElementById("allclassnamedivs").style.display = "none";
        document.getElementById("diveducaprofession").style.display = "none";
        document.getElementById("divinformedby").style.display = "block";
        document.getElementById("btnsubmit").style.display = "block";
        document.getElementById("btndelete").style.display = "none";
        $('#lblmarriagedate').html("Marriage date<span style='color: red; margin-left: 3px;'>*</span>");
        Resetallvalues();
    }
    else {

        $('#headsettleddeleteprofiles').html("Delete Profiles");
        document.getElementById("lblSendMail").style.display = "block";
        $('#lbldelsetprofileid').html("Deleted profile ID<span style='color: red; margin-left: 3px;'>*</span>");
        $('#lblDeletedowner').html("Deleted profile owner");
        document.getElementById("divsettledwithprofile").style.display = "none";
        document.getElementById("divwithprofileowner").style.display = "none";
        $('#lblDeletedbyrelation').html("Deletedby relation");
        document.getElementById("allclassnamedivs").style.display = "block";
        document.getElementById("diveducaprofession").style.display = "block";
        document.getElementById("divinformedby").style.display = "none";
        document.getElementById("btnsubmit").style.display = "none";
        document.getElementById("btndelete").style.display = "block";
        $('#lblmarriagedate').html("Marriage date");
        Resetallvalues();
    }
    return false;
}

function CheckProfile(lbltext, txtbox, Empid, gender, custid, txtbox2, gender2) {
    $('#' + lbltext).html("Owner Name");
    $('#' + Empid).html("");
    $('#' + gender).html("");
    $('#' + custid).html("");
    var profileid = $('#' + txtbox).val();
    if ($('#' + txtbox).val() != $('#' + txtbox2).val()) {
        if (profileid != "" && profileid != null) {
            var chkprofile = CallApi("SettledDeleteProfilesNew.aspx/Chkprofileidstatus", { Profileid: profileid });

            if (chkprofile != undefined && chkprofile != null) {
                Getstatusalert(chkprofile, profileid, lbltext, Empid, gender, custid, txtbox);
                if ($('#' + gender).text() != "" && $('#' + gender).text() != null && $('#' + gender).text() == $('#' + gender2).text()) {
                    $('#' + txtbox).val("");
                    $('#' + lbltext).html("Owner Name");
                    ShowOnlyAlertText('Sorry Same Gender', 'alert alert-danger');
                }
            }

        }
    }
    else if ($('#' + txtbox).val() != "" && $('#' + txtbox).val() != null && $('#' + txtbox).val() == $('#' + txtbox2).val()) {
        $('#' + txtbox).val("");
        ShowOnlyAlertText('Sorry Same profile ID Given', 'alert alert-danger');
    }

    return false;
}
function Getstatusalert(data, profileid, lbltext, Empid, gender, custid, txtbox) {
    var GetProfileOwner;
    switch (data.d.Item1) {
        case 0:
            if ($("input:radio[name='rbtnsettletype']:checked").val() == 1) {
                data.d.Item2 = 1;
            }
            if (data.d.Item2 == 1) {
                GetProfileOwner = CallApi("GetProfileOwnerNamebasedprofileid", { profileid: profileid });
                if (GetProfileOwner != undefined) {
                    $('#' + lbltext).html(GetProfileOwner.d.Item1);
                    $('#' + Empid).html(GetProfileOwner.d.Item2);
                    $('#' + gender).html(data.d.Item3);
                    $('#' + custid).html(data.d.Item4);
                }
            }
            else if (data.d.Item2 == 2) {
                ShowOnlyAlertText('The given profile  Does Not Contain Primary Email', 'alert alert-danger');
                $('#' + txtbox).val("");
            }
            break;
        case 1:
            ShowOnlyAlertText('The given profile is not active status', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 2:
            ShowOnlyAlertText('The given profile is not Reviewed', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 3:
            ShowOnlyAlertText('Invalid profile ID', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 4:
            ShowOnlyAlertText(' ' + profileid + '  profile is not yet allotted to any Employee', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 5:
            ShowOnlyAlertText('The given profile has been settled', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 6:
            ShowOnlyAlertText('The given profile has been deleted', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 7:
            ShowOnlyAlertText('The given profile is waiting for settled', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 8:
            ShowOnlyAlertText('The given profile is waiting for deleted', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;
        case 9:
            ShowOnlyAlertText('The given profile is in match meeting serious', 'alert alert-danger');
            $('#' + txtbox).val("");
            break;


        default:
            // ShowOnlyAlertText('The given profile is not active status', 'alert alert-danger');
            break;
    }
    return false;

}
function Bindsingledropdowns() {
    var Bindings = {
        Masterbind: {
            Relationship: "ChildStayingWith"
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var methodnames = [

                { methodname: "ChildStayingWith", dropdownname: "lstrelation", data: data.d.Relationship }
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

function getRelationshipnamae(ddlrelation, txtprofileid, txttoname) {
    var data;
    var BindNames = {
        Relation: {
            Relationshipid: $('#' + ddlrelation + ' option:selected').val() > 0 ? $('#' + ddlrelation + ' option:selected').val() : null,
            profileid: $('#' + txtprofileid).val(),
        }
    };
    if ($('#' + txtprofileid).val() != "Guest") {
        data = CallApi('GetRelationNamesShipOnCustID', BindNames);
        if (data != null && data.d != null && data.d != undefined) {

            if (data.d.FirstName != "" || data.d.LastName != "") {
                $('#' + txttoname + '').val(data.d.FirstName + " " + (data.d.LastName != null ? data.d.LastName : ""));
                $('#' + txttoname + '').attr("disabled", "disabled");
            }
            else {
                $('#' + txttoname + '').val("");
                $('#' + txttoname + '').removeAttr("disabled");
            }
        }
        else {
            $('#' + txttoname + '').val("");
            $('#' + txttoname + '').removeAttr("disabled");
        }
    }
    return false;
}


function submitsettledprofiles() {
    if ($('#txtdelsettleprofileid').val() == "" || $('#txtdelsettleprofileid').val() == null) {
        ShowOnlyAlertText('Please enter Settled Profile ID', 'alert alert-danger');
    }
    else if ($('#txtwithhdelsettleprofileid').val() == "" || $('#txtwithhdelsettleprofileid').val() == null) {
        ShowOnlyAlertText('Please enter Settled with Profile ID', 'alert alert-danger');

    }
    else if ($('#txtmarriagedate').val() == "" || $('#txtmarriagedate').val() == null) {
        ShowOnlyAlertText('Please enter Marriage Date', 'alert alert-danger');
    }
    else {
        var convertJSDate = function (dateTime) {
            var dateArr = dateTime.split("-");
            var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];

            date1 = (moment(date1).format('MM/DD/YYYY HH:MM:SS'));

            return date1;
        }
        var GroomCustID;
        var GroomEmpID;
        var BrideCustID;
        var BrideEmpID;
        if ($('#settlegenderid').text() == 1) {
            GroomCustID = $('#settledcustid').text();
            GroomEmpID = $('#delsettledempid').text();
            BrideCustID = $('#lblsettlewithcustid').text();
            BrideEmpID = $('#delsettledwithempid').text();

        }
        else {
            GroomCustID = $('#lblsettlewithcustid').text();
            GroomEmpID = $('#lblsettlewithcustid').text();
            BrideCustID = $('#settledcustid').text();
            BrideEmpID = $('#delsettledempid').text();
        }
        var mobj = {
            obj: {
                GroomCustID: GroomCustID != "" ? GroomCustID : null,
                GroomEmpID: GroomEmpID != "" ? GroomEmpID : null,
                BrideCustID: BrideCustID != "" ? BrideCustID : null,
                BrideEmpID: BrideEmpID != "" ? BrideEmpID : null,
                Engagementdate: $('#txtengagementdate').val() != "" ? convertJSDate($('#txtengagementdate').val()) : null,
                EngagementVenue: $('#txtengementvenue').val() != "" ? $('#txtengementvenue').val() : null,
                Marriagedate: $('#txtmarriagedate').val() != "" ? convertJSDate($('#txtmarriagedate').val()) : null,
                MarriageVenue: $('#txtmarriagevenue').val() != "" ? $('#txtmarriagevenue').val() : null,
                InformedBySide: $("input:radio[name='rbtninfoby']:checked").val() != "" ? $("input:radio[name='rbtninfoby']:checked").val() : null,
                InformedBy: getvalues('#lstrelation'),
                Narriation: $('#txtnarration').val() != "" ? $('#txtnarration').val() : null,
                EmpID: GetEmpid(),
                AuthorizeStatus: 0,
                SendMailfornew: $("input:radio[name='doyouwantsendmail']:checked").val() != "" ? $("input:radio[name='doyouwantsendmail']:checked").val() : null,
                Settleddate: $('#txtsettleddate').val() != "" ? convertJSDate($('#txtsettleddate').val()) : null
            }
        }
        var inputsettled = CallApi("SettledDeleteProfilesNew.aspx/Submitsettledprfiles", mobj);
        if (inputsettled != undefined && inputsettled != null && inputsettled.d != undefined && inputsettled.d != null) {
            if (inputsettled.d == 1) {
                ShowOnlyAlertText('Seleted submitted Successfully', 'alert alert-success');
                Resetallvalues();
                SelectvalueforRadiobuttons("rbtnsettletype", typepage);
            }
            else {
                ShowOnlyAlertText('Seleted submitted Failed', 'alert alert-danger');
            }
        }
    }
    return false;
}

function submitdeleteprofiles() {
    if ($('#txtdelsettleprofileid').val() == "" || $('#txtdelsettleprofileid').val() == null) {
        ShowOnlyAlertText('Please enter Deleted Profile ID', 'alert alert-danger');
    }

        //else if ($('#txtmarriagedate').val() == "" || $('#txtmarriagedate').val() == null) {
        //    ShowOnlyAlertText('Please enter Marriage Date', 'alert alert-danger');
        //}
    else {
        var convertJSDate = function (dateTime) {
            var dateArr = dateTime.split("-");
            var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];

            date1 = (moment(date1).format('MM/DD/YYYY HH:MM:SS'));

            return date1;
        }
        var custid = $('#settledcustid').text();
        var mobj = {
            objs: {
                Int64ProfileID: custid != "" ? custid : null,
                SendMail: $("#chkSendMail").is(":checked") ? 1 : 0,
                Engagementdate: $('#txtengagementdate').val() != "" ? convertJSDate($('#txtengagementdate').val()) : null,
                EngagementVenue: $('#txtengementvenue').val() != "" ? $('#txtengementvenue').val() : null,
                Marriagedate: $('#txtmarriagedate').val() != "" ? convertJSDate($('#txtmarriagedate').val()) : null,
                MarriageVenue: $('#txtmarriagevenue').val() != "" ? $('#txtmarriagevenue').val() : null,
                DelSurname: $('#txtSurname').val() != "" ? $('#txtSurname').val() : null,
                DelName1: $('#txtname').val() != "" ? $('#txtname').val() : null,
                DelFatherName: $('#txtFathername').val() != "" ? $('#txtFathername').val() : null,
                DelNative: $('#txtnative').val() != "" ? $('#txtnative').val() : null,
                DelEducation: $('#txteducation').val() != "" ? $('#txteducation').val() : null,
                DelProfession: $('#txtprofession').val() != "" ? $('#txtprofession').val() : null,
                DelReasonForDelete: $("input:radio[name='rbtnMarried']:checked").val() != "" ? $("input:radio[name='rbtnMarried']:checked").val() : null,
                DelRelationship: getvalues('#lstrelation'),
                DelRelationshipName: $('#txtnameoftherelation').val() != "" ? $('#txtnameoftherelation').val() : null,
                Narriation: $('#txtnarration').val() != "" ? $('#txtnarration').val() : null,
                EmpID: GetEmpid(),
                AuthorizeStatus: 0,
                SendMailfornew: $("input:radio[name='doyouwantsendmail']:checked").val() != "" ? $("input:radio[name='doyouwantsendmail']:checked").val() : null

            }

        }
        var inputsettled = CallApi("SettledDeleteProfilesNew.aspx/Submitdeletedprfiles", mobj);
        if (inputsettled != undefined && inputsettled != null && inputsettled.d != undefined && inputsettled.d != null) {
            if (inputsettled.d == 1) {
                ShowOnlyAlertText('Deleted submitted Successfully', 'alert alert-success');
                Resetallvalues();
                SelectvalueforRadiobuttons("rbtnsettletype", typepage);
            }
            else {
                ShowOnlyAlertText('Deleted submitted Failed', 'alert alert-danger');
            }
        }
    }
    return false;
}


function Resetallvalues() {
    
    $('input[type=text]').val('');
    $(".multiple").multiselect("clearSelection");
    Resetforradiobuttons("rbtnMarried");
    Resetforradiobuttons("rbtninfoby");
    Resetforradiobuttons("doyouwantsendmail");
    $('input[type=checkbox]').attr('checked', false);
    $('#txtnarration').val('');
    $('#lblownername').html('Owner Name');
    $('#lblsettleownername').html('Owner Name');
    $('#lstrelation').multiselect("clearSelection");
    $("#uniform-undefined > span").removeClass('checked');
    SelectvalueforRadiobuttons("rbtnsettletype", typepage);
    SelectvalueforRadiobuttons("doyouwantsendmail", 2);
    return false;
}