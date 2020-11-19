class User {
  #name = 0;
  #score;
  #winnerCount = 0;
  #isWinner = false;
  #deuceRule = false;
  #advantage = false;
  constructor(name, score) {
    this.#name = name;
    this.#score = score;
  }
  get name() {
    return this.#name;
  }
  get score() {
    return this.#score;
  }
  get winnerCount() {
    return this.#winnerCount;
  }
  get isWinner() {
    return this.#isWinner;
  }
  get deuceRule() {
    return this.#deuceRule;
  }

  setName(name) {
    this.#name = name;
  }
  setScore(score) {
    this.#score = score;
  }
  setDeuceRule(value) {
    this.#deuceRule = value;
  }
  setAdvantageRule(value) {
    this.#advantage = value;
  }

  addPoint() {
    if (this.#score === 30) {
      this.#score += 10;
    } else if (this.#score === 40 && this.#deuceRule === false) {
      this.#score = 0;
      this.#winnerCount += 1;
      this.#isWinner = true;
    } else if ((this.#score === 40 || this.#score === 'DEUCE') && this.#deuceRule === true) {
      this.#score = 'ADV';
    } else if (this.#score === 'ADV' && this.#deuceRule === true) {
      this.#score = 0;
      this.#winnerCount += 1;
      this.#isWinner = true;
    } else {
      this.#score += 15;
    }
  }
}

module.exports = User; 