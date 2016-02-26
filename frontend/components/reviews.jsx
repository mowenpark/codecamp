var React = require('react');
var ReviewsStore = require('../stores/reviews'),
    ApiUtil = require('../util/api_util');

var Reviews = React.createClass({
  getInitialState: function () {
    return {
      reviews: ReviewsStore.all()
    };
  },

  componentDidMount: function () {
    this.token = ReviewsStore.addListener(this.renderReviews);
    var id = this.props.programID;
    ApiUtil.fetchReviews(id);
  },

  renderReviews: function () {
    this.setState({reviews: ReviewsStore.all()});
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  render: function() {
    var reviews = this.state.reviews.map( function (review, index) {
      return (
        <div key={index} className="panel panel-default">
          <div className="panel-heading">{review.title}</div>
          <div className="panel-body">{review.body}</div>
        </div>
      );
    });
    return (
      <div>
        {reviews}
      </div>
    );
  }

});

module.exports = Reviews;
