var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var PropTypes = React.PropTypes;

var ApiUtil = require('../util/api_util'),
    ProgramsStore = require('../stores/program');

var Search = React.createClass({

  getInitialState: function () {
    return{
      name: "",
      location: "",
      locations: ProgramsStore.locations()
    };
  },

  locationMatches: function () {
    var locationMatches = [];

    this.state.locations.forEach(function (location) {
      var newLocation = location.toLowerCase();
      if(newLocation.indexOf(this.state.location.toLowerCase()) > -1) {
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
    var location = event.currentTarget.innerHTML;
    this.setState({ location: location });
  },

  handleSearch: function (event) {
    event.preventDefault();
    var programs = Object.assign({}, this.state);
    ApiUtil.fetchPrograms(programs);
  },

  updateLocations: function () {
    this.setState({locations: ProgramsStore.locations()});
  },

  componentDidMount: function () {
    this.token = ProgramsStore.addListener(this.updateLocations);
    ApiUtil.fetchLocations();
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  nameChanged: function (e) {
    this.setState({name: e.target.value});
  },

  locationChanged: function (e) {
    this.setState({location: e.target.value});
    this.locationMatches();
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
          <ul className="auto-location"
            id="toggle-trigger">
            <ReactCSSTransitionGroup
              transitionName="auto"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
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
