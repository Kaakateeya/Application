(function() {
    'use strict';
    angular
        .module('Kaakateeya')
        .controller('uploadPhotoencryptCtrl', controller);
    controller.$inject = ['$scope', '$state', 'uploadService', '$stateParams', 'SelectBindServiceApp'];

    function controller(scope, state, uploadService, $stateParams, SelectBindServiceApp) {
        /* jshint validthis:true */
        var vm = this,
            model;
        scope.CustID = $stateParams.custid;
        scope.pageload = function() {
            SelectBindServiceApp.noPhotoStatus(scope.CustID).then(function(response) {
                if (parseInt(response.data) === 1) {
                    state.go('home');
                } else {
                    uploadService.getencrypt(scope.CustID).then(function(response) {
                        if (response.data !== null && response.data !== undefined && response.data !== "") {
                            state.go("uploadPhoto", { custid: response.data });
                        }
                    });
                }
            });
        };
        scope.pageload();
    }
})();