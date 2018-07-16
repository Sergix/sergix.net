$(document).ready(function() {
	'use strict';
	
	var currentImage;
	var i = 0;
	
	$(".art").css("visibility", "hidden");

	// loader
	$(".carousel").append('<img id="loader-icon" src="/assets/img/loaders/tail-spin.svg"/>');
	$(".carousel").append('<figure id="loader-progress">0</figure>');
	
	var images = ["abstract-project-desktop", "aftershock-desktop", "beneath-line-desktop", "break", "canvas5-2", "canvas5-large", "carry-me-away-phone", "code-1", "damaged-desktop", "dark", "dream-4", "drip", "edge-of-tomorrow", "entryflow", "error-nogradient", "everything-black-desktop", "fear", "frame-of-mind", "incongruety-4k", "insomnia", "make", "open-your-eyes-desktop", "perspective-desktop", "phone-wallpaper", "reverb2", "revive-this-mind-simple", "sergix", "sergix-comment", "sergix-hex-4k", "sergix-hex-back-4k", "stark-desktop", "twisted-dreams-desktop", "understand-desktop", "wanderer", "waveform", "wrapper"];
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
		if (currentImage.height > currentImage.width)
			currentImage.className = "tall";
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
