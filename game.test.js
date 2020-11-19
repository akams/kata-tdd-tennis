const Game = require('./game'); 

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game('Player 1', 'Player 2');
  });
  afterEach(() => {
    game = undefined;
  });
  it('should start Game', () => {
    expect(typeof game).toBe('object');
  });
  it('should display sentence add pts on game player', () => {
    expect(game.displaySentenceActionPlayerOne()).toBe('Player 1 win 1 Pt');
  });
  it('should display who the winner between player1 and player2', () => {
    game.handlePlayerTwo();
    game.handlePlayerTwo();
    game.handlePlayerTwo();
    game.handlePlayerTwo();
    const s = game.displaySentenceWinner();
    expect(s).toBe('Player 2, Win the game');
  });
});