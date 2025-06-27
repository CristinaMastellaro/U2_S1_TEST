const firstDivHeader = document.getElementById("divNavHeader");
const button = document.querySelector("#divNavHeader .buttonBlack");
let lastKnownScrollPosition;

window.onscroll = function () {
  if (window.scrollY > 200 && window.scrollY < 480) {
    firstDivHeader.style.backgroundColor = "white";
    firstDivHeader.style.zIndex = "1";
    firstDivHeader.style.transition = "all 0.25s linear";
    button.style.backgroundColor = "green";
  } else {
    firstDivHeader.style.backgroundColor = "#ffc017";
    firstDivHeader.style.zIndex = "1";
    button.style.backgroundColor = "black";
  }
};

// Animazione M

const image = document.querySelectorAll("svg g");

let lastNumber1;
setInterval(() => {
  let number = Math.floor(Math.random() * image.length);
  image[number].setAttribute("transition", "all 220");
  image[number].setAttribute("visibility", "hidden");
  if (lastNumber1) {
    image[lastNumber1].setAttribute("visibility", "visible");
  }
  lastNumber1 = number;
}, 220);

let lastNumber2;
setInterval(() => {
  let number = Math.floor(Math.random() * image.length);
  image[number].setAttribute("transition", "all 240");
  image[number].setAttribute("visibility", "hidden");
  if (lastNumber2) {
    image[lastNumber2].setAttribute("visibility", "visible");
  }
  lastNumber2 = number;
}, 240);

let lastNumber3;
setInterval(() => {
  let number = Math.floor(Math.random() * image.length);
  image[number].setAttribute("transition", "all 200");
  image[number].setAttribute("visibility", "hidden");
  if (lastNumber3) {
    image[lastNumber3].setAttribute("visibility", "visible");
  }
  lastNumber3 = number;
}, 200);

let lastNumber4;
setInterval(() => {
  let number = Math.floor(Math.random() * image.length);
  image[number].setAttribute("transition", "all 200");
  image[number].setAttribute("visibility", "hidden");
  if (lastNumber4) {
    image[lastNumber4].setAttribute("visibility", "visible");
  }
  lastNumber4 = number;
}, 200);
