var React = require('react');

var ProgramsStore = require('../stores/program'),
    SearchPanel = require('./search_panel');

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
      <div className="col-sm-6 col-md-3">
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
        <div className="container-fluid search-results">
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.state.panes}>
          </Headers>
          <div className="search-panel">
            <SearchPanel
              languages={pane.languages}
              location={pane.location}
              description={pane.description}
              title={pane.title}
              id={pane.id}>
            </SearchPanel>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
});

module.exports = Tabs;
