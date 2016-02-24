var React = require('react');

var Search = require('./search');

var HeaderMenu = React.createClass({

  render: function() {
    return (
        <ul className="nav navbar-nav navbar-left">
          <li className="">Programs</li>
          <li className="">Companies</li>
          <li className="">Salaries</li>
          <br>
            <Search />
          </br>
        </ul>

    );
  }

});

module.exports = HeaderMenu;
