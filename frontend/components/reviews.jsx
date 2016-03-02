var React = require('react');

var Reviews = React.createClass({

  render: function() {
    var reviews = this.props.reviews.map( function (review, index) {
      return (
        <div key={index} className="panel panel-default">
          <div className="panel-heading">
            <div className="media-left">
              <a href="#">
                <img className="media-object" src="http://res.cloudinary.com/dtdgkk9aa/image/upload/c_scale,h_64/v1456883189/820C3ABDED_mrrhma_yaui0w_c6jjua.jpg" alt="..."></img>
              </a>
            </div>
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
