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

app.factory('authSvc', ['$injector', 'Idle', 'alert', '$http', 'route', function($injector, Idle, alerts, $http, route) {
    function setUser(value) {
        setSession('cust.id', value.CustID);
        setSession('cust.username', (value.FirstName + ' ' + value.LastName));
        setSession('cust.profileid', (value.ProfileID));
        setSession('cust.paidstatus', (value.PaidStatus));
        setSession('cust.profilepic', (value.ProfilePic));
        setSession('cust.GenderID', (value.GenderID));
        setSession('cust.isemailverified', (value.isemailverified));
        setSession('cust.isnumberverifed', (value.isnumberverifed));
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
        clearSession('cust.GenderID');
        clearSession('cust.isemailverified');
        clearSession('cust.isnumberverifed');
        sessionStorage.removeItem("LoginPhotoIsActive");
        sessionStorage.removeItem("homepageobject");
        sessionStorage.removeItem("httperrorpopupstatus");
        sessionStorage.removeItem("missingStatus");
        sessionStorage.removeItem("localcustid");
        sessionStorage.removeItem("unpaidNotifyflag");
        sessionStorage.removeItem("loggedAscustomerPage");

    }

    function getUser() {
        return {
            custid: getSession('cust.id'),
            username: getSession('cust.username'),
            profileid: getSession('cust.profileid'),
            paidstatus: getSession('cust.paidstatus'),
            profilepic: getSession('cust.profilepic'),
            GenderID: getSession('cust.GenderID'),
            isemailverified: getSession('cust.isemailverified'),
            isnumberverifed: getSession('cust.isnumberverifed')
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
        getprofilepic: function() {
            return getSession('cust.profilepic');
        },
        getGenderID: function() {
            return getSession('cust.GenderID');
        },
        clearUserSessionDetails: function() {
            return clearUserSession();
        },
        logout: function() {
            clearUserSession();
            route.go('home', {});
        },
        login: function(username, password, empFlag) {
            var body = {
                Username: username,
                Password: password,
                iflag: empFlag ? empFlag : null
            };
            return $http.post(app.apiroot + 'DB/userLogin/person', body)
                .then(function(response) {
                    if (response.status === 200) {
                        if (response.data !== null) {
                            Idle.watch();
                            return { success: true, response: response.data };
                        } else {
                            alert("Invalid Matrimony ID / E-mail OR Incorrect Password");
                        }
                    }
                    return { success: false, response: response.data };
                });
        },
        paymentstaus: function(custid, scope) {
            return $http.get(app.apiroot + 'Payment/getCustomerPaymentStatus', { params: { CustomerCustID: custid } })
                .then(function(response) {
                    if (response.status === 200 && response.data !== null && response.data !== undefined) {
                        if (response.data === "Paid") {
                            return true;
                        } else {
                            alerts.timeoutoldalerts(scope, 'alert-danger', 'upgrade', 3000);
                            return false;
                        }
                    }
                });
        }
    };
}]);