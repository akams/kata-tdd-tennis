const Game = require('./game');

function main() {
  console.info('----Tennis Game Begin----');
  g1 = new Game('Player 1', 'Player 2');
  g1.start();
}
main();