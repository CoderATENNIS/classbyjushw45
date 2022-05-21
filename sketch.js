var bg
var balloonAnimation
var towers
var birds
var balloon;


function preload()
{
bg=loadImage("assets/bg.png")
balloonAnimation=loadAnimation("assets/balloon1.png", "assets/balloon2.png","assets/balloon3.png")


}

function setup()
{
  createCanvas(600,600)
balloon=createSprite(100,200,30,30)
balloon.velocityY=7
balloon.addAnimation("balloonMoving",balloonAnimation)
balloon.scale=0.4
 
}

function draw()
{
background(bg)
drawSprites();
if(keyIsDown(UP_ARROW)){
balloon.velocityY=balloon.velocityY-0.8

}

}