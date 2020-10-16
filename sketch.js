
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;

var ball,ground,box1,box2,box3;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  

	
/*
box1=new Box(900,380,200,20);
box2=new Box(800,340,20,100);
box3=new Box(1000,340,20,100);
*/

ground= new Ground(800,670,1600,20)	;
ball=new Ball(200,200,70);
box1=new Ground(1100,570,20,200);
box2=new Ground(1300,570,20,200);
dustbin=new Box(1200,660);
}


function draw() {
  background(255);
  Engine.update(engine);
 

 ground.display();
  dustbin.display();
  ball.display();
  box1.display();
  box2.display();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
	}
}

