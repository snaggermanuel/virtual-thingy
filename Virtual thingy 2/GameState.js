//this game will have only 1 state
var GameState = {
    //initiate some game level settings
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticallytally = true;
    },
    //load the game assets before the game starts
    preload: function(){
        this.load.image('backyard', 'images/backyard.png');
        this.load.image('apple', 'images/apple.png');
        this.load.image('candy', 'images/candy.png');
        this.load.image('logo', 'images/logo.png');
        this.load.spritesheet('pet', 'images/pet.png',97,83,5,1,1);
        this.load.image('toy', 'images/rubber_duck.png');
        this.load.image('rotate', 'images/rotate.png');
        this.load.image('arrow', 'images/arrow.png',);
    },
    //executed after everything is loaded
    create: function() {
        this.background = this.game.add.sprite(0,0, 'backyard');
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.placeItem, this);

        this.pet = this.game.add.sprite(100,400, 'pet');
        this.pet.anchor.setTo(0.5);

        this.pet.animations.add('funnyfaces'[1,2,3,2,1],7,false)

        //custom properties
        this.pet.customParams = {health: 100, fun: 100};
        
        //draggable pet
        this.pet.inputEnabled = true;
        this.pet.input.enableDrag();

        this.apple = this.game.add.sprite(72,570,'apple');
         this.apple.anchor.setTo(0.5);
         this.apple.inputEnabled = true;
         this.apple.events.onInputDown.add(this.pickItem, this);
         this.apple.events.onInputDown.add(this.pickItem, this);
         
         this.candy = this.game.add.sprite(144,570,'candy');
         this.candy.anchor.setTo(0.5);
         this.candy.customparams = {health: -10, fun: 10};
         this.candy.events.onInputDown.add(this.pickItem, this);
         this.candy.events.onInputDown.add(this.pickItem, this);

         this.toy = this.game.add.sprite(216, 570, 'toy');
         this.toy.anchor.setTo(0.5);
         this.toy.inputEnabled = true;
         this.toy.customParams = {fun: 20};
         this.toy.events.onInputDown.add(this.rotatePet, this);

         this.rotate = this.game.add.sprite(288, 570, 'rotate');
         this.rotate.anchor.setTo(0.5);
         this.rotate.inputEnabled = true;
         this.rotate.events.onInputDown.add(this.rotatePet, this);

         this.buttons = [this.apple, this.candy, this.toy, this.rotate];

         //nothing is selected
         this.selecteditem = null;
  
         //the user interface (UI) is not blocked at the start
         this.uiBlocked = false;

         var style = { font: '20px Arial', fill: '#fff'};
         this.game.add.text(10,20, 'Health:' , style);
         this.game.add.text(140,20, 'Fun:' , style);

         this.healthText = this.game.add.text(80,20, '', style);
         this.funText = this.game.add.text(185, 20, '', style);

         this.refreshStats();

         //decrease the health every 5 sceonds
         this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND *5, this.reduceProperties, this);

        },
    pickItem: function(sprite,event){
        if(!this.uiBlocked) {

    console.log('pick item');
     }},
     rotatePet: function(sprite,event) {
        if(!this.uiBlocked) {
        
            //we want the user interface (UI) to be blocked until the rotation ends 
            this.uiBlocked = true;
        
            this.clearSelection();
        
            //alpha to indicate selection 
            sprite.alpha = 0.4;
        
        
          }
        
        
        },
        refreshStats: function() {
            this.healthText.text = this.pet.customParams.health;
            this.funText.text = this.pet.customParams.fun;
        },
        reduceProperties: function() {
            this.pet.customParams.health -= 10;
            this.pet.customParams.fun -= 15;
            this.refreshStats();
        },
        //executed multiple times per second
       update: function() {
        if(this.pet.customParams.health <= 0 || this.pet.customParams.fun <= 0) {
            this.pet.frame = 4;
            this.uiBlocked = true;

            this.game.time.events.add(2000, this.gameOver, this);
        }
      },
      gameOver: function() {
          this.state.start('HomeState', true, false, 'GAMEOVER!');
      },

    //   this.game.state.restart();

      clearSelection: function() {

          //remove transparency from all buttons
          this.buttons.forEach(function(element, index){
              element.alpha = 1;
          });
      
          //we are not selecting anything now
          this.selectedItem = null;
      },
      placeItem: function(sprite, event) {

        if(this.selectedItem && !this.uiBlocked) {
          var x = event.position.x;
          var y = event.position.y;
      
          var newItem = this.game.add.sprite(x,y,)
          newItem.anchor.setTo(0.5);
          newItem.customParams = this.selectedItem.customParams;
        
          var petMovement = this.game.add.tween(this.pet);
          petMovement.to({x: x, y: y}, 700);
          petMovement.onComplete.add(function(){
           //destroy the apple/candy/duck
            newItem.destroy();
 //play animation
          this.pet.animations.play('funnyfaces');
        
          //release the ui
          this.uiBlocked = false;


var stat;
              for(stat in newItem.customParams){
                  if(newItem.customParams.hasOwnProperty(stat)) {
                      console.log(stat);
                      this.pet.customparams[stat] += newItem.customparams [stat];
              }
            }
      
          }, this);
    
         petMovement.start();
      }}}


  
        //initiate the phaser framework
        var game = new Phaser.Game(360,640, Phaser.AUTO);

        game.state.add('GameState', GameState);
        game.state.start('GameState');
        

