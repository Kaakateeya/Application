
$(document).ready(function () {
    // Submenu Menu 

    $('#menu-wrapper ul li').hover(

		function () {

		    $(this).find('ul:first').slideDown(0);

		}, function () {

		    $(this).find('ul').slideUp(0);

		});


    $('#menu-wrapper ul li ul li').click(
        function () {
            $('#menu-wrapper ul li.selected').css("background-color", "yellow");
        });


});
