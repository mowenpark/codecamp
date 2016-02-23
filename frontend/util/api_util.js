var ApiActions = require('../actions/api_actions');

var ApiUtil = {
	fetchBenches: function(bounds) {
		$.get("api/descriptions", bounds, function (e) {
			ApiActions.receiveAll(e);
		});
	},

	createBench: function (e) {
		$.post("api/descriptions/new", e, function (data) {
			ApiActions.newBench(data);
		});
	}

};

module.exports = ApiUtil;
