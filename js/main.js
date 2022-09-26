let floorUp = document.getElementById("floorUp");
let floorDown = document.getElementById("floorDown");

floorUp.addEventListener("click", e => {
  elevator.upOneFloor();
});
floorDown.addEventListener("click", () => {
  elevator.downOneFloor();
});

console.log(floor7.innerText);

let lift = document.getElementById("lift");
let marginTop = 667;
function calcUp() {
  return (marginTop -= 44);
}
function calcDown() {
  return (marginTop += 44);
}

let elevator = {
  current: 1,
  minFloor: 1,
  maxFloor: 16,
  printFloor() {
    console.log(this.current);
  },
  upOneFloor() {
    if (this.current < this.maxFloor) {
      this.current++;
      lift.style.marginTop = `${calcUp()}px`;
      this.printFloor();
    } else {
      console.error("Error!");
    }
  },
  downOneFloor() {
    if (this.current > this.minFloor) {
      this.current--;
      lift.style.marginTop = `${calcDown()}px`;
      this.printFloor();
    } else {
      console.error("Error!");
    }
  },
  toFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      while (this.current < floor) {
        this.upOneFloor();
      }
      while (this.current > floor) {
        this.downOneFloor();
      }
    } else {
      console.error("Error!");
    }
  },
};
document.addEventListener("click", e => {
  elevator.toFloor(e.target.innerText);
});
