var React = require('react');
var ApiUtil = require('../util/api_util');

var ReviewForm = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      body: "",
      program_id: this.props.programID
    };
  },

  titleChanged: function (e) {
    this.setState({title: e.target.value});
  },

  bodyChanged: function (e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var review = Object.assign({}, this.state);
    ApiUtil.addReview(review);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label for="exampleTextarea">Review Title</label>
          <textarea onChange={this.titleChanged} className="form-control"
            rows="1"
            placeholder="Title">
          </textarea>
        </fieldset>
        <fieldset className="form-group">
          <label for="exampleTextarea">Review Body</label>
          <textarea onChange={this.bodyChanged} className="form-control"
            rows="3"
            placeholder="Enter your review here!">
          </textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

});

module.exports = ReviewForm;
