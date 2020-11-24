class mainScene extends Phaser.Scene{
    constructor(){
        super({key:"mainScene"});
    }

    preload(){
        this.load.image('player', 'Assets/player.png');

        this.lane1 = 100;
        this.lane2 = 300;
        this.lane3 = 500;
        this.lane4 = 700;
    }

    create(){
        this.player = this.add.sprite(300, 400, 'player');
        this.player.x = this.lane2

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    moveLeft(){
        if (this.player.x == this.lane2){
            this.player.x == this.lane1;
        }
        if (this.player.x == this.lane3){
            this.player.x == this.lane2;
        }
        if (this.player.x == this.lane4){
            this.player.x == this.lane3;
        }
        console.log("hej");
    }

    moveRight(){
        if (this.player.x == this.lane3){
            this.player.x == this.lane4;
        }
        if (this.player.x == this.lane2){
            this.player.x == this.lane3;
        }
        if (this.player.x == this.lane1){
            this.player.x == this.lane2;
        }
    }

    update(time, delta){
        if (this.cursors.left.isDown){
            this.moveLeft();
        }
        if (this.cursors.right.isDown){
            this.moveRight();
        }
    }
}