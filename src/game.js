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
    // this.round = 1;
    this.spawnGap = 2750;
    this.killCount = 0;
    this.flood = [];
    
    this.draw(this.ctx);
    // this.incrementRound();
    this.interval = setInterval(() => this.spawnFlood(), 3000);

    this.handleInput = this.handleInput.bind(this);
    this.handleDamage = this.handleDamage.bind(this);
  }

  floodFactory() {
    let floodObj = new Flood({
      x: -100,
      y: Util.randomY(),
      word: this.dictionary.randomWord()
    });
    
    this.flood.push(floodObj);
  }
  
  spawnFlood() {
    const num = (this.killCount % 2 === 0) ? 1 : 2;
    
    for (let i = 0; i < num; i++) {
      this.floodFactory();
    }
  }

  handleInput(e) {    
    if (e.keyCode === 13) {
      this.player.attack = !this.player.attack;

      let value = this.input.value;

      this.flood.forEach(floodObj => {
        if (floodObj.y > 250 && floodObj.y < 270 && floodObj.alive) {
          floodObj.x -= 15;
          floodObj.y += Util.randomDY();
        }
        
        if (value === floodObj.word && value !== "") {
          // this.player.score += (floodObj.word.length * 10);
          this.player.score += 1;
          floodObj.alive = false;
          this.killCount += 1;
          this.incrementRound();
        }
      });
      
      this.input.value = "";
    }
  }

  handleDamage() {
    let reachedPlayer = [];

    this.flood.forEach(floodObj => {
      if (floodObj.x > 745 && floodObj.y > 250 && floodObj.y < 270) {
        floodObj.alive = false;
        if (!reachedPlayer.includes(floodObj)) {
          reachedPlayer.push(floodObj);
        }
      }
    });

    this.player.lives = (5 - (reachedPlayer.length));
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.player.draw(ctx);
    this.player.drawScore(ctx);
    this.player.drawLives(ctx);

    this.flood.forEach(object => {
      object.draw(ctx);
      object.drawDead(ctx);
      object.drawWord(ctx);
    });

    this.player.drawInput(ctx);
    this.player.attack = false;
  }

  moveFlood() {
    this.flood.forEach(object => {
      object.animateFlood();
      object.detonateFlood();
    });
  }

  incrementRound() {
    if (this.killCount % 5 === 0 && this.spawnGap > 1250) {
      debugger
      // this.round += 1;
      clearInterval(this.interval);
      this.interval = setInterval(() => this.spawnFlood(), this.spawnGap);
      this.spawnGap -= 250;
    }
  }

  // checkPlayer() {
  //   this.player.animatePlayer();
  // }

  step() {
    this.moveFlood();
    // this.checkPlayer();
    this.handleDamage();
    // this.incrementRound();
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 515;

export default Game;