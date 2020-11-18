const User = require('./user'); 

describe('User', () => {
  it('should initialize user', () => {
    const p1 = new User('Player one', 0);
    expect(p1.score).toBe(0);
  });
  it('should add point to user and must be equal to 15', () => {
    const p1 = new User('Player one', 0);
    expect(p1.addPoint()).toBe(15);
  });
})
