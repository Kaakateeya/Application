(function() {
    'use strict';
    angular
        .module('Kaakateeya')
        .controller('allmissingfileldencryptCtrl', controller);
    controller.$inject = ['$scope', '$state', 'uploadService', '$stateParams', 'SelectBindServiceApp'];

    function controller(scope, state, uploadService, $stateParams, SelectBindServiceApp) {
        /* jshint validthis:true */
        var vm = this,
            model;
        scope.CustID = $stateParams.eid;
        scope.pageload = function() {
            uploadService.getencrypt(scope.CustID).then(function(resp) {
                if (resp.data !== null && resp.data !== undefined && resp.data !== "") {
                    state.go("allmissingfields", { eid: resp.data });
                }
            });
        };
        scope.pageload();
    }
})();