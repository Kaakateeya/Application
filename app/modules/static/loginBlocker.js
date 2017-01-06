 app.controller("blockerController", ['$scope', 'cerateNewPwd', '$stateParams', function(scope, cerateNewPwd, stateParams) {
     cerateNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
         var custData = (res.data).split(';');
         scope.profileID = custData[1];
         scope.RelationShipManager = custData[3];
         scope.mngrMob = custData[4] === 'NoEmpOfficialCCn' ? '' : custData[4];
     });
 }]);