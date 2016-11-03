app.directive("partnerData", ["$injector", function($injector) {
    return {
        restrict: "E",
        scope: {
            array: '='
        },
        templateUrl: "templates/Commonpartnerprofiles.html",
        link: function(scope, element, attrs) {
            scope.startindex = 1;
            scope.endindex = 9;
            scope.flag = 9;
            scope.loaderspin = false;
            scope.Norowsend = false;
            scope.PartnerProfilesnew = scope.array;
            scope.typeofdiv = "Grid";
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
            scope.servicehttp = function(type, object) {
                return $injector.invoke(function($http) {
                    return $http.post(app.apiroot + 'CustomerService/CustomerServiceBal', object)
                        .then(function(response) {
                            console.log(response);
                            switch (type) {
                                case "B":
                                    if (response.data == 1) {
                                        scope.$emit('successfailer', "bookmarked suceessfully", "success");
                                    } else {
                                        scope.$emit('successfailer', "bookmarked failed", "warning");
                                    }
                                    break;
                                case "E":
                                    if (response.data == 1) {
                                        scope.$emit('successfailer', "EXpressInterest done SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "EXpressInterest Fail", "warning");
                                    }
                                    break;
                                case "I":
                                    if (response.data == 1) {
                                        scope.$emit('successfailer', "Ignore SuccessFully", "success");
                                    } else {
                                        scope.$emit('successfailer', "Ignore profile Fail", "warning");
                                    }
                                    break;
                            }
                        });
                });

            }
            scope.serviceactions = function(type, tocustid, typeofactionflag) {
                var object = {
                    IFromCustID: 91022,
                    IToCustID: 91036,
                    TypeofInsert: type,
                    EncriptedText: null,
                    EncryptedRejectFlagText: null,
                    EncriptedTextrvr: null,
                    EncryptedRejectFlagTextrvr: null,
                    StrHtmlText: null,
                    MessageLinkId: null,
                    MessageHistoryId: null,
                    Logid: null
                };
                if (type == 'M') {
                    debugger;
                    scope.$emit('popuplogin', "myModalContent.html", tocustid);

                } else if (type == 'Ms') {
                    debugger;
                    object.TypeofInsert = 'M';
                    scope.servicehttp(type, object);

                } else {
                    scope.servicehttp(type, object);
                }
            };
            scope.$on('sendmsg', function(event, type, tocustid, typeofactionflag) {
                debugger;
                scope.serviceactions(type, tocustid, typeofactionflag);
            });
        }
    };
}]);