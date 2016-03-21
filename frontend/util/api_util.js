var React = require('react');
var ApiActions = require('../actions/api_actions'),
		ApplicationErrors = require('../components/errors.jsx');

var ApiUtil = {

	logout: function () {
		$.ajax({
			url: '/api/session',
			type: 'post',
			data: {_method: 'delete'},
			success: function() {
				window.location.replace("/#/signin");
				ApiActions.receiveCurrentUser({});
			},
			error: function () {
				window.location.replace("/#/signin");
				ApiActions.receiveCurrentUser({});
			}
		});
	},

	login: function (params) {
		$.ajax({
				type: "POST",
				url: "/api/session",
				data: params,
				success: function( data ) {
					window.location.replace("/#/users/" + data.id);
					ApiActions.receiveCurrentUser(data);
				},
				error: function(error){
					var errors = error.responseText;
	        ApiActions.receiveError(errors);
	 			}
			});
	},

	fetchCurrentUser: function () {
		$.ajax({
				type: "GET",
				url: "/api/users/new",
				success: function( data ) {
					ApiActions.receiveCurrentUser(data);
				}
			});
	},

	fetchUser: function (id) {
		$.ajax({
				type: "GET",
				url: "/api/users/"+id,
				data: {"id": id},
				success: function( data ) {
					ApiActions.receiveUser(data);
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
		$.get("/api/languages", params, function (programs) {
			window.location.replace("/#/languages");
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
				error: function (error) {
					ApiActions.receiveError(error);
				}
			});
	},

	fetchCompany: function (id) {
		$.get("/api/companies/"+id, {"id": id}, function (company) {
			ApiActions.receiveCompany(company);
		});
	},

	createUser: function (user) {
		$.ajax({
				type: "POST",
				url: "/api/users",
				data: user,
				success: function( data ) {
					window.location.replace("/#/users/" + data.id);
					ApiActions.receiveCurrentUser(data);
				}
			});
	},

	toggleFollow: function (id) {
		$.ajax({
			type: "POST",
			url: "/api/follows",
			data: {"id": id},
			success: function( data ) {
			}
		});
	}

};

module.exports = ApiUtil;
