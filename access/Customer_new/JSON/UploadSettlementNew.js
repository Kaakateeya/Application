var relation, Custid;
$(function () {
    relation = [{ value: 'Directors relation/friend', Id: 455 }, { value: 'kaakateeya emp ref', Id: 456 }, { value: 'email', Id: 457 },
    { value: 'sms', Id: 458 }, { value: 'oral agreed', Id: 459 }];
    GetmasterDataNew('Relation', 'lstrelation', relation);
    $('input[type=radio][name=rbtnsign]').on('change', function () {
        typepage = $(this).val();
        if ($(this).val() == 1) {

            document.getElementById("divsettlementagreement").style.display = "block";
            document.getElementById("divrelationsettle").style.display = "none";
        }
        else {
            document.getElementById("divsettlementagreement").style.display = "block";
            document.getElementById("divrelationsettle").style.display = "block";
        }
    });

    $(".Number").on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });

});

function Resetuploadvalues() {
   
    $('input[type=text]').val('');
    $(".multiple").multiselect("clearSelection");
    Resetforradiobuttons("rbtnsign");
    $("#uniform-undefined > span").removeClass('checked');
    $("#lstrelation").multiselect("clearSelection");
    $('#txtnarration').val('');
    $('#lstrelation').multiselect('select', [0]);
    document.getElementById("divsettlementagreement").style.display = "none";
    document.getElementById("divrelationsettle").style.display = "none";
    document.getElementById("divcontraols").style.display = "none";
    $('#ctl00_ContentPlaceHolder1_fuImage_ctl02').val("");
    return false;
}
function SubmitUploadform() {
   

    if ($('#txtdelsettleprofileid').val() == "") {
        DynamicTimeAlert("Please Enter Prfoileid", 'alert alert-danger', '3000');
        return false;
    }
    else if ($('#ctl00_ContentPlaceHolder1_fuImage_ctl02').val() == "") {
        DynamicTimeAlert("Please upload Image", 'alert alert-danger', '3000');
        return false;
    }

    else if ($("input:radio[name='rbtnsign']:checked").val() == "" || $("input:radio[name='rbtnsign']:checked").val() == null) {
        DynamicTimeAlert("Please Select Sign", 'alert alert-danger', '3000');
        return false;
    }
    if ($("input:radio[name='rbtnsign']:checked").val() != "") {
        var value = $("input:radio[name='rbtnsign']:checked").val();
        if (value == 1) {
            if ($('#txtnarration').val() == "") {
                DynamicTimeAlert("Please Enter Sign", 'alert alert-danger', '3000');
                return false;
            }
        }
        else {
            if ($('#txtnarration').val() == "") {
                DynamicTimeAlert("Please Enter Sign", 'alert alert-danger', '3000');
                return false;
            }

            else if (getvalues('#lstrelation') == 0 || getvalues('#lstrelation') == null) {
                DynamicTimeAlert("Please Select Reference", 'alert alert-danger', '3000');
                return false;
            }
        }
    }
    var currentdate = new Date();
    var Paths;
    var upload = {
        mobj: {
            CreatedByEmpID: GetEmpid(),
            CreatedDate: currentdate,
            ModifiedByEmpID: GetEmpid(),
            ModifiedEmpDate: currentdate,
            Notes: $('#txtnarration').val(),
            isActive: 0,
            Settlementfrompath: $('#ctl00_ContentPlaceHolder1_fuImage_ctl02').val(),
            isassigned: $("input:radio[name='rbtnsign']:checked").val() != "" ? $("input:radio[name='rbtnsign']:checked").val() : null,
            ReferenceID: getvalues('#lstrelation') > 0 ? getvalues('#lstrelation') : 0,
            ProfileID: $('#txtdelsettleprofileid').val(),
            Profileidnew: $('#txtdelsettleprofileid').val()
        }
    };
    var status = CallApi("UploadSettlementNew.aspx/Submituploadsettlemnetform", upload)
    if (status != null && status != undefined && status.d != null && status.d != undefined) {
        if (status.d == 1) {

            Resetuploadvalues();

            DynamicTimeAlert("uploaded successfully", 'alert alert-success', '3000');
        }
        else {
            DynamicTimeAlert("uploaded Failed", 'alert alert-danger', '3000');
        }
    }
    else {
        DynamicTimeAlert("uploaded Failed", 'alert alert-danger', '3000');
    }
    return false;
}
function Chkprofileid() {
    var val = $('#txtdelsettleprofileid').val();
    // $('#ctl00_lblprofile').text(val);

    $("input:hidden[id$=lblprofile]").val(val);
    document.getElementById("divcontraols").style.display = "block";
    var datachk = CallApi("UploadSettlementNew.aspx/Checkprofileid", { Profileid: val });
    console.log(datachk);
    if (datachk.d.Item1 == 1) {
        Custid = datachk.d.Item2;
    }
    else {
        $('#txtdelsettleprofileid').val("");
        $("input:hidden[id$=lblprofile]").val("");
        DynamicTimeAlert("Please enter Correct ProfileID", 'alert alert-danger', '3000');
    }
    if (datachk.d.Item3 == 1) {
        $('#txtdelsettleprofileid').val("");
        $("input:hidden[id$=lblprofile]").val("");
        DynamicTimeAlert("ProfileID  Already exists Enter New ProfileID", 'alert alert-danger', '3000');
    }
    return false;
}


