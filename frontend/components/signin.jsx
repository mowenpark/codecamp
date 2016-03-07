var React = require('react');

var ApiUtil = require('../util/api_util'),
    Errors = require('./errors');

var SignIn = React.createClass({

  getInitialState: function () {
    return {
      email: "",
      password: ""
    };
  },

  emailChange: function (e) {
    this.setState({email: e.target.value});
  },

  passwordChange: function (e) {
    this.setState({password: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var params = Object.assign({}, this.state);
    ApiUtil.login(params);
  },

  guestLogin: function (e) {
    e.preventDefault();
    ApiUtil.login({
      email: "mike@mail.com",
      password: "mikemike"
    });
  },

  render: function() {
    return (
      <div className="container">

        <Errors />

        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label className="sr-only">Email address</label>
          <input type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={this.emailChange}
            required autofocus></input>
          <label className="sr-only">Password</label>
          <input type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={this.passwordChange}
            required></input>
          <button className="btn btn-primary" type="submit">Sign in</button>
        </form>

        <button onClick={this.guestLogin} className="btn btn-primary">Guest Login</button>

      </div>

    );
  }

});

module.exports = SignIn;
