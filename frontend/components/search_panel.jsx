var React = require('react');

var Reviews = require('./reviews'),
    ReviewForm = require('./review_form'),
    ReviewsStore = require('../stores/reviews'),
    ApiUtil = require('../util/api_util');

var SearchPanel = React.createClass({
  getInitialState: function () {
    return {
      reviews: ReviewsStore.all()
    };
  },

  componentDidMount: function () {
    this.token = ReviewsStore.addListener(this.renderReviews);
    var id = this.props.id;
    ApiUtil.fetchReviews(id);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchReviews(newProps.id);
  },

  renderReviews: function () {
    this.setState({reviews: ReviewsStore.all()});
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  render: function() {
    var ratings = this.state.reviews.map( function (review) {
      return(
        review.rating
      );
    });
    var sumRating = 0;
    for( var i = 0; i < ratings.length; i++ ){
        sumRating += parseInt( ratings[i], 10 );
    }

    var avgRating = Math.round(sumRating/ratings.length);
    var stars = [];
    for (i = 0; i < avgRating; i++) {
      stars.push(
        <span key={i} className="glyphicon glyphicon-star" aria-hidden="true"></span>
      );
    }
    return (
        <div >
          <div className="blog-header">
            <h1 className="blog-title">{this.props.title}</h1>
            <p className="lead blog-description">{this.props.location}</p>
            <row>
              {stars}
            </row>
          </div>

          <div className="row">
            <div className="col-md-8 blog-main">
              <div className="blog-post">
                <h2 className="blog-post-title">About</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="blog-post">
                <h2 className="blog-post-title">Reviews</h2>
                <Reviews reviews={this.state.reviews}/>
                <h3 className="blog-post-title">Leave a Review!</h3>
                <ReviewForm programID={this.props.id}/>
              </div>
            </div>
          </div>
        </div>
    );
  }

});

module.exports = SearchPanel;
