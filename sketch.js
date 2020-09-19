
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Dustbin , DustbinImage;
var paper;
var dustbinSide1 , dustbinSide2 , dustbinSide3;

function preload(){
	DustbinImage = loadImage("images/Dustbin.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,650,1300,20);

	paper = new Paper(200,60,70);


	dustbinSide1 = new DustbinSide(1000,630,200,20);
	dustbinSide2 = new DustbinSide(910,520,20,220);
	dustbinSide3 = new DustbinSide(1090,520,20,220);
	
	Engine.run(engine);
  
}


function draw() {
  background(255);

  

  paper.display();

  ground.display();



  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  
  image(DustbinImage,1000,520,200,250);
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:205,y:-140});
	}
}
