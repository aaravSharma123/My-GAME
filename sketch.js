var player
var ground
var enemy

function preload(){
groundImage = loadImage("BACKGROUND.jpg")
playerImage = loadImage("ninja (1).png")
enemyImage = loadImage("filename.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = createSprite(400,200,800,400)
  ground.addImage(groundImage)
  ground.scale = 1.3
  ground.x = ground.width/2
  player = createSprite(50,350,10,10)
  player.addImage(playerImage)
  player.scale = 0.2
  ground2 = createSprite(400,400,800,5)
  ground2.visible = false
  
  player.setCollider("circle",-100,0,300)
  enemyGroup = createGroup()
}

function draw() {
  background(255,255,255);  
  ground.velocityX = -2
  if(ground.x<0){
ground.x = ground.width/2
  }
  player.collide(ground2)
  enemy1();
  if(keyDown("space")){
  player.velocityY = -16
  }
  player.velocityY = player.velocityY + 0.5;
  if(enemyGroup.isTouching(player)){
    enemyGroup.setVelocityXEach(0)
    ground.velocityX = 0
  }
  drawSprites();
}
function enemy1(){
  if(frameCount%100===0){
    enemy = createSprite(800,350,20,20)
    enemy.addImage(enemyImage)
    enemy.velocityX = -12
    enemy.scale =0.2
    enemyGroup.add(enemy)
  
    enemy.setCollider("circle",0,0,300)
  }
}