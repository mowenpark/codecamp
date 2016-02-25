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

  renderPanes: function () {
    this.setState({reviews: ReviewsStore.all()});
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = Reviews;
