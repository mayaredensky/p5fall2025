

let ellipseBrushBool = false
let squareBrushBool = false


function setup (){
 	createCanvas (windowWidth, windowHeight)
 	background (255)
 	rectMode(CENTER)
}

function draw () {
	fill(0)
	textSize(30)
	text('Press e for ellipse brush, press s for square brush', 100, 100)
	if(squareBrushBool == true){
		if(mouseIsPressed == true){
		squareBrush()
	}
	}
	
	if(ellipseBrushBool == true){
		if(mouseIsPressed == true){
	ellipseBrush()
}
	}



}

function ellipseBrush(){
	fill(random(255), random(255), random(255))
	ellipse (mouseX, mouseY, 50,50)

}

function squareBrush(){
	fill(random(255), random(255), random(255), 50)
	rect(mouseX, mouseY, 100, 100)

}

function keyPressed(){
	if(key === 'e'){
		ellipseBrushBool = true
		squareBrushBool = false

	}
	if(key === 's'){
		ellipseBrushBool = false
		squareBrushBool = true
	}
}



