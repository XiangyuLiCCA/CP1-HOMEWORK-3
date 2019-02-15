function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 18;
var y = 18;
var cx = 60;
var cy = 90;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(cx, cy), 150, 100);
  ellipse(x, y, 15);

  cx = cx + 1;
  cy = cy + 1;

  if (cx > 360) {
    cx = 0;
  }
  if (cy > 360) {
    cy = 0;
  }


  // set up next circle
  x = x + 18;
  y = y + 14;
  // if we hit the right edge, go down a line
  if (x > width - 18) {
    x = 18;
    y = y + 18;
  }

  // if we hit the bottom edge, reset to top
  if (y > height - 18) {
    y = 18;
  }
}
