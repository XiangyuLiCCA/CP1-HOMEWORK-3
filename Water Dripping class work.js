var x = 200;
var y = 150;
var z = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(x, 250, 20, 220);

  rect(x, 0, 20, 150);

  rect(z, 250, 20, 220);

  rect(z, 0, 20, 150);

  // draw drip
  ellipse(x + 10, y, 10);

  ellipse(z + 10, y, 10);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 6

  x = x + 1

  z = z - 1

  // if invisible for a full “height” amount…
  if (y > height * 2) {
    // reset
    y = 150;
  }

  if (x > width) {
    // reset
    x = 200;
  }
  
   if (z < 0) {
    // reset
    z = 200;
  }
}
