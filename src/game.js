import Dictionary from './dictionary';
import Util from './util';
import Flood from './flood';
import Player from './player';

class Game {
  constructor(body, ctx, canvas, input) {
    this.body = body;
    this.ctx = ctx;
    this.canvas = canvas;
    this.input = input;
    this.dictionary = new Dictionary();
    this.player = new Player(ctx);
    this.flood = [];
    this.gameOver = false;
    this.killCount = 0;
    this.spawnGap = 2750;
    this.interval = setInterval(() => this.spawnFlood(), 3000);

    this.handleInput = this.handleInput.bind(this);
    this.handleDamage = this.handleDamage.bind(this);
    this.drawMenuBackground = this.drawMenuBackground.bind(this);
    this.startGame = this.startGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.gameOverScreen = this.gameOverScreen.bind(this);
  }

  startGame(e) {
    if (e.keyCode === 32) {
      this.body.removeEventListener('keydown', this.startGame);
      this.resetGame();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  resetGame() {
    this.gameOver = false;
    this.flood = [];
    this.killCount = 0;
    this.spawnGap = 2750;
    this.input.disabled = false;
    this.input.value = "";
    this.input.focus();
    this.player.lives = 5;
    this.player.score = 0;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.spawnFlood(), 3000);
  }

  spawnFlood() {
    const num = (this.killCount % 2 === 0) ? 1 : 2;

    for (let i = 0; i < num; i++) {
      this.floodFactory();
    }
  }

  floodFactory() {
    let floodObj = new Flood({
      x: -100,
      y: Util.randomY(),
      word: this.dictionary.randomWord()
    });

    this.flood.push(floodObj);
  }

  handleInput(e) {
    if (e.keyCode === 13) {
      this.player.attack = !this.player.attack;

      let value = this.input.value.toLowerCase().trim();

      this.flood.forEach(floodObj => {
        if (floodObj.y > 250 && floodObj.y < 270 && floodObj.alive) {
          floodObj.x -= 15;
          floodObj.y += Util.randomDY();
        }

        if (value === floodObj.word && value !== "") {
          this.killCount += 1;
          this.player.score += (floodObj.word.length * 10);
          floodObj.alive = false;
          this.increaseSpeed();
        }
      });

      this.input.value = "";
    }
  }

  increaseSpeed() {
    if (this.killCount % 5 === 0 && this.spawnGap > 750) {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.spawnFlood(), this.spawnGap);
      this.spawnGap -= 250;
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

    if (this.player.lives <= 0) {
      this.gameOver = true;
    }
  }

  draw(ctx) {
    if (this.gameOver) this.gameOverScreen();

    if (!this.gameOver) {
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
  }

  animateEnemies() {
    this.flood.forEach(object => {
      object.animateFlood();
      object.detonateFlood();
    });
  }

  step() {
    this.animateEnemies();
    this.handleDamage();
  }

  drawMenuBackground() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  gameOverScreen() {
    this.drawMenuBackground();
    this.input.value = "";
    this.input.disabled = true;

    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.font = '60px Audiowide';
    this.ctx.fillText("Game Over", (this.canvas.width / 2), 175);

    this.ctx.fillStyle = "rgba(141, 248, 253)";
    this.ctx.font = '36px Audiowide';
    this.ctx.fillText(this.killCount, 390, 260);
    this.ctx.fillText("Kills", 390, 310);
    this.ctx.fillText(this.player.score, 652.5, 260);
    this.ctx.fillText("Points", 652.5, 310);

    this.ctx.fillStyle = "white";
    this.ctx.fillText("Press Spacebar to Restart", (this.canvas.width / 2), 400);
    
    this.body.addEventListener('keydown', this.startGame);
  }
}

export default Game;