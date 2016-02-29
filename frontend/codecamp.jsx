var ReactDOM = require('react-dom'),
    React = require('react'),
    NavBarMain = require('./components/navbar_main'),
    Tabs = require('./components/tabs'),
    User = require('./components/user'),
    SignIn = require('./components/signin');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = React.createClass({

  render: function(){
    return (
        <div>
          {this.props.children}
          <Tabs />
          <User />
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={NavBarMain} >
        <Route path="users/:id" component={User} />
      </IndexRoute>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
