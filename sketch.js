//setup runs one time

let cartoon

function preload(){
  cartoon=loadImage('cartoon.png')


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)


} 



//draw runs in a loop
function draw() {
  background(106, 219, 247);

  if(mouseX >= 100 && mouseX <= 600 && mouseY >= 0 && mouseY <= 500){ 
    image(cartoon, windowWidth-400, 100, 300, 300)
  } else{
    if(mouseIsPressed || keyIsPressed) {
      image(cartoon, windowWidth-400, 300, 300, 300)
    } else{
      image(cartoon, windowWidth-400, 100, 300, 300)
    }
  }

  //ellipse style
  fill(252, 237, 197)
  ellipse(350, 250, 500, 500)
  
  fill(250, 250, 245)
  ellipse(240, 200, 120, 50)
  ellipse(450, 200, 120, 50)
  
  fill (165, 220, 250)
  ellipse(240, 200, 50, 50)
  ellipse(450, 200, 50, 50)
  
  //triangle styles
  fill(66, 170, 245)
  translate(290,250)
  triangle(30, 75, 58, 20, 86, 75)
  
  //arcs styles
  fill(252, 237, 197);
  arc(170, -90, 80, 30, 550, 0);
  arc (-60, -90, 80, 30, 550, 0)
  
  //rect styles
  fill(97, 250, 130)
  rect(width/9, height/-20, 10,10)
  rect(width/-27, height/-20, 10,10)
  
   //line  
  strokeWeight(5)
  line(100, 150, 10, 150);
  
  //curve styles
  noFill()
  strokeWeight(4)
  curve(1000, -0, -70, 300, -50, -230, 1000, -100);
  curve(-1000, 40, 220, 300, 130, -240, -1000, 100);
  
 
  if(mouseX >= 100 && mouseX <= 600 && mouseY >= 0 && mouseY <= 500){ 
    if(mouseIsPressed || keyIsPressed) {
//square styles
  fill(209, 17, 17)

  square(57, 150, 100)
    } else {
//square styles
  fill(209, 17, 17)
  square(57, 150, 30)
    }
  } else{
    //square styles
  fill(209, 17, 17)
  square(57, 150, 30)
  }
  
  
  
  
   
}