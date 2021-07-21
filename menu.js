$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu'); 
       // $('.header__list').toggleClass('open-menu'); 
       // $('.header__item').toggleClass('open-menu');
    });
});

$(".header__list"). click(function() {
  $('.header__burger').toggleClass('open-menu');
  $('.header__nav').toggleClass('open-menu');
})

$(".form-popup").click(function() {
  $("#form").show(); 
  $("html").toggleClass("no-scroll");
  });


$("#close").click(function() {
  $("#form").hide(); 
  $("html").removeClass("no-scroll");

});

$(".price-popup").click(function() {
  $("#sale-form").show();
  $("html").toggleClass("no-scroll");
});

$(".hide-popup").click(function() {
  $("#sale-form").hide () ;
  $("html").removeClass("no-scroll");
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });