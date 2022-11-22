var sea_img
var barco_img
function preload(){
sea_img = loadImage("sea.png");
barco_img = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
