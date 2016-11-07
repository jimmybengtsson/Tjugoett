/**
 *
 * Card Game 21
 *
 * @author jimmybengtsson
 * @version 1.0.0
 *
 */

'use strict';

let Player  = require('./src/Player.js');

let player = new Player();
let dealer = new Player();

console.log(player.cards);
console.log(player.score);
console.log(dealer.cards);
console.log(dealer.score);



