const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var boox,box2,box3;
var glod;
var lojy,log0,log5,log1;
var fathuman;
var birda;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box0= new Box(920,320,70,70);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,240,70,70);
    box3 = new Box(810,160,70,70);
boox = new Box(700,240,70,70);
glod = new glods(600,height,1200,20);
lojy = new logy(810,260,300,PI/2);
log0 = new logy(810,180,300,PI/2);
log1= new logy(760,120,150,PI/2);
log5 = new logy(870,120,150,-PI/2);
fathuman = new fatdog (200,200);
birda = new bir (100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   boox.display();
   glod.display();
   fathuman.display();
   lojy.display();
   birda.display();
   box2.display();
   box3.display();
   log1.display();
   log0.display();
   log5.display();
   box0.display();
}