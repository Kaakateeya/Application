'use strict';
app.filter('dateFilter', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 === 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
app.constant('arrayConstants',
    {
        'MaritalStatus': [
            { "label": "Unmarried", "title": "Unmarried", "value": 43 },
            { "label": "Divorce", "title": "Divorce", "value": 44 },
            { "label": "Widow/Widower", "title": "Widow/Widower", "value": 45 },
            { "label": "Separated", "title": "Separated", "value": 46 }
        ],
        "height": [
            { "label": "--Select--", "title": "--select--", "value": "0" },
            { "label": "4'0 in - 122 cms", "title": "4'0 in - 122 cms", "value": 1 }, { "label": "4'1 in - 124 cms", "title": "4'1 in - 124 cms", "value": 2 },
            { "label": "4'2 in - 127 cms", "title": "4'2 in - 127 cms", "value": 3 },
            { "label": "4'3 in - 130 cms", "title": "4'3 in - 130 cms", "value": 4 }, { "label": "4'4 in - 132 cms", "title": "4'4 in - 132 cms", "value": 5 },
            { "label": "4'5 in - 135 cms", "title": "4'5 in - 135 cms", "value": 6 }, { "label": "4'6 in - 137 cms", "title": "4'6 in - 137 cms", "value": 7 },
            { "label": "4'7 in - 140 cms", "title": "4'7 in - 140 cms", "value": 8 },
            { "label": "4'8 in - 142 cms", "title": "4'8 in - 142 cms", "value": 9 },
            { "label": "4'9 in - 144 cms", "title": "4'9 in - 144 cms", "value": 10 }, { "label": "4'10 in - 147 cms", "title": "4'10 in - 147 cms", "value": 11 },
            { "label": "4'11 in - 150 cms", "title": "4'11 in - 150 cms", "value": 12 }, { "label": "5'0 in - 152 cms", "title": "5'0 in - 152 cms", "value": 13 },
            { "label": "5'1 in - 155 cms", "title": "5'1 in - 155 cms", "value": 14 }, { "label": "5'2 in - 157 cms", "title": "5'2 in - 157 cms", "value": 15 },
            { "label": "5'3 in - 160 cms", "title": "5'3 in - 160 cms", "value": 16 }, { "label": "5'4 in - 162 cms", "title": "5'4 in - 162 cms", "value": 17 },
            { "label": "5'5 in - 165 cms", "title": "5'5 in - 165 cms", "value": 18 }, { "label": "5'6 in - 167 cms", "title": "5'6 in - 167 cms", "value": 19 },
            { "label": "5'7 in - 170 cms", "title": "5'7 in - 170 cms", "value": 20 }, { "label": "5'8 in - 172 cms", "title": "5'8 in - 172 cms", "value": 21 },
            { "label": "5'9 in - 175 cms", "title": "5'9 in - 175 cms", "value": 22 }, { "label": "5'10 in - 177 cms", "title": "5'10 in - 177 cms", "value": 23 },
            { "label": "5'11 in - 180 cms", "title": "5'11 in - 180 cms", "value": 24 }, { "label": "6'0 in - 183 cms", "title": "6'0 in - 183 cms", "value": 25 },
            { "label": "6'1 in - 185 cms", "title": "6'1 in - 185 cms", "value": 26 }, { "label": "6'2 in - 188 cms", "title": "6'2 in - 188 cms", "value": 27 },
            { "label": "6'3 in - 190 cms", "title": "6'3 in - 190 cms", "value": 28 }, { "label": "6'4 in - 193 cms", "title": "6'4 in - 193 cms", "value": 29 },
            { "label": "6'5 in - 195 cms", "title": "6'5 in - 195 cms", "value": 30 }, { "label": "6'6 in - 198 cms", "title": "6'6 in - 198 cms", "value": 31 },
            { "label": "6'7 in - 200 cms", "title": "6'7 in - 200 cms", "value": 32 }, { "label": "6'8 in - 203 cms", "title": "6'8 in - 203 cms", "value": 33 },
            { "label": "6'9 in - 205 cms", "title": "6'9 in - 205 cms", "value": 34 }, { "label": "6'10 in - 208 cms", "title": "6'10 in - 208 cms", "value": 35 },
            { "label": "6'11 in - 210 cms", "title": "6'11 in - 210 cms", "value": 36 }, { "label": "7'0 in - 213 cms\t", "title": "7'0 in - 213 cms\t", "value": 37 },
            { "label": "7'1 in - 215 cms\t", "title": "7'1 in - 215 cms\t", "value": 38 }, { "label": "7'2 in - 218 cms\t", "title": "7'2 in - 218 cms\t", "value": 39 }
        ],
        "Religion": [
            { "label": "--Select--", "title": "--select--", "value": "0" },
            { "label": "Hindu", "title": "Hindu", "value": 1 },
            { "label": "Christian", "title": "Christian", "value": 2 },
            { "label": "Muslim", "title": "Muslim", "value": 3 },
            { "label": "Other", "title": "Other", "value": 6 },
            { "label": "Catholic", "title": "Catholic", "value": 9 },
            { "label": "Roma Catholic", "title": "Roma Catholic", "value": 15 },
            { "label": "ROMAN CATHOLIC", "title": "ROMAN CATHOLIC", "value": 16 }
        ],
        "Mothertongue": [
            { "label": "Telugu", "title": "Telugu", "value": 1 },
            { "label": "Tamil", "title": "Tamil", "value": 2 },
            { "label": "Kannada", "title": "Kannada", "value": 3 },
            { "label": "Hindi", "title": "Hindi", "value": 4 },
            { "label": "Punjabi", "title": "Punjabi", "value": 5 },
            { "label": "Urdu", "title": "Urdu", "value": 6 },
            { "label": "Lambadi", "title": "Lambadi", "value": 7 },
            { "label": "Marati", "title": "Marati", "value": 8 },
            { "label": "Gujaraathi", "title": "Gujaraathi", "value": 9 },
            { "label": "English", "title": "English", "value": 10 },
            { "label": "Malayalam", "title": "Malayalam", "value": 11 },
            { "label": "Saurashtra", "title": "Saurashtra", "value": 12 }, { "label": "Orea", "title": "Orea", "value": 13 },
            { "label": "telugu", "title": "telugu", "value": 14 }
        ],
        "educationcategory": [
            { "label": "Bachelors in Engineering", "title": "Bachelors in Engineering", "value": 1 },
            { "label": "Bachelors in Degree", "title": "Bachelors in Degree", "value": 2 },
            { "label": "Diploma", "title": "Diploma", "value": 3 },
            { "label": "Doctorate/phd", "title": "Doctorate/phd", "value": 4 },
            { "label": "Masters in Engineering", "title": "Masters in Engineering", "value": 5 },
            { "label": "Bachelors in Medicine", "title": "Bachelors in Medicine", "value": 6 },
            { "label": "Masters in Degree", "title": "Masters in Degree", "value": 7 },
            { "label": "Finance - ICWAI/CA/CS", "title": "Finance - ICWAI/CA/CS", "value": 10 },
            { "label": "Union Public Service Commision-Civil Services", "title": "Union Public Service Commision-Civil Services", "value": 11 },
            { "label": "Masters in Medicine", "title": "Masters in Medicine", "value": 13 },
            { "label": "Below Graduation", "title": "Below Graduation", "value": 15 },
            { "label": "Not given", "title": "Not given", "value": 21 },
            { "label": "Other", "title": "Other", "value": 22 }
        ],
        "visastatus": [
            { "label": "Student Visa", "title": "Student Visa", "value": 284 },
            { "label": "Work Permit", "title": "Work Permit", "value": 285 },
            { "label": "Temporary Visa", "title": "Temporary Visa", "value": 286 },
            { "label": "Citizen", "title": "Citizen", "value": 521 },
            { "label": "Permanent Resident", "title": "Permanent Resident", "value": 522 },
            { "label": "Green Card", "title": "Green Card", "value": 553 }
        ],
        "stars": [
            { "label": "Bharani", "title": "Bharani", "value": 2 },
            { "label": "Krithika", "title": "Krithika", "value": 3 },
            { "label": "Rohini", "title": "Rohini", "value": 4 },
            { "label": "Mrigasira", "title": "Mrigasira", "value": 5 },
            { "label": "Arudra", "title": "Arudra", "value": 6 },
            { "label": "Punarvasu", "title": "Punarvasu", "value": 7 },
            { "label": "Pushyami", "title": "Pushyami", "value": 8 },
            { "label": "Aslesha", "title": "Aslesha", "value": 9 },
            { "label": "Makha", "title": "Makha", "value": 10 },
            { "label": "Pubba", "title": "Pubba", "value": 11 },
            { "label": "Utharapalguni", "title": "Utharapalguni", "value": 12 },
            { "label": "Hastham", "title": "Hastham", "value": 13 },
            { "label": "Chitta", "title": "Chitta", "value": 14 },
            { "label": "Swathi", "title": "Swathi", "value": 15 },
            { "label": "Vishaka", "title": "Vishaka", "value": 16 },
            { "label": "Anuradha", "title": "Anuradha", "value": 18 },
            { "label": "Jesta", "title": "Jesta", "value": 19 },
            { "label": "Moola", "title": "Moola", "value": 20 },
            { "label": "Poorvashada", "title": "Poorvashada", "value": 21 },
            { "label": "Utharashada", "title": "Utharashada", "value": 22 },
            { "label": "Sravanam", "title": "Sravanam", "value": 23 },
            { "label": "Dhanishta", "title": "Dhanishta", "value": 24 },
            { "label": "Sathabisham", "title": "Sathabisham", "value": 25 },
            { "label": "Poorvabadra", "title": "Poorvabadra", "value": 26 },
            { "label": "Uthirabadra", "title": "Uthirabadra", "value": 27 },
            { "label": "Revathi", "title": "Revathi", "value": 28 },
            { "label": "Anuradha", "title": "Anuradha", "value": 30 },
            { "label": "Arudra", "title": "Arudra", "value": 31 },
            { "label": "Ashwini", "title": "Ashwini", "value": 32 },
            { "label": "Aslesha", "title": "Aslesha", "value": 33 },
            { "label": "Chitra", "title": "Chitra", "value": 34 },
            { "label": "Dhanshita", "title": "Dhanshita", "value": 35 },
            { "label": "Hasta", "title": "Hasta", "value": 36 },
            { "label": "Jyehsta", "title": "Jyehsta", "value": 37 },
            { "label": "Kritika", "title": "Kritika", "value": 38 },
            { "label": "Magha", "title": "Magha", "value": 39 },
            { "label": "Moola", "title": "Moola", "value": 40 },
            { "label": "Mrigasira", "title": "Mrigasira", "value": 41 },
            { "label": "Poorvabhadra", "title": "Poorvabhadra", "value": 42 },
            { "label": "Poorvashadha", "title": "Poorvashadha", "value": 43 },
            { "label": "Punarvasu", "title": "Punarvasu", "value": 44 },
            { "label": "Poorvaphalguni", "title": "Poorvaphalguni", "value": 45 },
            { "label": "Pushya", "title": "Pushya", "value": 46 },
            { "label": "Satabisha", "title": "Satabisha", "value": 47 },
            { "label": "Sravana", "title": "Sravana", "value": 48 },
            { "label": "Swati", "title": "Swati", "value": 49 },
            { "label": "Uttarashadha", "title": "Uttarashadha", "value": 50 },
            { "label": "Uttarabhadrapada", "title": "Uttarabhadrapada", "value": 51 },
            { "label": "Uttaraphalguni", "title": "Uttaraphalguni", "value": 52 },
            { "label": "Visakha", "title": "Visakha", "value": 53 },
            { "label": "Uttara", "title": "Uttara", "value": 54 },
            { "label": "Uttarabhadra", "title": "Uttarabhadra", "value": 55 }
        ]

    }
);
app.constant('config', function() {
    return {
        dbPath: '',
        imagepath: '',
        select: 0
    };
});
// app.directive('myAlert', function($modal, $log) {
//     return {
//         restrict: 'E',
//         scope: {
//             mode: '@',
//             boldTextTitle: '@',
//             textAlert: '@'
//         },
//         link: function(scope, elm, attrs) {

//             scope.data = {
//                 mode: scope.mode || 'info',
//                 boldTextTitle: scope.boldTextTitle || 'title',
//                 textAlert: scope.textAlert || 'text'
//             }

//             var ModalInstanceCtrl = function($scope, $modalInstance, data) {
//                 console.log(data);
//                 $scope.data = data;
//                 $scope.close = function() {
//                     $modalInstance.close($scope.data);
//                 };
//             };
//             elm.parent().bind("click", function(e) {
//                 scope.open();
//             });
//             scope.open = function() {
//                 var modalInstance = $modal.open({
//                     templateUrl: 'templates\dynamicAlerts.html',
//                     controller: ModalInstanceCtrl,
//                     backdrop: true,
//                     keyboard: true,
//                     backdropClick: true,
//                     size: 'lg',
//                     resolve: {
//                         data: function() {
//                             return scope.data;
//                         }
//                     }
//                 });
//                 modalInstance.result.then(function(selectedItem) {
//                     scope.selected = selectedItem;
//                 }, function() {
//                     $log.info('Modal dismissed at: ' + new Date());
//                 });
//             }
//         }
//     };
// })

// app.directive('modalDialog', function() {
//     debugger;
//     return {
//         restrict: 'E',
//         scope: {
//             show: '='
//         },
//         replace: true, // Replace with the template below
//         transclude: true, // we want to insert custom content inside the directive
//         link: function(scope, element, attrs) {


//         },
//         template: 'templates\dynamicAlerts.html' // See below
//     };
// });
// app.directive('notification', ['$timeout', function($timeout) {
//     debugger;
//     return {
//         restrict: 'E',
//         template: "<div class='modal fade' id='AlertModal' role='dialog' style=z-index: 100000000000!important'><div class='alert alert-{{alertData.type}}' ng-show='alertData.message' role='alert' data-notification='{{alertData.status}}'>{{alertData.message}}</div></div>",
//         scope: {
//             alertData: "="
//         },
//         replace: true
//     };
// }]);

app.directive('igLogin', function() {
    return {
        restrict: 'E',
        replace: true,
        // template: '<div class="alert alert-danger fade">' +
        //     '<button type="button" class="close" data-dismiss="alert">×</button>' +
        //     '<strong>Alert!</strong> Here is my message..' +
        //     '</div>',
        template: '<div class="modal fade" id="myModal" role="dialog">' +
            '<div class="modal-dialog">'


            +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            ' <button type="button" class="close" data-dismiss="modal">&times;</button>' +
            ' <h4 class="modal-title">Modal Header</h4>' +
            ' </div>' +
            ' <div class="modal-body">' +
            ' <p>Some text in the modal.</p>' +
            '  </div>' +
            ' <div class="modal-footer">' +
            '  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
            '  </div>' +
            '</div>'

            +
            ' </div>' +
            '</div>',
        link: function(scope, element, attrs) {

                scope.$on('alertzero', function() {
                    // debugger;
                    // scope.loggingIn = true;
                    // $(".alert").removeClass("in").show();
                    // $(".alert").delay(2000).addClass("in").fadeOut(2000);

                    $("#myModal").modal();

                });

            }
            //,
            // controller: function($scope) {
            //     $scope.$watch('loggingIn', function() {
            //         debugger;
            //         if ($scope.loggingIn) {
            //             $(".alert").removeClass("in").show();
            //             $(".alert").delay(100).addClass("in").fadeOut(2000);
            //         };
            //     });
            // }
    };
});
// AngularJS: 1.3.15
// bootstrap-multiselect: 0.9.6
//var statticdata=require('./staticArrayBindings.json');
app.directive('multiselectdropdown', ['arrayConstants', 'SelectBindService', function(cons, service) {
    return {
        require: 'ng-model',
        scope: {
            ngModel: '=',
            typeofdata: "=",
            parentVal: "="
        },
        link: function(scope, element, attrs) {
            scope.options = [];

            scope.databind = function(data) {
                element.multiselect('dataprovider', data);
            };
            switch (scope.typeofdata) {
                case 'MaritalStatus':
                    scope.databind(cons.MaritalStatus);
                    break;

                case 'height':
                    scope.databind(cons.height);
                    break;

                case 'Religion':
                    scope.databind(cons.Religion);
                    break;

                case 'Mothertongue':
                    scope.databind(cons.Mothertongue);
                    break;

                case 'educationcategory':
                    scope.databind(cons.educationcategory);
                    break;

                case 'visastatus':
                    scope.databind(cons.visastatus);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'stars':
                    scope.databind(cons.stars);
                    break;

                case 'Country':
                    service.countrySelect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
                case 'Caste':
                    service.casteselect().then(function(response) {
                        var option = [];
                        option.push({ "label": "--select--", "title": "--select--", "value": 0 });
                        _.each(response.data, function(item) {
                            option.push({ "label": item.Name, "title": item.Name, "value": item.ID });
                        });
                        scope.databind(option);
                    });
                    break;
            }


            element.multiselect({
                buttonClass: 'btn',
                buttonWidth: 'auto',
                inheritClass: true,
                includeSelectAllOption: true,
                disableIfEmpty: true,
                nonSelectedText: 'Any',
                allSelectedText: 'All Selected',
                selectAllText: 'Check all!',
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                filterPlaceholder: 'Type To Search',
                buttonContainer: '<div class="btn-group" />',
                maxHeight: false,
                select: ['1', '2']
            });
            //element.multiselect('setOptions', secondConfigurationSet);
            //element.multiselect('rebuild');
            // Watch for any changes to the length of our select element
            scope.$watch(function() {
                return element[0].length;
            }, function() {
                scope.$applyAsync(element.multiselect('rebuild'));
            });

            // Watch for any changes from outside the directive and refresh
            scope.$watch(attrs.ngModel, function() {
                element.multiselect('refresh');
            });


        }

    };
}]);
app.directive("partnerData", function() {
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
        }
    };
});
app.directive('setClassWhenAtTop', function($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's offset top relative to document

            $win.on('scroll', function(e) {
                element[($win.scrollTop() >= offsetTop) ? 'addClass' : 'removeClass'](topClass);
            });
        }
    };
});
app.controller('Controllerpartner', ['$scope', 'customerDashboardServices', 'authSvc', function(scope, customerDashboardServices, authSvc) {

    var logincustid = authSvc.getCustId();

    scope.custid = logincustid !== undefined && logincustid !== null && logincustid !== "" ? logincustid : null;
    scope.typeodbind = 'C';
    scope.typeofdiv = "Grid";
    scope.PartnerProfilesnew = [];
    scope.counts = 1;
    scope.bindallcounts = {};
    scope.lblUHaveviewd = 'Suitable Profiles that match you';
    scope.staticNotification = ["New profiles waiting for you from last month", "your photograph has been viewed by members"];
    scope.gettingpartnerdata = function(type, frompage, topage, headertext) {
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

        if (headertext === "1" || headertext === "2" || headertext === "3") {
            scope.flagexpress = 9;
            if (headertext === "1") {
                yourFilterexpress = scope.expressmyinterest.indexOf('I interesed in') != -1 ? 'I' : null;
                oppfilterexpress = scope.expressmyinterest.indexOf('I interesed in') == -1 ? 'I' : null;
                TypeOfReportexpress = scope.expressmyinterest.indexOf('I interesed in') != -1 ? 'R' : 'S';
            } else if (headertext === "2") {
                yourFilterexpress = scope.expressmynotinterest.indexOf('I skipped') != -1 ? 'NI' : null;
                oppfilterexpress = scope.expressmynotinterest.indexOf('I skipped') == -1 ? 'NI' : null;
                TypeOfReportexpress = scope.expressmynotinterest.indexOf('I skipped') != -1 ? 'R' : 'S';
            } else {
                yourFilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') != -1 ? 'V,NV' : null;
                oppfilterexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') == -1 ? 'V,NV' : null;
                TypeOfReportexpress = scope.expressmynotviewed.indexOf('I Viewed/NotViewed') != -1 ? 'R' : 'S';
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
        debugger;
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
                    if (scope.PartnerProfilesnew[0] != null && scope.PartnerProfilesnew[0] != undefined && scope.PartnerProfilesnew[0] != null) {
                        scope.expressmyinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouProceed : scope.PartnerProfilesnew[0].OppProceed;
                        scope.expressmynotinterestcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].Youskipped : scope.PartnerProfilesnew[0].Oppskipped;
                        scope.expressmynotviewedcount = TypeOfReport === 'R' ? scope.PartnerProfilesnew[0].YouPending : scope.PartnerProfilesnew[0].Opppending;
                        scope.YouProceed = scope.PartnerProfilesnew[0].YouProceed;
                        scope.Youskipped = scope.PartnerProfilesnew[0].Youskipped;
                        scope.YouPending = scope.PartnerProfilesnew[0].YouPending;
                        scope.OppProceed = scope.PartnerProfilesnew[0].OppProceed;
                        scope.Oppskipped = scope.PartnerProfilesnew[0].Oppskipped;
                        scope.Opppending = scope.PartnerProfilesnew[0].Opppending;
                        scope.PartnerProfilesnewTotalrows = response.data[0] != undefined && response.data[0] != null && response.data[0] != "" ? response.data[0].TotalRows : 0;
                        scope.lblUHaveviewd = TypeOfReport === 'R' ? 'Interest Expressed By ' + scope.Gendercustomer : headertext;
                        scope.totalrows = scope.PartnerProfilesnew[0].TotalRows;
                        scope.loadmoreexpress = scope.PartnerProfilesnew[0].TotalRows > 9 ? true : false;
                        scope.Norowsendexpress = (scope.PartnerProfilesnew[0].TotalRows === scope.endindexexpress) || scope.PartnerProfilesnew[0].TotalRows < scope.endindexexpress ? true : false;
                    }

                } else {
                    if (scope.PartnerProfilesnew[0] != null && scope.PartnerProfilesnew[0] != undefined && scope.PartnerProfilesnew[0] != null) {
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
        }
    });

    scope.zerorecorsalert = function() {
        scope.$broadcast('alertzero');
        //  alert("sorry No Records Found");
    };
    scope.loadmorehideshow = function() {
        debugger;
        if (scope.PartnerProfilesnew.length > 0) {
            scope.endindexexpress = (scope.totalrows > scope.endindexexpress === true) ? scope.endindexexpress : scope.totalrows;
            scope.loadmoreexpress = (scope.totalrows > scope.endindexexpress) ? true : false;
            scope.Norowsendexpress = (scope.totalrows === scope.endindexexpress) ? true : false;

        }
    };
    scope.allloadmorepaging = function() {
        debugger;
        scope.spinexpress = true;
        scope.Norowsendexpress = false;
        switch (scope.typeofdiv) {
            case "Expressinterest":
            case "Expressinterestsend":
                scope.flagexpress += 9;
                scope.startindexexpress = scope.flagexpress - 8;
                scope.endindexexpress = scope.flagexpress;
                scope.loadmorehideshow();
                scope.expressinterestselect(TypeOfReportexpress, yourFilterexpress, oppfilterexpress, scope.startindexexpress, scope.endindexexpress);
                scope.spinexpress = false;
                break;

        }
    };

    scope.chatsdiv = function(status, fromindex, toindex) {


    }
    scope.showLoginxxxx = function() {
        //scope.$broadcast('alertzero');
        $("#myModalsss").modal();
        debugger;
        // scope.loggingIn = true;
        // $(".alert").removeClass("in").show();
        // $(".alert").delay(2000).addClass("in").fadeOut(2000);
    };


}]);
app.controller('headctrl', ['$scope', 'authSvc', function(scope, authSvc) {
    scope.showhidetestbuttons = function() {
        var datatinfo = authSvc.user();
        if (datatinfo.custid !== "" && datatinfo.custid !== undefined && datatinfo.custid !== null) {
            scope.loginstatus = false;
            scope.loginoutstatus = true;
            scope.usernamepersonal = datatinfo.username;
            scope.profileid = datatinfo.profileid;
            scope.paidstatus = datatinfo.paidstatus == 1 ? "Paid" : "unpaid";
            scope.profilepic = datatinfo.profilepic;
            scope.withlogin = true;
            scope.withoutlogin = false;
        } else {
            scope.loginstatus = true;
            scope.loginoutstatus = false;
            scope.usernamepersonal = "";
            scope.profileid = "";
            scope.paidstatus = "";
            scope.profilepic = "";
            scope.withlogin = false;
            scope.withoutlogin = true;
        }
    };
    scope.loginstatus = true;
    scope.loginoutstatus = false;
    scope.loginpopup = false;
    scope.withlogin = false;
    scope.withoutlogin = true;
    scope.showhidetestbuttons();
    scope.divloginblock = function() {
        scope.loginpopup = true;
        $('.login_block_header').toggle();
    };
    scope.validate = function() {

        if ((scope.username).indexOf("@") != -1) {

            if (!scope.ValidateEmail(scope.username)) {
                scope.username = '';
                alert(" Please enter valid ProfileID/Email");
                return false;
            } else {
                return true;
            }
        } else {
            if (!scope.Validatnumber(scope.username) || (scope.username).length != 9) {
                alert("Please enter valid ProfileID/Email");
                scope.username = '';
                return false;

            } else {
                return true;
            }

        }
    };
    scope.loginsubmit = function() {

        if (scope.username === "" || scope.username === null || scope.username === "ProfileID/EmailID") {
            alert("Please enter user name");
            return false;
        } else if (scope.password === "" || scope.password === null || scope.password === "Enter the Password") {

            alert("Please enter password");
            return false;
        } else {
            if (scope.validate()) {
                authSvc.login(scope.username, scope.password).then(function(response) {
                    authSvc.user(response.response !== null ? response.response[0] : null);
                    var custidlogin = authSvc.getCustId();
                    window.location = "#/home";
                    scope.loginpopup = false;
                    scope.showhidetestbuttons();
                });
            }
        }
    };

    scope.ValidateEmail = function(email) {
        var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return expr.test(email);
    };
    scope.Validatnumber = function(num) {
        var expr1 = /[0-9 -()+]+$/;
        return expr1.test(num);
    };
    scope.ClearlocalStorage = function() {
        authSvc.logout();
        window.location = "#/";

    };
}]);
app.controller('home', ['$scope', 'homepageservices', 'authSvc', 'successstoriesdata', function(scope, homepageservices, authSvc, successstoriesdata) {
    scope.fromge = 1;
    scope.topage = 5;
    scope.homeinit = function() {
        successstoriesdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
            scope.successstoriesarray = response.data;
        });
    };

    scope.Age = function() {
        scope.test = [];
        scope.test = [{ label: "--Select--", title: "--select--", value: "0" }];
        for (var i = 18; i < 78; i++) {
            scope.test.push({ label: i + ' years', title: i + ' years', value: i });
        }
        return scope.test;

    };
    scope.gender = "2";
    scope.arrayAge = scope.Age();
    scope.Religion = "Religion";
    scope.Country = "Country";
    scope.Caste = "Caste";
    scope.divloginblock = function() {
        $('.login_block_header').toggle();
    };
    scope.emailss = "/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/";
    scope.validate = function() {

        if ((scope.username).indexOf("@") != -1) {

            if (!scope.ValidateEmail(scope.username)) {
                scope.username = '';
                alert(" Please enter valid ProfileID/Email");
                return false;
            } else {
                return true;
            }
        } else {
            if (!scope.Validatnumber(scope.username) || (scope.username).length != 9) {
                alert("Please enter valid ProfileID/Email");
                scope.username = '';
                return false;

            } else {
                return true;
            }

        }
    };
    scope.loginsubmit = function() {

        if (scope.username === "" || scope.username === null || scope.username === "ProfileID/EmailID") {
            alert("Please enter user name");
            return false;
        } else if (scope.password === "" || scope.password === null || scope.password === "Enter the Password") {

            alert("Please enter password");
            return false;
        } else {
            if (scope.validate()) {
                authSvc.login(scope.username, scope.password).then(function(response) {

                    authSvc.user(response.response !== null ? response.response[0] : null);
                    // var d = authSvc.getCustId();
                    // var dd = authSvc.user();
                    window.location = "#/home";
                });
            }
        }
    };
    scope.ValidateEmail = function(email) {
        var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return expr.test(email);
    };
    scope.Validatnumber = function(num) {
        var expr1 = /[0-9 -()+]+$/;
        return expr1.test(num);
    };


    scope.ValidatequickRegister = function() {

        var srchobject = {};
        srchobject.intCusID = null;
        srchobject.strCust_id = null;
        srchobject.intGender = scope.gender;
        srchobject.FromAge = null;
        srchobject.ToAge = null;
        srchobject.iFromHeight = null;
        srchobject.iToHeight = null;
        srchobject.Maritalstatus = null;
        srchobject.intReligionID = null;
        srchobject.MotherTongue = null;
        srchobject.Caste = null;
        srchobject.iPhysicalstatus = null;
        srchobject.Complexion = null;
        srchobject.Country = null;
        srchobject.State = null;
        srchobject.Visastatus = null;
        srchobject.Educationcategory = null;
        srchobject.Education = null;
        srchobject.Professiongroup = null;
        srchobject.iFromSal = null;
        srchobject.iToSal = null;
        srchobject.iManglinkKujaDosham = null;
        srchobject.iStarLanguage = null;
        srchobject.Stars = null;
        srchobject.iDiet = null;
        srchobject.intPhotoCount = null;
        srchobject.StartIndex = null;
        srchobject.EndIndex = null;
        srchobject.i_Registrationdays = null;
        srchobject.iAnnualincome = null;
        srchobject.flagforurl = null;
        srchobject.SavedSearch = null;
        srchobject.SearchPageID = null;
        srchobject.PageName = null;
        srchobject.SavedSearchresultid = null;
        srchobject.Searchresult = null;
    };

}]);
app.controller('mobileverifyController',function(){


});
app.controller("payment",function()
{

});
app.controller("registration", function () {

});
app.controller("registrationReg", function () {

});
app.controller('advancesearchCtrl', ['$scope', function (scope) {
    scope.data = [];
}]);
app.controller('Generalsearch',['$scope',function(scope){
    scope.data=[];
}]);
app.controller('profileidsrch',['$scope',function(scope){
    scope.data=[];
}]);
app.controller('savedsearchCtrl', ['$scope', function (scope) {
    scope.data = [];
}]);
app.controller('aboutus', ['$scope', function (scope) {
}]);
 app.controller("AccordionDemoCtrl", ['$scope', function(scope) {
     scope.groups = [{
             title: "Dynamic Group Header - 1",
             content: "Dynamic Group Body - 1",
             open: false
         },
         {
             title: "Dynamic Group Header - 2",
             content: "Dynamic Group Body - 2",
             open: false
         }
     ];

     scope.addNew = function() {
         scope.groups.push({
             title: "New One Created",
             content: "Dynamically added new one",
             open: false
         });
     };

 }]);
app.controller('ModalDemoCtrl', function($uibModal, $log, $scope) {
    $scope.ddlvals = "aaaa";
    var $ctrl = this;

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.obj1 = [
        { label: "aaaa", title: "aaaa", value: "1" }, { label: "bbb", title: "bbb", value: "2" }, { label: "ccc", title: "ccc", value: "3" }, { label: "ddd", title: "ddd", value: "4" }

    ];
    $scope.selectedvals = [2, 3];
    $ctrl.animationsEnabled = true;
    $ctrl.open = function(size) {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {
                items: function() {
                    return $ctrl.items;
                }
            }
        });

    };

    $scope.DropDownChnaged = function() {
        $scope.DropDownStatus = $scope.dropValue;
    };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function($uibModalInstance, items, $scope) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };
    $scope.obj1 = [
        { label: "aaaa", title: "aaaa", value: "1" }, { label: "bbb", title: "bbb", value: "2" }, { label: "ccc", title: "ccc", value: "3" }, { label: "ddd", title: "ddd", value: "4" }

    ];
    $ctrl.ok = function() {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});


function getvalues(test) {

    var countries = [];
    $.each($("#" + test + " option:selected"), function() {
        countries.push($(this).val());
    });
    alert(JSON.stringify(countries));
}
app.controller("faqs", ['$scope', function(scope) {
    scope.filters = {
        search: ''
    };


    scope.arrayfaqs = [
        { questons: 'How do I Bookmark profile?', answers: 'In every view profile you will find the book mark option for future reference before you express interest to filter suitable profiles' },
        { questons: 'How do I delete my profile? (Manage Profile)', answers: 'You can delete your profile including your picture by clicking on Delete Profile in the services page after you login. You have to login to your account to delete your profilfre.4r554r' },
        { questons: 'How do I edit profile?', answers: 'You can edit details by going to Menu bar?MY ACCOUNT?EDIT PROFILE.(Note: You can edit all the fields except Name, Lastname, Date of Birth, Height & Caste. If you want to edit them contact us @ 91-40-30666666.' },
        { questons: 'How do I ignore profile and how do I remove ignore profile from the list?', answers: 'In every view profile your will find an ignore profile(with (X) Into symbol)to avoid profile from your list. All ignored profiles list can be checked in the Option MATCHES?IGNORED PROFILES(Note: You cannot remove ignored profile completely but you can either bookmark or express interest)' },
        { questons: 'How do I overwrite an existing photo? (Photograph)', answers: 'Go to Manage photo ,delete the existing photo first to upload new recent photo which will be processed during the business hours and made visible .' },
        { questons: 'How do I register?', answers: 'Click www.kaakateeya.com and get registered for whom your searching(Bride/Groom) with the details' },
        { questons: 'How do I restrict other members from viewing my Profile? (Manage Profile)', answers: 'Click on Hide profile in the profile settlings in my account menu option' },
        { questons: 'How do I Upload my Photograph and which format is acceptable?', answers: 'You can upload upto 3 photographs of JPEG or jpgFormat by going to Menu bar?MY ACCOUNT?MANAGE PHOTO and upload photo. We will activate your photo within 24 hours after we review it. If you experience any issues in uploading your photo please send us at photos@telugumarriages.com or send them through WHATSAPP 9848535373 with your PROFILE ID and we will upload it for you.' },
        { questons: 'How to show interest', answers: 'to show interest to a profile which suits your re-quirements click on Express interest after you completely view that profile ,then proceed if its ok' },
        { questons: 'I am a FREE Member. Can I send any email messages to other members? (Contact Members)', answers: 'If you are registered as a FREE member you cannot send Email Messages to other Members.' },
        { questons: 'I am a FREE service member. How do I upgrade my profile? (Paid Member)', answers: 'Log on to www.kaakateeya.comgo to Menu bar?MY PACKAGE?UPGRADE MEMBERSHIP and choose the package and upgrade by using any visa debit/credit card, also input your correct billing address whatever provided in the banker of the card' },
        { questons: 'I am a paid member of Kaakateeya Marriages India office. I cannot view pictures or request profiles online? (Kaakateeya Marriages Indian Offices)', answers: 'Kaakateeya Marriages India office registered members are only allowed to view, modify their profile and search new profiles on Kaakateeya.com. There is an additional fee to view pictures,addition details also can express interest . online membership details are in the UPGRADE MEMBERSHIP option in UPGRADE menu option' },
        { questons: 'I Forgot Password who can I retrieve password?', answers: 'You can only reset your password by clicking on forgot password link with your registered primary email id' },
        { questons: 'I uploaded my photo but I cannot see it? (Photograph)', answers: 'New photograph uploaded by you will be processed during the business hours from 10 am to 6 pm .' },
        { questons: 'Terms & Conditions to get Register with kaakateeya.com?', answers: 'Everyone who is for marriage can register profile by giving details with genuine information. You can register a new profile with UNIQUE EMAIL AND UNIQUE MOBILE NUMBER. If you get a message like “email id exists” or “mobile number exists”then click on forget password to reset your password otherwise contact us @ 91-40-30666666' },
        { questons: 'What individually identifiable information is logged on your server? (Privacy Policy)', answers: 'All email messages sent using our website Kaakateeya.com are logged on the server. These messages are deleted every week.' },
        { questons: 'What is Bookmarked By section? (Bookmarks)', answers: 'If somebody Bookmarks your profile, you can check the list in the "Who Bookmarked me " in the menu' },
        { questons: 'What is Online Service and Offline(OFFICE) Service?', answers: 'Online Services: You can Register Freely into www.kaakateeya.com and search for Brides/Grooms based on your requirement. You can also become a paid member to express interest, Send and receive messages directly by yourself Offline(OFFICE) Services: Offline Service is provided by our service provider/relationship manager wherein you will be sent profiles to your email regularly as per your requirement manually on behalf of you and will involve in arranging match meetings(PelliChupulu) to Settle' },
        { questons: 'What picture formats are accepted? (Photograph)', answers: 'Pictures of .jpg ,Png etc formats can be uploaded ' },
        { questons: 'Who receives the Messages I send using messages button', answers: 'your messages are sent to the other member ,which will be displayed in my contact list ,messages option' }
    ];
    scope.styleanswer = false;
    scope.activeClass = 'faqs_list_main_item';
}]);
app.directive('faqdirective', function() {
    return {
        link: function(scope, element, attrs) {

            scope.expanall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = true;
                    item.activeClass = 'faqs_list_main_item active';
                });
            };
            scope.collapseall = function() {
                _.each(scope.arrayfaqs, function(item) {
                    item.styleanswer = false;
                    item.activeClass = 'faqs_list_main_item';
                });


            };
            scope.toggleans = function(faqs) {
                faqs.styleanswer = !faqs.styleanswer;
                faqs.activeClass = (faqs.styleanswer === true ? 'faqs_list_main_item active' : 'faqs_list_main_item');

            };
        }
    };
});
app.controller('feedbackCtrl', ['$scope', 'reCAPTCHA', 'feedbacksubmit', 'authSvc', function(scope, reCAPTCHA, feedbacksubmit, authSvc) {
    reCAPTCHA.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
    scope.optionhereabout = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Search Engine', title: 'Search Engine', value: 481 },
        { label: 'Newspaper', title: 'Newspaper', value: 482 },
        { label: 'Magzine', title: 'Magzine', value: 483 },
        { label: 'Friend', title: 'Friend', value: 484 },
        { label: 'Email', title: 'Email', value: 485 },
        { label: 'No Answer', title: 'No Answer', value: 486 }
    ];
    scope.improveourwebsite = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Search', title: 'Search', value: 487 },
        { label: 'Registration', title: 'Registration', value: 488 },
        { label: 'Login', title: 'Login', value: 489 },
        { label: 'FAQ', title: 'FAQ', value: 490 },
        { label: 'About Us', title: 'About Us', value: 491 },
        { label: 'No Answer', title: 'No Answer', value: 492 }
    ];

    scope.prices = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Expensive', title: 'Expensive', value: 493 },
        { label: 'OK', title: 'OK', value: 494 },
        { label: 'Cheap', title: 'Cheap', value: 495 },
        { label: 'No comments', title: 'No comments', value: 496 },
        { label: 'No Answer', title: 'No Answer', value: 497 },
    ];

    scope.downloadtime = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Fast', title: 'Fast', value: 498 },
        { label: 'Average', title: 'Average', value: 499 },
        { label: 'Slow', title: 'Slow', value: 500 },
        { label: 'No Answer', title: 'No Answer', value: 501 },
    ];

    scope.yourratethesearch = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Valuable', title: 'Valuable', value: 507 },
        { label: 'Average', title: 'Average', value: 508 },
        { label: 'Bad', title: 'Bad', value: 509 },
        { label: 'No Answer', title: 'No Answer', value: 510 },
    ];
    scope.comparesites = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Better', title: 'Better', value: 502 },
        { label: 'Same', title: 'Same', value: 503 },
        { label: 'Bad', title: 'Bad', value: 504 },
        { label: 'No Answer', title: 'No Answer', value: 505 },
    ];
    scope.recomendedtofriends = [
        { label: '--select--', title: '--select--', value: 0 },
        { label: 'Yes', title: 'Yes', value: 511 },
        { label: 'No', title: 'No', value: 512 },
        { label: 'No Answer', title: 'No Answer', value: 513 },
    ];

    //scope.HearAbout = "481";
    scope.submit = function() {

        var custid = authSvc.getCustId();
        scope.Cust_ID = custid !== undefined && custid !== null && custid !== "" ? custid : null;
        var objectfeedback = {};
        objectfeedback.Cust_ID = scope.Cust_ID;
        objectfeedback.HearAbout = scope.HearAbout !== undefined && scope.HearAbout !== "" ? scope.HearAbout : null;
        objectfeedback.ImproveWebsite = scope.ImproveWebsite !== undefined && scope.ImproveWebsite !== "" ? scope.ImproveWebsite : null;
        objectfeedback.kaaPrices = scope.kaaPrices !== undefined && scope.kaaPrices !== "" ? scope.kaaPrices : null;
        objectfeedback.DownLoadTime = scope.DownLoadTime !== undefined && scope.DownLoadTime !== "" ? scope.DownLoadTime : null;
        objectfeedback.CompareSite = scope.CompareSite !== undefined && scope.CompareSite !== "" ? scope.CompareSite : null;
        objectfeedback.FavSite = scope.FavSite !== undefined && scope.FavSite !== "" ? scope.FavSite : null;
        objectfeedback.SearchRate = scope.SearchRate !== undefined && scope.SearchRate !== "" ? scope.SearchRate : null;
        objectfeedback.Recommend = scope.Recommend !== undefined && scope.Recommend !== "" ? scope.Recommend : null;
        objectfeedback.Comments = scope.Comments !== undefined && scope.Comments !== "" ? scope.Comments : null;
        feedbacksubmit.feedbacksubmitinsert(objectfeedback).then(function(response) {
            if (response.data == 1) {
                alert("Thank u for your valuable feedback");
                scope.clearallfields();

            }
        });
    };
    scope.clearallfields = function() {
        scope.Cust_ID = "";
        scope.HearAbout = 0;
        scope.ImproveWebsite = 0;
        scope.kaaPrices = 0;
        scope.DownLoadTime = 0;
        scope.CompareSite = 0;
        scope.FavSite = "";
        scope.SearchRate = 0;
        scope.Recommend = 0;
        scope.Comments = "";
    };

}]);
app.controller("help", ['$uibModal', '$scope', 'helpService', function(uibModal, scope, helpService) {

    scope.catgory = 'catgory';
    scope.Priority = 'Priority';
    scope.countryCode = 'countryCode';
    scope.submit = function() {
        scope.inputObj = {
            profile: '',
            AssignedEmpID: null,
            BranchID: 0,
            Name: scope.txtname,
            Email: scope.txtemail,
            subject: scope.txtsubject,
            Category: scope.ddlcategory,
            Message: scope.txtmsg,
            Priority: scope.ddlpriority,
            Image: null,
            CountryCode: scope.ddlcountrycode,
            AreaCode: scope.txtphonecode,
            PhoneNum: scope.txtphnum,
            EmpID: 0
        };
    };
    helpService.helpSubmit(scope.inputObj).then(function(response) {

    });


    scope.open = function(size) {

        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            size: size,
            scope: scope
        });
    };
    scope.CustName = 'dear uuu';
    scope.lblTicketID = 'KakWB158934';
    scope.ok = function() {
        scope.modalInstance.close();
    };

    scope.cancel = function() {
        scope.modalInstance.dismiss();
    };


}]);
app.controller("blockerController",function(){


});
app.controller("myorders",function(){


});
app.controller("ourbranches", function () {

});
app.controller('privacypolicy', ['$scope', function (scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initprivacy = function () {
        // fade in #back-top    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

}]);
app.controller("profilesettings", function () {

});
app.controller('suceesstories', ['$scope', 'successstoriesdata', function (scope, suceessdata) {
    scope.success = [];

    scope.flag = 8;
    scope.fromge = 1;
    scope.topage = 8;
    scope.init = function () {
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function (response) {
            console.log(response.data);
            scope.success = response.data;
        });
    };
    $(window).scroll(function () {

        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            scope.flag += 8;
            scope.fromge = scope.flag - 7;
            scope.topage = scope.flag;
            suceessdata.suceessdataget(scope.fromge, scope.topage).then(function (response) {
                scope.success = $.unique((scope.success).concat(response.data));
            });
        }
    });
}]);
app.controller("supporttickets",function()
{

});
app.controller('termsandconditions', ['$scope', function (scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initconditions = function () {
        // fade in #back-top    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

}]);
app.controller("upgrademembership",function()
{

});
app.controller("viewmyprofile",function()
{

});
app.controller("viewFullProfileCustomer",function()
{

});
//  app.factory('authInterceptor', ['$rootScope', '$q', '$window', 'authSvc', function ($rootScope, $q, $window, authSvc) {
//     return {
//       request: function (config) {
//         config.headers = config.headers || {};
//         var user = authSvc.user();
//         if (user.token) {
//           config.headers.Authorization = 'Bearer ' + user.token;
//         }
//         return config;
//       },
//       responseError: function (rejection) {
//         if (rejection.status === 401) {
//           // handle the case where the user is not authenticated
//         }
//         return $q.reject(rejection);
//       }
//     };
//   }]);

app.factory('authSvc', ['$injector', function($injector) {

    function setUser(value) {
        //console.log(value);
        setSession('cust.id', value.CustID);
        setSession('cust.username', (value.FirstName + ' ' + value.LastName));
        setSession('cust.profileid', (value.ProfileID));
        setSession('cust.paidstatus', (value.PaidStatus));
        setSession('cust.profilepic', (value.ProfilePic));
    }

    function getSession(key) {
        return sessionStorage.getItem(key);
    }

    function setSession(key, value) {
        if (value === undefined || value === null) {
            clearSession(key);
        } else {
            sessionStorage.setItem(key, value);
        }
    }

    function clearSession(key) {
        sessionStorage.removeItem(key);
    }

    function clearUserSession() {

        clearSession('cust.id');
        clearSession('cust.username');
        clearSession('cust.profileid');
        clearSession('cust.paidstatus');
        clearSession('cust.profilepic');
    }

    function getUser() {
        return {
            custid: getSession('cust.id'),
            username: getSession('cust.username'),
            profileid: getSession('cust.profileid'),
            paidstatus: getSession('cust.paidstatus'),
            profilepic: getSession('cust.profilepic')

        };
    }

    return {
        user: function(value) {
            if (value) {
                setUser(value);
            }
            return getUser();
        },
        isAuthenticated: function() {
            return !!getSession('cust.id');
        },
        getCustId: function() {
            return getSession('cust.id');
        },
        clearUserSessionDetails: function() {
            return clearUserSession();
        },
        logout: function() {

            clearUserSession();
        },
        login: function(username, password) {
            debugger;
            var body = {
                Username: username,
                Password: password
            };
            return $injector.invoke(function($http) {
                return $http.post(app.apiroot + 'DB/userLogin/person', body)
                    .then(function(response) {
                        if (response.status === 200) {
                            return { success: true, response: response.data };
                        }
                        return { success: false, response: response.data };
                    });
            });
        }
    };
}]);

//   app.ng.config(['$httpProvider', function ($httpProvider) {
//     $httpProvider.interceptors.push('authInterceptor');
//   }]);
app.factory('customerDashboardServices', ['$http', function(http) {
    return {
        getCustomercounts: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getcustomerpartnerdata: function(custid, typeofaction, frompage, topage) {
            return http.get(app.apiroot + 'DashboardRequest/DashboardGetPartnerProfilesRequestget', { params: { TypeOfReport: typeofaction, pagefrom: frompage, pageto: topage, id: custid } });
        },
        getexpressintersetdata: function(object) {
            debugger;
            return http.post(app.apiroot + 'DashboardRequest/ExpressInterestSelectrequest', object)

        }
    };
}]);
app.factory('feedbacksubmit', ["$http", function(http) {
    return {
        feedbacksubmitinsert: function(object) {
            return http.post(app.apiroot + 'StaticPages/CustomerRating_sendMail', object);
        }

    };
}]);
app.factory('helpService', ["$http", function(http) {
    return {
        helpSubmit: function(object) {
            return http.post(app.apiroot + 'StaticPages/CustomerRating_sendMail', object);
        }

    };
}]);
app.factory('homepageservices', ['authSvc', function(http) {
    return {
        logininfo: function() {
            var person = {
                Username: "011046091",
                Password: "XowIvsTkzINyyKyJrPlmgg=="
            };
            return http.post(app.apiroot + 'DB/userLogin/person', person);
        }
    };
}]);
app.factory('ourBranchService', ["$http", function(http) {
    return {
        BranchSelect: function(value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: value, dependencyflagID: "" } });
        },
        BranchPageloadSelect: function(value) {
            return http.get(app.apiroot + 'StaticPages/getKaakateeyaBranchesDetails', { params: { dependencyName: "BranchesAddress", dependencyValue: "", dependencyflagID: "" } });
        }
    };
}]);
app.factory('SelectBindService', ["$http", function(http) {
    return {
        countrySelect: function() {
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "", dependencyValue: "" } });
        },
        stateSelect: function(dependencyVal) {
            alert(dependencyVal);
            return http.get(app.apiroot + 'Dependency/getCountryDependency', { params: { dependencyName: "state", dependencyValue: dependencyVal.join(',') } });
        },
        casteselect: function() {

            return http.get(app.apiroot + 'Dependency/getDropdown_filling_values', { params: { strDropdownname: "CasteName" } });
        }
    };
}]);
app.factory('successstoriesdata', ['$http', function(http) {
    return {
        suceessdataget: function(frompage, topage) {
            var person = {};
            person.successid = null;
            person.vc_ProfileID = null;
            person.i_RegionID = null;
            person.casteiid = null;
            person.branchrom = null;
            person.pagefrom = frompage;
            person.pageto = topage;
            return http.post(app.apiroot + 'StaticPages/GetSuccessStoriesdetails', person);
        }
    };
}]);