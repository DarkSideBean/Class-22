//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic: true
  }

  //Matter.Bodies.rectangle(x, y, width, height, [options]) 
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myworld, ground);

  ball=Bodies.circle(200, 100, 20,{restitution: 1.0});
  World.add(myworld, ball);

}

function draw() {
  background(66,245,90);  

  Engine.update(myengine);

  rectMode(CENTER);
  fill(245,85,66);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  fill(238,3,255);
  ellipse(ball.position.x, ball.position.y, 20, 20);


}