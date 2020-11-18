const Game = require('./game'); 

describe('Game', () => {
  let g1;
  beforeEach(() => {
    g1 = new Game('Player 1', 'Player 2');
  });
  afterEach(() => {
    g1 = undefined;
    p1 = undefined;
    p2 = undefined;
  });
  it('should start Game', () => {
    expect(typeof g1).toBe('object');
  });
});