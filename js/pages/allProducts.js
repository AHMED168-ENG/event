///////////////////////////////////////// start chufel ////////////////////////////////
var containerEl = document.querySelector("#containermix");
var mixer = mixitup(containerEl);
///////////////////////////////////////// end chufel ////////////////////////////////
///////////////////////////////////////// AOS ////////////////////////////////
AOS.init();

//   ///////////// start latestProducts search input focus effect
const inputSearch = document.querySelector(".latestProducts .search input");
inputSearch.onfocus = function () {
  this.parentElement.classList.add("active");
};
inputSearch.onblur = function () {
  this.parentElement.classList.remove("active");
};
//   ///////////// start latestProducts search input focus effect
const productFavorit = document.querySelectorAll(
  ".latestProducts .product .favorit i"
);
productFavorit.forEach((product) => {
  product.addEventListener("click", function () {
    this.className = this.classList.contains("active")
      ? "far fa-heart"
      : "fas fa-heart active";
  });
});

// ////////////////////////////// start latestProductsNavLi chufel
const latestProductsNavLi = document.querySelectorAll(
  ".latestProducts .head ul li"
);
latestProductsNavLi.forEach((ele) => {
  ele.addEventListener("click", function () {
    latestProductsNavLi.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
  });
});
