var React = require('react');
var CompaniesStore = require('../stores/companies');

var Companies = React.createClass({
  getInitialState: function () {
    return {
      companies: CompaniesStore.all()
    };
  },

  componentDidMount: function () {
    this.token = CompaniesStore.addListener(this.renderCompanies);
  },

  renderCompanies: function () {
    this.setState({companies: CompaniesStore.all()});
  },

  render: function() {
    var companies = this.state.companies.map(function (company, index) {
      var name = company.name;
      var about = company.about;
      var locations = company.locations.map(function (location) {
        return (<li>{location}</li>);
      });
      var logo = company.logo;
      return (
        <div className="jumbotron"
          key={ index }>
          <h1><a href={"/#/company/" + company.id}>{name}</a></h1>
          <p>{about}</p>
          <ul>
            {locations}
          </ul>
        </div>
      );
    });
    return (
      <div >
        {companies}
      </div>

    );
  }

});

module.exports = Companies;
