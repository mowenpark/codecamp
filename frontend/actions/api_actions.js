var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receivePrograms: function (programs) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_PROGRAMS",
      programs: programs
    });
  }

};

module.exports = ApiActions;
