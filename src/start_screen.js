class StartScreen {
  constructor(ctx) {
    this.ctx = ctx;
    // this.canvas = canvas;
  }

  drawTitle(titlePos) {
    this.ctx.beginPath();
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      this.ctx.font = 'bold 72px "Roboto Slab"';
      this.ctx.textAlign = "center";
      this.ctx.fillText("Fight the Flood...", 390, titlePos);
      this.ctx.fill();
    this.ctx.closePath();
  }
}

export default StartScreen;