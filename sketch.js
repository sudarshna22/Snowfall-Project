const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImgg;

var snow=[];


function preload() {
  backgroundImgg = loadImage("snow1.jpg");
}

function setup() {

  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
 

  

}

function draw() {
  Engine.update(engine);
  
  background(backgroundImgg); 
  

  if(frameCount%5===0) {
    snow.push(new Snow(random(0,800), 30, 30));
  }

  console.log(snow);

  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

  

 
}