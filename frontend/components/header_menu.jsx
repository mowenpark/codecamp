var React = require('react');

var Search = require('./search');

var HeaderMenu = React.createClass({
  getInitialState: function () {
    return {
      param: "programs"
    };
  },

  handleClick: function (e) {
    this.setState({param: e.target.value});
  },

  render: function() {
    return (
      <div>
        <div className="btn-group btn-group-justified" role="group">
          <div className="btn-group" role="group">
            <button type="button" onClick={this.handleClick} className="btn btn-success-outline">Programs</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" onClick={this.handleClick} className="btn btn-success-outline">Companies</button>
          </div>
          <div className="btn-group" role="group">
            <button type="button" onClick={this.handleClick} className="btn btn-success-outline">Languages</button>
          </div>
        </div>
        <br></br>
        <Search searchParam={this.state.param}/>
      </div>
    );
  }

});

module.exports = HeaderMenu;
