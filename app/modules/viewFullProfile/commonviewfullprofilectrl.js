app.controller("commonviewfullprofile", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams',
    '$location', 'customerviewfullprofileservices', '$window', '$state',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, customerviewfullprofileservices, $window, $state) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.PageDiv = true;
        scope.searchObjectquery = $location.search();
        var meKey = Object.getOwnPropertyNames(scope.searchObjectquery)[0];
        var meValue = scope.searchObjectquery[meKey];
        console.log(JSON.stringify(meKey));
        scope.MyProfileQSAccept = "?" + meKey + "=" + meValue;
        console.log(scope.MyProfileQSAccept);
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
                    var photocount = scope.personalinfo[0].PhotoName_Cust;
                    scope.horoscopeimage = scope.personalinfo[0].HoroscopeImage === "" ||
                        scope.personalinfo[0].HoroscopeImage === null ||
                        scope.personalinfo[0].HoroscopeImage === "Not given" ? false : true;

                    scope.horoimagesrc = (scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? 'src/images/view_horoscope_image.jpg' : scope.personalinfo[0].HoroscopeImage;

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.pagerefersh = function(ToProfileID) {
            customerviewfullprofileservices.getExpressIntrstfullprofile(ToProfileID, "").then(function(responsedata) {
                scope.partnerinformation(responsedata.data);
            });
        };
        scope.Searchfunctionality = function(type, object) {
            switch (type) {
                case "DontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(object).then(function(response) {
                        console.log("secrchfun");
                        console.log(response);
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
            scope.pagerefresh();
            scope.PageDiv = false;
            var MobjViewprofile = {
                ExpressInrestID: scope.hdnexpressinterstfiled,
                CustID: scope.fromcustid,
                AcceptStatus: 2,
                MatchFollwupStatus: 2
            };
            scope.Searchfunctionality("DontProceed", MobjViewprofile);
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
                    break;
                case 5:
                    scope.divmodalbodytoClose = "Please upgrade your membership(No points)";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal, 'sm');

                    break;
                case 6:
                    scope.divmodalbodytoClose = "You have already Skipped this profile";
                    alerts.dynamicpopup("PopupDivToclose.html", scope, uibModal);
                    break;
                case 7:
                    scope.modalbodyID1 = "You cannot Skip Accepted Profile";
                    alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                    scope.pagerefersh(scope.ToProfileID);
                    break;
                case 8:
                    scope.Reject_paeload();
                    break;
                case 9:
                    scope.pagerefersh(scope.ToProfileID);
                    break;

                case 10:
                    scope.modalbodydivContent = "You already " + " " + scope.AccRejFlag + " " + "this Profile ,do you want to continue with these action " + " accept";
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    scope.pagerefersh(scope.ToProfileID);
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
                console.log(response);
                scope.fromcustid = response.data.FromCustID;
                scope.tocustid = response.data.ToCustID;
                scope.ToProfileID = response.data.ToProfileID;
                scope.FromProfileID = response.data.FromProfileID;
                scope.PrimaryEmail = response.data.PrimaryEmail;
                scope.AccRejFlag = response.data.AccRejFlag;
                scope.statusalert(response.data.status);
                scope.pagerefersh(scope.ToProfileID);
                customerviewfullprofileservices.getExpressinterst_bookmark_ignore_data(scope.fromcustid, scope.tocustid).then(function(responsebook) {
                    console.log('disablefileds');
                    console.log(responsebook);
                    _.each(responsebook.data, function(item) {
                        var testArr = JSON.parse(item);
                        //var testArr = [];
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
                                        scope.modalbodyID1 = "You have proceeded this profile";
                                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    } else if (testArr[0].SeenStatus === "Reject" && scope.hdnAccRejFlag !== "MailAccept") {
                                        scope.modalbodyID1 = "You have Skipped this profile";
                                        alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
                                    }
                                    //
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
                customerDashboardServices.getphotoslideimages(scope.tocustid).then(function(response) {
                    console.log(response);
                    scope.slides = [];
                    _.each(response.data, function(item) {
                        scope.slides.push(item);
                    });
                });

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
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.modalpopupclosetab = function() {

            $window.close();
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
            switch (scope.AccRejFlag) {
                case "MailAccept":
                    scope.Reject_paeload();
                    break;
                case "MailReject":
                    alerts.dynamicpopup("PageloadAcceptRejectpopup.html", scope, uibModal);
                    scope.pagerefresh();
                    scope.liticket = false;
                    scope.liproceed = true;
                    btnDontProceed.Visible = false;
                    btnProceed.Visible = true;
                    break;
            }
        };
        scope.btnProceed_Click = function(typeofbtn) {

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
                        console.log(response);
                        switch (response.data) {
                            case 1:
                                scope.modalbodyID1 = "To Move the Match for MatchFollowup";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade online membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
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
                        console.log(response);
                        switch (response.data) {
                            case 1:
                                scope.modalbodyID1 = "Oops go through your search";
                                break;
                            case 2:
                            case 3:
                                scope.modalbodyID1 = "You need to Upgrade online membership";
                                break;
                            default:
                                scope.modalbodyID1 = "Updation failed please contact admin";
                                break;
                        }
                    });
                    break;
            }
            scope.divacceptreject = true;
            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
            scope.pagerefersh(scope.ToProfileID);

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
                            console.log(responsepaid);
                            if (responsepaid === true) {
                                //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "divAcceptReject", "$('#divAcceptReject').modal({ backdrop: 'static', keyboard: false});", true);
                            } else {
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
            //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "divAcceptReject", "$('#divAcceptReject').modal('hide');", true);
        };
    }
]);