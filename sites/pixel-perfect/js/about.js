$(window).scroll(function () {
            var toTop = $(window).scrollTop();
            var s = $(window).height() * 0.8;
            $('.skill').each(function() {
                var scrollPos = $(this).offset().top;
                if (scrollPos < toTop + s) {
                    $(this).addClass('fill-bar');
                }
           });
               $('.ipad').each(function() {
                var scrollPos = $(this).offset().top;
                if (scrollPos < toTop + s) {
                    $(this).addClass('fadeInRight');
                }
           });
});