/*
	common.js
	
	script functions used globally across sergix.net
*/

var linksOpen = false;

$(document).ready(function () {
	'use strict';
	
	$("#links-open").on("hover", function () {
		$("#links-open").css("background-color", "#d1b257");
	});
	
	$("#links-open").on("click", function () {
		if (linksOpen) {
			linksOpen = false;
			$("#links-open").css("background-color", "#000");
			setTimeout(function() {
				$("#links").css("display", "hidden");
			}, 300);
			$("#links").removeClass("active");
		} else {
			linksOpen = true;
			
			$("#links").addClass("active");
			$("#links-open").css("background-color", "#fcb239");
		}
	});
});
