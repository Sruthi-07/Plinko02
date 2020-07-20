var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;

var score =0;
var turn = 0;
var particle = null;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 100) {
     divisions.push(new Divisions(k, 740, 20, 200));
   }

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,125));
    }
    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,225));
    }
     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
     }
}
 


function draw() {
  background("black");
  Engine.update(engine);

  showStaticScore();

  textSize(20)
  fill("white");
  text("Score : "+score,300,100);
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  ground.display();

  if(particle!==null){
    particle.display();
    countScore();
  }
}

function showStaticScore(){
  textSize(20);
  fill("white");

  text("400",30,600);
  text("300",130,600);
  text("200",230,600);
  text("75",330,600);
  text("50",430,600)
  text("100",530,600);
  text("200",630,600);
  text("300",730,600);
}

function mousePressed(){
  particle = new Particle(mouseX, 10, 10);
  particle.display();
}

function countScore(){
  if(particle.body.position.y>650){
    if( particle.body.position.x<100){
      score=score+400;
      particle=null;
    }
    
    else if(particle.body.position.x>100 && particle.body.position.x<200){
      score=score+300;
      particle=null;
    }
    
    else if(particle.body.position.x>200 && particle.body.position.x<300){
      score=score+200;
      particle=null;
    }
    
    else if(particle.body.position.x>300 && particle.body.position.x<400){
      score=score+75;
      particle=null;
    }
    
    else if(particle.body.position.x>400 && particle.body.position.x<500){
      score=score+50;
      particle=null;
    }
    
    else if(particle.body.position.x>500 && particle.body.position.x<600){
      score=score+100;
      particle=null;
    }
    
    else if(particle.body.position.x>600 && particle.body.position.x<700){
      score=score+200;
      particle=null;
    }

    else if(particle.body.position.x>700 && particle.body.position.x<800){
      score=score+300;
      particle=null;
    }
  }    
}