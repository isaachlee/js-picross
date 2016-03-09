var React = require('react'),
    Board = require('./board'),
    Picross = require('../picross'),
    ArrayHelpers = require('../helpers/array_helpers');

var Game = React.createClass({
  getInitialState: function () {
    var SAMPLE_SOLUTION = [
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1]
    ];
    return { board: new Picross.Board(SAMPLE_SOLUTION) }
  },

  generateRandomGrid: function(n) {
    var grid = [];
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n, j++) {
        var num = Math.random();

        if(num > 0.5) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      grid.push(row);
    }
    return grid;
  },

  updateGame: function(tile, clickType) {
    switch(clickType) {
      case "left":
        tile.toggleReveal();
        break;
      case "right":
        tile.toggleCrossed();
        break;
    }
    this.setState({ board: this.state.board });
  },



  generateColHints: function() {
    var that = this;
    var solutionGrid = this.state.board.solutionGrid;
    return ArrayHelpers.transpose(solutionGrid).map(function(col,idx){
      return (
        <div className="col-hint-item" key={idx}>
          {that.state.board.generateHints(col)}
        </div>
      )
    });
  },

  renderWinText: function() {
    if(this.state.board.won()) {
      return (
        <div>
          You win!!!!
        </div>
      )
    }
  },

  handleFormSubmit: function(e) {
    e.preventDefault();
  },

  renderDimensionForm: function () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="dimensions">Puzzle Dimensions</label>
          <input name="dimensions" type="range" min="5" max="25" step="5" />
          <button>Generate New Puzzle!</button>
        </form>
      </div>
    )
  },

  render: function() {
    return (
      <div className="game">
        {this.renderDimensionForm()}
        <div className="col-hints">
          {this.generateColHints()}
        </div>
        <Board updateGame={this.updateGame} board={this.state.board} />
        {this.renderWinText()}
      </div>
    );
  }
});

module.exports = Game;
