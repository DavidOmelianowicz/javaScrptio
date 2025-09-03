function Vehicale(speed) {
  this.speed = speed;
  this.moveForword = function () {
    return `Moving forword at ${this.speed}`;
  };
}
