var ReactDOM = require('react-dom'),
    React = require('react'),
    NavBarMain = require('./components/navbar_main'),
    Tabs = require('./components/tabs'),
    User = require('./components/user'),
    SignIn = require('./components/signin'),
    Dashboard = require('./components/dashboard');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = React.createClass({

  render: function(){
    return (
        <div>
          <NavBarMain />
          <Dashboard />
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <Route path="users/:id" component={User} />
      <IndexRoute component={Tabs}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
