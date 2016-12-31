/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['reCAPTCHA', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'angular-loading-bar', 'ngAnimate', 'ngIdle', 'ngMaterial', 'ngMessages', 'ngAria', 'KaakateeyaEdit', 'ngPassword', 'KaakateeyaRegistration', 'jcs-autoValidate']);
app.apiroot = 'http://183.82.0.58:8010/Api/'

app.global = {
    'alertType': 'toast-top-right'
}


app.config(['$stateProvider', '$urlRouterProvider', 'IdleProvider', 'KeepaliveProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, IdleProvider, KeepaliveProvider, $locationProvider) {
    IdleProvider.autoResume('notIdle');
    // set idle interrupt events.  This is the default list except for 'mousemove', which is difficult to test with.
    IdleProvider.interrupt('keydown DOMMouseScroll mousewheel mousedown');
    IdleProvider.idle(5 * 60);


    var states = [{ name: 'home', url: '/', ishomepage: true, isloginrequired: false, controller: 'home' },
        { name: 'dashboard', url: '/home/:type', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner', isloginrequired: true },
        { name: 'dashboardnew', url: '/Dashboard/:type', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner', isloginrequired: true },
        { name: 'mobileverf', url: '/mobileverf', templateUrl: 'app/modules/mobileverification/mobileverification.html', controller: 'mobileverifyController', isloginrequired: true },
        { name: 'General', url: '/General/:id', templateUrl: 'app/modules/search/generalSearchView.html', controller: 'Generalsearch', isloginrequired: false },
        { name: 'datagetin', url: '/datagetin', templateUrl: 'app/modules/static/dataGetin.html', controller: 'ModalDemoCtrl', isloginrequired: true },
        { name: 'faqs', url: '/faqs', templateUrl: 'app/modules/static/faqs.html', controller: 'faqs', isloginrequired: false },
        { name: 'feedback', url: '/feedback', templateUrl: 'app/modules/static/feedbackView.html', controller: 'feedbackCtrl', isloginrequired: false },
        { name: 'help', url: '/help', templateUrl: 'app/modules/static/helpPage.html', controller: 'help', isloginrequired: false },
        { name: 'blockerController', url: '/blockerController/:eid', templateUrl: 'app/modules/static/loginBlocker.html', controller: 'blockerController', isloginrequired: true },
        { name: 'myorders', url: '/myorders', templateUrl: 'app/modules/static/myOrdersAndStatistics.html', controller: 'myorders', isloginrequired: false },
        { name: 'profilesettings', url: '/profilesettings', templateUrl: 'app/modules/static/profileSettings.html', controller: 'profilesettings', isloginrequired: false },
        { name: 'successstories', url: '/successstories', templateUrl: 'app/modules/static/successStories.html', controller: 'suceesstories', isloginrequired: false },
        { name: 'MySupportTickets', url: '/MySupportTickets', templateUrl: 'app/modules/static/supportTickets.html', controller: 'supporttickets', isloginrequired: false },
        { name: 'takeatour', url: '/takeatour', templateUrl: 'app/modules/static/takeTour.html', isloginrequired: false },
        { name: 'viewFullProfileCustomer', url: '/viewFullProfileCustomer', templateUrl: 'app/modules/viewFullProfile/viewFullProfileCustomer.html', controller: 'viewFullProfileCustomer', isloginrequired: true },
        { name: 'termsAndConditions', url: '/termsAndConditions', templateUrl: 'app/modules/static/termsAndConditions.html', isloginrequired: false },
        { name: 'ourbranches', url: '/ourbranches', templateUrl: 'app/modules/static/ourBranches.html', controller: 'ourbranches', isloginrequired: false },
        { name: 'privacyPolicy', url: '/privacyPolicy', templateUrl: 'app/modules/static/privacyPolicy.html', isloginrequired: false },
        { name: 'UpgradeMembership', url: '/UpgradeMembership', templateUrl: 'app/modules/static/upgradeMembership.html', controller: "upgrademembership", isloginrequired: false },
        { name: 'aboutUs', url: '/aboutUs', templateUrl: 'app/modules/static/aboutUs.html', isloginrequired: false },
        { name: 'homedummy', url: '/homedummy', templateUrl: 'app/modules/homePage/homepagedummy.html', isloginrequired: false },
        { name: 'paymentresponse', url: '/paymentresponse', templateUrl: 'app/modules/payments/views/paymentResponse.html', isloginrequired: false },
        { name: 'missingfields', url: '/missingfields/:id', templateUrl: 'app/modules/missingfieldspage/missingfields.html', controller: "missingfieldsctrl", isloginrequired: true },
        { name: 'ccAvenue', url: '/ccAvenue', templateUrl: 'app/modules/static/ccAvenue.Html', controller: "ccAvenueCtrl", isloginrequired: false },
        { name: 'viewFull', url: '/Customer_new/Employee_new/EmployeeViewFullProfile.aspx', templateUrl: 'app/modules/viewFullProfile/commonviewfullprofile.html', controller: 'commonviewfullprofile', isloginrequired: false },
        { name: 'commonviewfull', url: '/commonviewfull', templateUrl: 'app/modules/viewFullProfile/commonviewfullprofile.html', controller: 'commonviewfullprofile', isloginrequired: false },
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

    _.each(states, function(item) {

        var innerView = {};
        if (item.name === "viewFull" || item.name === "commonviewfull") {
            innerView = {
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                }
            };
        } else {
            innerView = {
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
        }
        $stateProvider.state(item.name, {
            url: item.url,
            views: (item.ishomepage ? outerView : innerView),
            data: {
                requiresLogin: item.isloginrequired == null ? true : item.isloginrequired,
                //css: item.ishomepage == true ? 'dist/css/homePage.min.css' : 'dist/css/homePage.min.css'
            }
        })
        $locationProvider.html5Mode(true);
    });
}]);
app.config(function(reCAPTCHAProvider) {
    reCAPTCHAProvider.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
    // optional
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
})
app.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        if (to.data && to.data.requiresLogin) {
            if (sessionStorage.getItem('cust.id') === null) {
                e.preventDefault();
                console.log('success');
                $state.go('home');
            } else {
                console.log('double success');
                if (to.name !== "mobileverf" && to.name !== "missingfields" && to.name !== "missingfields" && (sessionStorage.getItem('cust.isemailverified') === 'false' || sessionStorage.getItem('cust.isnumberverifed') === 'false')) {
                    e.preventDefault();
                    console.log('success');
                    $state.go('mobileverf');
                }
            }
        }
    });
})