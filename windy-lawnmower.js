function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 60;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x+40, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-30);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
