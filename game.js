var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 900,
    physics: {
        default: 'arcade',
        arcade :{
            gravity: {y: 0},
            debug: false
        }
    },
    scene: [ mainScene ]
};

var game = new Phaser.Game(config);