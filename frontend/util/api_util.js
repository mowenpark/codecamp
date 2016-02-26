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
	},

	addReview: function (results) {
		$.ajax({
			  type: "POST",
			  url: "/api/reviews",
			  data: results,
			  success: function( data ) {
					ApiActions.updateReviews(data);
				},
				error: function ( error ) {
					debugger;
				},
			});
	}

};

module.exports = ApiUtil;
