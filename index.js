const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector(".title");

let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let img1Src = "images/dice" + randomNumber1 + ".png";
let img2Src = "images/dice" + randomNumber2 + ".png";

img1.setAttribute('src', img1Src);
img2.setAttribute('src', img2Src);

if (randomNumber1 > randomNumber2) {
   title.innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
   title.innerHTML = "Player 2 Wins!"
} else {
   title.innerHTML = "It's a tie!"
}