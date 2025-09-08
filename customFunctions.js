let arcBrushBool = true;
let squareBrushBool = false;
let currentColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(68, 136, 219);
  rectMode(CENTER);
  angleMode(RADIANS);

  currentColor = color(227, 223, 98);
  
  let yellowBtn = createButton('Yellow Brush');
  yellowBtn.position(10, 10);
  yellowBtn.mousePressed(() => currentColor = color(227, 223, 98));
  
  let orangeBtn = createButton('Orange Brush');
  orangeBtn.position(110, 10);
  orangeBtn.mousePressed(() => currentColor = color(245, 184, 29));

  let blueBtn = createButton('Blue Brush');
  blueBtn.position(220, 10);
  blueBtn.mousePressed(() => currentColor = color(53, 158, 219));
}

function draw() {
  fill(0);
  textSize(50);
  text('Starry Starry Night', 550, 100);

  if (mouseIsPressed) {
    if (arcBrushBool) {
      arcBrush();
    } else if (squareBrushBool) {
      squareBrush();
    }
  }
}

function arcBrush() {
  fill(currentColor);
  noStroke();
  let startAngle = random(0, TWO_PI);
  let endAngle = startAngle + random(PI / 6, PI / 2);
  arc(mouseX, mouseY, 50, 50, startAngle, endAngle, PIE);
}

function squareBrush() {
  fill(0);
  noStroke();
  rect(mouseX, mouseY, 50, 50);
}

function keyPressed() {
  if (key === 's') {
    arcBrushBool = false;
    squareBrushBool = true;
  }
  if (key === 'a') {
    arcBrushBool = true;
    squareBrushBool = false;
  }
}
