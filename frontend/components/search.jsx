var React = require('react');
var PropTypes = React.PropTypes;

var ApiUtil = require('../util/api_util'),
    SearchActions = require('../actions/search_actions');

var Search = React.createClass({

  getInitialState: function () {
    return{
      name: "",
      location: "",
    };
  },

  handleSearch: function (event) {
    event.preventDefault();
    var programs = Object.assign({}, this.state);
    ApiUtil.fetchPrograms(programs);
    this.navigateToSearch();
  },

  navigateToSearch: function() {
    // this.props.history.pushState(null, "/");
  },

  nameChanged: function (e) {
    this.setState({name: e.target.value});
    //render list
    //SearchActions.updateName(e.target.value);
  },

  locationChanged: function (e) {
    this.setState({location: e.target.value});
  },

  render: function() {
    return (
      <form className="searchform" onSubmit={this.handleSearch}>
        <label>Program Name:
        <input type="text" name="program"
          onChange={this.nameChanged}
          value={this.state.name} />
        </label>
        <br></br>
        <label>Location:
        <input type="text"
          onChange={this.locationChanged}
          value={this.state.location} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }

});

module.exports = Search;
