import Phaser, { Game, GameObjects } from 'phaser';

export default class BootScene extends Phaser.Scene{
    constructor(){
        super({key:"bootScene"});
    }

    preload(){  

    }

    create(){
        this.add.text(450, 300, 'WELCOME TO GRINKEN ESCAPE', {fill: '#0f0'});

        this.button();
    }
    
    button() {
        const startButton = this.add.text(450,350, 'Start Game', {fill: 'red'})
            .setInteractive()
            .on('pointerdown', () => this.startMain() );
    }

    startMain(){
        this.scene.start("mainScene");
    }
}