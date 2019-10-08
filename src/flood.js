import Util from './util';

class Flood {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.word = options.word;
    this.alive = true;
    this.dx = 8;
    this.dy = Util.randomDY();
    this.shift = 648;
    this.shiftSW = 60;
    this.shiftDead = 865;

    this.floodImg = new Image();
    this.floodImg.src = "./public/images/flood.png";
    this.floodDetonateImg = new Image();
    this.floodDetonateImg.src = "./public/images/flood-detonate.png";

    this.detonateFlood = this.detonateFlood.bind(this);
  }

  drawWord(ctx) {
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(this.word, this.x + 30, this.y - 10);
  }

  draw(ctx) {
    if (this.alive) {
      ctx.drawImage(this.floodImg,
        this.shift, 826,
        60, 46,
        this.x, this.y,
        104, 85
      );
    }
  }

  drawDead(ctx) {
    if (!this.alive) {
      ctx.drawImage(this.floodDetonateImg,
        this.shiftDead, 40,
        35, 30,
        this.x + 5, this.y + 15,
        50, 50
      );
    }
  }

  animateFlood() {
    if (this.alive) {
      this.bindPath();
      this.swarm();
      this.x += this.dx;
      this.y += this.dy;

      if (this.shift === 648) {
        this.shift = 710;
        this.shiftSW = 74;
      } else if (this.shift === 710) {
        this.shift = 648;
        this.shiftSW = 60;
      }
    }
  }

  bindPath() {
    if (this.x <= 500) {
      if (this.y < 165 || this.y > 420) this.dy *= -1;
    }
  }

  swarm() {
    if (this.x >= 500) {
      if (this.y < 260) {
        this.dy = 7.5;
      } else if (this.y > 260) {
        this.dy = -7.5;
      } else {
        this.dy = -1;
      }
    }

    if (this.x >= 750) {
      this.dx = 0;
    } else if (this.x < 750 && this.alive) {
      this.dx = 8;
    }
  }

  detonateFlood() {
    if (!this.alive) {
      this.word = "";
      this.dx = 0;
      this.dy = 0;

      setTimeout(() => this.shiftDead += 40, 0);

      if (this.shiftDead >= 1100) this.shiftDead = 1150;
    }
  }
}

export default Flood;