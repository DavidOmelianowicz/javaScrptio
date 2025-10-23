const memeArray = [
  "https://th.bing.com/th/id/OIP.HOnVgdsfXq_cSJVGgiJr8wHaE7?w=259&h=180&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.KdEuF9h8XSxRuDJScKsqhQHaE8?w=232&h=180&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.GWPg2soOegU8SZ2CBoLNYgHaE8?w=294&h=197&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.uGnSHQobLta2-a2quS7KMgHaE8?w=286&h=191&c=7&r=0&o=7&cb=12&dpr=2&pid=1.7&rm=3",
];

const captionArray = [
  "When you finally understand recursion.",
  "Debugging: Where you spend hours fixing a bug only to find out it was a typo.",
  "That moment when your code works on the first try.",
  "When you realize you've been coding for 5 hours straight.",
];

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", () => {
  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  const randomCaptionIndex = Math.floor(Math.random() * captionArray.length);

  randomMeme.src = memeArray[randomMemeIndex];
  randomCaption.textContent = captionArray[randomCaptionIndex];
});
