import Game from './game';
import GameView from './game_view';
import StartScreen from './start_screen'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("viewport");
  const input = document.getElementById("typebox");

  const ctx = canvas.getContext("2d");

  // const startScreen = new StartScreen(ctx);
  // startScreen.drawTitle(250);

  const game = new Game(ctx, canvas, input);
  game.drawMenuBackground();
  
  new GameView(game, ctx).start();
});