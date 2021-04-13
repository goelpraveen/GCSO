var car, wall ;
var speed, weight ;

function setup() {
  createCanvas(1600,400);
 
  speed = random(50,200)
  weight = random(400,1500)

car = createSprite(20,25,5,10);
wall = createSprite(20,200,200,1500)
}

function draw() {
  background(0); 
  car.shapeColor = color(255) ;
  console.log(car.shapeColor)
  if(keyDown(space))
 {
  car.velocityX = speed;
 }
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
 car.velocity = 0;
 var deformation= 0.5 * weight * speed* speed/22500;
if(deformation>180)
{
  car.shapeColor = color(255,0,0);
}
if(deformation<180 && deformation>100)
{
 car.shapeColor = color(230,230,0) ;
}
if(deformation<100)
{
  car.shapeColor = color(0,255,0)
}

}
  if (car.isTouching(wall)&&keyDown(ENTER)) {
    car.x = 20;
    car.y = 25;
  }

  drawSprites();
}



