
$(document).ready(function () {
    $('#headers').click(function () {
        $('#toggleDemo').slideToggle("slow");
        $('#spantoggle').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    });
});

$(document).ready(function () {
    $('#moresearch').click(function () {
        $('#toggleDemo').slideToggle("slow");
    });
});

(function ($) {
    $(document).ready(function () {
        $('#menuToggle').click(function (e) {
            var $parent = $(this).parent('nav');
            $parent.toggleClass("open");
            var navState = $parent.hasClass('open') ? "hide" : "show";
            $(this).attr("title", navState + " navigation");
            setTimeout(function () {
                console.log("timeout set");
                $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
            }, 200);
            e.preventDefault();
        });
    });
})(jQuery);

