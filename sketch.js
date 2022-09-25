function preload(){

cat=loadImage("cat.png")  
}
function setup() {
  createCanvas(1000,400);
  platform1=createSprite(30,250 , 100,350)
  platform2=createSprite(200,275 , 100,350)
  platform3=createSprite(400,150 , 100,420)
  platform4=createSprite(570,150 , 100,350)
  platform5=createSprite(759,323 , 50,100)
  platform6=createSprite(777,210 , 100,10)
  platform7=createSprite(974,125 , 100,10)
  player=createSprite(30,30 , 20, 20);
  player.addImage(cat)
floor=createSprite(400,400,1700,10)
wall1=createSprite(0,200,10,400)
wall2=createSprite(800,267,10,400)
celling=createSprite(400,0,800,10)
door=createSprite(800,25,15,50)
door.shapeColor="yellow"
player.shapeColor="pink"

floor.debug=true
platform7.velocityX=-1
platform5.velocityX=-0.5
}


function draw() {
  background(0);  
  drawSprites();
  text(mouseX+','+mouseY,mouseX,mouseY)

  player.velocityY=player.velocityY+0.6
 

  player.collide(celling)
  player.collide(wall1)
  player.collide(wall2)
  player.collide(floor)
  player.collide(platform1)
  player.collide(platform2)
  player.collide(platform3)
  player.collide(platform4)
  player.collide(platform5)
  player.collide(platform6)
  player.collide(platform7)

if(keyDown(LEFT_ARROW)){
  player.x=player.x-10
}
if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10
}
if(keyDown(UP_ARROW)){
  player.y=player.y-10
}
if(keyDown(DOWN_ARROW)){
  player.y=player.y+10
}
if(keyDown("SPACE")){
  player.x=30
  player.y=30
  platform5.x=759
  platform7.x=974
}


if(door.isTouching(player)||player.x>800){
  platform5.velocityX=0
  platform7.velocityX=0
  player.velocityY=0
  player.velocityX=0
  fill("red")
  textSize(20)
  text("YOU WON!",850,140)
}

}

