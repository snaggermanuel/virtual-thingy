var PreloadState = {
   //load the game assets before the game starts
   preload: function() {

    this.logo = this.add.sprite(this.game.world.centerX, this.game.v)
    this.logo.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this)
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('backyard','images/backyard.png');
    this.load.image('apple', 'images/apple.png');
    this.load.image('candy', 'images/candy.png');
    this.load.image('rotate', 'images/rotate.png');
    this.load.image('toy', 'images/rubber_duck.png');
    this.load.image('arrow', 'images/arrow.png');
    this.load.image( 'pet', 'images/pet.png', 97 , 83, 5);
   },
   create: function() {
    this.state.start('HomeState');
   }
};