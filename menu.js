$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        
        
    });
});

$(".form-popup").click(function() {
  $("#form").toggleClass('open__form'); 
  
});

$(".price-popup").click(function() {
  $(".work__sale").toggleClass('open__sale') ;
  //$(".btn__block").hide() ;
  //$(".block__work").hide() ;
});

$(".hide-popup").click(function() {
  //$(".work__sale").toggleClass('off__sale') ;
  //$(".btn__block").show() ;
 //$(".block__work").show() ;
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