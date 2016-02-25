var React = require('react');
var PropTypes = React.PropTypes;

var UserMenu = React.createClass({

  render: function() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Notifications</a></li>
        <li className="dropdown clean">
          <a href="#" className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-expanded="false">User <i className="ion-ios-arrow-down"></i></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="/users/:id">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li className="divider"></li>
            <li><a href="/session/new">Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }

});

module.exports = UserMenu;
