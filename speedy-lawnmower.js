function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
}

var x = 0;
var h = 60;

function draw() {
  stroke(random(60, 70), 100, 90); //lawn color
  line(x, height - 10, x + random(-10, 10), height - 10 - random(h)); //lawn fill
  noStroke();

  x = x + 10; //speed of growth

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h >= 50) {
    fill(255);
    rect(0, 0, width, height - 30);
    h = 30; // Lawn mower if lawn height > 150
  }

  fill(40, 100, 60); //land color
  rect(0, height - 10, width, 10); //land space
}
