const firstDivHeader = document.getElementById("divNavHeader");
const button = document.querySelector("#divNavHeader .buttonBlack");
let lastKnownScrollPosition;

console.log("window.scrollY", window.scrollY);
console.log("firstDivHeader", button);
console.log("window.scrollY", window.scrollY);

// const scrolling = (scrollPos) => {};

// firstDivHeader.addEventListener("scroll", (event) => {
// const scroll = (e) => {
//   lastKnownScrollPosition = window.scrollY;

//   if (e.scrollY > 0) {
//     firstDivHeader.style.backgroundColor = "white";
//     button.style.backgroundColor = "green";
//   }
// };

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
// document.getElementById("m1").setAttribute("transform", "rotate(45 30 50)");
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
// console.log("image of g", image[24].innerHTML);
// for (let i = 0; i < 50; i++) {
//   console.log("image", image[i].textContent);
// }
let manyM = image.ariaLabel;
console.log("image", image);
// console.log("manyM", manyM[55]);
// console.log("manyM", manyM.length);
// console.log("image.innerText", typeOf manyM );

let numPrecedente;

// setInterval(() => {
//   let num = Math.floor(Math.random() * 737);
//   while (!(manyM[num] === "M")) {
//     num = Math.floor(Math.random() * 737);
//   }
//   manyM[num] = "Pinco";
//   console.log("manyM[]", (manyM[num] = "caro"));

//   if (numPrecedente) {
//     manyM[numPrecedente] === "Ciao";
//   }

//   image.ariaLabel = manyM;
//   console.log("image.ariaLabe", image.ariaLabel);

//   numPrecedente = num;
// }, 2000);
