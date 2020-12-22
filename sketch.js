const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,360,30);

	bob1 = new Bob(400,400,25);
	bob2 = new Bob(450,400,25);
	bob3 = new Bob(500,400,25);
	bob4 = new Bob(350,400,25);
	bob5 = new Bob(300,400,25);

	rope1 = new Rope(bob1.body,roof.body,-50*2, 0);
	rope2 = new Rope(bob2.body,roof.body,-25*2, 0);
	rope3 = new Rope(bob3.body,roof.body,-0*2, 0);
	rope4 = new Rope(bob4.body,roof.body,-25*2, 0);
	rope5 = new Rope(bob5.body,roof.body,-50*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



