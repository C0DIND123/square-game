var square

function setup() {
  createCanvas(displayWidth-10, displayHeight-120);
  square = createSprite(width/2, height/2, 80, 80)
  square.shapeColor=("pink");
}

function draw() 
{
  background(30);
  if (keyDown(UP_ARROW)){
    square.y-= 7
  }
  if (keyDown(DOWN_ARROW)){
    square.y+= 7
  }
  if (keyDown(LEFT_ARROW)){
    square.x-= 7
  }
  if (keyDown(RIGHT_ARROW)){
    square.x+= 7
  }
drawSprites()
}




