var gender, Typeofprofile, weblogin;
var alllinks = {
    links: [{ name: "Factsheet", href: "../../DesignedPages/CustomerFactSheet.aspx" },
		{ name: "Tickets", href: "EmployeeMarketingSlideshow.aspx" },
		{ name: "Servicelog", href: "CommunicationLogEmployee.aspx" },
        { name: "Photos", href: "" },
		{ name: "Payment", href: "" },
        { name: "View Contancts", href: "" }
    ]
}
      	  , formatterdata = '', getdatalist,
	   staticdata = '<div class="alllink">', Joindata = '</div>';
function AlllinksFormatter(value, row, index) {
    ownerid = row.Ownerflag == true ? 1 : 0;
    var Querystring = "?" + "ProfileID=" + row.ProfileID;
    var Querystringservice = "?" + "ProfileID=" + row.ProfileID + "&pageid=1";
    formatterdata = '';
    $.each(alllinks.links, function (key, value) {
        var strliteclass = row.onlinepaidcls == "light" ? row.onlinepaidcls + ' Linkdisabled' : row.onlinepaidcls;
        var strofflineliteclass = row.offlinepaidcls == "light" ? row.offlinepaidcls + ' Linkdisabled' : row.offlinepaidcls;
        var photodisbled = row.PhotoshopCount == "0" ? 'Linkdisabled' : "";
        if (value.name == "Servicelog") {
            formatterdata += '<a href=' + value.href + "" + Querystringservice + ' target="_blank" style="color: rgb(20, 16, 210);text-decoration: underline;margin-right: 14px;">' + value.name + '</a></br>';
        }
        else if (value.name == "Photos") {
            formatterdata += '<a style="margin-left:5px;margin-right:3px;color: rgb(20, 16, 210);text-decoration: underline;"  onclick="return getimgPath(' + row.Cust_ID + ',' + row.ProfileID + ',' + row.PhotoCount + ');" href="#" class="' + photodisbled + '">' + row.UploadedPhotoscount + '</a>/<a  onclick="return getimgPath(' + row.Cust_ID + ',' + row.ProfileID + ',' + row.PhotoCount + ');" href="#" style="color: rgb(20, 16, 210);text-decoration: underline;margin-right: 16px;" class="' + photodisbled + '">' + row.PhotoshopCount + '</a>';
        }
        else if (value.name == "View Contancts") {
            var ownerid = row.Ownerflag == true ? 1 : 0, QueryStringEdit = "?" + "CustID=" + row.Cust_ID + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";
            formatterdata += row.Ownerflag ? '<a href="EmployeeEditContacts.aspx' + QueryStringEdit + '" target="_blank" style="color: rgb(20, 16, 210);text-decoration: underline;">' + value.name + '</a>' : '<label>' + row.OwnerName + '</label>';
        }
        else if (value.name == "Payment") {

            formatterdata += '<a style="margin-left:1px;margin-right:5px;text-decoration: underline;font-weight:bold;" href="../../Payments/SearchMembershipPackage.aspx?ProfileID=' + row.ProfileID + '" target="_blank"  class="' + strliteclass + '">' + row.onlinepaid + ' </a>/<a href="../../Payments/SearchMembershipPackage.aspx?ProfileID=' + row.ProfileID + '" target="_blank" class="' + strofflineliteclass + '" style="text-decoration: underline;margin-right: 16px;font-weight:bold;">' + row.offlinepaid + '</a>';
        }

        else {
            formatterdata += '<a href=' + value.href + "" + Querystring + ' target="_blank" style="color: rgb(20, 16, 210);text-decoration: underline;margin-right: 14px;">' + value.name + '</a>';
        }
    });

    formatterdata = staticdata + formatterdata + Joindata;
    return formatterdata;
}
function operateFormatteredit(value, row, index) {
    custid = row.Cust_ID;
    ownerid = row.Ownerflag == true ? 1 : 0;

    var QueryStringEdit = "?" + "CustID=" + custid + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";

    return '<a href="EmployeeEducationAndProfession.aspx' + QueryStringEdit + '" target="_blank" style="color: rgb(20, 16, 210);">' + value + '</a>';
}
function sorter(a, b, row) {
    a = moment(a).format();
    b = moment(b).format();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

function operateFormatter(value, row, index) {
    var Querystring = "?" + "ProfileID=" + row.ProfileID + "&Print=1";
    var paid = row.paid == "1" ? '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:green;">' + row.ProfileID + " (" + (row.KMPLID) + ")" + '</a>' :
        '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:Red;">' + row.ProfileID + " (" + (row.KMPLID) + ")" + '</a>';

    return paid;
}

function operateFormatterhoroscope(value, row, index) {
    var cls = row.HoroscopeStatus == 1 ? "<img src='../../Images/ico_horoscope.jpg'></img>" : '';
    return '<a  onclick="return getPath(' + row.Cust_ID + ');" href="javascript:void(0);">' + cls + '</a>';
}

function rowStyle(row, index) {
    var classes = ['active', 'success', 'info', 'warning', 'danger'];

    if (index % 2 === 0 && index / 2 < classes.length) {
        return {
            classes: classes[index / 2]
        };
    }
    return {};
}

function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {

        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
    });
    return html.join('');
}

function havingprofile(value, dropdown) {
    var values = value;
    $.each(values.split(","), function (i, e) {
        $("" + dropdown + " option[value='" + e + "']").prop("selected", true);
    });
}
function dropdownsbind(data, masterrname, dropdownname) {
    var options = [];
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true
    };
    $.each(data, function (key, value) {
        if (masterrname != "BranchWithEmp") {
            options.push({ label: value.value, title: value.value, value: value.Id, selected: value.selected });
        }
        else {
            options.push({ label: value.ParentName, children: value.groupData, selected: value.selected });
        }
    });
    $('#' + dropdownname + '').multiselect('dataprovider', options);
    $('#' + dropdownname + '').multiselect('setOptions', secondConfigurationSet);
    $('#' + dropdownname + '').multiselect('rebuild');
}
function TextBoxbind(data, textbox) {
    $('#' + textbox + '').val(data);
}

function Radiobuttons(data, Radioname) {
    $("input[name='" + Radioname + "'][value='" + data + "']").attr("checked", true);
}

function checkboxesbind(data, checkbox) {
    if (data == true) {
        $('#' + checkbox + '').prop('checked', true);
    }
    else {
        $('#' + checkbox + '').prop('checked', false);
    }
}


var columns = [{
    field: 'HoroscopeStatus',
    title: '',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    formatter: operateFormatterhoroscope
}, {
    field: 'ProfileID',
    title: 'ProfileID',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    formatter: operateFormatter
},
	   {
	       field: 'GenderID',
	       title: 'Gender',
	       sortable: true,
	       searchable: true,
	       visible: true,
	       switchable: true,

	   }, {
	       field: 'LastName',
	       title: 'FirstName',
	       sortable: true,
	       searchable: true,
	       visible: true,
	       switchable: true, formatter: operateFormatteredit
	   },
	  {
	      field: 'FirstName',
	      title: 'SurName',
	      sortable: true,
	      searchable: true,
	      visible: true,
	      switchable: true,
	      formatter: operateFormatteredit
	  },
	   {
	       field: 'Caste',
	       title: 'Caste',
	       sortable: true,
	       searchable: true,
	       visible: true,
	       switchable: true
	   },
       {
           field: 'RegistrationDate',
           title: 'RegistrationDate',
           sortable: true,
           searchable: true,
           visible: true,
           switchable: true,
           sorter: sorter

       },
	   {
	       field: 'AllLinks',
	       title: 'AllLinks',
	       sortable: true,
	       searchable: true,
	       visible: true,
	       switchable: true, formatter: AlllinksFormatter
	   }

];
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
    onlyInfoPagination: false,
    striped: false,
    showColumns: true,
    showExport: true,
    search: true,
    pagination: true,
    rowStyle: rowStyle,
    classes: "table table-striped ",
    pageSize: "10",
    pageList: "[10,50,100]",
    paginationFirstText: "First",
    paginationPreText: "Previous",
    paginationNextText: "Next",
    paginationLastText: "Last",
    columns: columns,
    detailFormatter: detailFormatter,
    height: 650,
    mobileResponsive: "true",
    showLoading: true

};

var columnsMore = [{
    field: 'Name',
    title: 'Selected Field',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,

},
	  {
	      field: 'Value',
	      title: 'Selected Text',
	      sortable: true,
	      searchable: true,
	      visible: true,
	      switchable: true,

	  }
];
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
    columns: columnsMore,
    height: 550,
    mobileResponsive: "true",
    classes: "table table-no-bordered"
};


var flag = 0,
 pagesizec = 10,

    $table = $('#tablesubmit'),
 $tableextent = $('#tablemore'),
	$load = $('#btnsubmit'),
$append = $('.append'),
$loadmore = $('#btnmore'),
$toolbar = $('.toolbar'),
$getrow = $('.getrow'),
 rows, pages,
 staticerror = "Unfortunatly,we faced some error while accessing your request.",
 Norecords = "Sorry No recrds Found",
 dataa = [], custid, datav, Empid, Admin, Managementid,
 //Empid = GetEmpid(), Admin = GetAdmin(), Managementid = getmanagementid(),
 FilterArray = [], ownerid;


$(function () {
    var ids = CallApi("EmployeeMyProfiles.aspx/GetempAdminmanagemenetid", {});

    Empid = ids.d.Item1;
    Admin = ids.d.Item2;
    Managementid = ids.d.Item3;
    $tableextent.bootstrapTable(datatbaleoptionsmore);
    $table.bootstrapTable(datatbaleoptions);
    commonbindmaster();
    pageload();
    document.getElementById("HelpImg").style.display = 'block';

    if (Managementid == 1) {
        document.getElementById("isconfidential").style.display = 'block';
        document.getElementById("ishighconfidential").style.display = 'block';
    }
    else if (Admin == 1 || Admin == 2) {
        document.getElementById("isconfidential").style.display = 'block';
        document.getElementById("ishighconfidential").style.display = 'none';
    }
    else {
        document.getElementById("isconfidential").style.display = 'none';
        document.getElementById("ishighconfidential").style.display = 'none';
    }
});

function Callsearchajaxmethod(pagefrom, pageto) {
    datav.dt.pagefrom = pagefrom;
    datav.dt.pageto = pageto;
    datav.dt.Empid = Empid;

    var data = CallApi("sumitmethod", datav)

    dataa = [];
    if (data.d.length > 0) {

        document.getElementById("btnSlideshow").style.display = 'block';
        document.getElementById("btnmore").style.display = 'block';

        for (var i = 0; i < data.d.length; i++) {
            pages = data.d[i].Totalpages;
            rows = data.d[i].TotalRows;
            dataa.push({
                "ProfileID": data.d[i].ProfileID,
                "KMPLID": data.d[i].KMPLID,
                "SuperConfidentila": data.d[i].SuperConfidentila,
                "Confidential": data.d[i].Confidential,
                "GenderID": data.d[i].GenderID,
                "FirstName": data.d[i].FirstName,
                "LastName": data.d[i].LastName,
                "Caste": data.d[i].Caste,
                "RegistrationDate": data.d[i].RegistrationDate,
                "Totalpages": data.d[i].Totalpages,
                "TotalRows": data.d[i].TotalRows,
                "AllLinks": data.d[i].AllLinks,
                "Cust_ID": data.d[i].Cust_ID,
                "paid": data.d[i].paid,
                "RegistrationDate": data.d[i].RegistrationDate,
                "PhotoCount": data.d[i].PhotoCount,
                "Ownerflag": data.d[i].Ownerflag,
                "OwnerName": data.d[i].OwnerName,
                "onlinepaid": data.d[i].onlinepaid,
                "offlinepaid": data.d[i].offlinepaid,
                "onlinepaidcls": data.d[i].onlinepaidcls,
                "offlinepaidcls": data.d[i].offlinepaidcls,
                "HoroscopeStatus": data.d[i].HoroscopeStatus,
                "UploadedPhotoscount": data.d[i].UploadedPhotoscount,
                "PhotoshopCount": data.d[i].PhotoshopCount
            });
        }

        $('#Divtotalrows').html("<h1 id='h1rowsfound'><small> No of Profiles Found :</small>" + rows + "</h3>");
        if ($('#spanappend').html() == "NaN") {
            $('#toggleDemo').slideToggle('slow');
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

    }
    else {
        $('#toggleDemo').show();
        DynamicTimeAlert(Norecords, 'alert alert-danger', '4000');
        $('#Divtotalrows').html('<h4> Zero Profiles Found,Refine Your Search Criteria</h4>');
    }
    return dataa;
}

function GetMoreDataFromSlideshow(name, value) {

    FilterArray.push({ Name: name, Value: value });

    FilterArray = _.reject((_.reject(FilterArray, { Value: "" })), { Value: false });
}
//PAGE CLICK Events(LOAD,APPEND)
$(function () {
    $load.click(function () {
        flag = 0;
        flag += 10;
        datav = CollectFilterDataForsubmit();
        $('#spanappend').html("NaN");

        $append.show();
        var keyNames = _.keys(datav.dt);
        var keyValues = _.values(datav.dt);
        FilterArray = [];
        for (var i in keyNames) {
            if (keyNames[i].toString().search("ID") == -1)
                FilterArray.push({ Name: keyNames[i], Value: keyValues[i] });

        }
        FilterArray = _.reject((_.reject(FilterArray, { Value: "" })), { Value: false });
        $table.bootstrapTable('load', Callsearchajaxmethod(flag - 9, flag));

    });
    var from, to;
    $append.click(function () {
        pagesizec = parseInt(($(".page-size").html()));
        from = flag + 1;
        flag = to = flag + pagesizec;
        $table.bootstrapTable('prepend', Callsearchajaxmethod(from, to));
        return false;

    });
});
function CollectFilterDataForsubmit() {
    var convertJSDate = function (dateTime) {
        var dateArr = dateTime.split("-");
        var date1 = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
        date1 = (moment(date1).format('YYYY-MM-DD HH:MM:SS'));
        return date1;
    }
    datav = {
        dt: {
            Kmpl: $('#txtKMPLID').val(),
            Profileid: $('#txtProfileid').val(),
            HighConfidential: $("#chkHighConfidential").is(":checked"),
            Confidential: $("#chkIsConfidential").is(":checked"),
            Renewal: $("#chkRenewal").is(":checked"),
            GenderID: $("input:radio[name='gender']:checked").val(),
            Gender: gettextradiobuttons(),
            Surname: $('#txtsurname').val(),
            Chksurname: $("#chksurname").is(":checked"),
            FirstName: $('#txtfstname').val(),
            chkfirstname: $("#chkfstname").is(":checked"),
            TypeofprofileID: $("input:radio[name='Typeofprofile']:checked").val(),
            TypeofProfile: getTexttypeofprofile(),
            ApplicationstatusID: getvalues('#lstapplicationstatus'),
            Applicationstatus: getvaluestext('#lstapplicationstatus'),
            MarketingownerID: getvalues('#ddlMarketingowner'),
            Marketingowner: getvaluestext('#ddlMarketingowner'),
            BranchID: getvalues('#lstbranch'),
            Branch: getvaluestext('#lstbranch'),
            CasteID: getvalues('#ddlcaste'),
            Caste: getvaluestext('#ddlcaste'),
            OwneroftheprofileID: getvalues('#OwneroftheProfile'),
            Owneroftheprofile: getvaluestext('#OwneroftheProfile'),
            HavingprofilesID: getvalues('#lsthavingprofiles', 'Zero'),
            Havingprofiles: gethavingprofiletext('#lsthavingprofiles'),
            Assigneddatefromdate: $('#txtAssignFrom').val() != "" ? convertJSDate($('#txtAssignFrom').val()) : "",
            Assigneddatetodate: $('#txtAssignTO').val() != "" ? convertJSDate($('#txtAssignTO').val()) : "",
            DORFromdate: $('#txtdorfrom').val() != "" ? convertJSDate($('#txtdorfrom').val()) : "",
            DORTodate: $('#dorto').val() != "" ? convertJSDate($('#dorto').val()) : "",
            FatherName: $('#fstname').val(),
            MotherName: $('#txtmothername').val(),
            LogoutId: $("input:radio[name='logout']:checked").val(),
            Logout: gettextweblogin(),
            chkKmplexperiry: $("#chkKmplexperiry").is(":checked"),
            previousownerID: getvalues('#lstpreviousowner'),
            previousowner: getvaluestext('#lstpreviousowner'),
            verfiedcontacts: $("input:radio[name='verifiedcontacts']:checked").val(),
            WebsiteBlocked: $("input:radio[name='WebsiteBlocked']:checked").val()
        }
    }

    return datav;
}

$(function () {
    $loadmore.click(function () {
        $tableextent.bootstrapTable('load', FilterArray);
    });
});

function gettextradiobuttons() {
    if ($("input:radio[name='gender']:checked").val() == 1) {
        gender = "Female";
    }
    if ($("input:radio[name='gender']:checked").val() == 2) {
        gender = "Male";
    }
    if ($("input:radio[name='gender']:checked").val() == "") {
        gender = "Both";
    }
    return gender;
}
function getTexttypeofprofile() {
    if ($("input:radio[name='Typeofprofile']:checked").val() == 372) {
        Typeofprofile = "Paid";
    }
    else if ($("input:radio[name='Typeofprofile']:checked").val() == 373) {
        Typeofprofile = "Unpaid";
    }
    else {
        Typeofprofile = "Both";
    }
    return Typeofprofile;
}
function gettextweblogin() {
    if ($("input:radio[name='logout']:checked").val() == 1) {
        weblogin = "yes";
    }
    if ($("input:radio[name='logout']:checked").val() == 0) {
        weblogin = "No";
    }
    if ($("input:radio[name='logout']:checked").val() == "") {
        weblogin = "Both";
    }
    return weblogin;
}
function selectdatalist(dropdownid, commastring) {
    $('#' + dropdownid).multiselect('select', listToAray(commastring, ","));
}
//RESET RADIO BUTTONS AND ALL CONTROLS
$("#reset").click(function () {
    $table.bootstrapTable('removeAll');
    $('#Divtotalrows').html('');
    FilterArray = [];
});
function pageload() {
    // commonbindmaster();
    $('#lstapplicationstatus').multiselect('select', ['54']);
    $('#ddlcaste').multiselect('select', ['402']);
    $('#OwneroftheProfile').multiselect('select', [Empid]);
}
function bindmasterdata() {
    var methodnames = [{ methodname: "ProfileStatus", dropdownname: "lstapplicationstatus" },
        { methodname: "Branch", dropdownname: "lstbranch" },
        { methodname: "Caste", dropdownname: "ddlcaste" },
         { methodname: "BranchWithEmp", dropdownname: "ddlMarketingowner" },
       { methodname: "BranchWithEmp", dropdownname: "OwneroftheProfile" },
            { methodname: "BranchWithEmp", dropdownname: "lstpreviousowner" }];
    for (var i = 0; i < methodnames.length; i++) {
        GetmasterData(methodnames[i].methodname, methodnames[i].dropdownname);
    }
}

function commonbindmaster() {

    var Bindings = {
        Masterbind: {
            ProfileStatus: "ProfileStatus",
            Branch: "Branch",
            Caste: "Caste",
            BranchWithEmp: "BranchWithEmp"
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    var methodnames = [{ methodname: "ProfileStatus", dropdownname: "lstapplicationstatus", data: data.d.ProfileStatus },
       { methodname: "Branch", dropdownname: "lstbranch", data: data.d.Branch },
       { methodname: "Caste", dropdownname: "ddlcaste", data: data.d.Caste },
        { methodname: "BranchWithEmp", dropdownname: "ddlMarketingowner", data: data.d.BranchWithEmp },
      { methodname: "BranchWithEmp", dropdownname: "OwneroftheProfile", data: data.d.BranchWithEmp },
           { methodname: "BranchWithEmp", dropdownname: "lstpreviousowner", data: data.d.BranchWithEmp }];
    for (var i = 0; i < methodnames.length; i++) {
        GetmasterDataNew(methodnames[i].methodname, methodnames[i].dropdownname, methodnames[i].data);
    }
    return false;
}
function listToAray(fullString, separator) {
    var fullArray = [];

    if (fullString !== undefined) {
        if (fullString.indexOf(separator) == -1) {
            fullArray.push(fullString);
        } else {
            fullArray = fullString.split(separator);
        }
    }

    return fullArray;
}
//my profile slide shoe script
function closepopup() {
    $('#horoscopepopup').modal('hide');
    return false;
}
function Slideshowpage() {
    $('#myCarousel').show();
    $("#myCarousel .carousel-inner").html("");
    pageloadSlide();
    $('#myCarousel').carousel('pause');
    $('#playButton').show();
    $('#pauseButton').hide();
    $('#slidepopup').modal({ backdrop: 'static' });
    return false;
}
function dbbind(curPageVal, querystringType) {

    $('#myCarousel').find('.left').show();
    $('#myCarousel').find('.right').show();
    var totalItems = $('#myCarousel').find('.item').length;
    //start ajax method
    var
          stringdata = '';
    datav.dt.pagefrom = curPageVal + 1;
    datav.dt.pageto = curPageVal + 10;
    switch (querystringType) {
        case "Myprofile":
            var data = CallApi('sumitmethod', datav);
            if (data.d.length > 0) {
                $('#lblcurSlide').text(data.d[0].TotalRows);
                $("#slider-thumbs .carousel-inner div").removeClass("active");
                for (var i = 0; i < data.d.length; i++) {
                    curPageVal = curPageVal + i;
                    var strcustid = JSON.stringify(data.d[i].Cust_ID);
                    $("#lnkcustredirect").text(data.d[0].Cust_ID);
                    var strProfileid = JSON.stringify(data.d[i].ProfileID);
                    var strservicedate = data.d[i].serviceDate != '--' ? "<div id=ctl00_ContentPlaceHolder1_rptslider_ctl0" + curPageVal + "_divCreatedDate class='edit_page_details_item_desc clearfix'><h6><span id='ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_ServiceDate' style='font-weight:bold;'>ServiceDate</span></h6><h5><span style='color:Red;font-size:15px;font-weight:bold;' id='ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblservicedate'>" + data.d[i].serviceDate + "</span></h5></div>" : "";
                    var strimageurl = (data.d[i].imageurl).replace("~/", "../../");
                    var strProfilecolor = data.d[i].paid == "1" ? "style='color:Green;text-decoration:underline;margin-left:-16px;'" : "style='color:red;text-decoration:underline;margin-left: -16px;'";

                    var strConcidential = data.d[i].IsConfidential == true ? " C" : "";
                    var strSuperConfidential = data.d[i].SuperConfidentila == true ? " SC" : "";
                    var totalslides = $('#myCarousel').find('.item').length;
                    var onlyChildcolor = data.d[i].NoOfBrothers == "0" && data.d[i].NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;";
                    var ParentIntercaste = data.d[i].Intercaste == "True" ? "<div class= 'edit_page_details_item_desc clearfix' >"
                             + "<h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label33  style= font-weight:bold; >Parents InterCaste(F/M)</span></h6>"
                              + "<h5>"
                              + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel23 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblintercaste >" + data.d[i].fathercaste + "/" + data.d[i].mothercaste + "</span></div>"
                           + "</h5></div>" : "";
                    var strhorobtn = data.d[i].HoroscopeStatus == "1" ? "<input name=ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$ImaHoro id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_ImaHoro"
                    + "title=Click here to view Horoscope src=../../Images/ico_horoscope.jpg style=height:20px;width:25px; type=image onclick='return getPath(" + data.d[i].Cust_ID + ")'>" : "";
                    var strprofilegrade = data.d[i].ProfileGrade == "1" ? "A-(This ProfileId Contacts not Visible On Web)" : (data.d[i].ProfileGrade == "2" ? "B" : (data.d[i].ProfileGrade == "3" ? "C-(This ProfileId Contacts Visible On Web)" : "--(This ProfileId Contacts not Visible On Web)"));


                    var contactlinks = (Admin == 1 || data.d[i].Ownerflag == true) ? (" <a href='javascript:void(0);' id='lnkviewcontacts" + curPageVal + "' onclick='return redirectEditpartgeneralcontacts(" + strcustid + "," + JSON.stringify("contacts") + ");' class='col-lg-3' style='font-size: 14px;'>View Contacts</a>") : "";


                    var stractiveClass = totalslides == 0 ? 'item active' : 'item';

                    $("#slider-thumbs .carousel-inner ul").append("<li style='float:left;' class='item active'><a id='carousel-selector-" + i + "' onclick=$('#myCarousel').carousel(" + i + ");><img src='http://placehold.it/80x60&amp;text=one' class='img-responsive'></a></li>");

                    $("#myCarousel .carousel-inner").append("<div class='" + stractiveClass + "' data-slide-number='" + i + "'>"
                        + "<div class='modal-header' style='height: 23px;padding-top: 0px;'>"
                         + "<div class=row style='padding-left:163px;'>"
                             + "<a href='javascript:void(0);' id='lnkeditpartnerpreft" + curPageVal + "' onclick='return redirectEditpartgeneralcontacts(" + strcustid + "," + JSON.stringify("Edit") + ");' class=col-lg-4 style='font-size: 14px;'>Edit Partnerpreference</a>"

                            + " <a href='javascript:void(0);' id='lnkgeneralsrch" + curPageVal + "' onclick='return redirectEditpartgeneralcontacts(" + strProfileid + "," + JSON.stringify("general") + ");' class='col-lg-3' style='font-size: 14px;'>General search</a>"

                            + contactlinks
            + "</div>"
        + "</div>"
+ "<ul><li class='col-lg-8 col-md-8 col-lxs-8'>"
                            + "<div class='clearfix'></div><div class='edit_page_details_item_desc clearfix'>"
                           + "<h6><span id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label31 style=font-weight:bold;>ProfileID</span></h6>"
                           + "<h5><div class=row><div class='col-lg-12'><div class='col-lg-2'><div id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel13>"
                           + "<a onclick=ViewProfilewithvalue(" + strProfileid + "); id=ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lnkbtnProfileID class='lnkbtnEdit' href=javascript:void(0) " + strProfilecolor + ">" + data.d[i].ProfileID + "</a>" + "</div></div>"
                            + " <div class='col-lg-8' ><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel14 >"
                         + "<span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblKMpl  style='margin-left: -16px;' >" + data.d[i].KMPLID + "</span>" + strhorobtn + "<span><b>" + strConcidential + ' ' + strSuperConfidential + "</b></span></div></div></div></div></h5></div>"
                          + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_NAME  style= font-weight:bold; >Name</span></h6>"
                           + "<h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_hhhh ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblName  " + onlyChildcolor + " >" + data.d[i].LastName + " " + data.d[i].FirstName + "</span></div> </h5></div>"
                          + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label3  style= font-weight:bold; >DOB(age)</span> </h6>"
                           + "<h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel2 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblDob >" + data.d[i].DOB + "</span>"
                            + "<span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblAge >" + "(" + data.d[i].Age + ")" + "</span></div></h5></div>"
                         + "  <div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label5  style= font-weight:bold; >Time of Birth</span>"
                          + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel3 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lbltob >" + data.d[i].TOB + "</span></div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label6  style= font-weight:bold; >Place of Birth</span></h6><h5>"
                           + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel4 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblPlaceOfBirth >" + data.d[i].PlaceOfBirth + "</span>"
                           + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label7  style= font-weight:bold; >Gothram</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel5 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblGothram >" + data.d[i].Gothram + "</span>"
                              + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label8  style= font-weight:bold; >Caste</span>"
                             + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel15 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblCaste >" + data.d[i].Caste + "</span>"
                            + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblStarIDs  style= font-weight:bold; >Star</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel6 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblStardisplay >" + data.d[i].Star + "</span>"
                            + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label11  style= font-weight:bold; >Color</span>"
                            + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel16 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblcolor >" + data.d[i].Color + "</span></div>"
                             + "</h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label9  style= font-weight:bold; >Height</span>"
                               + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel11 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblheight >" + data.d[i].Height + "</span>"
                               + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label24  style= font-weight:bold; >Qualification</span>"
                                + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel17 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label17 >" + data.d[i].EducationGroup + " " + data.d[i].EduGroupnamenew + "</span>"
                                + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label18  style= font-weight:bold; >Profession</span>"
                                + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel12 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblprofession >" + data.d[i].Profession + "</span>"
                                + "</div></h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label26  style= font-weight:bold; >Job Location</span></h6><h5>"
                               + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel18 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lbljoblocation >" + data.d[i].JobLocation + "</span></div></h5></div>"
                           + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label20  style= font-weight:bold; >Income(P.M)</span></h6><h5>"
                           + "<div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel19 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_salarycurerency >" + data.d[i].currency + "</span><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblincome >" + data.d[i].Income + "</span></div>"
                           + "</h5></div><div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label22  style= font-weight:bold; >Father Native</span></h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel20 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblffnative >" + data.d[i].FFNative + "</span></div></h5></div>"
                            + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label28  style= font-weight:bold; >Mother Native</span></h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel21 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblmfnative >" + data.d[i].MFNative + "</span></div></h5></div>"
                             + "<div class= 'edit_page_details_item_desc clearfix' ><h6><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_Label30  style= font-weight:bold; >Property(Lakhs)</span>"
                              + "</h6><h5><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UpdatePanel22 ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblproperty >" + data.d[i].Property + "</span></div>"
                             + "</h5></div>" + ParentIntercaste
                             + strservicedate
                             + "<div id=ctl00_ContentPlaceHolder1_rptslider_ctl0" + curPageVal + "_divProfileGrade class='edit_page_details_item_desc clearfix'><h6><span id='ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_ProfileGrade'>Profile Grade</span></h6><h5><span  id='ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblProfileGrade'>" + strprofilegrade + "</span></h5></div>"
                             + "</li>"
                           + "<li class= 'col-lg-3 col-md-3 col-xs-3 col-sm-3 col-lg-pull-2  col-md-pull-2 col-xs-pull-2 col-sm-pull-2'><div class= 'row' ><div class= 'col-lg-6' ><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblfff ></span>"
                           + "</div><div class= 'col-lg-5'  id= divshort ><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_dd >"

                              + "</div></div></div><div id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_UP1 ><input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$imglst  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_imglst  src= " + strimageurl + "  type= image onclick='return getimgPath(" + strcustid + "," + strProfileid + "," + data.d[i].PhotoCount + ")'>"
                            + "<br><div class= 'col-lg-8 col-lg-offset-5'><input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$cmdPrev  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_cmdPrev  src= ../../Images/btn_arowl.png  type= image >"
                            + "<a id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lnknoofphotos  href= javascript:__doPostBack('ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$lnknoofphotos','') onclick='return getimgPath(" + strcustid + "," + strProfileid + "," + data.d[i].PhotoCount + ")'><span id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_lblCurrentPageslide  style= color:Black;font-size:9pt; >No of Photos " + data.d[i].PhotoCount + "</span></a>"
                           + "<input name= ctl00$ContentPlaceHolder1$rptslider$ctl" + curPageVal + "$cmdNext  id= ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_cmdNext  src= ../../Images/btn_arowr.png  type= image >"
                             + "</div></div></li></ul></div>"

    )
                    document.getElementById("ctl00_ContentPlaceHolder1_rptslider_ctl" + curPageVal + "_imglst").disabled = strimageurl.indexOf("noimage") == -1 ? false : true;
                }
                if ($("#myCarousel .carousel-inner .item:first").hasClass("active")) {
                    $('#myCarousel').find('.left').hide();
                    $('#myCarousel').find('.right').show();
                }
            }

            break;
    }
}

function gotoSlide(e) {
    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#myCarousel').carousel(parseInt($(e).val()) - 1);
    }
    else {

        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}

function getPath(custid) {
    debugger;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../Services/KaakateeyaServices.asmx/GetUrl",
        data: "{'strcustId':'" + custid + "'}",
        dataType: "json",
        async: false,
        success: function (data) {
            if ((data.d).indexOf('.html') != -1) {
                window.open(data.d, '_blank');
            }
            else {
                $('#ctl00_ContentPlaceHolder1_imghoropopup').attr("src", data.d);
                $('#horoscopepopup').modal({ backdrop: 'static', keyboard: false });
            }
            return false;
        },
        error: function (result) {
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');
        }
    });
    return false;
}
//not using.it is for thumbnaul carosal
function thumbNavigation(val) {
    $('#myCarousel').carousel(val);
    return false;
}
function pageloadSlide() {
    var currentslide = 1, totalItems = $('#myCarousel').find('.item').length, QuerystringType = "Myprofile";
    if (totalItems == 0) {

        dbbind(totalItems, QuerystringType);
        $('.num').html('Profile ' + '' + 1);
        $("#lblcurrentprofile").text(1);
        if ($('#playButton').is(":visible")) {
            $('#myCarousel').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
        }
    }
    $('#myCarousel').bind('slid', function () {
        $('.list-inline li a').removeClass('selected');
        $('[id=carousel-selector-' + $('#myCarousel').find('div.active').index() + ']').addClass('selected');
        var totalItems1 = $('#myCarousel').find('.item').length;

        var currentIndex1 = $('#myCarousel').find('div.active').index() + 1;

        if ($('#playButton').is(":visible")) {
            $('#myCarousel').carousel('pause');
            $('#playButton').show();
            $('#pauseButton').hide();
        }
        $('#myCarousel').find('div.active').index()
        if (currentslide < currentIndex1) {
            if (parseInt(totalItems1) - parseInt(currentIndex1) == 4) {
                dbbind(totalItems1, QuerystringType);
            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex1)
                $("#lnkLastSlide").text(currentIndex1);
        }
        currentslide = currentIndex1;
        $('.num').html('Profile ' + '' + currentIndex1);
        $("#lblcurrentprofile").text(currentIndex1);


        // $("#lnkcustredirect").text($("#lblCustIDh" + currentIndex1).text());
    });


    //play and pause function on click event
    $('#myCarousel').carousel({
        interval: 2000,
        pause: "false"
    });
    $('#playButton').click(function () {

        $('#myCarousel').carousel('cycle');
        $('#playButton').hide();
        $('#pauseButton').show();
    });
    $('#pauseButton').click(function () {
        $('#myCarousel').carousel('pause');
        $('#playButton').show();
        $('#pauseButton').hide();
    });


    //method to move slide on left or right arrow press

    $(document).bind('keyup', function (e) {

        var totalItems = $('#myCarousel').find('.item').length;
        var currentIndex = $('#myCarousel').find('div.active').index() + 1;
        if (e.which == 39) {
            if (totalItems != currentIndex)
                $('#myCarousel').carousel('next');
        }
        else if (e.which == 37) {
            if (currentIndex != 1)
                $('#myCarousel').carousel('prev');
        }

    });
    //hide slide arrows for  first and last slide slides  
    var checkitem = function () {
        var $this;
        $this = $("#myCarousel");
        if ($("#myCarousel .carousel-inner .item:first").hasClass("active")) {
            $('#myCarousel').find('.left').hide();
            $('#myCarousel').find('.right').show();
        }
        else if ($("#myCarousel .carousel-inner .item:last").hasClass("active")) {
            $('#myCarousel').find('.left').show();
            $('#myCarousel').find('.right').hide();

        }
        else {
            $('#myCarousel').find('.left').show();
            $('#myCarousel').find('.right').show();
        }
    };

    $("#myCarousel").on("slid.bs.carousel", "", checkitem);
    $(function () {

        var wage = document.getElementById("txtGotoVal");
        wage.addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                gotoSlide(wage);
                $('#myCarousel').carousel('pause');
                $('#playButton').show();
                $('#pauseButton').hide();
                return false;
            }

        });
    });

}

function redirectEditpartgeneralcontacts(custid, type) {
    switch (type) {
        case "Edit":
            var QueryStringEdit = "?" + "CustID=" + custid + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";
            window.open("EmployeePartnerPreference.aspx" + QueryStringEdit);
            break;
        case "general":
            var QueryStringEdit = "?" + "CustID=" + custid + "";
            window.open("EmployeeGeneralSearchLatest.aspx" + QueryStringEdit);
            break;
        case "contacts":
            var QueryStringEdit = "?" + "CustID=" + custid + "&EmpID=" + Empid + "&Admin=" + Admin + "&owner=" + ownerid + "";
            window.open("EmployeeEditContacts.aspx" + QueryStringEdit);
            break;
    }
    return false;
}




