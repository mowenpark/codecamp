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
    var divStyle = {
      backgroundImage: 'url(http://res.cloudinary.com/dtdgkk9aa/image/upload/v1457042881/blue-abstract-glass-balls_fkud2k.jpg)',
      backgroundSize: "cover",
    };
    return (
      <div className="container jumbo">
        <div className="jumbotron narrow"
          style={divStyle}>
          <h1>{this.state.company.name}</h1>
          <p>{this.state.company.about}</p>
        </div>
        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Company;
