var React = require('react');
var ApiActions = require('../actions/api_actions'),
		ApplicationErrors = require('../components/errors.jsx');

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

	addReview: function (results, callback) {
		$.ajax({
			  type: "POST",
			  url: "/api/reviews",
			  data: results,
			  success: function( data ) {
					ApiActions.updateReviews(data);
				},
				error: function ( errors ) {
					callback(errors);
				},
			});
	}

};

module.exports = ApiUtil;
