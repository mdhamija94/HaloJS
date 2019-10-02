class Player {
  constructor() {
    this.radius = 10;
    this.color = "red";
    this.attack = false;

    this.playerImg = new Image();
    this.playerImg.src = "../public/images/MasterChief.png";
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
}

export default Player;