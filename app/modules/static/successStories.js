app.controller('suceesstories', ['$scope', 'successstoriesdata', function (scope, suceessdata) {
    scope.success = [];

    scope.flag = 8;
    scope.fromge = 1;
    scope.topage = 8;
    scope.init = function () {
        suceessdata.suceessdataget(scope.fromge, scope.topage).then(function (response) {
            console.log(response.data);
            scope.success = response.data;
        });
    };
    $(window).scroll(function () {

        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            scope.flag += 8;
            scope.fromge = scope.flag - 7;
            scope.topage = scope.flag;
            suceessdata.suceessdataget(scope.fromge, scope.topage).then(function (response) {
                scope.success = $.unique((scope.success).concat(response.data));
            });
        }
    });
}]);