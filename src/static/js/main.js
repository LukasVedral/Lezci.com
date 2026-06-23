document.addEventListener('DOMContentLoaded', function () {
  const swiperDocuments = new Swiper('#slider-documents', {
      slidesPerView: 1,
      spaceBetween: 32,
      watchOverflow: false,
      loop: false,
      breakpoints: {
          600: {
          slidesPerView: 2,
          spaceBetween: 48,
          },
          960: {
          slidesPerView: 3,
          spaceBetween: 64,
          },
      },


      pagination: {
      el: '#slider-documents .swiper-pagination',
      clickable: true,
      },
      navigation: {
      nextEl: '#slider-documents .swiper-button-next',
      prevEl: '#slider-documents .swiper-button-prev',
      },
  });

  const swiperTeam = new Swiper('#slider-team', {
    slidesPerView: 1,
    watchOverflow: false,
    spaceBetween: 32,
    loop: false,
    breakpoints: {
        600: {
        slidesPerView: 2,
        spaceBetween: 48,
        },
        960: {
        slidesPerView: 3,
        spaceBetween: 64,
        },
    },
    navigation: {
      nextEl: '#slider-team .swiper-button-next',
      prevEl: '#slider-team .swiper-button-prev',
    },
  });


    const swiperVideos = new Swiper('#slider-videos', {
      slidesPerView: 1,
      spaceBetween: 32,
      watchOverflow: false,
      grabCursor: true,
      loop: false,
      breakpoints: {
          600: {
          slidesPerView: 2,
          spaceBetween: 48,
          },
          960: {
          slidesPerView: 3,
          spaceBetween: 64,
          },
      },


      pagination: {
      el: '#slider-videos .swiper-pagination',
      clickable: true,
      },
      navigation: {
      nextEl: '#slider-videos .swiper-button-next',
      prevEl: '#slider-videos .swiper-button-prev',
      },
  });
});