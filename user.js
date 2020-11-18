class User {
  #name = 0;
  #score;
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

  addPoint() {
    if (this.#score === 30) {
      this.#score += 10;
    } else {
      this.#score += 15;
    }
  }
}

module.exports = User; 