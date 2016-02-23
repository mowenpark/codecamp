var ApiActions = require('../actions/api_actions');

var ApiUtil = {
	fetchPrograms: function() {
		$.get("api/programs", {}, function (e) {
			console.log(e);
		});
	}

};

module.exports = ApiUtil;
