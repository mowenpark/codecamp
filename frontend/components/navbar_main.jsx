var React = require('react');
var PropTypes = React.PropTypes;
var Logo = require('./logo'),
    HeaderMenu = require('./header_menu'),
    UserMenu = require('./user_menu'),
    Tabs = require('./tabs');

var NavBarMain = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-clean">
        <div className="container-fluid">
          {/*Brand and toggle get grouped for better mobile display*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#"><img alt="Brand" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,h_50/v1456336205/codecamp-logo_uyckba_hmjppx.png" /></a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling -*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <HeaderMenu />
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Notifications</a></li>
              <li className="dropdown clean">
                <a href="#" className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false">User <i className="ion-ios-arrow-down"></i></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Settings</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>{/* /.navbar-collapse -->*/}
        </div>{/* /.container-fluid -->*/}
      </nav>
    );
  }

});

module.exports = NavBarMain;
