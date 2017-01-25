
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
/*
stars
*/
$(document).ready(function () {
    // Submenu Menu 

    $('#menu-wrapper-stra ul li').hover(

		function () {

		    $(this).find('ul:first').slideDown(0);

		}, function () {

		    $(this).find('ul').slideUp(0);

		});


    $('#menu-wrapper-stra ul li ul li').click(
        function () {
            $('#menu-wrapper-stra ul li.selected').css("background-color", "yellow");
        });


});

/*for 2 nd div*/


$(document).ready(function () {
    // Submenu Menu 

    $('#menu-wrapper2 ul li').hover(

		function () {

		    $(this).find('ul:first').slideDown(0);

		}, function () {

		    $(this).find('ul').slideUp(0);

		});


    $('#menu-wrapper2 ul li ul li').click(
        function () {
            $('#menu-wrapper2 ul li.selected').css("background-color", "yellow");
        });


});
/*
stars
*/
$(document).ready(function () {
    // Submenu Menu 

    $('#menu-wrapper2-stra ul li').hover(

		function () {

		    $(this).find('ul:first').slideDown(0);

		}, function () {

		    $(this).find('ul').slideUp(0);

		});


    $('#menu-wrapper2-stra ul li ul li').click(
        function () {
            $('#menu-wrapper2-stra ul li.selected').css("background-color", "yellow");
        });


});