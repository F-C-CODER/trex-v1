
var trex ,trex_running;
var ground,groundImage

function preload(){//load the images
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){ //creating the sprites
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,190,20,20)
  trex.addAnimation("trex_running",trex_running)
  trex.scale=0.7;

  ground=createSprite(300,190,600,10)
  ground.addImage("groundImage",groundImage)

}

function draw(){   //working
  background(220)
  ground.velocityX=-6

  if(ground.x<0){ //resetting the ground to the centre so that the game becomes infinite..
    ground.x=ground.width/2
  }

  if(keyDown("space")){ //gravity code
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+5

  trex.collide(ground)
  drawSprites();

}
