var React = require('react'),
    Board = require('./board'),
    Picross = require('../picross');

var Game = React.createClass({
  getInitialState: function () {
    var SAMPLE_SOLUTION = [
      [1, 1, 1],
      [1, 0, 1],
      [0, 1, 0]
    ];
    return { board: new Picross.Board(SAMPLE_SOLUTION) }
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

  generateRowHints: function() {
    var that = this;
    return this.state.board.solutionGrid.map(function(row,idx){
      return (
        <div className="row-hint-item" key={idx}>
          {that.state.board.generateHints(row)}
        </div>
      )
    });
  },

  render: function() {

    return (
      <div className="game">
        <div className="row-hints">
          {this.generateRowHints()}
        </div>
        <Board updateGame={this.updateGame} board={this.state.board} />
      </div>
    );
  }
});

module.exports = Game;
