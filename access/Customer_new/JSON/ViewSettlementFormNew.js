var Custid;
$(function () {
    $(".Number").on("keyup", function () {
        var o = $(this);
        o.val(o.val().replace(/[^\d]/g, ""));
    });

});
function Chkprofileid() {
    var val = $('#txtviewsettlementformid').val();
    var datachk = CallApi("ViewSettlementFormNew.aspx/Checkprofileid", { Profileid: val });
    if (datachk.d == 1) {
        return true;
    }
    else {
        $('#txtviewsettlementformid').val("");
        DynamicTimeAlert("Please enter Correct ProfileID", 'alert alert-danger', '3000');
        return false;
    }
}
function Submitviewform() {
    if (Chkprofileid()) {
        if ($('#txtviewsettlementformid').val() != "") {
            var View = {
                mobj: {
                    ProfileID: $('#txtviewsettlementformid').val(),
                }
            };
            var status = CallApi("ViewSettlementFormNew.aspx/SubmitViewSettlemnetform", View);
            if (status.d.Item1 == 1) {
                DynamicTimeAlert("Inactive settlement form", 'alert alert-danger', '3000');
            }
            else if (status.d.Item1 == 3) {
                DynamicTimeAlert("No settlement form", 'alert alert-danger', '3000');
            }
            else if (status.d.Item1 == 2) {
                if (status.d.Item2 != "" && status.d.Item2 != undefined && status.d.Item2 != null) {
                    $('#imghorobigimage').attr('src', status.d.Item2);
                    $('#bidsettlementform').modal({ backdrop: 'static' });
                }
            }
            else {
                DynamicTimeAlert("No settlement form", 'alert alert-danger', '3000');
            }
        }
        else {
            DynamicTimeAlert("Please enter  ProfileID", 'alert alert-danger', '3000');
            return false;
        }
    }
    return false;
}