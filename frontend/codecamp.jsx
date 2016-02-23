var ReactDOM = require('react-dom'),
    React = require('react'),
    BenchStore = require('./stores/bench.js');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
