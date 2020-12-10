import Phaser, { Game, GameObjects } from 'phaser';
import Assets from './Assets/*.png';

<<<<<<< HEAD
export default class mainScene extends Phaser.Scene {
    constructor() {
        super({ key: "mainScene" });
=======
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
>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07
    }

<<<<<<< HEAD

    preload() {
        console.table(Assets);
=======
    preload(){
>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07
        this.load.image('player', Assets.player);
        this.load.image('enemy', Assets.enemy);
        this.load.image('powerUp', Assets.powerup);

        this.lane1 = 200;
        this.lane2 = 400;
        this.lane3 = 600;
        this.lane4 = 800;
<<<<<<< HEAD
        this.delayTime = 10;
        this.currentDelay = 0;
        this.enemySpawnRate = 120;
        this.currentTimeSpawn = 0;
    }

    create() {

        this.player = this.add.sprite(this.lane4, 900 - 256, 'player');
        this.player.x = this.lane3;
=======
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
>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07

    enemyCollision(){
        console.log("funkar");
    }

<<<<<<< HEAD
    moveLeft() {
        if (this.currentDelay == 0) {

            if (this.player.x == this.lane2) {
                this.player.x = this.lane1;

            }
            if (this.player.x == this.lane3) {
                this.player.x = this.lane2;

            }
            if (this.player.x == this.lane4) {
                this.player.x = this.lane3;
=======
    moveLeft(){

        if (this.player.x == this.lane2){
            this.player.x = this.lane1;

        }
        if (this.player.x == this.lane3){
            this.player.x = this.lane2;

        }
        if (this.player.x == this.lane4){
            this.player.x = this.lane3;
>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07

        }
    }

<<<<<<< HEAD
    moveRight() {
        if (this.currentDelay == 0) {

            if (this.player.x == this.lane3) {
                this.player.x = this.lane4;

            }
            if (this.player.x == this.lane2) {
                this.player.x = this.lane3;

            }
            if (this.player.x == this.lane1) {
                this.player.x = this.lane2;

            }
            this.currentDelay = this.delayTime;
=======
    moveRight(){
            
        if (this.player.x == this.lane3){
            this.player.x = this.lane4;

>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07
        }
        if (this.player.x == this.lane2){
            this.player.x = this.lane3;

<<<<<<< HEAD
    update(time, delta) {
        if (this.cursors.left.isDown) {
            this.moveLeft();
        }
        if (this.cursors.right.isDown) {
            this.moveRight();
        }
        if (this.currentDelay > 0) {
            this.currentDelay--;
=======
        }
        if (this.player.x == this.lane1){
            this.player.x = this.lane2;

>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07
        }
    }

    enemyAdd() {
<<<<<<< HEAD
        if (this.currentTimeSpawn == 0) {

            var amount = this.getRandomInt(3) + 1;

            for (var i = 0; i < amount; i++) {
                var x = this.getRandomInt(4) + 1;
                if (x == 1)
                    this.physics.add.image(this.lane4, -256, 'enemy').setVelocity(0, 900);
                else if (x == 2)
                    this.physics.add.image(this.lane3, -256, 'enemy').setVelocity(0, 900);
                else if (x == 3)
                    this.physics.add.image(this.lane2, -256, 'enemy').setVelocity(0, 900);
                else
                    this.physics.add.image(this.lane1, -256, 'enemy').setVelocity(0, 900);
            }
            this.currentTimeSpawn = this.enemySpawnRate;
        }
    }

    powerUpAdd() {

=======
        
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
>>>>>>> 8951898036a04109c513cc4f1e8dff679179bd07
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}