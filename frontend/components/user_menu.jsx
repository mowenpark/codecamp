var React = require('react');

var ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/current_user');

var UserMenu = React.createClass({
  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.all()
    };
  },

  componentDidMount: function () {
    this.token = CurrentUserStore.addListener(this.newCurrentUser);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  newCurrentUser: function () {
    this.setState({currentUser: CurrentUserStore.all()});
  },

  logoutUser: function () {
    ApiUtil.logout();
  },

  render: function() {
    if (this.state.currentUser.id === undefined) {
      return(
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/#/signin">Login</a></li>
          <li><a href="/#/signup">Sign Up</a></li>
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
              <li><a href={"/#/users/" + this.state.currentUser.id}>Profile</a></li>
              <li><a href={"/#/users/" + this.state.currentUser.id}>Settings</a></li>
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
