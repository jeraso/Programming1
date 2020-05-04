let dim;

function setup() {
  createCanvas(500, 500);
  dim = width / 6;
  colorMode(HSB, 1200, 40, 50);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
background(10)
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / .5;
  let h = random(0, 180);
  for (let r = radius; r > 0; --r) {
    fill(h, 150, 90);
    ellipse(y, x, r, h);
    h = (h + 3) % 720;
  }
}
