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

$('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow right"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow right"></img>'
});

$('.shop__slider').slick({
  infinite: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow right"></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow right"></img>'
});

$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../app/img/btn-plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="../app/img/btn-minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests') - 1;
    $('.summ').html('$' + summ);
});

let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests') - 1;
$('.summ').html('$' + summ);

$('.surfboard-box__circle').on('click', function(){
  $(this).toggleClass('active')
});

});