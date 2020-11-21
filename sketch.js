var bullet, wall,thickness;
 var speed , weight;

function setup() {
  createCanvas(1350,650);
  
  speed = random(53,200);
  weight = random(400,1500);

  bullet = createSprite(80,325,50,3);
  bullet.shapeColor = 'white';

  thickness = random(20,80);

  wall = createSprite(1000,325,thickness,height/2);
  wall.shapeColor = 'brown';
}

function draw() {
  background('black');  
  drawSprites();

  bullet.velocityX = speed;
  if(collide(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      bullet.shapeColor ='green';
    }
    if(damage>10){
      bullet.shapeColor = 'red';
    }
  }
  
  }


function collide(ob1,ob2){
  ob1Right = ob1.x+ob1.width;
  ob2Left = ob2.x;
  if(ob1Right>=ob2Left){
    return true
  }
  else {
    return false
  }
  }
  
