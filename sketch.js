var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,80,30);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}



function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x -fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }


  drawSprites();



}