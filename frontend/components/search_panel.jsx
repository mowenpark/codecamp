var React = require('react');

var Reviews = require('./reviews'),
    ReviewForm = require('./review_form'),
    ReviewsStore = require('../stores/reviews'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require("../stores/current_user");

var SearchPanel = React.createClass({
  getInitialState: function () {
    return {
      reviews: ReviewsStore.all(),
      currentUser: CurrentUserStore.all()
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

  searchLanguage: function (language) {
    var params = {"location": "", "name": language.name};
    ApiUtil.fetchLanguages(params);
  },

  handleClick: function (event) {
    if (this.state.currentUser.id === undefined) {
      $(event.target).popover("show");
    } else {
      console.log("dude");
    }
  },

  render: function() {
    var that = this;
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
    var languages = this.props.languages.map(function (language, index) {
      return (
        <button type="button"
          onClick={that.searchLanguage.bind(null, language)}
          className="btn btn-info"
          key={index}>#{language.name}</button>);
    });
    return (
        <div >
          <div className="blog-header">
            <h1 className="blog-title">{this.props.title}</h1>
            <p className="lead blog-description">{this.props.location}</p>
            <label>Languages:</label>
            <br></br>
            <row>
              {languages}
            </row>
            <br></br>
            <br></br>
            <label>Rating:</label>
            <br></br>
            <row>
              {stars}
            </row>
          </div>

          <div className="row">
            <div className="col-md-12 blog-main">
              <div className="blog-post">
                <h2 className="blog-post-title">About</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="blog-post">
                <h2 className="blog-post-title">Reviews
                <a type="button"
                  tabIndex="0"
                  className="btn btn-primary review-button btn-sm"
                  data-toggle={this.state.currentUser.id === undefined ? "popover" : "modal"}
                  data-target="#myModal"
                  data-placement="left"
                  data-trigger="focus"
                  role="button"
                  data-content="Click the 'Login' button in the top right-hand corner to sign in as a Guest."
                  data-container="body"
                  title="You must be logged in to leave a Review."
                  onClick={this.handleClick}>
                  Add review
                </a>
                </h2>
                <Reviews reviews={this.state.reviews}/>
                <ReviewForm programID={this.props.id}/>
              </div>
            </div>
          </div>
        </div>
    );
  }

});

module.exports = SearchPanel;
