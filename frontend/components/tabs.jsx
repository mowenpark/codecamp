var React = require('react');

var ProgramsStore = require('../stores/program');

var Headers = React.createClass({
  render: function () {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.panes.map(function (pane, index) {
      var title = pane.title;
      var klass = "";
      if (index === selected) {
        klass = "active";
      }

      return (
        <li
          key={ index }
          className="nav nav-pills nav-item nav-link"
          onClick={that.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className="nav nav-pills nav-stacked">
        {headers}
      </ul>

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
          <ul className="nav navbar-right search-panel">
            <li className="">{pane.location}</li>
            <li className="">{pane.description}</li>
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
});

module.exports = Tabs;
