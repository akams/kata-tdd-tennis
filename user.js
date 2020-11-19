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
    } else if (this.#score === 40 && this.#deuceRule === true) {
      this.#score = 'ADV';
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

  takeAdvantage() {
    let flag = false;
    if (this.#score === 40 && otherPlayer.score === 40) {
      this.#deuceRule = true;
      otherPlayer.setDeuceRule(false);
      flag = true;
    }
    return flag;
  }
}

module.exports = User; 