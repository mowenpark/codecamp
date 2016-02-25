var React = require('react');
var Reviews = require('./reviews');

var SearchPanel = React.createClass({

  render: function() {
    return (
        <div className="container">

          <div className="blog-header">
            <h1 className="blog-title">{this.props.title}</h1>
            <p className="lead blog-description">{this.props.location}</p>
          </div>

          <div className="row">
            <div className="col-md-8 blog-main">
              <div className="blog-post">
                <h2 className="blog-post-title">About</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="blog-post">
                <h2 className="blog-post-title">Reviews</h2>
                <Reviews programID={this.props.id}/>
                <button type="button" className="btn btn-primary">Create Review</button>
              </div>
            </div>
          </div>
        </div>
    );
  }

});

module.exports = SearchPanel;
