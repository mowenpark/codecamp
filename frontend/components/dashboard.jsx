var React = require('react'),
    ApiUtil = require('../util/api_util');

var Dashboard = React.createClass({

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
                  <p>Codecamp helps you find the web development bootcamp that's right for you. Locations, descriptions and reviews are available for bootcamps around the US. Click below to begin your first search.</p>
                  <p><a className="btn btn-lg btn-primary" href="/#/programs" role="button">Search</a></p>
                </div>
              </div>
          </div>
          <div className="item">
            <div className="second-slide"></div>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Didn't find what you were looking for?</h1>
                  <p>Try searching by Company or by a specific language. Codecamp will try to match your input, even if it is incomplete. Give it a try! Click below to search by Company.</p>
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
            <img className="img-circle" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>github</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-default" href="https://github.com/mowenpark" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s900-c-k-no/photo.jpg" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Linkedin</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a className="btn btn-default" href="https://www.linkedin.com/in/mowenpark" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/v1457329886/Screen_Shot_2016-03-06_at_9.50.52_PM_cny0ex.png" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Blog</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-default" href="http://mowenpark.tumblr.com" role="button">View details &raquo;</a></p>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = Dashboard;
