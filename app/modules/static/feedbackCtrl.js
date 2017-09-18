app.controller('feedbackCtrl', ['$scope', 'reCAPTCHA', 'feedbacksubmit',
    'authSvc',
    function(scope, reCAPTCHA, feedbacksubmit, authSvc) {
        reCAPTCHA.setPublicKey('6LcrVwkUAAAAAGPJwyydnezgtVE7MlDCi3YQANKW');
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
            Recaptcha.reload();
        };
    }
]);