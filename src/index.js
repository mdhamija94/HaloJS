import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("viewport");
  const input = document.getElementById("typebox");

  const ctx = canvas.getContext("2d");

  const game = new Game(ctx, input);
  
  new GameView(game, ctx).start();

  // const playerImg = new Image();
  // playerImg.src = "../public/images/MasterChief.png";

  // this.ctx.drawImage()
});