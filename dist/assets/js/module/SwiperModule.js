export default function SwiperModule() {
  if ($(".introSlide").length) {
    var swiper = new Swiper(".introSlide", {
      speed: 1000,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  if ($(".js-location").length) {
    let swiper = new Swiper(".js-location .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: ".js-location .swiper-pagination",
        type: "progressbar",
      },
      effect: "fade",
      loop: "infinite",
      navigation: {
        nextEl: ".js-location .swiper-button-next",
        prevEl: ".js-location .swiper-button-prev",
      },
    });
  }
  if ($(".js-hero").length) {
    var swiperHero = new Swiper(".js-hero", {
      navigation: {
        nextEl: ".js-hero .swiper-button-next",
        prevEl: ".js-hero .swiper-button-prev",
      },
      autoplay: true,
      effect: "fade",
      loop: "infinite",
      speed: 1200,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 10,
      },
    });
  }
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  if ($(".js-news-feed").length) {
    var swiper = new Swiper(".js-news-feed", {
      speed: 1000,
      slidesPerView: "auto",
      loop: true,
      noSwiping: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 10,
      },
    });
  }
  if ($(".js-hero2").length) {
    var swiperHero2 = new Swiper(".js-hero2", {
      autoplay: true,
      slidesPerView: "auto",
      effect: "fade",
      loop: "infinite",
      speed: 1200,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 10,
      },
    });
  }
}
