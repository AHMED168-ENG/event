///////////////////////////////////////// AOS ////////////////////////////////
AOS.init();

///////////////////////////////////////// AOS ////////////////////////////////

const screen = document.querySelector(".showCarosalImage .screen img");
const optionsDate = document.querySelector(".options .over input");
const showDate = document.querySelector(".options .date > div span");
const guestControlle = document.querySelectorAll(".packages .guest span");

const decorationControlle = document.querySelectorAll(
  ".extraProduct .allDecorations .countControl button"
);
const decorationNumber = document.querySelector(
  ".extraProduct .allDecorations .countControl input"
);
const guestInput = document.querySelector(".packages .guest input");
const liImageControlle = document.querySelectorAll(".showCarosalImage ul li");

//  ////////////////////  start allDecorations controll  /////////////////////
function allDecorationsFunc() {
  const allDecorationsControlle = document.querySelectorAll(
    ".extraProduct > .pairant div.item"
  );
  const allDecorations = document.querySelectorAll(".allDecorations > div");
  allDecorationsControlle.forEach((ele, index) => {
    ele.onclick = function () {
      allDecorations.forEach((ele1) => {
        ele1.classList.remove("active");
      });
      allDecorations[+ele.getAttribute("data_number")].classList.add("active");
    };
  });
}
allDecorationsFunc();
//  ////////////////////  end allDecorations Controll /////////////////////

//  ////////////////////  start onload /////////////////////
window.onload = function () {
  showDate.innerHTML =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
};
//  ////////////////////  start liImageControlle /////////////////////

function liImageControlleFunc() {
  liImageControlle.forEach((ele, index) => {
    ele.onclick = function () {
      liImageControlle.forEach((ele) => {
        ele.classList.remove("active");
      });
      this.classList.add("active");
      var image = this.querySelector("img");
      screen.classList.add("remove");
      setTimeout(() => {
        screen.setAttribute("src", image.getAttribute("src"));
        screen.classList.remove("remove");
      }, 700);
    };
  });
}
liImageControlleFunc();

//  ////////////////////  start guestControlle /////////////////////
function guestControlleFunc() {
  guestControlle.forEach((ele) => {
    ele.onclick = function () {
      if (this.classList.contains("minus")) {
        if (guestInput.value == 1) return;
        guestInput.value = +guestInput.value - 1;
      } else {
        guestInput.value = +guestInput.value + 1;
      }
    };
  });
}
guestControlleFunc();

//  ////////////////////  start chairs Controlle /////////////////////
function chairControlleFunc() {
  decorationControlle.forEach((ele) => {
    ele.onclick = function () {
      if (this.classList.contains("minus")) {
        if (this.parentElement.children[1].value == "0") return;
        this.parentElement.children[1].value =
          +this.parentElement.children[1].value - 1;
      } else {
        this.parentElement.children[1].value =
          +this.parentElement.children[1].value + 1;
      }
    };
  });
}
chairControlleFunc();

//  ////////////////////  start packages /////////////////////
function packageAcction() {
  const packages = document.querySelectorAll(
    ".packages .pairant div div > div"
  );
  const packageOver = document.querySelector(".packages .packageDetails");
  const packageOverContent = document.querySelector(
    ".packages .packageDetails .content"
  );
  const packageButtonSupmit = document.querySelector(
    ".packages .packageDetails button.addToCard"
  );
  const packageOverClose = document.querySelector(
    ".packages .packageDetails .close"
  );
  packages.forEach((ele) => {
    ele.addEventListener("click", function () {
      packageOver.classList.add("active");
    });
  });
  packageOverClose.addEventListener("click", function () {
    packageOver.classList.remove("active");
  });
  packageButtonSupmit.addEventListener("click", function () {
    packageOver.classList.remove("active");
  });
  packageOver.addEventListener("click", function (e) {
    if (e.target.classList.contains("packageDetails")) {
      packageOver.classList.remove("active");
    }
  });
  // packageOverContent.addEventListener("click", function (e) {
  //   e.stopPropagation();
  // });
}
packageAcction();

//  ////////////////////  start optionsDate //////////////////////////
optionsDate.onchange = function () {
  showDate.innerHTML = this.value;
};

//  ////////////////////  start owl carosal //////////////////////////
$(".packageCarosal").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 15,
  nav: false,
  mouseDrag: true,
  dotsEach: false,
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
  },
});
$(".ExtraCarosal").on("change.owl.carousel", function (event) {
  packageAcction();
});
$(".ExtraCarosal").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 15,
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
    900: {
      items: 3,
    },
  },
});
$(".ExtraCarosal").on("change.owl.carousel", function (event) {
  allDecorationsFunc();
});
