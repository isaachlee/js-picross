var React = require('react');

var SplashPage = React.createClass({
  render: function() {
    return (
      <div className="how-to-play">
        <p>How to play:</p>
        <p>Left click on a tile to shade it in and right click to mark it as invalid.</p>
        <p>Each set of hints along each row and column indicates the groupings of shaded tiles in order along the axis.</p>
        <p>For example, a row with the hint set "3 1 2" means that along that row, there is a group of three shaded tiles, separated by at least one blank tile, followed by a single shaded tile, separated by at least one blank tile followed by two shaded tiles.</p>
        <p>Here is an example of the puzzle being solved. Start with large numbers first and work your way through to the rest of the puzzle!</p>
        <img src="http://res.cloudinary.com/dznowmwuz/image/upload/v1457726024/picross-tutorial_xft5ao.gif" alt="picross-tutorial" />
        <p>Use your logic skills to complete the puzzle!</p>
        <p>For more information, take a look <a target="_blank" href="https://en.wikipedia.org/wiki/Nonogram">here</a>!</p>
        <button onClick={this.props.hideTutorialModal}>Close</button>
      </div>
    );
  }
});

module.exports = SplashPage;
