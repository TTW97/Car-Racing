class Player {

    constructor() {

        this.index = null;
        this.name = null;
        this.distance = 0;


    }

    getcount() {

        var PlayerCountref = database.ref('playerCount');
        PlayerCountref.on("value", function(data){
            playerCount = data.val();
        });

    }

    updatecount(count) {

        database.ref('/').update({
            playerCount: count
        });

    }

    update() {

        var playerindex = "Players/Player" + playerCount;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance
        });

    }
        
    static getPlayerInfo(){

        var PlayerInforef = database.ref('Players');
        PlayerInforef.on("value", (data) => {

            all_players = data.val();

        });

    }



}