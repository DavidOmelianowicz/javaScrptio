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
const rndBtn = document.getElementById("rndBtn");
const resultBox = document.getElementById("resultBox");

box.addEventListener("click", () => {
  box.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.borderRadius = Math.floor(Math.random() * 50) + "%";
});

rndBtn.addEventListener("click", () => {
  const randomGame = games[Math.floor(Math.random() * games.length)];
  resultBox.textContent = `You should play ${randomGame.name}!`;
});
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

//records = the list of ojects
//id = which object
//prop = item to update
//value = item changed/ added

const updateRecords = (records, id, prop, value) => {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    // prop === "tracks"
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  }

  return records;
};
