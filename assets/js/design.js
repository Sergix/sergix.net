$(document).ready(function() {
	'use strict';
	
	$("img").css("visibility", "hidden");
	
	var currentImage = 0;
	
	var images = ["break", "canvas5-2", "canvas5-large", "circles", "code-1", "dark", "destiny-unknown", "discover2", "dream-4", "edge-of-tomorrow", "entryflow", "error-nogradient", "fallback", "fear", "frame-of-mind", "insomnia", "jterm", "make", "phone-wallpaper", "reverb2", "revive-this-mind-simple", "root", "sergix", "sergix_destiny1", "sergix-comment", "srgx", "undeniable", "wanderer", "waveform", "wrapper", "zone-theory"];
	
	for (var i = 0; i < images.length; i++) {
		images[i] = "/assets/img/design/" + images[i] + ".png";
		var newImage = new Image();
		newImage.src = images[i];
		$(".carousel").append(newImage);
	}
	
	$("img").css("visibility", "visible");
	
	// used to trigger update
	$("img").css("vertical-align", "bottom");
	
	$('.carousel').slick({
		arrows: false,
		variableWidth: true,
		 centerMode: true,
  		centerPadding: '60px',
		infinite: true
	});
	
	$("#before-button").on("click", function (e) {
		$('.carousel').slick('slickPrev');
	});
	
	$("#next-button").on("click", function (e) {
		$('.carousel').slick('slickNext');
	});
	
	// used to trigger DOM update to ensure images display properly
	setTimeout(function() {
		$("img").css("vertical-align", "middle");
	}, 250);
});