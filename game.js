const User = require('./user'); 
const getRandomInt = require('./utils'); 
class Game {
  #p1;
  #p2;
  constructor(player1, player2) {
    const p1 = new User();
    const p2 = new User();
    p1.setName(player1);
    p1.setScore(0);
    p2.setName(player2);
    p2.setScore(0);
    this.#p1 = p1;
    this.#p2 = p2;
  }

  start() {
    console.log('Start the game');

    while(this.getWinner() === false) {
      const u1 = getRandomInt(10);
      const u2 = getRandomInt(10);
      if (u1 > u2) {
        this.handlePlayerOne();
      } else if (u1 < u2) {
        this.handlePlayerTwo();
      }
      Game.setDeuceScore(this.#p1, this.#p2);

      if(Game.isStartedDeuceRule(this.#p1, this.#p2)) {
        Game.startDeuceRule(this.#p1, this.#p2);
      }

      this.showScore();

      const s = this.displaySentenceWinner();
      if (s) {
        console.log(s);
      }
    } 
  }

  handlePlayerOne(){
    console.log(this.displaySentenceActionPlayerOne());
    this.actionPlayerOne();
  }

  displaySentenceActionPlayerOne() {
    return `${this.#p1.name} win 1 Pt`
  }

  actionPlayerOne(){
    this.#p1.addPoint();
  }

  handlePlayerTwo() {
    console.log(this.displaySentenceActionPlayerTwo());
    this.actionPlayerTwo();
  }

  displaySentenceActionPlayerTwo() {
    return `${this.#p2.name} win 1 Pt`
  }

  actionPlayerTwo(){
    this.#p2.addPoint();
  }

  showScore() {
    const nameP1 = this.#p1.name;
    const nameP2 = this.#p2.name;

    if (this.#p1.isWinner || this.#p2.isWinner) {
      this.reset();
    }

    console.log('--------------------------');
    console.log(nameP1, ' ', this.#p1.score);
    console.log(nameP2, ' ', this.#p2.score);
    console.log('--------------------------');
  }

  reset() {
    if (this.#p1.isWinner) {
      this.#p2.setScore(0);
    }
    if (this.#p2.isWinner) {
      this.#p1.setScore(0);
    }
  }

  getWinner() {
    let flag = false;
    if (this.#p1.isWinner) {
      flag = true;
    } else if (this.#p2.isWinner) {
      flag = true;
    }
    return flag;
  }

  displaySentenceWinner() {
    const nameP1 = this.#p1.name;
    const nameP2 = this.#p2.name;
    if (this.#p1.isWinner) {
      return `${nameP1}, Win the game`;
    } else if (this.#p2.isWinner) {
      return `${nameP2}, Win the game`;
    }
  }

  static isStartedDeuceRule(playerOne, playerTwo) {
    let flag = false;
    if (playerOne.score === 40 && playerTwo.score === 40) {
      flag = true;
    }
    return flag;
  }

  static startDeuceRule(playerOne, playerTwo) {
    if (playerOne.score === 40 && playerTwo.score === 40) {
      playerOne.setDeuceRule(true);
      playerTwo.setDeuceRule(true);
    }
  }

  static setDeuceScore(playerOne, playerTwo) {
    if (playerOne.score === 'ADV' && playerTwo.score === 'ADV') {
        playerOne.setScore('DEUCE');
        playerTwo.setScore('DEUCE');
    } else if ((playerOne.score === 'DEUCE' || playerOne.score === 40) && playerTwo.score === 'ADV') {
        playerOne.setScore(40);
        playerTwo.setScore('ADV');
    } else if (playerOne.score === 'ADV' && (playerTwo.score === 'DEUCE' || playerTwo.score === 40)) {
        playerOne.setScore('ADV');
        playerTwo.setScore(40);
    }
  }
}

module.exports = Game; 