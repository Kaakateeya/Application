app.controller('nologinCtrl', ['$scope', 'nologinPwd', '$stateParams', 'authSvc', 'route', function(scope, nologinNewPwd, stateParams, authSvc, route) {
    scope.custID = '0';
    scope.Email = '';
    scope.profileID = '';
    nologinNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
        var custData = (res.data).split(';');
        console.log(custData);
        scope.Email = custData[0];
        scope.profileID = custData[1];
        scope.custID = custData[2];
    });
    scope.CerateNewPwdSubmit = function(obj) {
        nologinNewPwd.createNewPwdSub(scope.custID, obj.txtPassword).then(function(res) {
            console.log(res);
            authSvc.login(scope.profileID, obj.txtPassword).then(function(response) {
                authSvc.user(response.response !== null ? response.response[0] : null);
                sessionStorage.removeItem("LoginPhotoIsActive");
                if (response.response[0].isemailverified === true && response.response[0].isnumberverifed === true) {

                    route.go('dashboard', { type: 'C' });

                } else {

                    route.go('mobileverf', {});
                }

            });
        });
    };
}]);