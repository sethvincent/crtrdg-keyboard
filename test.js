// require crtrdg-gameloop
var Game = require('crtrdg-gameloop');

// require crtrdg-keyboard
var Keyboard = require('./index');

// create a new game
var game = new Game({
  canvasId: 'game',
  width: '800',
  height: '400',
  backgroundColor: '#ff1f1f'
});

// create a new keyboard, passing the game as an argument
var keyboard = new Keyboard(game);

// for simplicity and brevity:
var keys = keyboard.keys;

// you can listen for keydown & keyup events
keyboard.on('keydown', function(key){
  if (key === keys.up_arrow){
    console.log('Yep! That is the up arrow!');
  }
});

keyboard.on('keyup', function(key){
  if (key === keys.up_arrow){
    console.log('Oh, you stopped pressing the up arrow.');
  }
});

// alternately, you can check the keyboard.keysDown object inside of an update listener. 
// this is particularly useful if you have a player entitity and you want it's behavior
// to change based on keyboard input
game.on('update', function(interval){
  if (keys.down_arrow in keyboard.keysDown){
    console.log('the down arrow is being pressed down!');
  }
});