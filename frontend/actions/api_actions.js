var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receivePrograms: function (programs) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_PROGRAMS",
      programs: programs
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
    debugger
    AppDispatcher.dispatch({
      actionType: "RECEIVE_REVIEW",
      review: review
    });
  }

};

module.exports = ApiActions;
