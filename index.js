/**
 * AngularJS 
 * @author vinu <vinodanasuri@gmail.com>
 */

/**
 * Main App Creation
 */


var app = angular.module('Kaakateeya', ['reCAPTCHA', 'ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngAnimate', 'ngIdle', 'ngMaterial',
    'ngMessages', 'ngAria', 'KaakateeyaEdit', 'ngPassword', 'KaakateeyaRegistration', 'jcs-autoValidate', 'rzModule', 'angularPromiseButtons', 'ngLoadingSpinner',
    '720kb.tooltips'
]);

// 'angular-loading-bar'

//app.apiroot = 'http://52.66.131.254:8010/Api/';
// //app.apiroot183 = 'http://52.66.131.254:8025/Api/';

app.apiroot183 = 'http://183.82.0.58:8025/Api/';

// app.apiroot = 'http://183.82.0.58:8010/Api/';
//app.apiroot = 'http://183.82.0.58:8070/Api/';

app.apiroot = 'http://183.82.0.58:3000/Api/';

app.global = {
    'alertType': 'toast-top-right'
};

app.GlobalImgPath = 'http://d16o2fcjgzj2wp.cloudfront.net/';
app.Mnoimage = app.GlobalImgPath + "Images/customernoimages/Mnoimage.jpg";
app.Fnoimage = app.GlobalImgPath + "Images/customernoimages/Fnoimage.jpg";

app.prefixPath = 'Images/ProfilePics/';
app.GlobalImgPathforimage = 'https://s3.ap-south-1.amazonaws.com/kaakateeyaprod/';
app.accesspathdots = app.GlobalImgPathforimage + app.prefixPath;

app.config(['$stateProvider', '$urlRouterProvider', 'IdleProvider', 'KeepaliveProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, IdleProvider, KeepaliveProvider, $locationProvider) {
    IdleProvider.autoResume('notIdle');
    // set idle interrupt events.  This is the default list except for 'mousemove', which is difficult to test with.
    IdleProvider.interrupt('keydown DOMMouseScroll mousewheel mousedown');
    IdleProvider.idle(5 * 60);
    var states = [{ name: 'home', url: '/', ishomepage: true, isloginrequired: false, controller: 'home' },
        { name: 'dashboard', url: '/dashboard/:type', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner', isloginrequired: true },
        { name: 'dashboardnew', url: '/dashboardnew/:type', templateUrl: 'app/modules/dashboard/customerDashboardView.html', controller: 'Controllerpartner', isloginrequired: true },
        { name: 'mobileverf', url: '/mobileverf', templateUrl: 'app/modules/mobileverification/mobileverification.html', controller: 'mobileverifyController', isloginrequired: true },
        { name: 'General', url: '/General/:id', templateUrl: 'app/modules/search/generalSearchView.html', controller: 'Generalsearch', isloginrequired: false },
        { name: 'datagetin', url: '/datagetin', templateUrl: 'app/modules/static/dataGetin.html', controller: 'ModalDemoCtrl', isloginrequired: true },
        { name: 'faqs', url: '/faqs', templateUrl: 'app/modules/static/faqs.html', controller: 'faqs', isloginrequired: false },
        { name: 'feedback', url: '/feedback', templateUrl: 'app/modules/static/feedbackView.html', controller: 'feedbackCtrl', isloginrequired: false },
        { name: 'help', url: '/help', templateUrl: 'app/modules/static/helpPage.html', controller: 'help', isloginrequired: false },
        { name: 'blockerController', url: '/blockerController/:eid', templateUrl: 'app/modules/static/loginBlocker.html', controller: 'blockerController', isloginrequired: true },
        { name: 'myorders', url: '/myorders', templateUrl: 'app/modules/static/myOrdersAndStatistics.html', controller: 'myorders', isloginrequired: false },
        { name: 'profilesettings', url: '/profilesettings', templateUrl: 'app/modules/static/profileSettings.html', controller: 'profilesettings', isloginrequired: true },
        { name: 'successstories', url: '/successstories', templateUrl: 'app/modules/static/successStories.html', controller: 'suceesstories', isloginrequired: false },
        { name: 'MySupportTickets', url: '/MySupportTickets', templateUrl: 'app/modules/static/supportTickets.html', controller: 'supporttickets', isloginrequired: true },
        { name: 'takeatour', url: '/takeatour', templateUrl: 'app/modules/static/takeTour.html', isloginrequired: false },
        { name: 'viewFullProfileCustomer', url: '/viewFullProfileCustomer', templateUrl: 'app/modules/viewFullProfile/viewFullProfileCustomer.html', controller: 'viewFullProfileCustomer', isloginrequired: true },
        { name: 'termsAndConditions', url: '/termsAndConditions', templateUrl: 'app/modules/static/termsAndConditions.html', isloginrequired: false },
        { name: 'ourbranches', url: '/ourbranches', templateUrl: 'app/modules/static/ourBranches.html', controller: 'ourbranches', isloginrequired: false },
        { name: 'privacyPolicy', url: '/privacyPolicy', templateUrl: 'app/modules/static/privacyPolicy.html', isloginrequired: false },
        //{ name: 'UpgradeMembership', url: '/UpgradeMembership', templateUrl: 'app/modules/static/upgradeMembership.html', controller: "upgrademembership", isloginrequired: true },
        { name: 'aboutUs', url: '/aboutUs', templateUrl: 'app/modules/static/aboutUs.html', isloginrequired: false },
        { name: 'homedummy', url: '/homedummy', templateUrl: 'app/modules/homePage/homepagedummy.html', isloginrequired: false },
        { name: 'paymentresponse', url: '/paymentresponse', templateUrl: 'app/modules/payments/views/paymentResponse.html', isloginrequired: false },
        { name: 'missingfields', url: '/missingfields/:id', templateUrl: 'app/modules/missingfieldspage/missingfields.html', controller: "missingfieldsctrl", isloginrequired: true },
        { name: 'ccAvenue', url: '/ccAvenue', templateUrl: 'app/modules/static/ccAvenue.Html', controller: "ccAvenueCtrl", isloginrequired: false },
        { name: 'viewFull', url: '/Customer_new/Employee_new/EmployeeViewFullProfile.aspx', templateUrl: 'app/modules/viewFullProfile/commonviewfullprofile.html', controller: 'commonviewfullprofile', isloginrequired: false },
        { name: 'commonviewfull', url: '/commonviewfull', templateUrl: 'app/modules/viewFullProfile/commonviewfullprofile.html', controller: 'commonviewfullprofile', isloginrequired: false },
        { name: 'ccavResponseHand', url: '/ccavResponseHand/:data', templateUrl: 'app/modules/payments/views/paymentResponseHandler.html', controller: 'ccavenueresponsectrl', isloginrequired: false },
        { name: 'forgetpasswordemail', url: '/forgetpasswordemail', templateUrl: 'app/modules/static/forgetPassword.html', controller: 'forgetpasswordemail', isloginrequired: false },
        { name: 'Paymentnew', url: '/Paymentnew', templateUrl: 'app/modules/paymentNew/paymentNew.html', isloginrequired: false },
        { name: 'loggedAscustomer', url: '/loggedAscustomer', templateUrl: 'app/modules/loggedAsCusomer/loggedAsCustomer.html', controller: 'loggedascustomers', isloginrequired: false },
        { name: 'newhomecaste', url: '/caste', templateUrl: 'app/modules/newHomepage/newhomepageallcaste.html', controller: 'newhomepagecastecontroller', isloginrequired: false },
        { name: 'newhome', url: '/caste/:caste', templateUrl: 'app/modules/newHomepage/newHomepagecaste.html', controller: 'newhomepcontroller', isloginrequired: false },
        { name: 'locationall', url: '/location', templateUrl: 'app/modules/newHomepage/locationall.html', controller: 'locationall', isloginrequired: false },
        { name: 'location', url: '/location/:location', templateUrl: 'app/modules/newHomepage/location.html', controller: 'locationparicular', isloginrequired: false },
        { name: 'empLogintoCustomer', url: '/empLogintoCustomer/:profileID', templateUrl: 'app/modules/static/emplogToCustomer.html', controller: "empLogCustomerCtrl", isloginrequired: false },
        //{ name: 'UpgradeMembershipnew', url: '/UpgradeMembershipnew', templateUrl: 'app/modules/static/upgradeMembership_new.html', controller: "upgrademembershipnew", isloginrequired: true }
        { name: 'UpgradeMembership', url: '/UpgradeMembership', templateUrl: 'app/modules/static/upgradeMembership_new.html', controller: "upgrademembershipnew", isloginrequired: true },
        { name: 'viewMyProfileMail', url: '/Viewfullprofilemail', templateUrl: 'app/modules/viewMyProfileMail/index.html', isloginrequired: false },
        { name: 'mailLogin', url: '/mailLogin', templateUrl: 'app/modules/static/mailLogin.html', controller: "mailLoginCtrl", isloginrequired: false },
        { name: 'uploadPhoto', url: '/uploadPhoto/:custid', templateUrl: 'app/modules/static/uploadPhoto.html', controller: "uploadPhotoCtrl", isloginrequired: false },
        { name: 'uploadPhotoencrypt', url: '/uploadPhotoencrypt/:custid', templateUrl: 'app/modules/static/uploadPhotoencrypt.html', controller: "uploadPhotoencryptCtrl", isloginrequired: false },
        { name: 'horoDisplay', url: '/horoDisplay', templateUrl: 'app/modules/static/horoDisplay.html', controller: "horoDisplaysCtrl", isloginrequired: false },
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
        if (item.name === "viewFull" || item.name === "commonviewfull" || item.name === "loggedAscustomer" || item.name === "viewMyProfileMail" || item.name === "uploadPhoto" || item.name === "uploadPhotoencrypt" || item.name === "horoDisplay") {
            innerView = {
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                }
            };
        } else if (item.name === "newhome" || item.name === "newhomecaste" || item.name === "locationall" || item.name === "location") {
            innerView = {
                "content@": {
                    templateUrl: item.templateUrl,
                    controller: item.controller
                },
                "bottompanel@": {
                    templateUrl: "templates/footer.html"
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
            },
            resolve: {
                user: function($http) {
                    if (item.ishomepage) {
                        return $http.post('/test', JSON.stringify({ source: 'Kaakateeya' }))
                            .then(function(response) {
                                if (response.data) {
                                    sessionStorage.setItem('token', response.data.token);
                                }
                            });
                    } else {
                        return true;
                    }
                }
            }
        });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

    });
}]);
app.config(function(reCAPTCHAProvider) {
    reCAPTCHAProvider.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
});
app.run(function($rootScope, $state, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        window.prerenderReady = false;
        if (to.name === 'aboutUs' || to.name === 'faqs' || to.name === 'feedback' || to.name === 'help' ||
            to.name === 'myorders' || to.name === 'ourbranches' || to.name === 'privacyPolicy' || to.name === 'registration' ||
            to.name === 'successstories' || to.name === 'takeatour' || to.name === 'termsAndConditions') {
            $rootScope.robots = "noindex,nofollow";
            $rootScope.keyWord = '';
            $rootScope.description = '';
            $rootScope.canonicalhref = "";
            $rootScope.propertytypecontent = "website";
            $rootScope.propertytitlecontent = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
            $rootScope.propertydescriptioncontent = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
            $rootScope.propertyContenturl = "http://www.kaakateeya.com";
            $rootScope.propertysite_name = "Best Marriage Bureau In India";
            $rootScope.twitterdescription = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
            $rootScope.twittertitle = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
            $rootScope.twitterimage = "";
            switch (to.name) {
                case "aboutUs":
                    $rootScope.casteTitle = 'AboutUS - Kaakateeya';
                    break;
                case "faqs":
                    $rootScope.casteTitle = 'FAQs';
                    break;
                case "feedback":
                    $rootScope.casteTitle = 'Feedback';
                    break;
                case "help":
                    $rootScope.casteTitle = 'Help';
                    break;
                case "myorders":
                    $rootScope.casteTitle = 'MyOrders';
                    break;
                case "ourbranches":
                    $rootScope.casteTitle = 'Kaakateeya  - Our Branches';
                    break;
                case "privacyPolicy":
                    $rootScope.casteTitle = 'PrivacyPolicy';
                    break;
                case "registration":
                    $rootScope.robots = "noodp";
                    $rootScope.canonicalhref = "http://www.kaakateeya.com/registration";
                    $rootScope.casteTitle = 'Registration';
                    break;
                case "successstories":
                    $rootScope.robots = "noodp";
                    $rootScope.canonicalhref = "http://www.kaakateeya.com/successstories";
                    $rootScope.casteTitle = 'SuccessStories';
                    break;
                case "takeatour":
                    $rootScope.casteTitle = 'TakeaTour';
                    break;
                case "termsAndConditions":
                    $rootScope.casteTitle = 'TermsandConditions';
                    break;
            }

        } else {

            // $rootScope.casteTitle = 'Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony';
            // $rootScope.keyWord = 'Marriage bureau, Matrimonial services, Matrimony sites, matrimony, matrimonial';
            // $rootScope.description = 'We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.';
            // $rootScope.canonicalhref = "http://www.kaakateeya.com";
            // $rootScope.propertytypecontent = "website";
            // $rootScope.propertytitlecontent = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
            // $rootScope.propertydescriptioncontent = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
            // $rootScope.propertyContenturl = "http://www.kaakateeya.com";
            // $rootScope.propertysite_name = "Best Marriage Bureau In India";
            // $rootScope.twitterdescription = "We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.";
            // $rootScope.twittertitle = "Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony";
            // $rootScope.twitterimage = "";
            // $rootScope.robots = "noodp";

        }
        var loggedAscustomerPage = sessionStorage.getItem("loggedAscustomerPage");

        if (to.data && to.data.requiresLogin) {
            if (sessionStorage.getItem('cust.id') === null) {
                e.preventDefault();
                console.log('success');
                $state.go('home');
            } else {
                if (sessionStorage.getItem('cust.id') !== null) {

                    if (loggedAscustomerPage === "true") {

                    } else {
                        var misStatus = sessionStorage.getItem('missingStatus');
                        if ((to.name !== "mobileverf" && to.name !== "missingfields")) {
                            console.log('success');
                            if (sessionStorage.getItem('cust.isemailverified') === 'false' || sessionStorage.getItem('cust.isnumberverifed') === 'false') {
                                $state.go('mobileverf');
                                e.preventDefault();
                            } else if (misStatus === '1' || misStatus === '2' || misStatus === '3' || misStatus === '4' || misStatus === '5') {
                                $state.go("missingfields", { id: misStatus });
                                e.preventDefault();
                            }
                        }
                    }
                }
            }
        } else {
            if (loggedAscustomerPage === "true") {} else {
                if (to.name === 'General') {
                    if (sessionStorage.getItem('cust.id') !== null) {
                        var misStatuss = sessionStorage.getItem('missingStatus');
                        if ((to.name !== "mobileverf" && to.name !== "missingfields")) {
                            console.log('success');
                            if (sessionStorage.getItem('cust.isemailverified') === 'false' || sessionStorage.getItem('cust.isnumberverifed') === 'false') {
                                $state.go('mobileverf');
                                e.preventDefault();
                            } else if (misStatuss === '1' || misStatuss === '2' || misStatuss === '3' || misStatuss === '4' || misStatuss === '5') {
                                $state.go("missingfields", { id: misStatuss });
                                e.preventDefault();
                            }
                        }
                    }
                }
            }
        }
    });
    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            window.prerenderReady = true;
        });
});