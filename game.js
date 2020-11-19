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
    this.showScore();
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
    this.showScore();
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

  static startDeuceRule(playerOne, playerTwo) {
    let flag = false;
    if (playerOne.score === 40 && playerTwo.score === 40) {
      playerOne.setDeuceRule(true);
      playerTwo.setDeuceRule(true);
      flag = true;
    }
    return flag;
  }
}

module.exports = Game; 