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
                if (response.data.length > 0 && parseInt(response.data[0].Status) === 1) {
                    state.go('home');
                } else {
                    uploadService.getencrypt(scope.CustID).then(function(resp) {
                        if (resp.data !== null && resp.data !== undefined && resp.data !== "") {
                            state.go("uploadPhoto", { custid: resp.data });
                        }
                    });
                }
            });
        };
        scope.pageload();
    }
})();