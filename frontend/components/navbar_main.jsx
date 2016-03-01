var React = require('react');
var PropTypes = React.PropTypes;
var Logo = require('./logo'),
    HeaderMenu = require('./header_menu'),
    Tabs = require('./tabs');

var NavBarMain = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/#"><img alt="Brand" className="logo" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,h_50/v1456336205/codecamp-logo_uyckba_hmjppx.png" /></a>
          </div>
            <HeaderMenu />
        </div>
      </nav>
    );
  }

});

module.exports = NavBarMain;
