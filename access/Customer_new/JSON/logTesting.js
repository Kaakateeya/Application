var replycontext = [];
var datarelation = [];
var dataEmp = [];
var datareplyType = [];
var datain;
var empidObj;
var Numberfalg;
var profileidflag;
var falsepageination = true;
var datatbaleoptionsmore = {
    exportDataType: 'all',
    maintainSelected: true,
    smartDisplay: true,
    showFooter: false,
    cache: false,
    escape: true,
    showHeader: true,
    showToggle: false,
    detailView: false,
    onlyInfoPagination: false,
    striped: true,
    showColumns: false,
    showExport: false,
    search: false,
    pagination: true,
    classes: "table table-striped",
    pageSize: "10",
    height: 200,
    mobileResponsive: "true"
},

$tableFirst = $('#ToTable'),
$tableSecond = $('#FromTable'),
 $tablethrid = $('#ResendMailTable')
function setColumns(test) {
    var arrayyy = [];
    _.each(test, function (item, index) {
        var obj = {};

        obj.field = item;
        obj.title = item;
        obj.sortable = true;
        obj.searchable = true;
        obj.visible = true;
        obj.switchable = true;
        arrayyy.push(obj);
    });
    return arrayyy;
}
$(function () {

    document.getElementById("divCommunication").style.display = "block";
    document.getElementById("liassignemp").style.display = "none";
    empidObj = CallApi("GetEmpid", {});
    // BindBasedOnDiv("divIncomingCall", "ddlmrktreceivedfrom");
    var wage = document.getElementById("txtFromProfile");
    wage.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {

            if (Profile.value == "" || Profile.value == null) {
                alert("Please enter profile ID");
                return false;
            }
        }
    });

});


var $ToTable = $('#ToTable')
, $FromTable = $('#FromTable')
, $ResendMailTable = $('#ResendMailTable')
, bootstrapTableHeight = 440;
var ProfileOwner1 = 0, FromCustID, Admin;
function bindGrid() {
    var Profile = document.getElementById("txtFromProfile");
    if (Profile.value == "" || Profile.value == null) {
        alert("Please enter profile ID");
    }
    else {
        $ToTable.bootstrapTable('removeAll');
        $FromTable.bootstrapTable('removeAll');
        $ResendMailTable.bootstrapTable('removeAll');
        $('#lbl_f_count').text('Grid Count : ' + 0);
        $('#lbl_s_count').text('Grid Count : ' + 0);
        $('#lbl_t_count').text('Grid Count : ' + 0);

        var data = callData();
        $('#Div_profile_was_sent').attr('style', 'display:' + (data[0].log.length > 0 ? 'block' : 'none') + '');
        $('#Div_you_contacted').attr('style', 'display:' + (data[1].log.length > 0 ? 'block' : 'none') + '');
        $('#Div_mails_has_resent').attr('style', 'display:' + (data[2].log.length > 0 ? 'block' : 'none') + '');


        if (data[0].CustomerName != undefined && data[0].CustomerName != null) {
            $('#lblCustName').text(data[0].CustomerName);
            FromCustID = data[0].CustID;
        }
        if (data[0].log.length > 0) {
            $('#lbl_f_count').text('Grid Count : ' + data[0].log[0].TotalRows);
            BootstrapTableLoad(proceedconversion(data[0].log), $ToTable, ['ResendDate', 'Emp_FollowupTicket_ID', 'Options', 'dateorder', 'ProfileStatusID', 'TicketStatusID', 'TotalRows', 'MFPStatus', 'ExpressInterestID', 'LogID', 'ISRvrSend'], bootstrapTableHeight, 2000);
        }
        if (data[1].log.length > 0) {
            var secondArray = proceedconversion(data[1].log);
            _.map(secondArray, function (item) {
                item.FromProfileID = Profile.value;
            });
            $('#lbl_s_count').text('Grid Count : ' + data[1].log[0].TotalRows);
            BootstrapTableLoad(secondArray, $FromTable, ['ResendDate', 'Emp_FollowupTicket_ID', 'dateorder', 'ProfileStatusID', 'TicketStatusID', 'TotalRows', 'MFPStatus', 'ExpressInterestID', 'LogID', 'ISRvrSend', 'FromProfileID'], bootstrapTableHeight, 2000);
        }
        if (data[2].log.length > 0) {
            $('#lbl_t_count').text('Grid Count : ' + data[2].log[0].TotalRows);
            BootstrapTableLoad(proceedconversion(data[2].log), $ResendMailTable, ['Options', 'dateorder', 'ProfileStatusID', 'TotalRows', 'MFPStatus', 'MFPStatusDate', 'TicketID', 'Emp_FollowupTicket_ID', 'TicketStatusID', 'ProfileOwner', 'ExpressInterestID', 'LogID', 'ISRvrSend'], bootstrapTableHeight, 2000);
        }
    }

    ProfileOwner1 = (CallApi('ownerid', { custid: FromCustID })).d;
    Admin = (CallApi('AdminID', {})).d;



    return false;
}
function callData() {

    var logInput = {
        mobj: {
            ProfileID: $('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : null,
        }
    };
    var data = (CallApi('CommunicationLogEmployee.aspx/LogSubmit', logInput)).d;

    return data;

}

function proceedconversion(array) {
    var SNum = 1;
    //var dd = "";
    _.map(array, function (item) {
        if (item.MFPStatus != null) {
            //   item.MFPStatus = item.MFPStatus == 'I' ? 'Proceed' : (item.MFPStatus == 'NI' ? 'Dont Proceed' : (item.MFPStatus == 'NV' ? 'Not viewed' : (item.MFPStatus == 'V' ? 'Viewed' : "")));
            var strMFPStatus = $.trim(item.MFPStatus);

            item.MFPStatus = strMFPStatus == 'I' ? 'Proceed' : (strMFPStatus == 'NI' ? 'Dont Proceed' : (strMFPStatus == 'NV' ? 'Not viewed' : (strMFPStatus == 'V' ? 'Viewed' : "")));
        }
        item.dateorder = moment(item.ServiceDate).format('YYYY/MM/DD h:mm a');
    });
    // array = _.sortBy(_.sortBy(array, 'dateorder'), 'dateorder').reverse();
    _.map(array, function (item) {
        item.Sno = SNum;

        //if (item.ProfileStatusID == 54) {

        //    dd = "</br><a href='javascript:void(0)' onclick='return photossent(" + JSON.stringify(row.ProfileID) + ");'>Photos</a>";
        //}
        SNum++;
    });
    return array;
}


function Bindsingledropdowns() {
    var Bindings = {
        Masterbind: {
            Relationship: "ChildStayingWith",
            replyType: "BothsideEmail",
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
                     { methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedby", data: data.d.Relationship },
                   { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeout", data: replyddl },
                    { methodname: "ChildStayingWith", dropdownname: "ddlmrktreceivedfrom", data: data.d.Relationship },
                   { methodname: "BothsideEmail", dropdownname: "ddlmrktReplyType", data: replyddl },
                    { methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktempmemo", data: data.d.OnlyEmpname },
                    { methodname: "EmpnameswithNoCondition", dropdownname: "ddlmrktAssingnEmp", data: data.d.OnlyEmpname },
                    { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypeCloseticket", data: replyddl },
                    { methodname: "BothsideEmail", dropdownname: "ddlmrktreplytypememo", data: replyddl },
                    { methodname: "BothsideEmail", dropdownname: "lstmails", data: replyddl },
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

function statusAlert(status, PopupID, strsuccess, strfail) {

    if (PopupID != undefined) {
        $('#' + PopupID).modal('hide');
    }
    if (parseInt(status) == parseInt(1)) {
        ShowOnlyAlertText(strsuccess, 'alert alert-success');
    }
    else {
        ShowOnlyAlertText(strfail, 'alert alert-danger');
    }
}
function bindCalldiscussion(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);

}

function submitInCalls(e) {

    if ($('#ddlmrktreceivedfrom').val() == 0 || $('#ddlmrktCallresult').val() == 0
        || $('#ddlmrktReplyType').val() == 0 || $('#txtmrktRelationname').val() == '' || $('#txtmrktCalltelephonenumber').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }


    else {

        datain = {
            Mobj: {
                CallType: 377,
                RelationID: $('#ddlmrktreceivedfrom option:selected').val() != "" ? $('#ddlmrktreceivedfrom option:selected').val() : null,
                RelationName: $('#txtmrktRelationname').val() != "" ? $('#txtmrktRelationname').val() : null,
                CallResult: $('#ddlmrktCallresult option:selected').val() != "" ? $('#ddlmrktCallresult option:selected').val() : null,
                PhoneNum: $('#txtmrktCalltelephonenumber').val() != "" ? $('#txtmrktCalltelephonenumber').val() : null,
                CallDiscussion: $('#txtmrktCalldiscussionin').val() != "" ? $('#txtmrktCalldiscussionin').val() : null,
                DisplayStatus: $("input:radio[name='displaycustomermrkt']:checked").val() == 1 ? true : false,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                Replaytypeid: $('#ddlmrktReplyType option:selected').val() != "" ? $('#ddlmrktReplyType option:selected').val() : null

            }
        }

        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain)

        statusAlert(status.d, 'ActionPopup', 'Incoming Call Created successfully', 'Incoming Call updation failed');

        cleartxtboxes('txtmrktRelationname');
        cleartxtboxes('txtmrktCalltelephonenumber');
        cleartxtboxes('txtmrktCalldiscussionin');

        Resetforradiobuttons("displaycustomermrkt");


        $('#ddlmrktreceivedfrom').multiselect('select', ['0']);

    }
    return false;
}

function submitOutCalls(e) {

    if ($('#ddlmrktreceivedby').val() == 0 || $('#ddlmrktcallresultout').val() == 0
       || $('#ddlmrktreplytypeout').val() == 0 || $('#txtmrktRelationnameout').val() == '' || $('#txtmrktCalltelephonenumberout').val() == '') {
        DynamicTimeAlert('Please enter all mandatory values', 'alert alert-danger', 4000);
    }
    else {


        datain = {
            Mobj: {
                CallType: 378,
                RelationID: $('#ddlmrktreceivedby option:selected').val() != "" ? $('#ddlmrktreceivedby option:selected').val() : null,
                RelationName: $('#txtmrktRelationnameout').val() != "" ? $('#txtmrktRelationnameout').val() : null,
                CallResult: $('#ddlmrktcallresultout option:selected').val() != "" ? $('#ddlmrktcallresultout option:selected').val() : null,
                PhoneNum: $('#txtmrktCalltelephonenumberout').val() != "" ? $('#txtmrktCalltelephonenumberout').val() : null,
                CallDiscussion: $('#txtmrktCalldiscussionout').val() != "" ? $('#txtmrktCalldiscussionout').val() : null,
                DisplayStatus: $("input[name='displaycustomeroutmrkt']:checked").val() == 1 ? true : false,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                Replaytypeid: $('#ddlmrktreplytypeout option:selected').val() != "" ? $('#ddlmrktreplytypeout option:selected').val() : null
            }
        }

        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);

        statusAlert(status.d, 'ActionPopup', 'Outgoing Call Created successfully', 'Outgoing Call updation failed');

        cleartxtboxes('txtmrktRelationnameout');
        cleartxtboxes('txtmrktCalltelephonenumberout');
        cleartxtboxes('txtmrktCalldiscussionout');
        Resetforradiobuttons("displaycustomeroutmrkt");

    }
    return false;

}

function submitMemo(e) {
    if ($('#txtmrktmemocalldiscussion').val() == '') {
        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {


        datain = {
            Mobj: {
                CallType: 379,
                AssignedEmpID: $('#ddlmrktempmemo option:selected').val() != "" ? $('#ddlmrktempmemo option:selected').val() : null,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                CallDiscussion: $('#txtmrktmemocalldiscussion').val() != "" ? $('#txtmrktmemocalldiscussion').val() : null
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);

        statusAlert(status.d, 'ActionPopup', 'Memo Created successfully', 'Memo updation failed');

        cleartxtboxes('txtmrktmemocalldiscussion');

    }
    return false;
}
function CommonAssignSubmit(strAction) {

    var datain = {
        Mobj: {
            EmpID: GetEmpid(),
            AssignedEmpID: GetEmpid(),
            TicketID: $('#lblmrktticket').text(),
            StatusID: 2
        }

    }
    var status = CallApi("SubmitReAssignticket", datain)
    statusAlert(status.d, 'ActionPopup', "" + strAction + " Created  & Ticket Assigned successfully", 'Ticket assigning failed');

}
function submitCloseTicket() {
    if ($('#txtmrktclosecalldiscusn').val() == '') {
        DynamicTimeAlert('Please enter reason for closing this ticket', 'alert alert-danger', 4000);
    }
    else {

        datain = {
            Mobj: {
                CallType: 563,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
                EmpID: GetEmpid(),
                CallDiscussion: $('#txtmrktclosecalldiscusn').val() != "" ? $('#txtmrktclosecalldiscusn').val() : null
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain);

        statusAlert(status.d, 'ActionPopup', 'Ticket closed successfully', 'Ticket closing failed');

        cleartxtboxes('txtmrktclosecalldiscusn');
        $('#ddlmrktreplytypeCloseticket').multiselect('select', ['0']);
    }
    return false;
}

function submitAssignTicket() {

    if ($('#ddlmrktAssingnEmp').val() == 0) {
        DynamicTimeAlert('Please select Staff name', 'alert alert-danger', 4000);
    }
    else {

        datain = {
            Mobj: {
                CallType: 380,
                EmpID: GetEmpid(),
                AssignedEmpID: $('#ddlmrktAssingnEmp option:selected').val() != "" ? $('#ddlmrktAssingnEmp option:selected').val() : null,
                TicketID: $('#lblmrktticket').text() != "" ? $('#lblmrktticket').text() : null,
            }
        }
        var status = CallApi("CommunicationLogEmployee.aspx/SubmitCommunicationlogCall", datain)
        statusAlert(status.d, 'ActionPopup', 'Ticket Assigned successfully', 'Ticket assigning failed');
        $('#ddlmrktAssingnEmp').multiselect('select', ['0']);
    }
    return false;
}

function divAddViewshowhide(divtype) {

    switch (divtype) {
        case "Add":

            //document.getElementById("divhistory").style.display = "none";
            //document.getElementById("accordion").style.display = "block";
            //if (ProfileOwner1 == 1 || Admin == 1) {

            //    $('#divhistory').show();
            //}
            //else {
            //    $('#divhistory').hide();
            //}

            break;
        case "View":

            //document.getElementById("accordion").style.display = "none";
            //document.getElementById("divhistory").style.display = "block";
            //if (parseInt(ProfileOwner1) == 1 || parseInt(Admin) == 1) {

            //    $('#divhistory').show();
            //}
            //else {

            //    $('#divhistory').hide();
            //}
            break;

    }
    return false;
}

function returnhtml(strtype, strdate, strempname, strstatus, strcustName, strcomments, Name, fromprofileid) {

    var strdiv = "";
    var Nameempcust = strempname.toLowerCase() == "customer" ? (fromprofileid == $('#txtFromProfile').val() ? $('#lblCustName').text() : Name) : strempname;
    var empcustlabel = strempname.toLowerCase() == "customer" ? "Customer Name" : "Employee Name";
    switch (strtype) {

        case "INCOMING":
        case "OUT GOING":
            strdiv = "<div class='row'><div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"

                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Done By</label></div><div class='col-lg-7'><label style='color:black;'>" + Nameempcust + "</label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Status</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strstatus + "</div></label></div><div class='clearfix'></div>"
                                               + "<div class='col-lg-5' style='color:maroon;'><label>Call Received By</label></div><div class='col-lg-7'><label><div style='color:black;'>" + strcustName + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Call Discussion</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div>"
            + "</div>";
            break;
        case "MatchFollowUpStatus":
        case "MatchFollowupReply":
        case "INTERNAL MEMO":
        case "CLOSE":
        case "REPLY":
            strdiv = "<div class='row'>"
            + "<div class='col-lg-12 text-center' style='font-weight:bold;'><c class='maroon'>" + strdate + "</c></div><div class='clearfix'></div>"
            + "<div class='col-lg-5' style='color:maroon;'><label>" + empcustlabel + "</label></div><div class='col-lg-7'><label><div style='color:black;'>" + Nameempcust + "</div></label></div><div class='clearfix'></div>"


            + "<div class='col-lg-12' ><label style='color:maroon;'>Comments</label><div><label style='color:black;'>" + strcomments + "</label></div></div><div class='clearfix'></div></div>";

            break;

    }
    return strdiv;

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
        classes: _.where(test, { StatusID: row.ProfileStatusID }).length >= 1 ? _.where(test, { StatusID: row.ProfileStatusID })[0].classes : (_.where(test, { StatusID: row.TicketStatusID }).length >= 1 ? _.where(test, { StatusID: row.TicketStatusID })[0].classes : '')
    };

}

function searchKeyPress(e) {

    alert(12);
    //var Profile = document.getElementById("txtFromProfile");
    //e = e || window.event;

    //if (e.keyCode == 13) {
    //    if (Profile.value == "" || Profile.value == null) {
    //        alert("Please enter profile ID");
    //        return false;
    //    }
    //    else if (Profile.value != "" || Profile.value != null) {
    //        var c = document.getElementById("btnSubmit");
    //        c.click();
    //        return true;
    //    }
    //}

    return true;
}



function Rvr_ResendSubmit(RvrFlag, ToProfileID, ExpressintrstID, logID) {

    var object = {
        Mobj: {
            strFromProfileID: $('#txtFromProfile').val() != null && $('#txtFromProfile').val() != undefined && $('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : null,
            strToProfileID: ToProfileID,
            ExpressInterestId: ExpressintrstID,
            LogID: logID,
            isRvrflag: RvrFlag,
            empid: GetEmpid()
        }
    }
    var data = CallApi("CommunicationLogEmployee.aspx/SubmitRvrAndResend", object);



    if (RvrFlag == 'RS') {
        $ResendMailTable.bootstrapTable('removeAll');
        $('#lbl_t_count').text('Grid Count : ' + data.d.Item2[0].TotalRows);
        BootstrapTableLoad(proceedconversion(data.d.Item2), $ResendMailTable, ['Options', 'dateorder', 'ProfileStatusID', 'TotalRows', 'MFPStatus', 'MFPStatusDate', 'TicketID', 'Emp_FollowupTicket_ID', 'TicketStatusID', 'ProfileOwner', 'ExpressInterestID', 'LogID', 'ISRvrSend'], bootstrapTableHeight, 2000);
        statusAlert(1, undefined, 'Resend successfully', 'Resend fail');

    }
    else {
        statusAlert(data.d.Item1, undefined, 'Reversend successfully', 'Reversend fail');
        if (data.d.Item1 == 1) {
            bindGrid();
        }
    }
    return false;
}




function sendMail(profileid, ToProfileID, Ticketid, fromcustID, tocustID, ticketStatusID, custname, primaryemail, toprofileids) {
    $('#headerid').text('Send Mail');
    $('#txtval').val('');

    $('#lblProfileid').text($('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : null);
    $('#lblToProfileID').html(toprofileids);
    $('#lblTicketid').text(Ticketid);
    $('#lblfromCustID').html(fromcustID);
    $('#lblTocustID').html(tocustID);
    $('#lblticketStatusID').html(ticketStatusID);

    document.getElementById("sendmailtxtdiv").style.display = "block";
    $('#divcustnameemail').html(" <div class='form-group'><label class='control-label col-sm-4 maroon'>Customer Name</label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + custname + " (" + ($('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : null) + ")" + "</label></div></div>"
   + "<div class=clearfix></div><br /><div class='form-group'><label class='control-label  col-sm-4 maroon'>Email going to </label>"
   + "<div class=pull-left><label class='control-label pull-left'>" + primaryemail + "</label></div></div><div class=clearfix></div><br />");
    $('#brnsendsmsmail').html("Send Mail");

    $('#lstmails').multiselect('select', ['5']);
    $('#txtval').val('Interested in your match we would like to know your opinion to proceed further.');
    return false;
}


function sendsmssubmit() {


    var resultdata;

    if ($('#txtval').val() != "") {

        var submitdata = {
            Mobj: {
                Notes: $('#txtval').val(),
                EMPID: empidObj.d,
                profileid: $('#lblProfileid').text(),
                LTicketID: $('#lblTicketid').text(), HistoryUpdate: 1,
                FromCustID: $('#lblfromCustID').text(),
                TocustID: $('#lblTocustID').text(),
                TicketStatusID: $('#lblticketStatusID').text(),
                FromProfileID: $('#lblProfileid').text(),
                ToProfileID: $('#lblToProfileID').text()
            }
        };

        resultdata = CallApi("SendMarketingMail_new", submitdata)
        statusAlert(resultdata.d, 'ActionPopup', 'Mail sent succesfully', "Mail sending failed");
        $('#txtval').val('');
    }
    else {

        ShowOnlyAlertText('Please enter text', 'alert alert-danger');
    }
    return false;

}


function HideshowContacts() {

    if (parseInt(ProfileOwner1) == 1 || parseInt(Admin) == 1) {
        $('#divContacts').show();
    }
    else {
        $('#divContacts').hide();
    }
    return false;
}

function bindCalldiscussionnew(txtid, ddlid) {


    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    //$('textarea#' + txtid).val('' + sss + '');
    $("#" + txtid).val(sss);

}
function getRelationshipnamae(ddlrelation, txttoname) {

    var BindNames = {
        Relation: {
            Relationshipid: $('#' + ddlrelation + ' option:selected').val() > 0 ? $('#' + ddlrelation + ' option:selected').val() : null,
            profileid: profileidflag,
        }
    };
    var data = CallApi('GetRelationNamesShipOnCustID', BindNames);
    if (data != null) {

        $('#' + txttoname + '').val(data.d.FirstName + " " + (data.d.LastName != null ? data.d.LastName : ""));
    }
    return false;
}
//function removeSpaces(string) {
//    return string.split(' ').join('');
//}

function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space 
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}

