/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */
var app = angular.module('Kaakateeya', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "app/modules/static/dataGetin.html", controller: "ModalDemoCtrl" })
    // Pages
    .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
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
}]);



