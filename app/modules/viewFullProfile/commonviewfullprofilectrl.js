app.controller("commonviewfullprofile", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams',
    '$location', 'customerviewfullprofileservices',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, customerviewfullprofileservices) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        var searchObjectquery = $location.search();
        scope.MyProfileQSAccept = "?" + searchObjectquery;
        console.log(JSON.stringify(searchObjectquery));
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
                    var horoscopeimage = scope.personalinfo[0].HoroscopeImage === "" ||
                        scope.personalinfo[0].HoroscopeImage === null ||
                        scope.personalinfo[0].HoroscopeImage === "Not given" ? false : true;

                    var horoimagesrc = (scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1 ? '../images/view_horoscope_image.jpg' : scope.personalinfo[0].HoroscopeImage;

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.pageload = function() {


            customerviewfullprofileservices.getViewFullProfileMail("?MyProfileQSAccept=7YrKbCteX/RfSC2jOgj8Gcizbtqmd119aeqlYhed2ZpYc1Lf5r741EXVskSmBKGqJeQ4BeHAJvEGTxNV5kCFcurc1q92RIA/FelclmQRYaqDYzAX0ZsOSf3VwqjjMNE5kUGQDHx1ZVYLGSrmzvpsVw==").then(function(response) {
                console.log(response);
                scope.fromcustid = response.data.FromCustID;
                scope.tocustid = response.data.ToCustID;
                scope.ToProfileID = response.data.ToProfileID;
                scope.FromProfileID = response.data.FromProfileID;

                customerviewfullprofileservices.getExpressIntrstfullprofile(scope.ToProfileID, "").then(function(responsedata) {
                    scope.partnerinformation(responsedata.data);
                });

                customerviewfullprofileservices.getExpressinterst_bookmark_ignore_data(scope.fromcustid, scope.tocustid).then(function(responsebook) {

                    console.log('disablefileds');
                    console.log(responsebook);
                    _.each(responsebook.data, function(item) {
                        // var testArr = JSON.parse(item);
                        var testArr = [];
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
                                        alerts.dynamicpopup("TabClosePopup.html.html", scope, uibModal);
                                    } else if (testArr[0].SeenStatus === "Reject" && scope.hdnAccRejFlag !== "MailAccept") {
                                        scope.modalbodyID1 = "You have Skipped this profile";
                                        alerts.dynamicpopup("TabClosePopup.html.html", scope, uibModal);
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
                                    scope.Paidstatus = testArr;
                                    scope.lblpaid = testArr[0].Paidstatus;
                                    break;
                                case "Ignore":
                                    scope.Ignore = testArr;

                                    break;
                            }
                        }
                    });
                    console.log(response);
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

        scope.servicehttp = function(type, object) {
            return $injector.invoke(function($http) {
                return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                    .then(function(response) {

                        switch (type) {
                            case "B":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'bookmarked suceessfully', 2500);

                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'bookmarked failed', 2500);
                                }
                                break;
                            case "E":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'EXpressInterest done SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'EXpressInterest Fail', 2500);
                                }
                                break;
                            case "I":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'Ignore SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Ignore profile Fail', 2500);
                                }
                                break;
                            case "M":
                                if (response.data === 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', "Message sent SuccessFully", 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', "Message sending Fail", 2500);
                                }
                                break;
                        }
                    });
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
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = tocustid;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);

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
        scope.viewhoroscopeimage = function() {
            scope.headerpopup = "Horoscope";
            scope.popupmodalbody = true;
            if ((scope.personalinfo[0].HoroscopeImage).indexOf(".html") !== -1) {
                scope.personalinfo[0].HoroscopeImage = "http://d16o2fcjgzj2wp.cloudfront.net/Images/HoroscopeImages/" + logincustid + "_HaroscopeImage/" + logincustid + "_HaroscopeImage.html";
                window.open(scope.personalinfo[0].HoroscopeImage, '_blank');
            } else {
                alerts.dynamicpopup("photopopup.html", scope, uibModal);
            }
        };



    }
]);