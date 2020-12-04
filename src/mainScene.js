import Phaser, { Game } from 'phaser';
import Assets from './Assets/*.png';

export default class mainScene extends Phaser.Scene{
    constructor(){
        super({key:"mainScene", 
        physics: {
            arcade :{
                gravity: {y: 200},
                debug: false
            }
        }
    });
    }
    

    preload(){
        this.load.image('player', Assets.player);
        this.load.image('enemy', Assets.enemy);
        this.load.image('powerUp', Assets.powerup);

        this.lane1 = 200;
        this.lane2 = 400;
        this.lane3 = 600; 
        this.lane4 = 800; 
        this.delayTime = 10;
        this.currentDelay = 0;
        this.enemySpawnRate = 120;
        this.currentTimeSpawn = 0;
    }

    create(){

        this.player = this.add.sprite(this.lane4, 900-256, 'player')
        this.player.x = this.lane3;

        this.cursors = this.input.keyboard.createCursorKeys();

        this.enemies = this.physics.add.group();

        this.physics.add.collider(this.player, this.enemies, this.enemyCollision, null, this);

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        this.timer = this.time.addEvent({
            delay: 500,                // ms
            loop: true
        });
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

    enemyCollision(){
        console.log("funkar");
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

    enemyAdd() {
        if (this.currentTimeSpawn == 0){

            var amount = this.getRandomInt(3) + 1;

            for(var i = 0; i < amount; i++){
                var x = this.getRandomInt(4) + 1;
                let enemy;
                if ( x == 1){
                    enemy = this.enemies.create(this.lane4, -256, 'enemy');
                    enemy.body.setEnable();
                    enemy.body.setVelocityY(900);
                }
                else if ( x == 2){
                    enemy = this.enemies.create(this.lane3, -256, 'enemy');
                    enemy.body.setVelocityY(900);
                }
                else if ( x == 3){
                    enemy = this.enemies.create(this.lane2, -256, 'enemy');
                    enemy.body.setVelocityY(900);
                }
                else{
                    enemy = this.enemies.create(this.lane1, -256, 'enemy');
                    enemy.body.setVelocityY(900);
                }
            }

                this.currentTimeSpawn = this.enemySpawnRate;
        }
    }

    powerUpAdd(){
        function collectpowe (player, star)
{
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);
}
        
    }
    

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
}