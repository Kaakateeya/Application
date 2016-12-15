 app.controller("blockerController", ['$scope', 'cerateNewPwd', '$stateParams', function(scope, cerateNewPwd, stateParams) {
     cerateNewPwd.getEmailAndProfileID(stateParams.eid).then(function(res) {
         var custData = (res.data).split(';');
         console.log(custData);
         scope.profileID = custData[1];
         //scope.custID = custData[2];
         scope.RelationShipManager = custData[3];
         scope.mngrMob = custData[4] === 'NoEmpOfficialCCn' ? '' : custData[4];
         console.log(res.data);
     });
 }]);