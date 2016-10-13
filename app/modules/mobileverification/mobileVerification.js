app.controller('mobileverifyController', function ($scope) {
    debugger;
    $scope.pageloadSelect={};
    $.ajax({
        url: 'http://183.82.0.58:8010/Api/EmailMobileVerf/EmailMobileVerfRequest/91035/C/1/9',
        type: 'GET',
        crossDomain: true,
        data: {},
        contentType: 'application/json',
        async: false,
        success: function (data, textStatus, xhr) {
            $scope.pageloadSelect=data;
            console.log(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
    // $scope.pageloadSelect = {
    //     Number: '8985201371'
    //     , Email: 'kusumuruuma@gmail.com'
    //     , ismobileverf: false
    //     , isEmailverf: false
    //     , CountryCodeID: 1
    //     , CountryCodes: 91
    //     , Cust_ContactNumbers_ID: 1222
    // };
   // alert($scope.pageloadSelect.Number);
    $scope.mobVerify = $scope.pageloadSelect.ismobileverf == true ? true : false;
    $scope.emailVerify = $scope.pageloadSelect.isEmailverf == true ? true : false;
  
});