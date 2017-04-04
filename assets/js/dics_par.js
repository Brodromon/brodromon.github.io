$(document).ready(function() {
    
    $(window).scroll(function() {
        
         var st = $(this).scrollTop();
        $('#disc').css({
            
            "transform" : "translate(0%, -" + st/15 + "%)"
        });
        
        var vh = $(window).height();
        var nfVh = vh * 0.9;
        if ($(this).scrollTop() >= vh ) {
            $('.hdr_about').addClass('anim');
            $('.aboutUs').addClass('animate');
        }
        else if ($(this).scrollTop() <= vh){
            $('.hdr_about').removeClass('anim');
            $('.aboutUs').removeClass('animate');
        }
        
        
        if (st >= vh ) {
            
            $('.abt_top_menu').addClass('choosed');
            $('.abt_top_menu p').addClass('choosed');
        }
        else {
            $('.abt_top_menu').removeClass('choosed');
            $('.abt_top_menu p').removeClass('choosed');
        }
        if (st >=vh + nfVh ){
            $('.abt_top_menu').removeClass('choosed');
            $('.abt_top_menu p').removeClass('choosed');
            $('.who_top_menu').addClass('choosed');
            $('.who_top_menu p').addClass('choosed');
        }
        else {
            $('.who_top_menu').removeClass('choosed');
            $('.who_top_menu p').removeClass('choosed');
        }
        if (st >= vh + (nfVh*2)) {
            $('.who_top_menu').removeClass('choosed');
            $('.who_top_menu p').removeClass('choosed');
            $('.tm_top_menu').addClass('choosed');
            $('.tm_top_menu p').addClass('choosed');
        }
        else {
            $('.tm_top_menu').removeClass('choosed');
            $('.tm_top_menu p').removeClass('choosed');
        }
        if (st >= vh + (nfVh*3)) {
            $('.tm_top_menu').removeClass('choosed');
            $('.tm_top_menu p').removeClass('choosed');
            $('.prt_top_menu').addClass('choosed');
            $('.prt_top_menu p').addClass('choosed');
        }
        else {
            $('.prt_top_menu').removeClass('choosed');
            $('.prt_top_menu p').removeClass('choosed');
        }
        if (st >= vh + (nfVh* 3 ) + (vh * 0.4)) {
            $('.prt_top_menu').removeClass('choosed');
            $('.prt_top_menu p').removeClass('choosed');
            $('.cl_top_menu').addClass('choosed');
            $('.cl_top_menu p').addClass('choosed');
        }
        else {
            $('.cl_top_menu').removeClass('choosed');
            $('.cl_top_menu p').removeClass('choosed');
        }
        if (st >= vh + ( nfVh*4)) {
            $('.cl_top_menu').removeClass('choosed');
            $('.cl_top_menu p').removeClass('choosed');
            $('.srvs_top_menu').addClass('choosed');
            $('.srvs_top_menu p').addClass('choosed');
        }
        else {
            $('.srvs_top_menu').removeClass('choosed');
            $('.srvs_top_menu p').removeClass('choosed');
        }
        if (st >= 5079) {
            $('.srvs_top_menu').removeClass('choosed');
            $('.srvs_top_menu p').removeClass('choosed');
            $('.how_top_menu').addClass('choosed');
            $('.how_top_menu p').addClass('choosed');
        }
        else {
            $('.how_top_menu').removeClass('choosed');
            $('.how_top_menu p').removeClass('choosed');
        }
        if (st >= 5637) {
            $('.how_top_menu').removeClass('choosed');
            $('.how_top_menu p').removeClass('choosed');
            $('.cont_top_menu').addClass('choosed');
            $('.cont_top_menu p').addClass('choosed');
        }
        else {
            $('.cont_top_menu').removeClass('choosed');
            $('.cont_top_menu p').removeClass('choosed');
        }
        
    });
    
});