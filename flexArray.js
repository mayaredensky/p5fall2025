let cartoon

let x = []
let y = []


function preload(){
	cartoon = loadImage('cartoon.png')
}
function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
}

function draw(){
	background(255)
	for(let i = 0; i < x.length; i++){
		image(cartoon, x[i], y[i], 50, 50)

		if(dist(mouseX, mouseY, x[i], y[i])< 25){
			x.splice(i, 1)
			y.splice(i, 1)
		}
	}


}

function keyPressed(){
	if(key = 'x'){
		x.push(random(windowWidth))
		y.push(random(windowHeight))

		print(x)
	}
}
