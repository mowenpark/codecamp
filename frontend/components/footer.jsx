var React = require('react');

var Footer = React.createClass({

  backToTop: function () {
    $('html,body').animate({scrollTop:0},'slow');
  },

  render: function() {
    return (


      <footer className="footer">
        <div className="container">
          <p className="pull-right text-muted" onClick={this.backToTop}><a href="javascript:;">Back to top</a></p>
          <p className="text-muted">&copy; 2016 Company, Inc. &middot; <a href="https://www.linkedin.com/in/mowenpark">About</a></p>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
