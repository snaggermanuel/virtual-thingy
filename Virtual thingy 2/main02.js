// rotatePet: function(sprite,event) {
// if(!this.uiBlocked) {

//     //we want the user interface (UI) to be blocked until the rotation ends 
//     this.uiBlocked = true;

//     this.clearSelection();

//     //alpha to indicate selection 
//     sprite.alpha = 0.4;

//     var petRotation = this.game.add.tween(this.pet);

//     petRotation.to({angle: '+720'}, 1000);

//     petRotation.onComplete.add(function(){
//         this.uiBlocked = false;

//         sprite.alpha = 1;

//         this.pet.customParams.fun += 10;
//         console.log(this.pet.customParams.fun);
//     }, this);

//     petRotation.start();
//   }


// },
// clearSelection: function() {

//     //remove transparency from all buttons 
//     this.buttons.forEach (function(element, index){
//         element.alpha = 1;
//     });
   

//     //we are not selecting anything now 
//     this.selectedItem = null;
//     }



// };

   





// };

// //initiate the Phaser framework
// var game = new Phaser.Game(360, 640, Phaser.AUTO);

// game.state.add('GameState', GameState):
// game.state.start('GameState');