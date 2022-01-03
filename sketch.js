const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var backgroundImg;
var ground,box;

function preload() {
backgroundImg = loadImage("Background.jpg");
}

function setup() {

  createCanvas(3000,1200);
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(1500,875,3000,20);
  box = new Ground(20,20,20,20);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  box.display();
  drawSprites();
}