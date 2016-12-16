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

app.factory('authSvc', ['$injector', 'Idle', 'alert', function($injector, Idle, alerts) {


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
        sessionStorage.removeItem("LoginPhotoIsActive");
        sessionStorage.removeItem("homepageobject");
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
        getProfileid: function() {
            return getSession('cust.profileid');
        },
        getpaidstatus: function() {
            return getSession('cust.paidstatus');
        },
        
        clearUserSessionDetails: function() {
            return clearUserSession();
        },
        logout: function() {
            clearUserSession();
            window.location = "#/";
        },
        login: function(username, password) {

            var body = {
                Username: username,
                Password: password
            };
            return $injector.invoke(function($http) {
                return $http.post(app.apiroot + 'DB/userLogin/person', body)
                    .then(function(response) {

                        if (response.status === 200) {
                            if (response.data !== null) {
                                Idle.watch();
                                return { success: true, response: response.data };
                            } else {
                                alert("please enter valid Email ID/User Name");
                            }
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