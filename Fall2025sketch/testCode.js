let curveBrushBool = true; // set to true for now so the brush is active
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(68, 136, 219);
  rectMode(CENTER);
}

function draw() {
  if (curveBrushBool && mouseIsPressed) {
    points.push({ x: mouseX, y: mouseY });

    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(3);

    beginShape();
    for (let pt of points) {
      curveVertex(pt.x, pt.y);
    }
    endShape();
  }
function keyPressed() {
  if (key === 'C') {
    background(68, 136, 219);
    points = [];
  } else if (key === 'B') {
    curveBrushBool = !curveBrushBool;
  }
}
