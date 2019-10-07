class StartScreen {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
  }

  drawTitle() {
    this.ctx.beginPath();
      this.ctx.font = '36px Audiowide';
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Fight the Flood...", (this.canvas.width / 2), 175);
      this.ctx.fillText("Press Enter to Start", (this.canvas.width / 2), 375);
    this.ctx.closePath();
  }

  drawInstructions() {
    this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.font = '20px Audiowide';
      this.ctx.textAlign = "center";
      this.ctx.fillText("Type the words that appear above the enemies before they reach Master Chief", (this.canvas.width / 2), 250);
      this.ctx.fillText("As the flood gets too close, tap or hold 'Enter' to push the horde back and buy time", (this.canvas.width / 2), 285);
    this.ctx.closePath();
  }
}

export default StartScreen;