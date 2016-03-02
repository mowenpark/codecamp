var React = require('react');
var CompaniesStore = require('../stores/companies');

var Companies = React.createClass({
  getInitialState: function () {
    return {
      companies: CompaniesStore.all()
    };
  },

  componentDidMount: function () {
    this.token = CompaniesStore.addListener(this.renderPanes);
  },

  render: function() {
    var companies = this.state.companies.map(function (company, index) {
      var name = company.name;
      var about = company.about;
      var logo = company.logo;
      return (
        <div className="jumbotron"
          key={ index }>
          <h1>{name}</h1>
          <p>{about}</p>
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
