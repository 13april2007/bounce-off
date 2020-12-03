var movingRect, fixedRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

var gameObject5,gameObject6;
function setup() {
  createCanvas(600,600);
 movingRect = createSprite(100, 200, 50, 50);
 movingRect.shapeColor = "red";


 fixedRect = createSprite(250,200,40,80);
 fixedRect.shapeColor ="yellow";

 gameObject1 = createSprite(100,400,60,60);
 gameObject1.shapeColor = "white";

 gameObject2 =  createSprite(200,400,50,80);
 gameObject2.shapeColor ="orange";

 gameObject3 = createSprite(300,400,60,30);
 gameObject3.shapeColor ="blue";

 gameObject4 = createSprite(500,400,60,50);
 gameObject4.shapeColor ="pink";

 gameObject5 = createSprite(400,20,40,40);
 gameObject5.shapeColor = "green";
//gameObject5.velocityX = 5;
 gameObject5.velocityY =6;
 
gameObject6 = createSprite(400,500,40,40);
 gameObject6.shapeColor ="black";
 //gameObject6.velocityX = -6;
 gameObject6.velocityY = -5;
}

function draw() {
  background("lightgreen");  

  movingRect.x = mouseX;
  movingRect.y =mouseY;

  // R.x - Y.x < R.width/2 + Y.width/2;    Right
  // Y.x - R.x < R.width/2 + Y.width/2;    Left

  // R.y - Y.y < R.height/2 + Y.height/2;  Bottom
  // Y.y - R.y <  R.height/2 + Y.height/2; Top

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor ="purple";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor ="yellow";
  }
  
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "purple";
    gameObject1.shapeColor ="purple";
  }
  else{
    movingRect.shapeColor = "red";
    gameObject1.shapeColor ="white";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "purple";
    gameObject2.shapeColor ="purple";
  }
  else{
    movingRect.shapeColor = "red";
    gameObject2.shapeColor ="orange";
  }
  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "purple";
    gameObject3.shapeColor ="purple";
  }
  else{
    movingRect.shapeColor = "red";
    gameObject3.shapeColor ="blue";
  }
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "purple";
    gameObject4.shapeColor ="purple";
  }
  else{
    movingRect.shapeColor = "red";
    gameObject4.shapeColor ="pink";
  }
  
  bounceoff(gameObject5,gameObject6);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
     object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2){
   
      return true;
 }

 else{
  
  return false;
 }
}

function bounceoff(object1,object2){
if(object1.x - object2.x < object1.width/2 + object2.width/2  &&
   object2.x - object1.x < object1.width/2 + object2.width/2){
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
   }  
   if(object1.y - object2.y < object1.height/2 + object2.height/2  &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
      }                      
}