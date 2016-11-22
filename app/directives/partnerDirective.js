app.directive("partnerData", ["$injector", 'authSvc', 'successstoriesdata', function($injector, authSvc, successstoriesdata) {
    var logincustid = authSvc.getCustId();
    var loginprofileid = authSvc.getProfileid();
    return {
        restrict: "E",
        scope: {
            array: '='
        },
        templateUrl: "templates/Commonpartnerprofiles.html",
        link: function(scope, element, attrs) {
            debugger;
            scope.typeofdiv = "Grid";
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
            scope.indexvalues;

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
            };
            scope.gridclick = function() {
                scope.typeofdiv = 'Grid';
                $('.search_result_items_main').attr("style", "");
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

            }
            scope.serviceactions = function(type, tocustid, typeofactionflag, profileid, form, logid, MessageHistoryId) {
                debugger;
                var indexvalue = scope.indexvalues;
                var object = {
                    IFromCustID: logincustid,
                    IToCustID: tocustid,
                    TypeofInsert: type,
                    EncriptedText: null,
                    EncryptedRejectFlagText: null,
                    EncriptedTextrvr: null,
                    EncryptedRejectFlagTextrvr: null,
                    StrHtmlText: form != undefined ? form.message : null,
                    MessageLinkId: typeofactionflag != undefined ? typeofactionflag : null,
                    MessageHistoryId: MessageHistoryId != undefined ? MessageHistoryId : null,
                    Logid: logid != undefined ? logid : null,
                    FromProfileID: loginprofileid,
                    ToProfileID: profileid != undefined ? profileid : null
                };
                scope.servicehttp(type, object);
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
                password = password != null && password != "" ? 468 : 467;
                return $injector.invoke(function($http) {
                    return $http.get(app.apiroot + 'StaticPages/getSendMail_PhotoRequest_Customer', { params: { FromCustID: tocustid, ToCustID: logincustid, Category: password } })
                        .then(function(response) {
                            console.log(response);
                            if (response.data == 1) {
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
                debugger;
                scope.indexvalues = index;
            };
        }
    };
}]);