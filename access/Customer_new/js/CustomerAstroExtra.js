$(function () {
    $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel9").change(function () {

        var selectedCountryLivingIn = $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel9  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_Editcustomerastro_ddlStateOfBirthID', "" + path + "/CountryLivingInusebindwithone ", 'value', 'id', selectedCountryLivingIn);

    });
});

$(function () {
    $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel23").change(function () {

        var selectedStatelivingIn = $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel23  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_Editcustomerastro_ddlDistrictOfBirthID', "" + path + "/StatelivingInusebindwithone ", 'value', 'id', selectedStatelivingIn);
        abcwithonenoselect('#ctl00_ContentPlaceHolder1_Editcustomerastro_ddlcity', "" + path + "/stateCityBind ", 'value', 'id', selectedStatelivingIn);

    });
});
$(function () {
    $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel24").change(function () {

        var selectedOptionreligion = $("#ctl00_ContentPlaceHolder1_Editcustomerastro_UpdatePanel24  option:selected").val();

        abcwithonenoselect('#ctl00_ContentPlaceHolder1_Editcustomerastro_ddlcity', "" + path + "/DistricLivingInusebindwithone ", 'value', 'id', selectedOptionreligion);

    });
});


$(function () {
    $("#ctl00_ContentPlaceHolder1_Editcustomerastro_upStarl").change(function () {
        var selectedStarLanguage = $("#ctl00_ContentPlaceHolder1_Editcustomerastro_upStarl  option:selected").val();
       
        abcwithonenoselect('#ctl00_ContentPlaceHolder1_Editcustomerastro_ddlstar', "" + path + "/StarDependency ", 'value', 'id', selectedStarLanguage);

    });
});