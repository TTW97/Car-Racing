class Game {

    constructor() {



    }

    gameState() {

        var gameStateref = database.ref('gameState');
        gameStateref.on("value" ,function(data){
            gameState = data.val();
        });

    }

    update(state){

        database.ref('/').update({gameState: state});

    }

    async start() {

        if (gameState === 0) {

            player = new Player();
            var PlayerCountRef = await database.ref('playerCount').once("value");
            if (PlayerCountRef.exists()) {

                playerCount = PlayerCountRef.val();
                player.getcount();

            }
            

            form = new Form();
            form.display();


        }


    }

    play() {

        form.hide();
        textSize(20);
        text("GAME START!", 200,200);

        Player.getPlayerInfo();

        if (all_players !== undefined) {

            var display_position = 130;

            for (var plr in all_players) {

                if (plr === "player" + player.index) {

                    fill("red");

                }

                else {

                    fill("black");

                }

                display_position = display_position + 20;
                textSize(18);
                text(all_players[plr].name + ": " + all_players[plr].distance, 120, display_position);

            }

        }

        if (keyDown(UP_ARROW) && player.index !== null) {

            player.distance = player.distance + 50;
            player.update();

        }

    }



}

