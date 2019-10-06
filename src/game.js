import Dictionary from './dictionary';
import Util from './util';
import Flood from './flood';
import Player from './player';

class Game {
  constructor(ctx, canvas, input) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.input = input;
    this.dictionary = new Dictionary();
    this.player = new Player();
    // this.round = 1;
    this.spawnGap = 2750;
    this.killCount = 0;
    this.flood = [];
    
    this.input.disabled = false;

    this.draw(this.ctx);
    // this.incrementRound();
    this.interval = setInterval(() => this.spawnFlood(), 3000);

    this.handleInput = this.handleInput.bind(this);
    this.handleDamage = this.handleDamage.bind(this);
    this.drawMenuBackground = this.drawMenuBackground.bind(this);
    // this.gameOver = this.gameOver.bind(this);
  }

  drawMenuBackground() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
    this.ctx.closePath();
  }

  resetGame() {
    this.flood = [];
    this.player.lives = 5;
    this.player.score = 0;
    this.input.value = "";
    this.spawnGap = 2750;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.spawnFlood(), 3000);
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

    if (e.keyCode === 9) {
      this.resetGame();
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

  gameOver() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawMenuBackground();
    this.input.value = "";
    this.input.disabled = true;
  }

  draw(ctx) {
    if (this.player.lives > 0) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    
    if (this.player.lives <= 0) {
      this.gameOver();
    }
  }

  moveFlood() {
    this.flood.forEach(object => {
      object.animateFlood();
      object.detonateFlood();
    });
  }

  incrementRound() {
    if (this.killCount % 5 === 0 && this.spawnGap > 750) {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.spawnFlood(), this.spawnGap);
      this.spawnGap -= 250;
    }
  }

  step() {
    this.moveFlood();
    this.handleDamage();
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 515;

export default Game;