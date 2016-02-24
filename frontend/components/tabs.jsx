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
        <span
          key={ index }
          className="panel panel-default"
          onClick={that.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </span>
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
    if (pane === undefined) {
      pane = {};
      pane["description"] = " ";
      pane["location"] = " ";
    }
    return (
      <div className="panel-body">
        <div class="panel-footer">Panel footer</div>
        <Headers
          selectedPane={this.state.selectedPane}
          onTabChosen={this.selectTab}
          panes={this.state.panes}>
        </Headers>
        <ul>
          <li>{pane.location}</li>
          <li>{pane.description}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Tabs;
