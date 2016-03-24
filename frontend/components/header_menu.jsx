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
      <div className="collapse navbar-collapse" style={{textAlign: "center"}} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav" style={{display: "inline-block", float: "none"}}>
       <li className="dropdown dropdown-params">
         <div type="button" className="btn btn-default dropdown-toggle btn-search"
           data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.param} <span className="caret"></span>
        </div>
         <ul className="dropdown-menu">
           <li className="dropdown-menu-item" onClick={this.handleClick}><a>Programs</a></li>
           <li className="dropdown-menu-item" onClick={this.handleClick}><a>Companies</a></li>
           <li className="dropdown-menu-item" onClick={this.handleClick}><a>Languages</a></li>
         </ul>
       </li>
         <Search searchParam={this.state.param}/>
     </ul>
     <UserMenu />
   </div>
    );
  }

});

module.exports = HeaderMenu;
