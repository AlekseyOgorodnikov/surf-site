$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrows-left.svg" alt="arrows-left">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrows-right.svg" alt="arrows-right">',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 1102,
        settings: "unslick",
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrows-left.svg" alt="arrows-left">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrows-right.svg" alt="arrows-right">',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./images/arrows-left.svg" alt="arrows-left">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./images/arrows-right.svg" alt="arrows-right">',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./images/plus.svg" alt="plus calculator"></div><div class="quantity-button quantity-down"><img src="./images/minus.svg" alt="minus calculator"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
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

  $(".quantity-button").on("click", function () {
    let sum =
      $(".nights").val() * $(".sum").data("nights") +
      ($(".guests").val() - 1) * $(".sum").data("guests") -
      1;

    $(".sum").html("$" + sum);
  });

  let sum =
    $(".nights").val() * $(".sum").data("nights") +
    ($(".guests").val() - 1) * $(".sum").data("guests") -
    1;

  $(".sum").html("$" + sum);

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".header__aside-menu").toggleClass("active");
  });

  new WOW().init();
});
