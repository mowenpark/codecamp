var React = require('react');
var PropTypes = React.PropTypes;

var Search = require('./search');

var HeaderMenu = React.createClass({

  render: function() {
    return (
      <div className="headermenu">
        <ul className="headermenu-items">
          <li className="">Programs</li>
          <li className="">Companies</li>
          <li className="">Salaries</li>
        </ul>
        <Search />
      </div>
    );
  }

});

module.exports = HeaderMenu;
