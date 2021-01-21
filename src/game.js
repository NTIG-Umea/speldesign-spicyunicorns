import Phaser from 'phaser';
import mainScene from './mainScene';
import restartScene from './restartScene';
import bootScene from './bootScene';

var config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.FIT,
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        width: 1000,
        height: 800
    },
    scene: [ bootScene, mainScene , restartScene]
};

var game = new Phaser.Game(config);