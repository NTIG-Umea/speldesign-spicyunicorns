class mainScene extends Phaser.Scene{
    constructor(){
        super({key:"mainScene"});
    }
    

    preload(){
        this.load.image('player', 'Assets/player.png');
        this.load.image('enemy', 'Assets/enemy.png');
        this.load.image('powerUp', 'Assets/powerup.png');

        this.lane1 = 200;
        this.lane2 = 400;
        this.lane3 = 600;
        this.lane4 = 800;
        this.delayTime = 15;
        this.currentDelay = 0;
        this.enemySpawnRate = 120;
        this.currentTimeSpawn = 0;
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
        this.enemyAdd();
        this.currentTimeSpawn--;
    }

    enemyAdd() {
        if (this.currentTimeSpawn == 0){

            var amount = this.getRandomInt(3) + 1;

            for(var i = 0; i < amount; i++){
                var x = this.getRandomInt(4) + 1;
                if ( x == 1)
                this.physics.add.image(this.lane4, 128, 'enemy');
                else if ( x == 2)
                this.physics.add.image(this.lane3, 128, 'enemy');
                else if ( x == 3)
                this.physics.add.image(this.lane2, 128, 'enemy');
                else 
                this.physics.add.image(this.lane1, 128, 'enemy');
            }
                this.currentTimeSpawn = this.enemySpawnRate;
        }
    }

    powerUpAdd(){
        
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
}