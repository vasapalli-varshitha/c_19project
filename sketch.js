var car1,car2,car3,car4,road;
vargCar1,pCar1,yCar1;
var greenCar1,pinkCar1,yellowCar1;
var carCG2,carCG3,carCG4;
var car1Img,car2Img,car3Img,car4Img,roadImg,gameOverImg;
var gameState = PLAY;
var gameOver, restart;

var line_1;
var line_2;
var line_3;
var line_4;
var line_5;

var END =0;
var PLAY =1;
var distance=0;

function preload(){
roadImg = loadImage("path.png");
car1Img = loadImage("blueCar.png");
car2Img = loadImage("greenCar-1.png");
car3Img = loadImage("pinkCar-1.png");
car4Img = loadImage("yellowCar-1.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(600,1000);
road = createSprite(300,500,600,1000);

line_1 = createSprite(20,500,20,1000);
line_1.shapeColor="white";

 line_2 = createSprite(580,500,20,1000);
 line_2.shapeColor="white";

 line_3 = createSprite(300,100,20,100);
 line_3.shapeColor="white";

 line_4= createSprite(300,300,20,100);
 line_4.shapeColor="white";

 line_5 = createSprite(300,550,20,100);
 line_5.shapeColor="white";

 line_6 = createSprite(300,800,20,100);
 line_6.shapeColor="white";

 car1 = createSprite(70,800);
car1.scale=0.07;

 gameOver = createSprite(350,150);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.8;
 gameOver.visible = false; 

carCG2 = new Group();
carCG3 = new Group();
carCG4 = new Group();

}

function draw() {
   background(100);
   drawSprites();
   textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);
  if(gameState===PLAY){
     car1.addImage(car1Img);
     distance = distance + Math.round(getFrameRate()/50);
     
     line_1.visible = true;
      line_2.visible = true;
      line_3.visible = true;
      line_4.visible = true;
      line_5.visible = true;
      line_6.visible = true;
     car1.x= World.mouseX;
     edges = createEdgeSprites();
     car1.collide(edges);
      
    var select_oppCar = Math.round(random(1,3));
      
    if (World.frameCount % 150 === 0) {
      if (select_oppCar === 1) {
       greenCar1();
      }
      else if (select_oppCar === 2) {
       pinkCar1();
      }

      else {
       yellowCar1();
      }
    }
    
     if(carCG2.isTouching(car1)){
       gameState = END;
       gCar1.velocityY = 0;
     }
        
     if(carCG3.isTouching(car1)){
       gameState = END;
       pCar1.velocityY = 0;
      }
        
    if(carCG4.isTouching(car1)){
       gameState = END;
        yCar1.velocityY = 0;
      }
        
   }

   else if (gameState === END) {
     gameOver.visible = true;
     text("press DOWN ARROW to reset the game" ,200,250);
      if (keyDown("down_arrow")){
      reset();
      }

      line_1.visible = false;
      line_2.visible = false;
      line_3.visible = false;
      line_4.visible = false;
      line_5.visible = false;
      line_6.visible = false;
     car1.velocityY = 0;
          
     carCG2.setVelocityXEach(0);
     carCG2.setLifetimeEach(-1);
        
     carCG3.setVelocityXEach(0);
     carCG3.setLifetimeEach(-1);
        
     carCG4.setVelocityXEach(0);
     carCG4.setLifetimeEach(-1);
   }
}
    
function greenCar1(){
   gCar1=createSprite(Math.round(random(50,550)),980);
   gCar1.scale =0.12;
   gCar1.velocityY = -6;
   gCar1.addImage(car2Img);
   gCar1.lifetime=170;
   carCG2.add(gCar1);
}

function pinkCar1(){
   pCar1 =createSprite(Math.round(random(50, 550)),980);
   pCar1.scale =0.12;
   pCar1.velocityY = -6;
   pCar1.addImage(car3Img);
   pCar1.lifetime=170;
   carCG3.add(pCar1);
}

function yellowCar1(){
   yCar1 =createSprite(Math.round(random(50, 550)),980);
   yCar1.scale =0.12;
   yCar1.velocityY = -6;
   yCar1.addImage(car4Img);
   yCar1.lifetime=170;
   carCG4.add(yCar1);
}

function reset(){
   gameState=PLAY;
   gameOver.visible=false;
   carCG2.destroyEach();
   carCG3.destroyEach();
   carCG4.destroyEach();
}

