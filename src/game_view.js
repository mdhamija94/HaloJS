class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.then = Date.now();
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    let fps = 12;
    let interval = 1000 / fps;
    let now = Date.now();
    let delta = now - this.then;

    if (delta > interval) {
      this.game.step(delta);
      this.game.draw(this.ctx);
      this.then = now;
    }

    this.game.input.addEventListener('keydown', this.game.handleInput);

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;