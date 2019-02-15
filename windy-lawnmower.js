function setup() {
  createCanvas(400, 300);
  colorMode(HSB);
}

var x = 0;
var h = 60;

function draw() {
  stroke(random(55, 70), 100, 90); //lawn color
  line(x-50, height - 10, x + random(-10, 10), height - 10 - random(h)); //lawn fill
  noStroke();

  x = x + 5; //speed of growth from left to right

  if (x > width) {
    x = random(10); //when lawn goes back, lawn will growth in 1-9
    h = h + 3; //speed of growth

  }

  if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height - 30);
    h = 30; // Lawn mower if lawn height > 150
  }

  fill(40, 100, 60); //land color
  rect(0, height - 10, width, 10); //land space
}
