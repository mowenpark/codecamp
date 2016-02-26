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

  bodyChanged: function (e) {
    this.setState({body: e.target.value});
  },

  bodyChanged: function (e) {
    this.setState({body: e.target.value});
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
          <label htmlFor="exampleTextarea">Review Title</label>
          <small class="text-muted">Enter an exciting and fun review</small>
          <textarea onChange={this.titleChanged} className="form-control"
            rows="1"
            placeholder="Title">
          </textarea>
        </fieldset>
        <div class="radio">
          <label>
            <input type="radio"
              name="optionsRadios"
              id="optionsRadios1" 
              value="option1"></input>
          </label>
        </div>
        <fieldset class="form-group">
          <label for="exampleSelect1">Enrollment Status</label>
          <select class="form-control" id="exampleSelect1">
            <option>Currently Enrolled</option>
            <option>Previously Enrolled</option>
          </select>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Pros</label>
          <textarea onChange={this.prosChanged} className="form-control"
            rows="3"
            placeholder="What was your favorite part of the program?">
          </textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="exampleTextarea">Cons</label>
          <textarea onChange={this.consChanged} className="form-control"
            rows="3"
            placeholder="What didn't you like about this program?">
          </textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="exampleTextarea">Comments</label>
          <textarea onChange={this.commentsChanged} className="form-control"
            rows="3"
            placeholder="How could they improve?">
          </textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

});

module.exports = ReviewForm;
