var ViewedCustID = '0';
var PaidType = $('#ctl00_lblpaid').text();
function ServiceActions(fromCustID, TocustID, flag, type, divID, lnkID, Logid, strPaidtype) {
    
    PaidType = ($('#ctl00_lblpaid').text() != undefined && $('#ctl00_lblpaid').text() != "" && $('#ctl00_lblpaid').text() != null) ? PaidType : strPaidtype;
    //alert($('#ctl00_lblpaid').text());
    if (flag == true) {
        if (type == 'ViewFullProfile') {

        }
        else {
            ShowOnlyAlertText('You have already ' + type + ' this profileID', 'alert alert-danger');
        }
    }
    else {
        var input = { MobjViewprofile: { IFromCustID: fromCustID, IToCustID: TocustID, TypeofInsert: type, Logid: (Logid == undefined ? null : Logid) } };

        var status = 0;
        switch (type) {
            case 'Bookmark':
                status = CallApi("CustomerServiceActions", input);
                statusAlert(status.d, undefined, "Bookmarked SuccessFully", "Bookmark failed");
                break;

            case 'Ignored':
                status = CallApi("CustomerServiceActions", input);
                statusAlert(status.d, undefined, "Ignored SuccessFully", "Ignored failed");
                break;

            case 'EXpressInterest':
                var PaidStatus = CallApi("getPaidorUnpaidMembercheck", { CustID: fromCustID });
                if (PaidStatus.d == 'Paid') {
                    $('#ctl00_lblpaid').text(PaidStatus.d)
                    status = CallApi("CustomerServiceActions", input);
                    statusAlert(status.d, undefined, "EXpressInterest done SuccessFully", "EXpressInterest  failed");
                }
                else {
                    InsertUnpaidStatus(JSON.stringify(fromCustID), JSON.stringify(TocustID), undefined, 'expressIntrst ');
                    $('#ctl00_lblpaid').text(PaidStatus.d)
                    ShowOnlyAlertText('Please Upgrade online membership', 'alert alert-danger');
                }
                break;

            case 'ViewFullProfile':

                status = CallApi("CustomerServiceActions", input);
                break;

            case 'SendMessage':
            case 'TicketHistry':
                input.MobjViewprofile.StrHtmlText = $('#txtmsgPartner').val();
                status = CallApi("CustomerServiceActions", input);
                statusAlert(status.d, undefined, "Message Sent SuccessFully", "Message Sending failed");
                break;
        }
        
        if (parseInt(status.d) == 1) {
            if (lnkID != undefined) {
                (tableTypes == 'WV' || tableTypes == 'RV') ? '' : $('#' + divID).fadeOut();
                if (lnkID == 'lnkRecentlyviewed' && ViewedCustID.indexOf(JSON.stringify(TocustID)) != -1) {
                }
                else {
                    var lnkID1;
                    if (tableTypes == 'MB' || tableTypes == 'I') {
                        switch (tableTypes) {
                            case 'MB':
                                lnkID1 = 'lnkMybookmarked';
                                break;

                            case 'I':
                                lnkID1 = 'lnkIgnored';
                                break;
                        }
                        var result = (($('#' + lnkID1).text()).split('('))[1].split(')');
                        var count = parseInt(result[0]) - parseInt(1);
                        $('#' + lnkID1).text((($('#' + lnkID1).text()).split('('))[0] + "(" + count + ")");
                        if (count == 0) {
                            $('#' + lnkID1).hide();
                        }
                    }


                    $('#' + lnkID).show();
                    var result = (($('#' + lnkID).text()).split('('))[1].split(')');
                    var count = parseInt(result[0]) + parseInt(1);
                    $('#' + lnkID).text((($('#' + lnkID).text()).split('('))[0] + "(" + count + ")");

                }
            }
        }

        return false;
    }
}


function ShowFullProfile(ProfileID, ToCustID, ViewdFlag, Logid,paid) {
    ServiceActions(LoginCustID, ToCustID, ViewdFlag, 'ViewFullProfile', undefined, 'lnkRecentlyviewed');
    ViewedCustID += "," + JSON.stringify(ToCustID);
    if (Logid != undefined && Logid != "" && Logid != null) {
        if (PaidType == 'Paid') {
            window.open("CustomerfullprofileNew.aspx?ProfileID=" + ProfileID + "&ToCustID=" + ToCustID + "&FromCustId=" + EncryptstrCustid + "&LogID=" + Logid + "&Paid=" + paid, "_blank");
        }
        else {
            InsertUnpaidStatus((LoginCustID), JSON.stringify(ToCustID), undefined, 'viewed');
            ShowOnlyAlertText('Please Upgrade online membership', 'alert alert-danger');
        }
    }
    else {
        window.open("CustomerfullprofileNew.aspx?ProfileID=" + ProfileID + "&ToCustID=" + ToCustID + "&FromCustId=" + EncryptstrCustid + "&Paid=" + paid, "_blank");
    }

    return false;
}

function photoRequestMethod(fromCustID, targetcustid, targetprofileid, photopassword) {
    if (LoginExistance()) {
        var photorequestBind = {
            sendrequest: {
                Int64CustID: '' + fromCustID + '',
                TargetCustID: '' + targetcustid + '',
                TargetProfileID: '' + targetprofileid + '',
                PhotoPassword: photopassword
            }
        }
        var data = CallApi("PhotoRequests", photorequestBind);
        if (JSON.stringify(data.d) == 1) {
            DynamicTimeAlert("Request sent successfully", 'alert alert-success', '4000');
            var ID = $('#lnkNewIDsSentProtec').text();

            if (ID != undefined) {
                var lnkID = (photopassword != '' && photopassword != null && photopassword != undefined) ? 'lnkNewIDsSentProtec' : 'lnkNewIDsSentReq';
                var result = (($('#' + lnkID).text()).split('('))[1].split(')');
                var count = parseInt(result[0]) + parseInt(1);
                $('#' + lnkID).text((($('#' + lnkID).text()).split('('))[0] + "(" + count + ")")
            }

        }
        else if (JSON.stringify(data.d) == 0) {
            DynamicTimeAlert('Request not sent', 'alert alert-danger', '4000');
        }
    }
    return false;
}

function InsertUnpaidStatus(fromCustid, tocustid, empid, typeaction) {
   
    var data = CallApi("InsertUnpaidStatus", { Mobj: { fromCustID: fromCustid, ToCustID: tocustid, Empid: empid, typeofAction: typeaction } });
   
}