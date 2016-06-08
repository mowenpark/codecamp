var React = require('react');
var CompaniesStore = require('../stores/companies'),
    ApiUtil = require('../util/api_util');

var Companies = React.createClass({
  getInitialState: function () {
    return {
      companies: CompaniesStore.all()
    };
  },

  componentDidMount: function () {
    this.token = CompaniesStore.addListener(this.renderCompanies);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  renderCompanies: function () {
    this.setState({companies: CompaniesStore.all()});
  },

  render: function() {
    var companies = this.state.companies.map(function (company, index) {
      var name = company.name;
      var about = company.about.slice(0,300) + "...";
      var logo = company.logo;
      return (
        <a href={"#/companies/" + company.id} key={index}>
          <div className="pin">
              <img src={logo}></img>
              <h3>{name}</h3>
              <p>{about}</p>
          </div>
        </a>
      );
    });
    return (
      <div id="wrapper">
	       <div id="columns">
           {companies}
         </div>
      </div>
    );
  }

});

module.exports = Companies;
