var React = require('react');
var PropTypes = React.PropTypes;

var UserMenu = React.createClass({

  logoutUser: function () {
    $.ajax({
      url: '/session',
      type: 'post',
      data: {_method: 'delete'},
      success: function() {
        window.location.replace("/session/new");
      }
    });
  },

  render: function() {
    if (this.props.user !== undefined) {
      return(
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/session/new">login</a></li>
          <li><a href="/users/new">sign up</a></li>
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
