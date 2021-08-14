const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//groundLevel
ground = new Ground(600,height,1200,20)

//First Level 
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1= new Pig(800,320);
    log1=new Log (810,220,300,PI/2);
    //Second level
    box3= new Box(700,200,70,70);
    box4 = new Box (920,200,70,70);
    pig2= new   Pig(800,200);
    log2 = new Log (810,150,300,PI/2);
    //Third level
    box5 = new Box (810,90,70,70);
    log3 = new Log(790,80,150,PI/7);
    log4 = new Log(830,80,150,-PI/7);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display ();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}