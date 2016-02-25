var ReactDOM = require('react-dom'),
    React = require('react'),
    NavBarMain = require('./components/navbar_main'),
    Tabs = require('./components/tabs');

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
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={NavBarMain} />
      <Route path="user/:id" component={NavBarMain} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
