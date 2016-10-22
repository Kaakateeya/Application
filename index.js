/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['reCAPTCHA', 'ui.router', 'uiRouterStyles']);
app.apiroot = 'http://183.82.0.58:8010/Api/'



app.config(function ($stateProvider, $urlRouterProvider) {

    var states = [{ name: 'home', url: '/', ishomepage: true, isloginrequired: false },
    { name: 'dashboard', url: '/home', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner', isloginrequired: true },
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
    { name: 'termsAndConditions', url: '/termsAndConditions', templateUrl: 'app/modules/static/termsAndConditions.html',isloginrequired: false  },
    { name: 'Registration', url: '/Registration', templateUrl: 'app/modules/registration/views/registrationView.html', controller: "registration",isloginrequired: false  },
    { name: 'regprofiles', url: '/regprofiles', templateUrl: 'app/modules/registration/views/registrationRegProfiles.html', controller: "registrationReg",isloginrequired: false  },
    { name: 'ourbranches', url: '/ourbranches', templateUrl: 'app/modules/static/ourBranches.html', controller: 'ourbranches', isloginrequired: false },
    { name: 'privacyPolicy', url: '/privacyPolicy', templateUrl: 'app/modules/static/privacyPolicy.html', isloginrequired: false },
    { name: 'UpgradeMembership', url: '/UpgradeMembership', templateUrl: 'app/modules/static/upgradeMembership.html', controller: "upgrademembership", isloginrequired: false },
    { name: 'aboutUs', url: '/aboutUs', templateUrl: 'app/modules/static/aboutUs.html', isloginrequired: false }

    ];

    var homepagecss = ['src/css/bootstrap.min.css', 'src/css/styleshome.css', 'src/css/styleshomerespinsive.css',
        'node_modules/font-awesome/css/font-awesome.min.css', 'src/css/bootstrap-responsive.min.css', 'src/css/stylekaakateeya.css',
        'style_responsive.css', 'src/css/uniform.default.css', 'src/css/chosen.css', 'src/css/jquery-css.css', 'src/css/bootstrap-fileupload.css',
        'src/css/custom_styles.css', 'src/css/custom_responsive.css', 'src/css/GITheWall.css', 'src/css/CustomerSearchResult_New.css',
        'src/css/dashBoard.css', 'src/css/allimagesClasses.css', 'node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'];

    var innsercss = ['src/css/bootsrsapinner.min.css', 'node_modules/font-awesome/css/font-awesome.min.css', 'src/css/bootstrap-responsive.min.css', 'src/css/stylekaakateeya.css',
        'style_responsive.css', 'src/css/uniform.default.css', 'src/css/chosen.css', 'src/css/jquery-css.css', 'src/css/bootstrap-fileupload.css',
        'src/css/custom_styles.css', 'src/css/custom_responsive.css', 'src/css/GITheWall.css', 'src/css/CustomerSearchResult_New.css',
        'src/css/dashBoard.css', 'src/css/allimagesClasses.css', 'node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css'];

    var sitescripts = ['src/js/jquery-1.8.3.min.js',
       
        
        'src/js/jquery.blockui.js', 'src/js/bootstrap-multiselect.js', 'src/js/jquery.alert.js', 'src/js/GI.TheWall.min.js', 'src/js/KaakateeyaHelper.js',
        'src/js/CustomerCache_prod.js', 'src/js/scrollgress.js', 'src/js/jquery-ui.js', 'src/js/lhnchatbutton-current.min.cache',
        'src/js/scriptsKaakateeya.js',
        'index.js', 'app/modules/dashboard/controllers/dashboardController.js', 'app/services/customerDashboardServices.js',
        'app/directives/partnerDirective.js', 'app/directives/multiSelectDirective.js', 'node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
        'app/modules/static/successStories.js', 'app/modules/homePage/homePage.js', 'app/modules/mobileverification/mobileVerification.js',
        'app/modules/payments/controllers/paymentCtrl.js', 'app/modules/search/advanceSearchCtrl.js', 'app/modules/search/generalSearchView.js',
        'app/modules/search/profileidSearch.js', 'app/modules/search/savedSearchView.js', 'app/modules/static/dataGetin.js',
        'app/modules/static/faqs.js', 'app/modules/static/feedbackCtrl.js', 'app/modules/static/helpPage.js', 'app/modules/static/loginBlocker.js',
        'app/modules/static/myOrdersAndStatistics.js', 'app/modules/static/profileSettings.js', 'app/modules/static/supportTickets.js',
        'app/modules/static/viewMyProfile.js', 'app/modules/viewFullProfile/viewFullProfileCustomer.js', 'app/modules/registration/controllers/registrationCntrl.js',
        'app/modules/registration/controllers/registrationRegProfiles.js', 'app/services/successstoriesServices.js', 'app/modules/static/privacyPolicyCtrl.js',
        'app/modules/static/accodian.js',
        'app/modules/static/termsAndConditions.js', 'app/services/feedbackServices.js', 'app/services/serviceBind.js', 'app/constants/arrayConstants.js',
        'app/services/homepageServices.js', 'app/services/authSvc.js', 'src/js/headerctrl.js', 'bower_components/angular-ui-router-styles/ui-router-styles.js',
        'app\services\helpService.js','app\services\ourbranchService.js'
    ]

      var jsscripts = ['src/js/jquery-1.8.3.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/underscore/underscore-min.js',
        'bower_components/angular-re-captcha/angular-re-captcha.js', 'bower_components/angular-ui-router-styles/ui-router-styles.js',
        'src/js/jquery.blockui.js', 'src/js/bootstrap-multiselect.js', 'src/js/jquery.alert.js', 'src/js/GI.TheWall.min.js', 'src/js/KaakateeyaHelper.js',
        'src/js/CustomerCache_prod.js', 'src/js/scrollgress.js', 'src/js/jquery-ui.js', 'src/js/lhnchatbutton-current.min.cache',
        'http://commondatastorage.googleapis.com/lhn/chat/scripts/lhnchatbutton-current.min.js', 'src/js/scriptsKaakateeya.js',
        'index.js', 'app/modules/dashboard/controllers/dashboardController.js', 'app/services/customerDashboardServices.js',
        'app/directives/partnerDirective.js', 'app/directives/multiSelectDirective.js', 'node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
        'app/modules/static/successStories.js', 'app/modules/homePage/homePage.js', 'app/modules/mobileverification/mobileVerification.js',
        'app/modules/payments/controllers/paymentCtrl.js', 'app/modules/search/advanceSearchCtrl.js', 'app/modules/search/generalSearchView.js',
        'app/modules/search/profileidSearch.js', 'app/modules/search/savedSearchView.js', 'app/modules/static/dataGetin.js',
        'app/modules/static/faqs.js', 'app/modules/static/feedbackCtrl.js', 'app/modules/static/helpPage.js', 'app/modules/static/loginBlocker.js',
        'app/modules/static/myOrdersAndStatistics.js', 'app/modules/static/profileSettings.js', 'app/modules/static/supportTickets.js',
        'app/modules/static/viewMyProfile.js', 'app/modules/viewFullProfile/viewFullProfileCustomer.js', 'app/modules/registration/controllers/registrationCntrl.js',
        'app/modules/registration/controllers/registrationRegProfiles.js', 'app/services/successstoriesServices.js', 'app/modules/static/privacyPolicyCtrl.js',
        'app/modules/static/accodian.js',
        'app/modules/static/termsAndConditions.js', 'app/services/feedbackServices.js', 'app/services/serviceBind.js', 'app/constants/arrayConstants.js',
        'app/services/homepageServices.js', 'app/services/authSvc.js', 'src/js/headerctrl.js', 'bower_components/angular-ui-router-styles/ui-router-styles.js',
    ]
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
                requiresLogin: item.isloginrequired == null ? true : item.isloginrequired
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
        //console.log(to);
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

