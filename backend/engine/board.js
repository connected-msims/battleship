const boardSquareTypes = [0, 1, 'Empty', 'PartOfShip'];

class board {
  constructor(sideLength = 10) {
    this.boardSquares = [];
    for (let i = 0; i < sideLength; i++) {
      let row = [];
      for (let j = 0; j < sideLength; j++) {
        row.push(0);
      }
      this.boardSquares.push(row);
    }
  }
}