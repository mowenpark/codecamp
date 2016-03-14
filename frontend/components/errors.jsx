var React = require('react'),
    ErrorsStore = require('../stores/errors');

var Errors = React.createClass({
  getInitialState: function () {
    return{
      errors: ErrorsStore.all()
    };
  },

  componentDidMount: function () {
    this.token = ErrorsStore.addListener(this.handleError);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  handleError: function (errors) {
    this.setState({errors: ErrorsStore.all()});
  },

  render: function() {
    if (this.state.errors[0] !== undefined) {
      var errorMessages = this.state.errors.map(function (error, index) {
        return(
          <div key={index} className="alert alert-warning alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {error}
          </div>
        );
      });
      return (
        <div>
          {errorMessages}
        </div>
      );
    } else {
      return <div />;
    }
  }

});

module.exports = Errors;
