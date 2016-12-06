app.controller('footercontrol', ['$scope', 'authSvc', function(scope, authSvc) {

    scope.showforgetpasswordpopup = function() {
        scope.$broadcast('showforgetpassword');

    };

}]);