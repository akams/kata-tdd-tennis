class User {
  #name = 0;
  #score;
  #winnerCount = 0;
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

  setName(name) {
    this.#name = name;
  }
  setScore(score) {
    this.#score = score;
  }

  addPoint() {
    if (this.#score === 30) {
      this.#score += 10;
    } else if (this.#score === 40) {
      this.#score = 0;
      this.#winnerCount += 1;
    } else {
      this.#score += 15;
    }
  }
}

module.exports = User; 