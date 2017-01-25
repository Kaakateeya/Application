$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBEducationcategory").change(function () {
        $('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBEducationspecialization').empty();



        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBEducationcategory  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBEducationgroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBEducationgroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBEducationgroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBEducationspecialization', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBProfessiongroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBProfessiongroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeEducationcategory").change(function () {
        $('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBWifeEducationspl').empty();



        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeEducationcategory  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBWifeEducationgroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeEducationgroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeEducationgroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBWifeEducationspl', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeProfessiongroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlBWifeProfessiongroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlBWifeProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});


$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSEducationcategory").change(function () {
        $('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSEducationspl').empty();



        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSEducationcategory  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSEducationgroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSEducationgroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSEducationgroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSEducationspl', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSProfessiongroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSProfessiongroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});


$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandEducationcategory").change(function () {
        $('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandEducationspl').empty();



        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandEducationcategory  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandEducationgroup', "" + path + "/Educategoryusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSHusbandEducationgroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSHusbandEducationgroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandEducationspl', "" + path + "/EduGroupusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSHusbandProfessiongroup").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerSibbling_uppddlSHusbandProfessiongroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerSibbling_ddlSHusbandProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});