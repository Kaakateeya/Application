app.controller("commonviewfullprofile", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams',
    '$location', 'customerviewfullprofileservices', '$window', '$state',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, customerviewfullprofileservices, window, $state) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.PageDiv = true;
        scope.searchObjectquery = $location.search();
        var meKey = Object.getOwnPropertyNames(scope.searchObjectquery)[0];
        var mekey2 = Object.getOwnPropertyNames(scope.searchObjectquery)[1];
        var meValue = scope.searchObjectquery[meKey];
        var meValue2 = scope.searchObjectquery[mekey2];
        scope.MyProfileQSAccept = "?" + (meKey).toString() + "=" + (meValue).toString();
        scope.tocustid = null;
        scope.mailInput = {};
        scope.educationcolumn = false;
        scope.partnerinformation = function(response) {
            scope.arr = [];
            scope.personalinfo = {};
            scope.aboutmyself = {};
            _.each(response, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                    scope.personalinfo = testArr;
                    var genderid = scope.Fromgender === 1 ? 'Mr.' : 'Ms.';
                    var oppositegender = scope.Fromgender === 1 ? 'Ms.' : 'Mr.';
                    var oppositeshe = scope.Fromgender === 2 ? 'He' : 'She';
                    var oppositeher = scope.Fromgender === 2 ? 'his' : 'her';
                    //
                    if ((scope.IsConfidential === 0) && (scope.HighConfendential === 0)) {
                        switch (scope.tointereststatus) {
                            case 'I':
                                scope.proceedtextforbothsides = oppositegender + scope.personalinfo[0].NAME + ' ' + 'is "INTERESTED" in your Profile.Ensure to express your opinion as';
                                break;
                            case 'V':
                                scope.proceedtextforbothsides = 'Your Profile was "VIEWED" by ' + oppositegender + scope.personalinfo[0].NAME + ' ' + 'Ensure to express your opinion as';
                                break;
                            default:
                                scope.proceedtextforbothsides = 'Ensure to express your opinion as';
                                break;
                        }
                    } else {
                        switch (scope.tointereststatus) {
                            case 'I':
                            case 'V':
                                scope.proceedtextforbothsides = 'Ensure to express your opinion as';
                                break;
                            default:
                                scope.proceedtextforbothsides = 'Ensure to express your opinion as';
                                break;
                        }
                    }
                    //
                    scope.titleproceed = (scope.IsConfidential === 0) && (scope.HighConfendential === 0) ? oppositegender + " " + scope.personalinfo[0].NAME + " will be receiving your positive reply on proceeding further with " + oppositeher + " profile and your relationship manager will be working on this simultaneously to take it ahead" : "Your openion will be conveyed to " + scope.aboutmyself[0].RelationShipManager + " (" + scope.aboutmyself[0].ContactDetails + ")";
                    scope.titledontproceed = (scope.IsConfidential === 0) && (scope.HighConfendential === 0) ? "Your not interested openion will be conveyed to " + oppositegender + " " + scope.personalinfo[0].NAME + " through your relationship manager" : "Your openion will be conveyed to " + scope.aboutmyself[0].RelationShipManager + " (" + scope.aboutmyself[0].ContactDetails + ")";
                    var photocount = scope.personalinfo[0].PhotoName_Cust;
                    scope.horoscopeimage = scope.personalinfo[0].HoroscopeImage === "" ||
                        scope.personalinfo[0].HoroscopeImage === null ||
                        scope.personalinfo[0].HoroscopeImage === "Not given" ? false : true;
                    if (scope.personalinfo[0].HoroscopeImage !== undefined && scope.personalinfo[0].HoroscopeImage !== null) {
                        scope.horoimagesrc = (scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? 'src/images/view_horoscope_image.jpg' : scope.personalinfo[0].HoroscopeImage;
                    }
                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.bookmarkexpreessdata = function() {
            customerviewfullprofileservices.getExpressinterst_bookmark_ignore_data(scope.fromcustid, scope.tocustid).then(function(responsebook) {
                _.each(responsebook.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0] !== undefined) {
                        switch (testArr[0].TableName) {
                            case "Bookmark":
                                scope.Bookmark = testArr;
                                break;
                            case "Viewed":
                                scope.Viewed = testArr;
                                break;
                            case "Express":
                                scope.Express = testArr;
                                if (testArr[0].SeenStatus === "Accept" && scope.hdnAccRejFlag !== "MailReject") {
                                    if (scope.flagopen !== 1) {
                                        scope.modalbodyID1 = "You have proceeded this profile";
                                        if (meValue2 !== "1") {
                                            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                        }

                                    }
                                } else if (testArr[0].SeenStatus === "Reject" && scope.hdnAccRejFlag !== "MailAccept") {
                                    if (scope.flagopen !== 1) {
                                        scope.modalbodyID1 = "You have Skipped this profile";
                                        if (meValue2 !== "1") {
                                            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                        }
                                    }
                                }
                                if (testArr[0].MatchFollowUpStatus === 1) {
                                    if (testArr[0].SeenStatus === "Accept" || testArr[0].SeenStatus === "Reject") {
                                        scope.divacceptreject = true;
                                        scope.btnticket = testArr[0].ViewTicket;
                                        scope.liproceed = false;
                                        scope.liticket = true;
                                    } else {
                                        scope.divacceptreject = true;
                                        scope.liproceed = true;
                                    }
                                } else if (testArr[0].Acceptflag === 1) {
                                    scope.divacceptreject = true;
                                    scope.liproceed = true;
                                } else if (testArr[0].ExpressFlag === 1) {
                                    scope.divacceptreject = true;
                                    scope.liaccept = true;
                                } else {
                                    scope.divacceptreject = false;
                                    scope.liaccept = false;
                                }
                                if (testArr[0].ExpressInterstId !== null) {
                                    scope.hdnexpressinterstfiled = testArr[0].ExpressInterstId;
                                }
                                break;
                            case "Paidstatus":
                                scope.lblpaid = testArr[0].Paidstatus;
                                break;
                            case "Ignore":
                                scope.Ignore = testArr;
                                break;
                        }
                    }
                });

            });
        };
        scope.pagerefersh = function(ToProfileID, Fromprofileid) {
            // if (scope.interestedflag === true) {
            //     customerviewfullprofileservices.Viewprofilepartial(ToProfileID, scope.fromcustid).then(function(responseunpaid) {
            //         scope.partnerinformation(responseunpaid.data);
            //     });
            // } else {
            //     customerviewfullprofileservices.getExpressIntrstfullprofilepaidandunpaid(scope.FromProfileID, scope.tocustid, "").then(function(responsedata) {
            //         scope.partnerinformation(responsedata.data);
            //     });
            // }
            customerviewfullprofileservices.getfromstatusandtostatus(scope.FromProfileID, scope.ToProfileID, '').then(function(response) {
                if (response.data !== undefined && response.data !== null && response.data !== "" && response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" && response.data[0].length > 0) {
                    scope.tointereststatus = response.data[0][0].ToCust_InterestStatus.trim();
                    if (response.data[0][0].FromCust_InterestStatus.trim() === 'I' && response.data[0][0].ToCust_InterestStatus.trim() === 'I') {
                        customerviewfullprofileservices.getExpressIntrstfullprofilepaidandunpaid(scope.FromProfileID, scope.tocustid, "").then(function(responsedata) {
                            scope.partnerinformation(responsedata.data);
                        });
                    } else {
                        customerviewfullprofileservices.Viewprofilepartial(ToProfileID, scope.fromcustid).then(function(responseunpaid) {
                            scope.partnerinformation(responseunpaid.data);
                        });
                    }
                } else if (scope.FromProfileID === scope.ToProfileID) {
                    customerviewfullprofileservices.getExpressIntrstfullprofilepaidandunpaid(scope.FromProfileID, scope.tocustid, "").then(function(responsedata) {
                        scope.partnerinformation(responsedata.data);
                    });
                }
            });
            scope.bookmarkexpreessdata();
            customerDashboardServices.getphotoslideimages(scope.tocustid).then(function(response) {
                scope.slides = [];
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
        };
        scope.Searchfunctionality = function(type, object) {
            switch (type) {
                case "DontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(object).then(function(response) {
                        if (response.data == 1) {
                            scope.divmodalbodytoClose = "This profile was Skipped successfully";
                            alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                        } else if (response.data == 2 || response.data == 3) {
                            scope.divmodalbodytoClose = "Please upgrade your membership";
                            alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                        }
                    });
                    break;
            }
        };
        scope.Reject_paeload = function() {
            // scope.pagerefersh(scope.tocustid, scope.fromcustid);
            scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            scope.PageDiv = false;
            timeout(function() {
                var MobjViewprofile = {
                    ExpressInrestID: scope.hdnexpressinterstfiled,
                    CustID: scope.fromcustid,
                    AcceptStatus: 2,
                    MatchFollwupStatus: 2
                };
                scope.Searchfunctionality("DontProceed", MobjViewprofile);
            }, 500);
        };
        scope.statusalert = function(status) {

            switch (status) {
                case 0:
                case 3:
                    scope.divmodalbodytoClose = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 4:
                    scope.divmodalbodytoClose = "Please upgrade your membership";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    scope.unpaidflag = true;
                    break;
                case 5:
                    scope.divmodalbodytoClose = "Please upgrade your membership(No points)";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    scope.unpaidflagrenewal = true;
                    break;
                case 6:
                    scope.divmodalbodytoClose = "You have already Skipped this profile";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                    break;
                case 7:
                    scope.modalbodyID1 = "You cannot Skip Accepted Profile";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    //scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    scope.flagopen = 1;
                    break;
                case 8:
                    scope.Reject_paeload();
                    break;
                case 9:
                case 16:
                    scope.interestedflag = status === 9 ? true : false;
                    //scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    break;
                case 10:
                    scope.AccRejFlag = "MailReject";
                    scope.modalbodydivContent = "You have already Rejected this profile. Do you want to continue to view the profile?";
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    // scope.pagerefersh(scope.tocustid, scope.fromcustid);
                    scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    scope.flagopen = 1;
                    break;
                case 11:
                    scope.divmodalbodytoClose = "This ProfileID not in active";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 12:
                    scope.divmodalbodytoClose = "This ProfileID not in active";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 13:
                    scope.PopupDivToclosedialog = true;
                    scope.divmodalbodytoClose = "Please verify your primary email id (" + scope.PrimaryEmail + ") Inorder to view the complete profile sent ...check for verification email sent to your mail box";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 14:
                    scope.divmodalbodytoClose = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');
                    break;
                case 15:
                    scope.modalbodyID1 = "Unfortunately,we are not able to get data,sorry for the inconvenience";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    break;
            }
        };

        scope.pageload = function() {
            customerviewfullprofileservices.getViewFullProfileMail(scope.MyProfileQSAccept).then(function(response) {
                scope.fromcustid = response.data.FromCustID;
                scope.tocustid = response.data.ToCustID;
                scope.ToProfileID = response.data.ToProfileID;
                scope.FromProfileID = response.data.FromProfileID;
                scope.PrimaryEmail = response.data.PrimaryEmail;
                scope.AccRejFlag = response.data.AccRejFlag;
                scope.FromProfileName = response.data.FromProfileName;
                scope.FromProfileLastName = response.data.FromProfileLastName;
                scope.Fromgender = response.data.Fromgender;
                scope.IsConfidential = response.data.IsConfidential;
                scope.HighConfendential = response.data.HighConfendential;
                scope.statusalert(response.data.status);
            });
        };
        scope.acceptlinkexp = function(type, custid) {
            var locallogid = sessionStorage.getItem("locallogid");
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, locallogid, type, null).then(function(response) {

                if (response.data === 1) {
                    scope.$broadcast("showAlertPopupccc", 'alert-success', "Proceed successfully", 2500);
                } else {
                    scope.$broadcast("showAlertPopupccc", 'alert-danger', "sorry Proceed Fail", 2500);
                }
                alerts.dynamicpopupclose();
            });
        };

        scope.photoalbum = function() {
            scope.headerpopup = "Slide show";
            scope.popupmodalbody = false;
            alerts.dynamicpopup("photopopup.html", scope, uibModal);
        };
        scope.modalpopupclose1 = function() {
            if (scope.btnproceedflag === 1) {
                alerts.dynamicpopupclose();
                scope.flagopen = 1;
                scope.pagerefersh(scope.ToProfileID, scope.fromcustid);

            } else {
                alerts.dynamicpopupclose();
            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.modalpopupclosetab = function() {
            // if (scope.divmodalbodytoClose === "Please upgrade your membership" || scope.divmodalbodytoClose === "Please upgrade your membership(No points)") {
            //     alerts.dynamicpopupclose();
            //     // scope.pagerefersh(scope.tocustid, scope.fromcustid);
            //     scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            // } else {
            //     window.close();
            // }
            if (scope.divmodalbodytoClose === "Please upgrade your membership" || scope.divmodalbodytoClose === "Please upgrade your membership(No points)") {
                alerts.dynamicpopupclose();
                window.close();
                // scope.pagerefersh(scope.tocustid, scope.fromcustid);
                //scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
            } else {
                window.close();
            }
        };
        scope.viewhoroscopeimage = function() {
            scope.headerpopup = "Horoscope";
            scope.popupmodalbody = true;
            if ((scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1) {
                scope.personalinfo[0].HoroscopeImage = "http://d16o2fcjgzj2wp.cloudfront.net/Images/HoroscopeImages/" + scope.tocustid + "_HaroscopeImage/" + scope.tocustid + "_HaroscopeImage.html";
                window.open(scope.personalinfo[0].HoroscopeImage, '_blank');
            } else {
                alerts.dynamicpopup("photopopup.html", scope, uibModal);
            }
        };
        scope.btnoksubmit = function() {
            alerts.dynamicpopupclose();
            switch (scope.AccRejFlag) {
                case "MailAccept":
                    alerts.dynamicpopupclose();
                    scope.Reject_paeload();
                    break;
                case "MailReject":
                    alerts.dynamicpopupclose();
                    //alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    //scope.pagerefersh(scope.ToProfileID, scope.FromProfileID);
                    scope.liticket = false;
                    scope.liproceed = true;
                    // btnDontProceed.Visible = false;
                    // btnProceed.Visible = true;
                    break;
            }
        };

        scope.Resendmail = function(fromcustID, toCustID, FormProfileid, Toprofileid) {
            var resendInputObj = {
                Notes: 'mail sent',
                EMPID: null,
                LFromCustID: toCustID,
                LToCustID: fromcustID,
                FromProfileID: Toprofileid,
                ToProfileID: FormProfileid,
                TicketStatusID: scope.TicketStatusID2 !== undefined && scope.TicketStatusID2 !== null && scope.TicketStatusID2 !== "" ? scope.TicketStatusID2 : "NotViewed",
                Subject: "Kaakateeya Email For Bothsideinterest"
            };
            customerviewfullprofileservices.ResendMail(resendInputObj).then(function(response) {
                scope.TicketStatusID2 = "";
                if (parseInt(response.data) === 1) {}
            });
        };
        scope.proceedemails = function(CallDiscussion, ticketStatusId, ticketid) {
            scope.mailInput = {
                Notes: CallDiscussion,
                EMPID: null,
                profileid: scope.FromProfileID,
                LTicketID: ticketid,
                HistoryUpdate: 2,
                FromCustID: scope.fromcustid,
                TocustID: scope.tocustid,
                TicketStatusID: ticketStatusId,
                FromProfileID: scope.FromProfileID,
                ToProfileID: scope.ToProfileID
            };
            customerviewfullprofileservices.sendMail(scope.mailInput).then(function(response) {
                if (parseInt(response.data) === 1) {}
            });
        };
        scope.btnProceed_Click = function(typeofbtn) {
            var genderid = scope.Fromgender === 1 ? 'Mr.' : 'Ms.';
            var oppositegender = scope.Fromgender === 1 ? 'Ms.' : 'Mr.';
            var oppositeshe = scope.Fromgender === 2 ? 'He' : 'She';
            var oppositeher = scope.Fromgender === 2 ? 'his' : 'her';
            var herhim = scope.Fromgender === 1 ? 'him' : 'her';
            scope.emailmanagers = "<br><br><div style='color:black;text-align: justify;'>For further assistance feel free to contact</div><br> <div style='color:black;text-align: justify;'>Your relationship manager " +
                scope.aboutmyself[0].RelationShipManager + ":" + scope.aboutmyself[0].ContactDetails + "</div> <br> <div style='color:black;text-align: justify;'>" + scope.personalinfo[0].NAME + " relationship manager " + scope.aboutmyself[0].FromReleationName + ":" + scope.aboutmyself[0].Fromrelationcontact +
                "</div><br><div style='color:black;text-align: justify;'> Team head Mr.sivaprasad 91-9841282222</div>";
            switch (typeofbtn) {
                case "btnProceed":
                    var MobjViewprofile = {
                        ExpressInrestID: scope.hdnexpressinterstfiled,
                        CustID: scope.fromcustid,
                        FromCustID: scope.fromcustid,
                        ToCustID: scope.tocustid,
                        AcceptStatus: 1,
                        MatchFollwupStatus: 1
                    };
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(MobjViewprofile).then(function(response) {
                        switch (response.data) {
                            case 1:
                                if (scope.lblpaid === "UnPaid" || scope.lblpaid === "Renual") {
                                    scope.modalbodyID1 = scope.lblpaid === "UnPaid" ?
                                        "Be our paid member to view this complete profile and for our assistance in proceeding with this match" +
                                        " For further assistance feel free to contact your relationship manager " + scope.aboutmyself[0].RelationShipManager + ":" + scope.aboutmyself[0].ContactDetails : "Your memebership points got exhausted so please do the payment to upgrade points." +
                                        " For further assistance feel free to contact your relationship manager " + scope.aboutmyself[0].RelationShipManager + ":" + scope.aboutmyself[0].ContactDetails;
                                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    scope.btnproceedflag = 1;
                                } else {
                                    // scope.modalbodyID1 = (scope.IsConfidential === 0) && (scope.HighConfendential === 0) ? genderid + " " + scope.FromProfileName +
                                    //     " We have forwarded your Basic profile to " + oppositegender + " " + scope.personalinfo[0].NAME + " and you will be receiving " + oppositeher + " reply as soon as " + oppositeshe + " replies to it.And " +
                                    //     oppositeher + " complete profile will be emailed to you once we get  " + oppositeher + " positive concern." : "Proceed updated Successfully";

                                    scope.modalbodyID1 = "Request Sent";
                                    scope.divacceptreject = true;
                                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    scope.btnproceedflag = 1;
                                }
                                customerviewfullprofileservices.getfromstatusandtostatus(scope.FromProfileID, scope.ToProfileID, '').then(function(response) {
                                    if (response.data !== undefined && response.data !== null && response.data !== "" && response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" && response.data[0].length > 0) {
                                        if (response.data[0][0].FromCust_InterestStatus.trim() === 'I' && response.data[0][0].ToCust_InterestStatus.trim() === 'V') {
                                            scope.TicketStatusID = "Viewed";
                                            scope.txtAllcallDiscusion = genderid + scope.personalinfo[0].NAME + " (" + scope.ToProfileID + ") profile was sent to you on " + moment(response.data[0][0].servicedate).format('DD-MM-YYYY') +
                                                " We have noticed that " + oppositeshe + " had viewed your profile but yet to give " + oppositeher + " opinion. " +
                                                oppositeher + " relationship manager will contact  " + herhim + " and get back to you with " + oppositeher + " opinion at the earliest.";
                                            scope.Notes = scope.txtAllcallDiscusion + scope.emailmanagers;

                                            scope.proceedemails(scope.Notes, scope.TicketStatusID, response.data[0][0].FromTicketID);

                                        } else if (response.data[0][0].FromCust_InterestStatus.trim() === 'I' && response.data[0][0].ToCust_InterestStatus.trim() === 'NV') {
                                            scope.emailresendflag = 1;
                                            scope.TicketStatusID2 = "Resend";
                                            scope.TicketStatusID = "NotViewed";
                                            if ((scope.IsConfidential === 0) && (scope.HighConfendential === 0)) {
                                                scope.Resendmail(scope.fromcustid, scope.tocustid, scope.FromProfileID, scope.ToProfileID);
                                            }
                                            scope.txtAllcallDiscusion = genderid + scope.personalinfo[0].NAME + " (" + scope.ToProfileID + ") profile was sent to you on " + moment(response.data[0][0].servicedate).format('DD-MM-YYYY') +
                                                " We have noticed that " + oppositeshe + " is yet to view your profile and we have resent your profile to " + oppositeher + " now and " +
                                                "have also sent a mobile message and we will also try to reach  " + oppositeher + " over phone to inform the same";
                                            scope.Notes = scope.txtAllcallDiscusion + scope.emailmanagers;
                                            scope.proceedemails(scope.Notes, scope.TicketStatusID, response.data[0][0].FromTicketID);
                                        } else if (response.data[0][0].FromCust_InterestStatus.trim() === 'V' && response.data[0][0].ToCust_InterestStatus.trim() === 'I') {
                                            scope.TicketStatusID = "onsideinterest";
                                            scope.txtAllcallDiscusion = genderid + scope.personalinfo[0].NAME + " (" + scope.ToProfileID + ") profile was sent to you on " + moment(response.data[0][0].servicedate).format('DD-MM-YYYY') +
                                                " and " + oppositeshe + " is showing interest in your profile Please go through the profile and reply to us on the same.We are resending " + oppositeher + " profile for the ease of viewing " +
                                                "and please give your opinion in the options provided in the profile.";

                                            scope.Notes = scope.txtAllcallDiscusion + scope.emailmanagers;
                                            scope.proceedemails(scope.Notes, scope.TicketStatusID, response.data[0][0].FromTicketID);
                                        } else if (response.data[0][0].FromCust_InterestStatus.trim() === 'I' && response.data[0][0].ToCust_InterestStatus.trim() === 'I') {
                                            scope.txtAllcallflag = 1;
                                            scope.TicketStatusID = "bothSideinterest";
                                            scope.txtAllcallDiscusionemail = "<div style='margin-left:30px;color:black;text-align: justify;'>" + genderid + scope.personalinfo[0].NAME + " is also interested in your profile, Since both of you are interested you need one of our customer relationship manager assistance.</div><br>" +
                                                "<div style='color:black;text-align: justify;'>For further assistance feel free to contact</div><br> <div style=color:black;text-align: justify;'>Your relationship manager " +
                                                scope.aboutmyself[0].RelationShipManager + ":" + scope.aboutmyself[0].ContactDetails + "</div> <br> <div style='color:black;text-align: justify;'>" + scope.personalinfo[0].NAME + " relationship manager " + scope.aboutmyself[0].FromReleationName + ":" + scope.aboutmyself[0].Fromrelationcontact +
                                                "</div><br><div style='color:black;text-align: justify;'> Team head Mr.sivaprasad 91-9841282222</div>";
                                            scope.txtAllcallDiscusion = genderid + scope.personalinfo[0].NAME + " is also interested in your profile, Since both of you are interested you need one of our customer relationship manager assistance.";
                                            scope.Notes = scope.txtAllcallDiscusion + scope.emailmanagers;
                                            scope.proceedemails(scope.Notes, scope.TicketStatusID, response.data[0][0].FromTicketID);
                                        } else {
                                            scope.TicketStatusID = "NotViewed";
                                            scope.txtAllcallDiscusion = genderid + scope.personalinfo[0].NAME + " (" + scope.ToProfileID + ") profile was sent to you on " + moment(response.data[0][0].servicedate).format('DD-MM-YYYY') + " and " + oppositeshe + " is showing interest in your profile.Please go through the profile and reply to us on the same." +
                                                "We are resending " + oppositeher + " profile for the ease of viewing and please give your opinion in the options provided in the profile";
                                            scope.Notes = scope.txtAllcallDiscusion + scope.emailmanagers;
                                            scope.proceedemails(scope.Notes, scope.TicketStatusID, response.data[0][0].FromTicketID);

                                        }
                                    }
                                });
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade  membership";
                                alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                break;
                        }
                    });

                    break;
                case "btnDontProceed":
                    var MobjViewprofiledont = {
                        ExpressInrestID: scope.hdnexpressinterstfiled,
                        CustID: scope.fromcustid,
                        FromCustID: scope.fromcustid,
                        ToCustID: scope.tocustid,
                        AcceptStatus: 2,
                        MatchFollwupStatus: 2
                    };
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(MobjViewprofiledont).then(function(response) {
                        switch (response.data) {
                            case 1:
                                scope.flagopen = 1;
                                // scope.modalbodyID1 = (scope.IsConfidential === 0) && (scope.HighConfendential === 0) ? "Oops go through your search" : "Proceed Updated failed";
                                scope.modalbodyID1 = "Request Sent";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade  membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                break;
                        }
                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                        scope.divacceptreject = true;
                        scope.pagerefersh(scope.ToProfileID, scope.fromcustid);
                    });
                    break;
            }
            //scope.pagerefersh(scope.tocustid, scope.fromcustid);
            // alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
        };
        scope.acceptreject = function(typeofaction) {
            if (scope.tocustid !== null && scope.tocustid !== null) {
                var MobjViewprofile = {
                    FromCustID: scope.fromcustid,
                    ToCustID: scope.tocustid
                };
                switch (typeofaction) {
                    case "btnaccept":
                        authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                            if (responsepaid === true) {} else {
                                alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                            }
                        });
                        break;
                    case "btnreject":
                        if (scope.lblpaid == "UnPaid") {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade');
                        } else {
                            var MobjViewprofilerej = {
                                ExpressInrestID: scope.hdnexpressinterstfiled,
                                CustID: scope.fromcustid,
                                AcceptStatus: 2,
                                MatchFollwupStatus: 2
                            };
                            scope.Searchfunctionality("DontProceed", MobjViewprofilerej);
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Your action send sucessfully', 3000);
                        }
                        break;
                }
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', 'ExpressInterest failed please contact Admin', 3000);
            }
        };
        scope.bindeduction = function(value) {
            if (value === 'Education') {
                value = '';
            } else {
                value = value;
            }
            return value;
        };
    }
]);