class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.lives = 5;
    this.lifeShift = 956.5;
    this.score = 0;
    this.attack = false;

    this.playerImg = new Image();
    this.playerImg.src = "./public/images/MasterChief.png";

    this.lifeIcon = new Image();
    this.lifeIcon.src = "./public/images/player-lives.png";
  }

  draw() {
    if (this.attack) {
      this.ctx.drawImage(this.playerImg,
        512.5, 0,
        51.25, 73.25,
        800, 240,
        80.5, 115
      );
    } else {
      this.ctx.drawImage(this.playerImg, 
        564.75, 0,
        51.25, 73.25,
        800, 240,
        80.5, 115
      );
    }
  }

  drawInput() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(141, 248, 253)";
    this.ctx.rect(390, 440, 270, 50);
    this.ctx.fillStyle = "rgba(141, 248, 253, 0.25)";
    this.ctx.fillRect(390, 440, 270, 50);
    this.ctx.stroke();
  }

  drawLives() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(141, 248, 253)";
    this.ctx.rect(562.5, 25, 467.5, 90);
    this.ctx.fillStyle = "rgba(141, 248, 253, 0.25)";
    this.ctx.fillRect(562.5, 25, 467.5, 90);
    this.ctx.stroke();

    for (let i = 0; i < this.lives; i++) {
      this.ctx.drawImage(this.lifeIcon,
        190, 40,
        535, 615,
        (this.lifeShift - (i * 93.5)), 40,
        53.5, 61.5
      );
    }
  }

  drawScore() {
    this.ctx.beginPath();
      this.ctx.strokeStyle = "rgba(141, 248, 253)";
      this.ctx.rect(25, 25, 120, 90);
      this.ctx.fillStyle = "rgba(141, 248, 253, 0.25)";
      this.ctx.fillRect(25, 25, 120, 90);
      this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
      this.ctx.textAlign = "center";
      this.ctx.font = '20px "Audiowide"';
      this.ctx.fillStyle = "white";
      this.ctx.fillText("SCORE", 82.5, 65);
      this.ctx.fill();
    this.ctx.closePath();
  
    this.ctx.beginPath();
      this.ctx.textAlign = "center";
      this.ctx.font = '20px "Audiowide"';
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.score, 82.5, 90);
      this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Player;