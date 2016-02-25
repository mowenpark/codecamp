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
    debugger;
    AppDispatcher.dispatch({
      actionType: "RECEIVE_REVIEWS",
      reviews: reviews
    });
  }

};

module.exports = ApiActions;
