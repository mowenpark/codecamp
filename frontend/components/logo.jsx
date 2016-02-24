var React = require('react');
var PropTypes = React.PropTypes;

var Logo = React.createClass({

  render: function() {
    return (
      <div className="logo">
        <img src={'http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_245,w_350/v1456276672/codecamp-logo_uyckba.png'}/>
      </div>

    );
  }

});

module.exports = Logo;
