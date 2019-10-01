class Flood {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.dx = 2;
    this.dy = 0;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2.0 * Math.PI);
    ctx.fill();
  }

  move() {
    this.x += this.dx;
  }
}

export default Flood;