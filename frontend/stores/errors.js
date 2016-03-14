var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ErrorsStore = new Store(AppDispatcher);

var _errors = [];

var resetErrors = function(errors){
  _errors = [];
  _errors.push(errors);
};

ErrorsStore.all = function () {
  return _errors.slice();
};

ErrorsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_ERRORS":
      resetErrors(payload.errors);
      ErrorsStore.__emitChange();
      break;
  }
};

module.exports = ErrorsStore;
