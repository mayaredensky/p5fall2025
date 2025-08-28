//setup runs one time

let cartoon

function preload(){
  cartoon=loadImage('Cartoon.jpg')


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)


}


//draw runs in a loop
function draw() {
  background(106, 219, 247);
  image(cartoon, windowWidth/2, windowHeight/2)
  
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
  rect(width/4.3, height/-14, 10,10)
  rect(width/-14, height/-14, 10,10)
  
   //line  
  strokeWeight(5)
  line(100, 150, 10, 150);
  
  //curve styles
  noFill()
  strokeWeight(4)
  curve(1000, -0, -70, 300, -50, -230, 1000, -100);
  curve(-1000, 40, 220, 300, 130, -240, -1000, 100);
 
  //square styles
  fill(209, 17, 17)
  square(57, 150, 30)
  
 
  
  
  
  
   
}