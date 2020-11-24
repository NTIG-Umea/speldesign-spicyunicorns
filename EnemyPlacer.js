

enemyplacer(lane1, lane2, lane3, lane4); {

    var value = Phaser.Math.Between(1, 3);

    if (value = 1)
        return lane1;

    if (value = 2)
        return lane2;

    if (value = 3)
        return lane3;

    else
        return lane4;
}