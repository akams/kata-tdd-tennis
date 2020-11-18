const User = require('./user'); 
class Game {
  #players = [];
  constructor(player1, player2) {
    const p1 = new User();
    const p2 = new User();
    p1.setName("Player 1");
    p1.setScore(0);
    p2.setName("Player 2");
    p2.setScore(0);
    this.#players = this.#players.concat([p1, p2]);
  }
}

module.exports = Game; 