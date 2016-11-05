/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

"use strict";

// Använder mig av Fisher-Yates metod för att göra en metod som kan blanda korten.

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

// Skapa en hel kortlek med värden.

function Card(value, number, color) {
  this.value = value;
  this.number = number;
  this.color = color;

}

Card.prototype.toString = function () {
  if (this.value === 14 && this.color === '♠') {
    return '♠A'
  } else {
    return this.color+''+this.number;
  }
};

function Deck() {

  this.fullDeck = [];
}

Deck.prototype.makeFullDeck = function() {
  for (let i = 0; i < Deck.color.length; i++) {
    for (let j = 0; j < Deck.number.length; j++) {
      this.fullDeck.push(new Card(Deck.value[j], Deck.number[j], Deck.color[i]));
    }
  }
};

Deck.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
Deck.number = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
Deck.color = ['♠', '♣', '♥', '♦'];

// Dela kort. Tar det första kortet i arrayen (kortleken) till det är ett kort kvar.

function Deal() {
  if (this.fullDeck.length < 1) {
    return this.fullDeck.shift();
  }
}

let newDeck = new Deck();
newDeck.makeFullDeck();
let makeDeal = newDeck.fullDeck.shuffle();

console.log(makeDeal.toString());
