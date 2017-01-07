app.controller('footercontrol', ['$scope', 'authSvc', '$rootScope', 'route', 'alert',
    function(scope, authSvc, $rootscope, route, alerts) {
        scope.showforgetpasswordpopup = function() {
            // scope.$broadcast('showforgetpassword');
            alerts.showforgetpopup(scope);
        };
        scope.searchpage = function(typeurl) {
            sessionStorage.removeItem("homepageobject");
            switch (typeurl) {
                case "profile":
                    route.go('General', { id: 2 });
                    break;
                case "general":
                    route.go('General', { id: 0 });
                    break;
                case "advanced":
                    route.go('General', { id: 1 });
                    break;
            }
        };
    }
]);