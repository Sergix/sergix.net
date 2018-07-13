$(document).ready(function () {
	var options = {
		arrows: false,
		autoplay: true,
		variableWidth: true,
		rows: 1
	};

	if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
		$(".project-info").slick(options);
	} else {
		$(".row1").wrapAll("<section/>");
		$(".row2").wrapAll("<section/>");

		$(".project-info").addClass("col-md-offset-4");
		$(".project-info > section").addClass("col-sm-12 col-md-12 col-lg-12");
		$(".project-info > section > section").addClass("col-sm-12 col-md-4 col-lg-4");
	}
});
