/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

function Card(value, number, color) {
  this.value = value;
  this.number = number;
  this.color = color;

}

// Skapa en hel kortlek med värden.

function Deck() {

  this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  this.number = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.color = ['♠', '♣', '♥', '♦'];
  this.fullDeck = [];
  for (let i = 0; i < this.color.length; i++) {
    for (let j = 0; j < this.number.length; j++) {
      this.fullDeck.push(new Card(this.value[j], this.number[j], this.color[i]));
    }
  }
}

// Använder mig av Fisher-Yates metod för att göra en metod som kan blanda korten.

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

function Deal() {
  if (finaleDeck.length > 1) {
    return finaleDeck.shift();
  }
}

module.exports = Deal;
