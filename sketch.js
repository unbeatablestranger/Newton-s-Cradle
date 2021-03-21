const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
var roof1,ground,leftEdge,rightEdge,upEdge,downEdge;

function setup()
{
	createCanvas(1400, 700);


	engine = Engine.create();
  world = engine.world;
  
  ground = new roof(width/2,690,width,20);
  roof1 = new roof(width/2,100,600,70);
  leftEdge = new roof(10,height/2,20,height);
  rightEdge = new roof(1390,height/2,20,height);
  upEdge = new roof(width/2,10,width,20);

  

  sandwich = new roof(width/2,610,width,20);
  

  startBobPositionX = width/2;
  startBobPositionY = height/4+500;
  bobdia = 60;


  
  
  ball1 = new Bob(startBobPositionX-bobdia*2, startBobPositionY, bobdia);
  ball2 = new Bob(startBobPositionX-bobdia, startBobPositionY, bobdia);
  ball3 = new Bob(startBobPositionX, startBobPositionY, bobdia);
  ball4 = new Bob(startBobPositionX+bobdia, startBobPositionY, bobdia);
  ball5 = new Bob(startBobPositionX+bobdia*2, startBobPositionY, bobdia);

  string1 = new string(ball1.body,roof1.body, -120,0);
  string2 = new string(ball2.body,roof1.body,-60,0);
  string3 = new string(ball3.body,roof1.body,0,0);
  string4 = new string(ball4.body,roof1.body,60,0);
  string5 = new string(ball5.body,roof1.body,120,0)

	Engine.run(engine);
  
}


function draw() 
{
  Engine.update(engine);	
  background("grey");
  
  rectMode(CENTER);
  ellipseMode(CENTER);

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
  roof1.display();
  
  leftEdge.display();
  rightEdge.display();
  upEdge.display();
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  
  if(keyWentDown("up_arrow"))
  {
    Matter.Body.applyForce(ball1.body, ball1.body.position,{x: -100, y:-80});
  }

  detectCollision(ball1,ball2);
  detectCollision(ball2,ball3);
  detectCollision(ball3,ball4);
  detectCollision(ball4,ball5);
  
  
}

function detectCollision(aBall,bBall)
{
   mangoBodyPosition = aBall.body.position;
   stoneBodyPosition = bBall.body.position;

   var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

   if(distance<=aBall.r+bBall.r)
   {
    Matter.Body.applyForce(aBall.body, bBall.body.position,{x: 150, y:80});
   }
}
