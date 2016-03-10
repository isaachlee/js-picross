var React = require('react'),
    Howler = require('../howler');

var MusicPlayer = React.createClass({
  getInitialState: function () {
    var music = new Howler.Howl({
      urls: ['../music/ntm-japan.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5
    })

    return { music: music, paused: false, muted: false }
  },

  handleMute: function (e) {
    e.preventDefault();
    if(this.state.muted) {
      this.state.music.unmute();
      this.setState({ muted: false });
    } else {
      this.state.music.mute();
      this.setState({ muted: true });
    }
  },

  renderMuteText: function() {
    return this.state.muted ? "Unmute Music" : "Mute Music"
  },

  render: function() {

    return (
      <div className="music-player">
        <button onClick={this.handleMute}>{this.renderMuteText()}</button>
      </div>
    )
  }
});

module.exports = MusicPlayer;
