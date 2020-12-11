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
            },
        });
    }
    

    preload(){
        this.load.image('player', Assets.player);
        this.load.image('enemy', Assets.enemy);
        this.load.image('powerup', Assets.julmust);

        this.lane1 = 200;
        this.lane2 = 400;
        this.lane3 = 600;
        this.lane4 = 800;
        this.scoreText;
        this.collisionDoneEnemy = 0;
        this.collisionDonePower = 0;
        this.speedScale = 1; 
    }

    create(){
        this.lives = 3;
        this.score = 0;

        this.player = this.physics.add.sprite(this.lane4, 900-256, 'player').setGravity(0);
        
        this.player.body.setAllowGravity(false);

        this.player
        

        this.player.x = this.lane1;


        this.enemies = this.physics.add.group();
        

        this.powerUpGroup = this.physics.add.group();

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0f0' });

        this.timeSpeed = this.time.addEvent({delay: 10000, callback: this.speedAdd(), callbackScope: this, loop: true});

        this.timedPowerEvent = this.time.addEvent({ delay: Phaser.Math.Between(4300, 7700), callback: this.powerUpAdd, callbackScope: this, loop: true });

        this.timedEnemyEvent = this.time.addEvent({ delay: 1000, callback: this.enemyAdd, callbackScope: this, loop: true });

        this.timedScore = this.time.addEvent({delay: 10, callback: this.scoreAdd, callbackScope: this, loop: true});
        
        this.input.keyboard.on('keydown_D', this.moveRight, this);
        this.input.keyboard.on('keydown_A', this.moveLeft, this);
    }

    update(time, delta){
        if (this.lives <= 0){
            this.scene.start("restartScene");
        }

        if (this.physics.overlap(this.player, this.enemies)){
            if (this.collisionDone == 0){
                this.enemyCollision();
            }
        } else 
            this.collisionDone = 0

        if (this.physics.overlap(this.player, this.powerUpGroup)){
            if (this.collisionDonePower == 0){
                this.powerUpCollision();
            }
        } else 
            this.collisionDonePower = 0

        this.scoreText.setText('Score: ' + this.score);
    }

    enemyCollisionCheck() {
        if (this.physics.overlap(this.player, this.enemies)){
            this.enemyCollision();
        }
    }

    enemyCollision(){
        this.collisionDone = 1;
        this.lives--;
    }

    speedAdd(){
        this.speedScale *= 1.2;
    }

    scoreAdd(){
        this.score++;
        this.scoreText
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
            
            enemy.body.setVelocityY(900*this.speedScale);
        }
    }

    powerUpAdd(){
        
        var amount = this.getRandomInt(3) + 1;

            var x = this.getRandomInt(4) + 1;
            let powerup;
            
            if ( x == 1){
                powerup = this.powerUpGroup.create(this.lane4, -256, 'powerup');
            
            }
            else if ( x == 2){
                powerup = this.powerUpGroup.create(this.lane3, -256, 'powerup');
            
            }
            else if ( x == 3){
                powerup = this.powerUpGroup.create(this.lane2, -256, 'powerup');
            
            }
            else{
                powerup = this.powerUpGroup.create(this.lane1, -256, 'powerup');
            
            }
            
            powerup.body.setVelocityY(900*this.speedScale);
       }
       
       
    powerUpCollision ()
    {
        this.collisionDonePower = 1;
        
        this.score += 1000;
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
      }
}