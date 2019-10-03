import Util from './util';

class Flood {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.word = options.word;
    this.alive = true;
    this.dx = 8;
    this.dy = Util.randomDY();
    this.shiftSX = 648;
    this.shiftSW = 60;
    this.shiftDW = 110;

    this.floodImg = new Image();
    this.floodImg.src = "../public/images/Flood.png";
  }

  draw(ctx) {
    // Frame 1
    if (this.alive) {
      ctx.drawImage(this.floodImg,
        this.shiftSX, 826,
        60, 46,
        this.x, this.y,
        104, 85
      );
    }

    // Frame 2
    // ctx.drawImage(this.floodImg,
    //   710, 826,
    //   74, 46,
    //   this.x, this.y,
    //   125, 90
    // )

    // Frame 3
    // ctx.drawImage(this.floodImg,
    //   785, 826,
    //   74, 46,
    //   this.x, this.y,
    //   140, 90
    // )
  }

  drawWord(ctx) {
    ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillText(this.word, this.x + 7.5, this.y - 10);
      ctx.font = '20px "Audiowide"';
      ctx.fill();
  }

  drawDead(ctx) {

  }

  bindPath() {
    if (this.x <= 500) {
      if (this.y < 165 || this.y > 450) {
        this.dy *= -1;
      }
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

  animateFlood() {
    this.bindPath();
    this.swarm();
    this.x += this.dx;
    this.y += this.dy;

    if (this.shiftSX === 648) {
      this.shiftSX = 710;
    } else if (this.shiftSX === 710) {
      this.shiftSX = 648;
    }
  }

  detonateFlood() {

  }
}

export default Flood;