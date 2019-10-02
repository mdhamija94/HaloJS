import Game from './game';

const Util = {
  randomX() {
    return Math.floor(860 * Math.random());
  },
  randomY() {
    return Math.floor(270 * Math.random() + 245);
  }
};

export default Util;