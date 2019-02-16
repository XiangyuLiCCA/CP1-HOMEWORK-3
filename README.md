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

What's the point of an object?

put the data inside.

What's an example of a range you might use for the map function?

if you waht re-maps a number from one range to another. Such as if you want the background is red when your mouse cursor is on the left, the background color turns white when the mouse cursor moves to the right.

What line of code would give me a random year in the last century?

