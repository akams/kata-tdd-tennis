const Game = require('./game'); 
const User = require('./user'); 

describe('Game', () => {
  let g1;
  let p1;
  let p2;
  beforeEach(() => {
    p1 = new User();
    p2 = new User();
    g1 = new Game();
  });
  afterEach(() => {
    g1 = undefined;
    p1 = undefined;
    p2 = undefined;
  });
  it('should start Game', () => {
    expect(g1).toBe(typeof g1);
  });
});