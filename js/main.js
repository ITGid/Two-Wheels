$(document).ready(function () {
  let searchIcon = $(".header__search-icon");
  let searchInput = $(".header__search");

  searchIcon.on("click", function () {
    searchInput.toggleClass("searching");
    $(".logo-main-475").toggleClass("scale-0");
  });

  let burger = $(".burger");

  burger.on("click", function () {
    burger.toggleClass("active");
    $(".main-nav").toggleClass("active");
    $("body").toggleClass("scroll-disabled");
  });

  // ======================= slider ====================

  $(".slick-top-fullscreen").slick({
    slidesToshow: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    focusOnSelect: true,
    speed: 600,
    useTransform: true,
  });

  // ======================= ibg ======================

  function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }

  ibg();

  // ===================== filter ===========================

  let tab = $(".tab__li");
  $(".our-product_item.helmet").addClass("opened");
  tab.first().on("click", function () {
    $(".our-product_item:not(.our-product_item.helmet)").removeClass("opened");
    $(".our-product_item.helmet").addClass("opened");
    tab.css("color", "rgb(241, 241, 241)");
    $(this).css("color", "rgb(0, 119, 255)");
  });
  tab.eq(1).on("click", function () {
    $(".our-product_item:not(.our-product_item.moto)").removeClass("opened");
    $(".our-product_item.moto").addClass("opened");
    tab.css("color", "rgb(241, 241, 241)");
    $(this).css("color", "rgb(0, 119, 255)");
  });
  tab.eq(2).on("click", function () {
    $(".our-product_item:not(.our-product_item.accessory)").removeClass(
      "opened"
    );
    $(".our-product_item.accessory").addClass("opened");
    tab.css("color", "rgb(241, 241, 241)");
    $(this).css("color", "rgb(0, 119, 255)");
  });
  tab.eq(3).on("click", function () {
    $(".our-product_item:not(.our-product_item.sale)").removeClass("opened");
    $(".our-product_item.sale").addClass("opened");
    tab.css("color", "rgb(241, 241, 241)");
    $(this).css("color", "rgb(0, 119, 255)");
  });

  // ======================= lightbox =========================

  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    positionFromTop: 100,
    wrapAround: true,
  });

  // =============== scroll-top =======================

  $(".scroll-top").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ========================= scrollr =========================

  if ($(window).width() > 1024) {
    var s = skrollr.init()
} else {
  return false;
}
});
