import Phaser from 'phaser';
import mainScene from './mainScene'

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    scene: [ mainScene ],
    physics: {
        arcade :{
            gravity: {y: 200},
            debug: false
        }
    }
};

var game = new Phaser.Game(config);