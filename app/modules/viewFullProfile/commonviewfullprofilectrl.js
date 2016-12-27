app.controller("commonviewfullprofile", ['customerDashboardServices', '$scope', 'alert',
    'authSvc', '$injector', '$uibModal', 'successstoriesdata', '$timeout', '$mdDialog', '$stateParams',
    '$location', 'customerviewfullprofileservices',
    function(customerDashboardServices, scope, alerts, authSvc, $injector, uibModal, successstoriesdata, timeout,
        $mdDialog, $stateParams, $location, customerviewfullprofileservices) {
        scope.headerpopup = "Slide show";
        scope.popupmodalbody = false;
        var searchObjectquery = $location.search();
        scope.MyProfileQSAccept = "?" + searchObjectquery.MyProfileQSAccept;
        console.log(scope.MyProfileQSAccept);
        scope.partnerinformation = function(response) {
            scope.arr = [];
            scope.personalinfo = {};
            scope.aboutmyself = {};
            _.each(response.data, function(item) {
                var testArr = JSON.parse(item);
                if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "About") {
                    scope.aboutmyself = testArr;
                } else if (testArr.length > 0 && testArr[0].TableName !== undefined && testArr[0].TableName === "Primary") {
                    scope.personalinfo = testArr;
                    scope.divclassmask = function(logphotostatus) {
                        var photo = scope.slides[0].ApplicationPhotoPath;
                        var photocount = scope.personalinfo[0].PhotoName_Cust;
                    };

                } else {
                    if (testArr.length > 0 && testArr[0].TableName !== undefined) {
                        scope.arr.push({ header: testArr[0].TableName, value: testArr });
                    }
                }
            });
        };
        scope.pageload = function() {

            customerviewfullprofileservices.getExpressIntrstfullprofile(210910352, "").then(function(response) {
                console.log(response);
                scope.partnerinformation(response.data);
            });
            // customerviewfullprofileservices.getViewFullProfileMail("?MyProfileQSAccept=7YrKbCteX/RfSC2jOgj8GfaMliVJjDiPnJu7cnUEbqe52KZug7tSQ43a4f6MUNR/KEnUaTqYxx2g0iamxuz8xZVwyLCiLSu5ZYao8D/h1FeyRs15TeVOVD6opnnmw22VnBSTmP/YNFIOY1n9n+6SpQ==").then(function(response) {
            //     console.log(response);
            //     debugger;
            //     scope.fromcustid = response.data.FromCustID;
            //     scope.tocustid = response.data.ToCustID;
            //     scope.ToProfileID = response.data.ToProfileID;
            //     scope.FromProfileID = response.data.FromProfileID;
            //     customerviewfullprofileservices.getExpressinterst_bookmark_ignore_data(scope.fromcustid, scope.tocustid).then(function(response) {
            //         // _.each(response.data, function(item) {
            //         //     var testArr = JSON.parse(item);
            //         //     if (testArr[0] !== undefined) {
            //         //         switch (testArr[0].TableName) {
            //         //             case "Bookmark":
            //         //                 scope.Bookmark = testArr;

            //         //                 break;
            //         //             case "Viewed":
            //         //                 scope.Viewed = testArr;

            //         //                 break;
            //         //             case "Express":
            //         //                 scope.Express = testArr;

            //         //                 break;
            //         //             case "Paidstatus":
            //         //                 scope.Paidstatus = testArr;

            //         //                 break;
            //         //             case "Ignore":
            //         //                 scope.Ignore = testArr;

            //         //                 break;
            //         //         }
            //         //     }
            //         // });
            //         console.log(response);
            //     });

            //     customerDashboardServices.getphotoslideimages(scope.tocustid).then(function(response) {
            //         scope.slides = [];
            //         _.each(response.data, function(item) {
            //             scope.slides.push(item);
            //         });
            //     });

            // });

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

        scope.disableEnableButtons = function(obj) {
            // switch (dsland.Tables[count].Rows[0]["TableName"].ToString()) {

            //     case "Express":

            //         //popup alerts
            //         if (dsland.Tables[count].Rows[0]["SeenStatus"].ToString() == "Accept" && hdnAccRejFlag.Value != "MailReject") {

            //             modalbodyID1.InnerText = "You have proceeded this profile";
            //             Masterdropdownbind.ShowModalPopup(CommonClass.pageload, strTabClosePopup);
            //         } else if (dsland.Tables[count].Rows[0]["SeenStatus"].ToString() == "Reject" && hdnAccRejFlag.Value != "MailAccept") {
            //             modalbodyID1.InnerText = "You have Skipped this profile";
            //             Masterdropdownbind.ShowModalPopup(CommonClass.Show, strTabClosePopup);
            //         }
            //         //end popup alerts


            //         if (dsland.Tables[count].Columns.Contains("MatchFollowUpStatus")) {
            //             if (dsland.Tables[count].Rows[0]["MatchFollowUpStatus"].ToString().Trim() == "1") {
            //                 if (dsland.Tables[count].Rows[0]["SeenStatus"].ToString().Trim() == "Accept" || dsland.Tables[count].Rows[0]["SeenStatus"].ToString().Trim() == "Reject") {
            //                     divacceptreject.Visible = true;
            //                     btnticket.Text = dsland.Tables[count].Rows[0]["ViewTicket"].ToString();
            //                     Masterdropdownbind.showhidediv(liproceed, false);
            //                     Masterdropdownbind.showhidediv(liticket, true);
            //                 } else {
            //                     divacceptreject.Visible = true;
            //                     Masterdropdownbind.showhidediv(liproceed, true);
            //                 }
            //             } else if (dsland.Tables[count].Columns.Contains("Acceptflag")) {
            //                 if (dsland.Tables[count].Rows[0]["Acceptflag"].ToString().Trim() == "1") {
            //                     divacceptreject.Visible = true;
            //                     Masterdropdownbind.showhidediv(liproceed, true);
            //                 } else if (dsland.Tables[count].Rows[0]["ExpressFlag"].ToString().Trim() == "1") {
            //                     divacceptreject.Visible = true;
            //                     Masterdropdownbind.showhidediv(liaccept, true);

            //                 } else {
            //                     divacceptreject.Visible = false;
            //                     Masterdropdownbind.showhidediv(liaccept, false);

            //                 }
            //             }


            //         }
            //         if (dsland.Tables[count].Columns.Contains("ExpressInterstId")) {
            //             if (dsland.Tables[count].Rows[0]["ExpressInterstId"].ToString().Trim() != "") {
            //                 hdnexpressinterstfiled.Text = dsland.Tables[count].Rows[0]["ExpressInterstId"].ToString();
            //             }
            //         }

            //         break;
            //     case "Viewed":
            //         break;
            //     case "Paidstatus":
            //         lblpaid.Text = dsland.Tables[count].Rows[0]["Paidstatus"].ToString().Trim();
            //         break;
            // }
        };

    }
]);