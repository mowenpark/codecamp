var ApiActions = require('../actions/api_actions');

var SearchParamsStore = require('../stores/program');

var ApiUtil = {
	fetchPrograms: function(params) {
		$.get("/api/programs", params, function (programs) {
			ApiActions.receivePrograms(programs);
		});
	},

	fetchLocations: function () {
		$.get("/api/programs/new", function (locations) {
			ApiActions.receiveLocations(locations);
		});
	},

	fetchReviews: function (params) {
		$.get("/api/reviews", {program_id: params}, function (reviews) {
			ApiActions.receiveReviews(reviews);
		});
	}

};

module.exports = ApiUtil;
