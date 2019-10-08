import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body");
  const canvas = document.getElementById("viewport");
  const input = document.getElementById("typebox");
  const ctx = canvas.getContext("2d");
  const startScreen = document.getElementById("start-screen-container");
  
  const game = new Game(body, ctx, canvas, input);
  
  body.addEventListener('keydown', startGame);
  
  function startGame(e) {
    if (e.keyCode === 32) {
      startScreen.style.display = "none";
      body.removeEventListener('keydown', startGame);
      input.addEventListener('keydown', game.handleInput);
      new GameView(game, ctx).start();
      game.resetGame();
    }
  }
});