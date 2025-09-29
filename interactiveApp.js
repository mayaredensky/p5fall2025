
let cartoon

let moonX = []
let moonY = []
let moonSpeed = []


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

let catchSunBool = false
// Variables for bouncing sun on win screen
let sunY
let sunSpeedY = 1

function preload() {
	cartoon = loadImage('cartoon.png')
	moon = loadImage('moon.png')

}

function setup() {
	createCanvas(windowWidth, windowHeight)

	cartoonX = windowWidth / 2;
	cartoonY = windowHeight / 2;

	sunY = windowHeight / 2;

	imageMode(CENTER)

	for(let i = 0; i < 20; i++){
		moonX.push(random(windowWidth))
		moonY.push(random(windowHeight))
		moonSpeed.push(random(2, 5))
	}

	print(moonSpeed)
}

function draw() {
	if (startGameBool) {
		startGame()
	}

	if (winGameBool) {
		winGame()
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
	textSize(40)
	text('Catch the moons! Your score is: ' + score + ' points', 20, 100);

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

		
		
		if(dist(mouseX, mouseY, moonX[i], moonY[i]) < 25 && catchSunBool==true){
			score ++
			moonX.splice(i, 1)
			moonY.splice(i, 1)
			moonSpeed.splice(i, 1)

			sunDiameter = sunDiameter + 10;
		}

		  //moonX[i] = mouseX[i] + moonSpeed[i]
		 // moonY[i] = mouseY[i] + moonSpeed[i]
	}

		//print(moonX[0])
	

	// if (cartoonX >= windowWidth - 25 || cartoonX <= 25) {
	// 	cartoonXspeed *= -1;
	// }

	// if (cartoonY >= windowHeight - 25 || cartoonY <= 25) {
	// 	cartoonYspeed *= -1;
	// }



	if (score == 10) {
		startGameBool = false
		winGameBool = true
	}

	image(cartoon, cartoonX, cartoonY, sunDiameter, sunDiameter)
}

// Win screen function with bouncing sun
function winGame() {
	background(34, 72, 83)

	fill(255)
	textSize(40)
	text('You win!', 20, 100);

	bounceCartoon()
}

function mousePressed(){
	

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
