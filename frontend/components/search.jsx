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
      <form className="navbar-form navbar-left" onSubmit={this.handleSearch}>
        <div className="form-group">
          <input type="text" name="program"
            onChange={this.nameChanged}
            placeholder="Program Title or Keywords"
            value={this.state.name} />
        </div>
        <div className="form-group">
          <input type="text"
            onChange={this.locationChanged}
            value={this.state.location}
            placeholder="Location" />
        </div>
        <input type="submit" className="btn btn-success" value="Search" />
      </form>
    );
  }

});

module.exports = Search;
