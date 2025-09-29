let ellipseBrushBool = false


function setup(){
	createCanvas(windowWidth, windowHeight)
	background(100, 239, 475)
}

function draw(){
	ellipse(mouseX, mouseY, 20, 20)

	if(ellipseBrushBool == true){
		ellipseBrush()
	}
	if(mouseIsPressed == true){

		}
	
}

function ellipseBrush(){
	fill(random(255), random(255), random(255), 50)
	ellipse (mouseX, mouseY, 50,50)

}
