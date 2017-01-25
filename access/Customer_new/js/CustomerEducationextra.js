function city1() {
    document.getElementById("ctl00_ContentPlaceHolder1_CustomerEditEducation_lnkCity").style.display = "none";
    document.getElementById("ctl00_ContentPlaceHolder1_CustomerEditEducation_ddlcityworking").style.display = "none";
    document.getElementById("ctl00_ContentPlaceHolder1_CustomerEditEducation_txtcity").style.display = "block";
    return false;
}

$(function () {
    $("#ctl00_ContentPlaceHolder1_CustomerEditEducation_UpdatePanel4").change(function () {

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


$(document).ready(function () {

    var foo = $('input.check:checked');

    if (foo.is(':checked')) {
        foo.parent().addClass('btn btn-success col-lg-5 active');
    }
});

