import Phaser, { Game, GameObjects } from 'phaser';
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
        this.score = 0;
        this.scoreText;
    }

    create(){
        this.player = this.physics.add.sprite(this.lane4, 900-256, 'player').setGravity(0);
        this.player.body.setAllowGravity(false);
        this.player.x = this.lane1;

        this.enemies = this.physics.add.group();

        this.physics.add.overlap(this.player, this.enemies, this.enemyCollision);

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.enemyAdd, callbackScope: this, loop: true });
        
        this.input.keyboard.on('keydown_D', this.moveRight, this);
        this.input.keyboard.on('keydown_A', this.moveLeft, this);
    }

    update(time, delta){
    }

    enemyCollision(){
        console.log("funkar");
    }

    moveLeft(){

        if (this.player.x == this.lane2){
            this.player.x = this.lane1;

        }
        if (this.player.x == this.lane3){
            this.player.x = this.lane2;

        }
        if (this.player.x == this.lane4){
            this.player.x = this.lane3;

        }
    }

    moveRight(){
            
        if (this.player.x == this.lane3){
            this.player.x = this.lane4;

        }
        if (this.player.x == this.lane2){
            this.player.x = this.lane3;

        }
        if (this.player.x == this.lane1){
            this.player.x = this.lane2;

        }
    }

    enemyAdd() {
        
        var amount = this.getRandomInt(3) + 1;

        for(var i = 0; i < amount; i++){

            var x = this.getRandomInt(4) + 1;
            let enemy;
            
            if ( x == 1){
                enemy = this.enemies.create(this.lane4, -256, 'enemy');
            
            }
            else if ( x == 2){
                enemy = this.enemies.create(this.lane3, -256, 'enemy');
            
            }
            else if ( x == 3){
                enemy = this.enemies.create(this.lane2, -256, 'enemy');
            
            }
            else{
                enemy = this.enemies.create(this.lane1, -256, 'enemy');
            
            }
            
            enemy.body.setVelocityY(900);
        }
    }
    powerUpAdd(){
        function collectpowerup (player, powerup)
        {
            powerup.disableBody(true, true);
                
            this.score += 1000;
            thisscoreText.setText('Score: ' + score);
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
}