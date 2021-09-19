const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,670,width,20)
leftwall=new Ground(1100,600,20,120)
rightwall=new Ground(1350,600,20,120)
var ball_options= {
	restitution:0.3,
	friction:0,
	density:1.2,
	isStatic:false
}
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftwall.display()
  rightwall.display()
  ellipseMode(RADIUS)
  fill(255)
  ellipse(ball.position.x,ball.position.y,30,30)


 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


