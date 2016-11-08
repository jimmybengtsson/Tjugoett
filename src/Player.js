/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.1
 *
 */

'use strict';

const Deal = require('./Deal.js');

// Skapa en spelare.

function Player(cards = []) {

  // Skapa en hand. I settern har jag med att det ska dras ett kort så länge summan är under 16.

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

  // Sammanlagda poängen för korten på handen.

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

  // Visar aktuell spelhand så som jag vill skriva ut den.

  Object.defineProperty(this, 'hand', {
    get: function() {
      let result = [];
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].card) {
          result.push(cards[i].card);
        }
      }
      return result.join('  ');
    }
  });
}


module.exports = Player;
