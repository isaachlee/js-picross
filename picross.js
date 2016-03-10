var ArrayHelpers = require('./helpers/array_helpers');

var Tile = function (pos) {
  this.pos = pos;
  this.marked = false;
  this.crossed = false;
  this.won = false;
}

Tile.prototype.toggleWon = function () {
  if(!(this.won)) {
    this.won = !this.won;
  }
};

Tile.prototype.toggleCrossed = function () {
  if(!this.won) {
    this.crossed = !this.crossed;
  }
};

Tile.prototype.toggleReveal = function () {
  if(!this.won) {
    this.marked = !this.marked;
  }
};

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
    return row.map(function(tile){
      if(tile.marked) {
        return 1
      } else {
        return 0
      }
    });
  });
  // compare gameState to this.solutionGrid
  return ArrayHelpers.equals(gameState,this.solutionGrid);
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
  if(hints.length === 0) {
    hints.push([0]);
  }
  return hints;
}

window.Board = Board;
window.ArrayHelpers = ArrayHelpers;

module.exports = {
  Board: Board,
  Tile: Tile
};
