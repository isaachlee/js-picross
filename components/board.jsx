var React = require('react'),
    Tile = require('./tile'),
    Picross = require('../picross');

var Board = React.createClass({
  getInitialState: function() {
    return {
      background: ""
    }
  },

  highlightSameRow: function (row) {

  },

  render: function() {
    var that = this;
    return (
      <div className="board">
        {
          this.props.board.playerGrid.map(function(row, i) {
            return (
              <div className='row' key={i}>
                {
                  row.map(function(tile, j) {
                    return (
                      <Tile updateGame={that.props.updateGame} ref={[i,j]} tile={tile} key={j} background=""/>
                    )
                  })
                }
              </div>
            );
          })
        }
      </div>
    )
  }
});

module.exports = Board;
