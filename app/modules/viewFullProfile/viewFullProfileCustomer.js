app.controller("viewFullProfileCustomer", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog',
    '$stateParams', '$location', 'helperservice', '$http',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, helperservice, $http) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var localcustid = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        scope.localcustidhide = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        var locallogid = sessionStorage.getItem("locallogid");
        scope.custid = helperservice.checkstringvalue(logincustid) ? logincustid : null;
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.lnkViewHoro = true;
        scope.BookmarkFlag = true;
        scope.ViewedFlag = true;
        scope.msgflag = true;
        scope.IgnoreFlaghide = true;
        scope.liproceed = false;
        scope.liticket = false;
        scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
        //scope.logidliproceed = scope.custid === scope.localcustidhide ? false : true;
        scope.Bookmark = [];
        scope.Viewed = [];
        scope.Express = [];
        scope.Paidstatus = [];
        scope.Ignore = [];
        scope.arr = [];
        scope.personalinfo = {};
        scope.aboutmyself = {};
        scope.modalheader = 1;
        scope.partnerinformation = function(response) {
            _.each(response.data, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                    scope.personalinfo = testArr;
                    scope.divclassmask = function(logphotostatus) {
                        var photo = scope.personalinfo[0].ApplicationPhotoPath;
                        var photocount = scope.personalinfo[0].PhotoName_Cust;
                        logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
                        if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                            return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid);
                        } else {
                            return "";
                        }
                    };

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.slideshowimages = function() {
            customerDashboardServices.getphotoslideimages(localcustid).then(function(response) {
                scope.slides = [];
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
        };
        scope.getallflags = function() {
            customerDashboardServices.Viewprofileflags(scope.custid, localcustid).then(function(response) {
                _.each(response.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0] !== undefined) {
                        switch (testArr[0].TableName) {
                            case "Bookmark":
                                scope.Bookmark = testArr;
                                scope.BookmarkFlag = scope.Bookmark[0].BookmarkFlag === 1 ? false : true;
                                break;
                            case "Viewed":
                                scope.Viewed = testArr;
                                scope.BookmarkFlag = scope.BookmarkFlag === true ? true : false;
                                scope.IgnoreFlaghide = scope.IgnoreFlaghide === true ? true : false;
                                scope.ViewedFlag = true;
                                scope.msgflag = true;
                                scope.liproceed = false;
                                scope.logidliproceed = false;
                                scope.lnkViewHoro = true;
                                break;
                            case "Express":
                                scope.Express = testArr;
                                if (scope.Express[0].MatchFollowUpStatus === 1) {
                                    if (scope.Express[0].SeenStatus === "Accept" || scope.Express[0].SeenStatus === "Reject") {
                                        scope.liticket = true;
                                        scope.lnkViewHoro = true;
                                        scope.logidliproceed = false;
                                        scope.BookmarkFlag = false;
                                        scope.IgnoreFlaghide = false;
                                        scope.ViewedFlag = false;
                                        scope.msgflag = false;
                                        scope.ViewTickettext = scope.Express[0].ViewTicket !== null && scope.Express[0].ViewTicket !== undefined ? scope.Express[0].ViewTicket : "View Ticket Status";
                                    } else {
                                        scope.logidliproceed = true;
                                    }
                                } else if (scope.Express[0].Acceptflag === 1) {
                                    if (scope.custid !== null) {
                                        scope.liproceed = false;
                                        scope.logidliproceed = true;
                                    } else {
                                        scope.liproceed = true;
                                        scope.logidliproceed = false;
                                    }
                                    scope.BookmarkFlag = false;
                                    scope.IgnoreFlaghide = false;
                                    scope.ViewedFlag = false;
                                    scope.msgflag = false;
                                } else if (scope.Express[0].ExpressFlag === 1) {
                                    if (scope.custid !== null) {
                                        scope.logidliproceed = true;
                                    } else {
                                        scope.logidliproceed = false;
                                    }
                                    scope.BookmarkFlag = false;
                                    scope.IgnoreFlaghide = false;
                                    scope.ViewedFlag = false;
                                    scope.msgflag = false;
                                } else {
                                    scope.logidliproceed = true;
                                }
                                break;
                            case "Paidstatus":
                                scope.Paidstatus = testArr;
                                break;
                            case "Ignore":
                                scope.Ignore = testArr;
                                scope.IgnoreFlaghide = scope.Ignore[0].IgnoreFlag === 1 ? false : true;
                                break;
                        }
                    }
                });
            });
            return false;
        };
        scope.showmyname = true;

        scope.pageload = function() {
            if (scope.custid === localcustid) {
                scope.showmyname = true;
                scope.logidliproceed = false;
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 0).then(function(response) {
                    // scope.slideshowimages();
                    scope.partnerinformation(response);
                });
            } else {
                scope.showmyname = false;
                customerDashboardServices.Viewprofile(scope.custid, localcustid, 283).then(function(response) {
                    // scope.slideshowimages();
                    scope.partnerinformation(response);
                    scope.getallflags();
                });

            }
        };

        scope.servicehttp = function(type, object) {
            return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                .then(function(response) {
                    switch (type) {
                        case "B":
                            if (response.data === 1) {
                                // scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'bookmarked suceessfully', 2500);

                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'bookmarked failed', 2500);
                            }
                            break;
                        case "E":
                            if (response.data === 1) {
                                //scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'EXpressInterest done SuccessFully', 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'EXpressInterest Fail', 2500);
                            }
                            break;
                        case "I":
                            if (response.data === 1) {
                                //scope.getallflags();
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'Ignore SuccessFully', 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Ignore profile Fail', 2500);
                            }
                            break;
                        case "M":
                        case "TH":
                            if (response.data === 1) {
                                scope.$broadcast("showAlertPopupccc", 'alert-success', "Message sent SuccessFully", 2500);
                            } else {
                                scope.$broadcast("showAlertPopupccc", 'alert-danger', "Message sending Fail", 2500);
                            }
                            break;
                    }
                });
        };
        scope.serviceactions = function(type, tocustid, typeofactionflag, profileid, form, logid, MessageHistoryId) {
            var logincustid = authSvc.getCustId();
            var loginprofileid = authSvc.getProfileid();
            var object = {
                IFromCustID: logincustid,
                IToCustID: tocustid,
                TypeofInsert: type,
                EncriptedText: null,
                EncryptedRejectFlagText: null,
                EncriptedTextrvr: null,
                EncryptedRejectFlagTextrvr: null,
                StrHtmlText: form !== undefined ? form.message : null,
                MessageLinkId: typeofactionflag !== undefined ? typeofactionflag : null,
                MessageHistoryId: MessageHistoryId !== undefined ? MessageHistoryId : null,
                Logid: logid !== undefined ? logid : null,
                FromProfileID: loginprofileid,
                ToProfileID: profileid !== undefined ? profileid : null
            };
            switch (type) {
                case "E":
                    authSvc.paymentstaus(logincustid, scope).then(function(responsepaid) {
                        if (responsepaid === true)
                            scope.servicehttp(type, object);
                    });
                    break;
                default:
                    scope.servicehttp(type, object);
                    break;
            }
        };
        scope.sendmessages = function(form) {
            scope.serviceactions("M", scope.messagecustid, undefined, undefined, form, undefined, undefined);
            alerts.dynamicpopupclose();
        };
        scope.sendmessegescommon = function(type, tocustid) {
            scope.modalheader = 1;
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
        scope.sendmessegestoRMTicket = function(tocustid) {
            scope.modalheader = 2;
            scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
        scope.sendmessagestoRM = function(form) {
            var locallogid = sessionStorage.getItem("locallogid");
            scope.serviceactions('TH', scope.messagecustid, undefined, undefined, form, locallogid, undefined);
            alerts.dynamicpopupclose();
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

            scope.slideshowimages();
            scope.headerpopup = "Slide show";
            scope.popupmodalbody = false;
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                alerts.dynamicpopup("photopopup.html", scope, uibModal);
            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.viewhoroscopeimage = function() {
            scope.headerpopup = "Horoscope";
            scope.popupmodalbody = true;
            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                if ((scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1) {
                    scope.personalinfo[0].HoroscopeImage = "http://d16o2fcjgzj2wp.cloudfront.net/Images/HoroscopeImages/" + logincustid + "_HaroscopeImage/" + logincustid + "_HaroscopeImage.html";
                    window.open(scope.personalinfo[0].HoroscopeImage, '_blank');
                } else {
                    alerts.dynamicpopup("photopopup.html", scope, uibModal);
                }
            }
        };
        scope.proceeddont = function(typeofbtn, obj) {
            switch (typeofbtn) {
                case "Proceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(obj).then(function(response) {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Your action send sucessfully', 3000);
                        scope.pageload();
                    });
                    break;
                case "btnDontProceed":
                    customerviewfullprofileservices.UpdateExpressIntrestViewfullprofile(obj).then(function(response) {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Your action send sucessfully', 3000);
                        scope.pageload();
                    });
                    break;
            }
            scope.divacceptreject = true;
            alerts.dynamicpopup("TabClosePopup.html", scope, uibModal);
            scope.pagerefersh(scope.ToProfileID);
        };
        scope.procceddontproceedwilltell = function(type) {
            switch (type) {
                case "Proceed":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        if (responsepaid === true) {
                            var MobjViewprofile = {
                                ExpressInrestID: scope.Express[0].ExpressInterstId,
                                CustID: scope.custid,
                                FromCustID: scope.custid,
                                ToCustID: localcustid,
                                AcceptStatus: 1,
                                MatchFollwupStatus: 1
                            };
                            scope.proceeddont("Proceed", MobjViewprofile);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
                case "dont":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        if (responsepaid === true) {
                            var MobjViewprofile = {
                                ExpressInrestID: scope.Express[0].ExpressInterstId,
                                CustID: scope.custid,
                                FromCustID: scope.custid,
                                ToCustID: localcustid,
                                AcceptStatus: 2,
                                MatchFollwupStatus: 2
                            };
                            scope.proceeddont("DontProceed", MobjViewprofile);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
                case "tell":
                    authSvc.paymentstaus(scope.fromcustid, scope).then(function(responsepaid) {
                        if (responsepaid === true) {
                            alerts.timeoutoldalerts(scope, 'alert-sucess', 'Your action send sucessfully', 3000);
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'Please Upgrade Your Membership in order To continue', 3000);
                        }
                    });
                    break;
            }
        };
    }
]);