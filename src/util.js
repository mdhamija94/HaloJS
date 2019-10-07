const Util = {
  randomY() {
    return Math.floor(270 * Math.random() + 160);
  },
  randomDY() {
    const dir = Math.random() < 0.5 ? 1 : -1;
    const vel = Math.random() < 0.5 ? 2 : 3;
    return dir * vel;
  }
};

export default Util;