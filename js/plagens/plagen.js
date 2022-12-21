// $(function () {
//   $(".landingPage .owl-carousel").owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplay: true,
//     margin: 10,
//     autoplayTimeout: 2000,
//     autoplaySpeed: 5000,
//     dots: false,
//     animateOut: "fadeOutLeft",
//     animateIn: "fadeInRight",
//     animateOut: "slideOutDown",
//     animateIn: "flipInX",
//     responsive: {
//       0: {
//         items: 1,
//       },
//     },
//   });

//   const nextButton = document.querySelector(
//     ".landingPage .owl-carousel .owl-nav button.owl-next span"
//   );
//   console.log(nextButton);
//   const prevButton = document.querySelector(
//     ".landingPage .owl-carousel .owl-nav button.owl-prev span"
//   );

//   nextButton.innerHTML = `
//   <span>next</span>
//   <i class="fas fa-arrow-right"></i>`;
//   prevButton.innerHTML = `
//   <i class="fas fa-arrow-left"></i>
//   <span>prev</span>`;
// });

$(function () {
  $(".eventsCategoriesCarosal").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    mouseDrag: true,
    dotsEach: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      786: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});

$(function () {
  $(".WeddingsHallsCarosal").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    mouseDrag: true,
    dotsEach: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      // 786: {
      //   items: 3,
      // },
      992: {
        items: 3,
      },
    },
  });
  const nextButton = document.querySelectorAll(
    ".WeddingsHalls .owl-carousel .owl-nav button.owl-next span"
  );
  const prevButton = document.querySelectorAll(
    ".WeddingsHalls .owl-carousel .owl-nav button.owl-prev span"
  );

  nextButton.forEach((ele) => {
    ele.innerHTML = `
  <span>next</span>
  <i class="fas fa-arrow-right"></i>`;
  });

  prevButton.forEach((ele) => {
    ele.innerHTML = `
  <i class="fas fa-arrow-left"></i>
  <span>prev</span>`;
  });
});

///////////////////////////////////////// owl-carousel ////////////////////////////////
///////////////////////////////////////// AOS ////////////////////////////////
AOS.init({ duration: 1000, offset: 120 });

///////////////////////////////////////// AOS ////////////////////////////////

///////////////////////////////////////// start chufel ////////////////////////////////
var containerEl = document.querySelector("#containermix");
var mixer = mixitup(containerEl);
///////////////////////////////////////// end chufel ////////////////////////////////
// ///////////////////////////////////////// nice scroll ////////////////////////////////
// $(function () {
//   "use strict";

//   $("html").niceScroll({
//     cursorColor: "#040B14",
//   });
// });
// ///////////////////////////////////////// nice scroll ////////////////////////////////
