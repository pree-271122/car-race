class Form{
    constructor(){
      this.input =  createInput("").attribute("placeholder", "Name");
      this.button = createButton('play');
     this.greeting = createElement('h3')
      this.title=createElement('h2');
      this.reset=createButton('RESET BRUH')
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide()
      this.greeting.hide();
    }


  display(){
      
     this.title.html ("CAR RACING GAME");
     this.title.position(displayWidth/2,displayHeight/2-400);
      
      this.input.position(displayWidth/2,displayHeight/2-250);
     this.button.position(displayWidth/2,displayHeight/2-200);
      this.reset.position(displayWidth-300,displayHeight-300);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2,displayHeight/2-250);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateCarsAtEnd(0);
      database.ref('players').remove();
    })
  } 

}