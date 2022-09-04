const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 45,
  slidesPerGroup: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 45,
      slidesPerGroup: 4,
    },
  },
});
