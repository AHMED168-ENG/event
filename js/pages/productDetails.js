AOS.init();

const productFavorit = document.querySelectorAll(".favorite i:last-of-type");
const listImages = document.querySelectorAll(".showDetails .images ul li img");
const image = document.querySelector(".showDetails .showImage img");

listImages.forEach((ele) => {
  ele.onclick = function () {
    image.classList.add("remove");
    listImages.forEach((ele) => {
      ele.parentElement.classList.remove("active");
    });
    ele.parentElement.classList.add("active");
    setTimeout(() => {
      image.setAttribute("src", ele.getAttribute("src"));
      image.classList.remove("remove");
    }, 700);
  };
});

productFavorit.forEach((product) => {
  product.addEventListener("click", function () {
    this.className = this.classList.contains("active")
      ? "far fa-heart"
      : "fas fa-heart active";
  });
});

// start user rate
const rate = document.querySelectorAll(".interaction .addReview .rate i");
rate.forEach((ele, index) => {
  ele.onmouseover = function (e) {
    rate.forEach((ele) => {
      ele.classList.remove("active");
    });
    rate.forEach((ele, index2) => {
      if (index >= index2) {
        ele.classList.add("active");
      }
    });
  };
});

// start add review
const revewNotification = document.querySelector(".addReview .notification");
const allReview = document.querySelector(".allReview");
const addReview = document.querySelector(".addReview");
const reviewForm = document.querySelector(".addReview form");
const submitButton = document.querySelector(".addReview form > button");
const formData = Array.from(reviewForm.elements);
const testReview = document.querySelector(
  ".interaction .allReview .testReview"
);
submitButton.onclick = function (e) {
  e.preventDefault();
  if (formData[2].value == "") {
    revewNotification.classList.add("active");
    revewNotification.innerHTML = revewNotification.getAttribute("data-lang");
    setTimeout(() => {
      revewNotification.classList.remove("active");
    }, 3000);
  } else {
    const cloneDiv = testReview.cloneNode(true);
    cloneDiv.querySelector("h4").innerHTML = formData[0].value;
    cloneDiv.querySelector(".date").innerHTML = moment().format("MMM Do YY");
    cloneDiv.querySelector("p").innerHTML = formData[2].value;
    cloneDiv.querySelectorAll(".rate i").forEach((ele, index) => {
      if (index < addReview.querySelectorAll(".row i.active").length) {
        ele.classList.add("active");
      }
    });
    cloneDiv.classList.remove("d-none");
    allReview.appendChild(cloneDiv);
    addReview.querySelectorAll(".row i.active").forEach((ele) => {
      ele.classList.remove("active");
    });
    reviewForm.reset();
  }
};

//  ////////////////////  start chairs Controlle /////////////////////
const productCount = document.querySelectorAll(
  ".showDetails .details .countControl button"
);
productCount.forEach((ele) => {
  ele.onclick = function () {
    if (this.classList.contains("minus")) {
      if (this.parentElement.children[1].value == "1") return;
      this.parentElement.children[1].value =
        +this.parentElement.children[1].value - 1;
    } else {
      this.parentElement.children[1].value =
        +this.parentElement.children[1].value + 1;
    }
  };
});

//  ////////////////////  start add to cart /////////////////////
let productDetails = document.querySelector(".showDetails .details");
let addTocartButton = productDetails.querySelector(" form > button");
addTocartButton.addEventListener("click", (e) => {
  e.preventDefault();
  addToCart();
});
function addToCart() {
  let productName = productDetails.querySelector("h2");
  let productPrice = productDetails.querySelector(".price span:first-of-type");
  let productCount = productDetails.querySelector(".countControl input");
  let myCart = window.localStorage.getItem("shopCart");
  myCart = JSON.parse(myCart);
  const myOrder = {
    id: myCart && myCart.length ? myCart.length : 0,
    name: productName.innerHTML,
    count: parseFloat(productCount.value),
    price: parseFloat(productPrice.innerHTML) * parseFloat(productCount.value),
  };
  if (!myCart) {
    myCart = [myOrder];
  } else {
    let test = myCart.filter((ele, index) => {
      return ele.name == myOrder.name;
    });
    if (test.length) {
      myCart[test[0].id].count = myCart[test[0].id].count + myOrder.count;
      myCart[test[0].id].price = myCart[test[0].id].price + myOrder.price;
    } else {
      myCart.push(myOrder);
    }
  }

  productCount.value = 1;
  swal("sucsses", "تم اضافه الطلب بنحاح", "success");

  window.localStorage.setItem("shopCart", JSON.stringify(myCart));
}
//  ////////////////////  end add to cart /////////////////////
//  ////////////////////  start relatedProducts product /////////////////////
const relatedProductsProduct = document.querySelectorAll(
  ".relatedProducts .product:not(.product.active)"
);
console.log(relatedProductsProduct);
relatedProductsProduct.forEach((ele) => {
  ele.onclick = function () {
    this.classList.toggle("active");
  };
});
//  ////////////////////  end relatedProducts product /////////////////////
