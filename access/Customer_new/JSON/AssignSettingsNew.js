'use strict'

var $ToTable = $('#ToTable1'), Empddldata = [], rows, $append = $('.append'), pagesizec = 10, from, to, flag = 10, falsepageination=false;
$(function () {

    BindBasedOnDiv('ControlsDiv', 'ddlCaste');
    $('#ddlCaste').multiselect('select', [402]);
    $('#ddlApplicationStatus').multiselect('select', [54]);

});

function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space 
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}
function AssignSelect(from,to) {
    if (from == 1)
    {
        $ToTable.bootstrapTable('removeAll');
        $("#ToTable1").find('.page-size').html(0);
        $('#spanappendkey').html("NaN");
    }
    var inputobj = {
        Mobj: {
            ProfileID: ($('#txtProfileID').val() != '' && $('#txtProfileID').val() != null) ? $('#txtProfileID').val() : null,
            strApplicationStatus: getvalues('#ddlApplicationStatus'),
            FromDate: $('#txtFromRegistration').val(),
            ToDate: $('#txtToRegistration').val(),
            strCaste: getvalues('#ddlCaste'),
            strBranch: getvalues('#ddlBranch'),
            boolIsConfidential: $("#chkConfidential").is(":checked"),
            Gender: ($("input:radio[name='GenderID']:checked").val() != undefined && $("input:radio[name='GenderID']:checked").val() != '0') ? $("input:radio[name='GenderID']:checked").val() : null,
            PaymentStatus: ($("input:radio[name='PaymentStatus']:checked").val() != undefined && $("input:radio[name='PaymentStatus']:checked").val() != '0') ? $("input:radio[name='PaymentStatus']:checked").val() : null,
            EmpID: CallApi("GetEmpid", {}).d,
            PageFrom:from,
            PageTo:to
        }
    };
    var data = CallApi("AssignSettingsNew.aspx/AssignSelect1", inputobj);
    if (data != null && data != undefined) {
        $('#tablediv').attr('style','display:block;');
        _.map(data.d, function (item) {
            item.paid = item.paid==372?1:0;
        });
        
        from == 1 ? BootstrapTableLoad(data.d, $ToTable, ['cust_id', 'paid', 'TotalRows', 'TotalPages'],550,10) : BootstrapTableAppend(data.d, $ToTable, ['cust_id', 'paid', 'TotalRows', 'TotalPages']);

        $('#lblSearchCount').show();
        $('#spCount').text(data.d[0].TotalRows);
        rows = data.d[0].TotalRows;
        textchange();
    }
    
    if ($('#spanappendkey').html() == "NaN") {
        if (parseInt(rows) > 10) {
            $('#spanappendkey').html(parseInt(rows) - parseInt(data.d.length));
        }
        else {
            $('#spanappendkey').html("0");
        }
    }
    else {

        if (parseInt($('#spanappendkey').html()) > 10) {
            $('#spanappendkey').html(parseInt($('#spanappendkey').html()) - parseInt(data.d.length));
        }
        else {
            $('#spanappendkey').html("0");
        }
    }
}



function bindEmpddl() {
    var Bindings = {
        Masterbind: {
            OnlyEmpname: "EmpnameswithNoCondition",
        }
    }
    var data = CallApi("CommonPopulateDropDownList", Bindings);
    if (data != null)
        return data.d.OnlyEmpname;
    else
        null;
}
function textchange() {
    $(".autocomp").autocomplete({
        source: Empoptions,
        focus: function (event, ui) {
            // prevent autocomplete from updating the textbox
            event.preventDefault();
            // manually update the textbox
            $(this).val(ui.item.label);
        },
        select: function (event, ui) {
            event.preventDefault();

            $("#hdnProfileOwner").val(ui.item.value);
        }

    });
}
var Empoptions = [];
$(function () {

    var testdata = bindEmpddl();

    $.each(testdata, function (key, value) {
        Empoptions.push({ label: value.value, title: value.value, value: value.Id });
    });

    $(".autocomp").autocomplete({
        source: Empoptions,
        focus: function (event, ui) {
            // prevent autocomplete from updating the textbox
            event.preventDefault();
            // manually update the textbox
            $(this).val(ui.item.label);
        },
        select: function (event, ui) {

            event.preventDefault();

        }
    });

});


function AssignTicketSubmit(count, profileID, custId) {

    var profileOwner = ($('#txtProfileOwner' + count + '').val() != null && $('#txtProfileOwner' + count + '').val() != '') ? gettxtVal($('#txtProfileOwner' + count + '').val()) : null;
    var marketedby = ($('#txtMarketedby' + count + '').val() != null && $('#txtMarketedby' + count + '').val() != '') ? gettxtVal($('#txtMarketedby' + count + '').val()) : null;
    var reviewedby = ($('#txtReviewedby' + count + '').val() != null && $('#txtReviewedby' + count + '').val() != '') ? gettxtVal($('#txtReviewedby' + count + '').val()) : null;


    if (profileOwner == null && marketedby == null && reviewedby == null) {
        ShowOnlyAlertText('Please choose the employees before assigning', 'alert alert-danger');
    }
    else {
        var data = CallApi("AssignSettingsNew.aspx/AssignTicketSubmit", {
            Mobj: {
                ProfileID: profileID,
                CustID: custId,
                EmpID: CallApi("GetEmpid", {}).d,
                ProfileOwner: profileOwner,
                marketedBy: marketedby,
                Reviewedby: reviewedby
            }
        });
        statusAlert(data.d, undefined, 'Updated successfully', 'Updation failed, please contact admin');
    }
}

function gettxtVal(str) {
   
    var test = _.where(Empoptions, { title: str });
    if (test.length > 0) {
        var val = test[0].value;
        return val;
    }
    else {
        return null;
    }
   
}
$append.click(function () {
    
    pagesizec = parseInt($("#tablediv").find('.page-size').html());
    from = flag + 1;
    flag = to = flag + 10;
    console.log($(".page-size").html());
   
    AssignSelect(from, to);
    return false;
});

function reset()
{
    $("#ddlApplicationStatus").multiselect("clearSelection");
    $("#ddlBranch").multiselect("clearSelection");
    $("#ddlCaste").multiselect("clearSelection");
    $('input[type=text]').each(function (index, item) {
        var id = $(item).attr("id");
        $("#" + id).val('');
    });
    $('#chkConfidential').removeAttr('checked');
    $('#ddlCaste').multiselect('select', [402]);
    $('#ddlApplicationStatus').multiselect('select', [54]);
    return false;
}





