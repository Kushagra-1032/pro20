var cat;
var mouse;
var catImg,cat1,cat2,cat3,cat4;
var gardenImg,garden
var mouseImg,mouse1,mouse2,mouse3,mouse4

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

tomImg1= loadAnimation("images/cat1.png");
tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
tomImg3= loadAnimation("images/cat4.png");
jerryImg1=loadAnimation("images/mouse1.png");
jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg3=loadAnimation("images/mouse4.png");



}

function setup(){
      createCanvas(1000,800);
      cat= createSprite(870, 600);
      cat.addAnimation("catSleeping",tomImg1);
      cat.scale=0.2
      mouse= createSprite(200, 600);
      mouse.addAnimation("jerryStanding",jerryImg1);
      mouse.scale=0.15
      garden=createSprite(1000,800,800,100);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
cat.velocityX=0;
cat.addAnimation("tomLastImage", tomImg3);
cat.x =300;
cat.scale=0.2;
cat.changeAnimation("tomLastImage");
mouse.addAnimation("jerryLastImage", jerryImg3);
mouse.scale=0.15;
mouse.changeAnimation("jerryLastImage");
 }


    drawSprites();
}


function keyPressed(){
 if (keyCode===LEFT_ARROW){
     cat.velocityX=-5;
     cat.addAnimation("catRunning",cat2);
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouseTeasing",jerryImg2)
     mouse.changeAnimation("mouseTeasing")
    
 }
  

}
