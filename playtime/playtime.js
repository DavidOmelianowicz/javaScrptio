const games = [
  {
    name: "Minecraft",
    playtime: 120,
    rating: 5,
  },
  {
    name: "Fortnite",
    playtime: 80,
    rating: 4,
  },
  {
    name: "Among Us",
    playtime: 50,
    rating: 3,
  },
  {
    name: "Call of Duty",
    playtime: 200,
    rating: 4,
  },
];

const box = document.getElementById("box");

addEventListener("click", () => {
  box.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.borderRadius = Math.floor(Math.random() * 50) + '%';
});
