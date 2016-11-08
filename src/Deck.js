/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

// Skapa kort

function Card(value, number, color) {
  this.value = value;
  this.number = number;
  this.color = color;
  this.card = color + number;

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

module.exports = Deck;
