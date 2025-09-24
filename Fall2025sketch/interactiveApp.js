
let bounceCartoon

let cartoon

//position of cartoon
let cartoonX
let cartoonY

//cartoon speed
let cartoonXspeed = 3
let cartoonYspeed = 3

let score = 0

let MouseDist

let startGameBool = true
let winGameBool = false

function preload(){
	cartoon = loadImage('cartoon.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	
	cartoonX = windowWidth/2
	cartoonY = windowHeight/2

	imageMode(CENTER)
}


function draw(){ 
	if(startGameBool == true){
		startGame()

	}

	if(winGameBool == true){
		winGame()

	}

	if(bounceGameBool == true){
		bounceCartoon() 
	}
}



//function that starts the game
function startGame(){
	background(40, 96, 45)

	fill(255)
	textSize(40)
	text('Catch Me If You Can! Your score is: ' +score + ' points', 20, 100)

	mouseDist = dist(mouseX, mouseY, cartoonX,  cartoonY)

	cartoonX = cartoonX + cartoonXspeed
	cartoonY = cartoonY + cartoonYspeed

	if(cartoonX >= windowWidth - 25 || cartoonX <= 25){
		cartoonXspeed = cartoonXspeed * -1

	}

	if(cartoonY >= windowHeight - 25 || cartoonY <= 25){
		cartoonYspeed = cartoonYspeed * -1

	}
	if(mouseDist < 25){
		score++
		cartoonX = random(26, windowWidth - 26)
		cartoonY = random(26, windowHeight - 26)

		cartoonXspeed = cartoonXspeed * 1.3
		cartoonYspeed = cartoonYspeed * 1.3

	}

	if(score == 5){
		startGameBool = false
		winGameBool = true

	}


	image(cartoon, cartoonX, cartoonY, 50, 50)

}

//win screen function
function winGame(){
	background(34, 72, 83)

	fill(255)
	textSize(40)
	text('You Win!!', 20, 100)
	image(cartoon, windowWidth/2, windowHeight/2, 50, 50)

	if(winGameBool){
		bounceCartoon(50, 50, 50, 50)
	}
}