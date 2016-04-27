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
          <div className="thumbnail" key={index}>
            <img className="card-img-top" src={logo} alt="Company logo"/>
            <div className="card-block">
              <h4 className="card-title">{name}</h4 >
              <p className="card-text">{about}</p>
              <a href="#" className="btn btn-primary">Button</a>
            </div>
          </div>
      );
    });
    return (
      <div className="card-columns">
        {companies}
      </div>
    );
  }

});

module.exports = Companies;
