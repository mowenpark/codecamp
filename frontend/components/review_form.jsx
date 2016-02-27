var React = require('react');
var ApiUtil = require('../util/api_util');

var ReviewForm = React.createClass({
  getInitialState: function () {
    return {
      title: null,
      pros: null,
      cons: null,
      rating: null,
      program_id: this.props.programID,
      enrollment_status: null,
      comments: null
    };
  },

  titleChanged: function (e) {
    this.setState({title: e.target.value});
  },

  prosChanged: function (e) {
    this.setState({pros: e.target.value});
  },

  consChanged: function (e) {
    this.setState({cons: e.target.value});
  },

  commentsChanged: function (e) {
    this.setState({comments: e.target.value});
  },

  ratingChanged: function (e) {
    this.setState({rating: parseInt(e.target.value)});
  },

  enrollmentChanged: function (e) {
    this.setState({enrollment_status: e.target.value});
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
          <textarea onChange={this.titleChanged} className="form-control"
            rows="1"
            placeholder="Title">
          </textarea>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Rating</label>
          <div className="radio">
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions"
                id="inlineRadio1"
                onClick={this.ratingChanged}
                value="1"></input>
              1
            </label>
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions"
                id="inlineRadio2"
                onClick={this.ratingChanged}
                value="2"></input>
              2
            </label>
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions"
                onClick={this.ratingChanged}
                id="inlineRadio3" value="3"></input>
              3
            </label>
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions"
                onClick={this.ratingChanged}
                id="inlineRadio4" value="4"></input>
              4
            </label>
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions"
                onClick={this.ratingChanged}
                id="inlineRadio5" value="5"></input>
              5
            </label>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Enrollment</label>
          <div className="radio">
            <label className="radio-inline">
              <input type="radio" name="enrollment-radio"
                id="inlineRadio1"
                onClick={this.enrollmentChanged}
                value="true"></input>
              Currently Enrolled
            </label>
            <label className="radio-inline">
              <input type="radio" name="enrollment-radio"
                id="inlineRadio2"
                onClick={this.enrollmentChanged}
                value="false"></input>
              Former Student
            </label>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Pros</label>
          <textarea onChange={this.prosChanged} className="form-control"
            rows="3"
            placeholder="What was your favorite part of the program?">
          </textarea>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Cons</label>
          <textarea onChange={this.consChanged} className="form-control"
            rows="3"
            placeholder="What didn't you like about this program?">
          </textarea>
        </fieldset>
        <fieldset className="form-group">
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
