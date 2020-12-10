import Phaser, { Game, GameObjects } from 'phaser';

export default class restartScene extends Phaser.Scene{
    constructor(){
        super({key:"restartScene"});
    }

    preload(){  

    }

    create(){
        this.add.text(450, 300, 'You Lost', {fill: '#0f0'});

        this.button();
    }
    
    button() {
        const populateButton = this.add.text(450,350, 'Start Game', {fill: '#0f0'})
            .setInteractive()
            .on('pointerdown', () => this.startMain() );
    }

    startMain(){
        this.scene.start("mainScene");
    }
}