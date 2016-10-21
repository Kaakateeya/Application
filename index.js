/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['reCAPTCHA', 'ui.router']);
app.apiroot = 'http://183.82.0.58:8010/Api/'

/**
 * Configure the Routes
 */
// app.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when("/home", { templateUrl: "app/modules/dashboard/customerDashboardView.html", controller: "Controllerpartner" })
//     .when("/multiseelct", { templateUrl: "app/modules/static/multiselectexample.html", controller: "Controllerpartner" })
//     .when("/homepage", { templateUrl: "app/modules/homePage/homePage.html", controller: "home" })
//     .when("/mobileverf", { templateUrl: "app/modules/mobileverification/mobileverification.html", controller: "mobileverifyController" })
//     .when("/Advanced", { templateUrl: "app/modules/search/advancesearchView.html", controller: "advancesearchCtrl" })
//     .when("/General", { templateUrl: "app/modules/search/generalSearchView.html", controller: "Generalsearch" })
//     .when("/profilidsrch", { templateUrl: "app/modules/search/profileidSearch.html", controller: "profileidsrch" })
//     .when("/savedsearch", { templateUrl: "app/modules/search/savesSearchView.html", controller: "savedsearchCtrl" })
//     .when("/datagetin", { templateUrl: "app/modules/static/dataGetin.html", controller: "ModalDemoCtrl" })
//     .when("/faqs", { templateUrl: "app/modules/static/faqs.html", controller: "faqs" })
//     .when("/feedback", { templateUrl: "app/modules/static/feedbackView.html", controller: "feedbackCtrl" })
//     .when("/help", { templateUrl: "app/modules/static/helpPage.html", controller: "help" })
//     .when("/blockerController", { templateUrl: "app/modules/static/loginBlocker.html", controller: "blockerController" })
//     .when("/myorders", { templateUrl: "app/modules/static/myOrdersAndStatistics.html", controller: "myorders" })
//     .when("/profilesettings", { templateUrl: "app/modules/static/profileSettings.html", controller: "profilesettings" })
//     .when("/successstories", { templateUrl: "app/modules/static/successStories.html", controller: "suceesstories" })
//     .when("/MySupportTickets", { templateUrl: "app/modules/static/supportTickets.html", controller: "supporttickets" })
//     .when("/takeatour", { templateUrl: "app/modules/static/takeTour.html" })
//     .when("/viewmyprofile", { templateUrl: "app/modules/static/viewMyProfile.html", controller: "viewmyprofile" })
//     .when("/viewFullProfileCustomer", { templateUrl: "app/modules/viewFullProfile/viewFullProfileCustomer.html", controller: "viewFullProfileCustomer" })
//     .when("/termsAndConditions", { templateUrl: "app/modules/static/termsAndConditions.html" })
//     .when("/Registration", { templateUrl: "app/modules/registration/views/registrationView.html", controller: "registration" })
//     .when("/regprofiles", { templateUrl: "app/modules/registration/views/registrationRegProfiles.html", controller: "registrationReg" })
//     .when("/ourbranches", { templateUrl: "app/modules/static/ourBranches.html", controller: "ourbranches" })
//     .when("/privacyPolicy", { templateUrl: "app/modules/static/privacyPolicy.html" })
//     .when("/", { templateUrl: "app/modules/homePage/homePage.html", controller: "home" })
//     .when("/UpgradeMembership", { templateUrl: "app/modules/static/upgradeMembership.html", controller: "upgrademembership" })
//     .when("/acco", { templateUrl: "app/modules/static/accordian.html" })
//     .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });

// }]);

app.config(function ($stateProvider, $urlRouterProvider) {

    var states = [{ name: 'home', url: '/', ishomepage: true, isloginrequired: false },
    { name: 'dashboard', url: '/home', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner' },
    { name: 'mobileverf', url: '/mobileverf', templateUrl: 'app/modules/mobileverification/mobileverification.html', controller: 'mobileverifyController', isloginrequired: true },
    { name: 'Advanced', url: '/Advanced', templateUrl: 'app/modules/search/advancesearchView.html', controller: 'advancesearchCtrl', isloginrequired: false },
    { name: 'General', url: '/General', templateUrl: 'app/modules/search/generalSearchView.html', controller: 'Generalsearch', isloginrequired: false },
    { name: 'profilidsrch', url: '/profilidsrch', templateUrl: 'app/modules/search/profileidSearch.html', controller: 'profilidsrch', isloginrequired: false },
    { name: 'savedsearch', url: '/savedsearch', templateUrl: 'app/modules/search/savedsearch.html', controller: 'savedsearchCtrl', isloginrequired: true },
    { name: 'datagetin', url: '/datagetin', templateUrl: 'app/modules/static/dataGetin.html', controller: 'ModalDemoCtrl', isloginrequired: true },
    { name: 'faqs', url: '/faqs', templateUrl: 'app/modules/static/faqs.html', controller: 'faqs', isloginrequired: false },
    { name: 'feedback', url: '/feedback', templateUrl: 'app/modules/static/feedbackView.html', controller: 'feedbackCtrl', isloginrequired: false },
    { name: 'help', url: '/help', templateUrl: 'app/modules/static/helpPage.html', controller: 'help', isloginrequired: false },
    { name: 'blockerController', url: '/blockerController', templateUrl: 'app/modules/static/loginBlocker.html', controller: 'blockerController', isloginrequired: true },
    { name: 'myorders', url: '/myorders', templateUrl: 'app/modules/static/myOrdersAndStatistics.html', controller: 'myorders', isloginrequired: false },
    { name: 'profilesettings', url: '/profilesettings', templateUrl: 'app/modules/static/profileSettings.html', controller: 'profilesettings', isloginrequired: false },
    { name: 'successstories', url: '/successstories', templateUrl: 'app/modules/static/successStories.html', controller: 'suceesstories', isloginrequired: false },
    { name: 'MySupportTickets', url: '/MySupportTickets', templateUrl: 'app/modules/static/supportTickets.html', controller: 'supporttickets', isloginrequired: false },
    { name: 'takeatour', url: '/takeatour', templateUrl: 'app/modules/static/takeTour.html', isloginrequired: false },
    { name: 'viewmyprofile', url: '/viewmyprofile', templateUrl: 'app/modules/static/viewMyProfile.html', controller: 'viewmyprofile', isloginrequired: true },
    { name: 'viewFullProfileCustomer', url: '/viewFullProfileCustomer', templateUrl: 'app/modules/viewFullProfile/viewFullProfileCustomer.html', controller: 'viewFullProfileCustomer', isloginrequired: true },
    { name: 'termsAndConditions', url: '/termsAndConditions', templateUrl: 'app/modules/static/termsAndConditions.html' },
    { name: 'Registration', url: '/Registration', templateUrl: 'app/modules/registration/views/registrationView.html', controller: "registration" },
    { name: 'regprofiles', url: '/regprofiles', templateUrl: 'app/modules/registration/views/registrationRegProfiles.html', controller: "registrationReg" },
    { name: 'ourbranches', url: '/ourbranches', templateUrl: 'app/modules/static/ourBranches.html', controller: 'ourbranches', isloginrequired: false },
    { name: 'privacyPolicy', url: '/privacyPolicy', templateUrl: 'app/modules/static/privacyPolicy.html', isloginrequired: false },
    { name: 'UpgradeMembership', url: '/UpgradeMembership', templateUrl: 'app/modules/static/upgradeMembership.html', controller: "upgrademembership", isloginrequired: false },
    { name: 'aboutUs', url: '/aboutUs', templateUrl: 'app/modules/static/aboutUs.html', isloginrequired: false }

    ];


    $urlRouterProvider.otherwise('/');
    var outerView = {
        "content@": {
            templateUrl: 'app/modules/homePage/homePage.html',
            controller: 'home'
        },
        "bottompanel@": {
            templateUrl: "templates/footer.html"
        }
    };
    _.each(states, function (item) {
        var innerView = {
            "topbar@": {
                templateUrl: "templates/header.html"
            },
            "content@": {
                templateUrl: item.templateUrl,
                controller: item.controller
            },
            "bottompanel@": {
                templateUrl: "templates/footer.html"
            }
        };
        $stateProvider.state(item.name, {
            url: item.url,
            views: (item.ishomepage ? outerView : innerView),
            data: {
                requiresLogin: item.isloginrequired==null? true:item.isloginrequired
            }
        })
    });
});
app.config(function (reCAPTCHAProvider) {
    reCAPTCHAProvider.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
    // optional
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
})
app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (e, to) {
        console.log(to);
        if (to.data && to.data.requiresLogin) {           
            if (sessionStorage.getItem('cust.id') === null) {
                e.preventDefault();
                console.log('success');
                $state.go('home');
            } else {
                console.log('double success');
            }
        }
    });
})

