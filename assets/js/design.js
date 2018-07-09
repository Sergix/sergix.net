$(document).ready(function() {
	'use strict';
	
	var currentImage;
	var i = 0;
	
	$("img").css("visibility", "hidden");
	
	var images = ["break", "canvas5-2", "canvas5-large", "circles", "code-1", "dark", "destiny-unknown", "discover2", "dream-4", "edge-of-tomorrow", "entryflow", "error-nogradient", "fallback", "fear", "frame-of-mind", "insomnia", "jterm", "make", "phone-wallpaper", "reverb2", "revive-this-mind-simple", "root", "sergix", "sergix_destiny1", "sergix-comment", "srgx", "undeniable", "wanderer", "waveform", "wrapper", "zone-theory"];
	
	$("img").css("visibility", "visible");

	function loadSlick() {
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
	}
	
	function placeIntoSlick() {
		$(".carousel").append(currentImage);
		i++;
		loadImages();
	}

	function loadImages() {
		if (i > images.length - 1)
			loadSlick();

		images[i] = "/assets/img/design/" + images[i] + ".png";
		currentImage = new Image();
		currentImage.onload = placeIntoSlick
		currentImage.src = images[i];
	}
	
	loadImages();
});
