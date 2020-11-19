class User {
  #name = 0;
  #score;
  #winnerCount = 0;
  #isWinner = false;
  #deuceRule = false;
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

  setName(name) {
    this.#name = name;
  }
  setScore(score) {
    this.#score = score;
  }
  setDeuceRule(value) {
    this.#deuceRule = value;
  }

  addPoint() {
    if (this.#score === 30) {
      this.#score += 10;
    } else if (this.#score === 40) {
      this.#score = 0;
      this.#winnerCount += 1;
      this.#isWinner = true;
    } else {
      this.#score += 15;
    }
  }

  isDeuceRuleActivated(otherPlayer) {
    let flag = false;
    if (this.#score === 40 && otherPlayer.score === 40) {
      this.#deuceRule = true;
      otherPlayer.setDeuceRule(true);
      flag = true;
    }
    return flag;
  }
}

module.exports = User; 