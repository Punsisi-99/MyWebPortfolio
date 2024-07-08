//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },

  breakpoint:{
    576:{
      slidesPerView:2,
      spaceBetween:10,
    },
    1200:{
      slidesPerView:3,
      spaceBetween:20,
    },
  }
});
