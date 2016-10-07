/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['ngRoute']);


/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/home", { templateUrl: "app/modules/dashboard/patientDashboardView.html", controller: "Controllerpartner" })
    // .when("/", { templateUrl: "app/modules/static/dataGetin.html", controller: "ModalDemoCtrl" })
    .when("/help", { templateUrl: "app/modules/static/helpPage.html" })
    .when("/takeatour", { templateUrl: "app/modules/static/takeTour.html" })
    .when("/feedback", { templateUrl: "app/modules/static/feedbackView.html" })
    .when("/MySupportTickets", { templateUrl: "app/modules/static/supportTickets.html" })
    .when("/profilesettings", { templateUrl: "app/modules/static/profileSettings.html" })
    .when("/successstories", { templateUrl: "app/modules/static/successStories.html" })
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);


app.controller('headctrl', ['$scope', function (scope) {
  scope.divloginblock = function () {
    $('.login_block_header').toggle();
  }
}]);

