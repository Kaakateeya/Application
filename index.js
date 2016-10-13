/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['ngRoute']);
app.apiroot = 'http://183.82.0.58:8010/Api/'

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/home", { templateUrl: "app/modules/dashboard/customerDashboardView.html", controller: "Controllerpartner" })
    .when("/homepage", { templateUrl: "app/modules/homePage/homePage.html", controller: "home" })
    .when("/mobileverf", { templateUrl: "app/modules/mobileverification/mobileverification.html", controller: "mobileverifyController" })
    .when("/Advanced", { templateUrl: "app/modules/search/advancesearchView.html", controller: "advancesearchCtrl" })
    .when("/General", { templateUrl: "app/modules/search/generalSearchView.html", controller: "Generalsearch" })
    .when("/profilidsrch", { templateUrl: "app/modules/search/profileidSearch.html", controller: "profileidsrch" })
    .when("/savedsearch", { templateUrl: "app/modules/search/savesSearchView.html", controller: "savedsearchCtrl" })
    .when("/datagetin", { templateUrl: "app/modules/static/dataGetin.html", controller: "ModalDemoCtrl" })
    .when("/faqs", { templateUrl: "app/modules/static/faqs.html", controller: "faqs" })
    .when("/feedback", { templateUrl: "app/modules/static/feedbackView.html", controller: "feedbackCtrl" })
    .when("/help", { templateUrl: "app/modules/static/helpPage.html", controller: "help" })
    .when("/blockerController", { templateUrl: "app/modules/static/loginBlocker.html", controller: "blockerController" })
    .when("/myorders", { templateUrl: "app/modules/static/myOrdersAndStatistics.html", controller: "myorders" })
    .when("/profilesettings", { templateUrl: "app/modules/static/profileSettings.html", controller: "profilesettings" })
    .when("/successstories", { templateUrl: "app/modules/static/successStories.html", controller: "suceesstories" })
    .when("/MySupportTickets", { templateUrl: "app/modules/static/supportTickets.html", controller: "supporttickets" })
    .when("/takeatour", { templateUrl: "app/modules/static/takeTour.html" })
    .when("/viewmyprofile", { templateUrl: "app/modules/static/viewMyProfile.html", controller: "viewmyprofile" })
    .when("/viewFullProfileCustomer", { templateUrl: "app/modules/viewFullProfile/viewFullProfileCustomer.html", controller: "viewFullProfileCustomer" })
    .when("/termsAndConditions", { templateUrl: "app/modules/static/termsAndConditions.html" })
    .when("/Registration", { templateUrl: "app/modules/registration/views/registrationView.html", controller: "registration" })
    .when("/regprofiles", { templateUrl: "app/modules/registration/views/registrationRegProfiles.html", controller: "registrationReg" })
    .when("/ourbranches", { templateUrl: "app/modules/static/ourBranches.html", controller: "ourbranches" })
    .when("/privacyPolicy", { templateUrl: "app/modules/static/privacyPolicy.html" })
    .when("/", { templateUrl: "app/modules/homePage/homePage.html", controller: "home" })
    .when("/UpgradeMembership", { templateUrl: "app/modules/static/upgradeMembership.html", controller: "upgrademembership" })
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

}]);
app.controller('headctrl', ['$scope', function (scope) {
  scope.divloginblock = function () {
    $('.login_block_header').toggle();
  }
}]);

