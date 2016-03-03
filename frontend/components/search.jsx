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
      locations: ProgramsStore.locations(),
      locFocus: false
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
    var fetchParams = {
      name: this.state.name,
      location: this.state.location,
    };
    if (this.props.searchParam === "Programs") {
      ApiUtil.fetchPrograms(fetchParams);
    } else if (this.props.searchParam === "Companies") {
      ApiUtil.fetchCompanies(fetchParams);
    } else if (this.props.searchParam === "Languages") {
      ApiUtil.fetchLanguages(fetchParams);
    }
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

  toggleFocus: function () {
    this.setState({locFocus: !this.state.locFocus});
  },

  render: function() {
    var locations = [];
    if (this.state.locFocus) {
      locations = this.locationMatches().map(function (location, i) {
        return (
            <li key={i} onClick={this.selectLocation}>{location}</li>
          );
        }.bind(this)).slice(0,6);
      }

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
            placeholder="Location"
            onBlur={this.toggleFocus}
            onFocus={this.toggleFocus}/>
            <ul className="auto-location panel"
              id="toggle-trigger">
              <ReactCSSTransitionGroup
                transitionName="auto"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {locations}
              </ReactCSSTransitionGroup>
            </ul>
        </div>
        <input type="submit" className="btn btn-success btn-sm" value="Search" />
      </form>
    );
  }

});

module.exports = Search;
