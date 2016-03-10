var React = require('react'),
    Tile = require('./tile'),
    Picross = require('../picross'),
    ArrayHelpers = require('../helpers/array_helpers');

var Board = React.createClass({
  generateRowHints: function(rowIdx) {
    var row = this.props.board.solutionGrid[rowIdx];
    return (
      <div className="row-hints">
        {this.props.board.generateHints(row)}
      </div>
    )
  },

  generateColHints: function() {
    var that = this;
    var solutionGrid = this.props.board.solutionGrid;
    return ArrayHelpers.transpose(solutionGrid).map(function(col,idx){
      return (
        <div className="col-hint-item" key={idx}>
          {that.props.board.generateHints(col)}
        </div>
      )
    });
  },


  render: function() {
    var that = this;
    return (
      <div className="board">
        <div className="col-hints">
          {this.generateColHints()}
        </div>
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
