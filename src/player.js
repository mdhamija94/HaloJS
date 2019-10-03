class Player {
  constructor() {
    this.lives = 5;
    this.lifeShift = 956.5;
    this.score = 0;
    this.attack = false;

    this.playerImg = new Image();
    this.playerImg.src = "../public/images/MasterChief.png";

    this.lifeIcon = new Image();
    this.lifeIcon.src = "../public/images/player-lives.png";
  }

  // draw(ctx) {
  //   ctx.fillStyle = this.color;
  //   ctx.arc(this.x, this.y, this.radius, 0, 2.0 * Math.PI);
  //   ctx.fill();
  // }

  draw(ctx) {
    if (this.attack) {
      ctx.drawImage(this.playerImg,
        512.5, 0,
        51.25, 73.25,
        800, 240,
        84, 120
      );
    } else {
      ctx.drawImage(this.playerImg, 
        564.75, 0,
        51.25, 73.25,
        800, 240,
        84, 120
      );
    }
  }

  drawInput(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(141, 248, 253)";
    ctx.rect(390, 440, 270, 50);
    ctx.fillStyle = "rgba(141, 248, 253, 0.3)";
    ctx.fillRect(390, 440, 270, 50);
    ctx.stroke();
  }

  drawLives(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(141, 248, 253)";
    ctx.rect(562.5, 25, 467.5, 90);
    ctx.fillStyle = "rgba(141, 248, 253, 0.3)";
    ctx.fillRect(562.5, 25, 467.5, 90);
    ctx.stroke();

    for (let i = 0; i < this.lives; i++) {
      ctx.drawImage(this.lifeIcon,
        190, 40,
        535, 615,
        (this.lifeShift - (i * 93.5)), 40,
        53.5, 61.5
      );
    }
  }

  drawScore(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(141, 248, 253)";
    ctx.rect(25, 25, 130, 90);
    ctx.fillStyle = "rgba(141, 248, 253, 0.3)";
    ctx.fillRect(25, 25, 130, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillText(this.score, 40, 85);
    ctx.font = '24px "Audiowide"';
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillText("SCORE", 40, 60);
    ctx.font = '24px "Audiowide"';
    ctx.fill();
  }
}

export default Player;