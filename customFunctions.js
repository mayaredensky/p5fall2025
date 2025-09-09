let arcBrushBool = true;
let squareBrushBool = false;
let currentColor;

let actions = [];       // Array to record strokes
let isReplaying = false;
let replayIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(68, 136, 219);
  rectMode(CENTER);
  angleMode(RADIANS);

  currentColor = color(227, 223, 98); // default yellow

  // Color buttons
  let yellowBtn = createButton('Yellow Brush');
  yellowBtn.position(10, 10);
  yellowBtn.mousePressed(() => currentColor = color(227, 223, 98));

  let orangeBtn = createButton('Orange Brush');
  orangeBtn.position(110, 10);
  orangeBtn.mousePressed(() => currentColor = color(245, 184, 29));

  let blueBtn = createButton('Blue Brush');
  blueBtn.position(220, 10);
  blueBtn.mousePressed(() => currentColor = color(76, 188, 245));

  // Replay button
  let replayBtn = createButton('Replay Drawing');
  replayBtn.position(330, 10);
  replayBtn.mousePressed(startReplay);

  // Clear button
  let clearBtn = createButton('Clear Canvas');
  clearBtn.position(450, 10);
  clearBtn.mousePressed(() => {
    background(68, 136, 219);
    actions = [];
  });

  //save button
  let saveBtn = createButton('Save Canvas');
  saveBtn.position(650, 10);
  saveBtn.mousePressed(()=>{
   saveJSON(actions,"test.json")
  });
  try{ 
    loadJSON("test.json", (data) => {
  actions=Object.values(data)
  startReplay()
  console.log(actions);                 // Actual JSON object
});

  }catch(e){

  }
}

function draw() {
  fill(0);
  textSize(50);
  text('Starry Starry Night', 550, 100);

  if (!isReplaying && mouseIsPressed) {
    // Record action and draw live
    let action = {
      x: mouseX,
      y: mouseY,
      color: currentColor.toString(),
      brush: arcBrushBool ? 'arc' : 'square'
    };
    actions.push(action);

    if (arcBrushBool) {
      arcBrush(mouseX, mouseY, currentColor);
    } else if (squareBrushBool) {
      squareBrush(mouseX, mouseY, currentColor);
    }
  }

  // Replay logic
  if (isReplaying) {
    if (replayIndex < actions.length) {
      let a = actions[replayIndex];
      let col = color(a.color);

      if (a.brush === 'arc') {
        arcBrush(a.x, a.y, col);
      } else if (a.brush === 'square') {
        squareBrush(a.x, a.y, col);
      }
      replayIndex++;
    } else {
      isReplaying = false; // Done replaying
    }
  }
}

 

function arcBrush(x, y, brushColor) {
  fill(brushColor);
  noStroke();
  let startAngle = random(0, TWO_PI);
  let endAngle = startAngle + random(PI / 6, PI / 2);
  arc(x, y, 50, 50, startAngle, endAngle, PIE);
}

function squareBrush(x, y) {
  fill(0);
  noStroke();
  rect(x, y, 30, 30);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    arcBrushBool = false;
    squareBrushBool = true;
  }
  if (key === 'a' || key === 'A') {
    arcBrushBool = true;
    squareBrushBool = false;
  }
}

function startReplay() {
  isReplaying = true;
  replayIndex = 0;
  background(68, 136, 219);
}
