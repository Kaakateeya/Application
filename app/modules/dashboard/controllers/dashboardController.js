app.controller('Controllerpartner', ['$uibModal', '$scope', 'customerDashboardServices', 'authSvc',
    'alert', '$window', '$location', 'successstoriesdata', '$rootScope', '$timeout', 'route',
    '$stateParams', 'commonFactory', 'helperservice',
    function(uibModal, scope, customerDashboardServices, authSvc, alerts,
        window, $location, successstoriesdata, $rootscope, $timeout, route,
        $stateParams, commonFactory, helperservice) {
        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        var loginpaidstatus = authSvc.getpaidstatus();
        var photostatuslogin = helperservice.checkstringvalue(authSvc.getprofilepic()) ? authSvc.getprofilepic() : "";
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.typeodbind = 'C';
        scope.typeofdiv = "Grid";
        scope.PartnerProfilesnew = [];
        scope.counts = 1;
        scope.bindallcounts = {};
        scope.lblUHaveviewd = 'Suitable Profiles that match you';
        scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
        scope.chatstatus = null;
        scope.form = {};
        scope.exactshow = (scope.typeodbind === 'C' || scope.typeodbind === 'P') && loginpaidstatus === "1" ? false : true;
        scope.normaldata = true;
        scope.notificationtxt = [];
        scope.notifytype = 'page';
        scope.notificationpopup = [];
        scope.Typeofdatabind = $stateParams.type;
        scope.oldnotificationpopup = [];
        scope.newnitify = false;
        scope.oldnitify = false;


        scope.catchfunction = function() {
            var obj = {
                ExpressAllcount: 0,
                ExpressIntReceived: 0,
                ExpressIntSent: 0,
                IgnoreProfileCount: 0,
                MenuName: null,
                MybookMarkedProfCount: 0,
                NewMsgs: 0,
                OnlyName: null,
                PageName: null,
                ReceivedHoroRequestCount: 0,
                ReceivedPhotoRequestCount: 0,
                ReceivedProtectedAccept: 0,
                ReceivedProtectedNew: 0,
                ReceivedProtectedReject: 0,
                RectViewedProfCount: 0,
                RectWhoViewedCout: 0,
                SaveSearchCount: 0,
                SentHoroRequestCount: 0,
                SentPhotoRequestCount: 0,
                SentProtectedAccept: 0,
                SentProtectedReject: 0,
                SentProtectedReply: 0,
                TotalMsgs: 0,
                WhobookmarkedCount: 0
            };
            scope.bindcounts(obj);
            scope.bindallcounts = obj;
        };
        scope.gettingpartnerdata = function(type, frompage, topage, headertext, bindvalue, exactflag) {
            scope.exactflagstorage = exactflag;
            if (bindvalue !== null && bindvalue !== 0 && bindvalue !== 'profile') {
                scope.flag = frompage === 1 ? 9 : scope.flag;
                scope.typeodbind = type;
                scope.exactshow = (scope.typeodbind === 'C' || scope.typeodbind === 'P') && loginpaidstatus === "1" ? false : true;
                if (type === 'C') {
                    customerDashboardServices.getCustomercounts(scope.custid, type, frompage, topage, exactflag).then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.bindcounts(response.data.DashBoardCounts);
                            scope.bindallcounts = response.data.DashBoardCounts;
                            scope.PersonalInfo = (response.data.PersonalInfo);
                            scope.photopersonal = helperservice.checkarraylength(scope.PersonalInfo) && helperservice.checkstringvalue(scope.PersonalInfo.Photo) ? scope.PersonalInfo.Photo : "";
                            scope.LoginPhotoIsActive = scope.PersonalInfo.IsActive;
                            sessionStorage.setItem("LoginPhotoIsActive", scope.PersonalInfo.IsActive);
                            scope.Gendercustomer = (scope.PersonalInfo.GenderID) === 2 ? 'Groom' : 'Bride';
                        }
                        if (parseInt(frompage) === 1) {

                            scope.PartnerProfilesnew = [];
                            scope.typeofdiv = "Grid";
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        } else {
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.$broadcast('loadmore');
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                            scope.lblUHaveviewd = headertext;
                        }
                    }).catch(function(response) {
                        scope.catchfunction();
                    });
                } else {
                    customerDashboardServices.getcustomerpartnerdata(scope.custid, type, frompage, topage, exactflag).then(function(response) {
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnew = [];
                            scope.typeofdiv = "Grid";
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });

                        } else {
                            _.each(response.data.PartnerProfilesnew, function(item) {
                                scope.PartnerProfilesnew.push(item);
                            });
                        }
                        scope.$broadcast('loadmore');
                        if (parseInt(frompage) === 1) {
                            scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                            scope.lblUHaveviewd = headertext;
                        }
                    }).catch(function(response) {
                        scope.catchfunction();

                    });
                }
            } else if (bindvalue == 'profile') {} else {
                scope.zerorecorsalert();
            }
        };
        scope.paging = function(frompage, topage, typeodbind) {
            scope.counts = 0;
            typeodbind = typeodbind == 'C' ? 'P' : typeodbind;
            scope.gettingpartnerdata(typeodbind, frompage, topage, scope.lblUHaveviewd, 1, scope.exactflagstorage);
        };
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.paging(frompage, topage, scope.typeodbind);
        });
        scope.bindcounts = function(array) {
            if ((array === undefined) || (array === null) || (array === "")) {
                array = {};
                array.MybookMarkedProfCount = 0;
                array.WhobookmarkedCount = 0;
                array.RectViewedProfCount = 0;
                array.RectWhoViewedCout = 0;
                array.IgnoreProfileCount = 0;
                array.SaveSearchCount = 0;
            }
            scope.leftMenuArr = [
                { value: 'Edit my profile', bindvalue: 'profile', statename: 'editview', object: {} },
                { value: 'Upgrade your membership', bindvalue: 'profile', statename: 'UpgradeMembership', object: {} },
                { value: 'manage photo', bindvalue: 'profile', statename: 'editview.editManagePhoto', object: {} },
                { value: 'My bookmarked profiles', bindvalue: array.MybookMarkedProfCount, clickvalues: 'MB', clickvaluesbind: 'Profiles you have bookmarked' },
                { value: 'Who bookmarked me', bindvalue: array.WhobookmarkedCount, clickvalues: 'WB', clickvaluesbind: 'Profiles Who BookMarked You' },
                { value: 'Profiles viewed by me', bindvalue: array.RectViewedProfCount, clickvalues: 'RV', clickvaluesbind: 'Profiles viewed by me' },
                { value: 'My profile viewed by others', bindvalue: array.RectWhoViewedCout, clickvalues: 'WV', clickvaluesbind: 'Members viewed my profile' },
                { value: 'Ignored profiles', bindvalue: array.IgnoreProfileCount, clickvalues: 'I', clickvaluesbind: 'Profiles ignored by you' },
                { value: 'Saved search', bindvalue: array.SaveSearchCount, statename: 'General', object: { id: 3 } },
                { value: 'Profile Settings', bindvalue: 'profile', statename: 'profilesettings', object: {} },
                { value: 'help', bindvalue: 'profile', statename: 'help', object: {} },
            ];
        };
        var TypeOfReportexpress = null;
        var yourFilterexpress = null;
        var oppfilterexpress = null;
        scope.flagexpress = 9;
        scope.expressinterestselect = function(count, TypeOfReport, yourFilter, oppfilter, frompage, topage, headertext, typeofinterest, eventclick) {
            scope.exactshow = true;
            if (count !== 0) {
                if (eventclick !== null) {
                    scope.click = eventclick;
                }
                if (headertext === "1" || headertext === "2" || headertext === "3") {
                    scope.flagexpress = 9;
                    if (headertext === "1") {
                        yourFilterexpress = scope.expressmyinterest.indexOf('I interested in') !== -1 ? 'I' : null;
                        oppfilterexpress = scope.expressmyinterest.indexOf('I interested in') == -1 ? 'I' : null;
                        TypeOfReportexpress = scope.expressmyinterest.indexOf('I interested in') !== -1 ? 'R' : 'S';
                    } else if (headertext === "2") {
                        yourFilterexpress = scope.expressmynotinterest.indexOf('I skipped') !== -1 ? 'NI' : null;
                        oppfilterexpress = scope.expressmynotinterest.indexOf('I skipped') == -1 ? 'NI' : null;
                        TypeOfReportexpress = scope.expressmynotinterest.indexOf('I skipped') !== -1 ? 'R' : 'S';
                    } else {
                        yourFilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') !== -1 ? 'V,NV' : null;
                        oppfilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') == -1 ? 'V,NV' : null;
                        TypeOfReportexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') !== -1 ? 'R' : 'S';
                    }
                } else if (headertext === null) {
                    scope.flagexpress = 9;
                    TypeOfReportexpress = TypeOfReport;
                    yourFilterexpress = yourFilter;
                    oppfilterexpress = oppfilter;
                } else {
                    TypeOfReportexpress = TypeOfReport;
                    yourFilterexpress = yourFilter;
                    oppfilterexpress = oppfilter;
                }

                scope.startindexexpress = frompage === 1 ? 1 : scope.startindexexpress;
                scope.endindexexpress = frompage === 1 ? 9 : scope.endindexexpress;
                var exp = {
                    IntCustID: scope.custid,
                    TypeOfReport: TypeOfReportexpress,
                    yourFilter: yourFilterexpress,
                    oppfilter: oppfilterexpress,
                    pagefrom: scope.startindexexpress,
                    pageto: scope.endindexexpress
                };
                customerDashboardServices.getexpressintersetdata(exp).then(function(response) {
                    if (parseInt(frompage) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                        if (typeofinterest === "All Profiles") {
                            scope.click = "";
                            scope.flagexpress = 9;
                            scope.typeofdiv = headertext === 'All Profiles' ? 'Expressinterest' : 'Expressinterestsend';
                            scope.expressmyinterest = TypeOfReport === 'R' ? 'I interested in' : scope.Gendercustomer + ' interested';
                            scope.expressmynotinterest = TypeOfReport === 'R' ? 'I skipped' : scope.Gendercustomer + ' skipped';
                            scope.expressmynotviewed = TypeOfReport === 'R' ? 'I Viewed/NotViewed' : scope.Gendercustomer + ' Viewed/NotViewed';
                            if (scope.PartnerProfilesnew[0] !== null && scope.PartnerProfilesnew[0] !== undefined && scope.PartnerProfilesnew[0] !== null) {
                                scope.expressmyinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouProceed : scope.PartnerProfilesnew[0].OppProceed;
                                scope.expressmynotinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].Youskipped : scope.PartnerProfilesnew[0].Oppskipped;
                                scope.expressmynotviewedcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouPending : scope.PartnerProfilesnew[0].Opppending;
                                scope.YouProceed = scope.PartnerProfilesnew[0].YouProceed;
                                scope.Youskipped = scope.PartnerProfilesnew[0].Youskipped;
                                scope.YouPending = scope.PartnerProfilesnew[0].YouPending;
                                scope.OppProceed = scope.PartnerProfilesnew[0].OppProceed;
                                scope.Oppskipped = scope.PartnerProfilesnew[0].Oppskipped;
                                scope.Opppending = scope.PartnerProfilesnew[0].Opppending;
                                scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data[0]) ? response.data[0].TotalRows : 0;
                                scope.lblUHaveviewd = TypeOfReport === 'R' ? 'Interest Expressed By ' + scope.Gendercustomer : headertext;
                                scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                                scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                                scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                            }
                        } else {
                            if (helperservice.checkstringvalue(scope.PartnerProfilesnew[0])) {
                                scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                                scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                                scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                            }
                        }
                    } else {
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };
        app.animation('.slideexpress', function() {
            var NG_HIDE_CLASS = 'ng-hide';
            return {
                beforeAddClass: function(element, className, done) {
                    if (className === NG_HIDE_CLASS) {
                        element.slideUp(done);
                    }
                },
                removeClass: function(element, className, done) {
                    if (className === NG_HIDE_CLASS) {
                        element.hide().slideDown(done);
                    }
                }
            };
        });
        scope.zerorecorsalert = function() {
            alerts.timeoutoldalerts(scope, 'alert-danger', 'Sorry No Records Found', 2500);
        };
        scope.successfaileralert = function(msg, typewarning) {
            if (typewarning === "success") {
                alerts.timeoutoldalerts(scope, 'alert-success', msg, 3000);
            } else {
                alerts.timeoutoldalerts(scope, 'alert-danger', msg, 3000);
            }
        };
        scope.$on('successfailer', function(event, msg, typewarning) {
            scope.successfaileralert(msg, typewarning);
        });
        scope.messagecustid = "";
        scope.$on('popuplogin', function(event, url, custid) {
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = "";
            scope.messagecustid = custid;
            scope.modalbodyshow = 1;
            scope.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);
        });
        scope.viewcontacts = function(custid, empmobile, empemail, custmobile, custemail) {
            customerDashboardServices.getprofilegrade(custid).then(function(response) {
                if (helperservice.checkstringvalue(response.data)) {
                    if (response.data === 3) {
                        var mobilenumbers = "<b>Mobile number : </b> " + custmobile + "<br/>" + " " + "<b>Emails :</b>" + custemail;
                        alerts.timeoutoldalerts(scope, 'alert-success', mobilenumbers, 3000);
                    } else {
                        var mobilenumber = "<p style='color:black;'> Please Contact The Below Relationship Manager As This Client Hasn't Given Authentication To Show Untill They Agree</p><br><b>Relationship Manager Mobile number : </b> " + empmobile + "<br/>" + " " + "<b>Relationship Manager Emails :</b>" + empemail;
                        alerts.timeoutoldalerts(scope, 'alert-danger', mobilenumber, 3000);
                    }
                }
            });
        };
        scope.Tickethistoryarray = [];
        scope.messagetorm = function(typeofdiv, custid, name, profileid, logid, TicketID) {
            switch (typeofdiv) {
                case "TH":
                    scope.modalbodyshow = 2;
                    scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    break;
                case "Ticket":
                    scope.modalbodyshow = 3;
                    scope.buttonname = "MessageToRM";
                    scope.LogID = logid;
                    scope.messagecustid = custid;
                    scope.modalpopupheadertext = "Match Followup Of " + name + "(" + profileid + ")";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    customerDashboardServices.Tickethistory(TicketID, 'H').then(function(response) {
                        scope.Tickethistoryarray = [];
                        _.each(response.data, function(item) {
                            scope.Tickethistoryarray.push(item);
                        });
                    });
                    break;
                case "RM":
                    scope.modalbodyshow = 2;
                    scope.LogID = logid;
                    scope.messagecustid = custid;
                    scope.modalpopupheadertext = "Enter your message to Relationship Manager for match followup";
                    alerts.dynamicpopup("myModalContent.html", scope, uibModal);
                    break;
            }
        };
        scope.sendmessages = function(form) {
            if (form !== undefined && helperservice.checkstringvalue(form.message)) {
                scope.$broadcast('sendmsg', 'M', scope.messagecustid, undefined, form, undefined);
            } else {
                alert('please enter Message');
            }
        };
        scope.sendmessagesRMM = function(form) {
            alerts.dynamicpopupclose();
            scope.$broadcast('sendmsg', 'TH', scope.messagecustid, undefined, form, scope.LogID);
        };
        scope.loadmorehideshow = function() {
            if (scope.PartnerProfilesnew.length > 0) {
                scope.endindexexpress = (scope.totalrows > scope.endindexexpress === true) ? scope.endindexexpress : scope.totalrows;
                scope.loadmoreexpress = (scope.totalrows > scope.endindexexpress) ? true : false;
                scope.Norowsendexpress = (scope.totalrows === scope.endindexexpress) ? true : false;
            }
        };
        scope.chatsdiv = function(fromindex, toindex, status, headertext, countalert) {
            scope.exactshow = true;
            if (countalert !== 0) {
                if (fromindex === 1) {
                    window.scrollTo(0, 0);
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = "chats";
                    scope.chatstatus = status;
                }
                var object = { CustID: scope.custid, Status: scope.chatstatus, iStartIndex: fromindex, iEndIndex: toindex };
                customerDashboardServices.getCustometDashBoardchats(object).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data[0]) ? response.data[0].TotalRows : 0;
                    if (parseInt(fromindex) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                            scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                            scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                            scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                        });
                    } else {
                        _.each(response.data, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };
        scope.receivesrecphotoss = function(fromindex, toindex, type, headertext, typeofdiv, countalert, exactflag) {

            scope.exactshow = true;

            if (countalert !== 0) {
                if (fromindex === 1) {
                    window.scrollTo(0, 0);
                    scope.flagexpress = 9;
                    scope.lblUHaveviewd = headertext;
                    scope.typeofdiv = typeofdiv;
                    scope.chatstatus = type;
                    scope.exactflagstorage = exactflag;
                }
                customerDashboardServices.getcustomerpartnerdata(scope.custid, scope.chatstatus, fromindex, toindex, scope.exactflagstorage).then(function(response) {
                    scope.PartnerProfilesnewTotalrows = helperservice.checkstringvalue(response.data.PartnerProfilesnew) ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                    if (parseInt(fromindex) === 1) {
                        scope.PartnerProfilesnew = [];
                        _.each(response.data.PartnerProfilesnew, function(item) {
                            scope.PartnerProfilesnew.push(item);
                            scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                            scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                            scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                        });
                    } else {
                        _.each(response.data.PartnerProfilesnew, function(item) {
                            scope.PartnerProfilesnew.push(item);
                        });
                    }
                });
            } else {
                scope.zerorecorsalert();
            }
        };
        scope.allloadmorepaging = function() {
            scope.spinexpress = true;
            scope.Norowsendexpress = false;
            scope.flagexpress += 9;
            scope.startindexexpress = scope.flagexpress - 8;
            scope.endindexexpress = scope.flagexpress;
            scope.loadmorehideshow();
            switch (scope.typeofdiv) {
                case "Expressinterest":
                case "Expressinterestsend":
                    scope.expressinterestselect(1, TypeOfReportexpress, yourFilterexpress, oppfilterexpress, scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "chats":
                    scope.chatsdiv(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "Requestphotos":
                case "RequestPassword":
                    scope.receivesrecphotoss(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        };
        scope.$on("modalpopupclose", function(event) {
            alerts.dynamicpopupclose();
        });
        scope.redirectToviewfull = function(custid, logid) {
            var realpath = '/viewFullProfileCustomer';
            scope.$broadcast('viewprofileinsert', custid);
            sessionStorage.removeItem("localcustid");
            sessionStorage.removeItem("locallogid");
            sessionStorage.setItem("localcustid", custid);
            sessionStorage.setItem("locallogid", logid);
            window.open(realpath, '_blank');
            // authSvc.paymentstaus(scope.custid, scope).then(function(responsepaid) {
            //     if (responsepaid === true) {
            //         window.open(realpath, '_blank');
            //     }
            // });
        };
        scope.$on("redirectToviewfullprofiles", function(event, custid, logid) {
            scope.redirectToviewfull(custid, logid);
        });
        scope.communicationmessageshistory = function(messagechatlinkid, messagechatcustid, messagehistoryid) {
            scope.messagechatlinkid = messagechatlinkid;
            scope.messagechatcustid = messagechatcustid;
            scope.messagehistoryid = messagehistoryid;
            alerts.dynamicpopup("mytickethistory.html", scope, uibModal);
            var obj = {
                CustID: scope.custid,
                MessageStatusID: null,
                MessageLinkId: messagechatlinkid,
                i_PageSize: 15,
                i_PageNumber: 1,
                i_StartIndex: 1,
                i_EndIndex: 15,
                MessageID: null
            };
            scope.arraytickethistory = [];
            customerDashboardServices.communicationhistorychats(obj).then(function(response) {
                _.each(response.data, function(item) {
                    scope.arraytickethistory.push(item);
                });
            });
        };
        scope.SubmitMsg = function(form) {
            scope.$broadcast('sendmsg', 'RP', scope.messagechatcustid, scope.messagechatlinkid, form, undefined, scope.messagehistoryid);
        };
        scope.pageloadbind = function(response) {
            scope.bindcounts(response.data.DashBoardCounts);
            scope.bindallcounts = response.data.DashBoardCounts;
            scope.PersonalInfo = (response.data.PersonalInfo);
            scope.photopersonal = scope.PersonalInfo.Photo;
            scope.LoginPhotoIsActive = scope.PersonalInfo.IsActive;
            sessionStorage.setItem("LoginPhotoIsActive", scope.PersonalInfo.IsActive);
            scope.Gendercustomer = (scope.PersonalInfo.GenderID) === 2 ? 'Groom' : 'Bride';
        };
        scope.photoPasswordactionss = function(type, tocustid) {

            customerDashboardServices.photopasswordactioninsert(scope.custid, tocustid, type).then(function(response) {
                if (response.data === 1) {
                    if (type === 1) {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Accepted successfully', 2500);
                        customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                            if (scope.counts === 1) {
                                sessionStorage.removeItem("LoginPhotoIsActive");
                                scope.pageloadbind(response);
                            }
                        });
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-success', 'Rejected successfully', 2500);
                    }
                } else {
                    if (type === 1) {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Accepted Fail', 2500);
                    } else {
                        alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Rejected Fail', 2500);
                    }
                }
            });
        };
        scope.acceptlink = function(type) {
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, scope.expressintcustid, scope.expressintlogid, type, null).then(function(response) {
                alerts.dynamicpopupclose();
                if (response.data === 1) {
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }

            });
        };
        scope.acceptlinkexp = function(type, custid, logid) {
            customerDashboardServices.acceptrejectexpressinterest(scope.custid, custid, logid, type, null).then(function(response) {
                if (response.data === 1) {
                    alerts.dynamicpopupclose();
                    alerts.timeoutoldalerts(scope, 'alert-success', 'Proceed successfully', 2500);
                } else {
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'sorry Proceed Fail', 2500);
                }
            });
        };
        scope.acceptrejectpopup = function(custid, logid, Name) {
            scope.modalpopupheadertext = Name + " Status";
            scope.expressintcustid = custid;
            scope.expressintlogid = logid;
            scope.modalbodyshow = 4;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
        scope.divclassmaskforall = function(logphotostatus, photo, photocount) {
            logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
            return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, scope.custid, photostatuslogin);
        };
        scope.incrementsdashboardcounts = function() {
            customerDashboardServices.getCustomercounts(scope.custid, "COU", 1, 9, "UnPaid").then(function(response) {
                scope.bindcounts(response.data.DashBoardCounts);
                scope.bindallcounts = response.data.DashBoardCounts;
            });
        };
        scope.$on("incrementcounts", function() {
            scope.incrementsdashboardcounts();
        });
        var paidstatus;
        scope.newprofileawaiting = function(type, frompage, topage, headertext, bindvalue) {
            if (paidstatus === undefined) {
                authSvc.paymentstaus(scope.custid, scope).then(function(response) {
                    paidstatus = response;
                    if (response === true)
                        scope.gettingpartnerdata(type, frompage, topage, headertext, 1, "UnPaid");
                });
            } else {
                if (paidstatus === true)
                    scope.gettingpartnerdata(type, frompage, topage, headertext, 1, "UnPaid");
                else
                    alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade', 3000);
            }
        };
        scope.photoalbumdashboard = function(custid, profileid, photocount) {
            scope.$broadcast('photoalbum', custid, profileid, photocount);
        };

        scope.init = function() {
            scope.PartnerProfilesnew = [];
            scope.exactshow = (scope.Typeofdatabind === 'C' || scope.Typeofdatabind === 'P') && loginpaidstatus === "1" ? false : true;
            switch (scope.Typeofdatabind) {
                case "MB":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('MB', 1, 9, 'My bookmarked profiles', 1, "UnPaid");
                    });
                    break;
                case "WB":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('WB', 1, 9, 'Who BookMarked Me', 1, "UnPaid");
                    });
                    break;
                case "I":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('I', 1, 9, 'Ignored Profiles', 1, "UnPaid");
                    });
                    break;
                case "WV":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('WV', 1, 9, 'My profile viewed by others', 1, "UnPaid");
                    });
                    break;
                case "RV":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.gettingpartnerdata('RV', 1, 9, 'Profiles viewed by me', 1, "UnPaid");
                    });
                    break;
                case "Chats":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.chatsdiv(1, 9, 463, 'Total Messages', scope.bindallcounts.NewMsgs);
                    });
                    break;
                case "Requests":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.receivesrecphotoss(1, 9, 'RP', 'Members are requesting to upload your photo', 'Requestphotos', "UnPaid", scope.bindallcounts.ReceivedPhotoRequestCount);
                    });
                    break;
                case "Express":
                    customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
                        if (scope.counts === 1) {
                            sessionStorage.removeItem("LoginPhotoIsActive");
                            scope.pageloadbind(response);
                        }
                        scope.expressinterestselect(scope.bindallcounts.ExpressAllcount, null, null, null, 1, 9, 'All Profiles', 'All Profiles', null);
                    });
                    break;
                default:
                    scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, "UnPaid");
                    break;
            }
        };
        scope.exactandnormal = function(typebutton) {
            if (typebutton === "exact") {
                scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, 'Paid');
                scope.exactshow = true;
                scope.normaldata = false;
            } else {
                scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you', 1, 'UnPaid');
                scope.exactshow = false;
                scope.normaldata = true;
            }
        };

        // scope.$on('photosrequests', function(event, typerequest) {
        //     switch (TypeOfReportexpress) {
        //         case "photorequest":
        //             customerDashboardServices.getCustomercounts(scope.custid, "DC", 1, 9, "UnPaid").then(function(response) {
        //                 if (scope.counts === 1) {
        //                     sessionStorage.removeItem("LoginPhotoIsActive");
        //                     scope.pageloadbind(response);
        //                 }
        //             });
        //             break;
        //     }
        // });

        scope.getNotifyArray = function(Startval, Endval, notifyID, insertType) {
            notifyID = notifyID === undefined ? '' : notifyID;
            var inobj = { Cust_NotificationID: notifyID, CustID: scope.custid, Startindex: Startval, EndIndex: Endval };
            customerDashboardServices.getNotifications(inobj).then(function(response) {
                var dddddd = JSON.parse(response.data);

                var notifalgg = sessionStorage.getItem('unpaidNotifyflag');
                if (notifalgg !== 'false' && Startval === 1 && dddddd.length > 0 && dddddd[0] !== undefined && dddddd[0] !== null && dddddd[0] !== "" && dddddd[0].unpaidnotify !== null && dddddd[0].unpaidnotify !== undefined) {
                    // dddddd.splice(0, 0, { ActionType: dddddd[0].unpaidnotify });
                    dddddd.push({ ActionType: dddddd[0].unpaidnotify, hideviewprofile: true });
                    sessionStorage.setItem('unpaidNotifyflag', true);
                } else {
                    if (notifalgg !== 'false' && Startval === 1 && loginpaidstatus === "0" || loginpaidstatus === 0) {
                        dddddd.splice(0, 0, { ActionType: 'upgrade your membership for more bride/bride groom information and quality followups', hideviewprofile: true });
                        sessionStorage.setItem('unpaidNotifyflag', true);
                    }
                }
                _.each(dddddd, function(item, index) {
                    if ((index % 2 === 0) || index === 0) {
                        item.bakcolor = { "background-color": "#f47370" };
                        item.linkcolor = { "color": "maroon" };
                    } else {
                        item.bakcolor = { "background-color": "#c3a332" };
                        item.linkcolor = { "color": "#66643e" };
                    }
                });

                if (scope.notifytype === 'page') {
                    scope.notificationtxt = dddddd;
                } else {
                    if (from === 1) {
                        scope.newnitify = true;
                        from = to;
                        scope.notificationpopup = dddddd;
                    } else {
                        from = to;
                        if (insertType !== undefined && insertType === 'Action') {
                            insertType = undefined;
                        } else {
                            if (scope.oldnotificationpopup.length > 0) {
                                scope.newnitify = false;
                                scope.notificationpopup = $.unique((scope.notificationpopup).concat(scope.oldnotificationpopup));
                            }
                            scope.oldnotificationpopup = $.unique((scope.oldnotificationpopup).concat(dddddd));
                        }
                    }
                }


                scope.showdiv = scope.notificationtxt.length === 0 ? false : true;
                scope.hidemorelnk = false;
                var totalrows = (scope.notificationpopup.length > 0 && scope.notificationpopup[0].TotalRows !== undefined) ? scope.notificationpopup[0].TotalRows : 0;

                var arrayCount = (scope.oldnotificationpopup.length > 0 ? scope.oldnotificationpopup.length : 0) + (scope.notificationpopup.length > 0 ? scope.notificationpopup.length : 0);

                if (arrayCount === parseInt(totalrows) + 1) {
                    scope.hidemorelnk = true;
                }
                // else if(arrayCount === parseInt(totalrows) + 1){

                // }
            });
        };
        scope.getNotify = function() {
            scope.getNotifyArray(1, 5);
        };
        scope.getNotify();
        scope.moreNotification = function() {
            from = 1;
            scope.disClass = '';
            scope.loadMore();
        };
        scope.cancel = function() {
            commonFactory.closepopup();
        };
        $(function() {
            $('.marquee').marquee({
                direction: 'up',
                pauseOnHover: true
            });

            $('#modalbody').bind('scroll', function(e) {
                alert(1);
                var elem = $(e.currentTarget);
                if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight()) {}
            });
        });
        scope.readNotify = function(notifyID, type, index, versiontype) {

            if (notifyID === undefined || notifyID === null || notifyID === '') {
                var notiFlag = sessionStorage.getItem('unpaidNotifyflag');
                if (notiFlag === "true") {
                    sessionStorage.setItem('unpaidNotifyflag', false);
                    if (type === 'page') {
                        scope.notificationtxt.splice(index, 1);
                        scope.showdiv = scope.notificationtxt.length === 0 ? false : true;
                    } else {
                        scope.notificationpopup.splice(index, 1);
                        scope.showdiv = scope.notificationpopup.length === 0 ? false : true;
                    }
                }

            } else {
                scope.disClass = index;
                scope.notifytype = type;
                if (type === 'page') {
                    scope.getNotifyArray(1, 5, notifyID);
                } else {
                    scope.getNotifyArray(1, 10, notifyID, 'Action');
                }

                if (versiontype === 'new') {
                    scope.notificationpopup.splice(index, 1);
                } else {
                    scope.oldnotificationpopup.splice(index, 1);
                }
            }
        };
        var from = 1,
            to = 10;
        scope.loadMore = function(e) {

            scope.notifytype = 'popup';
            if (from === 1) {
                scope.notificationpopup = [];
                scope.getNotifyArray(1, 10);
                commonFactory.open('notifyPopup.html', scope, uibModal);
            } else {
                scope.getNotifyArray(to + 1, to + 10);
                to = to + 10;
                $("#modalbody").animate({ scrollTop: 0 }, 1000);

                scope.newnitify = false;
                scope.oldnitify = true;

            }
        };
        scope.notifyViewProfile = function(ToCust_Id, logid, notifyID, type, index, versiontype) {
            if (ToCust_Id !== undefined && ToCust_Id !== null && ToCust_Id !== '') {
                scope.readNotify(notifyID, type, index);
                scope.redirectToviewfull(ToCust_Id);
            }
        };
        scope.leftmenulinks = function(item) {
            switch (item.value) {
                case "My bookmarked profiles":
                case "Who bookmarked me":
                case 'Profiles viewed by me':
                case "My profile viewed by others":
                case "Ignored profiles":
                    scope.gettingpartnerdata(item.clickvalues, 1, 9, item.clickvaluesbind, item.bindvalue, 'UnPaid');
                    break;
                default:
                    route.go(item.statename, item.object);
                    break;
            }
        };
    }
]);