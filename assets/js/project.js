$(document).ready(function() {
	var options = {
		arrows: false,
		autoplay: true,
		variableWidth: true,
		rows: 1
	};
	
	if(screen.width < 1024 )  {
		$(".project-info").slick(options);
	} else {
		$(".row1").wrapAll("<section/>");
		$(".row2").wrapAll("<section/>");
		
		$(".project-info").addClass("col-xs-offset-3 col-lg-offset-1");
		$(".project-info section").addClass("col-xs-12 col-lg-12");
		$(".project-info section section").addClass("col-xs-4 col-lg-3");
		$(".project-info section section").css("margin-right", "5px");
	}
});
