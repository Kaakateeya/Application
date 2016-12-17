app.controller('feedbackCtrl', ['$scope', 'reCAPTCHA', 'feedbacksubmit',
    'authSvc',
    function(scope, reCAPTCHA, feedbacksubmit, authSvc) {
        reCAPTCHA.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
        // scope.optionhereabout = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Search Engine', title: 'Search Engine', value: 481 },
        //     { label: 'Newspaper', title: 'Newspaper', value: 482 },
        //     { label: 'Magzine', title: 'Magzine', value: 483 },
        //     { label: 'Friend', title: 'Friend', value: 484 },
        //     { label: 'Email', title: 'Email', value: 485 },
        //     { label: 'No Answer', title: 'No Answer', value: 486 }
        // ];
        // scope.improveourwebsite = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Search', title: 'Search', value: 487 },
        //     { label: 'Registration', title: 'Registration', value: 488 },
        //     { label: 'Login', title: 'Login', value: 489 },
        //     { label: 'FAQ', title: 'FAQ', value: 490 },
        //     { label: 'About Us', title: 'About Us', value: 491 },
        //     { label: 'No Answer', title: 'No Answer', value: 492 }
        // ];

        // scope.prices = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Expensive', title: 'Expensive', value: 493 },
        //     { label: 'OK', title: 'OK', value: 494 },
        //     { label: 'Cheap', title: 'Cheap', value: 495 },
        //     { label: 'No comments', title: 'No comments', value: 496 },
        //     { label: 'No Answer', title: 'No Answer', value: 497 },
        // ];

        // scope.downloadtime = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Fast', title: 'Fast', value: 498 },
        //     { label: 'Average', title: 'Average', value: 499 },
        //     { label: 'Slow', title: 'Slow', value: 500 },
        //     { label: 'No Answer', title: 'No Answer', value: 501 },
        // ];

        // scope.yourratethesearch = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Valuable', title: 'Valuable', value: 507 },
        //     { label: 'Average', title: 'Average', value: 508 },
        //     { label: 'Bad', title: 'Bad', value: 509 },
        //     { label: 'No Answer', title: 'No Answer', value: 510 },
        // ];
        // scope.comparesites = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Better', title: 'Better', value: 502 },
        //     { label: 'Same', title: 'Same', value: 503 },
        //     { label: 'Bad', title: 'Bad', value: 504 },
        //     { label: 'No Answer', title: 'No Answer', value: 505 },
        // ];
        // scope.recomendedtofriends = [
        //     { label: '--select--', title: '--select--', value: 0 },
        //     { label: 'Yes', title: 'Yes', value: 511 },
        //     { label: 'No', title: 'No', value: 512 },
        //     { label: 'No Answer', title: 'No Answer', value: 513 },
        // ];

        //scope.HearAbout = "481";
        scope.submit = function() {

            var custid = authSvc.getCustId();
            scope.Cust_ID = custid !== undefined && custid !== null && custid !== "" ? custid : null;
            var objectfeedback = {};
            objectfeedback.Cust_ID = scope.Cust_ID;
            objectfeedback.HearAbout = scope.HearAbout !== undefined && scope.HearAbout !== "" ? scope.HearAbout : null;
            objectfeedback.ImproveWebsite = scope.ImproveWebsite !== undefined && scope.ImproveWebsite !== "" ? scope.ImproveWebsite : null;
            objectfeedback.kaaPrices = scope.kaaPrices !== undefined && scope.kaaPrices !== "" ? scope.kaaPrices : null;
            objectfeedback.DownLoadTime = scope.DownLoadTime !== undefined && scope.DownLoadTime !== "" ? scope.DownLoadTime : null;
            objectfeedback.CompareSite = scope.CompareSite !== undefined && scope.CompareSite !== "" ? scope.CompareSite : null;
            objectfeedback.FavSite = scope.FavSite !== undefined && scope.FavSite !== "" ? scope.FavSite : null;
            objectfeedback.SearchRate = scope.SearchRate !== undefined && scope.SearchRate !== "" ? scope.SearchRate : null;
            objectfeedback.Recommend = scope.Recommend !== undefined && scope.Recommend !== "" ? scope.Recommend : null;
            objectfeedback.Comments = scope.Comments !== undefined && scope.Comments !== "" ? scope.Comments : null;
            feedbacksubmit.feedbacksubmitinsert(objectfeedback).then(function(response) {
                if (response.data == 1) {
                    alert("Thank u for your valuable feedback");
                    scope.clearallfields();

                }
            });
        };
        scope.clearallfields = function() {
            scope.Cust_ID = "";
            scope.HearAbout = 0;
            scope.ImproveWebsite = 0;
            scope.kaaPrices = 0;
            scope.DownLoadTime = 0;
            scope.CompareSite = 0;
            scope.FavSite = "";
            scope.SearchRate = 0;
            scope.Recommend = 0;
            scope.Comments = "";
            scope.captcha="";
        };

    }
]);