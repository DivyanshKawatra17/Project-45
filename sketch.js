var bg, bgImg
var me, meImg

function preload(){
bgImg = loadImage("assets/bg1.jpg")
meImg = loadImage("assets/Your Character.png")
}

function setup(){

//background image
bg=createSprite(0,0,30000,20000)
bg.addImage(bgImg);

me=createSprite(2000,1100,100,30);
me.addImage(meImg)



}

function draw() {
  
  background("bg");
  me.display();     
          
          

          
   
        drawSprites();
        
}