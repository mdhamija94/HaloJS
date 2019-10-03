import Dictionary from './dictionary';
import Util from './util';
import Flood from './flood';
import Player from './player';

class Game {
  constructor(ctx, input) {
    this.flood = [];
    // this.player = [];
    this.ctx = ctx;
    this.input = input;
    this.dictionary = new Dictionary();

    this.spawnFlood();
    this.spawnPlayer();
    this.draw(this.ctx);

    this.handleInput = this.handleInput.bind(this);
  }
  
  spawnFlood() {
    for (let i = 0; i < 10; i++) {
      let floodObj = new Flood({
        x: -100,
        y: Util.randomY(),
        word: this.dictionary.randomWord()
      });
      this.flood.push(floodObj);
    }
  }

  spawnPlayer() {
    this.player = new Player();
  }

  handleInput(e) {
    if (e.keyCode === 13) {
      debugger
      this.player.attack = !this.player.attack;
      debugger
      let value = this.input.value;
      this.flood.forEach(floodObj => {
        if (value === floodObj.word) {
          floodObj.word = "";
          floodObj.dx = 0;
          floodObj.dy = 0;
        }
      });
      this.input.value = "";
    }
    // this.player.attack = false;
  }
  

  // allObjects() {
  //   return this.player.concat(this.flood);
  // }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    
    this.player.draw(ctx);

    this.flood.forEach(object => {
      object.draw(ctx);
      // if (object instanceof Flood) {
        object.drawWord(ctx);
      // }
    });

  }

  moveFlood() {
    this.flood.forEach(object => {
      object.animateFlood();
    });
  }

  step() {
    this.moveFlood();
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 515;

export default Game;