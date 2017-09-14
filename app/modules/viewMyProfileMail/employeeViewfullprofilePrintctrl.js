 (function() {


     function controller(employeeViewfullprofileModel, scope, $location) {
         var vm = this,
             model;
         vm.init = function() {
             vm.model = model = employeeViewfullprofileModel;
             vm.model.scope = scope;
             vm.refForm = {};
             model.viewprofilearray = [];
             model.aboutmyself = {};
             model.personalinfo = {};
             model.basicinfo = [];
             model.selfProfileID = '';
             model.fullprofileshow = true;
             model.searchObjectquery = $location.search();
             model.updatepaymentllink = false;
             var meKey = Object.getOwnPropertyNames(model.searchObjectquery)[0];
             var meKeyempid = Object.getOwnPropertyNames(model.searchObjectquery)[1];
             model.selfProfileID = model.searchObjectquery[meKey];
             model.selfEmp = model.searchObjectquery[meKeyempid];
             if (model.selfProfileID) {
                 model.getprofileDataencryptedID(model.selfProfileID);
             }
         };


         vm.init();
     }
     angular
         .module('Kaakateeya')
         .controller('ViewfullprofileEmailCtrl', controller);
     controller.$inject = ['employeeViewfullprofilePrintModel', '$scope', '$location'];

 })(angular);