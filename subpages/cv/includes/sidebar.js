$('#nav').affix({
    offset: {     
	top: $('#nav').offset().top,
	bottom: $('.test_body').outerHeight(true) +40
    }
});


$(window).on("load",function() {
    //console.log(sessionStorage.getItem('current_tag'));
    window.scrollTo(0, 0);
});

$('#nav').on("activate.bs.scrollspy", function () {
    var active_elem = $(".nav li.active a"); 
    var current_url = active_elem.attr('href');
    var tmp_id =  current_url.substring(current_url.indexOf("#"))
    // var active_section = $(".test_body " + tmp_id);
    // console.log(active_section);
    // var current_tag_offset = active_section.position().top;  
    // sessionStorage.setItem('current_tag_offset',current_tag_offset);
    // console.log(current_tag_offset);
    // sessionStorage.setItem('current_tag',tmp_id);
    window.location.href = tmp_id;
});
