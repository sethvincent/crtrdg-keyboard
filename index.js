var EventEmitter = require('eventemitter2').EventEmitter2
var inherits = require('inherits')
var vkey = require('vkey')

module.exports = Keyboard
inherits(Keyboard, EventEmitter)

/**
* Create the keyboard object.
* @name createKeyboard
* @example
* var createKeyboard = require('crtrdg-keyboard')
* var keyboard = createKeyboard()
*/

function Keyboard () {
  if (!(this instanceof Keyboard)) return new Keyboard()
  this.keysDown = {}
  this.initializeListeners()
}

Keyboard.prototype.initializeListeners = function () {
  var self = this

  document.addEventListener('keydown', function (e) {
    /**
    * keydown event
    * @event keyboard#keydown
    * @param {String} keyCode
    * @example
    * keyboard.on('keydown', function (key) {
    *   console.log(key)
    * })
    */
    self.emit('keydown', vkey[e.keyCode])
    self.keysDown[vkey[e.keyCode]] = true

    if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 32) {
      e.preventDefault()
    }
  }, false)

  document.addEventListener('keyup', function (e) {
    /**
    * keyup event
    * @event keyboard#keyup
    * @param {String} keyCode
    * @example
    * keyboard.on('keyup', function (key) {
    *   console.log(key)
    * })
    */
    self.emit('keyup', vkey[e.keyCode])
    delete self.keysDown[vkey[e.keyCode]]
  }, false)
}
