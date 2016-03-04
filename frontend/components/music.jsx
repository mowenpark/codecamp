var React = require('react');
var PropTypes = React.PropTypes;

var Music = React.createClass({

  render: function() {
    var style1 = {
      position: "relative",
      width:"267px",
      height:"25px",
      overflow:"hidden"
    };

    var style2 = {
      position:"absolute",
      top:"-276px",
      left:'-5px'
    };

    return (
      <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source>
        <source src="horse.mp3" type="audio/mpeg"></source>
      Your browser does not support the audio element.
      </audio>
    );
  }

});

module.exports = Music;
