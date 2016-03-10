var React = require('react');

var Tile = React.createClass({
  tileClass: function () {
    var className = "tile";
    if(this.props.tile.won) {
      className += " won"
    } else if(this.props.tile.crossed) {
      className += " crossed"
    } else if(this.props.tile.marked) {
      className += " marked"
    }
    return className;
  },

  handleLeftClick: function(e) {
    e.preventDefault();
    if(!this.props.tile.crossed) {
      this.props.updateGame(this.props.tile,"left");
    }
  },

  handleRightClick: function(e) {
    e.preventDefault();
    if(!this.props.tile.marked) {
      this.props.updateGame(this.props.tile,"right");
    }
  },

  render: function() {
    return (
      <div onClick={this.handleLeftClick}
         onContextMenu={this.handleRightClick} className={this.tileClass()}>
      </div>
    )
  }
});

module.exports = Tile;
