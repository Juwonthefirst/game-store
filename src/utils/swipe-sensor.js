export class SwipeSensor {
  #touchStartPoint;
  constructor(direction, handleSwipe, sensitivity = 5) {
    this.#touchStartPoint = null;
    this.isVertical = direction.toLowerCase() === "y";
    this.swipeHandler = handleSwipe;
    this.sensitivity = sensitivity;
  }

  handleTouchStart = (event) => {
    const touch = event.targetTouches[0];
    this.#touchStartPoint = this.isVertical ? touch.clientY : touch.clientX;
  };

  handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const touchEndPoint = this.isVertical ? touch.clientY : touch.clientX;
    const touchPointDifference = touchEndPoint - this.#touchStartPoint;
    if (touchPointDifference < this.sensitivity * -10) {
      const direction = this.isVertical ? "right" : "up";
      this.swipeHandler(direction);
    } else if (touchPointDifference > this.sensitivity * 10) {
      const direction = this.isVertical ? "left" : "down";
      this.swipeHandler(direction);
    }
  };
}
