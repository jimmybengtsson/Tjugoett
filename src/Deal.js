/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

const Deck = require('./Deck.js');

// Använder mig av Fisher-Yates metod för att  blanda korten.

Array.prototype.shuffle = function() {

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

let newDeck = new Deck();
let finaleDeck = newDeck.fullDeck.shuffle();

// Dela kort. Ta det första kortet i arrayen (kortleken).

function Deal() {
  if (finaleDeck.length > 1) {
    return finaleDeck.shift();
  }
}

module.exports = Deal;
