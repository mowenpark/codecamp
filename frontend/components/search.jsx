var React = require('react');
var PropTypes = React.PropTypes;

var ApiUtil = require('../util/api_util');

var Search = React.createClass({

  render: function() {
    return (
      <form className="searchform" onSubmit={ApiUtil.fetchAllPrograms}>
        <input type="text" name='program[:name]'>Program Name</input>
        <input type="text" name='program[:location]'>Program Location</input>
        <input type="submit" value="Search" />
      </form>
    );
  }

});

module.exports = Search;
