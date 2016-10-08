/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */

var app = angular.module('Kaakateeya', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "app/modules/static/dataGetin.html", controller: "ModalDemoCtrl" })
    // Pages
    .when("/mobileVerification", { templateUrl: "app/modules/mobileverification/mobileVerification.html", controller: "PageCtrl" })
    .when("/faq", { templateUrl: "partials/faq.html", controller: "PageCtrl" })
    .when("/pricing", { templateUrl: "partials/pricing.html", controller: "PageCtrl" })
    .when("/services", { templateUrl: "partials/services.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
    // Blog
    .when("/blog", { templateUrl: "partials/blog.html", controller: "BlogCtrl" })
    .when("/blog/post", { templateUrl: "partials/blog_item.html", controller: "BlogCtrl" })
    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);


app.controller('headctrl', ['$scope', function (scope) {
  scope.divloginblock = function () {
    $('.login_block_header').toggle();
  }

scope.data=[];
  scope.login = function (log) {
    $(document).ready(function () {
      var user = {};
      user.Username = "011046091";
      user.Password = "XowIvsTkzINyyKyJrPlmgg==";
      $.ajax({
        url: 'http://183.82.0.58:8010/Api/DB/userLogin/user',
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: function (data, textStatus, xhr) {
          alert(JSON.stringify(data));
          scope.data=data;
          window.location.href = '#/mobileVerification';
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log(xhr);
        }
      });

    });
  }
  scope.vali = function (log) {
    var txtUserNames = log.txtUserName;
    if (txtUserNames.indexOf("@") != -1) {

      if (!ValidateEmail(txtUserNames)) {
        log.txtUserName = '';
        //$("#ctl00_txtUserName").focus;
        alert(" Please enter valid ProfileID/Email");
        return false;
      }
    }
    else {
      if (!Validatnumber(txtUserNames) || txtUserNames.length != "9") {
        alert("Please enter valid ProfileID/Email");
        log.txtUserName = '';
      }
      return false;

    }
    //});
  }
  function ValidateEmail(email) {
    var expr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return expr.test(email);
  };
  function Validatnumber(num) {
    var expr1 = /[0-9 -()+]+$/;
    return expr1.test(num);
  };




}]);

