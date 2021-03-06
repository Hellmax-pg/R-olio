const mediaQueryMobile = window.matchMedia('(min-width:1px) and (max-width: 766px)');
const mediaQueryTablet = window.matchMedia('(min-width:766px) and (max-width: 1366px)');
const mediaQueryDesktop = window.matchMedia('(min-width:1366px) and (max-width: 2560px)');

function handleTabletChangeMobile(e) {
  if (e.matches) {
    const botSlider = new Swiper('.swiper.bot-slider__slider', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".bot-slider__slider .swiper-pagination",
        clickable: true,
        hashNavigation: true,
      },
      navigation: {
        nextEl: '.bot-slider__slider .swiper-button-next',
        prevEl: '.bot-slider__slider .swiper-button-prev',
      },
  });
  }
};


function handleTabletChangeTablet(e) {
  if (e.matches) {
      const botSlider = new Swiper('.swiper.bot-slider__slider', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        pagination: {
          el: ".bot-slider__slider .swiper-pagination",
          clickable: true,
          hashNavigation: true,
        },
        navigation: {
          nextEl: '.bot-slider__slider .swiper-button-next',
          prevEl: '.bot-slider__slider .swiper-button-prev',
        },
    });
  }
};

function handleTabletChangeDesktop(e) {
  if (e.matches) {
    const botSlider = new Swiper('.swiper.bot-slider__slider', {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      pagination: {
        el: ".bot-slider__slider .swiper-pagination",
        clickable: true,
        hashNavigation: true,
      },
      navigation: {
        nextEl: '.bot-slider__slider .swiper-button-next',
        prevEl: '.bot-slider__slider .swiper-button-prev',
      },
  });
  }
};

mediaQueryTablet.addListener(handleTabletChangeTablet)
handleTabletChangeTablet(mediaQueryTablet)
mediaQueryDesktop.addListener(handleTabletChangeDesktop)
handleTabletChangeDesktop(mediaQueryDesktop)
mediaQueryMobile.addListener(handleTabletChangeMobile)
handleTabletChangeMobile(mediaQueryMobile)

window.addEventListener('scroll', function() {
  let $header = document.querySelector('.header'),
  top = pageYOffset;
  if (top > 0) {
      $header.classList.add('--scroll');
  } else {
      $header.classList.remove('--scroll');
  }
});
