$(document).ready(function() {
	'use strict';
	
	var currentImage;
	var i = 0;
	
	$(".art").css("visibility", "hidden");

	// loader
	$(".carousel").append('<img id="loader-icon" src="/assets/img/loaders/tail-spin.svg"/>');
	$(".carousel").append('<figure id="loader-progress">0</figure>');
	
	var images = ["break", "canvas5-2", "canvas5-large", "circles", "code-1", "dark", "destiny-unknown", "discover2", "dream-4", "edge-of-tomorrow", "entryflow", "error-nogradient", "fallback", "fear", "frame-of-mind", "insomnia", "jterm", "make", "phone-wallpaper", "reverb2", "revive-this-mind-simple", "root", "sergix", "sergix_destiny1", "sergix-comment", "srgx", "undeniable", "wanderer", "waveform", "wrapper", "zone-theory"];
	var imageFiles = [];

	function loadSlick() {
		$(".carousel").empty();

		for (i = 0; i < imageFiles.length; i++) {
			$(".carousel").append(imageFiles[i]);
		}

		$(".art").css("visibility", "visible");

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
		$("#loader-progress").text( Math.ceil((i / images.length) * 100) );
		imageFiles.push(currentImage);
		i++;
		loadImages();
	}

	function loadImages() {
		if (i > images.length - 1)
			loadSlick();

		images[i] = "/assets/img/design/" + images[i] + ".png";
		currentImage = new Image();
		currentImage.onload = placeIntoSlick
		currentImage.className = "art";
		currentImage.src = images[i];
	}
	
	loadImages();
});
