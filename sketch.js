var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  getState();
  start();
}


function draw(){
  background("pink");

  if(contestantCount = 3)
  {

    gameState = 1;

  }

  drawSprites();
}
