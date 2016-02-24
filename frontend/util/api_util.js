var ApiActions = require('../actions/api_actions');

var SearchParamsStore = require('../stores/search_params');

var ApiUtil = {
	fetchPrograms: function(params) {
		$.get("api/programs", params, function (programs) {
      ApiActions.receivePrograms(programs);
		});
	}

};

module.exports = ApiUtil;
