$(document).ready(function(){
    $("#header").on("click","a", function (event) {
     event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        document.getElementById("myNav").style.width = "0%";
        document.querySelector("#open").style.right = "15px";
        document.querySelector('#close').style.right = '-45px';
    });
    $("#header__arrow__down").on("click", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 1500);
    })

    var hdr = document.querySelector('#header');
    var banner = document.querySelector('#banner');
    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            hdr.style.background = 'rgba(0,0,0, .5)';
            hdr.style.borderBottom = '1px #fff solid';
        }
        else {
            hdr.style.background = 'transparent';
            hdr.style.borderBottom = '0';
        }
    });
});
