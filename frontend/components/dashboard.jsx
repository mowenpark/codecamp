var React = require('react'),
    ApiUtil = require('../util/api_util');

var Dashboard = React.createClass({

  searchPrograms: function () {
    var params = {"location": "", "name": ""};
    ApiUtil.fetchPrograms(params);
  },

  searchCompany: function () {
    var params = {"location": "", "name": ""};
    ApiUtil.fetchCompanies(params);
  },

  render: function() {
    return (
      <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="first-slide"></div>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Welcome to codecamp!</h1>
                  <p>Codecamp helps you find the web development bootcamp that is
                    right for you. Locations, descriptions and reviews are available
                    for bootcamps around the US. Click below to begin your first search.</p>
                  <p><a className="btn btn-lg btn-primary" onClick={this.searchPrograms} role="button">Search</a></p>
                </div>
              </div>
          </div>
          <div className="item">
            <div className="second-slide"></div>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Try searching by Company or by a specific language</h1>
                  <p>Codecamp will try to match your input, even if it is incomplete. Give it a try! Click below to search by Company.</p>
                  <p><a className="btn btn-lg btn-primary" onClick={this.searchCompany} role="button">Companies</a></p>
                </div>
              </div>
          </div>
          <div className="item">
            <div className="third-slide"></div>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Already in a bootcamp?</h1>
                  <p>Great! Sign up to share your experiences with others by leaving helpful reviews about your specific program. Users are able to rate their bootcamp and leave comments how they might improve. Click the Sign up link below to get started.</p>
                  <p><a className="btn btn-lg btn-primary" href="/#/signup" role="button">Sign up</a></p>
                </div>
              </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img className="img-circle" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="github" width="140" height="140"></img>
            <h2>github</h2>
            <p>Github is my primary dev platform. This said, I have a few projects hosted there, and they're all maintained. Click to see some of my past and current endeavors.</p>
            <p><a className="btn btn-default" href="https://github.com/mowenpark" role="button">Read more &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s900-c-k-no/photo.jpg" alt="linkedin" width="140" height="140"></img>
            <h2>Linkedin</h2>
            <p>I’m a software developer with experience in Ruby, JavaScript and React.js, and a background in biology. Click below for details on my projects, experience, and education.</p>
            <p><a className="btn btn-default" href="https://www.linkedin.com/in/mowenpark" role="button">Read more &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/v1457329886/Screen_Shot_2016-03-06_at_9.50.52_PM_cny0ex.png" alt="tumblr blog" width="140" height="140"></img>
            <h2>Blog</h2>
            <p>Interested in my experiences at App Academy? Check out my blog, 'The Wandering Programmer' where I jot down my thoughts on the day-to-day life at one of SF's top web development bootcamps.</p>
            <p><a className="btn btn-default" href="http://mowenpark.tumblr.com" role="button">Read more &raquo;</a></p>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = Dashboard;
