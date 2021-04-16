class Quiz
{


  constructor()
  {

    //

  }


  getState()
  {

    var gameStateRef  = database.ref('gameState');


    gameStateRef.on
    (
      

      "value",function(data)
     {
        //
       gameState = data.val();
        //
      }
    

    );

    
  }


  update(state)
  {


    database.ref('/').update
    (
      

      {

       gameState : state

      }
    
      
    );


  }


  async start()
  {
    
    contestant = new Contestant();


    if(gameState === 0)
    {

     contestant = new Constestant();

     var contestantCountRef = await database.ref('contestantCount').once("value");


     if(contestantCountRef.exists())
      {

       constenstantCount = contestantCountRef.val();
       contestant.getCount();
       //
     }


     question = new Question();
     question.display();
     //
     //
   }


  }


  play()
  {

    background("yellow");

    this.results.html("Result of The Quiz");
    this.results.position(350, 10);

    this.input.hide();
    this.input.hide();
    this.button.hide();
    this.title.hide();

    getContestantInfo();

    for(var plr in allContestants)
    {
      
      var correctAns = "2";

      
      if(correctAns === allContestants[plr].answer)
      {


        fill("Green");


      }


      else
      {

        fill("red")

      }


    }


  }


}