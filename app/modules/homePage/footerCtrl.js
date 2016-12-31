app.controller('footercontrol', ['$scope', 'authSvc', '$rootScope', 'route', function(scope, authSvc, $rootscope, route) {

    scope.showforgetpasswordpopup = function() {
        scope.$broadcast('showforgetpassword');

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
}]);