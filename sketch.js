var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.loop();

	fairy = createSprite(120,575);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.16;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 530 && starBody.position.y > 530) {
	Matter.Body.setStatic(starBody, true);
  }

  drawSprites();
  keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyWentDown("right")){
		fairy.velocityX = 2;
	}

	if(keyWentUp("right")){
		fairy.velocityX = 0;
	}

	if(keyWentDown("left")){
		fairy.velocityX = -2;
	}

	if(keyWentUp("left")){
		fairy.velocityX = 0;
	}
}
