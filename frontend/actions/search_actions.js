var AppDispatcher = require('../dispatcher/dispatcher');


var SearchActions = {

  updateName: function (name) {
    AppDispatcher.dispatch({
      actionType: "UPDATE_NAME",
      name: name
    });
  },

  updateLocation: function (locaiton){
    AppDispatcher.dispatch({
      actionType: "UPDATE_LOCATION",
      locaiton: locaiton,
    });
  },

};

module.exports = SearchActions;
