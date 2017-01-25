$(document).ready(function(){
	$('.menu li a:first').css('padding-left','0');
	$('.menu li a:last').css('padding-right','0');
	$('.sidebar-menu li:last').css('border-bottom','1px solid #D6D6D6');
	
	//set active links by current url
	var pathname = window.location.pathname;
    var pathname = pathname.split('/');
    var tester = pathname[pathname.length-1];
    $('.menu a').each(function()
    {
       var test = $(this).attr('href');
       if (test == tester)
       {
           $(this).addClass('menu-selected');
       }
    });
});

$slideshow = {
    context: false,
    tabs: false,
    timeout: 5000,      // time before next slide appears (in ms)
    slideSpeed:1000,   // time it takes to slide in each slide (in ms)
    tabSpeed: 1000,      // time it takes to slide in each slide (in ms) when clicking through tabs
    fx: 'fade',   // the slide effect to use
    
    init: function() {
        // set the context to help speed up selectors/improve performance
        this.context = $('#slideshow');
        
        // set tabs to current hard coded navigation items
        this.tabs = $('ul.slides-nav li', this.context);
        
        // remove hard coded navigation items from DOM 
        // because they aren't hooked up to jQuery cycle
        this.tabs.remove();
        
        // prepare slideshow and jQuery cycle tabs
        this.prepareSlideshow();
    },
    
    prepareSlideshow: function() {
        // initialise the jquery cycle plugin -
        // for information on the options set below go to: 
        // http://malsup.com/jquery/cycle/options.html
        $('div.slides > ul', $slideshow.context).cycle({
            fx: $slideshow.fx,
            timeout: $slideshow.timeout,
            speed: $slideshow.slideSpeed,
            fastOnEvent: $slideshow.tabSpeed,
            pager: $('ul.slides-nav', $slideshow.context),
            pagerAnchorBuilder: $slideshow.prepareTabs,
            before: $slideshow.activateTab,
            pauseOnPagerHover: true,
            pause: true
        });            
    },
    
    prepareTabs: function(i, slide) {
        // return markup from hardcoded tabs for use as jQuery cycle tabs
        // (attaches necessary jQuery cycle events to tabs)
        return $slideshow.tabs.eq(i);
    },

    activateTab: function(currentSlide, nextSlide) {
        // get the active tab
        var activeTab = $('a[href="#' + nextSlide.id + '"]', $slideshow.context);
        
        // if there is an active tab
        if(activeTab.length) {
            // remove active styling from all other tabs
            $slideshow.tabs.removeClass('on');
            
            // add active styling to active button
            activeTab.parent().addClass('on');
        }            
    }            
};


$(function() {
    // add a 'js' class to the body
    $('body').addClass('js');
    
    // initialise the slideshow when the DOM is ready
    $slideshow.init();
});


function validateEnquiry()
{
	var enqName 	= $("#name2").val();
	var enqEmail 	= $("#email").val();
	var enqPhone 	= $("#phone").val();
	var enqOption	= $("#option").val();
	var enqComment 	= $("#comment").val();
	
	var ret = true;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	if(enqName == "" || enqName == " "){
		$('#name2').css('border', '1px #F50 solid');
		$('#errName').css({'color':'#CC0000', 'font-size':'9px'});		
		$('#errName').show();
		document.enquiry.name.focus();
		ret = false;
	} else {
		$('#name2').css('border', '1px #007500 solid');
		$('#errName').hide();
	}
	
	if(enqEmail == "" || enqEmail == " "){
		$('#email').css('border', '1px #F50 solid');
		$('#errEmail').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errEmail').show();
		document.enquiry.email.focus();
		ret = false;
	} else if(reg.test(enqEmail) == false) {
		$('#errEmail').hide();
		$('#errCrtEmail').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errCrtEmail').show();
        document.enquiry.email.focus();
        ret = false;
	}else {
		$('#email').css('border', '1px #007500 solid');
		$('#errEmail').hide();
		$('#errCrtEmail').hide();
	}
	
	if(enqPhone == "" || enqPhone == " "){
		$('#phone').css('border', '1px #F50 solid');
		$('#errPhone').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errPhone').show();
		document.enquiry.phone.focus();
		ret = false;
	} else if(isNaN(enqPhone)) {
		$('#errCrtPhone').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errCrtPhone').show();
		$('#errPhone').hide();
		document.enquiry.phone.focus();
		ret = false;
	}else {
		$('#phone').css('border', '1px #007500 solid');
		$('#errPhone').hide();
		$('#errCrtPhone').hide();
	}
	
	if(enqOption == "" || enqOption == " "){
		$('#option').css('border', '1px #F50 solid');
		$('#errOption').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errOption').show();
		document.enquiry.option.focus();
		ret = false;
	} else {
		$('#option').css('border', '1px #007500 solid');
		$('#errOption').hide();
	}
	
	if(enqComment == "" || enqComment == " "){
		$('#comment').css('border', '1px #F50 solid');
		$('#errComment').css({'color':'#CC0000', 'font-size':'9px'});
		$('#errComment').show();
		document.enquiry.comment.focus();
		ret = false;
	} else {
		$('#comment').css('border', '1px #007500 solid');
		$('#errComment').hide();
	}
 return ret;
}