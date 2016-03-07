var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">this is the footer</p>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
