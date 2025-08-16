const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let verticalPosition = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowUp") {
    verticalPosition = verticalPosition - 10;
  }
  if (e.code === "ArrowDown") {
    verticalPosition = verticalPosition + 10;
  }

  if (position < 0) {
    position = 0;
  }
  if (verticalPosition < 0) {
    verticalPosition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = verticalPosition + "px";

  ball.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}
