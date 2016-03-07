var React = require('react');

var Errors = React.createClass({
  getInitialState: function () {
    return{
      errors: []
    };
  },

  handleError: function (errors) {
    this.setState({errors: errors});
  },

  render: function() {
    return (
      <div className="alert alert-warning alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </div>
    );
  }

});

module.exports = Errors;
