$(document).ready(function() {
  $('.menu__link').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 150}, 900);scroll_el
    }
    return false;
  });
 
});

$('.actual__list').slick({
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
})