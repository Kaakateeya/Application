app.directive("partnerData", ["$injector", 'authSvc', 'successstoriesdata', '$mdDialog', function($injector, authSvc, successstoriesdata, $mdDialog) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    var currentslide = 1;
    return {
        restrict: "E",
        scope: {
            array: '=',
            typeofsearch: '='
        },
        templateUrl: "templates/Commonpartnerprofiles.html",
        link: function(scope, element, attrs) {
            scope.searchestype = scope.typeofsearch;
            scope.typeofdiv = "Grid";
            scope.slideshowsearches = false;
            scope.playpausebuttons = true;
            scope.pauseplaybuttons = true;
            scope.partnersearchessearches = true;
            scope.lnkLastSlide = 1;
            // if (scope.typeofstyle != undefined && scope.typeofstyle != null && scope.typeofstyle != "" && scope.typeofdiv === "List") {
            //     $('.search_result_items_main').attr("style", "width:80%;");
            // } else {
            //     $('.search_result_items_main').attr("style", "");
            // }
            scope.LoginPhotoIsActive = sessionStorage.getItem("LoginPhotoIsActive");
            scope.startindex = 1;
            scope.endindex = 9;
            scope.flag = 9;
            scope.loaderspin = false;
            scope.Norowsend = false;
            scope.PartnerProfilesnew = scope.array;
            scope.indexvalues = 0;
            var i = 0;
            scope.directivepaging = function() {
                scope.loaderspin = true;
                scope.loadmore = false;
                scope.flag += 9;
                scope.startindex = scope.flag - 8;
                scope.endindex = scope.flag;
                scope.$emit('directivecallingpaging', scope.startindex, scope.endindex);
            };
            scope.$on('loadmore', function(event, endflag) {
                scope.loaderspin = false;
                if (scope.array.length > 0) {
                    scope.endindex = (scope.array[0].TotalRows > scope.endindex === true) ? scope.endindex : scope.array[0].TotalRows;
                    scope.loadmore = (scope.array[0].TotalRows > scope.endindex) ? true : false;
                    scope.Norowsend = (scope.array[0].TotalRows === scope.endindex) ? true : false;
                }
            });
            scope.$watch('array', function(value) {
                scope.PartnerProfilesnew = scope.array;
                if (scope.array.length > 0) {
                    scope.loadmore = scope.array[0].TotalRows > 9 || scope.array[0].TotalRows > scope.endindex ? true : false;
                    scope.Norowsend = scope.array[0].TotalRows < 9 || scope.array[0].TotalRows < scope.endindex ? true : false;
                    scope.startindex = 1;
                    scope.endindex = 9;
                    scope.flag = 9;
                }
            });
            scope.listclick = function() {
                scope.typeofdiv = 'List';
                $('.search_result_items_main').attr("style", "width:80%;");
                scope.slideshowsearches = false;
                scope.playpausebuttons = true;
                scope.pauseplaybuttons = true;
                scope.partnersearchessearches = true;
                scope.searchestype = false;
            };
            scope.gridclick = function() {
                scope.typeofdiv = 'Grid';
                $('.search_result_items_main').attr("style", "");
                scope.slideshowsearches = false;
                scope.playpausebuttons = true;
                scope.pauseplaybuttons = true;
                scope.partnersearchessearches = true;
                scope.searchestype = false;
            };
            scope.servicehttp = function(type, object) {
                return $injector.invoke(function($http) {
                    return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                        .then(function(response) {
                            console.log(response);
                            switch (type) {
                                case "B":
                                    if (response.data == 1) {
                                        scope.array.splice(scope.indexvalues, 1);
                                        scope.$emit('incrementcounts');
                                        scope.$emit('successfailer', "bookmarked suceessfully", "success");
                                    } else {
                                        scope.$emit('successfailer', "bookmarked failed", "warning");
                                    }
                                    break;
                                case "E":
                                    if (response.data == 1) {
                                        scope.array.splice(scope.indexvalues, 1);
                                        scope.$emit('successfailer', "EXpressInterest done SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "EXpressInterest Fail", "warning");
                                    }
                                    break;
                                case "I":
                                    if (response.data == 1) {
                                        scope.array.splice(scope.indexvalues, 1);
                                        scope.$emit('successfailer', "Ignore SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "Ignore profile Fail", "warning");
                                    }
                                    break;
                                case "M":
                                case "TH":
                                case "RP":
                                    if (response.data == 1) {
                                        scope.$emit('successfailer', "Message sent SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "Message sending Fail", "warning");
                                    }
                                    break;
                            }
                        });
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
                        StrHtmlText: form !== undefined ? form.message : null,
                        MessageLinkId: typeofactionflag !== undefined ? typeofactionflag : null,
                        MessageHistoryId: MessageHistoryId !== undefined ? MessageHistoryId : null,
                        Logid: logid !== undefined ? logid : null,
                        FromProfileID: loginprofileid,
                        ToProfileID: profileid !== undefined ? profileid : null
                    };
                    scope.servicehttp(type, object);
                } else {
                    scope.$emit('showloginpopup');

                }
            };

            scope.$on('sendmsg', function(event, type, tocustid, typeofactionflag, form, logid, MessageHistoryId) {
                scope.serviceactions(type, tocustid, typeofactionflag, undefined, form, logid, MessageHistoryId);
                scope.$emit("modalpopupclose", event);
            });
            scope.sendmessegescommon = function(type, tocustid) {
                scope.$emit('popuplogin', "myModalContent.html", tocustid);
            };
            scope.redirectToviewfullprofile = function(custid, logid) {
                scope.$emit('redirectToviewfullprofiles', custid, logid);
            };
            scope.photoRequestMethod = function(tocustid, toprofileieid, password) {
                password = password !== null && password !== "" ? 468 : 467;
                return $injector.invoke(function($http) {
                    return $http.get(app.apiroot + 'StaticPages/getSendMail_PhotoRequest_Customer', { params: { FromCustID: tocustid, ToCustID: logincustid, Category: password } })
                        .then(function(response) {
                            console.log(response);
                            if (response.data === 1) {
                                scope.$emit('successfailer', "Request sent suceessfully", "success");
                            } else {
                                scope.$emit('successfailer', "Request sent Fail", "warning");
                            }
                        });
                });
            };
            scope.photoalbum = function(custid, profileid, photocount) {
                scope.$emit('photoalbumopen', custid, profileid, photocount);
            };
            scope.divclassmask = function(logphotostatus, photo, photocount) {
                return successstoriesdata.maskclasspartner(logphotostatus, photo, photocount);
            };
            scope.indexvalue = function(index) {
                scope.indexvalues = index;
            };

            scope.modifyursearch = function() {
                scope.$emit('modifyursearchpartner', 1, 10);
            };

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
            //method to move slide to left or right arrow press
            scope.ArrowMove = function(carouselID) {
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
            };

            scope.checkitemGlobal = function(carouselID) {
                var checkitem = function() {
                    scope.checkitemnew(carouselID);
                };
                $("#" + carouselID).on("slid.bs.carousel", "", checkitem);
            };
            scope.pageload = function(carouselID, curProfileID, totalrecordsID, lnkLastSlide, playButtonID, pauseButtonID) {

                var totalItems = $('#' + carouselID).find('.item').length;
                if (totalItems === 0) {
                    scope.$emit('slideshowsubmit', 1, 10);
                    scope.checkitemnew(carouselID);
                }
                scope.ArrowMove(carouselID);
                scope.checkitemGlobal(carouselID);
            };
            scope.pageloadslidebind = function() {

                $('.list-inline li a').removeClass('selected');
                $('[id=carousel-selector-' + $('#slideShowCarousel').find('div.active').index() + ']').addClass('selected');
                var totalItems1 = $('#slideShowCarousel').find('.item').length;
                var currentIndex1 = $('#slideShowCarousel').find('div.active').index() + 1;
                if (scope.playpausebuttons === false) {
                    $('#slideShowCarousel').carousel('pause');
                    scope.playpausebuttons = false;
                    scope.pauseplaybuttons = true;
                }
                $('#slideShowCarousel').find('div.active').index();
                scope.lnkLastSlide = currentIndex1;

                if (currentslide < currentIndex1) {
                    if (logincustid !== undefined && logincustid !== null && logincustid !== "") {
                        if (parseInt(totalItems1) - parseInt(currentIndex1) === 4) {
                            scope.$emit('slideshowsubmit', totalItems1 + 1, totalItems1 + 10);

                            if ($("#slideShowCarousel .carousel-inner .item:first").hasClass("active")) {
                                $('#slideShowCarousel').find('.left').show();
                                $('#slideShowCarousel').find('.right').show();
                            }
                        }
                    } else {
                        if (parseInt(totalItems1) - parseInt(currentIndex1) === 0) {
                            scope.$emit('showloginpopup');
                        }
                    }
                }
                currentslide = currentIndex1;
            };
            scope.pageloadslide = function() {
                var currentslide = 1,
                    totalItems = $('#slideShowCarousel').find('.item').length;
                if (totalItems === 0) {
                    scope.$emit('slideshowsubmit', 1, 10);
                    if ($("#slideShowCarousel .carousel-inner .item:first").hasClass("active")) {
                        $('#slideShowCarousel').find('.left').show();
                        $('#slideShowCarousel').find('.right').show();
                    }
                    return false;
                }
                scope.pageloadslidebind();
                //play and pause function on click event
                $('#slideShowCarousel').carousel({
                    interval: 2000,
                    pause: "false"
                });

                //hide slide arrows for  first and last slide slides  
                var checkitem = function() {
                    scope.checkitemnew("slideShowCarousel");
                };
                $("#slideShowCarousel").on("slid.bs.carousel", "", checkitem);
            };

            scope.Slideshowpage = function() {

                scope.slideshowsearches = true;
                scope.playpausebuttons = false;
                scope.partnersearchessearches = false;
                scope.searchestype = true;
                scope.loadmore = false;
                scope.pageloadslide();
                scope.checkitemnew("slideShowCarousel");
                scope.pageload("slideShowCarousel", "lblcurrentprofile", "lblcurSlide", "lnkLastSlide", "playButton", "pauseButton");
                $('#slideShowCarousel').carousel('pause');
            };

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
            scope.nextslide = function() {

                scope.pageloadslidebind();
            };

            scope.prevslide = function() {
             
                $('.list-inline li a').removeClass('selected');
                $('[id=carousel-selector-' + $('#slideShowCarousel').find('div.active').index() + ']').addClass('selected');
                var totalItems1 = $('#slideShowCarousel').find('.item').length;
                var currentIndex1 = $('#slideShowCarousel').find('div.active').index() + 1;
                $('#slideShowCarousel').find('div.active').index();
                scope.lnkLastSlide = currentIndex1;
            };

        }
    };

}]);