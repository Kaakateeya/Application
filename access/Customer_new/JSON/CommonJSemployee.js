



function sendSms(MobileNumber, Name, Pemail, countrycode, Ticketid, ticketkak, i, updatedivid, lbladdactionid) {

    smsArr = [
          { id: 1, text: "We missed to reach you on 91-XXXXX. please call back" },
      { id: 2, text: "Bride is interested in your profile." },
      { id: 3, text: "Groom is interested in your profile." },
      { id: 4, text: "Contact details of the Groom/bride is given below." },
      //{ id: 5, text: "Your Email is not verified., We recommond you to login and verify the email" },
      //{ id: 6, text: "Your Near by Branch Address---> Flat No:103,109, Vijayasri APts, Behind chermas, Ameerpet,Hyderabad." },
      //{ id: 7, text: "Your profile is viewed by 20 Members. Please login to view their details" },
      //{ id: 8, text: "I am (" + empNameObj.d + ")  Your Relationship Manager. Please Feel Free to Contact me (9:00 AM to 6:00 PM IST)" },
      //{ id: 9, text: "Please update your Complete profile for Good Responce" },
      //{ id: 10, text: "Please upload your recent photo graphs on www.kaakateeya.com/WhatsApp on 91-9848535373 with your profile id or Name and Surname" },
      //{ id: 11, text: "Dear Member, lots of new matches are added on kaakateeya.com everyday. Don't miss, Login now and connect with them" }

    ];



    $('#txtval').val('');
    Resetforradiobuttons('Sendsms');
    $('#headerid').text('Send SMS');
    $('#lblname').text(Name);
    $('#lblPMobile').text(MobileNumber);
    $('#lblPMobileCode').text(countrycode);
    $('#lblTicketid').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    $('#lblupdatedivid').text(updatedivid);
    $('#lbladdactionid').html(lbladdactionid);
    document.getElementById("smsdiv").style.display = "block";
    document.getElementById("sendmailtxtdiv").style.display = "none";
    $('#brnsendsmsmail').html("Send Sms");
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });

    return false;

}

//$('#lbladdactionid').html(lbladdactionid);

function sendMail(profileid, Ticketid, ticketkak, i, updatedivid, lbladdactionid, fromcustID, tocustID, ticketStatusID, custname, primaryemail,ToProfileID) {
    $('#headerid').text('Send Mail');
    $('#txtval').val('');
    $('#lblProfileid').text(profileid);
    $('#lblTicketid').text(Ticketid);
    $('#lblticketcount').text(i);
    $('#lblTicketkak').text(ticketkak);
    $('#lblupdatedivid').text(updatedivid);
    $('#lbladdactionid').html(lbladdactionid);

    $('#lblfromCustID').html(fromcustID);
    $('#lblTocustID').html(tocustID);
    $('#lblticketStatusID').html(ticketStatusID);
    $('#lblToProfileID').html(ToProfileID);




    document.getElementById("smsdiv").style.display = "none";
    document.getElementById("sendmailtxtdiv").style.display = "block";
    $('#divcustnameemail').html(" <div class='form-group'><label class='control-label col-sm-4 maroon'>Customer Name</label>"
    + "<div class=pull-left><label class='control-label pull-left'>" + custname + " (" + profileid + ")" + "</label></div></div>"
   + "<div class=clearfix></div><br /><div class='form-group'><label class='control-label  col-sm-4 maroon'>Email going to </label>"
   + "<div class=pull-left><label class='control-label pull-left'>" + primaryemail + "</label></div></div><div class=clearfix></div><br />");
    $('#brnsendsmsmail').html("Send Mail");
    bindmasterdata();
    $('#lstmails').multiselect('select', ['5']);
    $('#txtval').val('Interested in your match we would like to know your opinion to proceed further.');
    $('#submittextpopup').modal({ backdrop: 'static', keyboard: false });

    return false;
}
function returnCurentdate() {
    var monthNames = [
     "Jan", "Feb", "Mar",
       "Apr",
       "May",
       "June",
       "July",
       "Aug",
       "Sept",
       "Oct",
       "Nov",
       "Dec"
    ];
    var d1 = new Date();
    var currentdate = d1.getDate() + '-' + monthNames[d1.getMonth()] + '-' + d1.getFullYear() + ' ' + d1.getHours() + ':' + d1.getMinutes() + ':' + d1.getSeconds();
    return currentdate;
}
function sendsmssubmit() {
    
    var currentdate = returnCurentdate();
    var resultdata;
    var idcount = $("#lblticketcount").text();
    var updatedivid = $('#lblupdatedivid').text();
    var lbladdactionid = $('#lbladdactionid').text();
    var divticketid = $("#" + lbladdactionid + "" + idcount + "").text();
    var popupticketid = $('#lblTicketkak').text();
    if ($('#txtval').val() != "") {


        if ($('#headerid').text() == 'Send SMS') {

            var submitdata = { Mobj: { strbody: $('#txtval').val(), strMobileNumber: $('#lblPMobile').text(), strName: $('#lblname').text(), strEmpname: empNameObj.d, strEmpid: empidObj.d, strEmpmobileNumber: empMobObj.d, strMobileCountryCode: $('#lblPMobileCode').text() != "" ? $('#lblPMobileCode').text() : null, LTicketID: $('#lblTicketid').text(), marketbothflag: "Bothone" } };

            CallApi("Marketslideshow_SendSMS", submitdata)
            statusAlert(1, 'submittextpopup', "SMS sent sucessfully", "SMS sending failed");
            


            //if (divticketid == popupticketid) {
            var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj.d, "",
                 "", $('#txtval').val(), "", "", "");

            $("#" + updatedivid + "" + idcount + "").html(appenddiv);
            var strid = "#" + updatedivid + "" + idcount + "";
            //}
            $('#txtval').val('');
            return false;
        }

        else if ($('#headerid').text() == 'Send Mail') {

            var submitdata = {
                Mobj: {
                    Notes: $('#txtval').val(),
                    EMPID: empidObj.d, profileid: $('#lblProfileid').text(),
                    LTicketID: $('#lblTicketid').text(), HistoryUpdate: 1,
                    FromCustID: $('#lblfromCustID').text(),
                    TocustID: $('#lblTocustID').text(),
                    TicketStatusID: $('#lblticketStatusID').text(),
                    FromProfileID:$('#lblProfileid').text(),
                    ToProfileID: $('#lblToProfileID').text()
                }
            };

            resultdata = CallApi("SendMarketingMail", submitdata)

            statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");


            

            if (parseInt(resultdata.d) == parseInt(1)) {

                if (divticketid == popupticketid) {
                    var appenddiv = returnhtml("REPLY", currentdate, empNameObj.d, "",
                         "", $('#txtval').val(), "", "", "");

                    $("#" + updatedivid + "" + idcount + "").html(appenddiv);

                }
            }
            $('#txtval').val('');
        }
    }
    else {

        ShowOnlyAlertText('Please enter text', 'alert alert-danger');
    }
    return false;

}

function photoRequest(custid, profileid, ticketid, ticketidkak, i, updatedivid) {
    
    var currentdate = returnCurentdate();
    var submitdata = { Mobj: { EMPID: empidObj.d, profileid: profileid, ticketIDs: ticketid } };
    $('#lblTicketkak').text(ticketidkak);
    var data = CallApi("photorequest", submitdata);

    statusAlert(data.d, undefined, 'Photo Request sent successfully', 'Photo request sending failed');
    var popupidnew = $("#lblticID" + i + "").text();
    

    if (parseInt(data.d) == parseInt(1)) {
        // var popupid = $("#lblTicketkak").text();
        if (popupidnew == ticketidkak) {
            var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj.d, "",
                 "", "Photo request for Upload Photo", "", "", "");

            $("#" + updatedivid + "" + i + "").html(appenddiv);

        }
    }
    return false;
}

function forgotPWD(custid, ticketid, ticketidkak, i) {
    $('#lblTicketkak').text(ticketidkak);
    var submitdata = { Mobj: { CustID: custid, EmpID: empidObj.d, ITicketID: ticketid } };
    var currentdate = returnCurentdate();
    var data = CallApi("forgotPwd", submitdata);
    statusAlert(data.d, undefined, 'Forgot Password mail sent successfully', 'Forgot Password mail sending failed');
    var popupidnew = $("#lblticID" + i + "").text();
    

    if (parseInt(data.d) == parseInt(1)) {
        var popupid = $("#lblTicketkak").text();
        if (popupidnew == popupid) {
            var appenddiv = returnhtml("InternalMemo", currentdate, empNameObj.d, "",
                 "", "Email To Reset Forgot Password", "", "", "");

            $("#" + updatedivid + "" + i + "").html(appenddiv);

        }
    }
    return false;
}


function ResendMail(fromcustID, tocustID,fromProfileID,toprofileID) {

    var submitdata = {
        Mobj: {
            Notes: 'mail sent',
            EMPID: empidObj.d,
            LFromCustID: fromcustID ,
            LToCustID: tocustID,
            FromProfileID: fromProfileID,
            ToProfileID:toprofileID,
            TicketStatusID: "NotViewed",
            Subject: "Kaakateeya Email For Bothsideinterest"
        }
    };

  var  resultdata = CallApi("ResendMail", submitdata)

    statusAlert(resultdata.d, 'submittextpopup', 'Mail sent succesfully', "Mail sending failed");

    return false;
}

