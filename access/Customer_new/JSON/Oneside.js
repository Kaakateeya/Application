'use strict'
var empidObj, empNameObj, empMobObj, smsArr;
var AdminObj;
var replycontext = [];
var datarelation = [];
var dataEmp = [];
var datareplyType = [];
var closeticket = [];
var data;
var bothsidelstmail = [],
    bothsidetext = [];
var empid, Getempid, pagenum = 0, PageSize, Fromdate, Todate, SPname, strSpname = 'Usp_Select_BothSideOneSideInterst_SlideNew', stremp, strBranch, datainputd, spflag=1, servicecustid, Viewedcontactsflag, closeflag;
var currentslide, Managementid, Empwaitingflag;

$(function () {
    var headerDiv = "<div class='modal-header' style='border-bottom: 1px solid #ffffff;'>"
+ "                  <div class='row' style='display: block; border: 1px solid rgb(210, 201, 199); border-radius: 12px; padding: 5px;'>"
+ "                <div class='form-group' id='headers' style='width: 155px; margin-top: -15px; margin-left: 5px; background: white;'>"
+ "                    <a href='javascript:void(0);'>"
+ "                        <h4 class='' style='margin-left: 10px; color: rgb(160, 2, 1);'>Search Tickets<span id='spantoggle' class='indicator glyphicon glyphicon-chevron-up' style='margin-left: 7px; margin-right: 5px;'></span></h4>"
+ "                    </a>"
+ "                </div>"
+ "                <div class='form-inline' id='toggleDemo' style=''>"
+ "                    <div class='row' id='divsearch'>"
+ "                        <div class='col-lg-1 form-group' id='div2'>"
+ "                            <label class='control-label' style='font-weight: bold;'>"
+ "                                Region	"
+ "                            </label>"
+ "                            <div>"
+ "                               <select id='ddlregion' style='width: 50px;' class='Region'></select>"
+ "                            </div>"
+ "                        </div>"
+ "                        <div class='col-lg-3 form-group' id='divBranch'>"
+ "                            <label class='control-label' style='font-weight: bold;'>"
+ "                                Branch	"
+ "                            </label>"
+ "                            <div>"
+ "                               <select id='lstbranch' class='multiple' multiple data-live-search='true'></select>"
+ "                            </div>"
+ "                        </div>"
+ "                        <div class='col-lg-3 form-group' id='divemp'>"
+ "                            <label class='control-label' style='font-weight: bold;'>"
+ "                                EmpName	"
+ "                            </label>"
+ "                            <div>"
+ "                                  <select id='lstempSlide' class='multiple' multiple data-live-search='true'></select>"
+ "                            </div>"
+ "                        </div>"
+ "                        <div class='col-lg-2 form-group'>"
+ "                            <label class='control-label' style='font-weight: bold;'>"
+ "                                FromProceed	"
+ "                            </label>"
+ "                            <div>"
+ "                                <input type='text' class='datepicker2' id='txtfromproceedDate' />"
+ "                            </div>"
+ "                        </div>"
+ "                        <div class='col-lg-3 form-group'>"
+ "                            <label class='control-label center-block' style='font-weight: bold;'>"
+ "                                ToProceed		"
+ "                            </label>"
+ "                            <div>"
+ "                                <input type='text' class='datepicker2' id='txtToproceedDate' />&nbsp;&nbsp;&nbsp;"
+ "    <input type='button' id='btnsubmitSlide' value='Submit' class='btn btn-danger'  onclick='return bothSubmit();'/>"
+ "   </div>"
+ "</div>"
+ "<div>"
+ "</div>"
+ "</div>"
+ "</div>"
+ "</div>"
+ "<br>"
+ "<div class='row'>"
+ "    <div class='col-lg-12' style='height: 30px; margin-top: 8px;'>"
+ "        <div class='col-lg-10 col-md-10 col-xs-9 col-sm-9'>"
+ "            <div class='col-lg-2 col-md-2'>"
+ "                <span id='ctl00_ContentPlaceHolder1_uctrlBothOneSide_lbltotalrecords' style='color:Black;'>Total :</span>"
+ "                <label id='lblcurSlide'>1</label>"
+ "                &nbsp;of&nbsp;    "
+ "    <label id='lblcurrentprofile'></label>"
+ "</div>"
+ "<div class='col-lg-10 list-inline' id='divbothOnebuttons'>"
+ "    <input id='btnoneside' class='btn btn-default buttoncls bootstro' value='Oneside Intrst' onclick='return botheOneClick(" + 'btnoneside' + "," + '1' + "," + false + "," + false + ");' type='button'>"
+ "</div>"
+ "</div>"
+ "<div class='col-lg-2 col-md-2 col-xs-2 col-sm-2'>"
+ "    <div class='row' id='vieweddiv'>"
+ "        <div class='col-lg-10 col-md-10 col-xs-10 col-sm-10'>"
+ "            <label>Viewed</label>&nbsp;<label id='lnkLastSlide' style='color: blue;'>1</label>&nbsp;<label>Profiles</label>"
+ "        </div>"
+ "        <div class='col-lg-2 col-md-2 col-xs-2 col-sm-2'>"
+ "            <input id='txtGotoVal' class='form-control' style='width: 50px; height: 24px; margin-left: -20px;' onchange='return gotoSlide(" + JSON.stringify('txtGotoVal') + ");' type='text'>"
+ "        </div>"
+ "    </div>"
+ "    <a href='javascript:void(0);' id='lnkrevertsearch' onclick='return revertSearch();' style='display: none;'>Revert  search"
+ "        <label id='lnklastseenProfile' style='display: none;'></label>"
+ "    </a>"
+ "</div>"
+ "</div>"
+ "</div>"
+ "</div>";
    $('#PhotoPopupSlde #MycarousalHeader').append(headerDiv);
    document.getElementById("HelpImg").style.display = 'none';
    var empdetails = CallApi("EmployeeMarketingSlideshow.aspx/getEmpidloginAdminempnamemobile", {});

    empidObj = empdetails.d.Item1;
    AdminObj = empdetails.d.Item2;
    empNameObj = empdetails.d.Item3;
    empMobObj = empdetails.d.Item4;
    Managementid = empdetails.d.Item5;
    checkBindObject(undefined, 'BothsideEmail', 'lstmails');
    pageload("myCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");

});

function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    setTimeout(showonlyforAdmin, 2500);
    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;
    if (totalItems == 0) {
        bindbothOneSlideshow(empidObj);
    }
    $(".Region").on('change', function () {
        binddependency('Branch', '.Region', '.Branch')
    });
}
function pageloadnew(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
    showonlyforAdmin();
    currentslide = 1, totalItems = $('#' + carouselID).find('.item').length;
}


$(function () {
    var wage = document.getElementById("txtGotoVal");
    wage.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            gotoSlide(wage.id);
            $('#myCarousel').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
            return false;
        }
    });
});

var convertJSDate = function (dateTime) {
    var dateArr = dateTime.split("-");
    var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    date1 = (moment(date1).format('YYYY/MM/DD HH:MM:SS'));
    return date1;
}
function bindbothOneSlideshow(loginEmpid) {
    var datainput = {
        input: {
            empid: empidObj,
            stremp: loginEmpid != undefined ? loginEmpid : (Managementid == 1 ? ((getvalues('#lstempSlide') == "" ? null : getvalues('#lstempSlide'))) : empidObj),
            strBranch: getvalues('#lstbranch') == "" ? null : getvalues('#lstbranch'),
            pagefrom: pagenum + 1, pageto: 10,
            Fromdate: $('#txtfromproceedDate').val() != "" ? convertJSDate($('#txtfromproceedDate').val()) : null,
            Todate: $('#txtToproceedDate').val() != "" ? convertJSDate($('#txtToproceedDate').val()) : null,
            SPname: strSpname,
            Spflag: spflag,
            CustID: servicecustid,
            region: $('#ddlregion option:selected').val() == 0 ? null : $('#ddlregion option:selected').val(),
            oppclose: closeflag,
            Empwaiting: Empwaitingflag
        }
    };
    var objd = {
        PageType: 'matchfollowup',
        CarousalID: 'myCarousel',
        lblTotalRecordsID: 'lblnoofrecords',
        InputObject: datainput,
        api: 'EmployeeOnesideinterest.aspx/Getonesideinterst_NewSrtucture',
        EmpId: empidObj,
        ServiceCountCust_ID: servicecustid,
        DynamicHeader: true
    };
    debugger;
    PageDesign(objd);
    return false;
}

function showLatestHistory(matchfollowupStatusID, ticketdate, tickethistrydate) {
    if (matchfollowupStatusID != null) {
        if (tickethistrydate != '--') {
            return checkdates(ticketdate, tickethistrydate);
        }
        else {
            return 'ticketdate';
        }
    }
    else if (tickethistrydate != '--') {
        return 'tickethistrydate';
    }
    else {

        return 'nodata';
    }


}

function checkdates(ticketdate, tickethistrydate) {
    if (moment(ticketdate) > moment(tickethistrydate)) {
        return 'ticketdate';
    }
    else {
        return 'tickethistrydate';
    }
}

function gotoSlide(id) {
    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($('#' + id).val()) <= lastslide) {
        $('#myCarousel').carousel(parseInt($('#' + id).val()) - 1);
    }
    else {

        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
    return false;
}
var datain;


function TicketHistry(ticketId, classname) {
    $('#divpop').html('');
    if (ticketId != null && ticketId != undefined && ticketId != '') {
        var Tickethistory = {

            Ticketinformation: {
                Ticketid: ticketId,
                Type: 'H',
            }
        }
        var data = CallApi("Ticketinformation", Tickethistory);
        if (data != null && data != undefined && data.d != undefined) {
            _.each(data.d, function (item) {
                var appenddiv = returnhtml(item.TicketType, item.TicketInfo, item.EmployeeName, item.CallResult,
                          (item.RelationName + ("(" + item.Relation + ")")), item.Body);
                $('#divpop').append(appenddiv + "<br/>");

            });

        }
    }

    $('[data-toggle="' + classname + '"]').popover({
        html: true,
        title: "Ticket History<a class='pull-right' href='javascript:void(0);' onclick='Close(" + JSON.stringify(classname) + ");' style='font-size: 21px;color:Red;' >&times;</a>",
        content: function () {
            return $('#divpop').html();
        }

    });

    return false;
}

function Close(className) {
    $('[data-toggle="' + className + '"]').popover('hide');
}
function showonlyforAdmin() {
    if (Managementid == 1) {
        var Bindings = {
            Masterbind: {
                Branch: "Branch",
                Region: "onlyRegionmaster",
                BranchWithEmp: "BranchWithEmp",

            }
        }
        var data = CallApi("CommonPopulateDropDownList", Bindings);
        console.log(JSON.stringify(data.d));
        var methodnames = [
           { methodname: "Branch", dropdownname: "lstbranch", data: data.d.Branch },
            { methodname: "BranchWithEmp", dropdownname: "lstempSlide", data: data.d.BranchWithEmp },
            { methodname: "onlyRegionmaster", dropdownname: "ddlregion", data: data.d.Region }
        ];
        for (var i = 0; i < methodnames.length; i++) {
            GetmasterDataNew(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
        }
        $('#lstempSlide').multiselect('select', [empidObj]);
    }
}
var defaultclass = "btn btn-default buttoncls", successclass = "btn btn-success buttoncls";

function botheOneClick(CurrentButton, flag, flagClose, flagEmpwaiting) {
    flagserves = "";
    $("#myCarousel").carousel("pause").removeData();
    $("#myCarousel .carousel-inner").html("");
    spflag = flag;
    closeflag = flagClose;
    Empwaitingflag = flagEmpwaiting;
    $("#" + CurrentButton.id).removeAttr('class').addClass(successclass);
    $('#lblcurSlide').text(1);
    $('#lblcurrentprofile').text(0);
    pagenum = 0;
    servicecustid = null;
    bindbothOneSlideshow();
    $("#lnkLastSlide").text(1);
    checkitemGlobal("myCarousel");
    $('.carousel-control.left').attr('style', 'display:none;');
    $('.carousel-control.right').attr('style', 'display:block;');
    return false;
}

function bothSubmit() {
    flagserves = "";
    $("#myCarousel").carousel("pause").removeData();
    $("#myCarousel .carousel-inner").html("");
    $('#lblcurSlide').text(1);
    $('#lblcurrentprofile').text(0);
    servicecustid = null;
    pagenum = 0;
    bindbothOneSlideshow();
    $("#lnkLastSlide").text(1);
    checkitemGlobal('myCarousel');
    $('.carousel-control.left').attr('style', 'display:none;');
    $('.carousel-control.right').attr('style', 'display:block;');
    return false;
}

function cleartxtboxes(txtid) {
    $('#' + txtid).val('');
}

function pauseifPlayVisible(carouselID, playButtonID, pauseButtonID) {
    if ($('#' + playButtonID).is(":visible")) {
        $('#' + carouselID).carousel('pause');
        $('#' + playButtonID).show();
        $('#' + pauseButtonID).hide();
    }
}
function checkitemnew(carouselID) {
    var $this;
    $this = $("#" + carouselID);
    if ($("#" + carouselID + " .carousel-inner .item:first").hasClass("active")) {
        $("#" + carouselID).find('.left').hide();
        $("#" + carouselID).find('.right').show();
    }
    else if ($("#" + carouselID + " .carousel-inner .item:last").hasClass("active")) {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').hide();
    }
    else {
        $("#" + carouselID).find('.left').show();
        $("#" + carouselID).find('.right').show();
    }

}


function GetOwner(custid) {
    var owner;
    var object = { 'custid': '' + custid + '' };
    var data = CallApi("ownerid", object);
    owner = data.d;
    return owner;
}

function Settlementfom(profileid, imageurl) {
    // var saimgurl = imageurl.substr(0, 0) + imageurl.substr(0 + 2);
    commonpopupmethod("SettlementForm", imageurl);
    return false;
}

$(function () {
    $('input:radio[name="Sendsms"]').change(function () {
        var selectval = $(this).val();
        var test = _.where(smsArr, { id: parseInt(selectval) });
        $('#txtval').val(test[0].text);
    });
    return false;
});

function bindCalldiscussionnew(txtid, ddlid) {
    var id = $('#' + ddlid + ' option:selected').val();
    var test = _.where(replycontext, { value: parseInt(id) });
    var sss = test[0].title;
    $("#" + txtid).val(sss);
}

function ShowServiceprofile(custid) {
    pagenum = 0;
    servicecustid = custid;
    $('#lblcurrentservice').text(0);
    $('#lblTotalservice').text(0);
    $("#serviceprofilesCarousel .carousel-inner").html("");
    $("#serviceprofilesCarousel").carousel("pause").removeData();
    $('#serviceprofilesCarousel').carousel('pause');
    pageload("serviceprofilesCarousel", "lblcurrentservice", "lblTotalservice");
    $('#ServiceSlidepopup').modal({ backdrop: 'static' });
    $('#serviceprofilesCarousel .carousel-control.left').attr('style', 'display:none;');
    $('#serviceprofilesCarousel .carousekl-control.right').attr('style', 'display:block;');
    return false;
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

function closemodal() {
    $('#txtmrktRelationnameout').val('');
    $('#txtmrktRelationname').val('');
    $('#ActionPopup').modal('hide');
    return false;
}



