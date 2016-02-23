var React = require('react');
var PropTypes = React.PropTypes;

var Logo = React.createClass({

  render: function() {
    return (
      <div className="logo">
        <img src={'http://i.imgur.com/uREdD8Q.png'}/>
      </div>

    );
  }

});

module.exports = Logo;
