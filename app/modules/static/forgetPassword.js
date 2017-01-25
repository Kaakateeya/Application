 app.controller("forgetpasswordemail", ['$scope', 'forgetPwdservices', '$stateParams', 'alert', '$uibModal', 'route',
     function(scope, forgetPwdservices, stateParams, alerts, uibModal, route) {
         scope.custidpassword = stateParams.custid;
         scope.statuspassword = null;
         scope.divngit = function() {
             alerts.dynamicpopup("forgetpasswordemail.html", scope, uibModal);
             forgetPwdservices.getstatuscustid(scope.custidpassword).then(function(response) {
                 _.each(response.data, function(item) {
                     var passwordarray = JSON.parse(item);
                     if (passwordarray !== undefined && passwordarray !== null && passwordarray !== "" && passwordarray[0] !== undefined && passwordarray[0] !== null && passwordarray[0] !== "") {
                         if (passwordarray[0].STATUS === 1) {
                             scope.statuspassword = passwordarray[0].Password;
                         } else if (passwordarray[0].STATUS === 2) {
                             alerts.timeoutoldalerts(scope, 'alert-danger', 'You have already reseted your password', 2500);
                         }

                     }
                 });

             });
         };
         scope.passwordsubmit = function(formloagin) {
             alerts.dynamicpopupclose();
             forgetPwdservices.getChangePassword(scope.custidpassword, formloagin.txtPassword).then(function(response) {
                 if (response.data === 1) {
                     alerts.timeoutoldalerts(scope, 'alert-success', 'Your password updated successfully', 2500);
                     route.go('home', {});
                 }
             });
         };

     }
 ]);