var React = require('react');

var NavBarMain = require('./navbar_main'),
    ApiUtil = require('../util/api_util'),
    CurrentUserStore = require('../stores/current_user'),
    UserStore = require('../stores/user'),
    Reviews = require("./reviews");

var User = React.createClass({
  getInitialState: function () {
    return{
      user: UserStore.all(),
      currentUser: CurrentUserStore.all(),
    };
  },

  componentDidMount: function () {
    this.token = CurrentUserStore.addListener(this.renderCurrentUser);
    this.token2 = UserStore.addListener(this.renderUser);
    ApiUtil.fetchUser(this.props.params.id);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(newProps.params.id);
  },

  componentWillUnmount: function () {
    this.token.remove();
    this.token2.remove();
  },

  renderCurrentUser: function () {
    this.setState({currentUser: CurrentUserStore.all()});
  },

  renderUser: function () {
    this.setState({ user: UserStore.all() });
  },

  render: function() {
    var id = parseInt(this.props.params.id);
    if (this.state.currentUser.id === id) {
      var feed = this.state.currentUser.feed.map(function (feedItem, index) {
        return(
          <li className="news-item">
          <table cellPadding="4">
            <tbody>
          <tr>
          <td><img src="images/1.png" width="60" className="img-circle" /></td>
          <td>{feedItem.title}</td>
          <td><a href="#"> Read more...</a></td>
          </tr>
        </tbody>
          </table>
          </li>
        );
      });
      return (
          <div className="container">
              <div className="fb-profile">
                  <img align="left" className="fb-image-lg" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_280,w_850/v1456770320/flowers-desk-office-vintage_dy19o8_jfhnu3.jpg" alt="Profile image example"/>
                  <img align="left" className="thumbnail fb-image-profile" src={this.state.currentUser.profile_pic} alt="Profile image example"/>
                  <div align="right" className="fb-profile-text">
                      <h1>{this.state.currentUser.name}</h1>
                      <p>{this.state.currentUser.location}</p>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="blog-header">
                    <p className="lead blog-description">Bio</p>
                  </div>
                  <div className="blog-post">
                    <p>{this.state.currentUser.bio}</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="blog-header">
                    <p className="lead blog-description">Activity Feed</p>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading"> <span className="glyphicon glyphicon-list-alt"></span><b>News</b></div>
                    <div className="panel-body">
                    <div className="row">
                    <div className="col-xs-12">
                    <ul className="demo">

                      {feed}

                    </ul>
                    </div>
                    </div>
                    </div>
                    <div className="panel-footer"> </div>
                    </div>
                </div>
              </div>
          </div>
        );
      } else {
        var reviews;
        if (this.state.user.reviews === undefined){
          reviews = <div />;
        } else {
          reviews = <Reviews reviews={this.state.user.reviews} />;
        }
        return(
          <div className="container">
              <div className="fb-profile">
                  <img align="left" className="fb-image-lg" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_280,w_850/v1456770320/flowers-desk-office-vintage_dy19o8_jfhnu3.jpg" alt="Profile image example"/>
                  <img align="left" className="thumbnail fb-image-profile" src={this.state.user.profile_pic} alt="Profile image example"/>
                  <div align="right" className="fb-profile-text">
                      <h1>{this.state.user.name}</h1>
                      <p>{this.state.user.location}</p>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="blog-header">
                    <p className="lead blog-description">Bio</p>
                  </div>
                  <div className="blog-post">
                    <p>{this.state.user.bio}</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="blog-header">
                    <p className="lead blog-description">Reviews</p>
                  </div>
                  {reviews}
                </div>
              </div>
          </div>
        );
      }
  }

});

module.exports = User;
