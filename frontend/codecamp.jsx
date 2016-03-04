var ReactDOM = require('react-dom'),
    React = require('react'),
    NavBarMain = require('./components/navbar_main'),
    Tabs = require('./components/tabs'),
    User = require('./components/user'),
    SignIn = require('./components/signin'),
    SignUp = require('./components/signup'),
    Companies = require('./components/companies'),
    Dashboard = require('./components/dashboard'),
    Company = require('./components/company'),
    Footer = require('./components/footer'),
    Music = require('./components/music');

var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var App = React.createClass({

  render: function(){
    return (
        <div>
          <NavBarMain />
          <div className="bod">
            {this.props.children}
          </div>
          <Music />
          <Footer />
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="users/:id" component={User} />
      <Route path="programs" component={Tabs} />
      <Route path="companies" component={Companies} />
      <Route path="languages" component={Tabs} />
      <Route path="/companies/:id" component={Company}/>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, content);
});
