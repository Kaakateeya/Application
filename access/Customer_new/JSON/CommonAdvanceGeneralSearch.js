
'use strict'
var flagstartindex = 1, flagEndindex = 10, SelfData, count = 0, names = "", SearchRequestText, Empid, TotalRow, TotalRows, rowss, FilterArray = [], Typeofbind, rows;
function PageredirectstoAdvance(typeofpage) {
    var url = window.location.href;

    switch (typeofpage) {
        case "General":
            if (url.indexOf('EmployeeGeneralSearchLatest') == -1)
                window.location.replace('EmployeeGeneralSearchLatest.aspx');
            else {

                $('#headername').html("General Search");
                $('#generalsearchpopup').modal({ backdrop: 'static', keyboard: false });
            }
            break;
        case "Advanced":
            if (url.indexOf('EmployeeAdvancedSearchLatest') == -1)
                window.location.replace('EmployeeAdvancedSearchLatest.aspx');
            else {

                $('#headername').html("Advanced Search");
                $('#generalsearchpopup').modal({ backdrop: 'static', keyboard: false });
            }
            break;
    }
    return false;
}
$(function () {
    Empid = GetEmpid();
    $('#lstselectedprofiles').on('change', function (e) {
        $('#trpopupexpressimages').html("");
        var optionSelected = $("option:selected", this);
        var textSelected = $.trim(optionSelected.text());
        var object = {
            Profileid: textSelected

        };
        var data = CallApi("EmployeeGeneralSearchLatest.aspx/BindImagesExpress", object);
        if (data.d.length > 0) {
            modalpopupshowhide("popimages", "show");
            var ImageNames = "";
            for (var i = 0; i < data.d.length; i++) {

                $('#trpopupexpressimages').append("<td><input id='chktick" + i + "' name='chktick' checked=checked type=checkbox value=" + data.d[i].Photonames + ">"
                                                + "<img id='imglst" + i + "' src=" + data.d[i].Url + ">"
                                                + "<label id='hdncustid" + i + "' style='display: none;'>" + data.d[i].Profileid + "</label>"
                                                + "<span id='hdnphotonames" + i + "' style='display: none;'>" + data.d[i].Photonames + "</span>"
                                            + "</td>");
                ImageNames = ImageNames != "" ? (ImageNames + "," + data.d[i].Photonames) : data.d[i].Photonames;

            }
            $('#buttonDiv').html("<button id='btnEduCancel' class='button_custom button_custom_reset pull-right' type='button' onclick='return Applychanges(" + JSON.stringify(textSelected) + "," + JSON.stringify(ImageNames) + ");'>Apply Chnages</button>"
                                         );
        }
        return false;
    });
    $('input:radio[name=rbtntypeofservices]').change(function () {
        if (this.value == '367') {
            document.getElementById("divbasicfull").style.display = "none";
            $("#chkrvrsend").prop("disabled", true);
        }
        else {
            document.getElementById("divbasicfull").style.display = "block";
            $("#chkrvrsend").prop("disabled", false);
        }
    });
    $("#ddlModeofservice").on('change', function () {
        if (getvalues("#ddlModeofservice") != "0" && getvalues("#ddlModeofservice") == "353") {
            $('#ddlRelationship').multiselect('select', ['0'], true);
            $('#txttoname').val("");
            document.getElementById("divRelationship").style.display = "none";
            document.getElementById("divRelationshipName").style.display = "none";
        }
        else {
            document.getElementById("divRelationship").style.display = "block";
            document.getElementById("divRelationshipName").style.display = "block";
        }
    });
    if (PageID == "1") {
        $('#headername').html("General Search");
    }
    else {
        $('#headername').html("Advanced Search");
    }
    $('#generalsearchpopup').modal({ backdrop: 'static', keyboard: false });
});
var SearchRequest = {};
function submitGeneralSearch(fromVal, Toval) {
    if (fromVal == undefined && Toval == undefined) {
        SearchRequest.genearlsearchreq = {
            CustID: $('#txtprofileid').val() != "" ? CallApi("GetCustID", { profileid: $('#txtprofileid').val() }).d : null,
            GenderID: $("input:radio[name='gender']:checked").val() != undefined ? $("input:radio[name='gender']:checked").val() : null,
            GenderText: null,
            AgeFromID: getvalues('#ddlFromAge'),
            AgeFromText: null,
            AgeToID: getvalues('#ddlToAge'),
            AgeToText: null,
            HeightFromID: getvalues('#ddlFromheight'),
            HeightFromText: null,
            HeightToID: getvalues('#ddlToheight'),
            HeightToText: null,
            MaritalstatusID: getvalues('#lstMaritalstatus'),
            MaritalstatusText: null,
            ReligionID: getvalues('#ddlreligionid'),
            ReligionText: null,
            MothertongueID: getvalues('#lstMothertongue'),
            MothertongueText: null,
            casteID: getvalues('#lstCaste'),
            castIDText: null,
            jCountryID: PageID == 1 ? getvalues('#lstCountrylivingin') : null,
            jCountryText: null,
            EducationIDss: PageID == 1 ? getvalues('#lsteducationcategory') : null,
            EducationTextss: null,
            ProfessionID: PageID == 1 ? (getvalues('#lstprofession')) : (getvalues('#lstprofessionarea')),
            ProfessionText: null,
            Showinprofile: GetPhotoandHoroscopevalues("photo"),
            ShowinprofileText: null,
            RegionID: getvalues('#lstregion'),
            RegionText: null,
            BranchID: getvalues('#lstbranch'),
            BranchText: null,
            Dateofregfrom: $('#txtdorfrom').val() != "" ? $('#txtdorfrom').val() : null,
            Dateofregto: $('#txtdorto').val() != "" ? $('#txtdorto').val() : null,
            LastestLoginsfrom: $('#txtlatestloginfrom').val() != "" ? $('#txtlatestloginfrom').val() : null,
            LastestLoginsto: $('#txtlatestloginto').val() != "" ? $('#txtlatestloginto').val() : null,
            ApplicationstatusID: getvalues('#lstapplicationstatus'),
            ApplicationstatusText: null,
            PropertyValuefrom: $('#txtannualfrom').val() != "" ? $('#txtannualfrom').val() : null,
            PropertyValueto: $('#txtannualto').val() != "" ? $('#txtannualto').val() : null,
            AnnualincomeID: getvalues('#ddlannualincome') != "" && getvalues('#ddlannualincome') != 0 ? getvalues('#ddlannualincome') : null,
            AnnualincomeText: null,
            AnnualIncomefrom: $('#txtannualincome').val() != "" ? $('#txtannualincome').val() : null,
            AnnualIncometo: $('#txtannualincometo').val() != "" ? $('#txtannualincometo').val() : null,
            ProfileID: $('#txtprofileids').val() != "" ? $('#txtprofileids').val() : null,
            SeriousMatch: null,
            OnlyConfidential: $("#chkshowonlyconfidential").attr("checked") ? 1 : 0,
            slidegride: null,
            ComplexionID: getvalues('#lstComplexion'),
            ComplexionText: null,
            bodytypeID: getvalues('#lstbodytype'),
            bodytypeText: null,
            physicalStatusID: getvalues('#lstphysical'),
            physicalStatusText: null,
            EducationCategoryID: PageID == 2 ? (getvalues('#lsteducationcategory')) : null,
            EducationCategoryText: null,
            EducationID: getvalues('#lsteducation'),
            EducationText: null,
            EducationSpecializationID: getvalues('#lsteduspecialisation'),
            EducationSpecializationText: null,
            University: $('#txtuniversity').val() != "" ? $('#txtuniversity').val() : null,
            ProfessionAreaID: getvalues('#lstprofessiongroup'),
            ProfessionAreaText: null,
            CountryID: PageID == 2 ? (getvalues('#lstCountrylivingin')) : null,
            CountryText: null,
            StateID: getvalues('#lststate'),
            StateText: null,
            DistrictID: getvalues('#lstdistrict'),
            DistrictText: null,
            CityID: getvalues('#lstcity'),
            CityText: null,
            VisaStatusID: getvalues('#lstvisastatus'),
            VisaStatusText: null,
            Arrivaldateto: $('#txtarrivaldateto').val() != "" ? $('#txtarrivaldateto').val() : null,
            Departuredatefrom: $('#txtdeparturedatefrom').val() != "" ? $('#txtdeparturedatefrom').val() : null,
            DeparturedateTo: $('#txtdeparuredateto').val() != "" ? $('#txtdeparuredateto').val() : null,
            StarLanguageID: getvalues('#ddlstarlanguages'),
            StarLanguageText: null,
            StarsID: getvalues('#lststar'),
            StarsText: null,
            KojadoshamID: $("input:radio[name='rbtnkujadosham']:checked").val(),
            KojadoshamText: null,
            DrinkID: getvalues('#lstdrink'),
            DrinkText: null,
            SmokeID: getvalues('#lstsmoke'),
            SmokeText: null,
            DietID: getvalues('#lstdiet'),
            DietText: null,
            preferedCityID: $('#txtpreferedCity').val() != "" ? $('#txtpreferedCity').val() : null,
            //getvalues('#lstpreferedCity'),
            preferedCityText: null,
            MembershipTypeID: getvalues('#lstmembershiptype', "Zero"),
            MembershipTypeText: null,
            WorkingwithID: getvalues('#lstworkingwith'),
            WorkingwithText: null,
            CompanyName: $('#txtcmpyname').val() != "" ? $('#txtcmpyname').val() : null,
            Residingsincefrom: $('#txtresidingsincefrom').val() != "" ? $('#txtresidingsincefrom').val() : null,
            ResidingsinceTo: $('#txtresidingSinceTo').val() != "" ? $('#txtresidingSinceTo').val() : null,
            Arrivaldatefrom: $('#txtarrivaldatefrom').val() != "" ? $('#txtarrivaldatefrom').val() : null,
            FirstName: $('#txtfname').val() != "" ? $('#txtfname').val() : null,
            LastName: $('#txtlname').val() != "" ? $('#txtlname').val() : null,
            PreferedCountryID: getvalues('#lstpreferedcountry'),
            PreferedCountryText: null,
            PreferedStateID: getvalues('#lstpreferedstate'),
            PreferedStateText: null,
            preferedDistrictID: getvalues('#lstpreferedDistrict'),
            preferedDistrictText: null,
            HoroScope: GetPhotoandHoroscopevalues("horo"),
            Status_Photo: getallcheckboxvalues('chkPhoto'),
            Status_Education: getallcheckboxvalues('chkeducation'),
            Status_Property: getallcheckboxvalues('chkproperty'),
            Status_Family: getallcheckboxvalues('chkfamily'),
            Status_Profession: getallcheckboxvalues('chkprofession'),
            PageID: PageID,
            startindex: fromVal == undefined ? 1 : fromVal,
            EndIndex: Toval == undefined ? 10 : Toval,
            EmpID: Empid
        }
        SearchRequestText = {

            Gender: $("input:radio[name='gender']:checked").val() == 1 ? 'Groom' : ($("input:radio[name='gender']:checked").val() == 2 ? 'Bride' : null),
            AgeFrom: getvaluestextSingle('#ddlFromAge')[0],
            AgeTo: getvaluestextSingle('#ddlToAge')[0],
            HeightFrom: getvaluestextSingle('#ddlFromheight')[0],
            HeightTo: getvaluestextSingle('#ddlToheight')[0],
            Maritalstatus: getvaluestext('#lstMaritalstatus'),
            Religion: getvaluestext('#ddlreligionid'),
            Mothertongue: getvaluestext('#lstMothertongue'),
            caste: getvaluestext('#lstCaste'),
            jCountry: PageID == 1 ? getvaluestext('#lstCountrylivingin') : null,
            Education: PageID == 1 ? getvaluestext('#lsteducationcategory') : null,
            Profession: PageID == 1 ? (getvaluestext('#lstprofession')) : (getvaluestext('#lstprofessionarea')),
            Region: getvaluestext('#lstregion'),
            Branch: getvaluestext('#lstbranch'),
            Applicationstatus: getvaluestext('#lstapplicationstatus'),
            Annualincome: getvaluestextSingle('#ddlannualincome')[0] != "" && getvaluestextSingle('#ddlannualincome')[0] != 0 ? getvaluestextSingle('#ddlannualincome')[0] : null,
            Complexion: getvaluestext('#lstComplexion'),
            bodytype: getvaluestext('#lstbodytype'),
            physicalStatus: getvaluestext('#lstphysical'),
            EducationCategory: PageID == 2 ? (getvaluestext('#lsteducationcategory')) : null,
            EducationSpecialization: getvaluestext('#lsteduspecialisation'),
            ProfessionArea: getvaluestext('#lstprofessiongroup'),
            Country: PageID == 2 ? (getvaluestext('#lstCountrylivingin')) : null,
            State: getvaluestext('#lststate'),
            District: getvaluestext('#lstdistrict'),
            City: getvaluestext('#lstcity'),
            VisaStatus: getvaluestext('#lstvisastatus'),
            StarLanguage: getvaluestextSingle('#ddlstarlanguages')[0],
            Stars: getvaluestext('#lststar'),
            KujaDosham: $("input:radio[name='rbtnkujadosham']:checked").val() == 0 ? 'Yes' : ($("input:radio[name='rbtnkujadosham']:checked").val() == 1 ? 'No' : ($("input:radio[name='rbtnkujadosham']:checked").val() == 2 ? 'Doesnt Matter' : null)),
            Drink: getvaluestext('#lstdrink'),
            Smoke: getvaluestext('#lstsmoke'),
            Diet: getvaluestext('#lstdiet'),
            MembershipType: getvaluestext('#lstmembershiptype', "Zero"),
            Workingwith: getvaluestext('#lstworkingwith'),
            PreferedCountry: getvaluestext('#lstpreferedcountry'),
            PreferedState: getvaluestext('#lstpreferedstate'),
            preferedDistrict: getvaluestext('#lstpreferedDistrict'),
            preferedCity: $('#txtpreferedCity').val() != "" ? $('#txtpreferedCity').val() : null,
            OnlyConfidential: $("#chkshowonlyconfidential").attr("checked") ? 'True' : 'False',
            Dateofregfrom: $('#txtdorfrom').val() != "" ? $('#txtdorfrom').val() : null,
            Dateofregto: $('#txtdorto').val() != "" ? $('#txtdorto').val() : null,
            LastestLoginsfrom: $('#txtlatestloginfrom').val() != "" ? $('#txtlatestloginfrom').val() : null,
            LastestLoginsto: $('#txtlatestloginto').val() != "" ? $('#txtlatestloginto').val() : null,
            PropertyValuefrom: $('#txtannualfrom').val() != "" ? $('#txtannualfrom').val() : null,
            PropertyValueto: $('#txtannualto').val() != "" ? $('#txtannualto').val() : null,
            AnnualIncomefrom: $('#txtannualincome').val() != "" ? $('#txtannualincome').val() : null,
            AnnualIncometo: $('#txtannualincometo').val() != "" ? $('#txtannualincometo').val() : null,
            SearchedToProfileID: $('#txtprofileids').val() != "" ? $('#txtprofileids').val() : null,
            University: $('#txtuniversity').val() != "" ? $('#txtuniversity').val() : null,
            Arrivaldateto: $('#txtarrivaldateto').val() != "" ? $('#txtarrivaldateto').val() : null,
            Departuredatefrom: $('#txtdeparturedatefrom').val() != "" ? $('#txtdeparturedatefrom').val() : null,
            DeparturedateTo: $('#txtdeparuredateto').val() != "" ? $('#txtdeparuredateto').val() : null,
            CompanyName: $('#txtcmpyname').val() != "" ? $('#txtcmpyname').val() : null,
            Residingsincefrom: $('#txtresidingsincefrom').val() != "" ? $('#txtresidingsincefrom').val() : null,
            ResidingsinceTo: $('#txtresidingSinceTo').val() != "" ? $('#txtresidingSinceTo').val() : null,
            Arrivaldatefrom: $('#txtarrivaldatefrom').val() != "" ? $('#txtarrivaldatefrom').val() : null,
            FirstName: $('#txtfname').val() != "" ? $('#txtfname').val() : null,
            LastName: $('#txtlname').val() != "" ? $('#txtlname').val() : null
        };
        SlideRefresh('myCarousel', 'lblcurSlide', 'lnkLastSlide');
    }
    else {
        SearchRequest.genearlsearchreq.startindex = fromVal;
        SearchRequest.genearlsearchreq.EndIndex = Toval;
    }
    if ($('#txtprofileid').val() != "" && $('#txtprofileid').val() != null) {
        $("#lnkshortlistpopup").show();
        $("#divimgfrompic").show();
        $("#lblsearchprofileid").show();
        $("#lblsearchprofileid").html("");
        $("#lnkPatnerprefercencedata").show();
    }
    else {
        $("#lnkshortlistpopup").hide();
        $("#divimgfrompic").hide();
        $("#lblsearchprofileid").show();
        $("#lnkPatnerprefercencedata").hide();
        $("#lblsearchprofileid").html("Without Profile ID");

        $("#lblNamefrom").html("");
        $("#lnkprofileidfrom").html("");
    }
    var data = CallApi('EmployeeGeneralSearchLatest.aspx/GetgeneralSearchSlide', SearchRequest);
    console.log('ResultSet');
    console.log(data.d);
    if (data != undefined && data.d != undefined && data.d.length > 0) {
        $('#lblnoofrecords').text(" of " + data.d[0].TotalRows);
        TotalRows = data.d[0].TotalRows;
        if (SelfData != undefined && SelfData != null) {
            $('#imgfrompic').attr('src', SelfData.d.PhotoImageUrl);
            $('#imgfrompic').attr('style', 'display:block;height: 54px; width: 60px;');
            //$('#lnkPatnerprefercencedata').attr('style', 'display:block;');
            $('#lnkPatnerprefercencedata').show();
            $('#lblNamefrom').text(SelfData.d.SelfName != "" ? SelfData.d.SelfName : "");
            $('#lnkprofileidfrom').text("(" + SelfData.d.ProfileID + ")");
            $('#lblhiddenprofileid').html(SelfData.d.ProfileID);
        }
        else {
            $('#imgfrompic').attr('style', 'display:none;');
            //$('#lnkPatnerprefercencedata').attr('style', 'display:none;');
            $('#lnkPatnerprefercencedata').hide();
        }
        if (fromVal == undefined && Toval == undefined && $('#lblpaidtype').text() == "true") {
            ShowOnlyAlertText('Please upgrade Your MemberShip', 'alert alert-danger');
        }

        if ($("input:radio[name='viewGroup']:checked").val() == 1) {
            rows = data.d[0].TotalRows;
            gridView(data.d, fromVal == undefined && Toval == undefined ? 'load' : 'prepend');
            if ($('#spanappend').html() == "NaN") {
                if (parseInt(rows) > 10) {
                    $('#spanappend').html(parseInt(rows) - parseInt(data.d.length));
                }
                else {
                    $('#spanappend').html("0");
                }
            }
            else {

                if (parseInt($('#spanappend').html()) > 10) {
                    $('#spanappend').html(parseInt($('#spanappend').html()) - parseInt(data.d.length));
                }
                else {
                    $('#spanappend').html("0");
                }
            }
        }
        else {
            bindSlide(data.d, 'myCarousel');


            $('#myCarousel .carousel-control.left').attr('style', 'display:none;');
            $('#myCarousel .carousel-control.right').attr('style', 'display:block;');
            $('.num').html('Profile ' + '' + 1);
            pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');

        }
    }
    else {
        if (fromVal == undefined && Toval == undefined) {
            ShowOnlyAlertText('No record Found', 'alert alert-danger');
        }
    }
    return false;
}
function Relationbind(textid, ddlrelation) {
    var options = [];
    var secondConfigurationSet = {
        includeSelectAllOption: true,
        enableFiltering: true,
        enableClickableOptGroups: true,
        inheritClass: true,
        nonSelectedText: 'Any',
        allSelectedText: 'All Selected',
        selectAllText: 'Check all!',
        disableIfEmpty: true
    };
    var id = $(textid).val();
    var object = {
        strprofileId: id

    };
    var data = CallApi('GetRelationShipOnCustID', object);
    if (data.d.length > 0) {
        if (!$("#" + ddlrelation + "").hasClass("multiple")) {
            options.push({ label: "--Select--", title: "--select--", value: "0" });
        }
        $.each(data.d, function (key, value) {

            options.push({ label: value.value, title: value.value, value: value.Id });

        });

        $("#" + ddlrelation + "").multiselect('dataprovider', options);
        $("#" + ddlrelation + "").multiselect('setOptions', secondConfigurationSet);
        $("#" + ddlrelation + "").multiselect('rebuild');
    }
    var Profileids = {
        Profileid: id

    };
    var data = CallApi('EmployeeGeneralSearchLatest.aspx/Getcheckoutlimits', Profileids);
    hidelabelbasedonstring("lblmembershipexp", data.d.onlyDate);
    hidelabelbasedonstring("lblpoints", data.d.totalpoints);
    hidelabelbasedonstring("lblbalancepoints", data.d.balpoints);
    data.d.VisibleNomembership == "false" ? document.getElementById("lblnomembership").style.display = "none" : document.getElementById("lblnomembership").style.display = "block";
    hidelabelbasedonAntherlabel("membershipexpdate", "lblmembershipexp");
    hidelabelbasedonAntherlabel("Balancepoints", "lblbalancepoints");
    hidelabelbasedonAntherlabel("lbltoalpoints", "lblpoints");
    $('#lblpaidtype').html(data.d.VisibleNomembership);
    data.d.disabled == "1" ? $("input[type=radio][value=359]").attr("disabled", true) : $("input[type=radio][value=359]").attr("disabled", false);
    //return false;

}
function getRelationshipnamae(ddlrelation, txtfirstname, txtlastname, txttoname, txtfromprofile) {

    var BindNames = {
        Relation: {
            Relationshipid: $('#' + ddlrelation + ' option:selected').val() > 0 ? $('#' + ddlrelation + ' option:selected').val() : null,
            profileid: $('#' + txtfromprofile + '').val(),
        }
    };
    var data = CallApi('GetRelationNamesShipOnCustID', BindNames);
    if (data != null) {
        $('#' + txtfirstname + '').val(data.d.FirstName);
        $('#' + txtlastname + '').val(data.d.LastName);
        $('#' + txttoname + '').val(data.d.FirstName + " " + (data.d.LastName != null ? data.d.LastName : ""));
    }
    return false;
}

function checktext() {
    var Profile = document.getElementById("txtprofileid");
    var Relationship = document.getElementById("ddlrelation");
    var Firstname = document.getElementById("txtfirstname");
    var LastName = document.getElementById("txtlastname");
    var chkissuggestable = document.getElementById("chkissuggestable");
    if (Profile.value == "" || Profile.value == null) {
        alert("Please enter profile ID");
        return false;
    }
    if ($('#chkissuggestable').prop("checked") == false) {
        if ($('#ddlrelation option:selected').val() <= "0") {
            alert("Please select relationship");
            return false;
        }
        if (Firstname.value == "" || Firstname.value == null) {
            alert("Please enter first name");
            return false;
        }
        if (LastName.value == "" || LastName.value == null) {
            alert("Please enter last name");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
function BindPrimaryinfo() {

    modalpopupshowhide("generalsearchpopup", "hide");
    PageID == "1" ? BindBasedOnDiv('AgedivGeneralsrch', 'ddlFromAge') : BindBasedOnDiv('Agediv', 'ddlFromAge');
    pageloadPopulating();
    if (checktext()) {

        var object = {
            Request: {
                ProfileID: $('#txtprofileid').val(),
                Empid: Empid

            }
        };
        var data = CallApi("EmployeeGeneralSearchLatest.aspx/GetPrimaryDataCustomerAllPrimaryInfo", object);
        SelfData = data;
        if (data != null && data != undefined) {

            ShowExpandCollapsePanel('lstCountrylivingin', 'imgjoblocation', 'imgjoblocation1', 'divjoblocation',
               data.d.CountryID, data.d.StateID, data.d.DistrictID);
            ShowExpandCollapsePanel('lststar', 'imgastro', 'imgastro1', 'divAstro',
                data.d.StarLanguageID, data.d.PreferredStars, data.d.KujaDosham);
            ShowExpandCollapsePanel('lstdrink', 'imghabit', 'imghabit1', 'divhabit',
               data.d.Drink, data.d.Smoke, data.d.Diet, data.d.BodyTypeID, data.d.physicalstatusid);
            ShowExpandCollapsePanel('lstbranch', 'imgprofile', 'imgprofile1', 'divprofilesettings',
               data.d.Regions, data.d.Branches);

            SelectvalueforRadiobuttons("gender", data.d.GenderID);
            $('#ddlFromAge').multiselect('refresh');
            $(".commonselect").multiselect("deselect", [0]);

            $('#ddlFromAge').multiselect('select', [data.d.AgeMin]);
            $('#ddlToAge').multiselect('select', [data.d.AgeMax]);
            $('#ddlFromheight').multiselect('select', [data.d.MinHeight]);
            $('#ddlToheight').multiselect('select', [data.d.MaxHeight]);
            bindingSelectedvaluesoflistselect('lstMaritalstatus', data.d.maritalstatusid);
            bindingSelectedvaluesoflistselect('ddlreligionid', data.d.religionid);
            bindingSelectedvaluesoflistselect('lstMothertongue', data.d.MotherTongueID);

            BindPrimarydependency(data.d.casteid, "Caste", data.d.MotherTongueID, data.d.religionid, ".lstCaste", "lstCaste");

            bindingSelectedvaluesoflistselect('lstComplexion', data.d.complexionid);
            bindingSelectedvaluesoflistselect('lstbodytype', data.d.BodyTypeID);
            bindingSelectedvaluesoflistselect('lstphysical', data.d.physicalstatusid);
            bindingSelectedvaluesoflistselect('lsteducationcategory', data.d.EducationCategoryID);
            bindingSelectedvaluesoflistselect('lsteducation', data.d.EducationGroupID);
            BindPrimarydependency(data.d.EducationGroupID, "EducationGroup", data.d.EducationCategoryID, '', ".lstEducationGroup", "lsteducation");
            binddependencyFormissingfields("EducationSpelization", data.d.EducationGroupID, ".lstEducationSpecialisation", "");
            //Refer 12 point in issue drive
            //bindingSelectedvaluesoflistselect('lstworkingwith', data.d.ProfessionCategoryID);
            bindingSelectedvaluesoflistselect('lstprofessiongroup', data.d.ProfessionGroup);
            binddependencyFormissingfields("ProfessionSpecialization", data.d.ProfessionGroup, ".lstProfession", "");

            bindingSelectedvaluesoflistselect('lstCountrylivingin', data.d.CountryID);

            binddependencyFormissingfields("State", data.d.CountryID, ".lstStatelivingin", "");

            bindingSelectedvaluesoflistselect('lststate', data.d.StateID);
            binddependencyFormissingfields("District", data.d.StateID, ".lstdistrict", "");

            bindingSelectedvaluesoflistselect('lstdistrict', data.d.DistrictID);
            bindingSelectedvaluesoflistselect('ddlstarlanguages', data.d.StarLanguageID);
            bindingSelectedvaluesoflistselect('lststar', data.d.PreferredStars);
            SelectvalueforRadiobuttons("rbtnkujadosham", data.d.KujaDosham);

            bindingSelectedvaluesoflistselect('lstdrink', data.d.Drink);
            bindingSelectedvaluesoflistselect('lstsmoke', data.d.Smoke);
            bindingSelectedvaluesoflistselect('lstdiet', data.d.Diet);
            bindingSelectedvaluesoflistselect('lstregion', data.d.Regions);
            bindingSelectedvaluesoflistselect('lstbranch', data.d.Branches);


            $('#lblpopupprofileid').html(data.d.ProfileID);
            $('#lblPaidflag').html(data.d.PaidFlag);
            $('#lblCustidpopup').html(data.d.Cust_ID);
            $('#lnkprofileId2').html(data.d.ProfileID);
            $('#lnkprofileId').html(data.d.ProfileID);
            $('#selfName').html(data.d.SelfName);

            $('#selfAge').html(data.d.SelfAge)
            $('#SelfHeight').html(data.d.Selfheight)
            $('#selfeducation').html(data.d.SelfEducation)
            $('#selfimage').html("<img  id='IMasterpic'  src=" + JSON.stringify(data.d.PhotoImageUrl) + " />");
            //document.getElementById("mystylename").style.display = "block";
            document.getElementById("mySidenav").style.display = "block";

            $('#lblName').html(data.d.SelfName);
            $('#txtfromprofile').val(data.d.ProfileID);
            Relationbind('#txtfromprofile', 'ddlRelationship');
            allemails('txtfromprofile');

            ApplyColorValueContainsSelect();
            ApplyColorValueContainsTextBox();
        }

    }

    return false;
}

function ShowExpandCollapsePanel(ddlID, pluimage, minusimage, expanddiv, control1, control2, control3, control4, control5, control6, control7, control8, control9, control10) {

    if (checkcontrol(control1) || checkcontrol(control2) || checkcontrol(control3) || checkcontrol(control4) || checkcontrol(control5) || checkcontrol(control6) || checkcontrol(control7) || checkcontrol(control8) || checkcontrol(control9) || checkcontrol(control10)) {
        showdivbasedoobtton1(pluimage, minusimage, expanddiv, ddlID);
    }
}
function checkcontrol(control) {
    return control != undefined && control != null && control != "" ? true : false;
}
function showdivbasedoobtton(image1, imaqge2, divid) {

    $("#" + image1 + "").show();
    $("#" + imaqge2 + "").hide();
    $("#" + divid + "").slideToggle("slow");
    return false;
}
function showdivbasedoobtton1(image1, imaqge2, divid, ddlID) {

    BindBasedOnDiv(divid, ddlID);
    $("#" + imaqge2 + "").show();
    $("#" + image1 + "").hide();
    $("#" + divid + "").slideToggle("slow");
    return false;
}
function GetPhotoandHoroscopevalues(strType, str) {

    var str = getvalues('#lstshowProfile', 'Zero');
    if (str != null && str.length > 0) {
        if (strType == "horo") {

            ('simple string') != -1
            str = ((str.indexOf("2") != -1) && (str.indexOf("3") != -1) ? null : (str.indexOf("2") != -1) ? "1" : (str.indexOf("3") != -1) ? "0" : null);
        }
        else {
            str = ((str.indexOf("0") != -1) && (str.indexOf("1") != -1) ? null : (str.indexOf("1") != -1) ? "1" : (str.indexOf("0") != -1) ? "0" : null);
        }
    }
    return str;
}
$(document).ready(function () {
    $('.multiple').multiselect({
        onChange: function (element, checked, id, jj) {


            if (this.$select.val() != null) {

                this.options.templates.button = "<button type=\"button\" style='background-color: yellow ! important;' class=\"multiselect dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"multiselect-selected-text\"></span> <b class=\"caret\"></b></button>";
            }
            else {

                $(this).removeClass('multiselect.dropdown-toggle.btn.btn-default1').addClass('multiselect.dropdown-toggle.btn.btn-default');
            }
        }
    });
    $('.multiple').multiselect('refresh');
});

function getallcheckboxvalues(chkboxlist) {

    var value = ($("input[name=" + chkboxlist + "]:checked").map(function () {
        return this.value;
    }).get().join(","));
    return value != "" ? value : null;
}

function bindingSelectedvaluesoflistselect(lstbox, data) {

    $('#' + lstbox + '').multiselect('select', ((data) != "") ? SplitstringintoArray(data) : null);
    return false;
}

function BindPrimarydependency(datachild, method, parentid, secondparentid, childclass, childid) {
    if (datachild != "" && datachild != null) {
        binddependencyFormissingfields(method, parentid, childclass, secondparentid);
        bindingSelectedvaluesoflistselect(childid, datachild);
    }

    return false;
}


function viewfullprofile() {
    var Profileid = $('#lblpopupprofileid').html();
    window.open("AdminViewProfileInput.aspx?ProfileID=" + Profileid + "&Print=1,_blank");

    return false;
}

function openNav() {

    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mystylename").style.display = "block";
    return false;
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mystylename").style.display = "none";
    return false;
}

function ResetGeneralAdvanced() {
    ScrolltoTop();
    var url = window.location.href;
    $('input[type=text]').val('');
    $(".multiple").multiselect("clearSelection");
    Resetforradiobuttons("gender");
    $('input[type=checkbox]').attr('checked', false);
    $('#chkissuggestable').attr('checked', true);
    $('#lstshowProfile').multiselect('select', ['1'], true);
    $('.commonselect').multiselect('select', ['0'], true);
    $("#uniform-undefined > span").removeClass('checked');
    $('.ValueContains').removeClass("ValueContains");

    $('#headername').html(url.indexOf('EmployeeAdvancedSearchLatest') != -1 ? "Advanced Search" : "General Search");
    $('#generalsearchpopup').modal({ backdrop: 'static', keyboard: false });

    pageloadPopulating();
    document.getElementById("mySidenav").style.display = "none";
    SelfData = undefined;
    return false;
}

function hidelabelbasedonstring(Label, string) {

    if (string != null && string != "") {

        document.getElementById(Label).style.display = "block";
        $('#' + Label).html(string);
    }
    else {
        document.getElementById(Label).style.display = "none";

    }
    return false;
}

function hidelabelbasedonAntherlabel(label1, label2) {
    if ($('#' + label2).html() != "" && $('#' + label2).html() != null) {
        document.getElementById(label1).style.display = "block";

    }
    else {
        document.getElementById(label1).style.display = "none";
    }
}
/// slide code

function ScrolltoTop() {

    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    //window.ScrolltoTop(0,0);
    return true;
}
function bindSlide(dataArray, CarousalID) {
   
    ScrolltoTop();
    $('#divcontrols').attr('style', 'display:none;');
    $('#divEmployeeSearchSlideNew').attr('style', 'display:block;top:0px;');
    //$('#sildeViewDiv').show();
    //$('#gridDiv').hide();

    $('#sildeViewDiv').attr('style', 'display:block;');
    $('#gridDiv').attr('style', 'display:none;');
    $('#gotoSlideDiv').attr('style', 'display:block;');
    $('#progessDiv').attr('style', 'display:block;');
    $('#divviewedprofiles').attr('style', 'display:block;');
    var datanew = condional(dataArray);

    if (SelfData != undefined) {
        $('#lnkprofileidfrom').text("(" + SelfData.d.ProfileID + ")");
        $('#lblhiddenprofileid').html(SelfData.d.ProfileID);
    }

    var totalrecords;
    var chkviewval = $("input:radio[name='viewGroup']:checked").val();
    var pageidcount = $('#' + CarousalID).find('.item').length;
    _.each(datanew, function (parentitem, index) {
        pageidcount = pageidcount + 1;
        totalrecords = CarousalID + pageidcount;
       
        var strappend = "", lnkshortlist = "", shortListblock = "", custid, ProfileID, PhotoCount, Age, HeightInCentimeters, MaritalStatusID, CasteID, serviceDate, CustPhoto;
        _.each(parentitem, function (childitem, index) {
         
            if (childitem.label != "backendFields") {
                strappend = strappend + "<div class='edit_page_details_item_desc clearfix'>"
            + "<h6>"
              + "  <span  style='font-weight: bold;'>" + childitem.label + "</span>"
            + "</h6>"
            + getDivstring(childitem.value, childitem.style, childitem.onclick, childitem.html)
        + "</div>";
            }
            else if (childitem.label == "backendFields") {
                custid = childitem.Custid;
                ProfileID = childitem.ProfileID;
                PhotoCount = childitem.PhotoCount;
                Age = childitem.Age;
                HeightInCentimeters = JSON.stringify(childitem.HeightInCentimeters);
                MaritalStatusID = JSON.stringify(childitem.MaritalStatusID);
                CasteID = JSON.stringify(childitem.CasteID);
                serviceDate = JSON.stringify(childitem.serviceDate);
                CustPhoto = childitem.CustPhoto;;
                //$('#lnkprofileidfrom').text(SelfData.d[0].ProfileID);

            }

        });

        if (CarousalID == 'myCarousel') {
            lnkshortlist = $('#lblCustidpopup').text() != "" ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return checkServicetoShortlist(" + custid + "," + ProfileID + "," + Age + "," + HeightInCentimeters + "," + MaritalStatusID + "," + CasteID + "," + serviceDate + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                                + "<div class=col-lg-1><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        }
        else if (CarousalID == 'ShortlistPopup') {
            lnkshortlist = $('#lblCustidpopup').text() != "" ? "<a  class= 'Heart center-block'  href= javascript:void(0);' onclick='return InnerShortList(" + custid + ");return false;'><div class='col-lg-3'><img src='../../Images/kaakateeya%20logo_001.jpg' style='margin-top: -4px;' width=40 height=38></div>"
                                + "<div class=col-lg-1><lable style='font-size: 13pt;'>shortlist</lable></div></a>" : "";
        }


        shortListblock = "<li class='col-lg-3 col-md-3 col-xs-3 col-sm-3 col-lg-pull-2  col-md-pull-2 col-xs-pull-2 col-sm-pull-2 '>"
                      + "<div class='row'>"
       + " <div class='col-lg-8'>"
       + "<div class='row'>" + lnkshortlist
     + "</div></div></div>" + "<div class='clearfix'></div>"
    + "<div>"
   + "<input  id='imgCustPhoto" + totalrecords + "'  src='" + CustPhoto + "' class='image'  type='image' onclick='return getimgPath(" + JSON.stringify(custid) + "," + JSON.stringify(ProfileID) + "," + PhotoCount + ")'>"
   + "<br>"
  + "<div class='col-lg-8 col-lg-offset-5'>"
  + "<a   href='javascript:void(0)'><span  style='color:Black;font-size:9pt;'>No of Photos  " + " " + PhotoCount + "</span></a>"
 + "</div>"
 + "</div></li>";

        var totalslides = $('#' + CarousalID).find('.item').length;
        var stractiveClass = totalslides == 0 ? 'item active' : 'item';

        $("#" + CarousalID + " .carousel-inner").append(
           "<div class='" + stractiveClass + "'>"
            + "<li class='col-lg-8 col-md-8 col-lxs-8'>"
             + strappend + "</li>"
             + shortListblock
            + "</div>");

        document.getElementById('imgCustPhoto' + totalrecords + '').disabled = CustPhoto.indexOf("noimage") == -1 ? false : true;

    });


}
function getDivstring(value, style, onclick, html) {
    var strval = "";
    if ((html != '' && html != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + html + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    else if ((value != '' && value != undefined) && (style != '' && style != undefined) && (onclick != '' && onclick != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span " + onclick + ">" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    else if ((value != '' && value != undefined) && (style != '' && style != undefined)) {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }

    else {
        strval = "<h5>"
                   + "  <div " + style + "> "
                   + "       <span>" + value + "</span>"
                   + "   </div>"
              + " </h5>";

    }
    return strval;
}

function backtosearch() {

    $('#divcontrols').attr('style', 'display:block;');
    $('#divEmployeeSearchSlideNew').attr('style', 'display:none;');
    $("#progessDiv").html("");
    $('#hdnCustIdsForAlert').val('');

    $('#hdnshortlistProfile').val('');
    $('#hdnCurrentSlideVal').val('');

    $("#myCarousel").carousel("pause").removeData();
    flag = 10;
    $("#gridDiv").find('.page-size').html(0);
    $('#spanappend').html("NaN");
    return false;
}

function condional(Array) {
    var totalArray = [];
    $.each(Array, function (index, item) {
        var data = [];

        data.push({ label: 'ProfileID', html: "&nbsp;<a href='javascript:void(0);' style='" + (item.paid == "1" ? 'color:Green;text-decoration:underline;margin-left:-16px;padding-left: 10px;' : 'color:red;text-decoration:underline;margin-left: -16px;padding-left: 10px;') + "' onclick='ViewProfilewithvalue(" + JSON.stringify(item.ProfileID) + ");'>" + item.ProfileID + "</a> " + item.KMPLID + " " + (item.IsConfidential == true || item.IsConfidential == "True" ? " C" : "") + " " + (item.SuperConfidentila == "1" || item.SuperConfidentila == 1 ? " SC" : "") + " " + (item.HoroscopeStatus == "1" ? "<input title='Click here to view Horoscope' src='../../Images/ico_horoscope.jpg' style='height:20px;width:25px;' type='image' onclick='return getPath(" + JSON.stringify(item.Cust_ID) + ");'>" : "") });
        data.push({ label: 'Name', value: item.LastName + ' ' + item.FirstName, style: item.NoOfBrothers == "0" && item.NoOfSisters == "0" ? "style= color:DarkViolet;" : "style= color:Black;" });
        data.push({ label: 'DOB(age)', value: item.DOB + '(' + item.Age + ')' });
        data.push({ label: 'Time of Birth', value: item.TOB });
        data.push({ label: 'Place of Birth', value: item.PlaceOfBirth });
        data.push({ label: 'Gothram', value: item.Gothram });
        data.push({ label: 'Caste', value: item.Caste });
        data.push({ label: 'Marital Status', value: item.maritalstatus });
        data.push({ label: 'Star', value: item.Star });
        data.push({ label: 'Color', value: item.Color });
        data.push({ label: 'Height', value: item.Height });
        data.push({ label: 'Qualification', value: item.EducationGroup + "," + item.EduGroupnamenew });
        data.push({ label: 'Profession', value: item.Profession });
        data.push({ label: 'Job Location', value: item.JobLocation });
        data.push({ label: 'Income(P.M)', value: item.Income });
        data.push({ label: 'Father Native', value: item.FFNative });
        data.push({ label: 'Mother Native', value: item.MFNative });
        data.push({ label: 'Property(Lakhs)', value: item.Property });
        data.push({
            label: 'backendFields', Custid: item.Cust_ID, ProfileID: item.ProfileID, PhotoCount: item.PhotoCount, Age: item.Age, HeightInCentimeters: item.HeightInCentimeters, MaritalStatusID: item.MaritalStatusID, CasteID: item.CasteID, serviceDate: item.serviceDate, CustPhoto: (item.CustomerFullPhoto)
            //CustPhoto: (item.imageurl).replace("~/", "../../")
        });
        if (item.serviceDate != "--" && item.serviceDate != "")
            data.push({ label: 'ServiceDate', value: item.serviceDate, style: 'style= color:red;' });
        if (item.Intercaste == "True")
            data.push({ label: 'Intercaste', value: (item.fathercaste + "/" + item.mothercaste) });

        totalArray.push(data);

    });

    return totalArray;

}

function checkvalue(val) {
    var boolval;
    boolval = (val != null && val != "--") ? true : false;
    return boolval;
}

$(function () {
    SlideCount();
});

function SlideCount() {

    //var currentIndex = $('#myCarousel').find('div.active').index() + 1;
    var currentslide = 1;
    //$('.num').html('Profile ' + '' + currentIndex);

    $('#myCarousel').bind('slid', function () {

        var totalItems = $('#myCarousel').find('.item').length;
        var currentIndex = $('#myCarousel').find('div.active').index() + 1;

        if (currentslide < currentIndex) {
            if (parseInt(TotalRows) > 10 && parseInt(totalItems) - parseInt(currentIndex) == 4) {

                submitGeneralSearch(parseInt(totalItems) + 1, parseInt(totalItems) + 10)
            }
            if (parseInt($("#lnkLastSlide").text()) < currentIndex)
                $("#lnkLastSlide").text(currentIndex);
        }
        currentslide = currentIndex;
        $('.num').html('Profile ' + '' + currentIndex);

        $("#lblcurSlide").text(currentIndex);

    });


}

function checkServicetoShortlist(custids, profileID, age, height, maritalstatus, caste, Servicedate) {


    var StValall = document.getElementById("hdnCustIdsForAlert").value;
    var profileIDlocal = JSON.stringify(profileID);
    if (StValall.indexOf(custids) != -1) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {

        if (Servicedate != '') {
            $('#divmismatchData').html('');
            $('#divfooter').html('');
            $('#divmismatchData').append("<a id=lnkmismatchProfileid href=javascript:void(0) onclick=ViewProfilewithvalue(" + profileIDlocal + ");>" + profileID + "</a>" + "<f style='color:black;'> Already service done with this profileid On </f>" + "<f style='color:Red;font-weight:bold;font-size:14px;'>" + Servicedate + "</f>" + "</br>" + "")

            $('#divfooter').append("<button id='btn-id1' type='button' class='btn btn-large btn-primary' onclick='return mismatchProfileCheck(" + custids + "," + profileID + "," + age + "," + height + "," + maritalstatus + "," + caste + ")' data-dismiss='modal'  data-loading-text='Adding...'>Shortlist</button>"
                           + "<input name=ctl00$ContentPlaceHolder1$btncancel value=Cancel id=ctl00_ContentPlaceHolder1_btncancel class='btn btn-success' type='submit' data-dismiss='modal'>"
                           );
            $('#divmismatch').modal({ backdrop: 'static' });
        }
        else {
            mismatchProfileCheck(custids, profileID, age, height, maritalstatus, caste);

        }
    }
    return false;
}

function mismatchProfileCheck(custids, profileID, age, height, maritalstatus, caste) {
    $('#divmismatch').modal('hide'); $('body').removeClass().removeAttr('style'); $('.modal-backdrop').remove();

    var StVal = document.getElementById("hdnshortlistProfile").value;
    var StValall = document.getElementById("hdnCustIdsForAlert").value;
    if (StValall.indexOf(custids) != -1) {
        DynamicTimeAlert('This profile already shortlisted', 'alert alert-danger', '2000');
    }
    else {

        var strmismatch = '';


        if (parseInt(age) < parseInt(SelfData.d.AgeMin) && parseInt(age) > parseInt(SelfData.d.AgeMax)) {

            strmismatch = "  Age not Matched to this profileid" + ",";
        }
        if (parseInt(height) < parseInt(SelfData.d.MinHeight) && parseInt(height) > parseInt(SelfData.d.MaxHeight)) {
            strmismatch += "  Height not Matched to this profileid" + ",";
        }
        if (parseInt(maritalstatus) != parseInt(SelfData.d.maritalstatusid)) {
            strmismatch += "  MaritalStatus not Matched to this profileid" + ",";
        }
        if (parseInt(caste) != parseInt(SelfData.d.casteid)) {
            strmismatch += "  Caste not Matched to this profileid";
        }
        $("#hdnMismatchData").val(strmismatch)
        if (strmismatch != '') {
            var mismath = strmismatch.split(",");
            $('#divmismatchData').html('');
            $('#divfooter').html('');
            var profileIDlocal = JSON.stringify(profileID);
            for (var i = 0; i < mismath.length; i++) {

                $('#divmismatchData').append("<a id=lnkmismatchProfileid href=javascript:void(0) onclick=ViewProfilewithvalue(" + profileIDlocal + ");>" + profileID + "</a>" + "<f style='color:black;'>" + mismath[i] + "</f>" + "</br>" + "")
            }
            $('#divfooter').append("<button id='btn-id1' type='button' class='btn btn-large btn-primary' onclick='getClickedCustID(" + custids + ")' data-dismiss='modal'  data-loading-text='Adding...'>Shortlist</button>"
                + "<input name=ctl00$ContentPlaceHolder1$btncancel value=Cancel id=ctl00_ContentPlaceHolder1_btncancel class='btn btn-success' type='submit' data-dismiss='modal'>"

                );

            $('#divmismatch').modal({ backdrop: 'static' });

            return false;
        }
        else {
            getClickedCustID(custids)
        }

        return false;

    }
}

function getClickedCustID(custids) {
    $('#divmismatch').modal('hide'); $('body').removeClass().removeAttr('style'); $('.modal-backdrop').remove();
    var StVal = document.getElementById("hdnshortlistProfile").value;
    var mismath;
    if (StVal == '') {
        StVal = custids;
        mismath = [custids];
        // mismath.length = 1;
    }
    else {
        StVal += "," + custids;
        mismath = StVal.split(",");
    }
    DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');

    document.getElementById("hdnshortlistProfile").value = StVal;
    document.getElementById("hdnCustIdsForAlert").value = StVal;


    var shortlisttxt = "  Shortlisted";


    if (mismath.length <= 10) {
        count++;
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger active' style='width: " + mismath.length + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else if (mismath.length > 10 && mismath.length <= 30) {
        count = mismath.length == 11 ? 1 : (count + 1);


        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-warning active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else if (mismath.length > 30 && mismath.length <= 50) {
        count = mismath.length == 31 ? 1 : (count + 1);
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-warning' style='width:20%;'><span></span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-info active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    else {
        count = mismath.length == 51 ? 1 : (count + 1);
        $("#progessDiv").html("<div class='progress-bar progress-bar-striped progress-bar-danger' style='width:10%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-warning' style='width:20%;'><span></span></div><div class='progress-bar progress-bar-striped progress-bar-info' style='width: 20%'><span > </span></div>");
        $("#progessDiv").append("<div class='progress-bar progress-bar-striped progress-bar-success active' style='width: " + count + "%'><span >" + mismath.length + shortlisttxt + " </span></div>");
    }
    return false;
}

function shortListPopup() {

    var StValall = document.getElementById("hdnshortlistProfile").value;
    $("#ShortlistPopup").carousel("pause").removeData();
    $("#ShortlistPopup .carousel-inner").html("");
    if (StValall != '') {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "EmployeeGeneralSearchLatest.aspx/GetShorlistedProfiles",
            data: "{'ShortListedCustIDs':'" + StValall + "'}",
            dataType: "json",
            success: function (data) {


                $('#lblprofileidto').text(SelfData.d.ProfileID);
                bindSlide(data.d, 'ShortlistPopup');

                var totalItemspopup = $('#ShortlistPopup').find('.item').length;
                $('.numpopup').html('Profile ' + '' + 1 + ' of ' + totalItemspopup + '');


                $('#shortlistPopupShow').modal({ backdrop: 'static', keyboard: false });
            },
            error: function (result) {
                DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');
            }
        });


        $('#ShortlistPopup .carousel-control.left').attr('style', 'display:none;');
        $('#ShortlistPopup .carousel-control.right').attr('style', 'display:block;');
        pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');
        //var status = CallApi("EmployeeGeneralSearchLatest.aspx/GetShorlistedProfiles", bookmarkInput);
    }
    else {

        DynamicTimeAlert('Please shortlist any Profile', 'alert alert-danger', '2000');
    }

    return false;

}

function mainShortListProfiles() {

    var hdnshortlistProfile = $('#hdnshortlistProfile').val();
    if (hdnshortlistProfile != "") {
        var hdnCurrentSlideVal = $('#hdnCurrentSlideVal').val();

        if (hdnshortlistProfile != "" || hdnCurrentSlideVal != "") {

            var CustIDsCount = (hdnshortlistProfile != "" ? hdnshortlistProfile : "0").split(',');

            if (hdnshortlistProfile != "" && hdnCurrentSlideVal == "") {
                hdnshortlistProfile = (hdnCurrentSlideVal);
            }
            else if (hdnshortlistProfile != "" && hdnCurrentSlideVal != "") {
                if (hdnshortlistProfile.indexOf(hdnCurrentSlideVal) != -1)
                { }
                else
                {
                    hdnshortlistProfile += "," + hdnCurrentSlideVal;
                    $('#hdnshortlistProfile').val(hdnshortlistProfile)
                }
            }

            shortListPopup();

        }
        $('#ShortlistPopup .carousel-control.left').attr('style', 'display:none;');
        $('#ShortlistPopup .carousel-control.right').attr('style', 'display:block;');
        pauseifPlayVisibleGlobal('myCarousel', 'playButton', 'pauseButton');
    }
    else {

        DynamicTimeAlert("Please ShortList Profiles", "alert alert-danger", "4000");

    }
}

$(function () {
    checkitemGlobal('myCarousel');
    playAndPause('myCarousel', 'playButton', 'pauseButton');
    ArrowMove('myCarousel');

    $('#ShortlistPopup').bind('slid', function () {
        var totalItemspopup = $('#ShortlistPopup').find('.item').length;
        currentIndexpopup = $('#ShortlistPopup').find('div.active').index() + 1;
        $('.numpopup').html('Profile ' + '' + currentIndexpopup + ' of ' + totalItemspopup + '');
    });

    checkitemGlobal('ShortlistPopup');
    playAndPause('ShortlistPopup', 'PlayShortListebtn', 'PauseShortListbtn');
    ArrowMove('ShortlistPopup');

});

function gotoSlide(e) {

    var lastslide = parseInt($("#lnkLastSlide").text());
    if (parseInt($(e).val()) <= lastslide) {
        $('#myCarousel').carousel(parseInt($(e).val()) - 1);
    }
    else {

        DynamicTimeAlert('you can go till ' + lastslide + ' slide only', 'alert alert-danger', '4000');
    }
}

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



function InnerShortList(custID) {
    var InnerShortList = $("#hdnCurrentSlideVal").val();
    if (InnerShortList.indexOf(custID) != -1) {
        DynamicTimeAlert('You have already Shortlisted this Profile ID', 'alert alert-danger', '4000');
    }
    else {
        InnerShortList = InnerShortList == '' ? custID : (InnerShortList + "," + custID);
        $("#hdnCurrentSlideVal").val(InnerShortList);
        $('#hdnshortlistProfile').val(InnerShortList);
        DynamicTimeAlert('profile has been shortlisted successfully', 'alert alert-success', '2000');
    }

}



function allemails(id) {


    var object = {
        Profileid: $('#' + id).val()

    };


    var data = CallApi("EmployeeGeneralSearchLatest.aspx/Getallemailpersonal", object);

    var chkmail = $('#chkmails');
    var counter = 0;
    $.each(data.d, function (index, value) {

        chkmail.append("<input type='checkbox' checked name='checkMail' value=" + value.value + " />&nbsp;<label style='color:black;'>" + value.Id + "</label><br />");

    });

    return false;
}


function sendtoServices() {
    $("input[name=rbtntypeofservices][value=366]").attr('checked', 'checked');
    $("input[name=rbtnprofile][value=358]").attr('checked', 'checked');
    $("input[name=rbtnsendsms][value=1]").attr('checked', 'checked');

    var varcustIDs = $('#hdnshortlistProfile').val();
    var object = {
        custIDs: varcustIDs

    };
    var data = CallApi("EmployeeGeneralSearchLatest.aspx/bindProfileIDs", object);



    if (data.d.length > 0) {

        $.each(data.d, function (key, value) {

            $('#lstselectedprofiles').append(" <option value=" + value.Id + ">" + value.value + "</option>");

        });


    }

    $('#shortlistPopupShow').modal('hide');
    //$('#divEmployeeSearchSlideNew').attr('style', 'display:none;');
    $('#txttoprofileid').attr("disabled", true);
    modalpopupshowhide("divEmployeeExpressInterestNew", "show");
    return false;
}

function Applychanges(profileid, photonames) {

    names = "";
    $("#trpopupexpressimages").find(':checkbox').each(function () {
        if ($(this).attr("checked")) {

            var id = this.id;
            names = names != "" ? (names + "," + ($(this).val())) : ($(this).val());

        }
    });
    $('#lstselectedprofiles option').each(function () {

        if ($(this).text() == profileid) {

            $(this).val(names + ";" + profileid);
        }

    });
    var options = $('#lstselectedprofiles option');

    var values = $.map(options, function (option) {

        return option.value;
    });
    modalpopupshowhide("popimages", "hide");
    return false;
}


function expressintrstSubmit() {

    if ($('#ddlModeofservice').val() == 0 ||
         $('#txtfromprofile').val() == '' || $("input:radio[name='rbtntypeofservices']:checked").val() == -1 ||
       (($('#ddlModeofservice option:selected').text() != 'Suggested by EMP') && ($('#ddlRelationship').val() == 0 || $('#txttoname').val() == ''))) {

        DynamicTimeAlert('Please enter all Mandatory values', 'alert alert-danger', 4000);
    }
    else {


        var strToprofileIDs, strMails;
        var ExpArr = [];
        $('#chkmails').find('input').each(function () {

            if ($(this).attr("checked"))
                //strMails = $(this).val();
                strMails = (strMails != "" && strMails != null) ? (strMails + ";" + $(this).val()) : $(this).val();

        });

        $('#lstselectedprofiles option').each(function () {

            var selectedImgs;
            strToprofileIDs = (strToprofileIDs != "" && strToprofileIDs != null) ? (strToprofileIDs + "," + $(this).text()) : $(this).text();

            if ($(this).val() != '' && $(this).val() != null) {
                var images = ($(this).val()).split(';');
                selectedImgs = images[0];
            }
            else {
                selectedImgs = (CallApi("EmployeeGeneralSearchLatest.aspx/bindProfileIDs", { profileID: $(this).text() })).d;
            }

            var expObj = {
                FromProfileID: $('#txtfromprofile').val(),
                ToProfileID: $(this).text(),
                EmpID: Empid,
                ModeofService: $('#ddlModeofservice option:selected').val() > 0 ? $('#ddlModeofservice option:selected').val() : null,
                RelationShipID: $('#ddlRelationship option:selected').val() > 0 ? $('#ddlRelationship option:selected').val() : null,
                Name: $('#txttoname').val() != "" ? $('#txttoname').val() : null,
                TypeOfService: $("input:radio[name='rbtntypeofservices']:checked").val(),
                ProfileType: $("input:radio[name='rbtnprofile']:checked").val(),
                NotesofCustomer: $('#txtnotesofcustomer').val() != "" ? $('#txtnotesofcustomer').val() : null,
                SendSms: $("input:radio[name='rbtnsendsms']:checked").val() == 1 ? true : false,
                IsRvrSend: $("#chkrvrsend").attr("checked") ? true : false,
                SelectedImages: selectedImgs,
                EmailAddress: strMails
            };

            ExpArr.push(expObj);


        });

        var status = CallApi("EmployeeGeneralSearchLatest.aspx/ExpressIntrstSubmit", { ExpML: ExpArr });
        statusAlert(status.d, undefined, "Express interest SuccessFully", "Express interest failed");
        $('#lstselectedprofiles').html("");
        modalpopupshowhide("divEmployeeExpressInterestNew", "hide");
    }
    return false;
}

function bookmark() {

    var strToCustIDs = document.getElementById("hdnshortlistProfile").value;
    var bookmarkInput = { MobjViewprofile: { FromCustID: SelfData.d.Cust_ID, StrTocustIDs: strToCustIDs } };
    var status = CallApi("Bookmark", bookmarkInput);
    statusAlert(status.d, undefined, "Bookmarked SuccessFully", "Bookmark failed");

}
var $tableextent = $('#tablemore'), $table = $('#GridTable'), $append = $('.append'), flag = 10,
 pagesizec = 10;
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
    classes: "table table-striped table-no-bordered",
    pageSize: "10",
    columns: columnsMore,
    height: 550,
    mobileResponsive: "true",
};
$(function () {
    if (querycustid != undefined && querycustid != null && querycustid != "") {

        $('#txtprofileid').val(querycustid);
        BindPrimaryinfo();
    }
    $tableextent.bootstrapTable(datatbaleoptionsmore);
    $('#lnkmorepopup').click(function () {

        var keyNames = _.keys(SearchRequestText);
        var keyValues = _.values(SearchRequestText);

        FilterArray = [];
        for (var i in keyNames) {
            if (keyNames[i].toString().search("ID") == -1)
                FilterArray.push({ Name: keyNames[i], Value: keyValues[i] });
        }

        FilterArray = _.reject(_.reject(_.reject((_.reject(FilterArray, { Value: "" })), { Value: false }), { Value: undefined }), { Value: null });

        $tableextent.bootstrapTable('load', FilterArray);
    });


});


function ClosePopup() {
    $('#lstselectedprofiles').html("");
    modalpopupshowhide("divEmployeeExpressInterestNew", "hide");
    return false;
}

function ClosePopupExpress() {
    modalpopupshowhide("popimages", "hide");
    return false;
}

//grid viewfullprofile
var columns = [
{
    field: 'ProfileID',
    title: 'Profile ID',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    formatter: operateFormatter
}, {
    field: 'LastName',
    title: 'First Name',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
    //formatter: operateFormatteredit
},
{
    field: 'FirstName',
    title: 'Last Name',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    // formatter: operateFormatteredit
},
{
    field: 'Caste',
    title: 'Caste',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    width: 500
},
{
    field: 'maritalstatus',
    title: 'Marital Status',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
},
{
    field: 'Age',
    title: 'DOB(Age)',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    formatter: BindTwoVals
},
{
    field: 'Gender',
    title: 'Gender',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
},
{
    field: 'Height',
    title: 'Height',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true,
    formatter: BindHeightSubstring
},
{
    field: 'EducationGroup',
    title: 'Education Group',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
},
{
    field: 'Profession',
    title: 'Profession',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
},
{
    field: 'JobLocation',
    title: 'Job Location',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
},
{
    field: 'countrylivingin',
    title: 'Country Living in',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
}
,
{
    field: 'FFNative',
    title: 'Father Native',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
}
,
{
    field: 'MFNative',
    title: 'Mother Native',
    sortable: true,
    searchable: true,
    visible: true,
    switchable: true
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
    //rowStyle: rowStyle,
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
    showLoading: true,
    fixedColumns: true,
    fixedNumber: 1,
    showMultiSort: true

};

$(function () {
    $table.bootstrapTable(datatbaleoptions);
    var from, to;
    $append.click(function () {

        pagesizec = parseInt($("#gridDiv").find('.page-size').html());
        from = flag + 1;
        flag = to = flag + pagesizec;
        console.log($(".page-size").html());
        submitGeneralSearch(from, to);
        return false;

    });
});
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

function gridView(array, Typeofbind) {
    ScrolltoTop();
    $('#divcontrols').attr('style', 'display:none;');
    $('#divEmployeeSearchSlideNew').attr('style', 'display:block;');
    $('#sildeViewDiv').attr('style', 'display:none;');
    $('#gridDiv').attr('style', 'display:block;');

    $('#gotoSlideDiv').attr('style', 'display:none;');

    $('#progessDiv').attr('style', 'display:none;');
    $('#divviewedprofiles').attr('style', 'display:none;');


    var keyNames = _.keys(array);
    var keyValues = _.values(array);

    for (var i in keyNames) {
        if (keyNames[i].toString().search("ID") == -1)
            FilterArray.push({ Name: keyNames[i], Value: keyValues[i] });

    }
    console.log(FilterArray);
    FilterArray = _.reject((_.reject(FilterArray, { Value: "" })), { Value: false });

    $table.bootstrapTable(Typeofbind, array);

    return false;

}
function sorter(a, b, row) {
    console.log("a" + moment(a).format());
    console.log("b" + moment(b).format());
    a = moment(a).format();
    b = moment(b).format();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

function operateFormatter(value, row, index) {
    var Querystring = "?" + "ProfileID=" + row.ProfileID + "&Print=1";
    var vall = row.paid;
    var paid = row.paid == 1 ? '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:green;">' + row.ProfileID + '</a>' :
        '<a href="AdminViewProfileInput.aspx' + Querystring + '" target="_blank" style="color:Red;">' + row.ProfileID + " (" + (row.KMPLID) + ")" + '</a>';
    return paid;
}


function BindTwoVals(value, row, index) {

    var strBindTwoVals = row.DOB + "(" + row.Age + ")"

    return strBindTwoVals;
}

function BindHeightSubstring(value, row, index) {

    var strBindTwoVals = (row.Height).substr(0, 3);

    return strBindTwoVals;
}
function CancelLoadData() {

    //BindBasedOnDiv('Agediv');
    modalpopupshowhide("generalsearchpopup", "hide");
    PageID == "1" ? BindBasedOnDiv('AgedivGeneralsrch', 'ddlFromAge') : BindBasedOnDiv('Agediv', 'ddlFromAge');
    pageloadPopulating();
    return false;
}