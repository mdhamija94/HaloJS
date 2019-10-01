import Flood from './flood';

window.Flood = Flood;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("viewport");

  const ctx = canvas.getContext("2d");

  const mo = new Flood({
    x: 30,
    y: 350,
    vel: [10, 10],
    radius: 10,
    color: "#00FF00"
  });

  mo.draw(ctx);

  // const playerImg = new Image();
  // playerImg.src = "../public/images/MasterChief.png";

  // this.ctx.drawImage()
});