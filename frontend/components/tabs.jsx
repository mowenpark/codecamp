var React = require('react');

var ProgramsStore = require('../stores/program'),
    ApiUtil = require('../util/api_util'),
    SearchPanel = require('./search_panel'),
    Errors = require("./errors"),
    CurrentUserStore = require("../stores/current_user");

var Headers = React.createClass({
  getInitialState: function () {
    return{
      followStatus: false,
      currentUser: CurrentUserStore.all()
    };
  },

  follow: function (pane, event) {
    event.preventDefault();
    if (this.state.currentUser.id === undefined) {
      $(event.currentTarget).popover("show");
    } else if (pane.followed) {
      ApiUtil.unFollow(pane.id);
      pane.followed = false;
      $(event.target).removeClass('glyphicon-heart');
      $(event.target).addClass('glyphicon-heart-empty');
    } else {
      ApiUtil.follow(pane.id);
      pane.followed = true;
      $(event.target).removeClass('glyphicon-heart-empty');
      $(event.target).addClass('glyphicon-heart');
    }
  },

  render: function () {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.panes.map(function (pane, index) {
      var title = pane.title;
      var short = pane.description.slice(0,50) + "...";
      var logo = pane.logo;
      var follow = (pane.followed) ? "glyphicon glyphicon-heart" : "glyphicon glyphicon-heart-empty";
      var klass = "";
      if (index === selected) {
        klass = "active";
      }

      return (
            <div
              key={ index }
              className={klass + " thumbnail"}
              onClick={that.props.onTabChosen.bind(null, index)}>
              <a data-toggle="popover" data-trigger="focus"
                tabIndex="0"
                role="button"
                data-content="Click the 'Login' button in the top right-hand corner to sign in as a Guest."
                data-container="body"
                title="You must be logged in to Follow a Program."
                onClick={that.follow.bind(null, pane)}
                className="follow">
                <span className={follow} aria-hidden="true"></span>
              </a>
                <img className="media-object" src={logo} >
                </img>
              <div className="caption" >
                <h3>{title}</h3>
                <p>{short}</p>
              </div>
            </div>
      );
    });
    return (
      <div>
        {headers}
      </div>

    );
 }
});

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      selectedPane: 0,
      panes: ProgramsStore.all()
    };
  },

  componentDidMount: function () {
    this.token = ProgramsStore.addListener(this.renderPanes);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  renderPanes: function () {
    this.setState({panes: ProgramsStore.all()});
  },

  selectTab: function (num) {
    this.setState({selectedPane: num});
  },
  render: function () {
    var pane = this.state.panes[this.state.selectedPane];
    if (pane !== undefined) {
      return (
        <div className="container">
          <Errors />
          <div className="row">
            <div className="col-md-4" id="left">
              <Headers
                selectedPane={this.state.selectedPane}
                onTabChosen={this.selectTab}
                panes={this.state.panes}>
              </Headers>
            </div>
            <div className="col-md-8" id="right">
              <SearchPanel
                languages={pane.languages}
                location={pane.location}
                description={pane.description}
                title={pane.title}
                id={pane.id}>
              </SearchPanel>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="page-header">
            <h1><small>No results</small></h1>
          </div>
        </div>
      );
    }
  }
});

module.exports = Tabs;
