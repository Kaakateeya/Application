(function(app) {
    'use strict';

    app.factory('errorInterceptor', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            responseError: function(rejection) {
                $rootScope.$broadcast('notify-error', rejection);
                return $q.reject(rejection);
            }
        };
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }]);

}(window.app));