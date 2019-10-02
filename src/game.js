import Dictionary from './dictionary';
import Util from './util';
import Flood from './flood';
import Player from './player';

class Game {
  constructor(ctx) {
    this.flood = [];
    this.player = [];
    this.ctx = ctx;
    this.dictionary = new Dictionary()

    this.spawnFlood();
    this.spawnPlayer();
    this.draw(this.ctx);
  }
  
  spawnFlood() {
    for (let i = 0; i < 1; i++) {
      let floodObj = new Flood({
        x: -100,
        y: Util.randomY(),
        word: this.dictionary.randomWord()
      });
      this.flood.push(floodObj);
    }
  }

  spawnPlayer() {
    let playerObj = new Player();
    this.player.push(playerObj);
  }

  allObjects() {
    return this.player.concat(this.flood);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx);
      if (object instanceof Flood) {
        object.drawWord(ctx);
      }
    });
  }

  moveFlood() {
    this.flood.forEach(object => {
      object.move();
    });
  }

  step() {
    this.moveFlood();
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 515;

export default Game;