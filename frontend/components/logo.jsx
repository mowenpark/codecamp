var React = require('react');
var PropTypes = React.PropTypes;

var Logo = React.createClass({

  render: function() {
    return (
      <div className="logo">
        <img src={'http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,w_90/v1456336205/codecamp-logo_uyckba_hmjppx.png'}/>
      </div>

    );
  }

});

module.exports = Logo;
