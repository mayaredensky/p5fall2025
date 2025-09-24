let xPos = 0
let yPos = 0

let xSpeed = 2
let ySpeed = 2

let ballDiameter = 100

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
}


function draw(){

	ellipse(xPos, yPos, ballDiameter, ballDiameter)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos>=windowWidth-ballDiameter/2 || xPos<=ballDiameter/2){
		//reverse x speed
		xSpeed = xSpeed * -1
		fill(random(255), random(255),)
	}

	if(yPos>=windowHeight-ballDiameter/2 || yPos<=ballDiameter/2){
		//reverse y speed
		ySpeed = ySpeed * -1

	}

}

