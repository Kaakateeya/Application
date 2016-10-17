app.controller('termsandconditions', ['$scope', function (scope) {
    //hide #back-top first
    $(".back-to-top").hide();
    scope.initconditions = function () {
        // fade in #back-top    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

}]);