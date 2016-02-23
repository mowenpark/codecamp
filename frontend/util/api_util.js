var ApiActions = require('../actions/api_actions');

var SearchParamsStore = require('../stores/search_params');

var ApiUtil = {
	fetchAllPrograms: function() {
    var query = SearchParamsStore.params();
		$.get("api/programs", query, function (e) {
			console.log(e);
		});
	}

};

module.exports = ApiUtil;
