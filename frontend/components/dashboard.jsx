var React = require('react');
var PropTypes = React.PropTypes;

var Dashboard = React.createClass({

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
            <img className="first-slide" src=""></img>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Welcome to codecamp!</h1>
                  <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                  <p><a className="btn btn-lg btn-primary" href="/#/signin" role="button">Sign in</a></p>
                </div>
              </div>
          </div>
          <div className="item">
            <img className="second-slide" src=""></img>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
          </div>
          <div className="item">
            <img className="third-slide" src=""></img>
              <div className="carousel-caption">
                <div className="hero">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
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
