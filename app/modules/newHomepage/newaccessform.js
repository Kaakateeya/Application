// app.directive('newaccessibleForm', function() {
//     return {
//         restrict: 'A',
//         link: function(scope, elem) {
//             // set up event handler on the form element
//             elem.on('submit', function() {
//                 // find the first invalid element
//                 var firstInvalid = elem[0].querySelector('.ng-invalid');
//                 // if we find one, set focus
//                 if (firstInvalid) {
//                     firstInvalid.focus();
//                 }
//             });
//         }
//     };
// });


// (function() {
//     'use strict';

//     angular
//         .module('Kaakateeya')
//         .directive('newaccessibleForm', directive);

//     directive.$inject = ['$window'];

//     function directive($window) {

//         var directive = {
//             link: link,
//             restrict: 'A'
//         };
//         return directive;

//         function link(scope, elem) {

//             elem.on('submit', function() {

//                 var firstInvalid = elem[0].querySelector('.ng-invalid');
//                 if (firstInvalid !== null)
//                     firstInvalid.focus();

//                 var firstInvalidselect = elem[0][1];
//                 $('select').each(function() {

//                     console.log('valilog');
//                     var testtt = $(this).attr('class');
//                     if (testtt.indexOf('ng-invalid-required') !== -1) {
//                         firstInvalidselect.focus();
//                         return false;
//                     }
//                 });
//             });
//         }
//     }

// })();