var React = require('react');

var CompanyStore = require('../stores/companies'),
    ApiUtil = require('../util/api_util');

var Company = React.createClass({
  getInitialState: function () {
    return{
      company: {}
    };
  },

  componentDidMount: function () {
    this.token = CompanyStore.addListener(this.renderCompany);
    ApiUtil.fetchCompany(this.props.params.id);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchCompany(newProps.params.id);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  renderCompany: function () {
    this.setState({company: CompanyStore.find(this.props.params.id)});
  },


  render: function() {
    var divStyle;
    if (this.state.company.locations === undefined) {
      divStyle = {};
    } else {
      divStyle = {
        backgroundImage: "url(" + this.state.company.logo + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: "0px",
        padding: "0",
        borderBottom: "0"
      };
    }
    var locations;
    if (this.state.company.locations === undefined) {
      locations = <div />;
    } else {
      locations = this.state.company.locations.map(function (location, index) {
        return(
          <li key={index}>{location}</li>
        );
      });
    }

    var programs;
    if (this.state.company.programs === undefined) {
      programs = <div />;
    } else {
      programs = this.state.company.programs.map(function (program, idx) {
        return(
          <li key={idx}>{program.title}</li>
        );
      });
    }

    return (
      <div className="container jumbo">
        <div className="jumbotron narrow"
          style={divStyle}>
          <img src={this.state.company.logo} style={{visibility: "hidden"}}></img>
        </div>
        <h1>{this.state.company.name}</h1>
        <p>{this.state.company.about}</p>
        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Rating</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Programs</h4>
            <ul>
              {programs}
            </ul>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div className="col-lg-6">
            <h4>Reviews</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Blog</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Locations</h4>
            <ul>
              {locations}
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Company;
