var React = require('react');

var Reviews = React.createClass({

  render: function() {
    var reviews = this.props.reviews.map( function (review, index) {
      return (
        <div key={index} className="panel panel-default">
          <div className="panel-heading">
            {review.title}
            <br></br>
            <small className="text-muted">{review.username} {review.dateCreated}</small>
          </div>
          <div className="panel-body">
            <p><strong>Pros:</strong></p>
            <div>{review.pros}</div>
            <br></br>
            <p><strong>Cons:</strong></p>
            <div>{review.cons}</div>
            <br></br>
            <p><strong>How they can improve:</strong></p>
            <div>{review.comments}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {reviews}
      </div>
    );
  }

});

module.exports = Reviews;
