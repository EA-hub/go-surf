$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow right"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow right"></img>',
    asNavFor: '.slider-dotshead'
});

$('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: '.header__slider',
    focusOnSelect: true
});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow right"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow right"></img>',
    asNavFor: '.slider-map',
    focusOnSelect: true
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true
});

    
});