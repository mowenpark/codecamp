var React = require('react');

var NavBarMain = require('./navbar_main');

var User = React.createClass({

  render: function() {
    return (
        <div className="container">
            <div className="fb-profile">
                <img align="left" className="fb-image-lg" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_280,w_850/v1456770320/flowers-desk-office-vintage_dy19o8_jfhnu3.jpg" alt="Profile image example"/>
                <img align="left" className="fb-image-profile thumbnail" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_180,w_180/v1456770578/820C3ABDED_mrrhma_yaui0w.jpg" alt="Profile image example"/>
                <div className="fb-profile-text">
                    <h1>Eli Macy</h1>
                    <p>Girls just wanna have fun.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blog-header">
                  <p className="lead blog-description">Bio</p>
                </div>
                <div className="blog-post">
                  <p>bio text</p>
                </div>
              </div>
              <div className="col-md-8">
                <h3>Bootcamp Activity Feed</h3>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,h_64/v1456771323/photo_1_tmllrc.png" alt="..."></img>
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">App Academy</h4>
                    <p>some activity text</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,h_64/v1456772380/hack_p3vsaj.webp" alt="..."></img>
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Hack Reactor</h4>
                    <p>some bad activity text</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }

});

module.exports = User;
