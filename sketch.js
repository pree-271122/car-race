var backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance = 0;
var edges;
var form, player, game;
var car1,car2,car3,car4,cars;
var car1_img,car2_img,car3_img,car4_img;
var track,xwataken;
var ground,groundimg;
var track2


function preload(){
    track = loadImage("track.jpg");
    car1_img =loadImage("car1.png");
    car2_img =loadImage("car2.png");
    car3_img =loadImage("car3.png");
    car4_img =loadImage("car4.png");
    groundimg = loadImage("ground.png")
    formimg=loadImage("BG.jpg")
    track2=loadImage("track.png")
}


function setup(){
    createCanvas(displayWidth-30,displayHeight-30);
    background(formimg)
    database=firebase.database();
    
    game=new Game();
    game.getState();
    game.start()
}

function draw(){
    //edges = createEdgeSprites()
    if(playerCount === 4 ){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
   
}
