var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted"><a href="https://www.linkedin.com/in/mowenpark">About</a></p>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
