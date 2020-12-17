import Phaser, { Game, GameObjects } from 'phaser';
import Assets from './Assets/*.png';

export default class mainScene extends Phaser.Scene{
    constructor(){
        super({key:"mainScene", 
        physics: {
            arcade :{
                gravity: {y: 0},
                debug: false
                }
            },
        });
    }
    

    preload(){
        this.load.image('player', Assets.player);
        this.load.image('julmust', Assets.julmust);
        this.load.image('enemy', Assets.enemy);
        this.load.multiatlas('nisse', 'assets/nisse_stand.json', 'assets/');
        this.load.multiatlas('stump', 'assets/stump.json', 'assets/');
        this.load.multiatlas('wood', 'assets/fire_wood.json', 'assets/');

        this.lane1 = 200;
        this.lane2 = 400;
        this.lane3 = 600;
        this.lane4 = 800;
        this.scoreText;
        this.collisionDoneEnemy = 0;
        this.collisionDonePower = 0;
        this.speedScale = 1; 
        this.toggle = 0;
    }

    create(){
        this.lives = 3;
        this.score = 0;

        this.player = this.physics.add.sprite(this.lane4, 900-128, 'player').setGravity(0);
        
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
        } else {
            this.collisionDone = 0

        if (this.physics.overlap(this.player, this.powerUpGroup)){
            if (this.collisionDonePower == 0){
                this.powerUpCollision();
            }
        } else {
            this.collisionDonePower = 0;
            } 
        }
        this.scoreText.setText('Score: ' + this.score);
    }

    enemyCollisionCheck() {
        if (this.physics.overlap(this.player, this.enemies)){
            this.enemyCollision();
            this.enemies.setVelocityY(0)
        }
    }

    enemyCollision() {
        this.collisionDone = 1;
        this.lives--;
    }

    speedAdd() {
        this.speedScale *= 1.2;
    }

    scoreAdd() {
        this.score++;
        this.scoreText
    }

    moveLeft() {

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

    moveRight() {
            
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
        var checked1 = false;
        var checked2 = false;
        var checked3 = false;
        var checked4 = false;

        var amount = this.getRandomInt(3) + 1;

        for(var i = 0; i < amount; i++){

            var x = this.getRandomInt(4) + 1;
            let enemy;
            
            if ( x == 1){
                if (checked1 == false){

                    
                    var y = this.getRandomInt(3)+1;
                    if ( y == 2) {
                        enemy = this.enemies.create(this.lane4, -256, 'nisse', 'Nisse2.png');
                    }
                    if (y == 3) {
                        enemy = this.enemies.create(this.lane4, -256, 'stump', 'stubbe_med_yxa_med_snö.png');
                    }
                    else {
                        enemy = this.enemies.create(this.lane4, -256, 'wood', 'ved_med_snö.png');
                    }
                    checked1 = true;
                }
            }
            else if ( x == 2){
                var y = this.getRandomInt(3)+1;
                if(checked2 == false){

                    console.log(y);
                    if ( y == 1) {
                        enemy = this.enemies.create(this.lane3, -256, 'nisse', 'Nisse2.png');
                    }
                    if (y == 2) {
                        enemy = this.enemies.create(this.lane3, -256, 'stump', 'stubbe_med_yxa_med_snö.png');
                    }
                    else {
                        enemy = this.enemies.create(this.lane3, -256, 'wood', 'ved_med_snö.png');
                    }
                    checked3 = true;
                }
            }
            else if ( x == 3){
                var y = this.getRandomInt(3)+1;
                if(checked3 == false){

                    console.log(y);
                    if ( y == 1) {
                        enemy = this.enemies.create(this.lane2, -256, 'nisse', 'Nisse2.png');
                    }
                    if (y == 2) {
                        enemy = this.enemies.create(this.lane2, -256, 'stump', 'stubbe_med_yxa_med_snö.png');
                    }
                    else {
                        enemy = this.enemies.create(this.lane2, -256, 'wood', 'ved_med_snö.png');
                    }
                    checked3 = true;
                }
            
            }
            else{
                var y = this.getRandomInt(3)+1;
                if(checked4 == false){

                    console.log(y);
                    if ( y == 1) {
                        enemy = this.enemies.create(this.lane1, -256, 'nisse', 'Nisse2.png');
                    }
                    if (y == 2) {
                        enemy = this.enemies.create(this.lane1 , -256, 'stump', 'stubbe_med_yxa_med_snö.png');
                    }
                    else{
                        enemy = this.enemies.create(this.lane1 , -256, 'wood', 'ved_med_snö.png');
                    }
                    checked4 = true;
                }
            }
            
            enemy.body.setVelocityY(900*this.speedScale);
        }
    }
    
    remove(enemy) {
        enemy.remove
    }

    powerUpAdd(){
        
        var amount = this.getRandomInt(3) + 1;

            var x = this.getRandomInt(4) + 1;
            let powerup;
            
            if ( x == 1){
                powerup = this.powerUpGroup.create(this.lane4, -256, 'julmust');
            
            }
            else if ( x == 2){
                powerup = this.powerUpGroup.create(this.lane3, -256, 'julmust');
            
            }
            else if ( x == 3){
                powerup = this.powerUpGroup.create(this.lane2, -256, 'julmust');
            
            }
            else{
                powerup = this.powerUpGroup.create(this.lane1, -256, 'julmust');
            
            }
            
            powerup.body.setVelocityY(900*this.speedScale);
       }
       
       
    powerUpCollision()
    {
        this.powerUpGroup.clear(true);
        this.collisionDonePower = 1;
        
        this.score += 1000;
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
      }
}