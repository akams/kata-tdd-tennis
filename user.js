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
}

module.exports = User; 