class Question
{


  constructor()
  {

   this.input = createInput("Name Goes Here...");
   this.input = createInput("Answer Goes Here!");
   this.button = createButton('Submit');
   this.title = createElement('h2');

  }


  hide()
  {

    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();

  }

  
  display()
  {

    background("pink");

    this.title.html("MyQuiz Game");
    this.title.position(350, 10);

    this.question.html("Question:- Which one has two zero and two four?")
    this.question.position(150, 80);

    this.option1.html("1. 0024");
    this.option1.position(150, 100);

    this.option2.html("2. 2024");
    this.option2.position(150, 120);

    this.option3.html("3. 0044");
    this.option3.position(150, 140);

    this.input1.position(150, 230);
    
  }


}