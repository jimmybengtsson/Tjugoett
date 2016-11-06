/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

const Deal = require('./Deck.js');

let Dealer = function() {

  let cards = [];

  cards.push(new Deal(), new Deal());

  let score = function() {
    let score = 0;
    let cardValue = 0;
    let aces = 0;

    for (let i = 0; i < cards.length; i++) {
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
  };

  while (score() < 16 && cards.length < 5) {
    cards.push(new Deal());
  }
  return cards;
};

module.exports = Dealer;

