app.controller('footercontrol', ['$scope', 'authSvc', '$rootScope', function(scope, authSvc, $rootscope) {

    scope.showforgetpasswordpopup = function() {
        scope.$broadcast('showforgetpassword');

    };
    scope.searchpage = function(typeurl) {
        sessionStorage.removeItem("homepageobject");
        switch (typeurl) {
            case "profile":
                var realpath = '#/General?selectedIndex=2';
                window.open(realpath, "_self");
                $rootscope.$broadcast("profile", 2);
                break;
            case "general":
                var realpathgen = '#/General?selectedIndex=0';
                window.open(realpathgen, "_self");
                $rootscope.$broadcast("profile", 0);
                break;
            case "advanced":
                var realpathadvan = '#/General?selectedIndex=1';
                window.open(realpathadvan, "_self");
                $rootscope.$broadcast("profile", 1);
                break;
        }
    };
}]);