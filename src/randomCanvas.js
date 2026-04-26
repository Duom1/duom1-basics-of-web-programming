const canvas = document.getElementById("indexCanvas");
const slider = document.getElementById("intervalSlider");

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "crimson",
  "darkred",
  "orange",
];
const canvSize = 200;
var interval = 1000;

function drawRandom(context2D) {
  context2D.fillStyle = colors[Math.floor(colors.length * Math.random())];
  context2D.fillRect(
    canvSize * Math.random(),
    canvSize * Math.random(),
    canvSize * Math.random(),
    canvSize * Math.random(),
  );
}

// slider.oninput = function() {
//   interval = this.value;
//   console.log(this.value);
// } 

// drawRandom(canvas.getContext("2d"));
// setInterval(drawRandom, interval, canvas.getContext("2d"));

let intervalId = null;

function startInterval(delay) {
  // Clear any existing interval
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  // Start a new interval with the updated delay
  intervalId = setInterval(drawRandom, delay, canvas.getContext("2d"));
}

startInterval(slider.value);

// Update when slider changes
slider.addEventListener("input", () => {
  const newDelay = Number(slider.value);
  startInterval(newDelay);
});
