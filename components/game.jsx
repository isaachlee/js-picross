var React = require('react'),
    Board = require('./board'),
    SplashPage = require('./splash_page'),
    Picross = require('../picross'),
    ArrayHelpers = require('../helpers/array_helpers'),
    ReactSlider = require('react-slider'),
    Boron = require('boron/ScaleModal'),
    MusicPlayer = require('./music_player');

var Game = React.createClass({
  getInitialState: function () {
    // var SAMPLE_SOLUTION = [
    //   [0,1, 1, 1, 1, 1],
    //   [0,1, 0, 1, 0, 1],
    //   [0,0, 1, 0, 1, 0],
    //   [0,1, 1, 1, 0, 1],
    //   [1, 1,0, 1, 1, 1],
    //   [1, 1,0, 1, 1, 0]
    //
    // ];
    var grid = this.generateRandomGrid(5);
    return { boardSize:5, board: new Picross.Board(grid) }
  },

  componontDidMount: function () {
    this.showTutorialModal();
  },

  handleNewGame: function (e) {
    e.preventDefault();
    this.setState({ board: new Picross.Board(this.generateRandomGrid(this.state.boardSize)) });
  },

  showTutorialModal: function () {
    this.refs.tutorialModal.show();
  },

  hideTutorialModal: function () {
    this.refs.tutorialModal.hide();
  },

  generateRandomGrid: function(n) {
    var grid = [];

    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
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

    if(this.state.board.won()) {
      this.state.board.playerGrid.forEach(function(row){
        row.forEach(function(tile) {
          if(!tile.won && tile.marked) {
            tile.toggleWon();
          }
        });
      });
    }
    this.setState({ board: this.state.board });
  },




  renderWinText: function() {
    if(this.state.board.won()) {
      return (
        <div className="win-text">
          <p>Congratulations! You solved the puzzle!</p>
        </div>
      )
    }
  },

  handleSliderChange: function(e) {
    e.preventDefault();
    var value = parseInt(e.currentTarget.value);
    this.setState({ boardSize: value });
  },

  renderDimensionForm: function () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderDimensionForm()}
          <button>Generate New Puzzle!</button>
        </form>
      </div>
    )
  },

  render: function() {
    var contentStyle = {
      height: "auto",
      width: "500px",
      padding: "20px"
    }
    return (
      <div className="game">
        <h1>Picross</h1>
        <Boron ref='tutorialModal' contentStyle={contentStyle}>
          <SplashPage />
        </Boron>
        {this.renderWinText()}
        <Board updateGame={this.updateGame} board={this.state.board} />
        <div className="ui">
          <div className="new-game">
            Level: {this.state.boardSize}x{this.state.boardSize}<input onChange={this.handleSliderChange} type="range" min="5" max="20" step="5" defaultValue="5" />
          <button onClick={this.handleNewGame}>New Game</button>
          </div>
          <button onClick={this.showTutorialModal}>How to Play</button>
          <MusicPlayer />
        </div>
        <br />
        <a target="_blank" href="http://www.github.com/pyi891/js-picross">
          <img src="../images/GitHub-Mark-32px.png" />
        </a>
      </div>
    );
  }
});

module.exports = Game;
