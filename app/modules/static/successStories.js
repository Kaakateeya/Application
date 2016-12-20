app.controller('suceesstories', ['$scope', 'successstoriesdata', function(scope, suceessdata) {
    scope.success = [];

    scope.flag = 8;
    scope.fromge = 1;
    scope.topage = 8;
    scope.loadmore = true;
    scope.init = function() {
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {

            scope.success = response.data;
        });
    };
    $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            scope.loadmore = false;
            scope.loaderspin = true;
            scope.flag += 8;
            scope.fromge = scope.flag - 7;
            scope.topage = scope.flag;
            suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
                if (response.data !== null && response.data !== "" && response.data !== undefined && response.data.length > 0) {
                    scope.success = $.unique((scope.success).concat(response.data));
                    scope.loadmore = true;
                    scope.loaderspin = false;
                } else {
                    scope.loadmore = false;
                    scope.loaderspin = false;
                }
            });
        }
    });

    scope.loadmorefunction = function() {
        scope.loadmore = false;
        scope.loaderspin = true;
        scope.flag += 8;
        scope.fromge = scope.flag - 7;
        scope.topage = scope.flag;
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function(response) {
            if (response.data !== null && response.data !== "" && response.data !== undefined && response.data.length > 0) {
                scope.success = $.unique((scope.success).concat(response.data));
                scope.loadmore = true;
                scope.loaderspin = false;
            } else {
                scope.loadmore = false;
                scope.loaderspin = false;
            }
        });
    };
}]);