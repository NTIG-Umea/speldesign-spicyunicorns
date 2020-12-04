import Phaser from 'phaser';
import mainScene from './mainScene'

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    scene: [ mainScene ]
};

var game = new Phaser.Game(config);