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
const Dealer  = require('./src/Player.js');

function Game21() {

  let playerBusted = function() {
    return score > 21;
  };
}
console.log(Player());
console.log(Dealer());

Player.prototype.toString = function() {
  if (this.value === 14 && this.color === '♠') {
    return ' ♠A';
  } else {
    return ' ' + this.color + '' + this.number;
  }
};
