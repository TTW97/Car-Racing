class Form  {

    constructor() {

        this.input = createInput("Name");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');

    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

    display() {

        var title = createElement('h2');
        title.html("Welcome to Car Racing game");
        title.position(200,100);

       
        this.input.position(200,150);
        this.button.position(200,200);

        this.button.mousePressed(() => {    

            this.input.hide();
            this.button.hide();
            title.hide();
            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;
            
            player.update();
            player.updatecount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(200,200);

        });


    }







}