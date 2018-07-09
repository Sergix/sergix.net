/*
	common.js
	
	script functions used globally across sergix.net
*/

var linksOpen = false;

$(document).ready(function () {
	'use strict';

	$("body html main").addEventListener('touchmove', function(e) {
			e.preventDefault();
	}, false);
	
	$("#links-open").on("hover", function () {
		$("#links-open").css("background-color", "#d1b257");
	});
	
	$("#links-open").on("click", function () {
		if (linksOpen) {
			linksOpen = false;
			$("#links").css("margin-bottom", "-50%");
			$("#links-open").css("background-color", "#000");
		} else {
			linksOpen = true;
			
			$("#links-open").css("background-color", "#fcb239");
			
			if (screen.width < 768) { // phone
				$("#links").css("margin-bottom", "13vh");
			} else if (screen.width >= 768 && screen.width < 992) { // tablet
				$("#links").css("margin-bottom", "10vh");
			} else if (screen.width >= 991 && screen.width < 1200) { // large tablet / small screen
				$("#links").css("margin-bottom", "7vh");
			} else { // desktop
				$("#links").css("margin-bottom", "3vh");
			}
		}
	});
});
