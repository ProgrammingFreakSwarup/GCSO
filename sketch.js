var car,weight,speed,speedy;
var wall;
var theta=60;
var defnm
function setup() {
  createCanvas(1000,200);
  wall=createSprite(750, 100, 50, 150);
  weight=random(400,1500);
  
  car=createSprite(40, 100, 25, 25);
  car.shapeColor="white"
  car.velocityX=random(55,90);
  speed=car.velocityX
  
}

function draw() {
  background("black");  
  
  drawSprites();
 
  if(car.x>500 && car.x<715){
    car.velocityY=5;
    car.rotationSpeed=3;
   }else{
    car.rotationSpeed=0;
    car.velocityY=0;
   }
 
  
 
if(wall.x-car.x<=(car.width+wall.width)/2){
  car.velocityX=0;
  car.velocityY=0;
  defnm=Math.round(0.5*speed*speed*weight/22500);
  if(defnm>180){
    car.shapeColor="red";
  }
  if(defnm>100&&defnm<180){
    car.shapeColor="yellow";
  }
  if(defnm<100){
    car.shapeColor="lime";
  }
}
}