import Game from './game';
import GameView from './game_view';
import Flood from './flood';

window.Flood = Flood;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("viewport");

  const ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  new GameView(game, ctx).start();

  // const playerImg = new Image();
  // playerImg.src = "../public/images/MasterChief.png";

  // this.ctx.drawImage()
});