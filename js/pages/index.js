//  start carosal home
const carosalItems = document.querySelectorAll(".carosal > .pairant > div");
const carosalControlle = document.querySelectorAll(
  ".carosal > .pairant > ul li"
);
let count = 1;
function changePage() {
  carosalItems.forEach((ele) => {
    ele.classList.remove("active");
  });
  carosalItems[count].classList.add("active");
}
setInterval(function () {
  changePage();
  count = count == carosalItems.length - 1 ? 0 : ++count;
}, 6000);
carosalControlle.forEach((ele) => {
  ele.onclick = function () {
    if (ele.getAttribute("Indicator") == "next") {
      changePage();
      count = count == carosalItems.length - 1 ? 0 : ++count;
    } else {
      changePage();
      count = count == 0 ? carosalItems.length - 1 : --count;
    }
  };
});

///////////////// start icon down

const iconDown = document.querySelectorAll(".carosal > .pairant > div .down");
const eventsCategories = document.querySelector(".eventsCategories");
iconDown.forEach((ele) => {
  ele.onclick = function () {
    window.scrollTo({
      top: eventsCategories.offsetTop - 134,
      behavior: "smooth",
    });
  };
});

//  end carosal

/*----------------- start latestProducts nav -----------------*/
const latestProductsNavLi = document.querySelectorAll(
  ".latestProducts .head ul li"
);

const productFavorit = document.querySelectorAll(
  ".latestProducts .product .favorit i"
);

// ////////////////////////////// start latestProductsNavLi chufel
latestProductsNavLi.forEach((ele) => {
  ele.addEventListener("click", function () {
    latestProductsNavLi.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// ////////////////////////////// start productFavorit
productFavorit.forEach((product) => {
  product.addEventListener("click", function () {
    this.className = this.classList.contains("active")
      ? "far fa-heart"
      : "fas fa-heart active";
  });
});

/*----------------- end latestProducts nav -----------------*/

/*----------------- start title hir video -----------------*/
const titleHer = document.querySelector(".titleHere .content .video");
titleHer.onclick = function () {
  this.classList.toggle("start");
  const video = this.querySelector("video");
  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls");
    video.pause();
  } else {
    video.setAttribute("controls", "");
    video.play();
  }
};

/*----------------- start window scroll -----------------*/
