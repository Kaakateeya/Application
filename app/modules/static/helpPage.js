app.controller("help", ['$uibModal', '$scope', 'helpService', function (uibModal, scope, helpService) {

    scope.catgory = 'catgory';
    scope.Priority = 'Priority';
    scope.countryCode = 'countryCode';
    scope.submit = function () {
        scope.inputObj = {
            profile: '',
            AssignedEmpID: null,
            BranchID: 0,
            Name: scope.txtname,
            Email: scope.txtemail,
            subject: scope.txtsubject,
            Category: scope.ddlcategory,
            Message: scope.txtmsg,
            Priority: scope.ddlpriority,
            Image: null,
            CountryCode: scope.ddlcountrycode,
            AreaCode: scope.txtphonecode,
            PhoneNum: scope.txtphnum,
            EmpID: 0
        }
    }
    helpService.helpSubmit(scope.inputObj).then(function (response) {

    });


    scope.open = function (size) {

        scope.modalInstance = uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            size:size,
            scope: scope
        });
    };
    scope.CustName = 'dear uuu';
    scope.lblTicketID='KakWB158934';
    scope.ok = function () {
        scope.modalInstance.close();
    };

    scope.cancel = function () {
        scope.modalInstance.dismiss();
    };


}]);
