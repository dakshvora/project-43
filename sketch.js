var sc;
var mn, mnAngle;
var hr, hrAngle;
var scAngle;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);  
}

function draw() {
  background(0); 
  //brings it at the center
  translate(200,200)
  //rotate(-90)
  sc= second();
  scAngle= map(sc,0,60,0,360);
  push();
  stroke(255,0,0);
  strokeWeight(7)
  rotate(scAngle);
  line(0,0,100,0)
  pop();
  noFill();
  stroke(255,0,0);
  strokeWeight(10)
  arc(0,0,300,300,0,scAngle);

  mn = minute();
  mnAngle= map(mn,0,60,0,360);
  push();
  stroke(0,255,0);
  strokeWeight(7)
  rotate(mnAngle);
  line(0,0,75,0)
  pop();
  noFill();
  stroke(0,255,0);
  strokeWeight(10)
  arc(0,0,280,280,0,mnAngle);

  hr = hour();
  mnAngle= map(hr%12,0,12,0,360);
  push();
  stroke(0,0,255);
  strokeWeight(7)
  rotate(hrAngle);
  line(0,0,50,0)
  pop();
  noFill();
  stroke(0,0,255);
  strokeWeight(10)
  arc(0,0,260,260,0,hrAngle);
  
}