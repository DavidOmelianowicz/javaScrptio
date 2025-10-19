let stone = document.getElementById("stone");
let moodRing = document.getElementById("moodRing");

stone.onclick = function changeColor() {
  let randomNumber = Math.floor(Math.random() * 8) + 1;

  if (randomNumber === 1) {
    stone.style.backgroundColor = "red";
  } else if (randomNumber === 2) {
    stone.style.backgroundColor = "orange";
  } else if (randomColor === 3) {
    stone.style.backgroundColor = "yellow";
  } else if (randomNumber === 4) {
    stone.style.backgroundColor = "green";
  } else if (randomNumber === 5) {
    stone.style.backgroundColor = "blue";
  } else if (randomNumber === 6) {
    stone.style.backgroundColor = "#4169e1";
  } else if (randomNumber === 7) {
    stone.style.backgroundColor = "purple";
  } else {
    stone.style.backgroundColor = "black";
  }
};

const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
];

const colors = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];

let wrapperDiv = document.getElementById("wrapper");
let quoteText = document.getElementById("quote-text");
let quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function () {
  let randomInsex = Math.floor(Math.random() * quoteList.length);
  quoteText.innerText = quoteList[randomInsex];
  wrapperDiv.style.backgroundColor = colors[randomInsex];
});
