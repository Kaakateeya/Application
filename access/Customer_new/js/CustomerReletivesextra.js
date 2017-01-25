$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel39").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel39  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerRelative_ddlFBProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel31").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel31  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerRelative_ddlFSHDistrictID', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel44").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel44  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerRelative_ddlFSProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel51").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel51  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerRelative_ddlMBProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel69").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerRelative_UpdatePanel69  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerRelative_ddlMsDistrict', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
})