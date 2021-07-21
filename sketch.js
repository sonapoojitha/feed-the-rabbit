var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var grass,grassImage;
var redleaf,redleafImage;
var orangeleaf,orangeleafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  grassImage=loadImage("grass.png");
 redleafImage=loadImage("redImage.png")
 orangeleafImage=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_Sprite=Math.random(round(1,3))

if(frameCount%60==0){

if(select_Sprite==1){
  apple1()
}

else {
  apple1()
}


  
}






  drawSprites();
  
  var select_Sprite=Math.random(round(1,3))

  if(frameCount%100==0){
  
  if(select_Sprite==5){
    orangrleaf1()
  }
  
  else {
    orangeleaf1()
  }
  
  
    
  }
  
  
  
  
  
  
    drawSprites();
  
  
}


function apple1(){
  
var apple=createSprite(random(50,350),40,10,10)
apple.addImage("apple",appleImage)
apple.scale=(0.05)
apple.velocityY=3
apple.lifetime=150

  
}
function redleaf1(){
  
var redleaf =createSprite(random(50,350),40,10,10)
redleaf.addImage("red",redleafImage)
redleaf.scale=(0.08)
redleaf.velocityY=3
redleaf.lifetime=150
  
}
function orangeleaf1(){
  
var orangeleaf =createSprite(random(50,350),40,10,10)
orangeleaf.addImage("orange",orangeleafImage)
orangeleaf.scale=(0.08)
orangeleaf.velocityY=3
orangeleaf.lifetime=150
  
}
function grass1(){
  
var grass =createSprite(random(50,350),40,10,10)
grass.addImage("grass",grassImage)
grass.scale=(0.08)
grass.velocityY=3
grass.lifetime=150
  
}