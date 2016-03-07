var React = require('react');

var Reviews = React.createClass({

  render: function() {
    var reviews = this.props.reviews.map( function (review, index) {
      return (
        <div key={index} className="panel panel-default">
          <div className="panel-heading">
            <div className="media-left">
              <a href={"/#/users/" + review.id}>
                <img className="media-object" style={{"height" : "50%", "width" : "50%"}} src={review.profile_pic} alt="Reviewer profile image"></img>
              </a>
            </div>
            {review.title}
            <br></br>
            <small className="text-muted"><a href={"/#/users/" + review.id}>{review.username}</a> {review.dateCreated}</small>
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
