var Canvas;
var gameState = 0;
var playerCount;
var database;

var game;

var distance = 0;
var all_players;

var player;

var form;


function preload() {


}

function setup() {

    canvas = createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.gameState();
    game.start();
    


}




function draw() {

    if (playerCount === 4) {

        game.update(1);

    }

    if (gameState === 1) {

        clear();
        game.play();

    }


}

