  app.controller('myCtrl', function($scope, $http) {

      $scope.myFunc = function() {

          $http.get('http://183.82.0.58:8010/Api/Payment/getProfilePaymentDetails_NewDesigns', { params: { intProfileID: $scope.tProfileID } }).success(function(data, status, headers, config) {
              $scope.array = JSON.parse(data);
              $scope.ProfileID = $scope.array[0].ProfileID;
              $scope.Branch = $scope.array[0].Branch;
              $scope.Name = $scope.array[0].FirstName;
              $scope.Surname = $scope.array[0].LastName;
              $scope.Gender = $scope.array[0].Gender;
              $scope.CasteName = $scope.array[0].CasteName;
              $scope.MemberShipType = $scope.array[0].MemberShipType;
              $scope.ApplicationName = $scope.array[0].ApplicationName;
              $scope.AgreedAmountNew = $scope.array[0].AgreedAmountNew;
              $scope.Duration = $scope.array[0].Duration;
              $scope.MemberShipName = $scope.array[0].MemberShipName;
              $scope.MemberShipDescription = $scope.array[0].MemberShipDescription;
              $scope.StartDate = $scope.array[0].StartDate;
              $scope.EndDate = $scope.array[0].EndDate;
              $scope.NoofPoints = $scope.array[0].NoofPoints;
              $scope.SettlementAmount = $scope.array[0].SettlementAmount;
              $scope.ServiceTax = $scope.array[0].ServiceTax;
              $scope.MembershipID = $scope.array[0].MembershipID;
              $scope.GenderID = $scope.array[0].GenderID;
              $scope.CasteID = $scope.array[0].CasteID;
              $scope.Cust_ID = $scope.array[0].Cust_ID;
              $scope.MemberShipTypeID = $scope.array[0].MemberShipTypeID;
              $scope.display = 1;
              console.log($scope.array);
          }).error(function(data, status, headers, config) {
              alert("No  Data found");
          });
      };

      $scope.gridView = function() {
          $scope.display = 3;

          $http.get('http://183.82.0.58:8010/Api/Payment/getProfilePaymentDetailsGridview', { params: { intProfileID: $scope.tProfileID } }).success(function(data, status, headers, config) {
              $scope.array = JSON.parse(data);
              $scope.ProfileID = $scope.array[0].ProfileID;


              console.log($scope.array);
          }).error(function(data, status, headers, config) {
              alert("No  Data found");
          });
      };

      $scope.btnsubmit = function(display) {

          if (display == 1) {

              var obj = {

                  ProfileID: $scope.ProfileID,
                  Cust_id: $scope.Cust_ID,
                  Payment_Id: $scope.rbtPaymenttype,
                  Renual_Type: $scope.MemberShipTypeID,
                  NoofPoints: $scope.NoofPoints,
                  AgreedAmount: $scope.AgreedAmountNew,
                  SettlementAmount: $scope.SettlementAmount,
                  DateDuration: $scope.Duration,
                  ServiceTax: $scope.ServiceTax,
                  ServiceTaxAmt: $scope.txtServiceTaxSettleMent,
                  AmountPaid: $scope.AmountPaid,
                  StartDate: $scope.StartDate,
                  EndDate: $scope.EndDate,
                  ReceiptNumber: $scope.ReceiptBillNumber,
                  TransactionID: $scope.TransactionID,
                  ChequeNoOrDDNo: $scope.Cheque,
                  BranchName: $scope.BranchName,
                  BankName: $scope.BankName,
                  Place: $scope.Place,
                  Paydescription: $scope.Paydescription,
                  ModeOfPayment: $scope.Paymode,
                  EmpID: 2,
                  AccessFeatureID: $scope.rbtAccessFeature,
                  PaysmsID: $scope.SendEmailSms
              };

              $http.post('http://183.82.0.58:8010/Api/Payment/CustomerInsertPaymentDetilsInfo_NewDesign', obj).then(function(response) {
                  alert("Payment Success......");
              });
          } else {
              $scope.tProfileID = null;
              $scope.AgreedAmountNew = null;
              $scope.searchMemberonline = null;
              $scope.display = 2;
          }
      };
  });

  function isNumberKey(evt) {
      var charCode = (evt.which) ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
      return true;
  }