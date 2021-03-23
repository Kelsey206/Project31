
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var maxDrops = 100;
var drops = [];
var rand;


function preload(){
   
}

function setup(){
   
    var canvas = createCanvas(650,650);
    
    
    engine = Engine.create();
    world = engine.world;
    
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
   
    background(0);
    
    Engine.update(engine);

      for(var i = 0; i<maxDrops; i++){
          drops[i].display();
          drops[i].changePosition();
      }
  
      drawSprites();
}   
   
