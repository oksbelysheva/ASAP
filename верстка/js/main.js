$(document).ready(function() {
    $('.gallery').slick({
        prevArrow: '<img src="./img/prev.png">',
        nextArrow: '<img src="./img/next.png">',
        infinite: true,
        autoplay: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
})