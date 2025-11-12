// Define fetchAPOD() function here 💖
const errorMessage = document.getElementById("error-message");
const apodContainer = document.getElementById("apod-container");
const minDate = new Date("1995-06-16");

document
  .getElementById("birthdayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const birthday = document.getElementById("birthday").value;

    if (new Date(birthday) < minDate) {
      errorMessage.textContent =
        "Invalid entry: Please enter a date on or after June 16, 1995.";
      apodContainer.innerHTML = "";
    } else {
      errorMessage.textContent = "";
      fetchAPOD(birthday);
    }
  });

async function fetchAPOD(date) {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    apodContainer.innerHTML = `
     <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
     <div id="apod-info">
     <h2 id="apod-title">${data.title}</h2>
     <p>${data.explanation}</p>
     </div>`;
  } catch (error) {
    console.error("Something went wrong:", error);
    apodContainer.innerHTML = `<p style="color:red;">Failed to fetch image. Please try again later.</p>`;
  }
}
