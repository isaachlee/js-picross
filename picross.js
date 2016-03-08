var Tile = function (pos) {
  this.pos = pos;
  this.marked = false;
  this.crossed = false;
  this.incorrect = false;
}

Tile.prototype.toggleReveal = function () {
  if(!(this.incorrect)) {
    this.marked = !this.marked;
  }
};

Tile.prototype.toggleCrossed = function () {
  if(!(this.incorrect)) {
    this.crossed = !this.crossed;
  }
};

Tile.prototype.incorrectClick = function () {
  this.incorrect = true
};

SAMPLE_SOLUTION = [
  [1, 1, 1],
  [1, 0, 1],
  [0, 1, 0]
]

var Board = function(solutionGrid) {
  this.solutionGrid = solutionGrid;
  this.playerGrid = [];
  this.generatePlayerGrid();
}

Board.prototype.generatePlayerGrid = function () {
  var that = this;
  this.solutionGrid.forEach(function(row, rowIdx){
    that.playerGrid.push([]);
    row.forEach(function(col, colIdx) {
      var tile = new Tile([rowIdx,colIdx])
      that.playerGrid[rowIdx].push(tile);
    });
  });
};

Board.prototype.won = function () {
  var gameState = this.playerGrid.map(function(row){
    row.map(function(tile){
      if(tile.marked && !tile.incorrect) {
        return 1
      } else {
        return 0
      }
    });
  });
  debugger
  // compare gameState to this.solutionGrid
};

Board.prototype.generateHints = function(row) {
  var hints = [];
  var count = 0;

  row.forEach(function(point){
    if(point === 1) {
      count += 1
    } else if(count !== 0){
      hints.push(count);
      count = 0;
    }
  });
  if(count !== 0) {
    hints.push(count);
  }
  return hints;
}

window.Board = Board;

module.exports = {
  Board: Board,
  Tile: Tile
};
