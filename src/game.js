import Phaser from 'phaser';
import mainScene from './mainScene';
import restartScene from './restartScene';

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    scene: [ mainScene , restartScene]
};

var game = new Phaser.Game(config);