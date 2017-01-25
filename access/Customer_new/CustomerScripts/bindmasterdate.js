 
//$(document).ready(function () {
    //abc('#ctl00_ContentPlaceHolder1_ddlreligion', "/Masterdatabind.aspx/religionbind", 'value', 'id');
    //abc('#ctl00_ContentPlaceHolder1_ddlmothertongue', "/Masterdatabind.aspx/mothertonguebind", 'value', 'id');
    //abc('#ctl00_ContentPlaceHolder1_ddlcaste', "/Masterdatabind.aspx/casteusebind", 'value', 'id');
    //abc('#ctl00_ContentPlaceHolder1_ddlcountry', "/Masterdatabind.aspx/countryusebind", 'value', 'id');
//});

function abc(drpid, Url, id, name) {
    $.ajax({
        type: "POST",
        url: Url,
        data: {},
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Dropdown = $(drpid);
            Dropdown.append(new Option("SELECT", 0));
            $.each(response.d, function (index, item) {
                Dropdown.append(new Option(item[id], item[name]));
            });
        },
        error: function (data) {
            alert("error found");
            alert(data.d);
        }
    });
}

function abcwithone(drpid, Url, id, name, part1) {
    alert("caste");
    $.ajax({
        type: "POST",
        url: Url,
        data: "{'Id1':'" + part1 + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Dropdown = $(drpid);
            $(drpid).empty();
            Dropdown.append(new Option("SELECT", 0));
            $.each(response.d, function (index, item) {
                Dropdown.append(new Option(item[id], item[name]));
            });

        },
        error: function (data) {
            alert("error found");
        }
    });
}
function abcwithonenoselect(drpid, Url, id, name, part1) {

    $.ajax({
        type: "POST",
        url: Url,
        data: "{'Id1':'" + part1 + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Dropdown = $(drpid);
            $(drpid).empty();
            Dropdown.append(0,new Option("--Select--"));
            $.each(response.d, function (index, item) {
                Dropdown.append(new Option(item[id], item[name]));
            });

        },
        error: function (data) {
           // alert("error found");
        }
    });
}
function abcwithtwo(drpid, Url, id, name, part1, part2) {
    //alert(part1);
    $.ajax({
        type: "POST",
        url: Url,
        data: "{'Id1':'" + part1 + "','Id2':'" + part2 + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            var Dropdown = $(drpid);
            $(drpid).empty();
             Dropdown.append(0,new Option("--Select--"));

            $.each(response.d, function (index, item) {
                Dropdown.append(new Option(item[id], item[name]));
            });
        },
        error: function (data) {
           // alert("error found");
           // alert(data.d);
        }
    });
}


function Value_exist(txtid, Url, part1,name) {
    $.ajax({
        type: "POST",
        url: Url,
        data: "{'num':'" + part1 + "'}",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (response) {

            if (response.d != '') {
                
                alert(name + " " + "already Exists");
                document.getElementById(txtid).value = '';
                document.getElementById(txtid).focus();
            }
        },
        error: function (data) {
            //alert("error found");
        }
    });
}
//var path = "/kaakateeyaWeb/Masterdatabind.aspx";
var path = "/Masterdatabind.aspx";

//"{'Id1':'2'}",
$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlreligion").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlreligion   option:selected").val();
        var selectedOptionmother = $("#ctl00_ContentPlaceHolder1_ddlmothertongue   option:selected").val();

        var Dropdown = $("#ctl00_ContentPlaceHolder1_ddlcaste");
        $(Dropdown).empty();

        if (selectedOptionmother.length != 0 && selectedOptionreligion.length != 0) {

            abcwithtwo('#ctl00_ContentPlaceHolder1_ddlcaste', "" + path + "/castewithtwo", 'value', 'id',  selectedOptionreligion,selectedOptionmother);

        }

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlmothertongue").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlreligion   option:selected").val();
        var selectedOptionmother = $("#ctl00_ContentPlaceHolder1_ddlmothertongue   option:selected").val();


        if (selectedOptionmother.length != 0 && selectedOptionreligion.length != 0) {
            abcwithtwo('#ctl00_ContentPlaceHolder1_ddlcaste', "" + path + "/castewithtwo", 'value', 'id', selectedOptionreligion, selectedOptionmother);

        }
        else if (selectedOptionreligion.length != 0 && selectedOptionmother.length == 0) {
            abcwithone('#ctl00_ContentPlaceHolder1_ddlcaste', "" + path + "/castewithreligion", 'value', 'id', selectedOptionreligion);

        }
        else {
            abcwithone('#ctl00_ContentPlaceHolder1_ddlcaste', "" + path + "/castewithmother", 'value', 'id', selectedOptionmother);
        }



    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlcountry").change(function () {

        var str = $("#ctl00_ContentPlaceHolder1_ddlcountry option:selected").val();

        $("#ctl00_ContentPlaceHolder1_ddlmobilecountry").val(str);
        $("#ctl00_ContentPlaceHolder1_ddllandcountry").val(str);
       
    });
});

$(function () {

    $("#ctl00_ContentPlaceHolder1_ddlBornCitizenship").change(function () {
        var borncountry = $("#ctl00_ContentPlaceHolder1_ddlBornCitizenship option:selected").val();

        var livingcountry = $("#ctl00_ContentPlaceHolder1_ddlCountryLivingIn option:selected").val();

        if ($(this).val() == livingcountry) {
            $("#ctl00_ContentPlaceHolder1_ddlVisaStatus").prop("disabled", true);
            $("#ctl00_ContentPlaceHolder1_from").datepicker("option", "disabled", true);

        }
        else {
            $("#ctl00_ContentPlaceHolder1_ddlVisaStatus").prop("disabled", false);
            $("#ctl00_ContentPlaceHolder1_from").datepicker("option", "disabled", false  );
        }

    });
});

//$(function () {

//    $("#ctl00_ContentPlaceHolder1_ddlEduCategory").change(function () {
       
//        $('#ctl00_ContentPlaceHolder1_ddlEduSpecialisation').empty();
      
//        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlEduCategory  option:selected").val();
        
//        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlEduGroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);
//        alert(selectedOptionreligion);
//    });
//});

$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlEduGroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlEduGroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlEduSpecialisation', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlProfessionalGroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlProfessionalGroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {

    var livingcountry = $("#ctl00_ContentPlaceHolder1_ddlCountryLivingIn option:selected").val();

    abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlStatelivingIn', "" + path + "/CountryLivingInusebindwithone ", 'value', 'id', livingcountry);



});



$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlCountryLivingIn").change(function () {

        $("#ctl00_ContentPlaceHolder1_ddlStatelivingIn").empty();
        $("#ctl00_ContentPlaceHolder1_ddlDistricLivingIn").empty();
        $("#ctl00_ContentPlaceHolder1_ddlcityLivingIn").empty();

        var selectedCountryLivingIn = $("#ctl00_ContentPlaceHolder1_ddlCountryLivingIn  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlStatelivingIn', "" + path + "/CountryLivingInusebindwithone ", 'value', 'id', selectedCountryLivingIn);

        //disabling and enabling visa status  && date
        var borncountry = $("#ctl00_ContentPlaceHolder1_ddlBornCitizenship option:selected").val();
        if (borncountry == selectedCountryLivingIn) {
            $("#ctl00_ContentPlaceHolder1_ddlVisaStatus").prop("disabled", true);
            $("#ctl00_ContentPlaceHolder1_from").datepicker("option", "disabled", true);
        }
        else {
            $("#ctl00_ContentPlaceHolder1_ddlVisaStatus").prop("disabled", false);
            $("#ctl00_ContentPlaceHolder1_from").datepicker("option", "disabled", false);
        }

        //disabling districts excet india districts

        if (selectedCountryLivingIn != 1) {
            $("#ctl00_ContentPlaceHolder1_ddlDistricLivingIn").prop("disabled", true);
        }
        else
            $("#ctl00_ContentPlaceHolder1_ddlDistricLivingIn").prop("disabled", false);
    });
});




$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlStatelivingIn").change(function () {

        //$("#ctl00_ContentPlaceHolder1_ddlcityLivingIn").empty();
        var selectedStatelivingIn = $("#ctl00_ContentPlaceHolder1_ddlStatelivingIn  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlDistricLivingIn', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedStatelivingIn);
        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlcityLivingIn', "" + path + "/stateCityBind ", 'value', 'id', selectedStatelivingIn);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_ddlDistricLivingIn").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_ddlDistricLivingIn  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_ddlcityLivingIn', "" + path + "/DistricLivingInusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});


$(function () {
    $("#ctl00_ContentPlaceHolder1_txtEmail").change(function () {
        alert(122);
        var val = "Email";
        var selectedEmail = $("#ctl00_ContentPlaceHolder1_txtEmail").val();
        if (selectedEmail != null) {
            Value_exist('ctl00_ContentPlaceHolder1_txtEmail', "" + path + "/EmailExists ", selectedEmail, val);

        }
    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_txtMobileNo").change(function () {
        var val = "ContactNumber";
        var selectedcontactnum = $("#ctl00_ContentPlaceHolder1_txtMobileNo").val();
        if (selectedcontactnum != null) {
            Value_exist('ctl00_ContentPlaceHolder1_txtMobileNo', "" + path + "/contactNumExists ", selectedcontactnum, val);

        }
    });
});


$(function () {

    $("#ctl00_ContentPlaceHolder1_CustomerEditEducation_lstGEducatgory").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_CustomerEditEducation_UpdatePanel4  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_CustomerEditEducation_lstGEdugroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_CustomerEditEducation_UpdatePanel5").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_CustomerEditEducation_UpdatePanel5  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_CustomerEditEducation_ddlEduspecialization', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});








       
