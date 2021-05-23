var movingrect,fixedrect







function setup() {
  createCanvas(1900,1200);
  fixedrect=createSprite(600, 400, 50,80);
  fixedrect.shapeColor="blue";
  fixedrect.debug=false;
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="blue";
}

function draw() {
  background("red");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
  &&movingrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor="green";
  fixedrect.shapeColor="orange";
}
else{
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";

}





  drawSprites();
}