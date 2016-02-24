var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ProgramsStore = new Store(AppDispatcher);

var _programs = [{title: '', description: '', location: ''}];

var resetPrograms = function(programs){
  _programs = programs.slice(0);
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
  }
};

module.exports = ProgramsStore;
