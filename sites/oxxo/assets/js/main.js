$(document).ready(function() {
    $(document).scroll(function() {
        var s = $(window).scrollTop();
        console.log();
        if(s >= $(window).height()) {
           $('#about_us').addClass('pinned');
        } else {
            $('#about_us').removeClass('pinned');
        }
    });
});