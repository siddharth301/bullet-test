var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1000,400);
  bullet = createSprite(20, 400, 50, 10);
  bullet.velocityX = speed;
  bullet.shapecolor = "grey";

  wall = createSprite(800,200,60,height/2);
  wall.shapecolor = color(80,80,80);

  speed = random(55,90);

  weight = random(400,1500);

  thickness = random(22,83);
}

function draw() {
  background("black");
 
  if(wall.x-bullet.x<(bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var deformation=0.5 * speed * weight * speed/22509;
    
 }
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 8;
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);
    if(damage>10){
      wall.shapecolor=color(255,0,0);
    }
    if(damage<10){
      wall.shapecolor=color(0,255,0);
    }

 }
 drawSprites();
 hasCollided();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
   
}