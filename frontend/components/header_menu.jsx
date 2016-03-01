var React = require('react');

var UserMenu = require('./user_menu'),
    Search = require('./search');

var HeaderMenu = React.createClass({
  getInitialState: function () {
    return {
      param: "Programs"
    };
  },

  handleClick: function (e) {
    this.setState({param: e.target.innerHTML});
  },

  render: function() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
       <li className="dropdown">
         <a href="#" className="dropdown-toggle"
           data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.param} <span className="caret"></span></a>
         <ul className="dropdown-menu">
           <li onClick={this.handleClick}><a href="#">Programs</a></li>
           <li onClick={this.handleClick}><a href="#">Companies</a></li>
           <li onClick={this.handleClick}><a href="#">Languages</a></li>
         </ul>
       </li>
     </ul>
     <Search searchParam={this.state.param}/>
     <UserMenu />
   </div>
    );
  }

});

module.exports = HeaderMenu;
