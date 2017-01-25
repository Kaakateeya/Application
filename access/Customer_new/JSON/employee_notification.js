$(function () {

    getNotificationContent(0, 0);

});
$('#llDisplay').click(function () {
    getNotificationContent(1, 0);
});


function clickNotification(i, CategoryID, strProfileID) {
    getNotificationContent(2, i, CategoryID, strProfileID);

}
var staticerror = "Unfortunatly,we faced some error while accessing your request.";
function getNotificationContent(intType, NotificationID, CategoryID, strProfileID) {
    CategoryID = CategoryID == undefined ? 0 : CategoryID;
    strProfileID = strProfileID == undefined ? 0 : strProfileID;

    jquerynotify.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../Services/KaakateeyaServices.asmx/NotificationText",
        data: '{ "intType":' + intType + ', "NotificationID":' + NotificationID + ', "Categoryid":' + CategoryID + ',"ProfileID":' + strProfileID + '}',

        dataType: "json",
        success: function (data) {

            if (data != undefined && data.d.length > 0) {


                var ssss = data.d.length;
                console.log(ssss);
                if (data.d.length < 3) {
                    $('#llDisplay').hide();
                }
                else {
                    $('#llDisplay').show();
                }

                $('#NotifyCount').html("(" + data.d[0].NotifyCount + ")");
                for (var icount = 0; icount < data.d.length; icount++) {

                    var titles = data.d[icount].strCustomerName;
                    jquerynotify.notify({
                        icon: data.d[icount].strCustomerPhoto,
                        title: data.d[icount].strCustomerName,
                        message: data.d[icount].strActionName
                    }, {
                        type: 'success',
                        delay: 10000,
                        icon_type: 'image',
                        template: "<div data-notify='container' class='col-xs-11 col-sm-3 alert alert-{0}' role='alert'>" +

                              "<img data-notify='icon' class='img-circle pull-left' height='50' width='50'>" +
                            "<span  data-notify='message'>{1}</span>" + "<button type='button' aria-hidden='true' class='close' data-notify='dismiss'>×</button>" + "<br/>" +
                            "<span  data-notify='message'>{2}</span>" +
                            "&nbsp;&nbsp;&nbsp;<a  href='javascript:void(0);' id='a" + data.d[icount].iNotificationID + "' onclick='return clickNotification(" + data.d[icount].iNotificationID + "," + data.d[icount].CategoryID + "," + data.d[icount].strProfileID + ");' aria-hidden='true'  data-notify='dismiss'>Read</a>" +
                        '</div>'
                    });
                }
            }
            else {
                if (intType == 0 || intType == 1) {
                    $('#llDisplay').hide();
                }
                else {
                    $('#llDisplay').show();
                }
            }
        },
        error: function (data) {
            DynamicTimeAlert(staticerror, 'alert alert-danger', '4000');
            return false;
        }
    });
}