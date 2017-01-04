app.controller("help", ['$uibModal', '$scope', 'helpService', 'arrayConstants', 'reCAPTCHA',
    function(uibModal, scope, helpService, arrayConstants, reCAPTCHA) {

        scope.catgory = 'catgory';
        scope.Priority = 'Priority';
        scope.countryCode = 'countryCode';
        scope.lblpopupCategory = 'dffdf';
        scope.open = function(size) {
            scope.modalInstance = uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                scope: scope
            });
        };

        scope.submit = function() {

            if (scope.helpForm.$valid && (scope.ddlcategory !== undefined && scope.ddlcategory !== '0' && scope.ddlcategory !== '') &&
                (scope.ddlpriority !== undefined && scope.ddlpriority !== '0' && scope.ddlpriority !== '')) {

                scope.inputObj = {
                    profile: '210910352',
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
                };

                helpService.helpSubmit(scope.inputObj).then(function(response) {
                    console.log(response);
                    scope.CustName = scope.txtname;
                    if (response.data !== null) {
                        scope.lblTicketID = response.data.Ticket !== null ? response.data.Ticket : '';
                    }
                    scope.lblpopupCategory = (_.where(arrayConstants.catgory, { value: parseInt(scope.ddlcategory) }))[0].title;
                    scope.open();
                });
            } else {
                alert('Please enter Catgory and Priority');

            }

        };

        scope.SendMail = function() {
            scope.SendMailObj = {
                TicketID: scope.lblTicketID,
                Name: scope.CustName,
                CategoryName: scope.lblpopupCategory,
                strEmail: scope.txtemail,
                EmpID: 0,
                EmpTicketID: 0
            };

            helpService.SendMail(scope.SendMailObj).then(function(response) {
                if (response.data == 1) {
                    alert('mail has sent successfully');
                    scope.resethelp();
                }
            });
            scope.modalInstance.close();

        };
        scope.resethelp = function() {
            scope.txtname = "";
            scope.txtemail = "";
            scope.txtsubject = "";
            scope.ddlcategory = null;
            scope.ddlcountrycode = null;
            scope.txtmsg = "";
            scope.ddlpriority = null;
            scope.txtphonecode = "";
            scope.txtphnum = "";
            Recaptcha.reload();
        };
    }
]);