app.controller('Controllerpartner', ['$uibModal', '$scope', 'customerDashboardServices', 'authSvc',
    'alert', '$window', '$location',
    function(uibModal, scope, customerDashboardServices, authSvc, alerts, window, $location) {

        var logincustid = authSvc.getCustId();
        var loginprofileid = authSvc.getProfileid();
        scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
        scope.typeodbind = 'C';
        scope.typeofdiv = "Grid";
        scope.PartnerProfilesnew = [];
        scope.counts = 1;
        scope.bindallcounts = {};
        scope.lblUHaveviewd = 'Suitable Profiles that match you';
        scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
        scope.chatstatus;
        scope.form = {};
        scope.gettingpartnerdata = function(type, frompage, topage, headertext) {
            debugger;
            scope.flag = frompage === 1 ? 9 : scope.flag;
            scope.typeodbind = type;
            if (type == 'C') {
                customerDashboardServices.getCustomercounts(scope.custid, type, frompage, topage).then(function(response) {

                    if (scope.counts == 1) {
                        scope.bindcounts(response.data.DashBoardCounts);
                        console.log(response.data.DashBoardCounts);
                        scope.bindallcounts = response.data.DashBoardCounts;
                        scope.PersonalInfo = (response.data.PersonalInfo);
                        console.log(response.data.PersonalInfo);
                        scope.photopersonal = scope.PersonalInfo.Photo;
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
                    scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                    scope.lblUHaveviewd = headertext;

                });
            } else {
                customerDashboardServices.getcustomerpartnerdata(scope.custid, type, frompage, topage).then(function(response) {

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
                    scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew[0].TotalRows;
                    scope.lblUHaveviewd = headertext;

                });
            }
        };

        scope.init = function() {
            scope.gettingpartnerdata('C', 1, 9, 'Suitable Profiles that match you');
        };

        scope.paging = function(frompage, topage, typeodbind) {
            scope.counts = 0;
            typeodbind = typeodbind == 'C' ? 'P' : typeodbind;
            scope.gettingpartnerdata(typeodbind, frompage, topage, scope.lblUHaveviewd);
        };
        scope.$on('directivecallingpaging', function(event, frompage, topage) {
            scope.paging(frompage, topage, scope.typeodbind);
        });
        scope.bindcounts = function(array) {
            scope.leftMenuArr = [

                { value: 'Edit my profile', bindvalue: null, hrefs: '/#home' },
                { value: 'Upgrade your membership', bindvalue: null, hrefs: '/#home' },
                { value: 'manage photo', bindvalue: null, hrefs: '/#home' },
                { value: 'My bookmarked profiles', bindvalue: array.MybookMarkedProfCount, clickvalues: 'MB', clickvaluesbind: 'Profiles Who BookMarked You', hrefs: '/#home' },
                { value: 'Who bookmarked me', bindvalue: array.WhobookmarkedCount, clickvalues: 'WB', clickvaluesbind: 'Profiles you have bookmarked', hrefs: '/#home' },
                { value: 'Profiles viewed by me', bindvalue: array.RectViewedProfCount, clickvalues: 'RV', clickvaluesbind: 'Profiles viewed by me', hrefs: '/#home' },
                { value: 'My profile viewed by others', bindvalue: array.RectWhoViewedCout, clickvalues: 'WV', clickvaluesbind: 'Members viewed my profile', hrefs: '/#home' },
                { value: 'Ignored profiles', bindvalue: array.IgnoreProfileCount, clickvalues: 'I', clickvaluesbind: 'Profiles ignored by you', hrefs: '/#home' },
                { value: 'Saved search', bindvalue: array.SaveSearchCount, hrefs: '/#home' },
                { value: 'Profile Settings', bindvalue: null, hrefs: '/#profilesettings' },
                { value: 'help', bindvalue: null, hrefs: '/#help' },
            ];
        };

        var TypeOfReportexpress = null;
        var yourFilterexpress = null;
        var oppfilterexpress = null;

        scope.flagexpress = 9;
        scope.expressinterestselect = function(TypeOfReport, yourFilter, oppfilter, frompage, topage, headertext, typeofinterest) {
            debugger;
            if (headertext === "1" || headertext === "2" || headertext === "3") {
                scope.flagexpress = 9;
                if (headertext === "1") {
                    yourFilterexpress = scope.expressmyinterest.indexOf('I interesed in') !== -1 ? 'I' : null;
                    oppfilterexpress = scope.expressmyinterest.indexOf('I interesed in') == -1 ? 'I' : null;
                    TypeOfReportexpress = scope.expressmyinterest.indexOf('I interesed in') !== -1 ? 'R' : 'S';
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
                console.log(response.data);
                if (parseInt(frompage) === 1) {
                    scope.PartnerProfilesnew = [];

                    _.each(response.data, function(item) {
                        scope.PartnerProfilesnew.push(item);
                    });

                    if (typeofinterest === "All Profiles") {
                        scope.flagexpress = 9;
                        scope.typeofdiv = headertext === 'All Profiles' ? 'Expressinterest' : 'Expressinterestsend';
                        scope.expressmyinterest = TypeOfReport === 'R' ? 'I interesed in' : scope.Gendercustomer + ' interesed';
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
                            scope.PartnerProfilesnewTotalrows = response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" ? response.data[0].TotalRows : 0;
                            scope.lblUHaveviewd = TypeOfReport === 'R' ? 'Interest Expressed By ' + scope.Gendercustomer : headertext;
                            scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                            scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                            scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                        }

                    } else {
                        if (scope.PartnerProfilesnew[0] !== null && scope.PartnerProfilesnew[0] !== undefined && scope.PartnerProfilesnew[0] !== null) {
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
            alerts.open('Sorry No Records Found', 'warning');
        };
        scope.successfaileralert = function(msg, typewarning) {
            debugger;

            alerts.open(msg, typewarning);
        };
        scope.$on('successfailer', function(event, msg, typewarning) {
            scope.successfaileralert(msg, typewarning);
        });
        scope.messagecustid = "";
        scope.$on('popuplogin', function(event, url, custid) {
            debugger;
            scope.modalpopupheadertext = "Enter your message here";
            scope.messagecustid = "";
            scope.messagecustid = custid;
            scope.modalbodyshow = 1;
            scope.buttonname = "Send Message";
            alerts.dynamicpopup(url, scope, uibModal);

        });
        scope.viewcontacts = function(custid, empmobile, empemail, custmobile, custemail) {
            var mobilenumber = "<b>Mobile number : </b> " + custmobile + "<br/>" + " " + "<b>Emails :</b>" + custemail;
            alerts.open(mobilenumber, 'success');
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
                        console.log(response);
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
            debugger;
            scope.$broadcast('sendmsg', 'M', scope.messagecustid, undefined, form, undefined);
        }
        scope.sendmessagesRMM = function(form) {
            debugger;
            alerts.dynamicpopupclose();
            scope.$broadcast('sendmsg', 'TH', scope.messagecustid, undefined, form, scope.LogID);
        }
        scope.loadmorehideshow = function() {

            if (scope.PartnerProfilesnew.length > 0) {
                scope.endindexexpress = (scope.totalrows > scope.endindexexpress === true) ? scope.endindexexpress : scope.totalrows;
                scope.loadmoreexpress = (scope.totalrows > scope.endindexexpress) ? true : false;
                scope.Norowsendexpress = (scope.totalrows === scope.endindexexpress) ? true : false;

            }
        };


        scope.chatsdiv = function(fromindex, toindex, status, headertext) {
            if (fromindex === 1) {
                scope.flagexpress = 9;
                scope.lblUHaveviewd = headertext;
                scope.typeofdiv = "chats";
                scope.chatstatus = status;
            }
            var object = { CustID: scope.custid, Status: scope.chatstatus, iStartIndex: fromindex, iEndIndex: toindex };
            customerDashboardServices.getCustometDashBoardchats(object).then(function(response) {

                scope.PartnerProfilesnewTotalrows = response.data[0] !== undefined && response.data[0] !== null && response.data[0] !== "" ? response.data[0].TotalRows : 0;
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

        };


        scope.receivesrecphotoss = function(fromindex, toindex, type, headertext, typeofdiv) {
            debugger;
            if (fromindex === 1) {
                scope.flagexpress = 9;
                scope.lblUHaveviewd = headertext;
                scope.typeofdiv = typeofdiv;
                scope.chatstatus = type;
            }
            customerDashboardServices.getcustomerpartnerdata(scope.custid, scope.chatstatus, fromindex, toindex).then(function(response) {
                console.log(response);
                debugger;
                scope.PartnerProfilesnewTotalrows = response.data.PartnerProfilesnew != null && response.data.PartnerProfilesnew[0] !== undefined && response.data.PartnerProfilesnew[0] !== null && response.data.PartnerProfilesnew[0] !== "" ? response.data.PartnerProfilesnew[0].TotalRows : 0;
                if (parseInt(fromindex) === 1) {
                    scope.PartnerProfilesnew = [];
                    _.each(response.data.PartnerProfilesnew, function(item) {
                        scope.PartnerProfilesnew.push(item);

                        scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                        scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                        scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;

                    });
                } else {
                    debugger;
                    _.each(response.data.PartnerProfilesnew, function(item) {
                        debugger;
                        scope.PartnerProfilesnew.push(item);
                    });

                }


            });

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
                    scope.expressinterestselect(TypeOfReportexpress, yourFilterexpress, oppfilterexpress, scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "chats":
                    scope.chatsdiv(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;
                case "Requestphotos":
                case "RequestPassword":
                    debugger;
                    scope.receivesrecphotoss(scope.startindexexpress, scope.endindexexpress);
                    scope.spinexpress = false;
                    break;

            }
        };
        scope.modalpopupclose = function() {
            alerts.dynamicpopupclose();
        }
        scope.$on("modalpopupclose", function(event) {
            alerts.dynamicpopupclose();
        });
        scope.redirectToGoogle = function() {
            var realpath = $location.path() + '/viewprofile';
            var url = $location.absUrl().split('?')[0];
            window.open(realpath, '_blank');
        };
        scope.fullviewprofile = function(tocustid) {
            customerDashboardServices.Viewprofile().then(function(response) {
                console.log(response);
            });
        };
        scope.communicationmessageshistory = function(messagechatlinkid, messagechatcustid, messagehistoryid) {
            debugger;
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
                console.log(response);
                _.each(response.data, function(item) {
                    debugger;
                    scope.arraytickethistory.push(item);
                });
            });
        };
        scope.SubmitMsg = function(form) {
            scope.$broadcast('sendmsg', 'RP', scope.messagechatcustid, scope.messagechatlinkid, form, undefined, scope.messagehistoryid);
        };
        scope.PhotoPasswordAction = function(type, tocustid) {

        };
        scope.acceptlink = function(type) {

        };
        scope.acceptrejectpopup = function(custid, logid) {
            scope.modalbodyshow = 4;
            alerts.dynamicpopup("myModalContent.html", scope, uibModal);
        };
    }
]);