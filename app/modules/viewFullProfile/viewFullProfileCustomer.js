app.controller("viewFullProfileCustomer", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var localcustid = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        scope.localcustidhide = sessionStorage.getItem("localcustid") !== undefined && sessionStorage.getItem("localcustid") !== "" ? sessionStorage.getItem("localcustid") : null;
        var locallogid = sessionStorage.getItem("locallogid");
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
        scope.pageload = function() {
            customerDashboardServices.Viewprofile(scope.custid, localcustid).then(function(response) {
                console.log(JSON.stringify(response));
                scope.arr = [];
                scope.personalinfo = {};
                scope.aboutmyself = {};
                _.each(response.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0].TableName!==undefined && testArr[0].TableName === "About") {
                        scope.aboutmyself = testArr;
                    } else if (testArr[0].TableName!==undefined && testArr[0].TableName === "Primary") {
                        scope.personalinfo = testArr;
                        scope.divclassmask = function(logphotostatus) {
                            var photo = scope.slides[0].ApplicationPhotoPath;
                            var photocount = scope.personalinfo[0].PhotoName_Cust;
                            logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
                            if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                                return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid);
                            } else {
                                return "";
                            }
                        };

                    } else {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                });

            });
            customerDashboardServices.Viewprofileflags(scope.custid, localcustid).then(function(response) {
                console.log(response);
                _.each(response.data, function(item) {
                    var testArr = JSON.parse(item);
                    if (testArr[0] !== undefined) {
                        switch (testArr[0].TableName) {
                            case "Bookmark":
                                scope.Bookmark = testArr;
                                console.log(scope.Bookmark);
                                break;
                            case "Viewed":
                                scope.Viewed = testArr;
                                console.log(scope.Viewed);
                                break;
                            case "Express":
                                scope.Express = testArr;
                                console.log(scope.Express);
                                break;
                            case "Paidstatus":
                                scope.Paidstatus = testArr;
                                console.log(scope.Paidstatus);
                                break;
                            case "Ignore":
                                scope.Ignore = testArr;
                                console.log(scope.Ignore);
                                break;
                        }
                    }
                });
            });

            customerDashboardServices.getphotoslideimages(localcustid).then(function(response) {
                scope.slides = [];
                console.log(response);
                _.each(response.data, function(item) {
                    scope.slides.push(item);
                });
            });
        };

        scope.servicehttp = function(type, object) {
            return $injector.invoke(function($http) {
                return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                    .then(function(response) {
                        console.log(response);
                        switch (type) {
                            case "B":
                                if (response.data == 1) {
                                scope.$broadcast("showAlertPopupccc", 'alert-success', 'bookmarked suceessfully', 2500);

                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'bookmarked failed', 2500);
                                }
                                break;
                            case "E":
                                if (response.data == 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'EXpressInterest done SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'EXpressInterest Fail', 2500);
                                }
                                break;
                            case "I":
                                if (response.data == 1) {
                                    scope.$broadcast("showAlertPopupccc", 'alert-success', 'Ignore SuccessFully', 2500);
                                } else {
                                    scope.$broadcast("showAlertPopupccc", 'alert-danger', 'Ignore profile Fail', 2500);
                                }
                                break;
                            case "M":
                                if (response.data == 1) {
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
            scope.servicehttp(type, object);
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
                console.log(response);
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
    }
]);