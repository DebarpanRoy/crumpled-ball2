
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbinImage,dusbin;


function preload(){
    dustbinImage = loadImage("Images/dustbingreen.png");
}
function setup() {
	createCanvas(1100,1100);
 
   
	engine = Engine.create();
	world = engine.world;

	paper1= new Paper(100, 600, 30);

	ground1 = new Ground(400, 1000, 1500, 20);
	
	dustbin = createSprite(1040,720,20,20);
    dustbin.addImage(dustbinImage);
    dustbin.scale = 0.5;
    
	

	dustbin1 = new Dustbin(645, 945, 20, 90);
	dustbin2 = new Dustbin(730, 1000, 150, 20);
	dustbin3 = new Dustbin(1080,720,20,160);
	


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(0,0,0);

 

 paper1.display();

 ground1.display();

 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 drawSprites();
 // keyPressed();
}

function keyPressed(){
   if(keyCode === UP_ARROW)  {

	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:79,y:-74})
   }

 }


