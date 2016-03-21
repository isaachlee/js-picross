var React = require('react');

var SplashPage = React.createClass({
  render: function() {
    return (
      <div className="how-to-play">
        <p>How to play:</p>
        <p>Each set of hints along each row and column indicates the groupings of continuous shaded tiles in order along the axis. Each grouping of tiles is separated by at least one blank tile. Example:</p>
        <img src="http://res.cloudinary.com/dznowmwuz/image/upload/v1458346869/row_jrzii1.png" alt="picross-row" />
        <p>Left click on a tile to shade it in and right click to mark it as blank. <br />
        Here is an example of the puzzle being solved. Start with large numbers first and work your way through to the rest of the puzzle!</p>
        <img src="http://res.cloudinary.com/dznowmwuz/image/upload/v1458346490/picross_tutorial_o2oyno.gif" alt="picross-tutorial" />
        <p>Use your logic skills to complete the puzzle!</p>
        <p>For more information, take a look <a target="_blank" href="https://en.wikipedia.org/wiki/Nonogram">here</a>!</p>
        <button className="highlight" onClick={this.props.hideTutorialModal}>Close</button>
      </div>
    );
  }
});

module.exports = SplashPage;
