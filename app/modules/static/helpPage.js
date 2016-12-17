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

            if (scope.helpForm.$valid) {

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
                    scope.lblTicketID = response.data.Ticket;
                    scope.lblpopupCategory = (_.where(arrayConstants.catgory, { value: parseInt(scope.ddlcategory) }))[0].title;
                    scope.open();
                });
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
                console.log(response);
                if (response.data == 1) {
                    alert('mail has sent successfully');
                      scope.resethelp();
                }
            });
            scope.modalInstance.close();
          
        };
   scope.resethelp=function()
   {  
scope.txtname="";
scope.txtemail="";
scope.txtsubject="";
scope.ddlcategory=null;
scope.ddlcountrycode=null;
scope.txtmsg="";
scope.ddlpriority=null;
scope.txtphonecode="";
scope.txtphnum="";
 scope.captcha="";
    };
    }
]);