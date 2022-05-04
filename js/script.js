$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    infinity: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2200,
    pauseOnHover: true,
    touchThreshold: 10,
    touchMove: true,
  });
});

$('.rating-info__like-icon').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
});