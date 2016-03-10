var React = require('react');

var SplashPage = React.createClass({
  render: function() {
    return (
      <div className="how-to-play">
        <p>How to play:</p>
        <p>Left click on a tile to shade it in and right click to mark it as invalid.</p>
        <p>Each set of hints along each row and column indicates the groupings of shaded tiles. For example, a row with the hint set "3 1 2" means that along that row, there is a group of three shaded tiles, followed by a single shaded tile, followed by two shaded tiles, each separated by at least one blank tile.  Use your logic skills to complete the puzzle!</p>
        <p>For more information, take a look <a target="_blank" href="https://en.wikipedia.org/wiki/Nonogram">here</a>!</p>
      </div>
    );
  }
});

module.exports = SplashPage;
