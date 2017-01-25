
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

function BootstrapTableLoad(Array, table, removeObjs, height, pagesize) {
    $('.Datatable').show();

    datatbaleoptions.height = height || 650;
    datatbaleoptions.pageSize = pagesize || 10;
    if (removeObjs != null && removeObjs != undefined)
        var filteredColumns = _.difference(_.keys(Array[0]), removeObjs);
    datatbaleoptions.columns = setColumns(filteredColumns || _.keys(Array[0]));
    table.bootstrapTable(datatbaleoptions);
    console.log(Array);
    table.bootstrapTable('load', Array);
    return false;
}
function BootstrapTableAppend(Array, tableID, revoObjs) {
    $('.Datatable').show();
    tableID.bootstrapTable('prepend', Array);
    return false;
}
function setColumns(test) {
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

            if (item.toLowerCase() == 'profileid') {
                obj.formatter = operateFormatter;
            }
            else if (item.toLowerCase() == 'ticketid') {

                obj.formatter = TicketFormatter;
            }
            else if (item.toLowerCase() == 'height') {
                obj.formatter = BindHeightSubstring;
            }
            else if (item.toLowerCase() == 'options') {
                obj.formatter = OptionFormatter;
            }
            else if (item.toLowerCase() == 'sno') {

                obj.formatter = photosFormatter;
            }

            else if (item.toLowerCase() == 'action') {

                obj.formatter = EditFormatter;
            }
            else if (item.toLowerCase() == 'empphoto') {

                obj.formatter = empphotoFormatter;
            }
            else if (item.toLowerCase() == 'emp_details') {

                obj.formatter = Emp_details;
            }
            else if (item.toLowerCase() == 'chk') {
                obj.formatter = Checkboxformatter;
            }
            else if (item.toLowerCase() == 'photoname') {

                obj.formatter = PhotoNameFormat;
            }
            else if (item.toLowerCase() == 'download') {
                obj.formatter = DownloadFormat;
            }
            else if (item.toLowerCase() == 'upload') {
                obj.formatter = UploadFormat;
            }


            else if (item.toLowerCase() == 'profile_owner') {

                obj.formatter = profileownerDDl;
                //if (item == 'ProfileOwner') {
                //    $('#ddlProfileemp' + row.S_NO + '').multiselect('select', item);
                //}
            }
            else if (item.toLowerCase() == 'marketed_by') {

                obj.formatter = MarketDDl;
            }
            else if (item.toLowerCase() == 'reviewed_by') {

                obj.formatter = ReviewdDDl;
            }
            else if (item.toLowerCase() == 'actions') {

                obj.formatter = ActionsFormat;
            }
            else if (item.toLowerCase() == 'dob') {

                obj.formatter = dataofbirthformat;
            }
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


function operateFormatter(value, row, index) {

    var Querystring = "?" + "ProfileID=" + row.ProfileID + "&Print=1";
    var vall = row.paid;
    var paid = row.paid == 1 ? '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:green;">' + (row.ProfileID) + '</a>' :
        '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:Red;">' + (row.ProfileID) + '</a>';
    return paid;
}
function BindHeightSubstring(value, row, index) {

    var strBindTwoVals = (row.Height).substr(0, 3);

    return strBindTwoVals;
}
function TicketFormatter(value, row, index) {
    console.log('mfpStatus');
    console.log(row.MFPStatus);

    var img = row.MFPStatus != null ? (row.MFPStatus == 'Proceed' ? '<img  src="../../Images/heartgrren.gif" style="width:28px;"/>' : (row.MFPStatus == 'Dont Proceed' ? '<img  src="../../Images/brk%20hrt_2_green.gif" style="width:28px;"/>' : "")) : "";
    //var paid = row.TicketID != null ? '<a  style="color:green;" href="javascript:void(0)" onclick="return ticketidaction(' + row.Emp_FollowupTicket_ID + ', ' + JSON.stringify(row.ProfileID) + ', ' + JSON.stringify(row.TicketID) + ', fromcustID, tocustID, ticketStatusID,  ToProfileID);">' + row.TicketID + '</a>' + img : '<label>-</label>';
    var paid = row.TicketID != null ? "<a  style='color:green;' href='javascript:void(0)' onclick='return ticketidaction(" + row.Emp_FollowupTicket_ID + "," + row.TicketStatusID + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.FromProfileID) + "," + JSON.stringify(row.Name) + ");'>" + row.TicketID + "</a>" + img : '<label>-</label>';
    return paid;
}

function OptionFormatter(value, row, index) {
    var dd = "";
    if (row.ProfileStatusID == 54) {
        var lnkRvr = row.ISRvrSend == 1 ? "" : "<br/><a href='javascript:void(0)' onclick='return Rvr_ResendSubmit(" + JSON.stringify("RVR") + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.ExpressInterestID) + "," + JSON.stringify(row.LogID) + ");'>Rvrsend</a>";
        dd = "<a href='javascript:void(0)' onclick='return Rvr_ResendSubmit(" + JSON.stringify("RS") + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.ExpressInterestID) + "," + JSON.stringify(row.LogID) + ");'>Resend</a>" + lnkRvr + "";
    }
    return dd;
}
function photosFormatter(value, row, index) {

    var dd = "";

    if (row.ProfileStatusID == 54 && row.PhotoCount != 0 && row.PhotoCount != undefined && row.PhotoCount != null) {
        dd = "<a href='javascript:void(0)' onclick='return photossent(" + JSON.stringify(row.ProfileID) + ");'>Photos</a>";
    }
    return row.Sno + "</br>" + dd;
}
function getcid(pid) {
    var custids = CallApi("GetCustID", { profileid: pid });
    return custids.d;
}
function getemail(pid) {
    var emails = CallApi("getcustemil", { profileid: pid });
    return emails.d;
}
function photossent(pid) {
    var profileid = $('#txtFromProfile').val() != "" ? $('#txtFromProfile').val() : "";
    var emails = getemail(profileid);
    var cust_id = getcid(pid);
    var inpuemail = {
        photosemail: {
            emailcust: emails,
            cust_Idcust: cust_id
        }
    }

    var data = CallApi("Sentmailsphotoss", inpuemail);
    if (data.d == 1) {
        DynamicTimeAlert('email sent successfully', 'alert alert-success', '2000');
    }
    else {
        DynamicTimeAlert('email sent failed', 'alert alert-danger', '2000');
    }
    return false;
}
function Getcontactnumber(profileid) {
    var data1 = CallApi("CommunicationLogEmployee.aspx/CustomerNumber", { Profileid: profileid });
    return data1;
}
function ticketidaction(ticketid, TicketStatusID, toprofileid, fromprofileid, Name) {
    $('#tabs').find('li').removeAttr('class');
    $('#tabs').find('li:first-child').addClass('active');
    $('.tab-pane').removeAttr('class').addClass('tab-pane');
    $('.tab-pane:first-child').removeAttr('class').addClass('tab-pane active');
    $("#lblmrktticket").html(ticketid);
    Bindsingledropdowns();

    if (fromprofileid == $('#txtFromProfile').val()) {
        profileidflag = fromprofileid;
        Numberfalg = Getcontactnumber(fromprofileid);
    }
    else {
        profileidflag = toprofileid;
        Numberfalg = Getcontactnumber(toprofileid);
    }
    $('#ddlmrktreceivedfrom').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedfrom', 'txtmrktRelationname');
    $('#ddlmrktreceivedby').multiselect('select', [39]);
    getRelationshipnamae('ddlmrktreceivedby', 'txtmrktRelationnameout');
    $("#txtmrktCalltelephonenumber").val(Numberfalg.d);
    $("#txtmrktCalltelephonenumberout").val(Numberfalg.d);
    var Ticketid = {

        Ticketinformation: {
            Ticketid: ticketid,
            Type: 'I',
        }
    }
    var data1 = CallApi("Ticketinformation", Ticketid);
    if (data1 != null && data1 != undefined && data1.d != undefined && data1.d.length > 0) {

        $('#lblmrktTicketID').html(data1.d[0].Ticket);
        $('#lblmrktStatus').html(data1.d[0].TicketStatus);
        $('#lblmrktAssigned').html(data1.d[0].TicketOwner);
        $('#lblNoofdays').html(data1.d[0].HistoryLastUpdated);
        $('#lblmrktOpened').html(data1.d[0].TicketCreatedDate);
        $('#lblemail').html(data1.d[0].Email);
        $('#lblnumber').html(data1.d[0].Number);
        $('#lnkticketid').html(data1.d[0].Ticket);
        $('#lbldelayed').html(data1.d[0].HistoryLastUpdated);
        $('#lblmobilenumber').html(data1.d[0].Number);
        $('#lblemailhis').html(data1.d[0].Email);
    }

    var Tickethistory = {

        Ticketinformation: {
            Ticketid: ticketid,
            Type: 'H',
        }
    }
    var data = CallApi("Ticketinformation", Tickethistory);
    if (data != null && data != undefined && data.d != undefined) {

        $('#bindhistory').html("");

        _.each(data.d, function (item) {
            var dd = moment(item.TicketCreatedDatehistry).fromNow();

            item.TicketInfo = item.TicketInfo + " (" + dd + ")";
            var appenddiv = returnhtml(item.TicketType, item.TicketInfo, item.EmployeeName, item.CallResult,
                      (item.RelationName + ("(" + item.Relation + ")")), item.Body, Name, fromprofileid);
            $('#bindhistory').append(appenddiv);

        });

    }


    $('#ActionPopup').modal({ backdrop: 'static' });
    HideshowContacts();

    sendMail(data1.d[0].FromProfileID, data1.d[0].ToProfileID, ticketid, data1.d[0].FromCustID, data1.d[0].TocustID, TicketStatusID, data1.d[0].FromName, data1.d[0].Email, toprofileid);
    return false;
}





function EditFormatter(value, row, index) {
    var dd = "";
    var DeleteActiveStatus = row.IsActiveStatus == 'IsActive' ? 'Delete' : 'Active';
    dd = "<div style='line-height: 28px;'><a href='javascript:void(0)' onclick='return EditEmployee(" + JSON.stringify(row.EmpID) + ");'>Edit</a><br/>"
    + "<a href='javascript:void(0)' onclick='return deleteDisable(" + JSON.stringify(row.EmpID) + "," + JSON.stringify(DeleteActiveStatus) + ");'>" + DeleteActiveStatus + "</a><br/>"
    + "<a href='javascript:void(0)' onclick='return deleteDisable(" + JSON.stringify(row.EmpID) + "," + JSON.stringify('Disable') + ");'>Disable</a><br/>"
    + "<a href='javascript:void(0)' onclick='return AssignCounts(" + JSON.stringify(row.EmpID) + "," + JSON.stringify(row.FirstName) + "," + JSON.stringify(row.LastName) + ");'>Assign</a><br/>"
   + "</div>";


    //+ "<a href='javascript:void(0)' id='username' data-type='text' data-pk='1' data-name='Action'  data-original-title='Enter username'>superuser</a>"



    return dd;
}

function Checkboxformatter(value, row, index) {
    var dd = "";
    if ($('#Allchk').prop('checked')) {
        dd = "<input class='chkclassall' value='" + row.IdS + "' name='Chkprofileid' type='checkbox' checked ></input>";
    }
    else {

        dd = "<input class='chkclassall' value='" + row.IdS + "' name='Chkprofileid' type='checkbox' ></input>";

    }
    return dd;
}



function empphotoFormatter(value, row, index) {
    var dd = "";

    var color = [{ id: 'A', value: 'Aqua' },
        { id: 'B', value: 'Brown' },
        { id: 'C', value: 'Chocolate' },
        { id: 'D', value: 'DarkMagenta' },
        { id: 'F', value: 'Fuchsia' },
        { id: 'G', value: 'Green' },
        { id: 'H', value: 'HotPink ' },
        { id: 'I', value: 'Indigo ' },
        { id: 'K', value: '#F0E68C' },
        { id: 'L', value: 'LightSlateGray ' },
        { id: 'M', value: 'MediumVioletRed ' },
        { id: 'N', value: 'Navy ' },
        { id: 'O', value: 'Olive' },
        { id: 'P', value: 'PaleGreen' },
        { id: 'R', value: 'RoyalBlue' },
        { id: 'S', value: 'SteelBlue' },
        { id: 'T', value: 'Tomato' },
        { id: 'V', value: 'Violet ' },
        { id: 'W', value: 'Wheat' },
        { id: 'Y', value: 'YellowGreen' },

    ];

    if (row.EmpPhoto != null) {
        dd = "<img type='image' src=" + row.EmpPhoto + " class='img-circle' style='width:150px;height:150px;cursor: pointer;' onclick='return EmpPhotoSlide(" + JSON.stringify(row.EmpPhoto) + " );'/>";
    }
    else {
        //var name = ((row.FirstName).charAt(0)).toUpperCase();
        //var colorcode = _.where(color, { id: name });
        //var bgcolor = 'black';
        //console.log('color');
        //console.log(colorcode);
        //if (colorcode.length > 0) {
        //    bgcolor = colorcode[0].value;
        //}

        //dd = "<div class='img-circle circlediv' style='width:150px;height:150px;background-color:" + bgcolor + ";color:white;font-family:Arial;'>" + name + "</div>";
        dd = "<img type='image' src='../CutomerImages/Managephotos/Manage_blankphoto.png' class='img-circle' style='width:150px;height:150px;' />";
    }
    return dd;
}

function Emp_details(value, row, index) {
    var dd = "";
    dd = "<div><b>" + row.FirstName + ' ' + row.LastName + "</b></div>"
    + "<div>" + row.BranchesName + "</div>"
    + "<div>" + row.OfficialEmailID + "</div>"
    + "<div>" + row.WorkPhone + "</div>"
    + "<div>" + row.UserID + "</div>"
    ;
    return dd;
}
function PhotoNameFormat(value, row, index) {
    var dd = "";
    dd = row.ProfileID + '_' + row.PhotoName;
    return dd;
}

function DownloadFormat(value, row, index) {
    var dd = "";
    dd = "<a href='javascript:void(0);' onclick='return DownloadAll(" + JSON.stringify(row.Cust_ID) + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.PhotoName) + ",this);'>Download</a>";
    return dd;
}
function UploadFormat(value, row, index) {
    var dd = "";
    dd = "<a href='javascript:void(0);' onclick='return Upload(" + JSON.stringify(row.Cust_ID) + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.PhotoName) + "," + JSON.stringify(row.Cust_Photos_ID) + ",this);'>upload</a>";
    return dd;
}


var Empoptions = [];
function profileownerDDl(value, row, index) {
    var dd = "";

    if (row.ProfileOwner != null) {
        var test = _.where(Empoptions, { value: parseInt(row.ProfileOwner) });
        var sss = test[0] != undefined ? test[0].title : "";
        dd = "<input class='form-control autocomp' value='" + sss + "' onchange='textchange();' id='txtProfileOwner" + row.S_NO + "'>";
    }
    else {
        dd = "<input class='form-control autocomp' onchange='textchange();' id='txtProfileOwner" + row.S_NO + "'>";
    }
    return dd;
}
function MarketDDl(value, row, index) {
    var dd = "";

    if (row.Marketed_by != null) {
        var test = _.where(Empoptions, { value: parseInt(row.Marketed_by) });
        var sss = test[0].title;
        dd = "<input class='form-control autocomp' value='" + sss + "' onchange='textchange();' id='txtMarketedby" + row.S_NO + "'>";
    }
    else {
        dd = "<input class='form-control autocomp' onchange='textchange();' id='txtMarketedby" + row.S_NO + "'>";
    }
    return dd;
}
function ReviewdDDl(value, row, index) {
    var dd = "";

    if (row.Reviewed_by != null) {
        var test = _.where(Empoptions, { value: parseInt(row.Reviewed_by) });
        var sss = test[0].title;
        dd = "<input class='form-control autocomp' value='" + sss + "' onchange='textchange();' id='txtReviewedby" + row.S_NO + "'>";
    }
    else {
        dd = "<input class='form-control autocomp' onchange='textchange();' id='txtReviewedby" + row.S_NO + "'>";
    }

    return dd;
}

function ActionsFormat(value, row, index) {
    var dd = "";
    dd = "<a href='javascript:void(0);' onclick='return AssignTicketSubmit(" + row.S_NO + "," + JSON.stringify(row.ProfileID) + "," + JSON.stringify(row.cust_id) + ");'>Assign</a>";
    return dd;
}
function dataofbirthformat(value, row, index) {
    var Dob = row.DOB + "(" + row.Age + ")";
    return Dob;
}