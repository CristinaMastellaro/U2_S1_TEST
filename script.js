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
  if (window.scrollY > 200 && window.scrollY < 400) {
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

const image = document.querySelectorAll("svg g")[1];
let manyM = image.ariaLabel;
console.log("manyM", manyM);
console.log("manyM", manyM[55]);
console.log("manyM", manyM.length);
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
