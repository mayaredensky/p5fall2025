

let dayBool = false
let nightBool = false
let arcBrushBool = false



function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	
}


function draw(){
	fill(0)
	textSize(20)
	text("Press d for day, press n for night", 100, 100)

	//if day is true draw day function
	if(dayBool == true){
		
			dayScene()
		
	}

	//if night is true draw night function
	if(nightBool == true){
		
			nightScene()
		
	}
	
}


//pretend that these are individual sketches/drawings/scenes and
//you're flipping between them


function dayScene(){
	//add as much as you want to this function!
	background(52, 137, 235)
	fill(240, 245, 103)
	ellipse(windowWidth/2, windowHeight/2, 200, 200)
	fill(0)
	ellipse(windowWidth/2.1, windowHeight/2.1, 20, 20)
	ellipse(windowWidth/1.9, windowHeight/2.1, 20, 20)
	arcBrush(mouseX, mouseY, 50, 50)
}

function nightScene(){
	//add as much as you want to this function!
	background(16, 30, 46)
	fill(179, 255, 254)
	ellipse(windowWidth/2, windowHeight/2, 200, 200)
	ellipse(windowWidth/2.1, windowHeight/2.1, 20, 20)
	ellipse(windowWidth/1.9, windowHeight/2.1, 20, 20)
	arcBrush(mouseX, mouseY, 50, 50)

}





function keyPressed(){
	//pressing d flips day to true and night to false
	if(key === 'd'){
		dayBool = true
		nightBool = false
	
	}
	//pressing d flips night to true and day to false
	if(key === 'n'){
		dayBool = false
		nightBool = true
		
	}



}
function arcBrush(x, y, w, h) {
  noFill();
  stroke(0);
  strokeWeight(3);
  // Draw a smile arc at (x, y)
  arc(735, 450, w, h, 0, PI);
}



