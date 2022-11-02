

//initiate the Phaser framework
var game = new Phaser.Game(360,640,Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('BootState', BootState);
game.state.start('HomeState', HomeState);
game.state.start('PreloadState',PreloadState);
game.state.start('GameState');



