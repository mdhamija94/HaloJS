import Game from './game';
import GameView from './game_view';
import StartScreen from './start_screen';

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body");
  const canvas = document.getElementById("viewport");
  const input = document.getElementById("typebox");
  const ctx = canvas.getContext("2d");
  ctx.font = '24px Audiowide'
  
  const game = new Game(body, ctx, canvas, input);
  game.startScreen();
  
  // const startScreen = new StartScreen(ctx, canvas);
  
  // game.drawMenuBackground();
  // startScreen.drawTitle();
  // startScreen.drawInstructions();

  // startScreen.ctx.beginPath();
  // startScreen.ctx.textAlign = "center";
  // startScreen.ctx.fillStyle = "rgba(141, 248, 253)";
  // startScreen.ctx.font = '72px Audiowide';
  // startScreen.ctx.fillText("Fight the Flood", (startScreen.canvas.width / 2), 175);
  // startScreen.ctx.closePath();
  
  body.addEventListener('keydown', startGame);
  
  function startGame(e) {
    if (e.keyCode === 13) {
      body.removeEventListener('keydown', startGame);
      input.addEventListener('keydown', game.handleInput);
      new GameView(game, ctx).start();
      game.resetGame();
      game.draw(this.ctx);
    }
  }
});