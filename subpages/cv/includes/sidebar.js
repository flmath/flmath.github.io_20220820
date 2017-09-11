$('#nav').affix({
    offset: {     
	top: $('#nav').offset().top,
	bottom: $('.test_body').outerHeight(true) +40
    }
});

$(document).ready(function() {
    window.scrollTo(0, 0);
    var current_url = window.location.href;
    var hash_position = current_url.indexOf("#");
    if (hash_position>-1)
    {
	window.location.href=current_url.substring(0,hash_position);
    };
});


$('#nav').on("activate.bs.scrollspy", function () {

});
