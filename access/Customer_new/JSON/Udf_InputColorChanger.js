$(function () {

    $('select').on('change', function () {
        debugger;

        var id = $(this).attr("id");
        console.log($('#' + id).next().find('span').html());
        if (getvaluesForColor("#" + id) != null && getvaluesForColor("#" + id) != '0') {
            if (($('#' + id).next().find('button').attr("class")).indexOf('ValueContains') == -1)
                $('#' + id).next().find('button').addClass("ValueContains");
        }
        else {
            if (($('#' + id).next().find('button').attr("class")).indexOf('ValueContains') != -1)
                $('#' + id).next().find('button').removeClass("ValueContains");
        }
        return false;
    });

    $('input[type=text]').on('keyup', function () {
        debugger;
        var id = $(this).attr("id");
        var strIDs = "txtprofileid,txtGotoVal,ctl00_txtUserName,ctl00_txtUserName";
        if (strIDs.indexOf(id) == -1) {
            if ($('#' + id).val() != "") {
                if (($('#' + id).attr("class")).indexOf('ValueContains') == -1)
                    $('#' + id).addClass("ValueContains");
            }
            else {
                if (($('#' + id).attr("class")).indexOf('ValueContains') != -1)
                    $('#' + id).removeClass("ValueContains");
            }
        }

    });

    $('.datepicker3').change(function () {
        var id = $(this).attr("id");

        if ($('#' + id).val() != "") {
            if (($('#' + id).attr("class")).indexOf('ValueContains') == -1)
                $('#' + id).addClass("ValueContains");
        }
        else {
            if (($('#' + id).attr("class")).indexOf('ValueContains') != -1)
                $('#' + id).removeClass("ValueContains");
        }

    });

    //allows only numbers
    $(".Number").on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });
    //allows only alphabets
    $('.OnlyText').bind('keyup blur', function () {
        $(this).val($(this).val().replace(/[^A-Za-z]/g, ''))
    });
});

function getvaluesForColor(dropdownname) {

    var values = new Array();
    var valuesnew;
    $.each($(dropdownname), function () {
        values.push($(this).val());
    });
    values = values.length > 0 && values.join(',') != "" ? values.join(',') : null;
    return values;
}