const User = require('./user'); 

describe('User', () => {
  let p1;
  beforeEach(() => {
    p1 = new User('Player one', 0);
  });
  afterEach(() => {
    p1 = undefined;
  });
  it('should initialize user', () => {
    expect(p1.score).toBe(0);
  });
  it('should add point to user and score must be equal to {15}', () => {
    p1.addPoint();
    expect(p1.score).toBe(15);
  });
  it('should add point to user and score must be equal to {30}', () => {
    p1.addPoint();
    p1.addPoint();
    expect(p1.score).toBe(30);
  });
  it('should add point to user and score must be equal to {40}', () => {
    p1.addPoint();
    p1.addPoint();
    p1.addPoint();
    expect(p1.score).toBe(40);
  });
  it('should add point to user 4 time, the score must be equal to {0}', () => {
    p1.addPoint();
    p1.addPoint();
    p1.addPoint();
    p1.addPoint();
    expect(p1.score).toBe(0);
  });
  it('should notice to user is winner count must be equal to {1}', () => {
    p1.addPoint();
    p1.addPoint();
    p1.addPoint();
    p1.addPoint();
    expect(p1.winnerCount).toBe(1);
  });
});