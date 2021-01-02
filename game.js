class Game{
    constructor(){}
    
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
     async start(){
        if (gameState === 0){
            player = new Player()

            var playerCountRef = await database.ref('playerCount').once("value")
            if (playerCountRef.exists ()){
                playerCount=playerCountRef.val()
                player.getCount()
            }
            form =new Form();
            form.display()
            
        }
            
            car1=createSprite(100,200);
            car1.addImage("car1",car1_img);
            car2=createSprite(300,200);
            car2.addImage("car1",car2_img);
            car3=createSprite(500,200);
            car3.addImage("car1",car3_img);
            car4=createSprite(700,200);
            car4.addImage("car1",car4_img);
            cars=[car1,car2,car3,car4];


        
    }

  
play(){
    form.hide();
   
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(track2)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)

      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
     
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
         x=displayWidth - allPlayers[plr].xwastaken - index*200;
        cars[index-1].x =x;
        cars[index-1].y = y;
        car1.bounce(car2)
        car2.bounce(car3)
        car3.bounce(car4)
        car2.bounce(car4)
        car1.bounce(car3)
        car2.bounce(car1)
        car1.bounce(car4)
        car3.bounce(car2)
        car4.bounce(car3)
        if (index === player.index){
         // cars[index - 1].shapeColor = "red";
          stroke(10)
          fill("red")
          ellipse(x,y,60,60)
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
        //cars[index-1].bounceOff(edges)
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.xwastaken += 5
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.xwastaken -=5
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    if (player.distance<0){
      player.distance=40
    }
    if (player.xwastaken< -700){
      player.xwastaken= -660
    }
    if (player.xwastaken>700 ){
      player.xwastaken= 700-40
    }
    console.log(player.distance);
    if(player.distance > 4230)
    {
      player.rank++;
      gameState = 2;
      console.log(player.rank)
      Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
  }


  end(){
    console.log("Game End");

    var winner = createElement("h3");
    winner.style('color', 'yellow');
    winner.style('font-size', '40px');
    winner.style('font-style','ARIEL');
    winner.html(player.name+" you have been ranked " +player.rank )
    winner.position(displayWidth/2-200,100);
    
  }
}
