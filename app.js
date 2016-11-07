/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

const Player  = require('./src/Player.js');

function Game() {

  let _player = new Player();
  let _dealer = new Player();

  Object.defineProperty(this, 'player', {
    get: function() {
      return _player.hand;
    }
  });

  Object.defineProperty(this, 'dealer', {
    get: function() {
      return _dealer.hand;
    }
  });

  Object.defineProperty(this, 'playerScore', {
    get: function() {
      return _player.score;
    }
  });

  Object.defineProperty(this, 'dealerScore', {
    get: function() {
      return _dealer.score;
    }
  });

  Object.defineProperty(this, 'playerBusted', {
    get: function() {
      return _player.score > 21;
    }
  });

  Object.defineProperty(this, 'dealerBusted', {
    get: function() {
      return _dealer.score > 21;
    }
  });
}

Game.prototype.toString = function() {

  if (this.playerBusted === true) {
    return 'Player: ' + this.player + ' (' + this.playerScore + ') ' + 'Busted!' + '\n' +
        'Dealer: ---' + '\n' + 'Dealer wins!';
  }
  else if (this.playerBusted === false && this.dealerBusted === true) {
    return 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + 'Busted!' + '\n' + 'Player wins!';
  }
  else if (this.playerScore === 21 || this.playerScore > this.dealerScore || this.player.length === 5 && this.playerScore < 21) {
    return 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + '\n' + 'Player wins!';
  }
  else {
    return 'Player: ' + this.player + ' (' + this.playerScore + ')' + '\n' +
      'Dealer: ' + this.dealer + ' ' + ' (' + this.dealerScore + ') ' + '\n' + 'Dealer wins!';
  }
};

let letsPlay = new Game();
console.log(letsPlay.toString());
