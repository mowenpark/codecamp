var React = require('react');
var ApiActions = require('../actions/api_actions'),
		ApplicationErrors = require('../components/errors.jsx');

var ApiUtil = {

	logout: function () {
		$.ajax({
			url: '/session',
			type: 'post',
			data: {_method: 'delete'},
			success: function() {
				window.location.replace("/session/new");
			}
		});
	},

	login: function (params) {
		$.ajax({
				type: "POST",
				url: "/session",
				data: params,
				success: function( data ) {
					window.location.replace("/#/users/27");
				}
			});
	},

	fetchPrograms: function(params) {
		$.get("/api/programs", params, function (programs) {
			window.location.replace("/#/programs");
			ApiActions.receivePrograms(programs);
		});
	},

	fetchCompanies: function(params) {
		$.get("/api/companies", params, function (companies) {
			window.location.replace("/#/companies");
			ApiActions.receiveCompanies(companies);
		});
	},

	fetchLanguages: function(params) {
		$.get("/api/programs", params, function (programs) {
			ApiActions.receiveLanguages(programs);
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
					window.location.replace("/#/search");
					ApiActions.updateReviews(data);
				}
			});
	}

};

module.exports = ApiUtil;
