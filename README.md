# CP1-HOMEWORK-3
What code draws the blades of grass?

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

What code makes the "lawnmower" come by? How often does it come by?

if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
  if program random a namber that more than the 0.999, the lawnmower will run once.

What's the point of the h variable?

h represents the height of each round of grass growth.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

-10 is the thickness of the land, and height-10-random(h) means that each time the repainted grass grows from a point 10 pixels from the bottom edge, it is also to ensure that the grass grows from the surface of the land.

