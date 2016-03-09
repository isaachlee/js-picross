var React = require('react'),
    Tile = require('./tile'),
    Picross = require('../picross');

var Board = React.createClass({
  generateRowHints: function(rowIdx) {
    var row = this.props.board.solutionGrid[rowIdx];
    return (
      <div className="row-hints">
        {this.props.board.generateHints(row)}
      </div>
    )
  },

  render: function() {
    var that = this;
    return (
      <div className="board">
        {
          this.props.board.playerGrid.map(function(row, i) {
            return (
              <div className='row' key={i}>
                {this.generateRowHints(i)}
                {
                  row.map(function(tile, j) {
                    return (
                      <Tile updateGame={that.props.updateGame} ref={[i,j]} tile={tile} key={j} background=""/>
                    )
                  })
                }
              </div>
            );
          }.bind(this))
        }
      </div>
    )
  }
});

module.exports = Board;
