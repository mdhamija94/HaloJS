import Dictionary from './dictionary';
import Util from './util';
import Flood from './flood';
import Player from './player';

class Game {
  constructor(ctx, input) {
    this.ctx = ctx;
    this.input = input;
    this.dictionary = new Dictionary();
    this.player = new Player();
    this.flood = [];
    
    this.draw(this.ctx);
    this.spawnFlood();

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

  handleInput(e) {    
    if (e.keyCode === 13) {
      this.player.attack = !this.player.attack;

      let value = this.input.value;
      this.flood.forEach((floodObj, idx) => {
        if (floodObj.y > 250 && floodObj.y < 270) {
          floodObj.x -= 15;
        }
        
        if (value === floodObj.word) {
          this.flood.splice(idx, 1);
          // floodObj.drawDead();
        }
      });
      this.input.value = "";
    }
  }
  

  // allObjects() {
  //   return this.player.concat(this.flood);
  // }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.player.draw(ctx);
    this.player.attack = false;

    this.flood.forEach(object => {
      object.drawWord(ctx);
      object.draw(ctx);
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