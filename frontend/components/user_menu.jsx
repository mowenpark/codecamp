var React = require('react');

var ApiUtil = require('../util/api_util');

var UserMenu = React.createClass({

  logoutUser: function () {
    ApiUtil.logout();
  },

  render: function() {
    if (this.props.user === undefined) {
      return(
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#/signin">login</a></li>
          <li><a href="users/new">sign up</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">
            Notifications <span className="badge">4</span>
          </a></li>
        <li className="dropdown">
            <a href="#" className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false">User <i className="ion-ios-arrow-down"></i></a>
            <ul className="dropdown-menu">
              <li><a href="/users/1">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li className="divider"></li>
              <li><a onClick={this.logoutUser}>Logout</a></li>
            </ul>
          </li>
        </ul>
      );
    }
  }

});

module.exports = UserMenu;
