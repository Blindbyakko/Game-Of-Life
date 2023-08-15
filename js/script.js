
const board = document.querySelector("#board");
//const canvas = document.getElementById("board");
const ctx = board.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(40, 40, 40, 40);

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

for(let i = 0; i < 10; i++){
    const square = new Rectangle(10, 10);
}