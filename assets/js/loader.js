(function(){	
    var xhr_head = new XMLHttpRequest();
	var xhr_footer = new XMLHttpRequest();
    var xhr_mobile = new XMLHttpRequest();
    var xhr_mobile_notif = new XMLHttpRequest();

    var is_mobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent);

    xhr_head.open('GET', '/assets/html/head.html');
    xhr_head.send(null);
	
	xhr_footer.open('GET', '/assets/html/footer.html');
    xhr_footer.send(null);

    if ( is_mobile && localStorage.getItem('no-notif') === null) {
        xhr_mobile.open('GET', '/assets/html/mobile.html');
        xhr_mobile.send(null);

        xhr_mobile_notif.open('GET', '/assets/html/mobile-notif.html');
        xhr_mobile_notif.send(null);
    }

    xhr_head.onreadystatechange = xhr_mobile.onreadystatechange = xhr_footer.onreadystatechange = xhr_mobile_notif.onreadystatechange = function () {
        if (xhr_head.readyState === 4 && xhr_head.status === 200) {
		if (xhr_footer.readyState === 4 && xhr_footer.status === 200) {
        if (is_mobile && xhr_mobile.readyState === 4 && xhr_mobile === 200) {
        if (is_mobile && xhr_mobile_notif.readyState === 4 && xhr_mobile_notif === 200) {
            document.querySelector('head').insertAdjacentHTML("afterbegin", xhr_head.responseText);
			document.querySelector('body').insertAdjacentHTML("beforeend", xhr_footer.responseText);
            document.querySelector('head').insertAdjacentHTML("beforeend", xhr_mobile.responseText);
            document.querySelector('body').insertAdjacentHTML("afterbegin", xhr_mobile_notif.responseText);
        }
        } else {
			document.querySelector('head').insertAdjacentHTML("afterbegin", xhr_head.responseText);
			document.querySelector('body').insertAdjacentHTML("beforeend", xhr_footer.responseText);
        }
		}
        }
    }

})();

// Barba.Pjax.Dom.containerClass = 'loader';
// Barba.Pjax.Dom.wrapperId = 'loader-wrapper';

// document.addEventListener("DOMContentLoaded", function() {
//     Barba.Pjax.start();
// });