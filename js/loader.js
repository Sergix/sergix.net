(function(){
    window.onload = function() {
        document.getElementsByTagName('body')[0].style.display = 'initial';
    }

    var xhr_head = new XMLHttpRequest();
    xhr_head.open('GET', '/html/head.html');
    xhr_head.send(null);

    xhr_head.onreadystatechange = function () {
        if (xhr_head.readyState === 4 && xhr_head.status === 200) {
            document.getElementsByTagName('head')[0].insertAdjacentHTML("afterbegin", xhr_head.responseText);
        }
    }

    var xhr_navbar = new XMLHttpRequest();
    xhr_navbar.open('GET', '/html/navbar.html');
    xhr_navbar.send(null);

    xhr_navbar.onreadystatechange = function () {
        if (xhr_navbar.readyState === 4 && xhr_navbar.status === 200) {
            document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin", xhr_navbar.responseText);
        }
    }

    var xhr_footer = new XMLHttpRequest();
    xhr_footer.open('GET', '/html/footer.html');
    xhr_footer.send(null);

    xhr_footer.onreadystatechange = function () {
        if (xhr_footer.readyState === 4 && xhr_footer.status === 200) {
            document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", xhr_footer.responseText);
        }
    }

    if ( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) && localStorage.getItem('no-notif') === null) {
        var xhr_mobile = new XMLHttpRequest();
        xhr_mobile.open('GET', '/html/mobile-notif.html');
        xhr_mobile.send(null);

        xhr_mobile.onreadystatechange = function () {
            if (xhr_mobile.readyState === 4 && xhr_mobile.status === 200) {
                document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin", xhr_mobile.responseText);
            }
        }
    }
})()