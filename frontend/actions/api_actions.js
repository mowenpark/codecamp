var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receiveError: function (errors) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_ERRORS",
      errors: errors
    });
  },

  receivePrograms: function (programs) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_PROGRAMS",
      programs: programs
    });
  },

  receiveCompanies: function (companies) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_COMPANIES",
      companies: companies
    });
  },

  receiveLocations: function (locations) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_LOCATIONS",
      locations: locations
    });
  },

  receiveReviews: function (reviews) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_REVIEWS",
      reviews: reviews
    });
  },

  updateReviews: function (review) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_REVIEW",
      review: review
    });
  },

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_CURRENT_USER",
      user: user
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_USER",
      user: user
    });
  },

  receiveCompany: function (company) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_COMPANY",
      company: company
    });
  }

};

module.exports = ApiActions;
