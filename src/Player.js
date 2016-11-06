/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

const newCard = require('./Deck.js');

function Player() {

  let test = newCard;
  let test1 = newCard;
  let hand = [];
  hand.count = 0;
  hand.push(newCard);



}
console.log(test);

Player.prototype.toString = function() {
  if (this.value === 14 && this.color === '♠') {
    return ' ♠A';
  } else {
    return ' ' + this.color + '' + this.number;
  }
};

