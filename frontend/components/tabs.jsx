var React = require('react');

var ProgramsStore = require('../stores/program'),
    ApiUtil = require('../util/api_util'),
    SearchPanel = require('./search_panel'),
    Errors = require("./errors");

var Headers = React.createClass({
  render: function () {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.panes.map(function (pane, index) {
      var title = pane.title;
      var short = pane.description.slice(0,50);
      var logo = pane.logo;
      var klass = "";
      if (index === selected) {
        klass = "active";
      }

      return (
            <div
              key={ index }
              className={klass + " thumbnail"}
              onClick={that.props.onTabChosen.bind(null, index)}>
              <img className="media-object" src={logo} />
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
            <div className="col-md-4">
              <Headers
                selectedPane={this.state.selectedPane}
                onTabChosen={this.selectTab}
                panes={this.state.panes}>
              </Headers>
            </div>
            <div className="col-md-8">
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
