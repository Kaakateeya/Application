app.directive("partnerData", ["$injector", 'authSvc', 'successstoriesdata',
    '$mdDialog', 'alert', 'customerDashboardServices', '$uibModal', '$http', 'helperservice',
    function($injector, authSvc, successstoriesdata, $mdDialog, alerts, customerDashboardServices,
        uibModal, $http, helperservice) {
        return {
            restrict: "E",
            scope: {
                array: '=',
                typeofsearch: '=',
                pagging: '='
            },
            templateUrl: "templates/Commonpartnerprofiles.html",
            link: function(scope, element, attrs) {
                var logincustid = authSvc.getCustId();
                scope.LcustID = logincustid;
                var loginprofileid = authSvc.getProfileid();
                scope.loginpaidstatus = authSvc.getpaidstatus();
                var currentslide = 1;
                var photoclass = "";
                scope.searchestype = scope.typeofsearch;
                scope.typeofdiv = scope.pagging === false ? "List" : "Grid";
                scope.slideshowsearches = false;
                scope.playpausebuttons = true;
                scope.pauseplaybuttons = true;
                scope.partnersearchessearches = true;
                scope.lnkLastSlide = 1;
                scope.paggingflag = scope.pagging;
                scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
                scope.startindex = 1;
                scope.endindex = scope.paggingflag === false ? 8 : 9;
                scope.flag = scope.paggingflag === false ? 8 : 9;
                scope.loaderspin = false;
                scope.Norowsend = false;
                scope.PartnerProfilesnew = scope.array;
                scope.indexvalues = 0;
                scope.loadmore = false;
                var i = 0;
                scope.slides = [];
                scope.directivepaging = function() {
                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        scope.loaderspin = true;
                        scope.loadmore = false;
                        scope.flag += scope.paggingflag === false ? 8 : 9;
                        scope.startindex = scope.flag - (scope.paggingflag === false ? 7 : 8);
                        scope.endindex = scope.flag;
                        scope.$emit('directivecallingpaging', scope.startindex, scope.endindex);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.$on('loadmore', function(event, endflag) {
                    scope.loaderspin = false;
                    if (scope.array !== undefined && scope.array.length > 0) {
                        scope.endindex = (scope.array[0].TotalRows > scope.endindex === true) ? scope.endindex : scope.array[0].TotalRows;
                        scope.loadmore = (scope.array[0].TotalRows > scope.endindex) ? true : false;
                        scope.Norowsend = (scope.array[0].TotalRows === scope.endindex) ? true : false;
                    }
                });
                scope.$watch('array', function(value) {
                    scope.PartnerProfilesnew = scope.array;
                    if (scope.array !== undefined && scope.array.length > 0) {
                        scope.loadmore = scope.array[0].TotalRows > (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows > scope.endindex ? true : false;
                        scope.Norowsend = scope.array[0].TotalRows < (scope.paggingflag === false ? 8 : 9) || scope.array[0].TotalRows < scope.endindex ? true : false;
                        scope.startindex = 1;
                        scope.endindex = scope.paggingflag === false ? 8 : 9;
                        scope.flag = scope.paggingflag === false ? 8 : 9;
                    }
                });
                scope.listclick = function() {
                    scope.$emit('slideshowrefineshow');
                    scope.typeofdiv = 'List';
                    $('.search_result_items_main').attr("style", "width:80%;");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;
                };
                scope.gridclick = function() {
                    scope.$emit('slideshowrefineshow');
                    scope.typeofdiv = 'Grid';
                    $('.search_result_items_main').attr("style", "");
                    scope.slideshowsearches = false;
                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = true;
                    scope.partnersearchessearches = true;
                    scope.searchestype = scope.paggingflag === false ? false : true;
                };
                scope.servicehttp = function(type, object) {
                    return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                        .then(function(response) {

                            switch (type) {
                                case "B":
                                    if (response.data === 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "bookmarked suceessfully", "success");
                                    } else {
                                        scope.$emit('successfailer', "bookmarked failed", "warning");
                                    }
                                    break;
                                case "E":
                                    if (response.data == 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "EXpressInterest done SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "EXpressInterest Fail", "warning");
                                    }
                                    break;
                                case "I":
                                    if (response.data === 1) {
                                        if (scope.indexvalues !== 'index') {
                                            scope.array.splice(scope.indexvalues, 1);
                                        }
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "Ignore SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "Ignore profile Fail", "warning");
                                    }
                                    break;
                                case "M":
                                case "TH":
                                case "RP":
                                    if (response.data === 1) {
                                        scope.$emit('successfailer', "Message sent SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "Message sending Fail", "warning");
                                    }
                                    break;
                            }
                        });
                };
                scope.serviceactions = function(type, tocustid, typeofactionflag, profileid, form, logid, MessageHistoryId) {
                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        var indexvalue = scope.indexvalues;
                        var object = {
                            IFromCustID: logincustid,
                            IToCustID: tocustid,
                            TypeofInsert: type,
                            EncriptedText: null,
                            EncryptedRejectFlagText: null,
                            EncriptedTextrvr: null,
                            EncryptedRejectFlagTextrvr: null,
                            StrHtmlText: null,
                            MessageLinkId: null,
                            MessageHistoryId: null,
                            Logid: logid !== undefined ? logid : null,
                            FromProfileID: loginprofileid,
                            ToProfileID: profileid !== undefined ? profileid : null
                        };

                        if (typeofactionflag === 1) {
                            typeofactionflag = true;
                        }
                        switch (type) {
                            case "B":
                                if (typeofactionflag !== true) {
                                    scope.servicehttp(type, object);
                                } else {
                                    scope.$emit('successfailer', "You have already Bookmark This ProfileID", "warning");
                                }
                                break;
                            case "E":
                                if (typeofactionflag !== true) {
                                    authSvc.paymentstaus(logincustid, scope).then(function(responsepaid) {

                                        if (responsepaid === true)
                                            scope.servicehttp(type, object);
                                    });
                                } else {
                                    scope.$emit('successfailer', "You have already ExpressInterest This ProfileID", "warning");
                                }
                                break;
                            case "I":
                                if (typeofactionflag !== true) {
                                    scope.servicehttp(type, object);
                                } else {
                                    scope.$emit('successfailer', "You have already Ignore This ProfileID", "warning");
                                }
                                break;
                            case "M":
                            case "TH":
                            case "RP":
                                scope.servicehttp(type, object);
                                break;
                            case "V":
                                scope.servicehttp(type, object);
                                break;
                        }
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };

                scope.$on('sendmsg', function(event, type, tocustid, typeofactionflag, form, logid, MessageHistoryId) {
                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        var indexvalue = scope.indexvalues;
                        var object = {
                            IFromCustID: logincustid,
                            IToCustID: tocustid,
                            TypeofInsert: type,
                            EncriptedText: null,
                            EncryptedRejectFlagText: null,
                            EncriptedTextrvr: null,
                            EncryptedRejectFlagTextrvr: null,
                            StrHtmlText: form !== undefined ? form.message : null,
                            MessageLinkId: typeofactionflag !== undefined && typeofactionflag !== "" && typeofactionflag !== null ? typeofactionflag : null,
                            MessageHistoryId: MessageHistoryId !== undefined && MessageHistoryId !== null && MessageHistoryId !== "" ? MessageHistoryId : null,
                            Logid: logid !== undefined ? logid : null,
                            FromProfileID: loginprofileid,
                            ToProfileID: null
                        };
                        scope.servicehttp(type, object);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                    scope.$emit("modalpopupclose", event);
                });
                scope.sendmessegescommon = function(type, tocustid) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        scope.$emit('popuplogin', "myModalContent.html", tocustid);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.redirectToviewfullprofile = function(custid, logid, recentlyviewes) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        scope.$emit('redirectToviewfullprofiles', custid, logid);
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.photoRequestMethod = function(tocustid, toprofileieid, password) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        password = password !== null && password !== "" ? 468 : 467;
                        return $http.get(app.apiroot + 'StaticPages/getSendMail_PhotoRequest_Customer', { params: { FromCustID: tocustid, ToCustID: logincustid, Category: password } })
                            .then(function(response) {
                                if (response.data === 1) {
                                    scope.$emit('successfailer', "Request sent suceessfully", "success");
                                } else {
                                    scope.$emit('successfailer', "Request sent Fail", "warning");
                                }
                            });
                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.photoalbum = function(custid, profileid, photocount) {
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        alerts.dynamicpopup("photopopup.html", scope, uibModal);
                        customerDashboardServices.getphotoslideimages(custid).then(function(response) {
                            scope.slides = [];
                            _.each(response.data, function(item) {
                                scope.slides.push(item);
                            });
                        });

                    } else {
                        scope.$emit('showloginpopup');
                    }
                };
                scope.divclassmask = function(logphotostatus, photo, photocount) {
                    logphotostatus = sessionStorage.getItem("LoginPhotoIsActive");
                    var photostatuslogin = helperservice.checkstringvalue(authSvc.getprofilepic()) ? authSvc.getprofilepic() : "";
                    if (logincustid !== null && logincustid !== undefined && logincustid !== "") {
                        return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount, logincustid, photostatuslogin);
                    } else {
                        return "";
                    }
                };
                scope.indexvalue = function(index) {
                    scope.indexvalues = index;
                };
                scope.modifyursearch = function() {
                    scope.PartnerProfilesnew = [];
                    scope.listclick();
                    scope.loadmore = false;
                    scope.loaderspin = false;
                    scope.Norowsend = false;
                    scope.$emit('modifyursearchpartner', 1, 10);
                };

                //Bootstrap Carousal
                scope.checkitemnew = function(carouselID) {
                    var $this;
                    $this = $("#" + carouselID);
                    if ($("#" + carouselID + " .carousel-inner .item:first").hasClass("active")) {
                        $("#" + carouselID).find('.left').hide();
                        $("#" + carouselID).find('.right').show();
                    } else if ($("#" + carouselID + " .carousel-inner .item:last").hasClass("active")) {
                        $("#" + carouselID).find('.left').show();
                        $("#" + carouselID).find('.right').hide();
                    } else {
                        $("#" + carouselID).find('.left').show();
                        $("#" + carouselID).find('.right').show();
                    }
                };

                function pageload(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
                    currentslide = 1;
                    var totalItems = $('#' + carouselID).find('.item').length;
                    if (totalItems === 0) {
                        scope.$emit('slideshowsubmit', 1, 10, "slideshow");
                        scope.checkitemnew(carouselID);
                    }
                    slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID);
                    ArrowMove(carouselID);
                    checkitemGlobal(carouselID);
                }



                function slidBind(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {
                    $('#' + carouselID).bind('slide.bs.carousel', function(e) {
                        $('.list-inline li a').removeClass('selected');
                        $('[id=carousel-selector-' + $('#' + carouselID).find('div.active').index() + ']').addClass('selected');
                        var totalItems1 = $('#' + carouselID).find('.item').length;
                        var currentIndex1 = $('#' + carouselID).find('div.active').index() + 1;
                        $("#lnkLastSlide").text(currentIndex1);
                        $('#' + carouselID).find('div.active').index();
                        if (currentslide < currentIndex1) {
                            if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                                if (parseInt(totalItems1) - parseInt(currentIndex1) === 4) {
                                    scope.$emit('slideshowsubmit', totalItems1 + 1, totalItems1 + 10, "slideshow");
                                }
                            } else {
                                if (parseInt(totalItems1) - parseInt(currentIndex1) === 1) {
                                    scope.$emit('showloginpopup');
                                }
                            }
                        }
                        currentslide = currentIndex1;

                    });
                }
                //method to move slide to left or right arrow press
                function ArrowMove(carouselID) {
                    $(document).bind('keyup', function(e) {
                        var totalItems = $('#' + carouselID).find('.item').length;
                        var currentIndex = $('#' + carouselID).find('div.active').index() + 1;
                        if (e.which == 39) {
                            if (totalItems != currentIndex)
                                $('#' + carouselID).carousel('next');
                        } else if (e.which == 37) {
                            if (currentIndex != 1)
                                $('#' + carouselID).carousel('prev');
                        }
                    });
                }

                function checkitemGlobal(carouselID) {
                    var checkitem = function() {
                        scope.checkitemnew(carouselID);
                    };
                    $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
                }
                scope.playslide = function() {

                    scope.playpausebuttons = true;
                    scope.pauseplaybuttons = false;
                    $('#slideShowCarousel').carousel({
                        interval: 2000,
                        pause: "false"
                    });
                };
                scope.pauseslide = function() {

                    scope.playpausebuttons = false;
                    scope.pauseplaybuttons = true;
                    $('#slideShowCarousel').carousel('pause');
                };

                scope.Slideshowpage = function() {
                    scope.$emit('slideshowrefinehide');
                    scope.slideshowsearches = true;
                    scope.playpausebuttons = false;
                    scope.partnersearchessearches = false;
                    scope.searchestype = true;
                    pageload("slideShowCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
                    $('.search_result_items_main').attr("style", "width:100%;");
                    scope.checkitemnew("slideShowCarousel");
                    $('#slideShowCarousel').carousel('pause');
                };

                ///////
                scope.modalpopupclose = function() {
                    alerts.dynamicpopupclose();
                };
                scope.$on("photoalbum", function(event, custid, profileid, photocount) {

                    scope.photoalbum(custid, profileid, photocount);
                });
                scope.$on('setslide', function(event) {
                    scope.listclick();
                });
                scope.$on('viewprofileinsert', function(event, custid) {
                    scope.serviceactions('V', custid);
                });
            }
        };
    }
]);