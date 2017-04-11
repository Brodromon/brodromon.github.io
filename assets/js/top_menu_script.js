$(document).ready(function () {
    var vh = $(window).height();
    $('.abt_top_menu').click(function () {
        $("body").animate({"scrollTop": vh},"slow");
    });
     $('.who_top_menu').click(function () {
        $("body").animate({"scrollTop": vh*2},"slow");
    });
     $('.tm_top_menu').click(function () {
        $("body").animate({"scrollTop": vh*3},"slow");
    });
     $('.prt_top_menu').click(function () {
        $("body").animate({"scrollTop": vh*4},"slow");
    });
     $('.cl_top_menu').click(function () {
        $("body").animate({"scrollTop": 4289},"slow");
    });
     $('.srvs_top_menu').click(function () {
        $("body").animate({"scrollTop": 4704},"slow");
    });
     $('.how_top_menu').click(function () {
        $("body").animate({"scrollTop": 5079},"slow");
    });
     $('.cont_top_menu').click(function () {
        $("body").animate({"scrollTop": 5949},"slow");
    });

});
