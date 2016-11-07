/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

const Deal = require('./Deal.js');

function Player(cards = [], score) {

  Object.defineProperty(this, 'cards', {
    get: function() {
      return cards;
    },

    set: function(value) {
      value.push(new Deal(), new Deal());

      let score = function() {
        let i;
        let score = 0;
        let cardValue = 0;
        let aces = 0;

        for (i = 0; i < value.length; i++) {
          cardValue = value[i].value;
          if (cardValue === 14) {
            aces += 1;
          }
          score += cardValue;
        }

        while (score > 21 && aces > 0) {
          score -= 13;
          aces -= 1;
        }
        return score;
      };

      while (score() < 16 && value.length < 5) {
        value.push(new Deal());
      }

      cards = value;
    }
  });

  this.cards = cards;

  Object.defineProperty(this, 'score', {
    get: function() {
        let i;
        let score = 0;
        let cardValue = 0;
        let aces = 0;

        for (i = 0; i < cards.length; i++) {
          cardValue = cards[i].value;
          if (cardValue === 14) {
            aces += 1;
          }
          score += cardValue;
        }

        while (score > 21 && aces > 0) {
          score -= 13;
          aces -= 1;
        }
        return score;
    }
  });
}

Player.prototype.toString = function() {
 if (this.cards.value === 14 && this.cards.color === '♠') {
 return ' ♠A';
 } else {
 return ' ' + this.cards.color + '' + this.cards.number;
 }
 };

module.exports = Player;

