/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

"use strict";

  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let color = ['♠', '♣', '♥', '♦'];

  let fullDeck = new Array(number.length * color.length);

Array.prototype.shuffle = function () {

  let theLength = this.length - 1;
  let toSwap;
  let temp;
  for (let i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * i);
    temp = this[i];
    this[i] = this[toSwap];
    this[toSwap] = temp;
  }
  return this;
};

let card = number.shuffle();



console.log(card);
