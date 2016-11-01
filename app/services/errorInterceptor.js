(function (app) {
	'use strict';

	app.factory('errorInterceptor', ['$rootScope', '$q',function ($rootScope, $q) {
		return {
			responseError: function (rejection) {
				//Do not raise system available event for code 409,since API is sending 409 for duplicate names				
				if(rejection.status === 409 || rejection.status === 422){
					return $q.reject(rejection);
				}

				if (rejection.status === 401) {
					$rootScope.$broadcast('unauthorizedError', rejection.data);
					return $q.reject(rejection);
				}
				else if (rejection.status === 403) {
					if(rejection.data && rejection.data.subStatus !== 11){
						$rootScope.$broadcast('unauthorizedPatientDataAccessError', rejection.data);
					}
					return $q.reject(rejection);
				}
				else if (rejection.status === 423) {
					$rootScope.$broadcast('lockedError', rejection.data);
					return $q.reject(rejection);
				}
				else{
					$rootScope.$broadcast('notify-error', rejection.data);
				}
				return $q.reject(rejection);
			}
		};
	}]);

	app.ng.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('errorInterceptor');
  }]);

}(window.app));