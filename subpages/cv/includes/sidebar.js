$('#nav').affix({
    offset: {     
	top: $('#nav').offset().top,
	bottom: $('.test_body').outerHeight(true) +40
    }
});




$('#nav').on("activate.bs.scrollspy", function () {
 
});

$(window).on("load",function() {
    window.scrollTo(0, 0);
});
