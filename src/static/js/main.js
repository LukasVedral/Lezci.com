document.addEventListener('DOMContentLoaded', function () {
    const swiperDocuments = new Swiper('#slider-documents', {
        slidesPerView: 1,
        loop: document.querySelectorAll(' #slider-documents .swiper-slide').length >= 6,
        watchOverflow: false,

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
    loop: document.querySelectorAll(' #slider-team .swiper-slide').length >= 6,
    watchOverflow: false,
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
      el: '#slider-team .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#slider-team .swiper-button-next',
      prevEl: '#slider-team .swiper-button-prev',
    },
  });
});