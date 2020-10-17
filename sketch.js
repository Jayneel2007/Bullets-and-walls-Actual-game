var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness=random(22,83)

  bullet = createSprite(50,200,70,20);
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);

  
}

function draw() {
  background("blue");  

  if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/(thickness* thickness* thickness);

    if(deformation>10){
      bullet.shapeColor = color(255,0,0);

    }

    if(deformation<10){

      bullet.shapeColor = color(0,225,0)

    }
    
  

  }

  drawSprites();
}
function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){

    return true;

  }

  return false;
  
}