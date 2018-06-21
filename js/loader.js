$.ajax({
    url: '/html/navbar.html',
    data: null,
    dataType: "html",
    success: function(html){
        $('body').prepend(html);
    }
});

$.ajax({
    url: '/html/footer.html',
    data: null,
    dataType: "html",
    success: function(html){
        $('body').append(html);
    }
});