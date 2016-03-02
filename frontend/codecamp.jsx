var ReactDOM = require('react-dom'),
    React = require('react'),
    NavBarMain = require('./components/navbar_main'),
    Tabs = require('./components/tabs'),
    User = require('./components/user'),
    SignIn = require('./components/signin'),
    SignUp = require('./components/signup'),
    Companies = require('./components/companies'),
    Dashboard = require('./components/dashboard'),
    Company = require('./components/company');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = React.createClass({

  render: function(){
    return (
        <div>
          <NavBarMain />
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="users/:id" component={User} />
      <Route path="programs" component={Tabs} />
      <Route path="companies" component={Companies}>
        <Route path=":id" component={Company}/>
      </Route>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
