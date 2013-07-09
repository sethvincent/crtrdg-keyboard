var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = Keyboard;
inherits(Keyboard, EventEmitter);

function Keyboard(game){
  this.game = game || {};
  this.keysDown = {};
  this.initializeListeners();
}

Keyboard.prototype.initializeListeners = function(){
  var self = this;

  document.addEventListener('keydown', function(e){
    self.emit('keydown', e.keyCode);
    self.keysDown[e.keyCode] = true;

    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 32) {
      e.preventDefault();
    }
  }, false);

  document.addEventListener('keyup', function(e){
    self.emit('keyup', e.keyCode);
    delete self.keysDown[e.keyCode];
  }, false);
};

Keyboard.prototype.keys = {
  'a': 65,
  'b': 66,
  'c': 67,
  'd': 68,
  'e': 69,
  'f': 70,
  'g': 71,
  'h': 72,
  'i': 73,
  'j': 74,
  'k': 75,
  'l': 76,
  'm': 77,
  'n': 78,
  'o': 79,
  'p': 80,
  'q': 81,
  'r': 82,
  's': 83,
  't': 84,
  'u': 85,
  'v': 86,
  'w': 87,
  'x': 88,
  'y': 89,
  'z': 90,
  'esc': 27,
  'tab': 9,
  'shift': 16,
  'control': 17,
  'option': 18,
  'command': 91,
  'space': 32,
  'enter': 13,
  'up_arrow': 38,
  'down_arrow': 40,
  'left_arrow': 37,
  'right_arrow': 39
}