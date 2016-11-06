/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

"use strict";

const Player  = require('./src/Player.js');
let _player = Player();

function Game(playerBusted) {

  Object.defineProperty (this, 'playerBusted', {
    get: function() {
      return _player.score > 21;
    }
  });
}

Player.prototype.toString = function() {
  if (this.value === 14 && this.color === '♠') {
    return ' ♠A';
  } else {
    return ' ' + this.color + '' + this.number;
  }
};
