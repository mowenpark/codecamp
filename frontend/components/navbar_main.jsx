var React = require('react');
var PropTypes = React.PropTypes;
var Logo = require('./logo'),
    HeaderMenu = require('./header_menu'),
    UserMenu = require('./user_menu');

var NavBarMain = React.createClass({

  render: function() {
    return (
      <div className="navbarmain">
        <Logo />
        <HeaderMenu />
        <UserMenu />
      </div>
    );
  }

});

module.exports = NavBarMain;
