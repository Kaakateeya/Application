$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppProfessionGroup").change(function () {
        alert(1);
        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppProfessionGroup  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerReference_ddlProfession', "" + path + "/ProfessionalGroupbindwithone ", 'value', 'id', selectedOptionreligion);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppCountry").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppCountry  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerReference_ddlState', "" + path + "/CountryLivingInusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});



$(function () {
    $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppState").change(function () {

        var selectedStatelivingIn = $("#ctl00_ContentPlaceHolder1_EditCustomerReference_uppState  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerReference_ddlDistrict', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedStatelivingIn);

    });
});
//$(function () {
//    var selectedStatelivingIn = $("#ctl00_ContentPlaceHolder1_EditCustomerReference_UpdatePanel46  option:selected").val();

//    abcwithonenoselect('#ctl00_ContentPlaceHolder1_EditCustomerReference_ddlDistrict', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedStatelivingIn);

//});
