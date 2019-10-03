class Flood {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.word = options.word;
    this.dx = 8;
    this.dy = 0;
    this.shiftSX = 648;
    this.shiftSW = 60;
    this.shiftDW = 110;

    this.floodImg = new Image();
    this.floodImg.src = "../public/images/Flood.png";
  }

  // draw(ctx) {
  //   ctx.beginPath();
  //   ctx.fillStyle = this.color;
  //   ctx.arc(this.x, this.y, this.radius, 0, 2.0 * Math.PI);
  //   ctx.fill();
  // }

  draw(ctx) {
    // Frame 1
    ctx.drawImage(this.floodImg,
      this.shiftSX, 826,
      60, 46,
      this.x, this.y,
      110, 90
    )

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

  animateFlood() {
    this.converge();
    this.x += this.dx;
    this.y += this.dy;
    if (this.shiftSX === 648) {
      this.shiftSX = 710;
    } else if (this.shiftSX === 710) {
      this.shiftSX = 648;
    } 
    // else if (this.shiftSX === 783) {
    //   this.shiftSX = 648;
    // }

    // if (this.shiftSW === 60) {
    //   this.shiftSW = 74;
    // } else if (this.shiftSW === 74) {
    //   this.shiftSW = 60;
    // }

    // if (this.shiftDW < 140) {
    //   this.shiftDW += 15;
    // } else {
    //   this.shiftDW = 110;
    // }

    // this.shift
  }

  converge() {
    if (this.x >= 500) {
      if (this.y < 260) {
        this.dy = 7.5;
      } else if (this.y > 260) {
        this.dy = -7.5;
      } else {
        this.dy = 0;
      }
    }

    if (this.x >= 750) {
      this.dx = 0;
    }
  }
}

export default Flood;