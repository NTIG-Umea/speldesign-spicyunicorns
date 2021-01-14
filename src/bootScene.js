import Phaser, { Game, GameObjects } from 'phaser';
import Image from './Assets/start.png';

export default class BootScene extends Phaser.Scene{
    constructor(){
        super({key:"bootScene"});
    }

    preload(){  
        this.load.image('start', Image);
    }

    create(){
        this.add.text(380, 300, 'WELCOME TO GRINKEN ESCAPE', {fill: '#0f0'});
        this.add.text(380, 400, 'Use A and D for movement',{fill: '#FFF'} );

        this.button();
    }
    
    button() {
        const startButton = this.add.image(500,350, 'start')
            .setInteractive().setScale(0.2)
            .on('pointerdown', () => this.startMain() );
    }

    startMain(){
        this.scene.start("mainScene");
    }
}