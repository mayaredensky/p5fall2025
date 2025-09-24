

function setup(){
	createCanvas(windowWidth, windowHeight)
	background(225)

	for(let i = 0; i<windowWidth; i=i+10){
		line(mouseX, mouseY, i, windowHeight)

	}

	for(let i = 0; i<windowHeight; i=i+10){
		line(0, i, windowWidth, i)
	}

	// for(let i = 0; i<500; i++){
	// 	ellipse(random(windowWidth), random(windowHeight), 50, 50)
	// }

}

function draw (){
	for(let i = 0; i<windowWidth; i=i+10){
		line(mouseX, mouseY, i, windowHeight)
}
// 	for(let i = 0; i<500; i++){
// 		ellipse(random(windowWidth), random(windowHeight), 50, 50)
// 	}

// 	for(let i = 0; i<windowWidth; i=i+10){
// 		line(i, 0, i, windowHeight)

// 	}

// 	for(let i = 0; i<windowHeight; i=i+10){
// 		line(0, i, windowWidth, i)
// 	}
 }

