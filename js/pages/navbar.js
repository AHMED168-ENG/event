const allNavs = document.querySelector(".allNavs");

/*----------------- start window scroll -----------------*/
window.onscroll = () => {
  if (window.pageYOffset > 300) {
    document.body.style.paddingTop = `${allNavs.offsetHeight}px`;
    allNavs.classList.add("active");
    if (window.innerWidth < 600) {
      allNavs.classList.add("removeUpper");
    }
  } else {
    document.body.style.paddingTop = `0px`;
    allNavs.classList.remove("active");
    allNavs.classList.remove("removeUpper");
  }
  removeActivation();
};

/*----------------- start footer -----------------*/
const footerEmailInput = document.querySelector("footer .email input");
if (footerEmailInput) {
  footerEmailInput.addEventListener("focus", function () {
    this.parentElement.firstElementChild.classList.add("active");
  });
  footerEmailInput.addEventListener("blur", function () {
    if (!this.value) {
      this.parentElement.firstElementChild.classList.remove("active");
    }
  });
  /*----------------- end footer -----------------*/
}

//  start smNavIcon icon action
const smNavIcon = document.querySelector(".smNav .icon i");
const smNavlinks = document.querySelector(".navbar .pagesLink");

smNavIcon.addEventListener("click", (e) => {
  smNavlinks.classList.toggle("active");
});

/*----------------- start shoppingCurt -----------------*/
const shoppingCurtIcon = document.querySelector(
  ".navbar .favorit .shoppingCurtIcon"
);
const shoppingCurt = document.querySelector(".navbar .favorit .shoppingCurt");
const shoppingCurtUl = document.querySelector(
  ".navbar .favorit .shoppingCurt ul"
);
const totalPrice = document.querySelector(
  ".navbar .favorit .shoppingCurt .totalPrice span:last-of-type"
);

shoppingCurtIcon.onclick = function () {
  if (!shoppingCurt.classList.contains("active")) {
    let testOrder = "";
    let totalOrderPrice = 0;
    let myCart = window.localStorage.getItem("shopCart");
    myCart = JSON.parse(myCart);
    myCart = myCart ? myCart : [];
    shoppingCurtUl.innerHTML = "";
    myCart.forEach((ele) => {
      totalOrderPrice += ele.price;
      testOrder = `<li class="d-flex">
                        <div class="details d-flex">
                          <div class="image">
                            <img src="./images/shopingCart/img.png" alt="" />
                          </div>
                          <div class="data">
                            <h5>${ele.name}</h5>
                            <span class="price">${ele.price} DIRHAM</span>
                          </div>
                        </div>
                        <div class="countControlle d-flex">
                          <button type="button" data_type="minus">
                            <i class="fas fa-minus"></i>
                          </button>
                          <input type="number" name="" value="${ele.count}" id="" />
                          <button type="button" data_type="plus">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="controlle">
                          <i class="fas fa-trash"></i>
                          <span class="price">${ele.price} DIRHAM</span>
                        </div>
                      </li>`;
      shoppingCurtUl.innerHTML += testOrder;
      removeOrder();
    });
    totalPrice.innerHTML = `${totalOrderPrice} DIRHAM`;
    orderProductCount();
  }
  shoppingCurt.classList.toggle("active");
};

function removeOrder() {
  const trashOrder = document.querySelectorAll(
    ".navbar .favorit .shoppingCurt .controlle > i"
  );
  trashOrder.forEach((ele, index) => {
    ele.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
      swal("sucsses", "تم حذف الطلب بنحاح", "success");
      let shopCart = window.localStorage.getItem("shopCart");
      shopCart = JSON.parse(shopCart);
      shopCart = shopCart.filter((ele) => {
        if (ele.id == index) {
          totalPrice.innerHTML =
            parseFloat(totalPrice.innerHTML) - ele.price + " DIRHAM";
        }
        return ele.id != index;
      });
      window.localStorage.setItem("shopCart", JSON.stringify(shopCart));
    });
  });
}

function orderProductCount() {
  const countControlle = document.querySelectorAll(
    ".navbar .favorit .shoppingCurt ul li button"
  );
  countControlle.forEach((ele) => {
    ele.onclick = function () {
      console.log("input");
      const input = ele.parentElement.querySelector("input");
      if (ele.getAttribute("data_type") == "minus") {
        if (input.value == "0") return;
        input.value = +input.value - 1;
      } else {
        input.value = +input.value + 1;
      }
    };
  });
}

/* start stop propagation to shoppingCurt */
shoppingCurt.addEventListener("click", (e) => {
  e.stopPropagation();
});
/* end stop propagation to shoppingCurt */
/* start stop propagation to shoppingCurtIcon */
shoppingCurtIcon.addEventListener("click", (e) => {
  e.stopPropagation();
});
/* end stop propagation to shoppingCurtIcon */

/*----------------- end shoppingCurt -----------------*/

/*----------------- start user authonticat -----------------*/
const userIcon = document.querySelector(".navbar .user > i");
const userAuth = document.querySelector(".navbar .user .userProfile");
userIcon.onclick = function () {
  userAuth.classList.toggle("active");
};

userIcon.addEventListener("click", function (e) {
  e.stopPropagation();
});

userAuth.addEventListener("click", function (e) {
  e.stopPropagation();
});

function removeActivation() {
  shoppingCurt.classList.remove("active");
  userAuth.classList.remove("active");
}
/*----------------- end user authonticat -----------------*/

/*----------------- start document on click -----------------*/
document.addEventListener("click", function () {
  removeActivation();
});
/*----------------- end document on click -----------------*/
