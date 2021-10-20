const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

let base1;
let base2;

let player;
let computerplayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  base1 = new PlayerBase(300, random(450, height - 300), 180, 150);
  base2 = new ComputerBase(1200, random(450, height - 300), 180, 150);

  player = new Player(285, base1.body.position.y - 153, 50, 180);
  computerplayer = new ComputerPlayer(1185, base2.body.position.y - 153, 50, 180);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  base1.display();
  base2.display();

  //display Player and computerplayer
  player.display();
  computerplayer.display();
}
