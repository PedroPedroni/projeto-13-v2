var arco , frecha, cena,  balao_vermelho, balao_rosa, greenB ,blueB ,arrowGroup,score;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;





function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  







  cena = createSprite(0,0,400,400);
  cena.addImage(backgroundImage);
  cena.scale = 2.5
  
  // criando arco para atirar a flecha
  arco = createSprite(380,220,20,50);
  arco.addImage(bowImage); 
  arco.scale = 1;
  
   score = 0  
   balao_vermelho= new Group();
  greenB= new Group();
  blueB= new Group();
  balao_rosa= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
background(0);
  // movendo o fundo
  cena.velocityX = -3 

    if (cena.x < 0){
      cena.x = cena.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
  // soltar a flecha quando a tecla de espaço for pressionada
 
    if (keyDown("space")){
    atirar();

    }
  
  
  //criando inimigos contínuos
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(balao_vermelho)) {
    balao_vermelho.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(balao_rosa)) {
  balao_rosa.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  balao_vermelho.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  balao_rosa.add(pink);
}
function atirar(){
  var frecha= createSprite(100, 100, 60, 10);
  frecha.addImage(arrowImage);
  frecha.x = 360;
  frecha.y=arco.y;
  frecha.velocityX = -4;
  frecha.lifetime = 100;
  frecha.scale = 0.3;
  arrowGroup.add(frecha);


}

// Criando flechas para o arco



