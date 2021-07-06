var BG, BGI
var block1, block2, block3

function preload(){
BGI = loadImage("Images/Background.jpg")
block1 = loadImage("Images/tetrisBlocks/tile005.png")
block2 = loadImage("Images/tetrisBlocks/tile002.png")
block3 = loadImage("Images/tetrisBlocks/tile000.png")
}

function setup(){
createCanvas(700, 380)
BG = createSprite(350, 190)
BG.scale = 0.7
BG.addImage(BGI)
BG.velocityX = -2.5
}

function draw(){
background(0)
if(BG.x < 140){
  BG.x = 350
}

blocks()

drawSprites()
}

function blocks(){
if(frameCount % 60 === 0 ){
  var block
  var r = Math.round(random(1, 3))
  switch(r){
    case 1: block = createSprite(710, Math.round(random(85, 250)),25, 25)
    block.addImage(block1)
    break
    case 2: block = createSprite(710, Math.round(random(85, 250)),50, 25)
    block.addImage(block2)
    break
    case 3: block = createSprite(710, Math.round(random(85, 250)),75, 25)
    block.addImage(block3)
    break
    default:break
  }
  block.velocityX = -4
  block.lifetime = 180
}
}