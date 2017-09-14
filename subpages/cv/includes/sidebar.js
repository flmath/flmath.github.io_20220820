$('#nav').affix({
    offset: {     
	top: $('#nav').offset().top,
	bottom: $('.test_body').outerHeight(true) +40
    }
});
var is_loaded = false;
$('#nav').on("activate.bs.scrollspy", function () {
    if(is_loaded==false)
    {
	var active_el = $(".nav li.active");
    	active_el.removeClass('active'); 
    }   
    if(is_loaded==false)
    {
	var seconds_waited = 0;
	var load_timer = setInterval(
	    function()
	    {
		seconds_waited++;	
		console.log("wait for full load " + seconds_waited);
		
		var sections = $(".text_body section");
		var List = [];
		for(i = 0; i < sections.length; i++)
		{
		    List.push(sections[i].offsetTop);
		} 
		//if it is strongly sorted it means sections have proper offsetTop loaded
		//otherwise the values will be the same for some of sections
		if (seconds_waited > 5 || is_strongly_sorted(List) ) 
		{
		    is_loaded = true;
		    activate_nav_elem();	
		    clearInterval(load_timer);
		}
	    }, 1000);   
    }
    //bind a dynamic scrolling to the href address hash tag
    var nav_active_link = $(".nav li.active a"); 
    var nav_active_href = nav_active_link.attr('href');
    history.pushState("","",nav_active_href);    
});
function sections_offsets(){
    var sections = $(".text_body section");
    var List = [];
    for(i = 0; i < sections.length; i++)
    {
	List.push(sections[i].offsetTop);
    }
    return List;
}
$(window).on("load",function() {
    // window.scrollTo(0, 0);
    var sections = $(".text_body section");    
});
function activate_nav_elem()
{
    var current_url = window.location.href;
    var tmp_hash = current_url.substring(current_url.indexOf("#"));
    var active_elem = $(".nav li a[href=\""+ tmp_hash+"\"]"); 
    var active_li_elem = active_elem[0].parentElement;
    active_li_elem.className ="active";   
}

function is_strongly_sorted(List)
{
    var tmp = Number.NEGATIVE_INFINITY;
    for( i = 0 ; i < List.length; i++)
    {
	if(tmp<List[i]) tmp=List[i];
	else return false;
    }
    return true;
}
