const canvas = document.getElementById("indexCanvas");
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
const interval = 250;

function drawRandom(context2D) {
  context2D.fillStyle = colors[Math.floor(colors.length * Math.random())];
  context2D.fillRect(
    canvSize * Math.random(),
    canvSize * Math.random(),
    canvSize * Math.random(),
    canvSize * Math.random(),
  );
}

drawRandom(canvas.getContext("2d"));
setInterval(drawRandom, interval, canvas.getContext("2d"));
