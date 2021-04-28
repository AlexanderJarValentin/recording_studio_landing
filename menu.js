$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});