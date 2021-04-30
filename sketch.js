var hr;
var mn;
var sc;
var hrAngle;
var mnAngle;
var scAngle;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255,255,255);  

  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  
  stroke("red");
  point(0,0);
  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(scAngle);
  stroke(0,179,223);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(149,111,214);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(144,238,144);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  
}