class Player{


    constructor(){ 
        this.index=null
        this.distance=0
        this.name = null
        this.xwastaken=200
        this.rank=0
        
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance,
          xwastaken:this.xwastaken
        });
      }

   /* update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({name : this.name , distance:this.distance});
    }*/
    static getPlayerInfo(){
        var playerInfoRef=database.ref('players');
        //Arrow function is used for callback. it binds the property with class not with object
        playerInfoRef.on("value",(data)=>{allPlayers=data.val()})
    }
    getCarsAtEnd(){
        database.ref('carsAtEnd').on("value",(data)=>{this.rank=data.val()})
        
    }
    static updateCarsAtEnd(rank){
        database.ref('/').update({carsAtEnd:rank})
    }
    
}