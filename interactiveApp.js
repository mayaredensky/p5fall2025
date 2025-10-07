let timer = 15
let cartoon

let moonX = []
let moonY = []
let moonXSpeed = []
let moonYSpeed = []

// Position and speed of cartoon during the game
let cartoonX
let cartoonY
let cartoonXspeed = 1
let cartoonYspeed = 1

let score = 0
let mouseDist

let sunDiameter = 50;

let startGameBool = true
let winGameBool = false
let loseGameBool = false

let catchSunBool = false
// Variables for bouncing sun on win screen
let sunY
let sunSpeedY = 1

let clouds 

function preload() {
	cartoon = loadImage('cartoon.png')
	moon = loadImage('moon.png')
	clouds = loadImage('clouds.png')

}

function setup() {
	createCanvas(windowWidth, windowHeight)

	cartoonX = windowWidth / 2;
	cartoonY = windowHeight / 2;

	sunY = windowHeight / 2;

	imageMode(CENTER)

	for(let i = 0; i < 10; i++){
		moonX.push(random(26, windowWidth - 26))
		moonY.push(random(26, windowHeight - 26))
		moonXSpeed.push(random(2, 5))
		moonYSpeed.push(random(2, 5))
	}

	
}

function draw() {
	if (startGameBool) {
		startGame()
	}

	if (winGameBool) {
		winGame()
	}

	if (loseGameBool){
		loseGame()
	}

  //how do I insert a differnt picture to make these a moon?


}




function keyPressed(){
// 	if(key = 'x'){
// 		moonX.push(random(windowWidth))
// 		moonY.push(random(windowHeight))

// 		print(x)
// 	}
}



// Function that starts the game
function startGame() {
	background(92, 189, 237);

	fill(255)
	textSize(20)
	text('Catch the moons! Your score is: ' + score + ' points', 20, 100);
	text('You only have ' + timer + ' to collect them!', 20, 130)
	mouseDist = dist(mouseX, mouseY, cartoonX, cartoonY);
	

	if (mouseDist < 50 && mouseIsPressed == true) {
		catchSunBool = true
		cartoonX = mouseX
		cartoonY = mouseY
	    // cartoonX = random(26, windowWidth - 26)
	    // cartoonY = random(26, windowHeight - 26)
			// cartoonXspeed *= 1.3
		    // cartoonYspeed *= 1.3

	}else{
		catchSunBool = false
		cartoonX += cartoonXspeed
		cartoonY += cartoonYspeed
	}


	for(let i = 0; i < moonX.length; i++){
		image(moon, moonX[i], moonY[i], 50, 50)

		
		
		if(dist(mouseX, mouseY, moonX[i], moonY[i]) < sunDiameter/2 + 60 && catchSunBool==true){
			score ++
			moonX.splice(i, 1)
			moonY.splice(i, 1)
			moonXSpeed.splice(i, 1)
			moonYSpeed.splice(i, 1)

			sunDiameter = sunDiameter + 10;
		}

		//mistakenly used mouseX instead of moonX o_O
		//this animates now, I also added a moonY speed array
		 moonX[i] = moonX[i] + moonXSpeed[i]
		 moonY[i] = moonY[i] + moonYSpeed[i]


		 if (moonX[i] >= windowWidth - 25 || moonX[i] <= 25) {
			moonXSpeed[i] *= -1;
		}

		if (moonY[i]>= windowHeight - 25 || moonY[i] <= 25) {
			moonYSpeed[i] *= -1;
		}
		
	}

		//print(moonX[0])
	

	if (cartoonX >= windowWidth - 25 || cartoonX <= 25) {
		cartoonXspeed *= -1;
	}

	if (cartoonY >= windowHeight - 25 || cartoonY <= 25) {
		cartoonYspeed *= -1;
	}



	if (score == 10) {
		startGameBool = false
		winGameBool = true
	}

	image(cartoon, cartoonX, cartoonY, sunDiameter, sunDiameter)

	if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
   startGameBool = false
   loseGameBool = true
  }
}


// Win screen function with bouncing sun
function winGame() {
	moonX.splice(0, moonX.length)
	moonY.splice(0, moonY.length)
	moonXSpeed.splice(0, moonXSpeed.length)
	moonYSpeed.splice(0, moonYSpeed.length)

	background(34, 72, 83)

	fill(255)
	textSize(40)
	text('You win!', 20, 100);

	bounceCartoon()

	if(dist(mouseX, mouseY, windowWidth/2, windowHeight/2) <50 && mouseIsPressed){
 	 	score = 0
 	 	timer = 15
 	 	
 	 	for(let i = 0; i < 10; i++){
			moonX.push(random(26, windowWidth - 26))
			moonY.push(random(26, windowHeight - 26))
			moonXSpeed.push(random(2, 5))
			moonYSpeed.push(random(2, 5))
	
 	 	}
 	 	winGameBool = false
 	 	startGameBool = true
 	 	sunDiameter = 50

 	 }


}

function loseGame(){
	moonX.splice(0, moonX.length)
	moonY.splice(0, moonY.length)
	moonXSpeed.splice(0, moonXSpeed.length)
	moonYSpeed.splice(0, moonYSpeed.length)
	
	// background(clouds.png, windowWidth/2, windowHeight/2)
	image(clouds, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
 	
 	 text("GAME OVER", width/2, height/2);
 	  text("CLICK THE SUN TO RESTART", width/2, height/1.9);
 	 image(cartoon, windowWidth/2.2, windowHeight/2.2, 100, 100)

 	 if(dist(mouseX, mouseY, windowWidth/2, sunY) <250 && mouseIsPressed){
 	 	score = 0
 	 	timer = 15
 	 	for(let i = 0; i < 10; i++){
				moonX.push(random(26, windowWidth - 26))
				moonY.push(random(26, windowHeight - 26))
				moonXSpeed.push(random(2, 5))
				moonYSpeed.push(random(2, 5))
		
	 	 	}
 	 	loseGameBool = false
 	 	startGameBool = true
 	 	sunDiameter = 50

 	 }
}


	



// Function to bounce the sun (cartoon) up and down
function bounceCartoon() {
	sunY += sunSpeedY

  // Bounce between these vertical limits
	if (sunY > windowHeight / 2 + 50 || sunY < windowHeight / 2 - 50) {
		sunSpeedY *= -1
	}

	image(cartoon, windowWidth / 2, sunY, 500, 500)
}
