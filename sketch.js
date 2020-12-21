var ground,groundImage;
var character,characterImage;
var monster;
var gamestate="play";
var monsterGroup;
var gameoverImage;
var gameover;
function preload(){
groundImage=loadImage("temple run 2.jpg");
characterImage=loadImage("character 4.jpg");
gameoverImage=loadImage("download10.jpg");
monsterImage=loadImage("ghost1.jpg");
}

function setup(){
createCanvas(600,600);
ground=createSprite(300,100,10,10);
ground.scale=1.5;
ground.addImage("run",groundImage); 
ground.velocityY=1; 
  
character=createSprite(300,300,10,10);
character.scale=0.15;
character.addImage("run2",characterImage);  
monsterGroup=new Group();
}

function draw(){
background(0);
  if(gamestate==="play"){
  if(ground.y>=400){
  ground.y=200;
}
  if(keyDown("space")){
   character.velocityY=-3; 
  }
  if(keyDown("left_arrow")){
  character.x=character.x-4;  
  }
  if(keyDown("right_arrow")){
  character.x=character.x+4;  
  }
  
  
  if(character.y>=600){
  character.y=300;  
  character.velocityY=0;
  }
  character.velocityY=character.velocityY+0.2;
  
  
  spawnMonster();
  drawSprites();
    
  if(monsterGroup.isTouching(character)){
  monsterGroup.destroyEach();  
  gamestate="end";
  }  
}
if(gamestate==="end"){
textSize(59);
  text("gameover",200,400);

}
} 
  
function spawnMonster(){
if(frameCount%160===0){
monster=createSprite(300,100,20,20); 
monster.velocityY=3;  
monster.scale=0.1;
monster.addImage(monsterImage);
monster.x=Math.round(random(50,550));
monsterGroup.add(monster);
}  
}
function spawnGameover(){
  gameover=createSprite(300,300,20,20);
 gameover.addImage(gameoverImage); 
}