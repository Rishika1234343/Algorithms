var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,40,40);
  car.shapeColor="red";
  car.velocityX=2;

  wall=createSprite(600,200,20,100);
  wall.shapeColor="yellow";




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 // if(isTouching(car,wall)) {
   // car.shapeColor="yellow";
   // car.velocityX=0;
 // }
  bounceoff(car,wall);
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x -object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x <object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y -object1.y <object2.height/2 +object1.height/2) {
 return true;
}
else {
 return false;
}
}
function bounceoff(object1,object2){
  if (object1.x -object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x <object2.width/2 + object1.width/2){
      object1.velocityX=(-1)*object1.velocityX;
    }
    else if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y -object1.y <object2.height/2 +object1.height/2) {
    object1.velocityY=(-1)*object1.velocityY;
}
else {
 return false;
} 
}




