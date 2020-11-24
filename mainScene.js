class mainScene extends Phaser.Scene{
    constructor(){
        super({key:"mainScene"});
    }

    preload(){
        this.load.image('player', 'Assets/player.png');
        this.load.image('enemy', 'Assets/enemy.png');
        this.load.image('powerUp', 'Assets/powerup.png');
        const rand = require("./EnemyPlacer.js");

        this.lane1 = 100;
        this.lane2 = 300;
        this.lane3 = 500;
        this.lane4 = 700;
        this.delayTime = 15;
        this.currentDelay = 0;
    }

    create(){
        this.player = this.add.sprite(300, 400, 'player');
        this.player.x = this.lane3

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    moveLeft(){
        if (this.currentDelay == 0){

            if (this.player.x == this.lane2){
                this.player.x = this.lane1;

            }
            if (this.player.x == this.lane3){
                this.player.x = this.lane2;

            }
            if (this.player.x == this.lane4){
                this.player.x = this.lane3;

            }
            this.currentDelay = this.delayTime;
        }
    }

    moveRight(){
        if (this.currentDelay == 0){
            
            if (this.player.x == this.lane3){
                this.player.x = this.lane4;

            }
            if (this.player.x == this.lane2){
                this.player.x = this.lane3;

            }
            if (this.player.x == this.lane1){
                this.player.x = this.lane2;

            }
            this.currentDelay = this.delayTime;
        }
    }

    update(time, delta){
        if (this.cursors.left.isDown){
            this.moveLeft();
        }
        if (this.cursors.right.isDown){
            this.moveRight();
        }
        if (this.currentDelay > 0){
            this.currentDelay--;
        }
    }
}