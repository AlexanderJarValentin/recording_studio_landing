$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
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