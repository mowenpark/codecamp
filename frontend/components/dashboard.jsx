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
            <img className="first-slide" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/v1456856395/people-coffee-notes-tea_ziykz4.jpg" alt="First slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Example headline.</h1>
                  <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="second-slide" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/v1456855670/coffee-apple-iphone-desk_i1uriy.jpg" alt="Second slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <div className="hero">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <img className="third-slide" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/v1456770075/flowers-desk-office-vintage_dy19o8.jpg" alt="Third slide"></img>
            <div className="container">
              <div className="carousel-caption">
                <div className="hero">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                </div>
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
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = Dashboard;
