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
    for (let i = 0; i < 15; i++) {
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
      this.flood.forEach(floodObj => {
        if (floodObj.y > 250 && floodObj.y < 270) {
          floodObj.x -= 15;
          floodObj.y += Util.randomDY();
        }
        
        if (value === floodObj.word) {
          // this.flood.splice(idx, 1);
          this.player.score += (floodObj.word.length * 10);
          floodObj.word = "";
          floodObj.alive = false;
          floodObj.dx = 0;
          floodObj.dy = 0;
          debugger
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

    this.flood.forEach(object => {
      object.draw(ctx);
      object.drawWord(ctx);
    });

    this.player.drawInput(ctx);
    this.player.drawScore(ctx);
    this.player.drawLives(ctx);
    this.player.attack = false;
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