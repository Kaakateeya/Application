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
      setSession('cust.id', value.CustID);
      setSession('cust.username', (value.FirstName+' '+value.LastName));
	}

    function getSession(key) {
      return sessionStorage.getItem(key);
    }
    
    function setSession(key, value) {
      if (value === undefined || value === null) {
        clearSession(key);
      }
      else {
        sessionStorage.setItem( key, value);
      }
    }

    function clearSession(key) {
      sessionStorage.removeItem(key);
    }

    function clearUserSession() {
      clearSession('cust.id');
      clearSession('cust.username');
    }

    function getUser() {
      return {
        custid: getSession('cust.id'),
        username: getSession('cust.username')
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
      getCustId: function () {
        return getSession('cust.id');
      },
      clearUserSessionDetails: function () {
        return clearUserSession();
      },
      logout: function () {
        clearUserSession();
      },
      login: function(username, password) {
        var body = {
          Username: username,
          Password: password
        };
        return $injector.invoke(function($http) {
          return $http.post(app.apiroot + 'DB/userLogin/person', body)
          .then(function(response) {
            if(response.status === 200) {
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

