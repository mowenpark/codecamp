var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var PropTypes = React.PropTypes;

var ApiUtil = require('../util/api_util'),
    SearchActions = require('../actions/search_actions');

var Search = React.createClass({

  getInitialState: function () {
    return{
      name: "",
      location: "",
      locations: ["cali", "fornia", "germany"]
    };
  },

  locationMatches: function () {
    var locationMatches = [];
    if(this.state.location.length === 0){
      return this.state.locations;
    }

    this.state.locations.forEach(function (location) {
      var sub = location.slice(0, this.state.location.length);
      if(sub.toLowerCase() === this.state.location.toLowerCase()){
        locationMatches.push(location);
      }
    }.bind(this));

    if (locationMatches.length === 0) {
      locationMatches.push("No matches");
    }

    return locationMatches;
  },

  selectName: function (event) {
    var name = event.currentTarget.innerText;
    this.setState({ name: name });
  },

  selectLocation: function (event) {
    var location = event.currentTarget.innerText;
    this.setState({ location: location });
  },

  handleSearch: function (event) {
    event.preventDefault();
    var programs = Object.assign({}, this.state);
    ApiUtil.fetchPrograms(programs);
  },

  nameChanged: function (e) {
    this.setState({name: e.target.value});
  },

  locationChanged: function (e) {
    this.setState({location: e.target.value});
  },

  render: function() {
    var locations = this.locationMatches().map(function (location, i) {
      return (
          <li key={i} onClick={this.selectLocation}>{location}</li>
      );
    }.bind(this));

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
          <ul className="auto-location">
            <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {locations}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
        <input type="submit" className="btn btn-success" value="Search" />
      </form>
    );
  }

});

module.exports = Search;
