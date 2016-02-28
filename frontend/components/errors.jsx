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
    debugger;
    return (
      <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
    );
  }

});

module.exports = Errors;