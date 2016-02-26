var React = require('react');
var PropTypes = React.PropTypes;

var ReviewForm = React.createClass({

  render: function() {
    return (
      <form onSubmit="">
        <fieldset className="form-group">
          <label for="exampleTextarea">Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="1">
          </textarea>
        </fieldset>
        <fieldset className="form-group">
          <label for="exampleTextarea">Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="3">
          </textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

});

module.exports = ReviewForm;
