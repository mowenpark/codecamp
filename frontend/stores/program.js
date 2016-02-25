var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ProgramsStore = new Store(AppDispatcher);

var _programs = [];

var _locations = [];

var resetPrograms = function(programs){
  _programs = programs.slice(0);
};

var changeLocations = function (locations) {
  _locations = locations.locations.slice(0);
};

ProgramsStore.locations = function () {
  return _locations.slice(0);
};

ProgramsStore.all = function () {
  return _programs.slice(0);
};

ProgramsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_PROGRAMS":
      resetPrograms(payload.programs);
      ProgramsStore.__emitChange();
      break;
    case "RECEIVE_LOCATIONS":
      changeLocations(payload.locations);
      ProgramsStore.__emitChange();
      break;
  }
};

module.exports = ProgramsStore;
