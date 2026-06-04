import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "/src/styles/swiper.css";
import "../styles/style.css";

// ...existing code...
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "/src/static/css/swiper.css";
import "/src/static/css/style.css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // optional: autoplay (uncomment if desired)
  // autoplay: { delay: 5000, disableOnInteraction: false }
});
// ...existing code...
