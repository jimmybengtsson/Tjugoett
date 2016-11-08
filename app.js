/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.1
 *
 */

'use strict';

const Player  = require('./src/Player.js');

// Skapa ett nytt spel.

function Game() {

  let _player = new Player();
  let _dealer = new Player();

  // Spelarens hand.

  Object.defineProperty(this, 'player', {
    get: function() {
      return _player.hand;
    }
  });

  // Givens hand.

  Object.defineProperty(this, 'dealer', {
    get: function() {
      return _dealer.hand;
    }
  });

  // Spelarens poäng.

  Object.defineProperty(this, 'playerScore', {
    get: function() {
      return _player.score;
    }
  });

  // Givens poäng.

  Object.defineProperty(this, 'dealerScore', {
    get: function() {
      return _dealer.score;
    }
  });

  // Spelaren har över 21.

  Object.defineProperty(this, 'playerBusted', {
    get: function() {
      return _player.score > 21;
    }
  });

  // Given har över 21.

  Object.defineProperty(this, 'dealerBusted', {
    get: function() {
      return _dealer.score > 21;
    }
  });
}

// Få ihop allt till en sträng som visas.

Game.prototype.toString = function() {

  if (this.playerBusted === true) {
    return '\n' + 'Player: ' + this.player + ' (' + this.playerScore + ') ' + 'Busted!' + '\n' + '\n' +
        'Dealer: ---' + '\n' + '\n' + 'Dealer wins!';
  }
  else if (this.playerScore === 21) {
    return '\n' + 'Player: ' + this.player + ' (' + this.playerScore + ') ' + '\n' + '\n' +
      'Dealer: ---' + '\n' + '\n' + 'Player wins!';
  }
  else if (this.playerBusted === false && this.dealerBusted === true) {
    return '\n' + 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + 'Busted!' + '\n' + '\n' + 'Player wins!';
  }
  else if (this.playerScore > this.dealerScore || this.player.length === 5 && this.playerScore < 21) {
    return '\n' + 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + '\n' + '\n' + 'Player wins!';
  }
  else {
    return '\n' + 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + '\n' + '\n' + 'Dealer wins!';
  }
};

let letsPlay = new Game();
console.log(letsPlay.toString());
