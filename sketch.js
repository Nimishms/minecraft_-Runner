var PLAY = 1;
var END = 0;
var steve1,steveImg;
  var zombie1,zombieImg;
  var background1,backgroundImg;
  var gameState = PLAY;
  var invis;
  var cobble1,cobbleImg;
  var zombieG;
  var score = 0;
  var skele1,skeleImg;
  var restart1,restartImg;
  var deadImg;
var skeleG;



function preload(){
  steveImg = loadImage("STEVE.png");
  zombieImg = loadImage("Zombie_SSBU.png");
  backgroundImg = loadImage("b.jpg");
  //cobbleImg = loadImage("cobblestone.jfif");
  restartImg = loadImage("restart.png");
  deadImg = loadImage("unnamed.png");
  skeleImg = loadImage("Skeleton.png");
}

function setup() {
 createCanvas(600,300);
   
  background1 = createSprite(300,150);
  background1.addImage("Image",backgroundImg);
  background1.scale = 0.6;
  background1.velocityX = -3;
  
  steve1 = createSprite(100,270);
  steve1.addImage("Image",steveImg);
  steve1.scale = 0.1
  
 // zombie1 = createSprite(100,270);
  //zombie1.addImage("Image",zombieImg);
  //zombie1.scale = 0.2;
  
 
 
 
  invis = createSprite(300,300,600,5);
   invis.visible = false;
  restart = createSprite(300,150);
  restart.addImage("Image",restartImg);
  restart.scale= 0.7;
   restart.visible = false;
  zombieG = new Group();
  skeleG = new Group();
}

function draw() {
 // background(180);
 drawSprites();
    fill("black");
  text("score:"+ score,550,50);
 
  
  if(background1.x < 300) {
    background1.x = 600;
   }
 
  if (gameState === PLAY ) {

 score = score+ Math.round(getFrameRate()/60)
    
    if(keyDown("space") && (steve1.y >= 150)) {
    steve1.velocityY = -14;
  
  }
  steve1.velocityY = steve1.velocityY + 0.9 ;
  
  }
  
  if (zombieG.isTouching(steve1)|| (skeleG.isTouching(steve1))) {
    gameState = END;
    
  }
 
  
  if (gameState === END) {
    restart.visible = true;
    steve1.addImage("Image",deadImg);
    steve1.scale = 0.2;
    zombieG.destroyEach();
    zombieG.velocityX = 0;
    background1.velocityX = 0;
    skeleG.destroyEach();
    skeleG.velocityX = 0;
    
  }
  
  if (mousePressedOver(restart)) {
    Reset();
  }
  
  steve1.collide(invis);
  var num = Math.round(random(1,3))
 if (World.frameCount%100 === 0) {
    if (num === 1) {
   
    spawnSkele();
  } else if (num === 2) {
    spawnCobblestone();
  }
  
 }
 
  
  
}

function spawnCobblestone() {
   
    zombie1 = createSprite(600,270);
    zombie1.addImage("image",zombieImg);
    zombie1.scale = 0.2;
    zombie1.velocityX = -5;
    zombie1.lifetime = 600;
    zombieG.add(zombie1);
    
  
}

function Reset() {
  gameState = PLAY;
 background1.velocityX = -3;
 restart.visible = false;
 zombieG.velocityX = 5;
  steve1.addImage("Image",steveImg);
  steve1.scale = 0.1
  zombie1.x = 100;
  score = 0;
  
}

function spawnSkele() {
    
     skele1 = createSprite(600,270);
     skele1.addImage("Image",skeleImg);
     skele1.scale = 0.3;
     skele1.velocityX = -5;
     skele1.lifetime = 600;
     skeleG.add(skele1);
     
   
  
}